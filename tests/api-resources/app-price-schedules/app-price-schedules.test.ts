// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appPriceSchedules', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.appPriceSchedules.create({
      data: {
        relationships: {
          app: { data: { id: 'id', type: 'apps' } },
          baseTerritory: { data: { id: 'id', type: 'territories' } },
          manualPrices: { data: [{ id: 'id', type: 'appPrices' }] },
        },
        type: 'appPriceSchedules',
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
    const response = await client.appPriceSchedules.create({
      data: {
        relationships: {
          app: { data: { id: 'id', type: 'apps' } },
          baseTerritory: { data: { id: 'id', type: 'territories' } },
          manualPrices: { data: [{ id: 'id', type: 'appPrices' }] },
        },
        type: 'appPriceSchedules',
      },
      included: [{ type: 'appPrices', id: 'id' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.appPriceSchedules.retrieve('id');
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
      client.appPriceSchedules.retrieve(
        'id',
        {
          'fields[appPrices]': ['manual'],
          'fields[appPriceSchedules]': ['app'],
          'fields[territories]': ['currency'],
          include: ['app'],
          'limit[automaticPrices]': 50,
          'limit[manualPrices]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAutomaticPrices', async () => {
    const responsePromise = client.appPriceSchedules.listAutomaticPrices('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAutomaticPrices: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appPriceSchedules.listAutomaticPrices(
        'id',
        {
          'fields[appPricePoints]': ['customerPrice'],
          'fields[appPrices]': ['manual'],
          'fields[territories]': ['currency'],
          'filter[endDate]': ['string'],
          'filter[startDate]': ['string'],
          'filter[territory]': ['string'],
          include: ['appPricePoint'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listManualPrices', async () => {
    const responsePromise = client.appPriceSchedules.listManualPrices('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listManualPrices: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appPriceSchedules.listManualPrices(
        'id',
        {
          'fields[appPricePoints]': ['customerPrice'],
          'fields[appPrices]': ['manual'],
          'fields[territories]': ['currency'],
          'filter[endDate]': ['string'],
          'filter[startDate]': ['string'],
          'filter[territory]': ['string'],
          include: ['appPricePoint'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBaseTerritory', async () => {
    const responsePromise = client.appPriceSchedules.retrieveBaseTerritory('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBaseTerritory: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appPriceSchedules.retrieveBaseTerritory(
        'id',
        { 'fields[territories]': ['currency'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
