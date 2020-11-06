const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.all('*', function (req, res, next) {
	req.session.data['citiesAutocompleteList'] = []
	require(__dirname + '/data/cities.json').list.forEach(function(_city, index) {
		var _suffix = (_city.city == _city.admin || _city.admin == "") ? "" : (", " + _city.admin),
		_autoCompleteString = _city.city + _suffix
		req.session.data['citiesAutocompleteList'].push(_autoCompleteString);
	});
	req.session.data['citiesAutocompleteList'].sort(function(a,b){
		if (a.toUpperCase() < b.toUpperCase()){
			return -1
		} else if(a.toUpperCase() > b.toUpperCase()){
			return 1
		}
		return 0;
	});

	next()
})

router.use(/\/aed-([0-9]+)-([0-9]+)/, (req, res, next) => {
	req.version = req.originalUrl.split('/')[1]
	req.session.data['prototypeVersion'] = req.version
	
	require(`./views/aed-${req.params[0]}-${req.params[1]}/routes`)(req, res, next);
})

router.use(/\/provider-([0-9]+)-([0-9]+)/, (req, res, next) => {
	req.version = req.originalUrl.split('/')[1]
	req.session.data['prototypeVersion'] = req.version
	
	require(`./views/provider-${req.params[0]}-${req.params[1]}/routes`)(req, res, next);
})

module.exports = router