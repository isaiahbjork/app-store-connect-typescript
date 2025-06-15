// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptionPrices', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.subscriptionPrices.create({
      data: {
        relationships: {
          subscription: { data: { id: 'id', type: 'subscriptions' } },
          subscriptionPricePoint: { data: { id: 'id', type: 'subscriptionPricePoints' } },
        },
        type: 'subscriptionPrices',
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
    const response = await client.subscriptionPrices.create({
      data: {
        relationships: {
          subscription: { data: { id: 'id', type: 'subscriptions' } },
          subscriptionPricePoint: { data: { id: 'id', type: 'subscriptionPricePoints' } },
          territory: { data: { id: 'id', type: 'territories' } },
        },
        type: 'subscriptionPrices',
        attributes: { preserveCurrentPrice: true, startDate: '2019-12-27' },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.subscriptionPrices.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
