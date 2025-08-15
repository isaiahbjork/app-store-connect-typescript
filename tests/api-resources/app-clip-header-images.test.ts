// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appClipHeaderImages', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.appClipHeaderImages.create({
      data: {
        attributes: { fileName: 'fileName', fileSize: 0 },
        relationships: {
          appClipDefaultExperienceLocalization: {
            data: { id: 'id', type: 'appClipDefaultExperienceLocalizations' },
          },
        },
        type: 'appClipHeaderImages',
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
    const response = await client.appClipHeaderImages.create({
      data: {
        attributes: { fileName: 'fileName', fileSize: 0 },
        relationships: {
          appClipDefaultExperienceLocalization: {
            data: { id: 'id', type: 'appClipDefaultExperienceLocalizations' },
          },
        },
        type: 'appClipHeaderImages',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.appClipHeaderImages.retrieve('id');
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
      client.appClipHeaderImages.retrieve(
        'id',
        { 'fields[appClipHeaderImages]': ['fileSize'], include: ['appClipDefaultExperienceLocalization'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.appClipHeaderImages.update('id', {
      data: { id: 'id', type: 'appClipHeaderImages' },
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
    const response = await client.appClipHeaderImages.update('id', {
      data: {
        id: 'id',
        type: 'appClipHeaderImages',
        attributes: { sourceFileChecksum: 'sourceFileChecksum', uploaded: true },
      },
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.appClipHeaderImages.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
