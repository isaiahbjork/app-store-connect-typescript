// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appCustomProductPageLocalizations', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.appCustomProductPageLocalizations.create({
      data: {
        attributes: { locale: 'locale' },
        relationships: {
          appCustomProductPageVersion: { data: { id: 'id', type: 'appCustomProductPageVersions' } },
        },
        type: 'appCustomProductPageLocalizations',
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
    const response = await client.appCustomProductPageLocalizations.create({
      data: {
        attributes: { locale: 'locale', promotionalText: 'promotionalText' },
        relationships: {
          appCustomProductPageVersion: { data: { id: 'id', type: 'appCustomProductPageVersions' } },
        },
        type: 'appCustomProductPageLocalizations',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.appCustomProductPageLocalizations.retrieve('id');
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
      client.appCustomProductPageLocalizations.retrieve(
        'id',
        {
          'fields[appCustomProductPageLocalizations]': ['locale'],
          'fields[appPreviewSets]': ['previewType'],
          'fields[appScreenshotSets]': ['screenshotDisplayType'],
          include: ['appCustomProductPageVersion'],
          'limit[appPreviewSets]': 50,
          'limit[appScreenshotSets]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.appCustomProductPageLocalizations.update('id', {
      data: { id: 'id', type: 'appCustomProductPageLocalizations' },
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
    const response = await client.appCustomProductPageLocalizations.update('id', {
      data: {
        id: 'id',
        type: 'appCustomProductPageLocalizations',
        attributes: { promotionalText: 'promotionalText' },
      },
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.appCustomProductPageLocalizations.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAppPreviewSets', async () => {
    const responsePromise = client.appCustomProductPageLocalizations.listAppPreviewSets('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAppPreviewSets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appCustomProductPageLocalizations.listAppPreviewSets(
        'id',
        {
          'fields[appCustomProductPageLocalizations]': ['locale'],
          'fields[appPreviews]': ['fileSize'],
          'fields[appPreviewSets]': ['previewType'],
          'fields[appStoreVersionExperimentTreatmentLocalizations]': ['locale'],
          'fields[appStoreVersionLocalizations]': ['description'],
          'filter[appStoreVersionExperimentTreatmentLocalization]': ['string'],
          'filter[appStoreVersionLocalization]': ['string'],
          'filter[previewType]': ['IPHONE_67'],
          include: ['appStoreVersionLocalization'],
          limit: 200,
          'limit[appPreviews]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listAppScreenshotSets', async () => {
    const responsePromise = client.appCustomProductPageLocalizations.listAppScreenshotSets('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAppScreenshotSets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appCustomProductPageLocalizations.listAppScreenshotSets(
        'id',
        {
          'fields[appCustomProductPageLocalizations]': ['locale'],
          'fields[appScreenshots]': ['fileSize'],
          'fields[appScreenshotSets]': ['screenshotDisplayType'],
          'fields[appStoreVersionExperimentTreatmentLocalizations]': ['locale'],
          'fields[appStoreVersionLocalizations]': ['description'],
          'filter[appStoreVersionExperimentTreatmentLocalization]': ['string'],
          'filter[appStoreVersionLocalization]': ['string'],
          'filter[screenshotDisplayType]': ['APP_IPHONE_67'],
          include: ['appStoreVersionLocalization'],
          limit: 200,
          'limit[appScreenshots]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
