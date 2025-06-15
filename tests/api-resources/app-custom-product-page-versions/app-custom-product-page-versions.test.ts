// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appCustomProductPageVersions', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.appCustomProductPageVersions.create({
      data: {
        relationships: { appCustomProductPage: { data: { id: 'id', type: 'appCustomProductPages' } } },
        type: 'appCustomProductPageVersions',
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
    const response = await client.appCustomProductPageVersions.create({
      data: {
        relationships: {
          appCustomProductPage: { data: { id: 'id', type: 'appCustomProductPages' } },
          appCustomProductPageLocalizations: {
            data: [{ id: 'id', type: 'appCustomProductPageLocalizations' }],
          },
        },
        type: 'appCustomProductPageVersions',
        attributes: { deepLink: 'https://example.com' },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.appCustomProductPageVersions.retrieve('id');
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
      client.appCustomProductPageVersions.retrieve(
        'id',
        {
          'fields[appCustomProductPageLocalizations]': ['locale'],
          'fields[appCustomProductPageVersions]': ['version'],
          include: ['appCustomProductPage'],
          'limit[appCustomProductPageLocalizations]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.appCustomProductPageVersions.update('id', {
      data: { id: 'id', type: 'appCustomProductPageVersions' },
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
    const response = await client.appCustomProductPageVersions.update('id', {
      data: {
        id: 'id',
        type: 'appCustomProductPageVersions',
        attributes: { deepLink: 'https://example.com' },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listLocalizations', async () => {
    const responsePromise = client.appCustomProductPageVersions.listLocalizations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listLocalizations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appCustomProductPageVersions.listLocalizations(
        'id',
        {
          'fields[appCustomProductPageLocalizations]': ['locale'],
          'fields[appCustomProductPageVersions]': ['version'],
          'fields[appPreviewSets]': ['previewType'],
          'fields[appScreenshotSets]': ['screenshotDisplayType'],
          'filter[locale]': ['string'],
          include: ['appCustomProductPageVersion'],
          limit: 200,
          'limit[appPreviewSets]': 50,
          'limit[appScreenshotSets]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
