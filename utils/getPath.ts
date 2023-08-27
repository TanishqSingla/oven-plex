export const getPath = (url: string): string => {
	const path = url.match(/http[s]?:\/\/[a-zA-Z:-]+\d+?\/?([a-zA-Z0-9/]+)/);

	if(path && path[3]) {
		return path[3];
	}

	return "";
}
