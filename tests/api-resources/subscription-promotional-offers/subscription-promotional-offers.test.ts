// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptionPromotionalOffers', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.subscriptionPromotionalOffers.create({
      data: {
        attributes: {
          duration: 'THREE_DAYS',
          name: 'name',
          numberOfPeriods: 0,
          offerCode: 'offerCode',
          offerMode: 'PAY_AS_YOU_GO',
        },
        relationships: {
          prices: { data: [{ id: 'id', type: 'subscriptionPromotionalOfferPrices' }] },
          subscription: { data: { id: 'id', type: 'subscriptions' } },
        },
        type: 'subscriptionPromotionalOffers',
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
    const response = await client.subscriptionPromotionalOffers.create({
      data: {
        attributes: {
          duration: 'THREE_DAYS',
          name: 'name',
          numberOfPeriods: 0,
          offerCode: 'offerCode',
          offerMode: 'PAY_AS_YOU_GO',
        },
        relationships: {
          prices: { data: [{ id: 'id', type: 'subscriptionPromotionalOfferPrices' }] },
          subscription: { data: { id: 'id', type: 'subscriptions' } },
        },
        type: 'subscriptionPromotionalOffers',
      },
      included: [
        {
          type: 'subscriptionPromotionalOfferPrices',
          id: 'id',
          relationships: {
            subscriptionPricePoint: { data: { id: 'id', type: 'subscriptionPricePoints' } },
            territory: { data: { id: 'id', type: 'territories' } },
          },
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.subscriptionPromotionalOffers.retrieve('id');
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
      client.subscriptionPromotionalOffers.retrieve(
        'id',
        {
          'fields[subscriptionPromotionalOfferPrices]': ['territory'],
          'fields[subscriptionPromotionalOffers]': ['duration'],
          include: ['subscription'],
          'limit[prices]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.subscriptionPromotionalOffers.update('id', {
      data: { id: 'id', type: 'subscriptionPromotionalOffers' },
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
    const response = await client.subscriptionPromotionalOffers.update('id', {
      data: {
        id: 'id',
        type: 'subscriptionPromotionalOffers',
        relationships: { prices: { data: [{ id: 'id', type: 'subscriptionPromotionalOfferPrices' }] } },
      },
      included: [
        {
          type: 'subscriptionPromotionalOfferPrices',
          id: 'id',
          relationships: {
            subscriptionPricePoint: { data: { id: 'id', type: 'subscriptionPricePoints' } },
            territory: { data: { id: 'id', type: 'territories' } },
          },
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.subscriptionPromotionalOffers.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listPrices', async () => {
    const responsePromise = client.subscriptionPromotionalOffers.listPrices('id');
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
      client.subscriptionPromotionalOffers.listPrices(
        'id',
        {
          'fields[subscriptionPricePoints]': ['customerPrice'],
          'fields[subscriptionPromotionalOfferPrices]': ['territory'],
          'fields[territories]': ['currency'],
          'filter[territory]': ['string'],
          include: ['territory'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
