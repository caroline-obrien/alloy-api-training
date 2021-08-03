/* eslint-disable no-console */

require('dotenv').config();
const axios = require('axios');
const fs = require('fs').promises;

const SANDBOX_DOMAIN = 'https://sandbox.alloy.co';
const PARAMS_ENDPOINT = 'v1/parameters';
const EVAL_ENDPOINT = 'v1/evaluations';
const ENTITY_ENDPOINT = 'v1/entities';

const auth = {
  username: process.env.BP_WORKFLOW_TOKEN,
  password: process.env.BP_WORKFLOW_SECRET
};

const retrieveWorkflowParameters = async () => {
  const url = `${SANDBOX_DOMAIN}/${PARAMS_ENDPOINT}`;

  try {
    const result = await axios.get(url, { auth });
    return result;
  } catch (e) {
    return e.response;
  }
};

const runEvaluation = async (params, optionalHeaders) => {
  console.log(auth);
  const url = `${SANDBOX_DOMAIN}/${EVAL_ENDPOINT}`;
  const headers = {};

  if (optionalHeaders) {
    const {
      entityToken, bypassCache, bypassFormatter, workflowVersion
    } = optionalHeaders;

    if (entityToken) headers['Alloy-Entity-Token'] = entityToken;
    if (bypassCache) headers['Alloy-Refresh-Cache'] = bypassCache;
    if (bypassFormatter) headers['Alloy-Bypass-Formatter'] = bypassFormatter;
    if (workflowVersion) headers['Alloy-Application-Version'] = workflowVersion;
  }

  try {
    const evaluation = await axios.post(url, params, {
      auth,
      headers
    });

    return evaluation;
  } catch (e) {
    return e.response;
  }
};

const retrieveEvaluation = async (entityToken, evaluationToken) => {
  const url = `${SANDBOX_DOMAIN}/${ENTITY_ENDPOINT}/${entityToken}/evaluations/${evaluationToken}`;

  try {
    const evaluation = await axios.get(url, { auth });
    return evaluation;
  } catch (e) {
    return e.response;
  }
};

const retrieveEntity = async (entityToken) => {
  const url = `${SANDBOX_DOMAIN}/${ENTITY_ENDPOINT}/${entityToken}`;

  try {
    const entity = await axios.get(url, { auth });
    return entity;
  } catch (e) {
    return e.response;
  }
};

const uploadDocument = async (entity, filePath) => {
  const url = `${SANDBOX_DOMAIN}/${ENTITY_ENDPOINT}/${entity}/documents`;

  const metadata = await axios.post(url, {
    name: 'drivers_license_2021',
    extension: 'jpg',
    type: 'license'
  }, { auth });

  const data = await fs.readFile(filePath);

  try {
    const result = await axios.put(
      `${url}/${metadata.data.document_token}`,
      data, {
        auth,
        headers: { 'Content-Type': 'application/octet-stream' }
      }
    );

    return result;
  } catch (e) {
    return e.response;
  }
};

const reviewEntity = async (entityToken) => {
  const url = `${SANDBOX_DOMAIN}/${ENTITY_ENDPOINT}/${entityToken}/reviews`;

  try {
    const review = await axios.post(url, {
      agent: { email: 'caroline@alloy.co' },
      outcome: 'Approved',
      reasons: ['Onboarding Review Flag']
    }, { auth });
    return review;
  } catch (e) {
    return e.response;
  }
};

const getReviewsForEntity = async (entityToken) => {
  const url = `${SANDBOX_DOMAIN}/${ENTITY_ENDPOINT}/${entityToken}/reviews`;

  try {
    const reviews = await axios.get(url, { auth });
    return reviews;
  } catch (e) {
    return e.response;
  }
};

const updateEvaluation = async (params, evaluationToken, optionalHeaders) => {
  const url = `${SANDBOX_DOMAIN}/${EVAL_ENDPOINT}/${evaluationToken}`;
  const headers = {};

  if (optionalHeaders) {
    const {
      entityToken, bypassCache, bypassFormatter, workflowVersion
    } = optionalHeaders;

    if (entityToken) headers['Alloy-Entity-Token'] = entityToken;
    if (bypassCache) headers['Alloy-Refresh-Cache'] = bypassCache;
    if (bypassFormatter) headers['Alloy-Bypass-Formatter'] = bypassFormatter;
    if (workflowVersion) headers['Alloy-Application-Version'] = workflowVersion;
  }

  try {
    const evaluation = await axios.patch(url, params, {
      auth,
      headers
    });

    return evaluation;
  } catch (e) {
    return e.response;
  }
};

module.exports = {
  retrieveWorkflowParameters,
  runEvaluation,
  retrieveEntity,
  retrieveEvaluation,
  reviewEntity,
  getReviewsForEntity,
  uploadDocument,
  updateEvaluation
};
