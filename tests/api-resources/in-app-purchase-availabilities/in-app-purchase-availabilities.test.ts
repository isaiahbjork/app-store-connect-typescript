// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inAppPurchaseAvailabilities', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.inAppPurchaseAvailabilities.create({
      data: {
        attributes: { availableInNewTerritories: true },
        relationships: {
          availableTerritories: { data: [{ id: 'id', type: 'territories' }] },
          inAppPurchase: { data: { id: 'id', type: 'inAppPurchases' } },
        },
        type: 'inAppPurchaseAvailabilities',
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
    const response = await client.inAppPurchaseAvailabilities.create({
      data: {
        attributes: { availableInNewTerritories: true },
        relationships: {
          availableTerritories: { data: [{ id: 'id', type: 'territories' }] },
          inAppPurchase: { data: { id: 'id', type: 'inAppPurchases' } },
        },
        type: 'inAppPurchaseAvailabilities',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.inAppPurchaseAvailabilities.retrieve('id');
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
      client.inAppPurchaseAvailabilities.retrieve(
        'id',
        {
          'fields[inAppPurchaseAvailabilities]': ['availableInNewTerritories'],
          'fields[territories]': ['currency'],
          include: ['availableTerritories'],
          'limit[availableTerritories]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAvailableTerritories', async () => {
    const responsePromise = client.inAppPurchaseAvailabilities.listAvailableTerritories('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAvailableTerritories: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.inAppPurchaseAvailabilities.listAvailableTerritories(
        'id',
        { 'fields[territories]': ['currency'], limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
