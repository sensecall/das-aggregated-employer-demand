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

router.post('/contact-date', (req, res, next) => {
	res.redirect('reason')
})

router.post('/reason', (req, res, next) => {
	res.redirect('explainer')
})

router.post('/standard-flexibility', (req, res, next) => {
	res.redirect('how-many-apprentices')
})

router.post('/how-many-apprentices', (req, res, next) => {
	res.redirect('recruitment-required')
})

router.post('/recruitment-required', (req, res, next) => {
	res.redirect('start-date')
})

module.exports = router