// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource builds', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.builds.retrieve('id');
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
      client.builds.retrieve(
        'id',
        {
          'fields[appEncryptionDeclarations]': ['appDescription'],
          'fields[apps]': ['accessibilityUrl'],
          'fields[appStoreVersions]': ['platform'],
          'fields[betaAppReviewSubmissions]': ['betaReviewState'],
          'fields[betaBuildLocalizations]': ['whatsNew'],
          'fields[betaTesters]': ['firstName'],
          'fields[buildBetaDetails]': ['autoNotifyEnabled'],
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

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.builds.update('id', { data: { id: 'id', type: 'builds' } });
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
    const response = await client.builds.update('id', {
      data: {
        id: 'id',
        type: 'builds',
        attributes: { expired: true, usesNonExemptEncryption: true },
        relationships: {
          appEncryptionDeclaration: { data: { id: 'id', type: 'appEncryptionDeclarations' } },
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.builds.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.builds.list(
        {
          'exists[usesNonExemptEncryption]': true,
          'fields[appEncryptionDeclarations]': ['appDescription'],
          'fields[apps]': ['accessibilityUrl'],
          'fields[appStoreVersions]': ['platform'],
          'fields[betaAppReviewSubmissions]': ['betaReviewState'],
          'fields[betaBuildLocalizations]': ['whatsNew'],
          'fields[betaTesters]': ['firstName'],
          'fields[buildBetaDetails]': ['autoNotifyEnabled'],
          'fields[buildIcons]': ['iconAsset'],
          'fields[builds]': ['version'],
          'fields[preReleaseVersions]': ['version'],
          'filter[app]': ['string'],
          'filter[appStoreVersion]': ['string'],
          'filter[betaAppReviewSubmission': { 'betaReviewState]': ['WAITING_FOR_REVIEW'] },
          'filter[betaGroups]': ['string'],
          'filter[buildAudienceType]': ['INTERNAL_ONLY'],
          'filter[expired]': ['string'],
          'filter[id]': ['string'],
          'filter[preReleaseVersion': { 'platform]': ['IOS'], 'version]': ['string'] },
          'filter[preReleaseVersion]': ['string'],
          'filter[processingState]': ['PROCESSING'],
          'filter[usesNonExemptEncryption]': ['string'],
          'filter[version]': ['string'],
          include: ['preReleaseVersion'],
          limit: 200,
          'limit[betaBuildLocalizations]': 50,
          'limit[betaGroups]': 50,
          'limit[buildBundles]': 50,
          'limit[icons]': 50,
          'limit[individualTesters]': 50,
          sort: ['version'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveApp', async () => {
    const responsePromise = client.builds.retrieveApp('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveApp: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.builds.retrieveApp(
        'id',
        { 'fields[apps]': ['accessibilityUrl'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveAppStoreVersion', async () => {
    const responsePromise = client.builds.retrieveAppStoreVersion('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAppStoreVersion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.builds.retrieveAppStoreVersion(
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

  // Prism tests are disabled
  test.skip('retrieveBetaAppReviewSubmission', async () => {
    const responsePromise = client.builds.retrieveBetaAppReviewSubmission('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveBetaAppReviewSubmission: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.builds.retrieveBetaAppReviewSubmission(
        'id',
        { 'fields[betaAppReviewSubmissions]': ['betaReviewState'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveBetaBuildLocalizations', async () => {
    const responsePromise = client.builds.retrieveBetaBuildLocalizations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveBetaBuildLocalizations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.builds.retrieveBetaBuildLocalizations(
        'id',
        { 'fields[betaBuildLocalizations]': ['whatsNew'], limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveBuildBetaDetail', async () => {
    const responsePromise = client.builds.retrieveBuildBetaDetail('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveBuildBetaDetail: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.builds.retrieveBuildBetaDetail(
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

  // Prism tests are disabled
  test.skip('retrieveDiagnosticSignatures', async () => {
    const responsePromise = client.builds.retrieveDiagnosticSignatures('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveDiagnosticSignatures: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.builds.retrieveDiagnosticSignatures(
        'id',
        {
          'fields[diagnosticSignatures]': ['diagnosticType'],
          'filter[diagnosticType]': ['DISK_WRITES'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveIcons', async () => {
    const responsePromise = client.builds.retrieveIcons('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveIcons: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.builds.retrieveIcons(
        'id',
        { 'fields[buildIcons]': ['iconAsset'], limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveIndividualTesters', async () => {
    const responsePromise = client.builds.retrieveIndividualTesters('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveIndividualTesters: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.builds.retrieveIndividualTesters(
        'id',
        { 'fields[betaTesters]': ['firstName'], limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrievePerfPowerMetrics', async () => {
    const responsePromise = client.builds.retrievePerfPowerMetrics('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrievePerfPowerMetrics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.builds.retrievePerfPowerMetrics(
        'id',
        { 'filter[deviceType]': ['string'], 'filter[metricType]': ['DISK'], 'filter[platform]': ['IOS'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrievePreReleaseVersion', async () => {
    const responsePromise = client.builds.retrievePreReleaseVersion('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrievePreReleaseVersion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.builds.retrievePreReleaseVersion(
        'id',
        { 'fields[preReleaseVersions]': ['version'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
