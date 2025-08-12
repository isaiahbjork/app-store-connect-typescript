// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterEnabledVersions', () => {
  // Prism tests are disabled
  test.skip('listCompatibleVersions', async () => {
    const responsePromise = client.gameCenterEnabledVersions.listCompatibleVersions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listCompatibleVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterEnabledVersions.listCompatibleVersions(
        'id',
        {
          'fields[apps]': ['accessibilityUrl'],
          'fields[gameCenterEnabledVersions]': ['platform'],
          'filter[app]': ['string'],
          'filter[id]': ['string'],
          'filter[platform]': ['IOS'],
          'filter[versionString]': ['string'],
          include: ['compatibleVersions'],
          limit: 200,
          'limit[compatibleVersions]': 50,
          sort: ['versionString'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
