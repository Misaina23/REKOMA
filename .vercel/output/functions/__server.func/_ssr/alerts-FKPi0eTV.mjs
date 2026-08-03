import { t as Swal } from "../_libs/sweetalert2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/alerts-FKPi0eTV.js
async function showSuccess(title, text) {
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
			title: "text-lg font-bold"
		}
	});
}
async function showError(title, text) {
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
			title: "text-lg font-bold"
		}
	});
}
async function showConfirm({ title, text, confirmText = "Confirmer", cancelText = "Annuler" }) {
	return (await Swal.fire({
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
			title: "text-lg font-bold"
		}
	})).isConfirmed;
}
async function showInfo(title, text) {
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
			title: "text-lg font-bold"
		}
	});
}
//#endregion
export { showSuccess as i, showError as n, showInfo as r, showConfirm as t };
