function signRequest(params, WIKIDOCS_APP_ID, WIKIDOCS_APP_SECRET) {
	params.appId = WIKIDOCS_APP_ID;
	params.time = Math.round(+new Date()/1000);
	var payload = makeBase64UrlSafe(base64.encode(JSON.stringify(params)));
	var signature = new jsSHA(payload, "ASCII")
	    .getHMAC(WIKIDOCS_APP_SECRET, "ASCII", "SHA-256", "B64");
	return makeBase64UrlSafe(signature) + "." + payload;
}

function makeBase64UrlSafe(base64Str) {
	return base64Str.replace(/\+/g, "-").replace(/\//g, "_");
}
