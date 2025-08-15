// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterGroups', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.gameCenterGroups.create({ data: { type: 'gameCenterGroups' } });
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
    const response = await client.gameCenterGroups.create({
      data: { type: 'gameCenterGroups', attributes: { referenceName: 'referenceName' } },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.gameCenterGroups.retrieve('id');
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
      client.gameCenterGroups.retrieve(
        'id',
        {
          'fields[gameCenterAchievements]': ['referenceName'],
          'fields[gameCenterActivities]': ['referenceName'],
          'fields[gameCenterChallenges]': ['referenceName'],
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterGroups]': ['referenceName'],
          'fields[gameCenterLeaderboards]': ['defaultFormatter'],
          'fields[gameCenterLeaderboardSets]': ['referenceName'],
          include: ['gameCenterDetails'],
          'limit[gameCenterAchievements]': 50,
          'limit[gameCenterActivities]': 50,
          'limit[gameCenterChallenges]': 50,
          'limit[gameCenterDetails]': 50,
          'limit[gameCenterLeaderboards]': 50,
          'limit[gameCenterLeaderboardSets]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.gameCenterGroups.update('id', {
      data: { id: 'id', type: 'gameCenterGroups' },
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
    const response = await client.gameCenterGroups.update('id', {
      data: { id: 'id', type: 'gameCenterGroups', attributes: { referenceName: 'referenceName' } },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.gameCenterGroups.list();
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
      client.gameCenterGroups.list(
        {
          'fields[gameCenterAchievements]': ['referenceName'],
          'fields[gameCenterActivities]': ['referenceName'],
          'fields[gameCenterChallenges]': ['referenceName'],
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterGroups]': ['referenceName'],
          'fields[gameCenterLeaderboards]': ['defaultFormatter'],
          'fields[gameCenterLeaderboardSets]': ['referenceName'],
          'filter[gameCenterDetails]': ['string'],
          include: ['gameCenterDetails'],
          limit: 200,
          'limit[gameCenterAchievements]': 50,
          'limit[gameCenterActivities]': 50,
          'limit[gameCenterChallenges]': 50,
          'limit[gameCenterDetails]': 50,
          'limit[gameCenterLeaderboards]': 50,
          'limit[gameCenterLeaderboardSets]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.gameCenterGroups.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listGameCenterAchievements', async () => {
    const responsePromise = client.gameCenterGroups.listGameCenterAchievements('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listGameCenterAchievements: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterGroups.listGameCenterAchievements(
        'id',
        {
          'fields[gameCenterAchievementLocalizations]': ['locale'],
          'fields[gameCenterAchievementReleases]': ['live'],
          'fields[gameCenterAchievements]': ['referenceName'],
          'fields[gameCenterActivities]': ['referenceName'],
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterGroups]': ['referenceName'],
          'filter[archived]': ['string'],
          'filter[id]': ['string'],
          'filter[referenceName]': ['string'],
          include: ['gameCenterDetail'],
          limit: 200,
          'limit[localizations]': 50,
          'limit[releases]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listGameCenterActivities', async () => {
    const responsePromise = client.gameCenterGroups.listGameCenterActivities('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listGameCenterActivities: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterGroups.listGameCenterActivities(
        'id',
        {
          'fields[gameCenterAchievements]': ['referenceName'],
          'fields[gameCenterActivities]': ['referenceName'],
          'fields[gameCenterActivityVersions]': ['version'],
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterGroups]': ['referenceName'],
          'fields[gameCenterLeaderboards]': ['defaultFormatter'],
          include: ['gameCenterDetail'],
          limit: 200,
          'limit[achievements]': 50,
          'limit[leaderboards]': 50,
          'limit[versions]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listGameCenterChallenges', async () => {
    const responsePromise = client.gameCenterGroups.listGameCenterChallenges('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listGameCenterChallenges: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterGroups.listGameCenterChallenges(
        'id',
        {
          'fields[gameCenterChallenges]': ['referenceName'],
          'fields[gameCenterChallengeVersions]': ['version'],
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterGroups]': ['referenceName'],
          'fields[gameCenterLeaderboards]': ['defaultFormatter'],
          'filter[archived]': ['string'],
          'filter[id]': ['string'],
          'filter[referenceName]': ['string'],
          include: ['gameCenterDetail'],
          limit: 200,
          'limit[versions]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listGameCenterLeaderboardSets', async () => {
    const responsePromise = client.gameCenterGroups.listGameCenterLeaderboardSets('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listGameCenterLeaderboardSets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterGroups.listGameCenterLeaderboardSets(
        'id',
        {
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterGroups]': ['referenceName'],
          'fields[gameCenterLeaderboards]': ['defaultFormatter'],
          'fields[gameCenterLeaderboardSetLocalizations]': ['locale'],
          'fields[gameCenterLeaderboardSetReleases]': ['live'],
          'fields[gameCenterLeaderboardSets]': ['referenceName'],
          'filter[id]': ['string'],
          'filter[referenceName]': ['string'],
          include: ['gameCenterDetail'],
          limit: 200,
          'limit[gameCenterLeaderboards]': 50,
          'limit[localizations]': 50,
          'limit[releases]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listGameCenterLeaderboards', async () => {
    const responsePromise = client.gameCenterGroups.listGameCenterLeaderboards('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listGameCenterLeaderboards: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterGroups.listGameCenterLeaderboards(
        'id',
        {
          'fields[gameCenterActivities]': ['referenceName'],
          'fields[gameCenterChallenges]': ['referenceName'],
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterGroups]': ['referenceName'],
          'fields[gameCenterLeaderboardLocalizations]': ['locale'],
          'fields[gameCenterLeaderboardReleases]': ['live'],
          'fields[gameCenterLeaderboards]': ['defaultFormatter'],
          'fields[gameCenterLeaderboardSets]': ['referenceName'],
          'filter[archived]': ['string'],
          'filter[id]': ['string'],
          'filter[referenceName]': ['string'],
          include: ['gameCenterDetail'],
          limit: 200,
          'limit[gameCenterLeaderboardSets]': 50,
          'limit[localizations]': 50,
          'limit[releases]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterDetails', async () => {
    const responsePromise = client.gameCenterGroups.retrieveGameCenterDetails('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterDetails: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterGroups.retrieveGameCenterDetails(
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
          'filter[gameCenterAppVersions': { 'enabled]': ['string'] },
          include: ['app'],
          limit: 200,
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
});
