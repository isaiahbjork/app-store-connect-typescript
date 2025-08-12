// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inAppPurchases', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.inAppPurchases.retrieve('id');
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
      client.inAppPurchases.retrieve(
        'id',
        {
          'fields[inAppPurchaseAppStoreReviewScreenshots]': ['fileSize'],
          'fields[inAppPurchaseAvailabilities]': ['availableInNewTerritories'],
          'fields[inAppPurchaseContents]': ['fileName'],
          'fields[inAppPurchaseImages]': ['fileSize'],
          'fields[inAppPurchaseLocalizations]': ['name'],
          'fields[inAppPurchasePricePoints]': ['customerPrice'],
          'fields[inAppPurchasePriceSchedules]': ['baseTerritory'],
          'fields[inAppPurchases]': ['name'],
          'fields[promotedPurchases]': ['visibleForAllUsers'],
          include: ['inAppPurchaseLocalizations'],
          'limit[images]': 50,
          'limit[inAppPurchaseLocalizations]': 50,
          'limit[pricePoints]': 8000,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.inAppPurchases.update('id', {
      data: { id: 'id', type: 'inAppPurchases' },
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
    const response = await client.inAppPurchases.update('id', {
      data: {
        id: 'id',
        type: 'inAppPurchases',
        attributes: { familySharable: true, name: 'name', reviewNote: 'reviewNote' },
      },
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.inAppPurchases.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('inAppPurchases: only required params', async () => {
    const responsePromise = client.inAppPurchases.inAppPurchases({
      data: {
        attributes: { inAppPurchaseType: 'CONSUMABLE', name: 'name', productId: 'productId' },
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'inAppPurchases',
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
  test.skip('inAppPurchases: required and optional params', async () => {
    const response = await client.inAppPurchases.inAppPurchases({
      data: {
        attributes: {
          inAppPurchaseType: 'CONSUMABLE',
          name: 'name',
          productId: 'productId',
          familySharable: true,
          reviewNote: 'reviewNote',
        },
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'inAppPurchases',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieveAppStoreReviewScreenshot', async () => {
    const responsePromise = client.inAppPurchases.retrieveAppStoreReviewScreenshot('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAppStoreReviewScreenshot: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.inAppPurchases.retrieveAppStoreReviewScreenshot(
        'id',
        {
          'fields[inAppPurchaseAppStoreReviewScreenshots]': ['fileSize'],
          'fields[inAppPurchases]': ['name'],
          include: ['inAppPurchaseV2'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveContent', async () => {
    const responsePromise = client.inAppPurchases.retrieveContent('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveContent: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.inAppPurchases.retrieveContent(
        'id',
        {
          'fields[inAppPurchaseContents]': ['fileName'],
          'fields[inAppPurchases]': ['name'],
          include: ['inAppPurchaseV2'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveIapPriceSchedule', async () => {
    const responsePromise = client.inAppPurchases.retrieveIapPriceSchedule('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveIapPriceSchedule: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.inAppPurchases.retrieveIapPriceSchedule(
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
  test.skip('retrieveImages', async () => {
    const responsePromise = client.inAppPurchases.retrieveImages('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveImages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.inAppPurchases.retrieveImages(
        'id',
        {
          'fields[inAppPurchaseImages]': ['fileSize'],
          'fields[inAppPurchases]': ['name'],
          include: ['inAppPurchase'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveInAppPurchaseAvailability', async () => {
    const responsePromise = client.inAppPurchases.retrieveInAppPurchaseAvailability('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveInAppPurchaseAvailability: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.inAppPurchases.retrieveInAppPurchaseAvailability(
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

  // Prism tests are disabled
  test.skip('retrieveInAppPurchaseLocalizations', async () => {
    const responsePromise = client.inAppPurchases.retrieveInAppPurchaseLocalizations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveInAppPurchaseLocalizations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.inAppPurchases.retrieveInAppPurchaseLocalizations(
        'id',
        {
          'fields[inAppPurchaseLocalizations]': ['name'],
          'fields[inAppPurchases]': ['name'],
          include: ['inAppPurchaseV2'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrievePricePoints', async () => {
    const responsePromise = client.inAppPurchases.retrievePricePoints('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrievePricePoints: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.inAppPurchases.retrievePricePoints(
        'id',
        {
          'fields[inAppPurchasePricePoints]': ['customerPrice'],
          'fields[territories]': ['currency'],
          'filter[territory]': ['string'],
          include: ['territory'],
          limit: 8000,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrievePromotedPurchase', async () => {
    const responsePromise = client.inAppPurchases.retrievePromotedPurchase('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrievePromotedPurchase: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.inAppPurchases.retrievePromotedPurchase(
        'id',
        {
          'fields[inAppPurchases]': ['name'],
          'fields[promotedPurchases]': ['visibleForAllUsers'],
          'fields[subscriptions]': ['name'],
          include: ['inAppPurchaseV2'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
