// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptionGroups', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.subscriptionGroups.create({
      data: {
        attributes: { referenceName: 'referenceName' },
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'subscriptionGroups',
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
    const response = await client.subscriptionGroups.create({
      data: {
        attributes: { referenceName: 'referenceName' },
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'subscriptionGroups',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.subscriptionGroups.retrieve('id');
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
      client.subscriptionGroups.retrieve(
        'id',
        {
          'fields[subscriptionGroupLocalizations]': ['name'],
          'fields[subscriptionGroups]': ['referenceName'],
          'fields[subscriptions]': ['name'],
          include: ['subscriptions'],
          'limit[subscriptionGroupLocalizations]': 50,
          'limit[subscriptions]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.subscriptionGroups.update('id', {
      data: { id: 'id', type: 'subscriptionGroups' },
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
  test.skip('update: required and optional params', async () => {
    const response = await client.subscriptionGroups.update('id', {
      data: { id: 'id', type: 'subscriptionGroups', attributes: { referenceName: 'referenceName' } },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.subscriptionGroups.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listLocalizations', async () => {
    const responsePromise = client.subscriptionGroups.listLocalizations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listLocalizations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptionGroups.listLocalizations(
        'id',
        {
          'fields[subscriptionGroupLocalizations]': ['name'],
          'fields[subscriptionGroups]': ['referenceName'],
          include: ['subscriptionGroup'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listSubscriptions', async () => {
    const responsePromise = client.subscriptionGroups.listSubscriptions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listSubscriptions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptionGroups.listSubscriptions(
        'id',
        {
          'fields[promotedPurchases]': ['visibleForAllUsers'],
          'fields[subscriptionAppStoreReviewScreenshots]': ['fileSize'],
          'fields[subscriptionAvailabilities]': ['availableInNewTerritories'],
          'fields[subscriptionGroups]': ['referenceName'],
          'fields[subscriptionImages]': ['fileSize'],
          'fields[subscriptionIntroductoryOffers]': ['startDate'],
          'fields[subscriptionLocalizations]': ['name'],
          'fields[subscriptionOfferCodes]': ['name'],
          'fields[subscriptionPrices]': ['startDate'],
          'fields[subscriptionPromotionalOffers]': ['duration'],
          'fields[subscriptions]': ['name'],
          'fields[winBackOffers]': ['referenceName'],
          'filter[name]': ['string'],
          'filter[productId]': ['string'],
          'filter[state]': ['MISSING_METADATA'],
          include: ['subscriptionLocalizations'],
          limit: 200,
          'limit[images]': 50,
          'limit[introductoryOffers]': 50,
          'limit[offerCodes]': 50,
          'limit[prices]': 50,
          'limit[promotionalOffers]': 50,
          'limit[subscriptionLocalizations]': 50,
          'limit[winBackOffers]': 50,
          sort: ['name'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
