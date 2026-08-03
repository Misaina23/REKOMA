import Swal from "sweetalert2";

export async function showSuccess(title: string, text?: string) {
  await Swal.fire({
    icon: "success",
    title,
    text,
    background: "oklch(0.98 0.02 255)",
    color: "oklch(0.15 0.03 255)",
    confirmButtonColor: "oklch(0.55 0.22 255)",
    confirmButtonText: "OK",
    customClass: {
      popup: "rounded-2xl shadow-elegant",
      confirmButton: "rounded-xl px-6 py-3 text-sm font-semibold",
      title: "text-lg font-bold",
    },
  });
}

export async function showError(title: string, text?: string) {
  await Swal.fire({
    icon: "error",
    title,
    text,
    background: "oklch(0.98 0.02 255)",
    color: "oklch(0.15 0.03 255)",
    confirmButtonColor: "oklch(0.55 0.22 255)",
    confirmButtonText: "OK",
    customClass: {
      popup: "rounded-2xl shadow-elegant",
      confirmButton: "rounded-xl px-6 py-3 text-sm font-semibold",
      title: "text-lg font-bold",
    },
  });
}

export async function showConfirm({
  title,
  text,
  confirmText = "Confirmer",
  cancelText = "Annuler",
}: {
  title: string;
  text?: string;
  confirmText?: string;
  cancelText?: string;
}) {
  const result = await Swal.fire({
    icon: "warning",
    title,
    text,
    showCancelButton: true,
    background: "oklch(0.98 0.02 255)",
    color: "oklch(0.15 0.03 255)",
    confirmButtonColor: "oklch(0.55 0.22 255)",
    cancelButtonColor: "oklch(0.55 0.22 255)",
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    customClass: {
      popup: "rounded-2xl shadow-elegant",
      confirmButton: "rounded-xl px-6 py-3 text-sm font-semibold",
      cancelButton: "rounded-xl px-6 py-3 text-sm font-semibold",
      title: "text-lg font-bold",
    },
  });
  return result.isConfirmed;
}

export async function showInfo(title: string, text?: string) {
  await Swal.fire({
    icon: "info",
    title,
    text,
    background: "oklch(0.98 0.02 255)",
    color: "oklch(0.15 0.03 255)",
    confirmButtonColor: "oklch(0.55 0.22 255)",
    confirmButtonText: "OK",
    customClass: {
      popup: "rounded-2xl shadow-elegant",
      confirmButton: "rounded-xl px-6 py-3 text-sm font-semibold",
      title: "text-lg font-bold",
    },
  });
}
