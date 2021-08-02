/* eslint-disable no-console */

require('dotenv').config();
const utils = require('../utils');

const entityId = 'P-x4vtIdFD20vv6jWshIYD';

// Test #8 - Review Entity
utils.reviewEntity(entityId)
  .then((res) => console.log(res.data));

// Request
// POST https://sandbox.alloy.co/v1/entities/P-x4vtIdFD20vv6jWshIYD/reviews

// Response
/**
   * {
   "review_token":"R-Ujlg0oVzk10vPg3XAXpl",
   "entity_token":"P-x4vtIdFD20vv6jWshIYD",
   "group_token":null,
   "application_token":"sU1VAmwgfSRlLDnYEDrEG6JWftwMKjN3",
   "application_name":"Individual Onboarding Best Practices",
   "outcome":"Approved",
   "reasons":[
      "Onboarding Review Flag"
   ],
   "timestamp":1627668482569,
   "started":1627668482569,
   "completed":1627668482569,
   "agent":{
      "email":"caroline@alloy.co"
   }
}
   */
