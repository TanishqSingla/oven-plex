import { describe, expect, test } from "bun:test";
import { getPath } from "./getPath";

describe("getPath", () => {
	test("Returns empty string when url without a path is passed", () => {
		const mockUrl = "http://hello-world.com/";
		const path = getPath(mockUrl);

		expect(path).toBe("/");
	});

	test("Return path when url is provided with path", () => {
		const mockUrl = "http://hello-world.com/hello";
		const path = getPath(mockUrl);

		expect(path).toBe("/hello");
	});

	test("Return path when there are multiple path separated by /", () => {
		const mockUrl = "http://hello-world.com/hello/world";
		
		const path = getPath(mockUrl);
		expect(path).toBe("/hello/world");
	});

	test("Matches localhost url", () => {
		const mockUrl = "http://localhost:3000/hello/world";

		const path = getPath(mockUrl);
		expect(path).toBe("/hello/world");
	});

	test("Matches numeric localhost url", () => {
		const mockUrl = "http://127.0.0.1:3000/hello/world";

		const path = getPath(mockUrl);
		expect(path).toBe("/hello/world");
	});
});
