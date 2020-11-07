const origFetch = window.fetch;
window.fetch = (url, init, ...args) => {
	if (typeof url === "string") {
		if (url.includes("/access_token")) {
          console.log('bruv');
			var response;
			var body;
			origFetch(url, init, ...args).then(function(res){response = res; return res.json()})
						     .then(function(bod) {
 bod.token = bod.token.replace("\"hide_ads\":false", "\"hide_ads\":true").replace("\"server_ads\":true", "\"server_ads\":false").replace("\"show_ads\":true", "\"show_ads\":false");
return new Promise((resolve,reject) => {
	new Response(bod, {
	    status: response.status,
	    statusText: response.statusText,
	    headers: response.headers
	  }) ;
	resolve();
    });
				
				
});
			
			
			
		} 
	}
	return origFetch(url, init, ...args);
};
