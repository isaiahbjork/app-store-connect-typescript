// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appAvailabilities', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.appAvailabilities.create({
      data: {
        attributes: { availableInNewTerritories: true },
        relationships: {
          app: { data: { id: 'id', type: 'apps' } },
          territoryAvailabilities: { data: [{ id: 'id', type: 'territoryAvailabilities' }] },
        },
        type: 'appAvailabilities',
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

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.appAvailabilities.create({
      data: {
        attributes: { availableInNewTerritories: true },
        relationships: {
          app: { data: { id: 'id', type: 'apps' } },
          territoryAvailabilities: { data: [{ id: 'id', type: 'territoryAvailabilities' }] },
        },
        type: 'appAvailabilities',
      },
      included: [{ type: 'territoryAvailabilities', id: 'id' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.appAvailabilities.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appAvailabilities.retrieve(
        'id',
        {
          'fields[appAvailabilities]': ['availableInNewTerritories'],
          'fields[territoryAvailabilities]': ['available'],
          include: ['territoryAvailabilities'],
          'limit[territoryAvailabilities]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTerritoryAvailabilities', async () => {
    const responsePromise = client.appAvailabilities.listTerritoryAvailabilities('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTerritoryAvailabilities: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appAvailabilities.listTerritoryAvailabilities(
        'id',
        {
          'fields[territories]': ['currency'],
          'fields[territoryAvailabilities]': ['available'],
          include: ['territory'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
