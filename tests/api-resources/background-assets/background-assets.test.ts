// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource backgroundAssets', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.backgroundAssets.create({
      data: {
        attributes: { assetPackIdentifier: 'assetPackIdentifier' },
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'backgroundAssets',
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
    const response = await client.backgroundAssets.create({
      data: {
        attributes: { assetPackIdentifier: 'assetPackIdentifier' },
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'backgroundAssets',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.backgroundAssets.retrieve('id');
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
      client.backgroundAssets.retrieve(
        'id',
        { 'fields[backgroundAssets]': ['assetPackIdentifier'], include: ['internalBetaVersion'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listVersions', async () => {
    const responsePromise = client.backgroundAssets.listVersions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.backgroundAssets.listVersions(
        'id',
        {
          'fields[backgroundAssetUploadFiles]': ['assetDeliveryState'],
          'fields[backgroundAssetVersionInternalBetaReleases]': ['state'],
          'fields[backgroundAssetVersions]': ['createdDate'],
          'filter[internalBetaRelease': { 'state]': ['READY_FOR_TESTING'] },
          'filter[state]': ['AWAITING_UPLOAD'],
          'filter[version]': ['string'],
          include: ['internalBetaRelease'],
          limit: 200,
          sort: ['version'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
