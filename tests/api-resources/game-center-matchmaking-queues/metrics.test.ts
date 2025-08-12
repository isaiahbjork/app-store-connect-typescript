// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metrics', () => {
  // Prism tests are disabled
  test.skip('getExperimentQueueSizes: only required params', async () => {
    const responsePromise = client.gameCenterMatchmakingQueues.metrics.getExperimentQueueSizes('id', {
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
  test.skip('getExperimentQueueSizes: required and optional params', async () => {
    const response = await client.gameCenterMatchmakingQueues.metrics.getExperimentQueueSizes('id', {
      granularity: 'P1D',
      limit: 200,
      sort: ['count'],
    });
  });

  // Prism tests are disabled
  test.skip('getExperimentRequests: only required params', async () => {
    const responsePromise = client.gameCenterMatchmakingQueues.metrics.getExperimentRequests('id', {
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
  test.skip('getExperimentRequests: required and optional params', async () => {
    const response = await client.gameCenterMatchmakingQueues.metrics.getExperimentRequests('id', {
      granularity: 'P1D',
      'filter[gameCenterDetail]': 'filter[gameCenterDetail]',
      'filter[result]': 'MATCHED',
      groupBy: ['result'],
      limit: 200,
      sort: ['count'],
    });
  });

  // Prism tests are disabled
  test.skip('getQueueSizes: only required params', async () => {
    const responsePromise = client.gameCenterMatchmakingQueues.metrics.getQueueSizes('id', {
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
  test.skip('getQueueSizes: required and optional params', async () => {
    const response = await client.gameCenterMatchmakingQueues.metrics.getQueueSizes('id', {
      granularity: 'P1D',
      limit: 200,
      sort: ['count'],
    });
  });

  // Prism tests are disabled
  test.skip('getRequests: only required params', async () => {
    const responsePromise = client.gameCenterMatchmakingQueues.metrics.getRequests('id', {
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
  test.skip('getRequests: required and optional params', async () => {
    const response = await client.gameCenterMatchmakingQueues.metrics.getRequests('id', {
      granularity: 'P1D',
      'filter[gameCenterDetail]': 'filter[gameCenterDetail]',
      'filter[result]': 'MATCHED',
      groupBy: ['result'],
      limit: 200,
      sort: ['count'],
    });
  });

  // Prism tests are disabled
  test.skip('getSessions: only required params', async () => {
    const responsePromise = client.gameCenterMatchmakingQueues.metrics.getSessions('id', {
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
  test.skip('getSessions: required and optional params', async () => {
    const response = await client.gameCenterMatchmakingQueues.metrics.getSessions('id', {
      granularity: 'P1D',
      limit: 200,
      sort: ['count'],
    });
  });
});
