/* eslint-disable no-console */
require('dotenv').config({ path: '../.env' });
const utils = require('../utils');

const params = {
  name_first: 'Tuesday',
  name_last: 'KBA Test',
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

const updateParams = {
  answers: [
    {
      question_id: 1,
      answer_id: 1
    },
    {
      question_id: 2,
      answer_id: 1
    },
    {
      question_id: 3,
      answer_id: 1
    }, {
      question_id: 4,
      answer_id: 1
    }, {
      question_id: 5,
      answer_id: 1
    }
  ]
};

utils.runEvaluation(params, { workflowVersion: '3' })
  .then((res) => {
    const { data } = res;
    if (data.status_code === 200) {
      utils.updateEvaluation(updateParams, data.evaluation_token)
        .then((result) => console.log(result.data));
    }
  });
