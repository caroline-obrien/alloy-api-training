/* eslint-disable max-len */
/* eslint-disable no-console */

require('dotenv').config({ path: '../.env' });
const utils = require('../utils');

const params = {
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

const paramsTrue = {
  ...params,
  name_first: 'Existing Customer True',
  meta: {
    exists_in_core: true
  }
};

const paramsFalse = {
  ...params,
  name_first: 'Existing Customer False',
  meta: {
    exists_in_core: false
  }
};

utils.runEvaluation(paramsTrue, { workflowVersion: '5' })
  .then((res) => console.log(res.data.summary.outcome));

utils.runEvaluation(paramsFalse, { workflowVersion: '5' })
  .then((res) => console.log(res.data.summary.outcome));
