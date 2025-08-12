// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appStoreVersionExperimentTreatments', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.appStoreVersionExperimentTreatments.create({
      data: { attributes: { name: 'name' }, type: 'appStoreVersionExperimentTreatments' },
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
    const response = await client.appStoreVersionExperimentTreatments.create({
      data: {
        attributes: { name: 'name', appIconName: 'appIconName' },
        type: 'appStoreVersionExperimentTreatments',
        relationships: {
          appStoreVersionExperiment: { data: { id: 'id', type: 'appStoreVersionExperiments' } },
          appStoreVersionExperimentV2: { data: { id: 'id', type: 'appStoreVersionExperiments' } },
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.appStoreVersionExperimentTreatments.retrieve('id');
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
      client.appStoreVersionExperimentTreatments.retrieve(
        'id',
        {
          'fields[appStoreVersionExperimentTreatmentLocalizations]': ['locale'],
          'fields[appStoreVersionExperimentTreatments]': ['name'],
          include: ['appStoreVersionExperiment'],
          'limit[appStoreVersionExperimentTreatmentLocalizations]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.appStoreVersionExperimentTreatments.update('id', {
      data: { id: 'id', type: 'appStoreVersionExperimentTreatments' },
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
    const response = await client.appStoreVersionExperimentTreatments.update('id', {
      data: {
        id: 'id',
        type: 'appStoreVersionExperimentTreatments',
        attributes: { appIconName: 'appIconName', name: 'name' },
      },
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.appStoreVersionExperimentTreatments.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listLocalizations', async () => {
    const responsePromise = client.appStoreVersionExperimentTreatments.listLocalizations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listLocalizations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appStoreVersionExperimentTreatments.listLocalizations(
        'id',
        {
          'fields[appPreviewSets]': ['previewType'],
          'fields[appScreenshotSets]': ['screenshotDisplayType'],
          'fields[appStoreVersionExperimentTreatmentLocalizations]': ['locale'],
          'fields[appStoreVersionExperimentTreatments]': ['name'],
          'filter[locale]': ['string'],
          include: ['appStoreVersionExperimentTreatment'],
          limit: 200,
          'limit[appPreviewSets]': 50,
          'limit[appScreenshotSets]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
