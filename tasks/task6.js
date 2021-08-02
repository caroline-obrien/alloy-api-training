/* eslint-disable no-console */

require('dotenv').config();
const utils = require('../utils');

const params = {
  name_first: 'Final Test',
  name_last: 'denied_fraud_idscore',
  email_address: 'caroline123@test.com',
  address_line_1: '123 Allen St',
  address_city: 'New York',
  address_state: 'NY',
  address_postal_code: '10002',
  address_country_code: 'US',
  phone_number: '804-475-4613',
  birth_date: '1998-07-20',
  document_ssn: '123456789'
};

// Test #6 - Trigger Denied Evaluation
utils.runEvaluation(params, {})
  .then((res) => console.log(res.data));

// Request
// POST https://sandbox.alloy.co/v1/evaluations

// Response
/**
   * {
   "status_code":201,
   "error":null,
   "timestamp":1627668372178,
   "evaluation_token":"S-FUNvKgWbxBtBD1lNDsfr",
   "entity_token":"P-PqheaDEPs1Ma3TNubHCm",
   "parent_entity_token":null,
   "application_token":"sU1VAmwgfSRlLDnYEDrEG6JWftwMKjN3",
   "application_version_id":1,
   "champion_challenger_id":null,
   "summary":{
      "result":"success",
      "score":0.99,
      "tags":[
         "Fraud Warning",
         "Denied Fraud",
         "KYC Address Match"
      ],
      "outcome_reasons":[

      ],
      "outcome":"Denied",
      "services":{
         "Socure 30":"executed",
         "Lexis Nexis Instant ID":"not_executed",
         "ID Analytics ID Score":"executed",
         "Iovation":"executed",
         "Ekata":"executed"
      },
      "alloy_fraud_score":null
   },
   "supplied":{
      "name_first":"Final Test",
      "name_last":"denied_fraud_idscore",
      "email_address":"caroline123@test.com",
      "address_line_1":"123 Allen St",
      "address_city":"New York",
      "address_state":"NY",
      "address_postal_code":"10002",
      "address_country_code":"US",
      "phone_number":"804-475-4613",
      "birth_date":"1998-07-20",
      "document_ssn":"123456789"
   },
   "formatted":{
      "name_first":"Final Test",
      "name_last":"denied_fraud_idscore",
      "email_address":"caroline123@test.com",
      "address_line_1":"123 Allen St",
      "address_city":"New York",
      "address_state":"NY",
      "address_postal_code":"10002",
      "address_country_code":"US",
      "phone_number":"804-475-4613",
      "birth_date":"1998-07-20",
      "document_ssn":"123456789",
      "age":"23"
   },
   "matching":{
      "email":{
         "score":0.99,
         "matched":[
            "Socure 30",
            "Ekata"
         ],
         "unmatched":[

         ]
      },
      "name":{
         "score":0.99,
         "matched":[
            "Socure 30"
         ],
         "unmatched":[

         ]
      },
      "address":{
         "score":0.99,
         "matched":[
            "Socure 30",
            "Ekata"
         ],
         "unmatched":[

         ]
      },
      "dob":{
         "score":0.99,
         "matched":[
            "Socure 30"
         ],
         "unmatched":[

         ]
      },
      "phone":{
         "score":0.99,
         "matched":[
            "Socure 30",
            "Ekata"
         ],
         "unmatched":[

         ]
      },
      "ssn":{
         "score":0.99,
         "matched":[
            "Socure 30"
         ],
         "unmatched":[

         ]
      },
      "average_score":0.99
   },
   "diligence":{
      "watchlists":null,
      "fraud":{
         "average_score":0.35,
         "flags":[

         ],
         "sources":{
            "Socure 30":{
               "normalized_score":0,
               "raw_score":0,
               "attribute":"Generic Fraud Score"
            },
            "ID Analytics ID Score":{
               "normalized_score":0.9,
               "raw_score":900,
               "attribute":"IDScore"
            },
            "Ekata":{
               "normalized_score":0,
               "raw_score":0,
               "attribute":"Fraud Score"
            },
            "Iovation":{
               "normalized_score":0.5,
               "raw_score":0,
               "attribute":"SureScore"
            }
         },
         "score":0.35
      },
      "financial":null,
      "identity_questions":null,
      "device":null
   },
   "related_data":{
      "social":[
         {
            "type":"Facebook",
            "url":"https://www.facebook.com/dog",
            "id":"dog"
         },
         {
            "type":"Google Plus",
            "url":"https://plus.google.com/dog",
            "id":"dog"
         }
      ]
   },
   "raw_responses":{
      "Socure 30":[
         {
            "referenceId":"2afd39c2-eb85-4be6-9280-bd7ab54cd2c5",
            "alertList":{
               "reasonCodes":[

               ],
               "matches":[

               ]
            },
            "nameAddressCorrelation":{
               "reasonCodes":[

               ],
               "score":0.99
            },
            "nameEmailCorrelation":{
               "reasonCodes":[

               ],
               "score":0.99
            },
            "namePhoneCorrelation":{
               "reasonCodes":[

               ],
               "score":0.99
            },
            "fraud":{
               "reasonCodes":[

               ],
               "scores":[
                  {
                     "name":"generic",
                     "version":"3.0",
                     "score":0
                  },
                  {
                     "name":"sigma",
                     "version":"1.0",
                     "score":0
                  }
               ]
            },
            "synthetic":{
               "scores":[
                  {
                     "name":"synthetic",
                     "version":"1.0",
                     "score":0
                  }
               ]
            },
            "kyc":{
               "reasonCodes":[

               ],
               "fieldValidations":{
                  "firstName":0.99,
                  "surName":0.99,
                  "streetAddress":0.99,
                  "city":0.99,
                  "state":0.99,
                  "zip":0.99,
                  "mobileNumber":0.99,
                  "dob":0.99,
                  "ssn":0.99
               }
            },
            "social":{
               "profilesFound":[
                  "https://gravatar.com/dog",
                  "http://vimeo.com/dog",
                  "https://www.facebook.com/dog",
                  "https://plus.google.com/dog"
               ],
               "reasonCodes":[

               ]
            },
            "addressRisk":{
               "score":0,
               "reasonCodes":[

               ]
            },
            "emailRisk":{
               "score":0,
               "reasonCodes":[

               ]
            },
            "phoneRisk":{
               "score":0,
               "reasonCodes":[

               ]
            }
         }
      ],
      "ID Analytics ID Score":[
         {
            "$":{
               "xmlns:api":"http://idanalytics.com/core/api"
            },
            "api:Solution":"Standard/MultiProduct",
            "api:RequestID":"3ebf49a49071458e:ba35f04d-f92c-4951-aad1-f2cdf13f7de0",
            "api:View":"MultiProduct/FINISHED",
            "api:Body":{
               "api:Item":{
                  "$":{
                     "key":"IDScoreIDB9.1Response"
                  },
                  "OutputRecord":{
                     "$":{
                        "xmlns":"http://idanalytics.com/products/idscore/result",
                        "xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance",
                        "xmlns:internal":"http://idanalytics.com/internal/api",
                        "schemaVersion":"3.0"
                     },
                     "IDAStatus":"100",
                     "AppID":"1",
                     "Designation":"A1",
                     "IDASequence":"29420526056235",
                     "IDATimeStamp":"2017-07-06T11:36:37",
                     "IDScore":"900",
                     "IDScoreResultCode1":"909",
                     "IDScoreResultCode2":"925",
                     "IDScoreResultCode3":"934"
                  }
               }
            }
         }
      ],
      "Ekata":[
         {
            "request":{
               "primary.firstname":"Final Test",
               "primary.lastname":"denied_fraud_idscore",
               "primary.phone":"804-475-4613",
               "primary.email_address":"caroline123@test.com",
               "primary.address.street_line_1":"123 Allen St",
               "primary.address.city":"New York",
               "primary.address.state_code":"NY",
               "primary.address.postal_code":"10002",
               "primary.address.country_code":"US",
               "secondary.firstname":"Final Test",
               "secondary.lastname":"denied_fraud_idscore",
               "api_key":""
            },
            "primary_phone_checks":{
               "error":null,
               "warnings":[

               ],
               "is_valid":true,
               "country_code":"US",
               "is_commercial":true,
               "line_type":"Mobile",
               "carrier":"Sprint",
               "is_prepaid":false,
               "match_to_name":"Match",
               "match_to_address":"Match",
               "subscriber":{
                  "name":"Final Test denied_fraud_idscore",
                  "age_range":{
                     "from":25,
                     "to":29
                  }
               }
            },
            "secondary_phone_checks":null,
            "primary_address_checks":{
               "error":null,
               "warnings":[

               ],
               "is_valid":true,
               "input_completeness":"Complete",
               "match_to_name":"Match",
               "resident":{
                  "name":"Final Test denied_fraud_idscore",
                  "age_range":{
                     "from":25,
                     "to":29
                  }
               },
               "is_commercial":false,
               "is_forwarder":false,
               "type":"Single unit"
            },
            "secondary_address_checks":null,
            "primary_email_address_checks":{
               "error":null,
               "warnings":[

               ],
               "is_valid":true,
               "is_autogenerated":false,
               "is_disposable":false,
               "email_first_seen_days":234,
               "email_domain_creation_days":6539,
               "match_to_name":"Match",
               "match_to_address":"Match",
               "registered_owner":{
                  "name":"Final Test denied_fraud_idscore",
                  "age_range":{
                     "from":25,
                     "to":29
                  }
               }
            },
            "secondary_email_address_checks":null,
            "ip_address_checks":null,
            "identity_check_score":0
         }
      ],
      "Iovation":[
         {
            "result":"A",
            "reason":"Other Subscriber Financial Evidence",
            "trackingnumber":"807429173349464111",
            "device.alias":"159301833594571345",
            "device.firstseen":"2016-03-22T22:16:30.769Z",
            "device.new":"1",
            "device.bb.age":"1000",
            "device.bb.timestamp":"2010-06-01T14:43:21Z",
            "device.browser.configuredlang":"EN-US,EN;Q=0.5",
            "device.browser.lang":"EN-US",
            "device.browser.type":"FIREFOX",
            "device.browser.version":"3.6.3",
            "device.cookie.enabled":"1",
            "device.flash.enabled":"1",
            "device.flash.installed":"1",
            "device.flash.version":"10.2.4.0",
            "device.js.enabled":"1",
            "device.os":"WINDOWS NT 5.1",
            "device.screen":"1240x768",
            "device.type":"MAC",
            "device.tz":"-480",
            "ipaddress":"127.0.0.1",
            "ipaddress.isp":"CHARTER COMMUNICATIONS",
            "ipaddress.loc.region":"NEW YORK",
            "mobile.app.exeName":"ABAPPONBOARDING",
            "mobile.build.device":"IPHONE",
            "mobile.build.product":"IPHONE",
            "mobile.device.brand":"APPLE",
            "mobile.device.charging":"0",
            "mobile.device.manufacturer":"APPLE",
            "mobile.device.model":"IPHONE 12",
            "mobile.location.enabled":"1",
            "mobile.location.timezone":"AMERICA/NEW_YORK",
            "mobile.system.carrierCountryCode":"US",
            "mobile.system.jailrootDetected":"0",
            "mobile.system.localeCurrency":"USD",
            "mobile.system.localeLang":"EN_US",
            "mobile.system.simulator":"0",
            "realipaddress":"127.0.0.1",
            "realipaddress.source":"subscriber",
            "ruleset.rulesmatched":"0",
            "ruleset.score":"0",
            "mlvalue1":0,
            "registration.check.matchstatus":"NONE_REGISTERED",
            "registration.check.measureofchange":"NONE",
            "rules":{
               "evidence_exists_owned":false,
               "evidence_exists_non_owned":false,
               "suspect_device_data":false,
               "tor_exit_node_ip":false,
               "suspect_os":false,
               "ip_address_mismatch":false,
               "ip_address_distance_greater_800":false,
               "ip_address_country":false,
               "transactions_per_ip_address":false,
               "transactions_per_device":false,
               "geolocation_mismatch":false,
               "device_not_provided":false,
               "invalid_blackbox":false,
               "timezone_geolocation_mismatch":false,
               "device_risk_local_20_percent":false,
               "proxy_in_use":false,
               "device_risk_global_50_percent":false,
               "ip_address_risk_50_percent":false,
               "3rd_party_device_info_not_provided":false,
               "isp_watch_list":false,
               "suspect_screen_resolution":false,
               "mobile_emulator_detected":false,
               "jailbreak_root_detected":false,
               "non_US_IP":false
            }
         }
      ]
   },
   "formatted_responses":{
      "Socure 30":{
         "data":{
            "reasonCodes":[

            ],
            "watchLists":{
               "internationalPEP":0,
               "internationalOFAC":0,
               "domesticPEP":0,
               "domesticOFAC":0,
               "ofac":0,
               "adverseMedia":0
            },
            "fraudScores":{
               "generic":0,
               "sigma":0,
               "sigmaSynthetic":0
            },
            "kycValidation":{
               "firstName":true,
               "surName":true,
               "streetAddress":true,
               "city":true,
               "state":true,
               "zip":true,
               "dob":true,
               "mobileNumber":true,
               "ssn":true
            }
         },
         "matching":{
            "email":{
               "score":0.99,
               "matched":true
            },
            "name":{
               "score":0.99,
               "matched":true
            },
            "address":{
               "score":0.99,
               "matched":true
            },
            "dob":{
               "score":0.99,
               "matched":true
            },
            "phone":{
               "score":0.99,
               "matched":true
            },
            "ssn":{
               "score":0.99,
               "matched":true
            }
         }
      },
      "ID Analytics ID Score":{
         "data":{
            "idScore":900,
            "consumerStatement":"",
            "reason_codes":[
               "909",
               "925",
               "934"
            ]
         },
         "matching":{

         }
      },
      "Ekata":{
         "data":{

         },
         "matching":{
            "phone":{
               "score":1,
               "matched":true
            },
            "address":{
               "score":1,
               "matched":true
            },
            "email":{
               "score":1,
               "matched":true
            }
         }
      },
      "Iovation":{
         "data":{
            "days_since_device_first_seen_by_alloy":0,
            "num_times_device_seen_by_alloy":0,
            "3rd_party_os":false
         }
      }
   },
   "audit_archive":null
}
   */
