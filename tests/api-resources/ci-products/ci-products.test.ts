// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ciProducts', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.ciProducts.retrieve('id');
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
      client.ciProducts.retrieve(
        'id',
        {
          'fields[apps]': ['accessibilityUrl'],
          'fields[ciProducts]': ['name'],
          'fields[scmRepositories]': ['lastAccessedDate'],
          include: ['app'],
          'limit[primaryRepositories]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.ciProducts.list();
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
      client.ciProducts.list(
        {
          'fields[apps]': ['accessibilityUrl'],
          'fields[ciProducts]': ['name'],
          'fields[scmRepositories]': ['lastAccessedDate'],
          'filter[app]': ['string'],
          'filter[productType]': ['APP'],
          include: ['app'],
          limit: 200,
          'limit[primaryRepositories]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.ciProducts.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listBuildRuns', async () => {
    const responsePromise = client.ciProducts.listBuildRuns('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listBuildRuns: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ciProducts.listBuildRuns(
        'id',
        {
          'fields[builds]': ['version'],
          'fields[ciBuildRuns]': ['number'],
          'fields[ciProducts]': ['name'],
          'fields[ciWorkflows]': ['name'],
          'fields[scmGitReferences]': ['name'],
          'fields[scmPullRequests]': ['title'],
          'filter[builds]': ['string'],
          include: ['builds'],
          limit: 200,
          'limit[builds]': 50,
          sort: ['number'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listWorkflows', async () => {
    const responsePromise = client.ciProducts.listWorkflows('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listWorkflows: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ciProducts.listWorkflows(
        'id',
        {
          'fields[ciMacOsVersions]': ['version'],
          'fields[ciProducts]': ['name'],
          'fields[ciWorkflows]': ['name'],
          'fields[ciXcodeVersions]': ['version'],
          'fields[scmRepositories]': ['lastAccessedDate'],
          include: ['product'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveAdditionalRepositories', async () => {
    const responsePromise = client.ciProducts.retrieveAdditionalRepositories('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAdditionalRepositories: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ciProducts.retrieveAdditionalRepositories(
        'id',
        {
          'fields[scmGitReferences]': ['name'],
          'fields[scmProviders]': ['scmProviderType'],
          'fields[scmRepositories]': ['lastAccessedDate'],
          'filter[id]': ['string'],
          include: ['scmProvider'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveApp', async () => {
    const responsePromise = client.ciProducts.retrieveApp('id');
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
      client.ciProducts.retrieveApp(
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

  // Prism tests are disabled
  test.skip('retrievePrimaryRepositories', async () => {
    const responsePromise = client.ciProducts.retrievePrimaryRepositories('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrievePrimaryRepositories: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ciProducts.retrievePrimaryRepositories(
        'id',
        {
          'fields[scmGitReferences]': ['name'],
          'fields[scmProviders]': ['scmProviderType'],
          'fields[scmRepositories]': ['lastAccessedDate'],
          'filter[id]': ['string'],
          include: ['scmProvider'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
