// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource betaAppReviewDetails', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.betaAppReviewDetails.retrieve('id');
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
      client.betaAppReviewDetails.retrieve(
        'id',
        {
          'fields[apps]': ['accessibilityUrl'],
          'fields[betaAppReviewDetails]': ['contactFirstName'],
          include: ['app'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.betaAppReviewDetails.update('id', {
      data: { id: 'id', type: 'betaAppReviewDetails' },
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
    const response = await client.betaAppReviewDetails.update('id', {
      data: {
        id: 'id',
        type: 'betaAppReviewDetails',
        attributes: {
          contactEmail: 'contactEmail',
          contactFirstName: 'contactFirstName',
          contactLastName: 'contactLastName',
          contactPhone: 'contactPhone',
          demoAccountName: 'demoAccountName',
          demoAccountPassword: 'demoAccountPassword',
          demoAccountRequired: true,
          notes: 'notes',
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.betaAppReviewDetails.list({ 'filter[app]': ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.betaAppReviewDetails.list({
      'filter[app]': ['string'],
      'fields[apps]': ['accessibilityUrl'],
      'fields[betaAppReviewDetails]': ['contactFirstName'],
      include: ['app'],
      limit: 200,
    });
  });

  // Prism tests are disabled
  test.skip('retrieveApp', async () => {
    const responsePromise = client.betaAppReviewDetails.retrieveApp('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveApp: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.betaAppReviewDetails.retrieveApp(
        'id',
        { 'fields[apps]': ['accessibilityUrl'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
