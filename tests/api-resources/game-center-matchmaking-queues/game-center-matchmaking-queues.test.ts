// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterMatchmakingQueues', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.gameCenterMatchmakingQueues.create({
      data: {
        attributes: { referenceName: 'referenceName' },
        relationships: { ruleSet: { data: { id: 'id', type: 'gameCenterMatchmakingRuleSets' } } },
        type: 'gameCenterMatchmakingQueues',
      },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.gameCenterMatchmakingQueues.create({
      data: {
        attributes: { referenceName: 'referenceName', classicMatchmakingBundleIds: ['string'] },
        relationships: {
          ruleSet: { data: { id: 'id', type: 'gameCenterMatchmakingRuleSets' } },
          experimentRuleSet: { data: { id: 'id', type: 'gameCenterMatchmakingRuleSets' } },
        },
        type: 'gameCenterMatchmakingQueues',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.gameCenterMatchmakingQueues.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterMatchmakingQueues.retrieve(
        'id',
        { 'fields[gameCenterMatchmakingQueues]': ['referenceName'], include: ['ruleSet'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.gameCenterMatchmakingQueues.update('id', {
      data: { id: 'id', type: 'gameCenterMatchmakingQueues' },
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
  test.skip('update: required and optional params', async () => {
    const response = await client.gameCenterMatchmakingQueues.update('id', {
      data: {
        id: 'id',
        type: 'gameCenterMatchmakingQueues',
        attributes: { classicMatchmakingBundleIds: ['string'] },
        relationships: {
          experimentRuleSet: { data: { id: 'id', type: 'gameCenterMatchmakingRuleSets' } },
          ruleSet: { data: { id: 'id', type: 'gameCenterMatchmakingRuleSets' } },
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.gameCenterMatchmakingQueues.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterMatchmakingQueues.list(
        { 'fields[gameCenterMatchmakingQueues]': ['referenceName'], include: ['ruleSet'], limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.gameCenterMatchmakingQueues.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
