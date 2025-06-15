// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptionOfferCodeOneTimeUseCodes', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.subscriptionOfferCodeOneTimeUseCodes.create({
      data: {
        attributes: { expirationDate: '2019-12-27', numberOfCodes: 0 },
        relationships: { offerCode: { data: { id: 'id', type: 'subscriptionOfferCodes' } } },
        type: 'subscriptionOfferCodeOneTimeUseCodes',
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
    const response = await client.subscriptionOfferCodeOneTimeUseCodes.create({
      data: {
        attributes: { expirationDate: '2019-12-27', numberOfCodes: 0 },
        relationships: { offerCode: { data: { id: 'id', type: 'subscriptionOfferCodes' } } },
        type: 'subscriptionOfferCodeOneTimeUseCodes',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.subscriptionOfferCodeOneTimeUseCodes.retrieve('id');
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
      client.subscriptionOfferCodeOneTimeUseCodes.retrieve(
        'id',
        { 'fields[subscriptionOfferCodeOneTimeUseCodes]': ['numberOfCodes'], include: ['offerCode'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.subscriptionOfferCodeOneTimeUseCodes.update('id', {
      data: { id: 'id', type: 'subscriptionOfferCodeOneTimeUseCodes' },
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
    const response = await client.subscriptionOfferCodeOneTimeUseCodes.update('id', {
      data: { id: 'id', type: 'subscriptionOfferCodeOneTimeUseCodes', attributes: { active: true } },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listValues', async () => {
    const responsePromise = client.subscriptionOfferCodeOneTimeUseCodes.listValues('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
