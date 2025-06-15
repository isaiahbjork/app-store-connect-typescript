// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource winBackOffers', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.winBackOffers.create({
      data: {
        attributes: {
          customerEligibilityPaidSubscriptionDurationInMonths: 0,
          customerEligibilityTimeSinceLastSubscribedInMonths: {},
          duration: 'THREE_DAYS',
          offerId: 'offerId',
          offerMode: 'PAY_AS_YOU_GO',
          periodCount: 0,
          priority: 'HIGH',
          referenceName: 'referenceName',
          startDate: '2019-12-27',
        },
        relationships: {
          prices: { data: [{ id: 'id', type: 'winBackOfferPrices' }] },
          subscription: { data: { id: 'id', type: 'subscriptions' } },
        },
        type: 'winBackOffers',
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
    const response = await client.winBackOffers.create({
      data: {
        attributes: {
          customerEligibilityPaidSubscriptionDurationInMonths: 0,
          customerEligibilityTimeSinceLastSubscribedInMonths: { maximum: 0, minimum: 0 },
          duration: 'THREE_DAYS',
          offerId: 'offerId',
          offerMode: 'PAY_AS_YOU_GO',
          periodCount: 0,
          priority: 'HIGH',
          referenceName: 'referenceName',
          startDate: '2019-12-27',
          customerEligibilityWaitBetweenOffersInMonths: 0,
          endDate: '2019-12-27',
          promotionIntent: 'NOT_PROMOTED',
        },
        relationships: {
          prices: { data: [{ id: 'id', type: 'winBackOfferPrices' }] },
          subscription: { data: { id: 'id', type: 'subscriptions' } },
        },
        type: 'winBackOffers',
      },
      included: [{ type: 'winBackOfferPrices', id: 'id' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.winBackOffers.retrieve('id');
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
      client.winBackOffers.retrieve(
        'id',
        {
          'fields[winBackOfferPrices]': ['territory'],
          'fields[winBackOffers]': ['referenceName'],
          include: ['prices'],
          'limit[prices]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.winBackOffers.update('id', { data: { id: 'id', type: 'winBackOffers' } });
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
    const response = await client.winBackOffers.update('id', {
      data: {
        id: 'id',
        type: 'winBackOffers',
        attributes: {
          customerEligibilityPaidSubscriptionDurationInMonths: 0,
          customerEligibilityTimeSinceLastSubscribedInMonths: { maximum: 0, minimum: 0 },
          customerEligibilityWaitBetweenOffersInMonths: 0,
          endDate: '2019-12-27',
          priority: 'HIGH',
          promotionIntent: 'NOT_PROMOTED',
          startDate: '2019-12-27',
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.winBackOffers.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listPrices', async () => {
    const responsePromise = client.winBackOffers.listPrices('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listPrices: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.winBackOffers.listPrices(
        'id',
        {
          'fields[subscriptionPricePoints]': ['customerPrice'],
          'fields[territories]': ['currency'],
          'fields[winBackOfferPrices]': ['territory'],
          'filter[territory]': ['string'],
          include: ['territory'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
