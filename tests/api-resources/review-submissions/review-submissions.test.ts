// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reviewSubmissions', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.reviewSubmissions.create({
      data: { relationships: { app: { data: { id: 'id', type: 'apps' } } }, type: 'reviewSubmissions' },
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
    const response = await client.reviewSubmissions.create({
      data: {
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'reviewSubmissions',
        attributes: { platform: 'IOS' },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.reviewSubmissions.retrieve('id');
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
      client.reviewSubmissions.retrieve(
        'id',
        {
          'fields[reviewSubmissionItems]': ['state'],
          'fields[reviewSubmissions]': ['platform'],
          include: ['app'],
          'limit[items]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.reviewSubmissions.update('id', {
      data: { id: 'id', type: 'reviewSubmissions' },
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
    const response = await client.reviewSubmissions.update('id', {
      data: {
        id: 'id',
        type: 'reviewSubmissions',
        attributes: { canceled: true, platform: 'IOS', submitted: true },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.reviewSubmissions.list({ 'filter[app]': ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.reviewSubmissions.list({
      'filter[app]': ['string'],
      'fields[reviewSubmissionItems]': ['state'],
      'fields[reviewSubmissions]': ['platform'],
      'filter[platform]': ['IOS'],
      'filter[state]': ['READY_FOR_REVIEW'],
      include: ['app'],
      limit: 200,
      'limit[items]': 50,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listItems', async () => {
    const responsePromise = client.reviewSubmissions.listItems('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listItems: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reviewSubmissions.listItems(
        'id',
        {
          'fields[appCustomProductPageVersions]': ['version'],
          'fields[appEvents]': ['referenceName'],
          'fields[appStoreVersionExperiments]': ['name'],
          'fields[appStoreVersions]': ['platform'],
          'fields[reviewSubmissionItems]': ['state'],
          include: ['appStoreVersion'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
