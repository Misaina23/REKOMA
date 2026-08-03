import { t as getAppBaseUrl } from "./app-url-Dn8IWfll.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-LYx0EF4K.js
var $$splitComponentImporter = () => import("./routes-Bpr0WOqm.mjs");
var Route = createFileRoute("/")({
	loader: async () => {
		try {
			const base = getAppBaseUrl();
			const res = await fetch(`${base}/api/cms/news`);
			if (!res.ok) return [];
			return res.json();
		} catch {
			return [];
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({
		meta: [
			{ title: "REKOMA — PDIMA, développement intégré à Midongy Atsimo" },
			{
				name: "description",
				content: "L'association REKOMA porte le PDIMA : eau potable, agriculture, formation, transport et entrepreneuriat inclusif à Midongy Atsimo, Madagascar."
			},
			{
				property: "og:title",
				content: "REKOMA — PDIMA, développement intégré à Midongy Atsimo"
			},
			{
				property: "og:description",
				content: "Sept axes d'intervention pour 8 000 habitants : infrastructures, mobilité, commerce, agriculture, formation, eau potable et entrepreneuriat."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	})
});
//#endregion
export { Route as t };
