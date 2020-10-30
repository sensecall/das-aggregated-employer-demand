const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/', (req, res, next) => {
	res.redirect(`/${req.version}/start`)
})

router.post('/contacted-provider', (req, res, next) => {
	res.redirect('provider-details')
})

router.post('/provider-details', (req, res, next) => {
	res.redirect('standard-details')
})

router.post('/standard-details', (req, res, next) => {
	res.redirect('contact-date')
})

module.exports = router