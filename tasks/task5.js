/* eslint-disable no-console */
require('dotenv').config({ path: '../.env' });
const utils = require('../utils');

const entityId = 'P-x4vtIdFD20vv6jWshIYD';

// Test #5 - Upload Document
utils.uploadDocument(entityId, './virginia_license.jpg')
  .then((res) => console.log(res.data));

// Requests
// POST https://sandbox.alloy.co/v1/entities/P-x4vtIdFD20vv6jWshIYD/documents
// PUT https://sandbox.alloy.co/v1/entities/P-x4vtIdFD20vv6jWshIYD/documents/D-AE4g9XsmIO3irB6OvRJD

// Response
/**
 * {
   "document_token":"D-AE4g9XsmIO3irB6OvRJD",
   "type":"license",
   "name":"drivers_license_2021",
   "extension":"jpg",
   "uploaded":true,
   "timestamp":1627668319391,
   "approved":null,
   "approval_agent_email":null,
   "approval_timestamp":null,
   "notes":[

   ]
}
 */
