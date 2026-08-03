//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-DMKlJ7zf.js
var manifest = {
	"c57e3f62f125a817e8bf4a3af62a8ede37427f3c3061072380e041835d6df3c0": {
		functionName: "confirmMvolaDonation_createServerFn_handler",
		importer: () => import("./_ssr/donations-CLkvB5Y5.mjs")
	},
	"dbbc0987ef5f5582f2b7bea65bca53e81a5841f03937ce12ab5bb89ad29f3784": {
		functionName: "createDonationCheckout_createServerFn_handler",
		importer: () => import("./_ssr/donations-CLkvB5Y5.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
