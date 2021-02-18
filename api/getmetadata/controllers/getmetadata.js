const urlMetadata = require('url-metadata')

module.exports = {
	getMetadata: async function(ctx) {
		// get url from the POST request
    		const {url} = ctx.request.body;

    		// check url requirement
    		if (!url) {
      			return ctx.badRequest('`url` param is missing')
    		}
		
		try {
     			 // decrypt the jwt
      			const obj = urlMetadata(url)
			var retour = {
				succes: 1,
				meta: {
					"title": obj.title,
					"description": obj.description,
					"image" : {
						"url" : obj.image
					}
				}
			}
			// send the decrypted object
			return retour;
		} catch (err) {
			// if there is an error
			return ctx.badRequest(err.toString());
		}
	}
}
