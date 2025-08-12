// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appClipDefaultExperiences', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.appClipDefaultExperiences.create({
      data: {
        relationships: { appClip: { data: { id: 'id', type: 'appClips' } } },
        type: 'appClipDefaultExperiences',
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
    const response = await client.appClipDefaultExperiences.create({
      data: {
        relationships: {
          appClip: { data: { id: 'id', type: 'appClips' } },
          appClipDefaultExperienceTemplate: { data: { id: 'id', type: 'appClipDefaultExperiences' } },
          releaseWithAppStoreVersion: { data: { id: 'id', type: 'appStoreVersions' } },
        },
        type: 'appClipDefaultExperiences',
        attributes: { action: 'OPEN' },
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.appClipDefaultExperiences.retrieve('id');
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
      client.appClipDefaultExperiences.retrieve(
        'id',
        {
          'fields[appClipAppStoreReviewDetails]': ['invocationUrls'],
          'fields[appClipDefaultExperienceLocalizations]': ['locale'],
          'fields[appClipDefaultExperiences]': ['action'],
          'fields[appStoreVersions]': ['platform'],
          include: ['appClip'],
          'limit[appClipDefaultExperienceLocalizations]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.appClipDefaultExperiences.update('id', {
      data: { id: 'id', type: 'appClipDefaultExperiences' },
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
    const response = await client.appClipDefaultExperiences.update('id', {
      data: {
        id: 'id',
        type: 'appClipDefaultExperiences',
        attributes: { action: 'OPEN' },
        relationships: { releaseWithAppStoreVersion: { data: { id: 'id', type: 'appStoreVersions' } } },
      },
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.appClipDefaultExperiences.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAppClipDefaultExperienceLocalizations', async () => {
    const responsePromise = client.appClipDefaultExperiences.listAppClipDefaultExperienceLocalizations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAppClipDefaultExperienceLocalizations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appClipDefaultExperiences.listAppClipDefaultExperienceLocalizations(
        'id',
        {
          'fields[appClipDefaultExperienceLocalizations]': ['locale'],
          'fields[appClipDefaultExperiences]': ['action'],
          'fields[appClipHeaderImages]': ['fileSize'],
          'filter[locale]': ['string'],
          include: ['appClipDefaultExperience'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveAppClipAppStoreReviewDetail', async () => {
    const responsePromise = client.appClipDefaultExperiences.retrieveAppClipAppStoreReviewDetail('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAppClipAppStoreReviewDetail: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appClipDefaultExperiences.retrieveAppClipAppStoreReviewDetail(
        'id',
        {
          'fields[appClipAppStoreReviewDetails]': ['invocationUrls'],
          'fields[appClipDefaultExperiences]': ['action'],
          include: ['appClipDefaultExperience'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveReleaseWithAppStoreVersion', async () => {
    const responsePromise = client.appClipDefaultExperiences.retrieveReleaseWithAppStoreVersion('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveReleaseWithAppStoreVersion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appClipDefaultExperiences.retrieveReleaseWithAppStoreVersion(
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
