// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptionIntroductoryOffers', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.subscriptionIntroductoryOffers.create({
      data: {
        attributes: { duration: 'THREE_DAYS', numberOfPeriods: 0, offerMode: 'PAY_AS_YOU_GO' },
        relationships: { subscription: { data: { id: 'id', type: 'subscriptions' } } },
        type: 'subscriptionIntroductoryOffers',
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
    const response = await client.subscriptionIntroductoryOffers.create({
      data: {
        attributes: {
          duration: 'THREE_DAYS',
          numberOfPeriods: 0,
          offerMode: 'PAY_AS_YOU_GO',
          endDate: '2019-12-27',
          startDate: '2019-12-27',
        },
        relationships: {
          subscription: { data: { id: 'id', type: 'subscriptions' } },
          subscriptionPricePoint: { data: { id: 'id', type: 'subscriptionPricePoints' } },
          territory: { data: { id: 'id', type: 'territories' } },
        },
        type: 'subscriptionIntroductoryOffers',
      },
      included: [{ type: 'subscriptionPricePoints', id: 'id' }],
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.subscriptionIntroductoryOffers.update('id', {
      data: { id: 'id', type: 'subscriptionIntroductoryOffers' },
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
    const response = await client.subscriptionIntroductoryOffers.update('id', {
      data: { id: 'id', type: 'subscriptionIntroductoryOffers', attributes: { endDate: '2019-12-27' } },
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.subscriptionIntroductoryOffers.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
