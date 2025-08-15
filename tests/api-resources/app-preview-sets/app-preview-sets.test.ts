// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appPreviewSets', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.appPreviewSets.create({
      data: { attributes: { previewType: 'IPHONE_67' }, type: 'appPreviewSets' },
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
    const response = await client.appPreviewSets.create({
      data: {
        attributes: { previewType: 'IPHONE_67' },
        type: 'appPreviewSets',
        relationships: {
          appCustomProductPageLocalization: { data: { id: 'id', type: 'appCustomProductPageLocalizations' } },
          appStoreVersionExperimentTreatmentLocalization: {
            data: { id: 'id', type: 'appStoreVersionExperimentTreatmentLocalizations' },
          },
          appStoreVersionLocalization: { data: { id: 'id', type: 'appStoreVersionLocalizations' } },
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.appPreviewSets.retrieve('id');
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
      client.appPreviewSets.retrieve(
        'id',
        {
          'fields[appPreviews]': ['fileSize'],
          'fields[appPreviewSets]': ['previewType'],
          include: ['appStoreVersionLocalization'],
          'limit[appPreviews]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.appPreviewSets.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAppPreviews', async () => {
    const responsePromise = client.appPreviewSets.listAppPreviews('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAppPreviews: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appPreviewSets.listAppPreviews(
        'id',
        {
          'fields[appPreviews]': ['fileSize'],
          'fields[appPreviewSets]': ['previewType'],
          include: ['appPreviewSet'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
