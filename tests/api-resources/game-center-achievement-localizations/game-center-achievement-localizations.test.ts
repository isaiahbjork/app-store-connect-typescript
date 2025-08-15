// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterAchievementLocalizations', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.gameCenterAchievementLocalizations.create({
      data: {
        attributes: {
          afterEarnedDescription: 'afterEarnedDescription',
          beforeEarnedDescription: 'beforeEarnedDescription',
          locale: 'locale',
          name: 'name',
        },
        relationships: { gameCenterAchievement: { data: { id: 'id', type: 'gameCenterAchievements' } } },
        type: 'gameCenterAchievementLocalizations',
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
    const response = await client.gameCenterAchievementLocalizations.create({
      data: {
        attributes: {
          afterEarnedDescription: 'afterEarnedDescription',
          beforeEarnedDescription: 'beforeEarnedDescription',
          locale: 'locale',
          name: 'name',
        },
        relationships: { gameCenterAchievement: { data: { id: 'id', type: 'gameCenterAchievements' } } },
        type: 'gameCenterAchievementLocalizations',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.gameCenterAchievementLocalizations.retrieve('id');
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
      client.gameCenterAchievementLocalizations.retrieve(
        'id',
        {
          'fields[gameCenterAchievementImages]': ['fileSize'],
          'fields[gameCenterAchievementLocalizations]': ['locale'],
          'fields[gameCenterAchievements]': ['referenceName'],
          include: ['gameCenterAchievement'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.gameCenterAchievementLocalizations.update('id', {
      data: { id: 'id', type: 'gameCenterAchievementLocalizations' },
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
    const response = await client.gameCenterAchievementLocalizations.update('id', {
      data: {
        id: 'id',
        type: 'gameCenterAchievementLocalizations',
        attributes: {
          afterEarnedDescription: 'afterEarnedDescription',
          beforeEarnedDescription: 'beforeEarnedDescription',
          name: 'name',
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.gameCenterAchievementLocalizations.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterAchievement', async () => {
    const responsePromise = client.gameCenterAchievementLocalizations.retrieveGameCenterAchievement('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterAchievement: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterAchievementLocalizations.retrieveGameCenterAchievement(
        'id',
        {
          'fields[gameCenterAchievementLocalizations]': ['locale'],
          'fields[gameCenterAchievementReleases]': ['live'],
          'fields[gameCenterAchievements]': ['referenceName'],
          'fields[gameCenterActivities]': ['referenceName'],
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterGroups]': ['referenceName'],
          include: ['gameCenterDetail'],
          'limit[localizations]': 50,
          'limit[releases]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterAchievementImage', async () => {
    const responsePromise =
      client.gameCenterAchievementLocalizations.retrieveGameCenterAchievementImage('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveGameCenterAchievementImage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterAchievementLocalizations.retrieveGameCenterAchievementImage(
        'id',
        {
          'fields[gameCenterAchievementImages]': ['fileSize'],
          'fields[gameCenterAchievementLocalizations]': ['locale'],
          include: ['gameCenterAchievementLocalization'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
