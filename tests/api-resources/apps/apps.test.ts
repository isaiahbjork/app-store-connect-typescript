// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apps', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.apps.retrieve('id');
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
      client.apps.retrieve(
        'id',
        {
          'fields[appClips]': ['bundleId'],
          'fields[appCustomProductPages]': ['name'],
          'fields[appEncryptionDeclarations]': ['appDescription'],
          'fields[appEvents]': ['referenceName'],
          'fields[appInfos]': ['appStoreState'],
          'fields[apps]': ['accessibilityUrl'],
          'fields[appStoreVersionExperiments]': ['name'],
          'fields[appStoreVersions]': ['platform'],
          'fields[betaAppLocalizations]': ['feedbackEmail'],
          'fields[betaAppReviewDetails]': ['contactFirstName'],
          'fields[betaGroups]': ['name'],
          'fields[betaLicenseAgreements]': ['agreementText'],
          'fields[builds]': ['version'],
          'fields[ciProducts]': ['name'],
          'fields[endUserLicenseAgreements]': ['agreementText'],
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterEnabledVersions]': ['platform'],
          'fields[inAppPurchases]': ['referenceName'],
          'fields[preReleaseVersions]': ['version'],
          'fields[promotedPurchases]': ['visibleForAllUsers'],
          'fields[reviewSubmissions]': ['platform'],
          'fields[subscriptionGracePeriods]': ['optIn'],
          'fields[subscriptionGroups]': ['referenceName'],
          include: ['appEncryptionDeclarations'],
          'limit[appClips]': 50,
          'limit[appCustomProductPages]': 50,
          'limit[appEncryptionDeclarations]': 50,
          'limit[appEvents]': 50,
          'limit[appInfos]': 50,
          'limit[appStoreVersionExperimentsV2]': 50,
          'limit[appStoreVersions]': 50,
          'limit[betaAppLocalizations]': 50,
          'limit[betaGroups]': 50,
          'limit[builds]': 50,
          'limit[gameCenterEnabledVersions]': 50,
          'limit[inAppPurchases]': 50,
          'limit[inAppPurchasesV2]': 50,
          'limit[preReleaseVersions]': 50,
          'limit[promotedPurchases]': 50,
          'limit[reviewSubmissions]': 50,
          'limit[subscriptionGroups]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.apps.update('id', { data: { id: 'id', type: 'apps' } });
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
    const response = await client.apps.update('id', {
      data: {
        id: 'id',
        type: 'apps',
        attributes: {
          accessibilityUrl: 'https://example.com',
          bundleId: 'bundleId',
          contentRightsDeclaration: 'DOES_NOT_USE_THIRD_PARTY_CONTENT',
          primaryLocale: 'primaryLocale',
          streamlinedPurchasingEnabled: true,
          subscriptionStatusUrl: 'https://example.com',
          subscriptionStatusUrlForSandbox: 'https://example.com',
          subscriptionStatusUrlVersion: 'V1',
          subscriptionStatusUrlVersionForSandbox: 'V1',
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.apps.list();
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
      client.apps.list(
        {
          'exists[gameCenterEnabledVersions]': true,
          'fields[appClips]': ['bundleId'],
          'fields[appCustomProductPages]': ['name'],
          'fields[appEncryptionDeclarations]': ['appDescription'],
          'fields[appEvents]': ['referenceName'],
          'fields[appInfos]': ['appStoreState'],
          'fields[apps]': ['accessibilityUrl'],
          'fields[appStoreVersionExperiments]': ['name'],
          'fields[appStoreVersions]': ['platform'],
          'fields[betaAppLocalizations]': ['feedbackEmail'],
          'fields[betaAppReviewDetails]': ['contactFirstName'],
          'fields[betaGroups]': ['name'],
          'fields[betaLicenseAgreements]': ['agreementText'],
          'fields[builds]': ['version'],
          'fields[ciProducts]': ['name'],
          'fields[endUserLicenseAgreements]': ['agreementText'],
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterEnabledVersions]': ['platform'],
          'fields[inAppPurchases]': ['referenceName'],
          'fields[preReleaseVersions]': ['version'],
          'fields[promotedPurchases]': ['visibleForAllUsers'],
          'fields[reviewSubmissions]': ['platform'],
          'fields[subscriptionGracePeriods]': ['optIn'],
          'fields[subscriptionGroups]': ['referenceName'],
          'filter[appStoreVersions': {
            'appStoreState]': ['ACCEPTED'],
            'appVersionState]': ['ACCEPTED'],
            'platform]': ['IOS'],
          },
          'filter[appStoreVersions]': ['string'],
          'filter[bundleId]': ['string'],
          'filter[id]': ['string'],
          'filter[name]': ['string'],
          'filter[reviewSubmissions': { 'platform]': ['IOS'], 'state]': ['READY_FOR_REVIEW'] },
          'filter[sku]': ['string'],
          include: ['appEncryptionDeclarations'],
          limit: 200,
          'limit[appClips]': 50,
          'limit[appCustomProductPages]': 50,
          'limit[appEncryptionDeclarations]': 50,
          'limit[appEvents]': 50,
          'limit[appInfos]': 50,
          'limit[appStoreVersionExperimentsV2]': 50,
          'limit[appStoreVersions]': 50,
          'limit[betaAppLocalizations]': 50,
          'limit[betaGroups]': 50,
          'limit[builds]': 50,
          'limit[gameCenterEnabledVersions]': 50,
          'limit[inAppPurchases]': 50,
          'limit[inAppPurchasesV2]': 50,
          'limit[preReleaseVersions]': 50,
          'limit[promotedPurchases]': 50,
          'limit[reviewSubmissions]': 50,
          'limit[subscriptionGroups]': 50,
          sort: ['name'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAccessibilityDeclarations', async () => {
    const responsePromise = client.apps.retrieveAccessibilityDeclarations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAccessibilityDeclarations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveAccessibilityDeclarations(
        'id',
        {
          'fields[accessibilityDeclarations]': ['deviceFamily'],
          'filter[deviceFamily]': ['IPHONE'],
          'filter[state]': ['DRAFT'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAlternativeDistributionKey', async () => {
    const responsePromise = client.apps.retrieveAlternativeDistributionKey('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAlternativeDistributionKey: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveAlternativeDistributionKey(
        'id',
        { 'fields[alternativeDistributionKeys]': ['publicKey'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAnalyticsReportRequests', async () => {
    const responsePromise = client.apps.retrieveAnalyticsReportRequests('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAnalyticsReportRequests: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveAnalyticsReportRequests(
        'id',
        {
          'fields[analyticsReportRequests]': ['accessType'],
          'fields[analyticsReports]': ['name'],
          'filter[accessType]': ['ONE_TIME_SNAPSHOT'],
          include: ['reports'],
          limit: 200,
          'limit[reports]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppAvailabilityV2', async () => {
    const responsePromise = client.apps.retrieveAppAvailabilityV2('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppAvailabilityV2: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveAppAvailabilityV2(
        'id',
        {
          'fields[appAvailabilities]': ['availableInNewTerritories'],
          'fields[territoryAvailabilities]': ['available'],
          include: ['territoryAvailabilities'],
          'limit[territoryAvailabilities]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppClips', async () => {
    const responsePromise = client.apps.retrieveAppClips('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppClips: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveAppClips(
        'id',
        {
          'fields[appClipDefaultExperiences]': ['action'],
          'fields[appClips]': ['bundleId'],
          'fields[apps]': ['accessibilityUrl'],
          'filter[bundleId]': ['string'],
          include: ['app'],
          limit: 200,
          'limit[appClipDefaultExperiences]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppCustomProductPages', async () => {
    const responsePromise = client.apps.retrieveAppCustomProductPages('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppCustomProductPages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveAppCustomProductPages(
        'id',
        {
          'fields[appCustomProductPages]': ['name'],
          'fields[appCustomProductPageVersions]': ['version'],
          'fields[apps]': ['accessibilityUrl'],
          'filter[visible]': ['string'],
          include: ['app'],
          limit: 200,
          'limit[appCustomProductPageVersions]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppEncryptionDeclarations', async () => {
    const responsePromise = client.apps.retrieveAppEncryptionDeclarations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppEncryptionDeclarations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveAppEncryptionDeclarations(
        'id',
        {
          'fields[appEncryptionDeclarationDocuments]': ['fileSize'],
          'fields[appEncryptionDeclarations]': ['appDescription'],
          'fields[apps]': ['accessibilityUrl'],
          'fields[builds]': ['version'],
          'filter[builds]': ['string'],
          'filter[platform]': ['IOS'],
          include: ['app'],
          limit: 200,
          'limit[builds]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppEvents', async () => {
    const responsePromise = client.apps.retrieveAppEvents('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveAppEvents(
        'id',
        {
          'fields[appEventLocalizations]': ['locale'],
          'fields[appEvents]': ['referenceName'],
          'filter[eventState]': ['DRAFT'],
          'filter[id]': ['string'],
          include: ['localizations'],
          limit: 200,
          'limit[localizations]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppInfos', async () => {
    const responsePromise = client.apps.retrieveAppInfos('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppInfos: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveAppInfos(
        'id',
        {
          'fields[ageRatingDeclarations]': ['alcoholTobaccoOrDrugUseOrReferences'],
          'fields[appCategories]': ['platforms'],
          'fields[appInfoLocalizations]': ['locale'],
          'fields[appInfos]': ['appStoreState'],
          'fields[apps]': ['accessibilityUrl'],
          include: ['app'],
          limit: 200,
          'limit[appInfoLocalizations]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppPricePoints', async () => {
    const responsePromise = client.apps.retrieveAppPricePoints('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppPricePoints: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveAppPricePoints(
        'id',
        {
          'fields[appPricePoints]': ['customerPrice'],
          'fields[apps]': ['accessibilityUrl'],
          'fields[territories]': ['currency'],
          'filter[territory]': ['string'],
          include: ['app'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppPriceSchedule', async () => {
    const responsePromise = client.apps.retrieveAppPriceSchedule('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppPriceSchedule: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveAppPriceSchedule(
        'id',
        {
          'fields[appPrices]': ['manual'],
          'fields[appPriceSchedules]': ['app'],
          'fields[apps]': ['accessibilityUrl'],
          'fields[territories]': ['currency'],
          include: ['app'],
          'limit[automaticPrices]': 50,
          'limit[manualPrices]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreVersionExperimentsV2', async () => {
    const responsePromise = client.apps.retrieveAppStoreVersionExperimentsV2('id');
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
      client.apps.retrieveAppStoreVersionExperimentsV2(
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
  test.skip('retrieveAppStoreVersions', async () => {
    const responsePromise = client.apps.retrieveAppStoreVersions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAppStoreVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveAppStoreVersions(
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
          'filter[appStoreState]': ['ACCEPTED'],
          'filter[appVersionState]': ['ACCEPTED'],
          'filter[id]': ['string'],
          'filter[platform]': ['IOS'],
          'filter[versionString]': ['string'],
          include: ['app'],
          limit: 200,
          'limit[appStoreVersionExperiments]': 50,
          'limit[appStoreVersionExperimentsV2]': 50,
          'limit[appStoreVersionLocalizations]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBackgroundAssets', async () => {
    const responsePromise = client.apps.retrieveBackgroundAssets('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBackgroundAssets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveBackgroundAssets(
        'id',
        {
          'fields[backgroundAssets]': ['assetPackIdentifier'],
          'fields[backgroundAssetVersions]': ['createdDate'],
          'filter[assetPackIdentifier]': ['string'],
          include: ['internalBetaVersion'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBetaAppLocalizations', async () => {
    const responsePromise = client.apps.retrieveBetaAppLocalizations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBetaAppLocalizations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveBetaAppLocalizations(
        'id',
        { 'fields[betaAppLocalizations]': ['feedbackEmail'], limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBetaAppReviewDetail', async () => {
    const responsePromise = client.apps.retrieveBetaAppReviewDetail('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBetaAppReviewDetail: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveBetaAppReviewDetail(
        'id',
        { 'fields[betaAppReviewDetails]': ['contactFirstName'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBetaFeedbackCrashSubmissions', async () => {
    const responsePromise = client.apps.retrieveBetaFeedbackCrashSubmissions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBetaFeedbackCrashSubmissions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveBetaFeedbackCrashSubmissions(
        'id',
        {
          'fields[betaFeedbackCrashSubmissions]': ['createdDate'],
          'fields[betaTesters]': ['firstName'],
          'fields[builds]': ['version'],
          'filter[appPlatform]': ['IOS'],
          'filter[build': { 'preReleaseVersion]': ['string'] },
          'filter[build]': ['string'],
          'filter[deviceModel]': ['string'],
          'filter[devicePlatform]': ['IOS'],
          'filter[osVersion]': ['string'],
          'filter[tester]': ['string'],
          include: ['build'],
          limit: 200,
          sort: ['createdDate'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBetaFeedbackScreenshotSubmissions', async () => {
    const responsePromise = client.apps.retrieveBetaFeedbackScreenshotSubmissions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBetaFeedbackScreenshotSubmissions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveBetaFeedbackScreenshotSubmissions(
        'id',
        {
          'fields[betaFeedbackScreenshotSubmissions]': ['createdDate'],
          'fields[betaTesters]': ['firstName'],
          'fields[builds]': ['version'],
          'filter[appPlatform]': ['IOS'],
          'filter[build': { 'preReleaseVersion]': ['string'] },
          'filter[build]': ['string'],
          'filter[deviceModel]': ['string'],
          'filter[devicePlatform]': ['IOS'],
          'filter[osVersion]': ['string'],
          'filter[tester]': ['string'],
          include: ['build'],
          limit: 200,
          sort: ['createdDate'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBetaGroups', async () => {
    const responsePromise = client.apps.retrieveBetaGroups('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBetaGroups: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveBetaGroups(
        'id',
        { 'fields[betaGroups]': ['name'], limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBetaLicenseAgreement', async () => {
    const responsePromise = client.apps.retrieveBetaLicenseAgreement('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBetaLicenseAgreement: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveBetaLicenseAgreement(
        'id',
        { 'fields[betaLicenseAgreements]': ['agreementText'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBuilds', async () => {
    const responsePromise = client.apps.retrieveBuilds('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBuilds: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveBuilds(
        'id',
        { 'fields[builds]': ['version'], limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveCiProduct', async () => {
    const responsePromise = client.apps.retrieveCiProduct('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveCiProduct: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveCiProduct(
        'id',
        {
          'fields[apps]': ['accessibilityUrl'],
          'fields[bundleIds]': ['name'],
          'fields[ciProducts]': ['name'],
          'fields[scmRepositories]': ['lastAccessedDate'],
          include: ['app'],
          'limit[primaryRepositories]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveCustomerReviewSummarizations: only required params', async () => {
    const responsePromise = client.apps.retrieveCustomerReviewSummarizations('id', {
      'filter[platform]': ['IOS'],
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
  test.skip('retrieveCustomerReviewSummarizations: required and optional params', async () => {
    const response = await client.apps.retrieveCustomerReviewSummarizations('id', {
      'filter[platform]': ['IOS'],
      'fields[customerReviewSummarizations]': ['createdDate'],
      'fields[territories]': ['currency'],
      'filter[territory]': ['string'],
      include: ['territory'],
      limit: 200,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveCustomerReviews', async () => {
    const responsePromise = client.apps.retrieveCustomerReviews('id');
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
      client.apps.retrieveCustomerReviews(
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
  test.skip('retrieveEndUserLicenseAgreement', async () => {
    const responsePromise = client.apps.retrieveEndUserLicenseAgreement('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveEndUserLicenseAgreement: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveEndUserLicenseAgreement(
        'id',
        { 'fields[endUserLicenseAgreements]': ['agreementText'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterDetail', async () => {
    const responsePromise = client.apps.retrieveGameCenterDetail('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterDetail: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveGameCenterDetail(
        'id',
        {
          'fields[apps]': ['accessibilityUrl'],
          'fields[appStoreVersions]': ['platform'],
          'fields[gameCenterAchievementReleases]': ['live'],
          'fields[gameCenterAchievements]': ['referenceName'],
          'fields[gameCenterActivities]': ['referenceName'],
          'fields[gameCenterActivityVersionReleases]': ['version'],
          'fields[gameCenterAppVersions]': ['enabled'],
          'fields[gameCenterChallenges]': ['referenceName'],
          'fields[gameCenterChallengeVersionReleases]': ['version'],
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterGroups]': ['referenceName'],
          'fields[gameCenterLeaderboardReleases]': ['live'],
          'fields[gameCenterLeaderboards]': ['defaultFormatter'],
          'fields[gameCenterLeaderboardSetReleases]': ['live'],
          'fields[gameCenterLeaderboardSets]': ['referenceName'],
          include: ['app'],
          'limit[achievementReleases]': 50,
          'limit[activityReleases]': 50,
          'limit[challengeReleases]': 50,
          'limit[challengesMinimumPlatformVersions]': 50,
          'limit[gameCenterAchievements]': 50,
          'limit[gameCenterActivities]': 50,
          'limit[gameCenterAppVersions]': 50,
          'limit[gameCenterChallenges]': 50,
          'limit[gameCenterLeaderboards]': 50,
          'limit[gameCenterLeaderboardSets]': 50,
          'limit[leaderboardReleases]': 50,
          'limit[leaderboardSetReleases]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterEnabledVersions', async () => {
    const responsePromise = client.apps.retrieveGameCenterEnabledVersions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterEnabledVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveGameCenterEnabledVersions(
        'id',
        {
          'fields[apps]': ['accessibilityUrl'],
          'fields[gameCenterEnabledVersions]': ['platform'],
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

  // skipped: tests are disabled for the time being
  test.skip('retrieveInAppPurchases', async () => {
    const responsePromise = client.apps.retrieveInAppPurchases('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveInAppPurchases: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveInAppPurchases(
        'id',
        {
          'fields[apps]': ['accessibilityUrl'],
          'fields[inAppPurchases]': ['referenceName'],
          'filter[canBeSubmitted]': ['string'],
          'filter[inAppPurchaseType]': ['AUTOMATICALLY_RENEWABLE_SUBSCRIPTION'],
          include: ['apps'],
          limit: 200,
          'limit[apps]': 50,
          sort: ['referenceName'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveInAppPurchasesV2', async () => {
    const responsePromise = client.apps.retrieveInAppPurchasesV2('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveInAppPurchasesV2: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveInAppPurchasesV2(
        'id',
        {
          'fields[inAppPurchaseAppStoreReviewScreenshots]': ['fileSize'],
          'fields[inAppPurchaseAvailabilities]': ['availableInNewTerritories'],
          'fields[inAppPurchaseContents]': ['fileName'],
          'fields[inAppPurchaseImages]': ['fileSize'],
          'fields[inAppPurchaseLocalizations]': ['name'],
          'fields[inAppPurchasePriceSchedules]': ['baseTerritory'],
          'fields[inAppPurchases]': ['name'],
          'fields[promotedPurchases]': ['visibleForAllUsers'],
          'filter[inAppPurchaseType]': ['CONSUMABLE'],
          'filter[name]': ['string'],
          'filter[productId]': ['string'],
          'filter[state]': ['MISSING_METADATA'],
          include: ['inAppPurchaseLocalizations'],
          limit: 200,
          'limit[images]': 50,
          'limit[inAppPurchaseLocalizations]': 50,
          sort: ['name'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMarketplaceSearchDetail', async () => {
    const responsePromise = client.apps.retrieveMarketplaceSearchDetail('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMarketplaceSearchDetail: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveMarketplaceSearchDetail(
        'id',
        { 'fields[marketplaceSearchDetails]': ['catalogUrl'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePerfPowerMetrics', async () => {
    const responsePromise = client.apps.retrievePerfPowerMetrics('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePerfPowerMetrics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrievePerfPowerMetrics(
        'id',
        { 'filter[deviceType]': ['string'], 'filter[metricType]': ['DISK'], 'filter[platform]': ['IOS'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePreReleaseVersions', async () => {
    const responsePromise = client.apps.retrievePreReleaseVersions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePreReleaseVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrievePreReleaseVersions(
        'id',
        { 'fields[preReleaseVersions]': ['version'], limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePromotedPurchases', async () => {
    const responsePromise = client.apps.retrievePromotedPurchases('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePromotedPurchases: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrievePromotedPurchases(
        'id',
        {
          'fields[inAppPurchases]': ['name'],
          'fields[promotedPurchases]': ['visibleForAllUsers'],
          'fields[subscriptions]': ['name'],
          include: ['inAppPurchaseV2'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveReviewSubmissions', async () => {
    const responsePromise = client.apps.retrieveReviewSubmissions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveReviewSubmissions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveReviewSubmissions(
        'id',
        {
          'fields[actors]': ['actorType'],
          'fields[apps]': ['accessibilityUrl'],
          'fields[appStoreVersions]': ['platform'],
          'fields[reviewSubmissionItems]': ['state'],
          'fields[reviewSubmissions]': ['platform'],
          'filter[platform]': ['IOS'],
          'filter[state]': ['READY_FOR_REVIEW'],
          include: ['app'],
          limit: 200,
          'limit[items]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSubscriptionGracePeriod', async () => {
    const responsePromise = client.apps.retrieveSubscriptionGracePeriod('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSubscriptionGracePeriod: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveSubscriptionGracePeriod(
        'id',
        { 'fields[subscriptionGracePeriods]': ['optIn'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSubscriptionGroups', async () => {
    const responsePromise = client.apps.retrieveSubscriptionGroups('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSubscriptionGroups: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveSubscriptionGroups(
        'id',
        {
          'fields[subscriptionGroupLocalizations]': ['name'],
          'fields[subscriptionGroups]': ['referenceName'],
          'fields[subscriptions]': ['name'],
          'filter[referenceName]': ['string'],
          'filter[subscriptions': { 'state]': ['MISSING_METADATA'] },
          include: ['subscriptions'],
          limit: 200,
          'limit[subscriptionGroupLocalizations]': 50,
          'limit[subscriptions]': 50,
          sort: ['referenceName'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveWebhooks', async () => {
    const responsePromise = client.apps.retrieveWebhooks('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveWebhooks: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveWebhooks(
        'id',
        {
          'fields[apps]': ['accessibilityUrl'],
          'fields[webhooks]': ['enabled'],
          include: ['app'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
