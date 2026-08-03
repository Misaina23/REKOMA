import { t as getAppBaseUrl } from "./app-url-CsE7cn1T.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/actualites-CSsGdXWG.js
var $$splitComponentImporter = () => import("./actualites-Bw-uQFOm.mjs");
var Route = createFileRoute("/actualites")({
	loader: async () => {
		const base = getAppBaseUrl();
		const res = await fetch(`${base}/api/cms/news`);
		if (!res.ok) throw new Error("Failed to load news");
		return res.json();
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({
		meta: [
			{ title: "Actualités REKOMA — avancement du projet PDIMA" },
			{
				name: "description",
				content: "Suivez l'avancement du PDIMA : gouvernance, réhabilitation du centre KPSV, accès à l'eau potable et activités de terrain à Midongy Atsimo."
			},
			{
				property: "og:title",
				content: "Actualités REKOMA"
			},
			{
				property: "og:description",
				content: "Les dernières nouvelles du projet PDIMA à Midongy Atsimo."
			},
			{
				property: "og:url",
				content: "/actualites"
			}
		],
		links: [{
			rel: "canonical",
			href: "/actualites"
		}]
	})
});
//#endregion
export { Route as t };
