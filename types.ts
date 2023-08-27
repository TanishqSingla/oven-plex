export type RouteCallback = (req: Request) => Response;

export enum HTTPMethods {
	PUT = "PUT",
	GET = "GET",
	PATCH = "PATCH",
	DELETE = "DELETE",
	POST = "POST",
}
