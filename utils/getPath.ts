export const getPath = (url: string): string => {
	const path = url.match(/https?:\/\/[a-zA-Z0-9-.]+\w+\:?\d*(\/[a-zA-Z0-9%-\/]+)/);

	if(path && path[1]) {
		return path[1];
	}

	return "/";
}
