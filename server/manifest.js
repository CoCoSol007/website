const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["logo.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.CB2dLTeu.js","app":"_app/immutable/entry/app.DxS7P38-.js","imports":["_app/immutable/entry/start.CB2dLTeu.js","_app/immutable/chunks/entry.jm6tyz7M.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/entry/app.DxS7P38-.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.S749QwyN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Cs9M4YI_.js')),
			__memo(() => import('./chunks/1-DupdwPbv.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/","/blog","/blog/beats-into-shapes","/blog/future-projects","/blog/introduction"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
