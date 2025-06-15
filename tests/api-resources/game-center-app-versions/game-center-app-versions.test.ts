// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterAppVersions', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.gameCenterAppVersions.create({
      data: {
        relationships: { appStoreVersion: { data: { id: 'id', type: 'appStoreVersions' } } },
        type: 'gameCenterAppVersions',
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
    const response = await client.gameCenterAppVersions.create({
      data: {
        relationships: { appStoreVersion: { data: { id: 'id', type: 'appStoreVersions' } } },
        type: 'gameCenterAppVersions',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.gameCenterAppVersions.retrieve('id');
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
      client.gameCenterAppVersions.retrieve(
        'id',
        {
          'fields[appStoreVersions]': ['platform'],
          'fields[gameCenterAppVersions]': ['enabled'],
          include: ['compatibilityVersions'],
          'limit[compatibilityVersions]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.gameCenterAppVersions.update('id', {
      data: { id: 'id', type: 'gameCenterAppVersions' },
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
    const response = await client.gameCenterAppVersions.update('id', {
      data: { id: 'id', type: 'gameCenterAppVersions', attributes: { enabled: true } },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listCompatibilityVersions', async () => {
    const responsePromise = client.gameCenterAppVersions.listCompatibilityVersions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listCompatibilityVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterAppVersions.listCompatibilityVersions(
        'id',
        {
          'fields[appStoreVersions]': ['platform'],
          'fields[gameCenterAppVersions]': ['enabled'],
          'filter[enabled]': ['string'],
          include: ['compatibilityVersions'],
          limit: 200,
          'limit[compatibilityVersions]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreVersion', async () => {
    const responsePromise = client.gameCenterAppVersions.retrieveAppStoreVersion('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreVersion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterAppVersions.retrieveAppStoreVersion(
        'id',
        {
          'fields[ageRatingDeclarations]': ['alcoholTobaccoOrDrugUseOrReferences'],
          'fields[alternativeDistributionPackages]': ['versions'],
          'fields[appClipDefaultExperiences]': ['action'],
          'fields[apps]': ['accessibilityUrl'],
          'fields[appStoreReviewDetails]': ['contactFirstName'],
          'fields[appStoreVersionExperiments]': ['name'],
          'fields[appStoreVersionLocalizations]': ['description'],
          'fields[appStoreVersionPhasedReleases]': ['phasedReleaseState'],
          'fields[appStoreVersions]': ['platform'],
          'fields[appStoreVersionSubmissions]': ['appStoreVersion'],
          'fields[builds]': ['version'],
          'fields[gameCenterAppVersions]': ['enabled'],
          'fields[routingAppCoverages]': ['fileSize'],
          include: ['app'],
          'limit[appStoreVersionExperiments]': 50,
          'limit[appStoreVersionExperimentsV2]': 50,
          'limit[appStoreVersionLocalizations]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
