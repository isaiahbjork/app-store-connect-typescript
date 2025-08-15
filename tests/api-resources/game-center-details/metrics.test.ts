// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metrics', () => {
  // Prism tests are disabled
  test.skip('retrieveClassicMatchmakingRequests: only required params', async () => {
    const responsePromise = client.gameCenterDetails.metrics.retrieveClassicMatchmakingRequests('id', {
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

  // Prism tests are disabled
  test.skip('retrieveClassicMatchmakingRequests: required and optional params', async () => {
    const response = await client.gameCenterDetails.metrics.retrieveClassicMatchmakingRequests('id', {
      granularity: 'P1D',
      'filter[result]': 'MATCHED',
      groupBy: ['result'],
      limit: 200,
      sort: ['count'],
    });
  });

  // Prism tests are disabled
  test.skip('retrieveRuleBasedMatchmakingRequests: only required params', async () => {
    const responsePromise = client.gameCenterDetails.metrics.retrieveRuleBasedMatchmakingRequests('id', {
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

  // Prism tests are disabled
  test.skip('retrieveRuleBasedMatchmakingRequests: required and optional params', async () => {
    const response = await client.gameCenterDetails.metrics.retrieveRuleBasedMatchmakingRequests('id', {
      granularity: 'P1D',
      'filter[result]': 'MATCHED',
      groupBy: ['result'],
      limit: 200,
      sort: ['count'],
    });
  });
});
