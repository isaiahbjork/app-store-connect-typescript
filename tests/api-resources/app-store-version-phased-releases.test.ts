// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appStoreVersionPhasedReleases', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.appStoreVersionPhasedReleases.create({
      data: {
        relationships: { appStoreVersion: { data: { id: 'id', type: 'appStoreVersions' } } },
        type: 'appStoreVersionPhasedReleases',
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
    const response = await client.appStoreVersionPhasedReleases.create({
      data: {
        relationships: { appStoreVersion: { data: { id: 'id', type: 'appStoreVersions' } } },
        type: 'appStoreVersionPhasedReleases',
        attributes: { phasedReleaseState: 'INACTIVE' },
      },
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.appStoreVersionPhasedReleases.update('id', {
      data: { id: 'id', type: 'appStoreVersionPhasedReleases' },
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
    const response = await client.appStoreVersionPhasedReleases.update('id', {
      data: {
        id: 'id',
        type: 'appStoreVersionPhasedReleases',
        attributes: { phasedReleaseState: 'INACTIVE' },
      },
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.appStoreVersionPhasedReleases.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
