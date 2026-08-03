import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./utils-BiYSywJx.mjs";
import { H as Eye, U as EyeOff } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-Cs3-OmTj.mjs";
import { t as Input } from "./input-CS4HctI8.mjs";
import { i as showSuccess, n as showError, r as showInfo } from "./alerts-FKPi0eTV.mjs";
import { t as getCsrfToken } from "./csrf-Bg1sT1bJ.mjs";
import { t as Label } from "./label-ldTRt_TZ.mjs";
import { a as setStoredAdminSession, o as storeAdminLoginCode, r as getStoredAdminLoginCode, t as ADMIN_ALLOWED_USERS } from "./admin-auth-JTTyccoN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-DMPme_Q_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLogin() {
	const { t } = useI18n();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [code, setCode] = (0, import_react.useState)("");
	const [step, setStep] = (0, import_react.useState)("credentials");
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const allowedEmails = (0, import_react.useMemo)(() => ADMIN_ALLOWED_USERS.map((user) => user.email), []);
	const sendCode = async (targetEmail) => {
		const digits = String(Math.floor(1e3 + Math.random() * 9e3));
		storeAdminLoginCode(digits, Date.now() + 300 * 1e3);
		try {
			const response = await fetch(`${window.location.origin}/api/notify-admin-login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-csrf-token": getCsrfToken()
				},
				body: JSON.stringify({
					email: targetEmail,
					code: digits
				})
			});
			const data = await response.json().catch(() => ({}));
			if (!response.ok && !data.fallback) throw new Error(data?.message ?? "Failed to send verification code");
			return {
				code: digits,
				fallback: Boolean(data.fallback),
				message: data.message
			};
		} catch {
			throw new Error("Failed to send verification code");
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			if (step === "credentials") {
				const user = ADMIN_ALLOWED_USERS.find((candidate) => candidate.email === email.trim());
				if (!user || password !== user.password) {
					setError(t({
						fr: "Identifiants incorrects",
						en: "Incorrect credentials"
					}));
					await showError(t({
						fr: "Accès refusé",
						en: "Access denied"
					}), t({
						fr: "L’e-mail ou le mot de passe est incorrect.",
						en: "The email or password is incorrect."
					}));
					return;
				}
				let codeResult;
				try {
					codeResult = await sendCode(user.email);
				} catch (error) {
					const message = error instanceof Error ? error.message : "";
					setError(t({
						fr: "Impossible d'envoyer le code par e-mail.",
						en: "Failed to send the verification code by email."
					}));
					await showError(t({
						fr: "Erreur d'envoi",
						en: "Send error"
					}), message || t({
						fr: "La connexion à l'administration est temporairement indisponible. Réessayez plus tard.",
						en: "Admin login is temporarily unavailable. Please try again later."
					}));
					return;
				}
				setStep("code");
				if (codeResult.fallback) await showInfo(t({
					fr: "Code de vérification",
					en: "Verification code"
				}), `${codeResult.message ?? t({
					fr: "Utilisez ce code :",
					en: "Use this code:"
				})} ${codeResult.code}`);
				else await showSuccess(t({
					fr: "Code envoyé",
					en: "Code sent"
				}), t({
					fr: "Un code à 4 chiffres a été envoyé à votre adresse e-mail.",
					en: "A 4-digit code was sent to your email address."
				}));
				return;
			}
			const storedCode = getStoredAdminLoginCode();
			if (!storedCode || code !== storedCode.code) {
				setError(t({
					fr: "Code de vérification invalide",
					en: "Invalid verification code"
				}));
				await showError(t({
					fr: "Code incorrect",
					en: "Incorrect code"
				}), t({
					fr: "Le code fourni est invalide ou a expiré.",
					en: "The provided code is invalid or has expired."
				}));
				return;
			}
			setStoredAdminSession(email.trim());
			await showSuccess(t({
				fr: "Connexion réussie",
				en: "Login successful"
			}));
			const redirectTo = new URLSearchParams(window.location.search).get("from") ?? "/admin";
			window.location.assign(redirectTo);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "w-full max-w-sm space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold",
						children: t({
							fr: "Administration",
							en: "Administration"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: t({
							fr: "Accès sécurisé",
							en: "Secure access"
						})
					})]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-destructive text-center",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "email",
						children: t({
							fr: "E-mail",
							en: "Email"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						required: true,
						autoComplete: "email",
						placeholder: t({
							fr: "votre@email.com",
							en: "you@example.com"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "password",
						children: t({
							fr: "Mot de passe",
							en: "Password"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "password",
							type: showPassword ? "text" : "password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							required: true,
							autoComplete: "current-password",
							className: "pr-10"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon",
							className: "absolute right-0 top-0 h-9 w-9 text-muted-foreground hover:text-foreground",
							onClick: () => setShowPassword((prev) => !prev),
							children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
						})]
					})]
				}),
				step === "code" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "code",
							children: t({
								fr: "Code de vérification",
								en: "Verification code"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "code",
							inputMode: "numeric",
							maxLength: 4,
							value: code,
							onChange: (e) => setCode(e.target.value.replace(/\D/g, "")),
							required: true,
							placeholder: "1234"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-amber-300/70 bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:border-amber-500/40 dark:bg-amber-950/30 dark:text-amber-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: t({
									fr: "Le code a été affiché dans une alerte juste après la connexion.",
									en: "The verification code was shown in an alert right after login."
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: t({
									fr: "Si l’e-mail n’arrive pas, utilisez ce code directement dans ce champ.",
									en: "If the email does not arrive, use this code directly in this field."
								})
							})]
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "w-full",
					disabled: loading,
					children: step === "code" ? t({
						fr: "Valider le code",
						en: "Validate code"
					}) : t({
						fr: "Se connecter",
						en: "Log in"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border/70 bg-muted/40 p-3 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-foreground",
						children: t({
							fr: "Comptes autorisés",
							en: "Authorized accounts"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-1",
						children: allowedEmails.map((allowedEmail) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", allowedEmail] }, allowedEmail))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "underline underline-offset-4",
						children: t({
							fr: "Retour au site",
							en: "Back to site"
						})
					})
				})
			]
		})
	});
}
//#endregion
export { AdminLogin as component };
