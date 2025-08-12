// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appStoreVersionExperimentTreatmentLocalizations', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.appStoreVersionExperimentTreatmentLocalizations.create({
      data: {
        attributes: { locale: 'locale' },
        relationships: {
          appStoreVersionExperimentTreatment: {
            data: { id: 'id', type: 'appStoreVersionExperimentTreatments' },
          },
        },
        type: 'appStoreVersionExperimentTreatmentLocalizations',
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
    const response = await client.appStoreVersionExperimentTreatmentLocalizations.create({
      data: {
        attributes: { locale: 'locale' },
        relationships: {
          appStoreVersionExperimentTreatment: {
            data: { id: 'id', type: 'appStoreVersionExperimentTreatments' },
          },
        },
        type: 'appStoreVersionExperimentTreatmentLocalizations',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.appStoreVersionExperimentTreatmentLocalizations.retrieve('id');
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
      client.appStoreVersionExperimentTreatmentLocalizations.retrieve(
        'id',
        {
          'fields[appPreviewSets]': ['previewType'],
          'fields[appScreenshotSets]': ['screenshotDisplayType'],
          'fields[appStoreVersionExperimentTreatmentLocalizations]': ['locale'],
          include: ['appStoreVersionExperimentTreatment'],
          'limit[appPreviewSets]': 50,
          'limit[appScreenshotSets]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.appStoreVersionExperimentTreatmentLocalizations.delete('id');
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
    const responsePromise = client.appStoreVersionExperimentTreatmentLocalizations.listAppPreviewSets('id');
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
      client.appStoreVersionExperimentTreatmentLocalizations.listAppPreviewSets(
        'id',
        {
          'fields[appCustomProductPageLocalizations]': ['locale'],
          'fields[appPreviews]': ['fileSize'],
          'fields[appPreviewSets]': ['previewType'],
          'fields[appStoreVersionExperimentTreatmentLocalizations]': ['locale'],
          'fields[appStoreVersionLocalizations]': ['description'],
          'filter[appCustomProductPageLocalization]': ['string'],
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
    const responsePromise =
      client.appStoreVersionExperimentTreatmentLocalizations.listAppScreenshotSets('id');
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
      client.appStoreVersionExperimentTreatmentLocalizations.listAppScreenshotSets(
        'id',
        {
          'fields[appCustomProductPageLocalizations]': ['locale'],
          'fields[appScreenshots]': ['fileSize'],
          'fields[appScreenshotSets]': ['screenshotDisplayType'],
          'fields[appStoreVersionExperimentTreatmentLocalizations]': ['locale'],
          'fields[appStoreVersionLocalizations]': ['description'],
          'filter[appCustomProductPageLocalization]': ['string'],
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
