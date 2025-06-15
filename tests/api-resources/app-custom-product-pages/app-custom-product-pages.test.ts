// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appCustomProductPages', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.appCustomProductPages.create({
      data: {
        attributes: { name: 'name' },
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'appCustomProductPages',
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
    const response = await client.appCustomProductPages.create({
      data: {
        attributes: { name: 'name' },
        relationships: {
          app: { data: { id: 'id', type: 'apps' } },
          appCustomProductPageVersions: { data: [{ id: 'id', type: 'appCustomProductPageVersions' }] },
          appStoreVersionTemplate: { data: { id: 'id', type: 'appStoreVersions' } },
          customProductPageTemplate: { data: { id: 'id', type: 'appCustomProductPages' } },
        },
        type: 'appCustomProductPages',
      },
      included: [
        {
          attributes: { locale: 'locale', promotionalText: 'promotionalText' },
          type: 'appCustomProductPageLocalizations',
          id: 'id',
          relationships: {
            appCustomProductPageVersion: { data: { id: 'id', type: 'appCustomProductPageVersions' } },
          },
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.appCustomProductPages.retrieve('id');
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
      client.appCustomProductPages.retrieve(
        'id',
        {
          'fields[appCustomProductPages]': ['name'],
          'fields[appCustomProductPageVersions]': ['version'],
          include: ['app'],
          'limit[appCustomProductPageVersions]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.appCustomProductPages.update('id', {
      data: { id: 'id', type: 'appCustomProductPages' },
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
    const response = await client.appCustomProductPages.update('id', {
      data: { id: 'id', type: 'appCustomProductPages', attributes: { name: 'name', visible: true } },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.appCustomProductPages.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listVersions', async () => {
    const responsePromise = client.appCustomProductPages.listVersions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appCustomProductPages.listVersions(
        'id',
        {
          'fields[appCustomProductPageLocalizations]': ['locale'],
          'fields[appCustomProductPages]': ['name'],
          'fields[appCustomProductPageVersions]': ['version'],
          'filter[state]': ['PREPARE_FOR_SUBMISSION'],
          include: ['appCustomProductPage'],
          limit: 200,
          'limit[appCustomProductPageLocalizations]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
