// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptionOfferCodeCustomCodes', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.subscriptionOfferCodeCustomCodes.create({
      data: {
        attributes: { customCode: 'customCode', numberOfCodes: 0 },
        relationships: { offerCode: { data: { id: 'id', type: 'subscriptionOfferCodes' } } },
        type: 'subscriptionOfferCodeCustomCodes',
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
    const response = await client.subscriptionOfferCodeCustomCodes.create({
      data: {
        attributes: { customCode: 'customCode', numberOfCodes: 0, expirationDate: '2019-12-27' },
        relationships: { offerCode: { data: { id: 'id', type: 'subscriptionOfferCodes' } } },
        type: 'subscriptionOfferCodeCustomCodes',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.subscriptionOfferCodeCustomCodes.retrieve('id');
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
      client.subscriptionOfferCodeCustomCodes.retrieve(
        'id',
        { 'fields[subscriptionOfferCodeCustomCodes]': ['customCode'], include: ['offerCode'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.subscriptionOfferCodeCustomCodes.update('id', {
      data: { id: 'id', type: 'subscriptionOfferCodeCustomCodes' },
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
    const response = await client.subscriptionOfferCodeCustomCodes.update('id', {
      data: { id: 'id', type: 'subscriptionOfferCodeCustomCodes', attributes: { active: true } },
    });
  });
});
