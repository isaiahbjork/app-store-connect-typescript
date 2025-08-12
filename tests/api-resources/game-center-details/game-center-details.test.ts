// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterDetails', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.gameCenterDetails.retrieve('id');
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
      client.gameCenterDetails.retrieve(
        'id',
        {
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

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.gameCenterDetails.update('id', {
      data: { id: 'id', type: 'gameCenterDetails' },
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
    const response = await client.gameCenterDetails.update('id', {
      data: {
        id: 'id',
        type: 'gameCenterDetails',
        attributes: { challengeEnabled: true },
        relationships: {
          defaultGroupLeaderboard: { data: { id: 'id', type: 'gameCenterLeaderboards' } },
          defaultLeaderboard: { data: { id: 'id', type: 'gameCenterLeaderboards' } },
          gameCenterGroup: { data: { id: 'id', type: 'gameCenterGroups' } },
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('gameCenterDetails: only required params', async () => {
    const responsePromise = client.gameCenterDetails.gameCenterDetails({
      data: { relationships: { app: { data: { id: 'id', type: 'apps' } } }, type: 'gameCenterDetails' },
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
  test.skip('gameCenterDetails: required and optional params', async () => {
    const response = await client.gameCenterDetails.gameCenterDetails({
      data: {
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'gameCenterDetails',
        attributes: { challengeEnabled: true },
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieveAchievementReleases', async () => {
    const responsePromise = client.gameCenterDetails.retrieveAchievementReleases('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAchievementReleases: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterDetails.retrieveAchievementReleases(
        'id',
        {
          'fields[gameCenterAchievementReleases]': ['live'],
          'fields[gameCenterAchievements]': ['referenceName'],
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'filter[gameCenterAchievement]': ['string'],
          'filter[live]': ['string'],
          include: ['gameCenterDetail'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveActivityReleases', async () => {
    const responsePromise = client.gameCenterDetails.retrieveActivityReleases('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveActivityReleases: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterDetails.retrieveActivityReleases(
        'id',
        {
          'fields[gameCenterActivityVersionReleases]': ['version'],
          'fields[gameCenterActivityVersions]': ['version'],
          include: ['version'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveChallengeReleases', async () => {
    const responsePromise = client.gameCenterDetails.retrieveChallengeReleases('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveChallengeReleases: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterDetails.retrieveChallengeReleases(
        'id',
        {
          'fields[gameCenterChallengeVersionReleases]': ['version'],
          'fields[gameCenterChallengeVersions]': ['version'],
          include: ['version'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterAchievements', async () => {
    const responsePromise = client.gameCenterDetails.retrieveGameCenterAchievements('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterAchievements: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterDetails.retrieveGameCenterAchievements(
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
  test.skip('retrieveGameCenterActivities', async () => {
    const responsePromise = client.gameCenterDetails.retrieveGameCenterActivities('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterActivities: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterDetails.retrieveGameCenterActivities(
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
  test.skip('retrieveGameCenterAppVersions', async () => {
    const responsePromise = client.gameCenterDetails.retrieveGameCenterAppVersions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterAppVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterDetails.retrieveGameCenterAppVersions(
        'id',
        {
          'fields[appStoreVersions]': ['platform'],
          'fields[gameCenterAppVersions]': ['enabled'],
          'filter[enabled]': ['string'],
          include: ['compatibilityVersions'],
          limit: 200,
          'limit[compatibilityVersions]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterChallenges', async () => {
    const responsePromise = client.gameCenterDetails.retrieveGameCenterChallenges('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterChallenges: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterDetails.retrieveGameCenterChallenges(
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
  test.skip('retrieveGameCenterGroup', async () => {
    const responsePromise = client.gameCenterDetails.retrieveGameCenterGroup('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterGroup: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterDetails.retrieveGameCenterGroup(
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
  test.skip('retrieveGameCenterLeaderboardSets', async () => {
    const responsePromise = client.gameCenterDetails.retrieveGameCenterLeaderboardSets('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterLeaderboardSets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterDetails.retrieveGameCenterLeaderboardSets(
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
  test.skip('retrieveGameCenterLeaderboards', async () => {
    const responsePromise = client.gameCenterDetails.retrieveGameCenterLeaderboards('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterLeaderboards: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterDetails.retrieveGameCenterLeaderboards(
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
  test.skip('retrieveLeaderboardReleases', async () => {
    const responsePromise = client.gameCenterDetails.retrieveLeaderboardReleases('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveLeaderboardReleases: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterDetails.retrieveLeaderboardReleases(
        'id',
        {
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterLeaderboardReleases]': ['live'],
          'fields[gameCenterLeaderboards]': ['defaultFormatter'],
          'filter[gameCenterLeaderboard]': ['string'],
          'filter[live]': ['string'],
          include: ['gameCenterDetail'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveLeaderboardSetReleases', async () => {
    const responsePromise = client.gameCenterDetails.retrieveLeaderboardSetReleases('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveLeaderboardSetReleases: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterDetails.retrieveLeaderboardSetReleases(
        'id',
        {
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterLeaderboardSetReleases]': ['live'],
          'fields[gameCenterLeaderboardSets]': ['referenceName'],
          'filter[gameCenterLeaderboardSet]': ['string'],
          'filter[live]': ['string'],
          include: ['gameCenterDetail'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
