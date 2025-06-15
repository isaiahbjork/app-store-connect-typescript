// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ciBuildRuns', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.ciBuildRuns.create({ data: { type: 'ciBuildRuns' } });
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
    const response = await client.ciBuildRuns.create({
      data: {
        type: 'ciBuildRuns',
        attributes: { clean: true },
        relationships: {
          buildRun: { data: { id: 'id', type: 'ciBuildRuns' } },
          pullRequest: { data: { id: 'id', type: 'scmPullRequests' } },
          sourceBranchOrTag: { data: { id: 'id', type: 'scmGitReferences' } },
          workflow: { data: { id: 'id', type: 'ciWorkflows' } },
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.ciBuildRuns.retrieve('id');
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
      client.ciBuildRuns.retrieve(
        'id',
        {
          'fields[builds]': ['version'],
          'fields[ciBuildRuns]': ['number'],
          include: ['builds'],
          'limit[builds]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listActions', async () => {
    const responsePromise = client.ciBuildRuns.listActions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listActions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ciBuildRuns.listActions(
        'id',
        {
          'fields[ciBuildActions]': ['name'],
          'fields[ciBuildRuns]': ['number'],
          include: ['buildRun'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listBuilds', async () => {
    const responsePromise = client.ciBuildRuns.listBuilds('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listBuilds: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ciBuildRuns.listBuilds(
        'id',
        {
          'exists[usesNonExemptEncryption]': true,
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
});
