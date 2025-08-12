// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.subscriptions.create({
      data: {
        attributes: { name: 'name', productId: 'productId' },
        relationships: { group: { data: { id: 'id', type: 'subscriptionGroups' } } },
        type: 'subscriptions',
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
    const response = await client.subscriptions.create({
      data: {
        attributes: {
          name: 'name',
          productId: 'productId',
          familySharable: true,
          groupLevel: 0,
          reviewNote: 'reviewNote',
          subscriptionPeriod: 'ONE_WEEK',
        },
        relationships: { group: { data: { id: 'id', type: 'subscriptionGroups' } } },
        type: 'subscriptions',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.subscriptions.retrieve('id');
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
      client.subscriptions.retrieve(
        'id',
        {
          'fields[promotedPurchases]': ['visibleForAllUsers'],
          'fields[subscriptionAppStoreReviewScreenshots]': ['fileSize'],
          'fields[subscriptionAvailabilities]': ['availableInNewTerritories'],
          'fields[subscriptionImages]': ['fileSize'],
          'fields[subscriptionIntroductoryOffers]': ['startDate'],
          'fields[subscriptionLocalizations]': ['name'],
          'fields[subscriptionOfferCodes]': ['name'],
          'fields[subscriptionPrices]': ['startDate'],
          'fields[subscriptionPromotionalOffers]': ['duration'],
          'fields[subscriptions]': ['name'],
          'fields[winBackOffers]': ['referenceName'],
          include: ['subscriptionLocalizations'],
          'limit[images]': 50,
          'limit[introductoryOffers]': 50,
          'limit[offerCodes]': 50,
          'limit[prices]': 50,
          'limit[promotionalOffers]': 50,
          'limit[subscriptionLocalizations]': 50,
          'limit[winBackOffers]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.subscriptions.update('id', { data: { id: 'id', type: 'subscriptions' } });
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
    const response = await client.subscriptions.update('id', {
      data: {
        id: 'id',
        type: 'subscriptions',
        attributes: {
          familySharable: true,
          groupLevel: 0,
          name: 'name',
          reviewNote: 'reviewNote',
          subscriptionPeriod: 'ONE_WEEK',
        },
        relationships: {
          introductoryOffers: { data: [{ id: 'id', type: 'subscriptionIntroductoryOffers' }] },
          prices: { data: [{ id: 'id', type: 'subscriptionPrices' }] },
          promotionalOffers: { data: [{ id: 'id', type: 'subscriptionPromotionalOffers' }] },
        },
      },
      included: [
        {
          attributes: {
            duration: 'THREE_DAYS',
            name: 'name',
            numberOfPeriods: 0,
            offerCode: 'offerCode',
            offerMode: 'PAY_AS_YOU_GO',
          },
          type: 'subscriptionPromotionalOffers',
          id: 'id',
          relationships: {
            prices: { data: [{ id: 'id', type: 'subscriptionPromotionalOfferPrices' }] },
            subscription: { data: { id: 'id', type: 'subscriptions' } },
          },
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.subscriptions.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('checkSubscriptionAvailability', async () => {
    const responsePromise = client.subscriptions.checkSubscriptionAvailability('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('checkSubscriptionAvailability: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptions.checkSubscriptionAvailability(
        'id',
        {
          'fields[subscriptionAvailabilities]': ['availableInNewTerritories'],
          'fields[territories]': ['currency'],
          include: ['availableTerritories'],
          'limit[availableTerritories]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listImages', async () => {
    const responsePromise = client.subscriptions.listImages('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listImages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptions.listImages(
        'id',
        {
          'fields[subscriptionImages]': ['fileSize'],
          'fields[subscriptions]': ['name'],
          include: ['subscription'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listIntroductoryOffers', async () => {
    const responsePromise = client.subscriptions.listIntroductoryOffers('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listIntroductoryOffers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptions.listIntroductoryOffers(
        'id',
        {
          'fields[subscriptionIntroductoryOffers]': ['startDate'],
          'fields[subscriptionPricePoints]': ['customerPrice'],
          'fields[subscriptions]': ['name'],
          'fields[territories]': ['currency'],
          'filter[territory]': ['string'],
          include: ['subscription'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listOfferCodes', async () => {
    const responsePromise = client.subscriptions.listOfferCodes('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listOfferCodes: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptions.listOfferCodes(
        'id',
        {
          'fields[subscriptionOfferCodeCustomCodes]': ['customCode'],
          'fields[subscriptionOfferCodeOneTimeUseCodes]': ['numberOfCodes'],
          'fields[subscriptionOfferCodePrices]': ['territory'],
          'fields[subscriptionOfferCodes]': ['name'],
          'fields[subscriptions]': ['name'],
          'filter[territory]': ['string'],
          include: ['subscription'],
          limit: 200,
          'limit[customCodes]': 50,
          'limit[oneTimeUseCodes]': 50,
          'limit[prices]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listPricePoints', async () => {
    const responsePromise = client.subscriptions.listPricePoints('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listPricePoints: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptions.listPricePoints(
        'id',
        {
          'fields[subscriptionPricePoints]': ['customerPrice'],
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
  test.skip('listPrices', async () => {
    const responsePromise = client.subscriptions.listPrices('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listPrices: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptions.listPrices(
        'id',
        {
          'fields[subscriptionPricePoints]': ['customerPrice'],
          'fields[subscriptionPrices]': ['startDate'],
          'fields[territories]': ['currency'],
          'filter[subscriptionPricePoint]': ['string'],
          'filter[territory]': ['string'],
          include: ['territory'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listPromotionalOffers', async () => {
    const responsePromise = client.subscriptions.listPromotionalOffers('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listPromotionalOffers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptions.listPromotionalOffers(
        'id',
        {
          'fields[subscriptionPromotionalOfferPrices]': ['territory'],
          'fields[subscriptionPromotionalOffers]': ['duration'],
          'fields[subscriptions]': ['name'],
          'filter[territory]': ['string'],
          include: ['subscription'],
          limit: 200,
          'limit[prices]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listSubscriptionLocalizations', async () => {
    const responsePromise = client.subscriptions.listSubscriptionLocalizations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listSubscriptionLocalizations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptions.listSubscriptionLocalizations(
        'id',
        {
          'fields[subscriptionLocalizations]': ['name'],
          'fields[subscriptions]': ['name'],
          include: ['subscription'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listWinBackOffers', async () => {
    const responsePromise = client.subscriptions.listWinBackOffers('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listWinBackOffers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptions.listWinBackOffers(
        'id',
        {
          'fields[winBackOfferPrices]': ['territory'],
          'fields[winBackOffers]': ['referenceName'],
          include: ['prices'],
          limit: 200,
          'limit[prices]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveAppStoreReviewScreenshot', async () => {
    const responsePromise = client.subscriptions.retrieveAppStoreReviewScreenshot('id');
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
      client.subscriptions.retrieveAppStoreReviewScreenshot(
        'id',
        {
          'fields[subscriptionAppStoreReviewScreenshots]': ['fileSize'],
          'fields[subscriptions]': ['name'],
          include: ['subscription'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrievePromotedPurchase', async () => {
    const responsePromise = client.subscriptions.retrievePromotedPurchase('id');
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
      client.subscriptions.retrievePromotedPurchase(
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
