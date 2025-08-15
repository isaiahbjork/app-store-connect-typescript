// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource relationships', () => {
  // Prism tests are disabled
  test.skip('deleteBetaTesters: only required params', async () => {
    const responsePromise = client.apps.relationships.deleteBetaTesters('id', {
      data: [{ id: 'id', type: 'betaTesters' }],
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
  test.skip('deleteBetaTesters: required and optional params', async () => {
    const response = await client.apps.relationships.deleteBetaTesters('id', {
      data: [{ id: 'id', type: 'betaTesters' }],
    });
  });

  // Prism tests are disabled
  test.skip('retrieveAccessibilityDeclarations', async () => {
    const responsePromise = client.apps.relationships.retrieveAccessibilityDeclarations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAccessibilityDeclarations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveAccessibilityDeclarations(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveAlternativeDistributionKey', async () => {
    const responsePromise = client.apps.relationships.retrieveAlternativeDistributionKey('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAnalyticsReportRequests', async () => {
    const responsePromise = client.apps.relationships.retrieveAnalyticsReportRequests('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAnalyticsReportRequests: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveAnalyticsReportRequests(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveAppAvailabilityV2', async () => {
    const responsePromise = client.apps.relationships.retrieveAppAvailabilityV2('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAppClips', async () => {
    const responsePromise = client.apps.relationships.retrieveAppClips('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAppClips: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveAppClips('id', { limit: 200 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveAppCustomProductPages', async () => {
    const responsePromise = client.apps.relationships.retrieveAppCustomProductPages('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAppCustomProductPages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveAppCustomProductPages(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveAppEncryptionDeclarations', async () => {
    const responsePromise = client.apps.relationships.retrieveAppEncryptionDeclarations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAppEncryptionDeclarations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveAppEncryptionDeclarations(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveAppEvents', async () => {
    const responsePromise = client.apps.relationships.retrieveAppEvents('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAppEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveAppEvents('id', { limit: 200 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveAppInfos', async () => {
    const responsePromise = client.apps.relationships.retrieveAppInfos('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAppInfos: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveAppInfos('id', { limit: 200 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveAppPricePoints', async () => {
    const responsePromise = client.apps.relationships.retrieveAppPricePoints('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAppPricePoints: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveAppPricePoints(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveAppPriceSchedule', async () => {
    const responsePromise = client.apps.relationships.retrieveAppPriceSchedule('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAppStoreVersionExperimentsV2', async () => {
    const responsePromise = client.apps.relationships.retrieveAppStoreVersionExperimentsV2('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAppStoreVersionExperimentsV2: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveAppStoreVersionExperimentsV2(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveAppStoreVersions', async () => {
    const responsePromise = client.apps.relationships.retrieveAppStoreVersions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAppStoreVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveAppStoreVersions(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveBackgroundAssets', async () => {
    const responsePromise = client.apps.relationships.retrieveBackgroundAssets('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveBackgroundAssets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveBackgroundAssets(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveBetaAppLocalizations', async () => {
    const responsePromise = client.apps.relationships.retrieveBetaAppLocalizations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveBetaAppLocalizations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveBetaAppLocalizations(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveBetaAppReviewDetail', async () => {
    const responsePromise = client.apps.relationships.retrieveBetaAppReviewDetail('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveBetaFeedbackCrashSubmissions', async () => {
    const responsePromise = client.apps.relationships.retrieveBetaFeedbackCrashSubmissions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveBetaFeedbackCrashSubmissions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveBetaFeedbackCrashSubmissions(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveBetaFeedbackScreenshotSubmissions', async () => {
    const responsePromise = client.apps.relationships.retrieveBetaFeedbackScreenshotSubmissions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveBetaFeedbackScreenshotSubmissions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveBetaFeedbackScreenshotSubmissions(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveBetaGroups', async () => {
    const responsePromise = client.apps.relationships.retrieveBetaGroups('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveBetaGroups: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveBetaGroups(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveBetaLicenseAgreement', async () => {
    const responsePromise = client.apps.relationships.retrieveBetaLicenseAgreement('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveBuilds', async () => {
    const responsePromise = client.apps.relationships.retrieveBuilds('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveBuilds: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveBuilds('id', { limit: 200 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveCiProduct', async () => {
    const responsePromise = client.apps.relationships.retrieveCiProduct('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveCustomerReviews', async () => {
    const responsePromise = client.apps.relationships.retrieveCustomerReviews('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveCustomerReviews: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveCustomerReviews(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveEndUserLicenseAgreement', async () => {
    const responsePromise = client.apps.relationships.retrieveEndUserLicenseAgreement('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterDetail', async () => {
    const responsePromise = client.apps.relationships.retrieveGameCenterDetail('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterEnabledVersions', async () => {
    const responsePromise = client.apps.relationships.retrieveGameCenterEnabledVersions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterEnabledVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveGameCenterEnabledVersions(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveInAppPurchases', async () => {
    const responsePromise = client.apps.relationships.retrieveInAppPurchases('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveInAppPurchases: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveInAppPurchases(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveInAppPurchasesV2', async () => {
    const responsePromise = client.apps.relationships.retrieveInAppPurchasesV2('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveInAppPurchasesV2: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveInAppPurchasesV2(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveMarketplaceSearchDetail', async () => {
    const responsePromise = client.apps.relationships.retrieveMarketplaceSearchDetail('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrievePreReleaseVersions', async () => {
    const responsePromise = client.apps.relationships.retrievePreReleaseVersions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrievePreReleaseVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrievePreReleaseVersions(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveReviewSubmissions', async () => {
    const responsePromise = client.apps.relationships.retrieveReviewSubmissions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveReviewSubmissions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveReviewSubmissions(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveSubscriptionGracePeriod', async () => {
    const responsePromise = client.apps.relationships.retrieveSubscriptionGracePeriod('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveSubscriptionGroups', async () => {
    const responsePromise = client.apps.relationships.retrieveSubscriptionGroups('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveSubscriptionGroups: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveSubscriptionGroups(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveWebhooks', async () => {
    const responsePromise = client.apps.relationships.retrieveWebhooks('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveWebhooks: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.relationships.retrieveWebhooks('id', { limit: 200 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
