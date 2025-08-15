// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource betaGroups', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.betaGroups.create({
      data: {
        attributes: { name: 'name' },
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'betaGroups',
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
    const response = await client.betaGroups.create({
      data: {
        attributes: {
          name: 'name',
          feedbackEnabled: true,
          hasAccessToAllBuilds: true,
          isInternalGroup: true,
          publicLinkEnabled: true,
          publicLinkLimit: 0,
          publicLinkLimitEnabled: true,
        },
        relationships: {
          app: { data: { id: 'id', type: 'apps' } },
          betaTesters: { data: [{ id: 'id', type: 'betaTesters' }] },
          builds: { data: [{ id: 'id', type: 'builds' }] },
        },
        type: 'betaGroups',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.betaGroups.retrieve('id');
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
      client.betaGroups.retrieve(
        'id',
        {
          'fields[apps]': ['accessibilityUrl'],
          'fields[betaGroups]': ['name'],
          'fields[betaRecruitmentCriteria]': ['lastModifiedDate'],
          'fields[betaTesters]': ['firstName'],
          'fields[builds]': ['version'],
          include: ['app'],
          'limit[betaTesters]': 50,
          'limit[builds]': 1000,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.betaGroups.update('id', { data: { id: 'id', type: 'betaGroups' } });
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
    const response = await client.betaGroups.update('id', {
      data: {
        id: 'id',
        type: 'betaGroups',
        attributes: {
          feedbackEnabled: true,
          iosBuildsAvailableForAppleSiliconMac: true,
          iosBuildsAvailableForAppleVision: true,
          name: 'name',
          publicLinkEnabled: true,
          publicLinkLimit: 0,
          publicLinkLimitEnabled: true,
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.betaGroups.list();
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
      client.betaGroups.list(
        {
          'fields[apps]': ['accessibilityUrl'],
          'fields[betaGroups]': ['name'],
          'fields[betaRecruitmentCriteria]': ['lastModifiedDate'],
          'fields[betaTesters]': ['firstName'],
          'fields[builds]': ['version'],
          'filter[app]': ['string'],
          'filter[builds]': ['string'],
          'filter[id]': ['string'],
          'filter[isInternalGroup]': ['string'],
          'filter[name]': ['string'],
          'filter[publicLink]': ['string'],
          'filter[publicLinkEnabled]': ['string'],
          'filter[publicLinkLimitEnabled]': ['string'],
          include: ['app'],
          limit: 200,
          'limit[betaTesters]': 50,
          'limit[builds]': 1000,
          sort: ['name'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.betaGroups.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('checkBetaRecruitmentCriterionCompatibleBuild', async () => {
    const responsePromise = client.betaGroups.checkBetaRecruitmentCriterionCompatibleBuild('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('checkBetaRecruitmentCriterionCompatibleBuild: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.betaGroups.checkBetaRecruitmentCriterionCompatibleBuild(
        'id',
        { 'fields[betaRecruitmentCriterionCompatibleBuildChecks]': ['hasCompatibleBuild'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listBetaRecruitmentCriteria', async () => {
    const responsePromise = client.betaGroups.listBetaRecruitmentCriteria('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listBetaRecruitmentCriteria: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.betaGroups.listBetaRecruitmentCriteria(
        'id',
        { 'fields[betaRecruitmentCriteria]': ['lastModifiedDate'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveApp', async () => {
    const responsePromise = client.betaGroups.retrieveApp('id');
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
      client.betaGroups.retrieveApp(
        'id',
        { 'fields[apps]': ['accessibilityUrl'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
