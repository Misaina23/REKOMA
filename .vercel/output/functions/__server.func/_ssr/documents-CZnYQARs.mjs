import { t as getAppBaseUrl } from "./app-url-CsE7cn1T.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/documents-CZnYQARs.js
var $$splitComponentImporter = () => import("./documents-DHvW_mk5.mjs");
var Route = createFileRoute("/documents")({
	loader: async () => {
		const base = getAppBaseUrl();
		const res = await fetch(`${base}/api/cms/documents`);
		if (!res.ok) throw new Error("Failed to load documents");
		return res.json();
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({
		meta: [
			{ title: "Documents & transparence — REKOMA / PDIMA" },
			{
				name: "description",
				content: "Statuts, procès-verbaux, dossier de projet et plan stratégique : les documents officiels de l'association REKOMA en accès libre."
			},
			{
				property: "og:title",
				content: "Documents & transparence — REKOMA"
			},
			{
				property: "og:description",
				content: "Documents officiels et engagements de transparence de REKOMA."
			},
			{
				property: "og:url",
				content: "/documents"
			}
		],
		links: [{
			rel: "canonical",
			href: "/documents"
		}]
	})
});
//#endregion
export { Route as t };
