export function getBrowserLocale(headers: Headers) {
	return headers.get("accept-language");
}
