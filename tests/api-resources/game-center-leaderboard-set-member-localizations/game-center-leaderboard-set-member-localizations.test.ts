// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterLeaderboardSetMemberLocalizations', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.gameCenterLeaderboardSetMemberLocalizations.create({
      data: {
        relationships: {
          gameCenterLeaderboard: { data: { id: 'id', type: 'gameCenterLeaderboards' } },
          gameCenterLeaderboardSet: { data: { id: 'id', type: 'gameCenterLeaderboardSets' } },
        },
        type: 'gameCenterLeaderboardSetMemberLocalizations',
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
    const response = await client.gameCenterLeaderboardSetMemberLocalizations.create({
      data: {
        relationships: {
          gameCenterLeaderboard: { data: { id: 'id', type: 'gameCenterLeaderboards' } },
          gameCenterLeaderboardSet: { data: { id: 'id', type: 'gameCenterLeaderboardSets' } },
        },
        type: 'gameCenterLeaderboardSetMemberLocalizations',
        attributes: { locale: 'locale', name: 'name' },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.gameCenterLeaderboardSetMemberLocalizations.update('id', {
      data: { id: 'id', type: 'gameCenterLeaderboardSetMemberLocalizations' },
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
    const response = await client.gameCenterLeaderboardSetMemberLocalizations.update('id', {
      data: { id: 'id', type: 'gameCenterLeaderboardSetMemberLocalizations', attributes: { name: 'name' } },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.gameCenterLeaderboardSetMemberLocalizations.list({
      'filter[gameCenterLeaderboard]': ['string'],
      'filter[gameCenterLeaderboardSet]': ['string'],
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
  test.skip('list: required and optional params', async () => {
    const response = await client.gameCenterLeaderboardSetMemberLocalizations.list({
      'filter[gameCenterLeaderboard]': ['string'],
      'filter[gameCenterLeaderboardSet]': ['string'],
      'fields[gameCenterLeaderboards]': ['defaultFormatter'],
      'fields[gameCenterLeaderboardSetMemberLocalizations]': ['name'],
      'fields[gameCenterLeaderboardSets]': ['referenceName'],
      include: ['gameCenterLeaderboardSet'],
      limit: 200,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.gameCenterLeaderboardSetMemberLocalizations.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterLeaderboard', async () => {
    const responsePromise =
      client.gameCenterLeaderboardSetMemberLocalizations.retrieveGameCenterLeaderboard('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterLeaderboard: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterLeaderboardSetMemberLocalizations.retrieveGameCenterLeaderboard(
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
          include: ['gameCenterDetail'],
          'limit[gameCenterLeaderboardSets]': 50,
          'limit[localizations]': 50,
          'limit[releases]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterLeaderboardSet', async () => {
    const responsePromise =
      client.gameCenterLeaderboardSetMemberLocalizations.retrieveGameCenterLeaderboardSet('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterLeaderboardSet: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterLeaderboardSetMemberLocalizations.retrieveGameCenterLeaderboardSet(
        'id',
        {
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterGroups]': ['referenceName'],
          'fields[gameCenterLeaderboards]': ['defaultFormatter'],
          'fields[gameCenterLeaderboardSetLocalizations]': ['locale'],
          'fields[gameCenterLeaderboardSetReleases]': ['live'],
          'fields[gameCenterLeaderboardSets]': ['referenceName'],
          include: ['gameCenterDetail'],
          'limit[gameCenterLeaderboards]': 50,
          'limit[localizations]': 50,
          'limit[releases]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
