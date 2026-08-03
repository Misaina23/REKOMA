import { createFileRoute, redirect } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { showError, showInfo, showSuccess } from "@/lib/alerts";
import {
  ADMIN_ALLOWED_USERS,
  clearAdminCodeState,
  getStoredAdminLoginCode,
  getStoredAdminSession,
  setStoredAdminSession,
  storeAdminLoginCode,
} from "@/lib/admin-auth";
import { useI18n } from "@/lib/i18n";
import { getCsrfToken } from "@/lib/csrf";

export const Route = createFileRoute("/admin/login")({
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      const existingSession = getStoredAdminSession();
      if (existingSession) {
        throw redirect({ to: "/admin" });
      }
    }
  },
  component: AdminLogin,
});

function AdminLogin() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"credentials" | "code">("credentials");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const allowedEmails = useMemo(() => ADMIN_ALLOWED_USERS.map((user) => user.email), []);

  const sendCode = async (targetEmail: string) => {
    const digits = String(Math.floor(1000 + Math.random() * 9000));
    const expiresAt = Date.now() + 5 * 60 * 1000;
    storeAdminLoginCode(digits, expiresAt);

    try {
      const response = await fetch(`${window.location.origin}/api/notify-admin-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": getCsrfToken(),
        },
        body: JSON.stringify({ email: targetEmail, code: digits }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        fallback?: boolean;
        message?: string;
      };

      if (!response.ok && !data.fallback) {
        throw new Error(data?.message ?? "Failed to send verification code");
      }

      return {
        code: digits,
        fallback: Boolean(data.fallback),
        message: data.message,
      };
    } catch {
      throw new Error("Failed to send verification code");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (step === "credentials") {
        const user = ADMIN_ALLOWED_USERS.find((candidate) => candidate.email === email.trim());
        if (!user || password !== user.password) {
          setError(t({ fr: "Identifiants incorrects", en: "Incorrect credentials" }));
          await showError(
            t({ fr: "Accès refusé", en: "Access denied" }),
            t({
              fr: "L’e-mail ou le mot de passe est incorrect.",
              en: "The email or password is incorrect.",
            }),
          );
          return;
        }

        let codeResult;
        try {
          codeResult = await sendCode(user.email);
        } catch (error) {
          const message = error instanceof Error ? error.message : "";
          setError(
            t({
              fr: "Impossible d'envoyer le code par e-mail.",
              en: "Failed to send the verification code by email.",
            }),
          );
          await showError(
            t({ fr: "Erreur d'envoi", en: "Send error" }),
            message ||
              t({
                fr: "La connexion à l'administration est temporairement indisponible. Réessayez plus tard.",
                en: "Admin login is temporarily unavailable. Please try again later.",
              }),
          );
          return;
        }
        setStep("code");
        if (codeResult.fallback) {
          await showInfo(
            t({ fr: "Code de vérification", en: "Verification code" }),
            `${codeResult.message ?? t({ fr: "Utilisez ce code :", en: "Use this code:" })} ${codeResult.code}`,
          );
        } else {
          await showSuccess(
            t({ fr: "Code envoyé", en: "Code sent" }),
            t({
              fr: "Un code à 4 chiffres a été envoyé à votre adresse e-mail.",
              en: "A 4-digit code was sent to your email address.",
            }),
          );
        }
        return;
      }

      const storedCode = getStoredAdminLoginCode();
      if (!storedCode || code !== storedCode.code) {
        setError(t({ fr: "Code de vérification invalide", en: "Invalid verification code" }));
        await showError(
          t({ fr: "Code incorrect", en: "Incorrect code" }),
          t({
            fr: "Le code fourni est invalide ou a expiré.",
            en: "The provided code is invalid or has expired.",
          }),
        );
        return;
      }

      setStoredAdminSession(email.trim());
      await showSuccess(t({ fr: "Connexion réussie", en: "Login successful" }));
      const redirectTo = new URLSearchParams(window.location.search).get("from") ?? "/admin";
      window.location.assign(redirectTo);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            {t({ fr: "Administration", en: "Administration" })}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {t({ fr: "Accès sécurisé", en: "Secure access" })}
          </p>
        </div>
        {error && <p className="text-sm text-destructive text-center">{error}</p>}
        <div className="space-y-2">
          <Label htmlFor="email">{t({ fr: "E-mail", en: "Email" })}</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder={t({ fr: "votre@email.com", en: "you@example.com" })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">{t({ fr: "Mot de passe", en: "Password" })}</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-9 w-9 text-muted-foreground hover:text-foreground"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </Button>
          </div>
        </div>
        {step === "code" ? (
          <div className="space-y-2">
            <Label htmlFor="code">{t({ fr: "Code de vérification", en: "Verification code" })}</Label>
            <Input
              id="code"
              inputMode="numeric"
              maxLength={4}
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
              required
              placeholder="1234"
            />
            <div className="rounded-lg border border-amber-300/70 bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:border-amber-500/40 dark:bg-amber-950/30 dark:text-amber-200">
              <p className="font-medium">
                {t({
                  fr: "Le code a été affiché dans une alerte juste après la connexion.",
                  en: "The verification code was shown in an alert right after login.",
                })}
              </p>
              <p className="mt-1">
                {t({
                  fr: "Si l’e-mail n’arrive pas, utilisez ce code directement dans ce champ.",
                  en: "If the email does not arrive, use this code directly in this field.",
                })}
              </p>
            </div>
          </div>
        ) : null}
        <Button type="submit" className="w-full" disabled={loading}>
          {step === "code"
            ? t({ fr: "Valider le code", en: "Validate code" })
            : t({ fr: "Se connecter", en: "Log in" })}
        </Button>
        <div className="rounded-xl border border-border/70 bg-muted/40 p-3 text-xs text-muted-foreground">
          <p className="font-medium text-foreground">
            {t({ fr: "Comptes autorisés", en: "Authorized accounts" })}
          </p>
          <ul className="mt-2 space-y-1">
            {allowedEmails.map((allowedEmail) => (
              <li key={allowedEmail}>• {allowedEmail}</li>
            ))}
          </ul>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          <Link to="/" className="underline underline-offset-4">
            {t({ fr: "Retour au site", en: "Back to site" })}
          </Link>
        </p>
      </form>
    </div>
  );
}
