/* eslint-disable no-console */

require('dotenv').config({ path: '../.env' });
const utils = require('../utils');

const entityId = 'P-x4vtIdFD20vv6jWshIYD';

// Test #9 - Retrieve Entity Reviews
utils.getReviewsForEntity(entityId)
  .then((res) => console.log(res.data));

// Request
// GET https://sandbox.alloy.co/v1/entities/P-x4vtIdFD20vv6jWshIYD/reviews

// Response
/**
   * [
   {
      "review_token":"R-Ujlg0oVzk10vPg3XAXpl",
      "entity_token":"P-x4vtIdFD20vv6jWshIYD",
      "application_token":"sU1VAmwgfSRlLDnYEDrEG6JWftwMKjN3",
      "outcome":"Approved",
      "application_name":"Individual Onboarding Best Practices",
      "reviewer":"caroline@alloy.co",
      "timestamp":1627668482569,
      "agent":{
         "email":"caroline@alloy.co",
         "external_id":null
      },
      "reasons":[
         "Onboarding Review Flag"
      ],
      "notes":[

      ]
   }
]
*/
