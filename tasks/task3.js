/* eslint-disable max-len */
/* eslint-disable no-console */

require('dotenv').config({ path: '../.env' });
const utils = require('../utils');

const entityId = 'P-x4vtIdFD20vv6jWshIYD';
const evaluationId = 'S-yG1obhdyxoCPOYumCSoB';

// Test #3 - Retrieve Evaluation
utils.retrieveEvaluation(entityId, evaluationId)
  .then((res) => console.log(res.data));

// Request
// GET https://sandbox.alloy.co/v1/entities/P-x4vtIdFD20vv6jWshIYD/evaluations/S-yG1obhdyxoCPOYumCSoB

// Response
/**
   * {
   "status_code":201,
   "error":null,
   "timestamp":1627667001463,
   "evaluation_token":"S-yG1obhdyxoCPOYumCSoB",
   "entity_token":"P-x4vtIdFD20vv6jWshIYD",
   "application_token":"sU1VAmwgfSRlLDnYEDrEG6JWftwMKjN3",
   "application_version_id":1,
   "summary":{
      "result":"success",
      "score":0.99,
      "tags":[
         "Phone Match",
         "KYC Name Match",
         "KYC SSN Match",
         "KYC DOB Match",
         "KYC Address Match"
      ],
      "outcome_reasons":[

      ],
      "outcome":"Approved",
      "services":{
         "Socure 30":"executed",
         "Lexis Nexis Instant ID":"executed",
         "ID Analytics ID Score":"executed",
         "Iovation":"executed",
         "Ekata":"cached"
      },
      "alloy_fraud_score":null
   },
   "supplied":{
      "name_first":"Final",
      "name_last":"Test",
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
      "name_first":"Final",
      "name_last":"Test",
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
      "phone":{
         "score":1,
         "matched":[
            "Ekata",
            "Socure 30",
            "Lexis Nexis Instant ID"
         ],
         "unmatched":[

         ]
      },
      "address":{
         "score":1,
         "matched":[
            "Ekata",
            "Socure 30",
            "Lexis Nexis Instant ID"
         ],
         "unmatched":[

         ]
      },
      "email":{
         "score":0.99,
         "matched":[
            "Ekata",
            "Socure 30"
         ],
         "unmatched":[

         ]
      },
      "name":{
         "score":0.99,
         "matched":[
            "Socure 30",
            "Lexis Nexis Instant ID"
         ],
         "unmatched":[

         ]
      },
      "dob":{
         "score":0.99,
         "matched":[
            "Socure 30",
            "Lexis Nexis Instant ID"
         ],
         "unmatched":[

         ]
      },
      "ssn":{
         "score":0.99,
         "matched":[
            "Socure 30",
            "Lexis Nexis Instant ID"
         ],
         "unmatched":[

         ]
      },
      "average_score":0.99
   },
   "diligence":{
      "watchlists":{
         "lists":[
            "BES",
            "CFTC",
            "DTC",
            "EUDT",
            "FBI",
            "FCEN",
            "FAR",
            "IMW",
            "OFAC",
            "OCC",
            "OSFI",
            "PEP",
            "SDT",
            "UNNT",
            "BIS",
            "WBIF"
         ],
         "matches":[

         ]
      },
      "fraud":{
         "average_score":0.25,
         "flags":[

         ],
         "sources":{
            "Ekata":{
               "normalized_score":0,
               "raw_score":0,
               "attribute":"Fraud Score"
            },
            "ID Analytics ID Score":{
               "normalized_score":0.5,
               "raw_score":500,
               "attribute":"IDScore"
            },
            "Iovation":{
               "normalized_score":0.5,
               "raw_score":0,
               "attribute":"SureScore"
            },
            "Socure 30":{
               "normalized_score":0,
               "raw_score":0,
               "attribute":"Generic Fraud Score"
            }
         },
         "score":0.25
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
      "Ekata":[
         {
            "request":{
               "primary.firstname":"Final",
               "primary.lastname":"Test",
               "primary.phone":"804-475-4613",
               "primary.email_address":"caroline123@test.com",
               "primary.address.street_line_1":"123 Allen St",
               "primary.address.city":"New York",
               "primary.address.state_code":"NY",
               "primary.address.postal_code":"10002",
               "primary.address.country_code":"US",
               "secondary.firstname":"Final",
               "secondary.lastname":"Test",
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
                  "name":"Final Test",
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
                  "name":"Final Test",
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
                  "name":"Final Test",
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
                     "IDScore":"500",
                     "IDScoreResultCode1":"909",
                     "IDScoreResultCode2":"925",
                     "IDScoreResultCode3":"934"
                  }
               }
            }
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
      ],
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
      "Lexis Nexis Instant ID":[
         {
            "response":{
               "Header":{
                  "Status":0,
                  "TransactionId":"0"
               },
               "Result":{
                  "InputEcho":{
                     "SSN":"123456789",
                     "SSNLast4":"6789",
                     "IPAddress":"192.168.0.1",
                     "Name":{
                        "Last":"Test",
                        "First":"Final"
                     },
                     "Address":{
                        "StreetAddress1":"123 Allen St",
                        "StreetAddress2":"APT 2L",
                        "City":"New York",
                        "State":"NY",
                        "Zip5":"10002"
                     },
                     "DOB":{
                        "Year":1998,
                        "Month":7,
                        "Day":20
                     },
                     "Channel":null,
                     "Passport":{
                        "Number":"",
                        "Country":"",
                        "ExpirationDate":{
                           "Year":null,
                           "Month":null,
                           "Day":null
                        },
                        "MachineReadableLine1":"",
                        "MachineReadableLine2":""
                     },
                     "DriverLicenseNumber":null,
                     "DriverLicenseState":null,
                     "HomePhone":"804-475-4613",
                     "OwnOrRent":null,
                     "ApplicationDateTime":{
                        "Day":30,
                        "Year":2021,
                        "Month":7,
                        "Hour24":17,
                        "Minute":43,
                        "Second":21
                     }
                  },
                  "UniqueId":"1567805191",
                  "NameAddressSSNSummary":12,
                  "AdditionalScore1":0,
                  "AdditionalScore2":0,
                  "PhoneOfNameAddress":8043563199,
                  "SSNInfo":{
                     "Valid":"G",
                     "IssuedEndDate":{
                        "Year":"1979",
                        "Month":"12"
                     },
                     "IssuedLocation":"VIRGINIA",
                     "IssuedStartDate":{
                        "Year":"1977",
                        "Month":"01"
                     }
                  },
                  "CurrentName":{
                     "Last":"NICHOLAS",
                     "First":"THOMAS"
                  },
                  "ReversePhone":{
                     "Name":{
                        "Last":"NICHOLAS",
                        "First":"THOMAS"
                     },
                     "Address":{
                        "City":"RICHMOND",
                        "Zip5":"23220",
                        "State":"VA",
                        "StreetName":"STUART",
                        "UnitNumber":"1",
                        "StreetNumber":"300",
                        "StreetSuffix":"AVE",
                        "StreetAddress1":"3000 STUART AVE APT 1",
                        "UnitDesignation":"APT"
                     }
                  },
                  "VerifiedInput":{
                     "DOB":{
                        "Day":"XX",
                        "Year":"1986",
                        "Month":"04"
                     },
                     "SSN":"61252xxxx",
                     "Name":{
                        "Last":"NICHOLAS",
                        "First":"THOMAS"
                     },
                     "Address":{
                        "City":"RICHMOND",
                        "Zip4":"2186",
                        "Zip5":"23220",
                        "State":"VA",
                        "StreetName":"STUART",
                        "UnitNumber":"1",
                        "StreetNumber":"3000",
                        "StreetSuffix":"AVE",
                        "StreetAddress1":"3000 STUART AVE",
                        "UnitDesignation":"APT"
                     },
                     "HomePhone":"8043563199"
                  },
                  "ComprehensiveVerification":{
                     "ComprehensiveVerificationIndex":50,
                     "PotentialFollowupActions":{
                        "FollowupAction":[
                           {
                              "RiskCode":"B",
                              "Description":"Verify name with Social (via SSN card, DL if applicable, paycheck stub, or other Government Issued ID)"
                           },
                           {
                              "RiskCode":"C",
                              "Description":"Verify name with Address (via DL, utility bill, Directory Assistance, paycheck stub, or other Government Issued ID)"
                           }
                        ]
                     },
                     "RiskIndicators":{
                        "RiskIndicator":[
                           {
                              "RiskCode":"PA",
                              "Sequence":1,
                              "Description":"Potential address discrepancy - the Input address may be previous address"
                           },
                           {
                              "RiskCode":"SD",
                              "Sequence":2,
                              "Description":"The input address state is different than LN best address on file"
                           },
                           {
                              "RiskCode":"10",
                              "Sequence":3,
                              "Description":"The input phone number is a mobile number"
                           }
                        ]
                     }
                  },
                  "NameAddressPhone":{
                     "Summary":"12"
                  },
                  "AddressPOBox":false,
                  "SSNFoundForLexID":true,
                  "AddressCMRA":false,
                  "DOBMatchLevel":8,
                  "PassportValidated":false,
                  "InstantIDVersion":"1",
                  "ChronologyHistories":{
                     "ChronologyHistory":[
                        {
                           "Address":{
                              "City":"RICHMOND",
                              "Zip4":"2186",
                              "Zip5":"23220",
                              "State":"VA",
                              "StreetName":"STUART",
                              "UnitNumber":"1",
                              "StreetNumber":"300",
                              "StreetSuffix":"AVE",
                              "StreetAddress1":"3000 STUART AVE APT 1",
                              "UnitDesignation":"APT"
                           },
                           "DateLastSeen":{
                              "Year":"2015",
                              "Month":"07"
                           },
                           "DateFirstSeen":{
                              "Year":"2007",
                              "Month":"09"
                           },
                           "IsBestAddress":true
                        },
                        {
                           "Phone":"8043563199",
                           "Address":{
                              "City":"FORT WASHINGTON",
                              "Zip4":"4851",
                              "Zip5":"20749",
                              "State":"MD",
                              "StreetAddress1":"PO BOX 44851"
                           },
                           "DateLastSeen":{
                              "Year":"2013",
                              "Month":"07"
                           },
                           "DateFirstSeen":{
                              "Year":"1999",
                              "Month":"02"
                           }
                        },
                        {
                           "Phone":"8043563199",
                           "Address":{
                              "City":"FREDERICKSBURG",
                              "Zip4":"6495",
                              "Zip5":"22406",
                              "State":"VA",
                              "StreetAddress1":"606 ENGLAND POINTE DR"
                           },
                           "DateLastSeen":{
                              "Year":"2013",
                              "Month":"07"
                           },
                           "DateFirstSeen":{
                              "Year":"2000",
                              "Month":"05"
                           }
                        }
                     ]
                  },
                  "DOBVerified":true,
                  "WatchLists":{
                     "WatchList":[

                     ]
                  }
               }
            }
         }
      ]
   },
   "formatted_responses":{
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
      "ID Analytics ID Score":{
         "data":{
            "idScore":500,
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
      "Iovation":{
         "data":{
            "days_since_device_first_seen_by_alloy":0,
            "num_times_device_seen_by_alloy":0,
            "3rd_party_os":false
         }
      },
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
      "Lexis Nexis Instant ID":{
         "matching":{
            "name":{
               "score":1,
               "matched":true
            },
            "address":{
               "score":1,
               "matched":true
            },
            "ssn":{
               "score":1,
               "matched":true
            },
            "dob":{
               "score":1,
               "matched":true
            },
            "phone":{
               "score":1,
               "matched":true
            },
            "passport":{
               "score":0,
               "matched":false
            }
         },
         "diligence":{
            "watchlists":{
               "lists":[
                  "BES",
                  "CFTC",
                  "DTC",
                  "EUDT",
                  "FBI",
                  "FCEN",
                  "FAR",
                  "IMW",
                  "OFAC",
                  "OCC",
                  "OSFI",
                  "PEP",
                  "SDT",
                  "UNNT",
                  "BIS",
                  "WBIF"
               ],
               "matches":[

               ]
            },
            "fraud":{
               "score":null,
               "flags":null
            },
            "financial":{
               "credit":null,
               "banking":null
            },
            "identity_questions":null
         },
         "data":{
            "watchlists":{
               "pep":0,
               "ofac":0
            },
            "identity_theft_risk":1,
            "risk_codes":[
               "PA",
               "SD",
               "10"
            ],
            "followup_codes":[

            ],
            "address":{
               "po_box":false,
               "commercial_mail":false
            },
            "ssn":{
               "issuance_start_date":"1977-01-1",
               "issuance_end_date":"1979-12-1",
               "issuance_state":"VIRGINIA"
            },
            "reverse_phone":{
               "name_first":"THOMAS",
               "name_last":"NICHOLAS",
               "address_city":"RICHMOND",
               "address_state":"VA",
               "address_postal_code_last5":"23220"
            },
            "reverse_name_address":{
               "phone_number":8043563199
            },
            "verification":{
               "dob_day":true,
               "dob_month":true,
               "dob_year":true,
               "name_first_last":true,
               "name_first_address":true,
               "name_last_address":true,
               "name_first_phone":true,
               "name_last_phone":true,
               "name_first_ssn":true,
               "name_last_ssn":true,
               "address_phone":true,
               "address_ssn":true,
               "name_first_last_address":true,
               "name_first_last_phone":true,
               "name_first_last_ssn":true,
               "name_first_address_phone":true,
               "name_last_address_phone":true,
               "name_first_last_address_phone":true,
               "name_first_address_ssn":true,
               "name_last_address_ssn":true,
               "name_first_last_address_ssn":true
            }
         }
      }
   },
   "audit_archive":null
}
   */
