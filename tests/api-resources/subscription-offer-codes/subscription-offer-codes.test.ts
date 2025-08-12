// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptionOfferCodes', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.subscriptionOfferCodes.create({
      data: {
        attributes: {
          customerEligibilities: ['NEW'],
          duration: 'THREE_DAYS',
          name: 'name',
          numberOfPeriods: 0,
          offerEligibility: 'STACK_WITH_INTRO_OFFERS',
          offerMode: 'PAY_AS_YOU_GO',
        },
        relationships: {
          prices: { data: [{ id: 'id', type: 'subscriptionOfferCodePrices' }] },
          subscription: { data: { id: 'id', type: 'subscriptions' } },
        },
        type: 'subscriptionOfferCodes',
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
    const response = await client.subscriptionOfferCodes.create({
      data: {
        attributes: {
          customerEligibilities: ['NEW'],
          duration: 'THREE_DAYS',
          name: 'name',
          numberOfPeriods: 0,
          offerEligibility: 'STACK_WITH_INTRO_OFFERS',
          offerMode: 'PAY_AS_YOU_GO',
        },
        relationships: {
          prices: { data: [{ id: 'id', type: 'subscriptionOfferCodePrices' }] },
          subscription: { data: { id: 'id', type: 'subscriptions' } },
        },
        type: 'subscriptionOfferCodes',
      },
      included: [
        {
          type: 'subscriptionOfferCodePrices',
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
    const responsePromise = client.subscriptionOfferCodes.retrieve('id');
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
      client.subscriptionOfferCodes.retrieve(
        'id',
        {
          'fields[subscriptionOfferCodeCustomCodes]': ['customCode'],
          'fields[subscriptionOfferCodeOneTimeUseCodes]': ['numberOfCodes'],
          'fields[subscriptionOfferCodePrices]': ['territory'],
          'fields[subscriptionOfferCodes]': ['name'],
          include: ['subscription'],
          'limit[customCodes]': 50,
          'limit[oneTimeUseCodes]': 50,
          'limit[prices]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.subscriptionOfferCodes.update('id', {
      data: { id: 'id', type: 'subscriptionOfferCodes' },
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
    const response = await client.subscriptionOfferCodes.update('id', {
      data: { id: 'id', type: 'subscriptionOfferCodes', attributes: { active: true } },
    });
  });

  // Prism tests are disabled
  test.skip('listCustomCodes', async () => {
    const responsePromise = client.subscriptionOfferCodes.listCustomCodes('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listCustomCodes: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptionOfferCodes.listCustomCodes(
        'id',
        {
          'fields[subscriptionOfferCodeCustomCodes]': ['customCode'],
          'fields[subscriptionOfferCodes]': ['name'],
          include: ['offerCode'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listOneTimeUseCodes', async () => {
    const responsePromise = client.subscriptionOfferCodes.listOneTimeUseCodes('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listOneTimeUseCodes: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptionOfferCodes.listOneTimeUseCodes(
        'id',
        {
          'fields[subscriptionOfferCodeOneTimeUseCodes]': ['numberOfCodes'],
          'fields[subscriptionOfferCodes]': ['name'],
          include: ['offerCode'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listPrices', async () => {
    const responsePromise = client.subscriptionOfferCodes.listPrices('id');
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
      client.subscriptionOfferCodes.listPrices(
        'id',
        {
          'fields[subscriptionOfferCodePrices]': ['territory'],
          'fields[subscriptionPricePoints]': ['customerPrice'],
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
