// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appStoreVersions', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.appStoreVersions.create({
      data: {
        attributes: { platform: 'IOS', versionString: 'versionString' },
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'appStoreVersions',
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
    const response = await client.appStoreVersions.create({
      data: {
        attributes: {
          platform: 'IOS',
          versionString: 'versionString',
          copyright: 'copyright',
          earliestReleaseDate: '2019-12-27T18:11:19.117Z',
          releaseType: 'MANUAL',
          reviewType: 'APP_STORE',
          usesIdfa: true,
        },
        relationships: {
          app: { data: { id: 'id', type: 'apps' } },
          appStoreVersionLocalizations: { data: [{ id: 'id', type: 'appStoreVersionLocalizations' }] },
          build: { data: { id: 'id', type: 'builds' } },
        },
        type: 'appStoreVersions',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.appStoreVersions.retrieve('id');
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
      client.appStoreVersions.retrieve(
        'id',
        {
          'fields[ageRatingDeclarations]': ['alcoholTobaccoOrDrugUseOrReferences'],
          'fields[alternativeDistributionPackages]': ['versions'],
          'fields[appClipDefaultExperiences]': ['action'],
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

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.appStoreVersions.update('id', {
      data: { id: 'id', type: 'appStoreVersions' },
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
    const response = await client.appStoreVersions.update('id', {
      data: {
        id: 'id',
        type: 'appStoreVersions',
        attributes: {
          copyright: 'copyright',
          downloadable: true,
          earliestReleaseDate: '2019-12-27T18:11:19.117Z',
          releaseType: 'MANUAL',
          reviewType: 'APP_STORE',
          usesIdfa: true,
          versionString: 'versionString',
        },
        relationships: {
          appClipDefaultExperience: { data: { id: 'id', type: 'appClipDefaultExperiences' } },
          build: { data: { id: 'id', type: 'builds' } },
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.appStoreVersions.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAgeRatingDeclaration', async () => {
    const responsePromise = client.appStoreVersions.retrieveAgeRatingDeclaration('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAgeRatingDeclaration: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appStoreVersions.retrieveAgeRatingDeclaration(
        'id',
        { 'fields[ageRatingDeclarations]': ['alcoholTobaccoOrDrugUseOrReferences'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAlternativeDistributionPackage', async () => {
    const responsePromise = client.appStoreVersions.retrieveAlternativeDistributionPackage('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAlternativeDistributionPackage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appStoreVersions.retrieveAlternativeDistributionPackage(
        'id',
        {
          'fields[alternativeDistributionPackages]': ['versions'],
          'fields[alternativeDistributionPackageVersions]': ['url'],
          include: ['versions'],
          'limit[versions]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppClipDefaultExperience', async () => {
    const responsePromise = client.appStoreVersions.retrieveAppClipDefaultExperience('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppClipDefaultExperience: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appStoreVersions.retrieveAppClipDefaultExperience(
        'id',
        {
          'fields[appClipAppStoreReviewDetails]': ['invocationUrls'],
          'fields[appClipDefaultExperienceLocalizations]': ['locale'],
          'fields[appClipDefaultExperiences]': ['action'],
          'fields[appClips]': ['bundleId'],
          'fields[appStoreVersions]': ['platform'],
          include: ['appClip'],
          'limit[appClipDefaultExperienceLocalizations]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreReviewDetail', async () => {
    const responsePromise = client.appStoreVersions.retrieveAppStoreReviewDetail('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreReviewDetail: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appStoreVersions.retrieveAppStoreReviewDetail(
        'id',
        {
          'fields[appStoreReviewAttachments]': ['fileSize'],
          'fields[appStoreReviewDetails]': ['contactFirstName'],
          'fields[appStoreVersions]': ['platform'],
          include: ['appStoreVersion'],
          'limit[appStoreReviewAttachments]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreVersionExperiments', async () => {
    const responsePromise = client.appStoreVersions.retrieveAppStoreVersionExperiments('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreVersionExperiments: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appStoreVersions.retrieveAppStoreVersionExperiments(
        'id',
        {
          'fields[appStoreVersionExperiments]': ['name'],
          'fields[appStoreVersionExperimentTreatments]': ['name'],
          'fields[appStoreVersions]': ['platform'],
          'filter[state]': ['PREPARE_FOR_SUBMISSION'],
          include: ['appStoreVersion'],
          limit: 200,
          'limit[appStoreVersionExperimentTreatments]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreVersionExperimentsV2', async () => {
    const responsePromise = client.appStoreVersions.retrieveAppStoreVersionExperimentsV2('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreVersionExperimentsV2: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appStoreVersions.retrieveAppStoreVersionExperimentsV2(
        'id',
        {
          'fields[apps]': ['accessibilityUrl'],
          'fields[appStoreVersionExperiments]': ['name'],
          'fields[appStoreVersionExperimentTreatments]': ['name'],
          'fields[appStoreVersions]': ['platform'],
          'filter[state]': ['PREPARE_FOR_SUBMISSION'],
          include: ['app'],
          limit: 200,
          'limit[appStoreVersionExperimentTreatments]': 50,
          'limit[controlVersions]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreVersionLocalizations', async () => {
    const responsePromise = client.appStoreVersions.retrieveAppStoreVersionLocalizations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreVersionLocalizations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appStoreVersions.retrieveAppStoreVersionLocalizations(
        'id',
        {
          'fields[appPreviewSets]': ['previewType'],
          'fields[appScreenshotSets]': ['screenshotDisplayType'],
          'fields[appStoreVersionLocalizations]': ['description'],
          'fields[appStoreVersions]': ['platform'],
          'filter[locale]': ['string'],
          include: ['appStoreVersion'],
          limit: 200,
          'limit[appPreviewSets]': 50,
          'limit[appScreenshotSets]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreVersionPhasedRelease', async () => {
    const responsePromise = client.appStoreVersions.retrieveAppStoreVersionPhasedRelease('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreVersionPhasedRelease: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appStoreVersions.retrieveAppStoreVersionPhasedRelease(
        'id',
        { 'fields[appStoreVersionPhasedReleases]': ['phasedReleaseState'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreVersionSubmission', async () => {
    const responsePromise = client.appStoreVersions.retrieveAppStoreVersionSubmission('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreVersionSubmission: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appStoreVersions.retrieveAppStoreVersionSubmission(
        'id',
        {
          'fields[appStoreVersions]': ['platform'],
          'fields[appStoreVersionSubmissions]': ['appStoreVersion'],
          include: ['appStoreVersion'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBuild', async () => {
    const responsePromise = client.appStoreVersions.retrieveBuild('id');
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
      client.appStoreVersions.retrieveBuild(
        'id',
        { 'fields[builds]': ['version'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveCustomerReviews', async () => {
    const responsePromise = client.appStoreVersions.retrieveCustomerReviews('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveCustomerReviews: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appStoreVersions.retrieveCustomerReviews(
        'id',
        {
          'exists[publishedResponse]': true,
          'fields[customerReviewResponses]': ['responseBody'],
          'fields[customerReviews]': ['rating'],
          'filter[rating]': ['string'],
          'filter[territory]': ['ABW'],
          include: ['response'],
          limit: 200,
          sort: ['rating'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterAppVersion', async () => {
    const responsePromise = client.appStoreVersions.retrieveGameCenterAppVersion('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterAppVersion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appStoreVersions.retrieveGameCenterAppVersion(
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
  test.skip('retrieveRoutingAppCoverage', async () => {
    const responsePromise = client.appStoreVersions.retrieveRoutingAppCoverage('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRoutingAppCoverage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appStoreVersions.retrieveRoutingAppCoverage(
        'id',
        { 'fields[routingAppCoverages]': ['fileSize'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
