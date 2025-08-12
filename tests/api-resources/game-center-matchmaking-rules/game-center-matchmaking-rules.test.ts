// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterMatchmakingRules', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.gameCenterMatchmakingRules.create({
      data: {
        attributes: {
          description: 'description',
          expression: 'expression',
          referenceName: 'referenceName',
          type: 'COMPATIBLE',
        },
        relationships: { ruleSet: { data: { id: 'id', type: 'gameCenterMatchmakingRuleSets' } } },
        type: 'gameCenterMatchmakingRules',
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
    const response = await client.gameCenterMatchmakingRules.create({
      data: {
        attributes: {
          description: 'description',
          expression: 'expression',
          referenceName: 'referenceName',
          type: 'COMPATIBLE',
          weight: 0,
        },
        relationships: { ruleSet: { data: { id: 'id', type: 'gameCenterMatchmakingRuleSets' } } },
        type: 'gameCenterMatchmakingRules',
      },
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.gameCenterMatchmakingRules.update('id', {
      data: { id: 'id', type: 'gameCenterMatchmakingRules' },
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
    const response = await client.gameCenterMatchmakingRules.update('id', {
      data: {
        id: 'id',
        type: 'gameCenterMatchmakingRules',
        attributes: { description: 'description', expression: 'expression', weight: 0 },
      },
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.gameCenterMatchmakingRules.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
