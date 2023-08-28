import { HTTPMethods, RouteCallback } from "./types";

class Router {
	routeMap: Map<string, RouteCallback>;

	#generateMethodKey = (method: HTTPMethods, path: string): string =>
		`${method} ${path}`;

	constructor() {
		this.routeMap = new Map<string, RouteCallback>();
	}

	put(path: string, callback: RouteCallback) {
		const methodObj = this.#generateMethodKey(HTTPMethods.PUT, path);

		if (this.routeMap.get(methodObj)) {
			throw new Error("Route path already exists");
		}
		this.routeMap.set(methodObj, callback);
	}

	get(path: string, callback: RouteCallback) {
		const methodObj = this.#generateMethodKey(HTTPMethods.GET, path);

		if (this.routeMap.get(methodObj)) {
			throw new Error("Route path already exists");
		}
		this.routeMap.set(methodObj, callback);
	}

	patch(path: string, callback: RouteCallback) {
		const methodObj = this.#generateMethodKey(HTTPMethods.PATCH, path);

		if (this.routeMap.get(methodObj)) {
			throw new Error("Route path already exists");
		}
		this.routeMap.set(methodObj, callback);
	}

	delete(path: string, callback: RouteCallback) {
		const methodObj = this.#generateMethodKey(HTTPMethods.DELETE, path);

		if (this.routeMap.get(methodObj)) {
			throw new Error("Route methodObj already exists");
		}
		this.routeMap.set(methodObj, callback);
	}

	post(path: string, callback: RouteCallback) {
		const methodObj = this.#generateMethodKey(HTTPMethods.POST, path);

		if (this.routeMap.get(methodObj)) {
			throw new Error("Route methodObj already exists");
		}
		this.routeMap.set(methodObj, callback);
	}

	serve(req: Request) {
		const method = req.method as HTTPMethods;
		const methodPath = new URL(req.url).pathname;
		const methodKey = this.#generateMethodKey(method, methodPath);

		if (this.routeMap.has(methodKey)) {
			const callback = this.routeMap.get(methodKey)!;
			return callback(req);
		}

		return new Response("Not Found", { status: 404 });
	}
}

export default Router;
