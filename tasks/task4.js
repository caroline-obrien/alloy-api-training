/* eslint-disable no-console */

require('dotenv').config({ path: '../.env' });
const utils = require('../utils');

const entityId = 'P-x4vtIdFD20vv6jWshIYD';

// Test #4 - Retrieve Entity
utils.retrieveEntity(entityId)
  .then((res) => console.log(res.data));

// Request
// GET https://sandbox.alloy.co/v1/entities/P-x4vtIdFD20vv6jWshIYD/

// Response
/**
 {
   "name":"Final Test",
   "type":"person",
   "entity_token":"P-x4vtIdFD20vv6jWshIYD",
   "archived":false,
   "meta":null,
   "external_entity_id":null,
   "created":1627667001159,
   "identity_details":{

   },
   "evaluations":[
      {
         "evaluation_token":"S-yG1obhdyxoCPOYumCSoB",
         "timestamp":1627667001116,
         "status":"complete",
         "application_name":"Individual Onboarding Best Practices",
         "outcome":"Approved"
      }
   ],
   "documents":[

   ],
   "reviews":[

   ]
} */
