const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/', (req, res, next) => {
	res.redirect(`/${req.version}/start`)
})

router.post('/standard-details', (req, res, next) => {
	res.redirect('training-location')
})

router.post('/training-location', (req, res, next) => {
	res.redirect('available-cohorts')
})

router.post('/available-cohorts', (req, res, next) => {
	if(req.session.data['cohort-check-variable']) {
		res.redirect('related-standards')
	} else {
		res.redirect('organisation-name')
	}
})

router.post('/organisation-name', (req, res, next) => {
	res.redirect('contact-name')
})

router.post('/contact-name', (req, res, next) => {
	res.redirect('how-many-apprentices')
})

router.post('/how-many-apprentices', (req, res, next) => {
	res.redirect('recruitment-required')
})

router.post('/recruitment-required', (req, res, next) => {
	if(req.session.data['chosen-cohort'] == 'new') {
		res.redirect('start-date')
	} else {
		res.redirect('contact-preference')
	}
})

router.post('/start-date', (req, res, next) => {
	res.redirect('contact-preference')
})

router.post('/contact-preference', (req, res, next) => {
	if(req.session.data['contact-preference'] == 'provider'){
		res.redirect('provider-contact')
	} else {
		res.redirect('email-address')
	}
})

router.post('/email-address', (req, res, next) => {
	res.redirect('check-your-answers')
})

router.post('/provider-contact', (req, res, next) => {
	res.redirect('check-your-answers')
})

router.post('/check-your-answers', (req, res, next) => {
	res.redirect('confirmation-page')
})

module.exports = router