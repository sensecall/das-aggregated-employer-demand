/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

const standards = require('./standards.json')

module.exports = {

  // Insert values here
  'employer': {
  	'name': 'ABC Ltd'
  },
  'request': {
  	'standard':	{
  		'name': 'Butcher, Level: 2'
  	},
   'organisation-name': 'Biz Co Ltd',
   'contact-full-name': 'Jay Smith',
   'email': 'jay.smith@biz-co-ltd.uk.com'
 },
 'standards': standards
}
