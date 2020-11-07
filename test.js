/// twitch-videoad.js
const origFetch = window.fetch;
window.fetch = (url, init, ...args) => {
	if (typeof url === "string" && url.includes("/access_token")) {
			var response;
			return origFetch(url, init, ...args)
            .then(function(res){response = res; return res.json()})
			.then(function(new_body) {
                new_body.token = new_body.token.replace("\"hide_ads\":false", "\"hide_ads\":true")
                                               .replace("\"server_ads\":true", "\"server_ads\":false")
                                               .replace("\"show_ads\":true", "\"show_ads\":false");
                return new Response(JSON.stringify(new_body), {
                                       status: response.status,
                                       statusText: response.statusText,
                                       headers: response.headers });
            });		
    }
    
	return origFetch(url, init, ...args);
};
