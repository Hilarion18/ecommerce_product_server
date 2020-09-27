module.exports = {
	'getCategories':function(req, h, err){
        let result = req.response
        if  (err) {
            result = err
        }
        console.log(`here`, result);
		return result
	},
}