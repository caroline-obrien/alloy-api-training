/* eslint-disable no-console */

require('dotenv').config();
const utils = require('../utils');

// Test #1 - Retrieve Workflow Params
utils.retrieveWorkflowParameters()
  .then((res) => console.log(res.data));

// Request
// GET https://sandbox.alloy.co/v1/parameters

// Response:
/**
   * {
   "required":[
      {
         "key":"name_first",
         "type":"string",
         "description":"First name",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"name_last",
         "type":"string",
         "description":"Last name",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"email_address",
         "type":"string",
         "description":"Primary email address",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"address_line_1",
         "type":"string",
         "description":"Address field 1",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"address_city",
         "type":"string",
         "description":"Address city",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"address_state",
         "type":"string",
         "description":"State or province",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"address_postal_code",
         "type":"string",
         "description":"Address postal code",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"address_country_code",
         "type":"string",
         "description":"Two character ISO 3166-1 alpha-2 country code",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"phone_number",
         "type":"string",
         "description":"Primary phone number",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"birth_date",
         "type":"date",
         "description":"Birth date - valid ISO 8601 format",
         "regex":"",
         "properties":{

         }
      }
   ],
   "optional":[
      {
         "key":"address_line_2",
         "type":"string",
         "description":"Address field 2",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"ip_address_v4",
         "type":"string",
         "description":null,
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"ip_address_v6",
         "type":"string",
         "description":null,
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"addresses",
         "type":"array",
         "description":null,
         "regex":"",
         "elements":{
            "type":"object",
            "description":null,
            "regex":"",
            "properties":{
               "required":[
                  {
                     "key":"line_1",
                     "type":"string",
                     "description":"Address field 1",
                     "regex":"",
                     "properties":{

                     }
                  },
                  {
                     "key":"city",
                     "type":"string",
                     "description":"Address city",
                     "regex":"",
                     "properties":{

                     }
                  },
                  {
                     "key":"state",
                     "type":"string",
                     "description":"State or province",
                     "regex":"",
                     "properties":{

                     }
                  },
                  {
                     "key":"postal_code",
                     "type":"string",
                     "description":"Address postal code",
                     "regex":"",
                     "properties":{

                     }
                  },
                  {
                     "key":"type",
                     "type":"string",
                     "description":null,
                     "regex":"",
                     "properties":{

                     }
                  }
               ],
               "optional":[
                  {
                     "key":"line_2",
                     "type":"string",
                     "description":"Address field 2",
                     "regex":"",
                     "properties":{

                     }
                  },
                  {
                     "key":"country_code",
                     "type":"string",
                     "description":"Two character ISO 3166-1 alpha-2 country code",
                     "regex":"",
                     "properties":{

                     }
                  }
               ]
            }
         }
      },
      {
         "key":"transaction",
         "type":"object",
         "description":null,
         "regex":"",
         "properties":{
            "required":[

            ],
            "optional":[
               {
                  "key":"shipping_address",
                  "type":"object",
                  "description":null,
                  "regex":"",
                  "properties":{
                     "required":[

                     ],
                     "optional":[
                        {
                           "key":"address_line_1",
                           "type":"string",
                           "description":"Address field 1",
                           "regex":"",
                           "properties":{

                           }
                        },
                        {
                           "key":"address_line_2",
                           "type":"string",
                           "description":"Address field 2",
                           "regex":"",
                           "properties":{

                           }
                        },
                        {
                           "key":"address_city",
                           "type":"string",
                           "description":"Address city",
                           "regex":"",
                           "properties":{

                           }
                        },
                        {
                           "key":"address_state",
                           "type":"string",
                           "description":"State or province",
                           "regex":"",
                           "properties":{

                           }
                        },
                        {
                           "key":"address_postal_code",
                           "type":"string",
                           "description":"Address postal code",
                           "regex":"",
                           "properties":{

                           }
                        },
                        {
                           "key":"address_country_code",
                           "type":"string",
                           "description":"Two character ISO 3166-1 alpha-2 country code",
                           "regex":"",
                           "properties":{

                           }
                        }
                     ]
                  }
               },
               {
                  "key":"billing_address",
                  "type":"object",
                  "description":null,
                  "regex":"",
                  "properties":{
                     "required":[

                     ],
                     "optional":[
                        {
                           "key":"address_line_1",
                           "type":"string",
                           "description":"Address field 1",
                           "regex":"",
                           "properties":{

                           }
                        },
                        {
                           "key":"address_line_2",
                           "type":"string",
                           "description":"Address field 2",
                           "regex":"",
                           "properties":{

                           }
                        },
                        {
                           "key":"address_city",
                           "type":"string",
                           "description":"Address city",
                           "regex":"",
                           "properties":{

                           }
                        },
                        {
                           "key":"address_state",
                           "type":"string",
                           "description":"State or province",
                           "regex":"",
                           "properties":{

                           }
                        },
                        {
                           "key":"address_postal_code",
                           "type":"string",
                           "description":"Address postal code",
                           "regex":"",
                           "properties":{

                           }
                        },
                        {
                           "key":"address_country_code",
                           "type":"string",
                           "description":"Two character ISO 3166-1 alpha-2 country code",
                           "regex":"",
                           "properties":{

                           }
                        }
                     ]
                  }
               }
            ]
         }
      },
      {
         "key":"name_prefix",
         "type":"string",
         "description":"Name prefix",
         "regex":"^[^\\d]*$",
         "properties":{

         }
      },
      {
         "key":"name_middle",
         "type":"string",
         "description":"Middle name",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"name_suffix",
         "type":"string",
         "description":"Name suffix",
         "regex":"^[^\\d]*$",
         "properties":{

         }
      },
      {
         "key":"document_ssn",
         "type":"string",
         "description":"US social security number",
         "regex":"^\\d{9}$",
         "properties":{

         }
      },
      {
         "key":"document_license",
         "type":"string",
         "description":"US issued drivers license number",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"document_license_state",
         "type":"string",
         "description":"US state",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"gender",
         "type":"string",
         "description":"Gender of evaluation target.",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"document_ssn_last4",
         "type":"string",
         "description":"Last four digits of a US social security number",
         "regex":"^\\d{4}$",
         "properties":{

         }
      },
      {
         "key":"document_passport",
         "type":"string",
         "description":"Passport ID #",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"document_passport_expiry_date",
         "type":"date",
         "description":"Passport expiry date - valid ISO 8601 format",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"document_passport_nationality",
         "type":"string",
         "description":"Nationality of passport holder",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"account_evidence_type",
         "type":"string",
         "description":null,
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"device_evidence_type",
         "type":"string",
         "description":null,
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"comment",
         "type":"string",
         "description":null,
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"account_comment",
         "type":"string",
         "description":null,
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"device_comment",
         "type":"string",
         "description":null,
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"iovation",
         "type":"object",
         "description":null,
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"iovation_blackbox",
         "type":"string",
         "description":null,
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"alloy_cookie",
         "type":"string",
         "description":null,
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"surescore",
         "type":"boolean",
         "description":"Return SureScore",
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"socure_session_id",
         "type":"string",
         "description":null,
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"partner_id",
         "type":"string",
         "description":null,
         "regex":"",
         "properties":{

         }
      },
      {
         "key":"business_name",
         "type":"string",
         "description":"Business name",
         "regex":"",
         "properties":{

         }
      }
   ]
}
   */
