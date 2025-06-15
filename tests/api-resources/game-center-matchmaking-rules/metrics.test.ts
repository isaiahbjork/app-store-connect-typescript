// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metrics', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveBooleanRuleResults: only required params', async () => {
    const responsePromise = client.gameCenterMatchmakingRules.metrics.retrieveBooleanRuleResults('id', {
      granularity: 'P1D',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBooleanRuleResults: required and optional params', async () => {
    const response = await client.gameCenterMatchmakingRules.metrics.retrieveBooleanRuleResults('id', {
      granularity: 'P1D',
      'filter[gameCenterMatchmakingQueue]': 'filter[gameCenterMatchmakingQueue]',
      'filter[result]': 'filter[result]',
      groupBy: ['result'],
      limit: 200,
      sort: ['count'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveNumberRuleResults: only required params', async () => {
    const responsePromise = client.gameCenterMatchmakingRules.metrics.retrieveNumberRuleResults('id', {
      granularity: 'P1D',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveNumberRuleResults: required and optional params', async () => {
    const response = await client.gameCenterMatchmakingRules.metrics.retrieveNumberRuleResults('id', {
      granularity: 'P1D',
      'filter[gameCenterMatchmakingQueue]': 'filter[gameCenterMatchmakingQueue]',
      groupBy: ['gameCenterMatchmakingQueue'],
      limit: 200,
      sort: ['count'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRuleErrors: only required params', async () => {
    const responsePromise = client.gameCenterMatchmakingRules.metrics.retrieveRuleErrors('id', {
      granularity: 'P1D',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRuleErrors: required and optional params', async () => {
    const response = await client.gameCenterMatchmakingRules.metrics.retrieveRuleErrors('id', {
      granularity: 'P1D',
      'filter[gameCenterMatchmakingQueue]': 'filter[gameCenterMatchmakingQueue]',
      groupBy: ['gameCenterMatchmakingQueue'],
      limit: 200,
      sort: ['count'],
    });
  });
});
