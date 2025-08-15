// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inAppPurchasePriceSchedules', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.inAppPurchasePriceSchedules.create({
      data: {
        relationships: {
          baseTerritory: { data: { id: 'id', type: 'territories' } },
          inAppPurchase: { data: { id: 'id', type: 'inAppPurchases' } },
          manualPrices: { data: [{ id: 'id', type: 'inAppPurchasePrices' }] },
        },
        type: 'inAppPurchasePriceSchedules',
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
    const response = await client.inAppPurchasePriceSchedules.create({
      data: {
        relationships: {
          baseTerritory: { data: { id: 'id', type: 'territories' } },
          inAppPurchase: { data: { id: 'id', type: 'inAppPurchases' } },
          manualPrices: { data: [{ id: 'id', type: 'inAppPurchasePrices' }] },
        },
        type: 'inAppPurchasePriceSchedules',
      },
      included: [
        {
          type: 'inAppPurchasePrices',
          id: 'id',
          attributes: { endDate: '2019-12-27', startDate: '2019-12-27' },
          relationships: {
            inAppPurchasePricePoint: { data: { id: 'id', type: 'inAppPurchasePricePoints' } },
            inAppPurchaseV2: { data: { id: 'id', type: 'inAppPurchases' } },
          },
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.inAppPurchasePriceSchedules.retrieve('id');
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
      client.inAppPurchasePriceSchedules.retrieve(
        'id',
        {
          'fields[inAppPurchasePrices]': ['startDate'],
          'fields[inAppPurchasePriceSchedules]': ['baseTerritory'],
          'fields[territories]': ['currency'],
          include: ['baseTerritory'],
          'limit[automaticPrices]': 50,
          'limit[manualPrices]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listAutomaticPrices', async () => {
    const responsePromise = client.inAppPurchasePriceSchedules.listAutomaticPrices('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAutomaticPrices: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.inAppPurchasePriceSchedules.listAutomaticPrices(
        'id',
        {
          'fields[inAppPurchasePricePoints]': ['customerPrice'],
          'fields[inAppPurchasePrices]': ['startDate'],
          'fields[territories]': ['currency'],
          'filter[territory]': ['string'],
          include: ['inAppPurchasePricePoint'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listManualPrices', async () => {
    const responsePromise = client.inAppPurchasePriceSchedules.listManualPrices('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listManualPrices: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.inAppPurchasePriceSchedules.listManualPrices(
        'id',
        {
          'fields[inAppPurchasePricePoints]': ['customerPrice'],
          'fields[inAppPurchasePrices]': ['startDate'],
          'fields[territories]': ['currency'],
          'filter[territory]': ['string'],
          include: ['inAppPurchasePricePoint'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveBaseTerritory', async () => {
    const responsePromise = client.inAppPurchasePriceSchedules.retrieveBaseTerritory('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveBaseTerritory: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.inAppPurchasePriceSchedules.retrieveBaseTerritory(
        'id',
        { 'fields[territories]': ['currency'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
