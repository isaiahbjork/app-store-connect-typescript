// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appStoreReviewDetails', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.appStoreReviewDetails.create({
      data: {
        relationships: { appStoreVersion: { data: { id: 'id', type: 'appStoreVersions' } } },
        type: 'appStoreReviewDetails',
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
    const response = await client.appStoreReviewDetails.create({
      data: {
        relationships: { appStoreVersion: { data: { id: 'id', type: 'appStoreVersions' } } },
        type: 'appStoreReviewDetails',
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

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.appStoreReviewDetails.retrieve('id');
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
      client.appStoreReviewDetails.retrieve(
        'id',
        {
          'fields[appStoreReviewAttachments]': ['fileSize'],
          'fields[appStoreReviewDetails]': ['contactFirstName'],
          include: ['appStoreVersion'],
          'limit[appStoreReviewAttachments]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.appStoreReviewDetails.update('id', {
      data: { id: 'id', type: 'appStoreReviewDetails' },
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
    const response = await client.appStoreReviewDetails.update('id', {
      data: {
        id: 'id',
        type: 'appStoreReviewDetails',
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

  // skipped: tests are disabled for the time being
  test.skip('listAttachments', async () => {
    const responsePromise = client.appStoreReviewDetails.listAttachments('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAttachments: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appStoreReviewDetails.listAttachments(
        'id',
        {
          'fields[appStoreReviewAttachments]': ['fileSize'],
          'fields[appStoreReviewDetails]': ['contactFirstName'],
          include: ['appStoreReviewDetail'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
