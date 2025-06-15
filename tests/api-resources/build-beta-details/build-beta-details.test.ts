// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource buildBetaDetails', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.buildBetaDetails.retrieve('id');
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
      client.buildBetaDetails.retrieve(
        'id',
        {
          'fields[buildBetaDetails]': ['autoNotifyEnabled'],
          'fields[builds]': ['version'],
          include: ['build'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.buildBetaDetails.update('id', {
      data: { id: 'id', type: 'buildBetaDetails' },
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
    const response = await client.buildBetaDetails.update('id', {
      data: { id: 'id', type: 'buildBetaDetails', attributes: { autoNotifyEnabled: true } },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.buildBetaDetails.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.buildBetaDetails.list(
        {
          'fields[buildBetaDetails]': ['autoNotifyEnabled'],
          'fields[builds]': ['version'],
          'filter[build]': ['string'],
          'filter[id]': ['string'],
          include: ['build'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBuild', async () => {
    const responsePromise = client.buildBetaDetails.retrieveBuild('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBuild: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.buildBetaDetails.retrieveBuild(
        'id',
        {
          'fields[appEncryptionDeclarations]': ['appDescription'],
          'fields[apps]': ['accessibilityUrl'],
          'fields[appStoreVersions]': ['platform'],
          'fields[betaAppReviewSubmissions]': ['betaReviewState'],
          'fields[betaBuildLocalizations]': ['whatsNew'],
          'fields[betaGroups]': ['name'],
          'fields[betaTesters]': ['firstName'],
          'fields[buildBetaDetails]': ['autoNotifyEnabled'],
          'fields[buildBundles]': ['bundleId'],
          'fields[buildIcons]': ['iconAsset'],
          'fields[builds]': ['version'],
          'fields[preReleaseVersions]': ['version'],
          include: ['preReleaseVersion'],
          'limit[betaBuildLocalizations]': 50,
          'limit[betaGroups]': 50,
          'limit[buildBundles]': 50,
          'limit[icons]': 50,
          'limit[individualTesters]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
