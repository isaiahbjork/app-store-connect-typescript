// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterMatchmakingRuleSets', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.gameCenterMatchmakingRuleSets.create({
      data: {
        attributes: { maxPlayers: 0, minPlayers: 0, referenceName: 'referenceName', ruleLanguageVersion: 0 },
        type: 'gameCenterMatchmakingRuleSets',
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
    const response = await client.gameCenterMatchmakingRuleSets.create({
      data: {
        attributes: { maxPlayers: 0, minPlayers: 0, referenceName: 'referenceName', ruleLanguageVersion: 0 },
        type: 'gameCenterMatchmakingRuleSets',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.gameCenterMatchmakingRuleSets.retrieve('id');
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
      client.gameCenterMatchmakingRuleSets.retrieve(
        'id',
        {
          'fields[gameCenterMatchmakingQueues]': ['referenceName'],
          'fields[gameCenterMatchmakingRules]': ['referenceName'],
          'fields[gameCenterMatchmakingRuleSets]': ['referenceName'],
          'fields[gameCenterMatchmakingTeams]': ['referenceName'],
          include: ['teams'],
          'limit[matchmakingQueues]': 50,
          'limit[rules]': 50,
          'limit[teams]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.gameCenterMatchmakingRuleSets.update('id', {
      data: { id: 'id', type: 'gameCenterMatchmakingRuleSets' },
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
    const response = await client.gameCenterMatchmakingRuleSets.update('id', {
      data: { id: 'id', type: 'gameCenterMatchmakingRuleSets', attributes: { maxPlayers: 0, minPlayers: 0 } },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.gameCenterMatchmakingRuleSets.list();
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
      client.gameCenterMatchmakingRuleSets.list(
        {
          'fields[gameCenterMatchmakingQueues]': ['referenceName'],
          'fields[gameCenterMatchmakingRules]': ['referenceName'],
          'fields[gameCenterMatchmakingRuleSets]': ['referenceName'],
          'fields[gameCenterMatchmakingTeams]': ['referenceName'],
          include: ['teams'],
          limit: 200,
          'limit[matchmakingQueues]': 50,
          'limit[rules]': 50,
          'limit[teams]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.gameCenterMatchmakingRuleSets.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listMatchmakingQueues', async () => {
    const responsePromise = client.gameCenterMatchmakingRuleSets.listMatchmakingQueues('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listMatchmakingQueues: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterMatchmakingRuleSets.listMatchmakingQueues(
        'id',
        {
          'fields[gameCenterMatchmakingQueues]': ['referenceName'],
          'fields[gameCenterMatchmakingRuleSets]': ['referenceName'],
          include: ['ruleSet'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listRules', async () => {
    const responsePromise = client.gameCenterMatchmakingRuleSets.listRules('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listRules: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterMatchmakingRuleSets.listRules(
        'id',
        { 'fields[gameCenterMatchmakingRules]': ['referenceName'], limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listTeams', async () => {
    const responsePromise = client.gameCenterMatchmakingRuleSets.listTeams('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listTeams: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterMatchmakingRuleSets.listTeams(
        'id',
        { 'fields[gameCenterMatchmakingTeams]': ['referenceName'], limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
