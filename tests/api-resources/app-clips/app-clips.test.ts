// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appClips', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.appClips.retrieve('id');
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
      client.appClips.retrieve(
        'id',
        {
          'fields[appClipDefaultExperiences]': ['action'],
          'fields[appClips]': ['bundleId'],
          include: ['app'],
          'limit[appClipDefaultExperiences]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAdvancedExperiences', async () => {
    const responsePromise = client.appClips.listAdvancedExperiences('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAdvancedExperiences: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appClips.listAdvancedExperiences(
        'id',
        {
          'fields[appClipAdvancedExperienceImages]': ['fileSize'],
          'fields[appClipAdvancedExperienceLocalizations]': ['language'],
          'fields[appClipAdvancedExperiences]': ['link'],
          'fields[appClips]': ['bundleId'],
          'filter[action]': ['OPEN'],
          'filter[placeStatus]': ['PENDING'],
          'filter[status]': ['RECEIVED'],
          include: ['appClip'],
          limit: 200,
          'limit[localizations]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listDefaultExperiences', async () => {
    const responsePromise = client.appClips.listDefaultExperiences('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listDefaultExperiences: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appClips.listDefaultExperiences(
        'id',
        {
          'exists[releaseWithAppStoreVersion]': true,
          'fields[appClipAppStoreReviewDetails]': ['invocationUrls'],
          'fields[appClipDefaultExperienceLocalizations]': ['locale'],
          'fields[appClipDefaultExperiences]': ['action'],
          'fields[appClips]': ['bundleId'],
          'fields[appStoreVersions]': ['platform'],
          include: ['appClip'],
          limit: 200,
          'limit[appClipDefaultExperienceLocalizations]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
