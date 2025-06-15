// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterLeaderboardLocalizations', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.gameCenterLeaderboardLocalizations.create({
      data: {
        attributes: { locale: 'locale', name: 'name' },
        relationships: { gameCenterLeaderboard: { data: { id: 'id', type: 'gameCenterLeaderboards' } } },
        type: 'gameCenterLeaderboardLocalizations',
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
    const response = await client.gameCenterLeaderboardLocalizations.create({
      data: {
        attributes: {
          locale: 'locale',
          name: 'name',
          formatterOverride: 'INTEGER',
          formatterSuffix: 'formatterSuffix',
          formatterSuffixSingular: 'formatterSuffixSingular',
        },
        relationships: { gameCenterLeaderboard: { data: { id: 'id', type: 'gameCenterLeaderboards' } } },
        type: 'gameCenterLeaderboardLocalizations',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.gameCenterLeaderboardLocalizations.retrieve('id');
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
      client.gameCenterLeaderboardLocalizations.retrieve(
        'id',
        {
          'fields[gameCenterLeaderboardImages]': ['fileSize'],
          'fields[gameCenterLeaderboardLocalizations]': ['locale'],
          include: ['gameCenterLeaderboard'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.gameCenterLeaderboardLocalizations.update('id', {
      data: { id: 'id', type: 'gameCenterLeaderboardLocalizations' },
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
    const response = await client.gameCenterLeaderboardLocalizations.update('id', {
      data: {
        id: 'id',
        type: 'gameCenterLeaderboardLocalizations',
        attributes: {
          formatterOverride: 'INTEGER',
          formatterSuffix: 'formatterSuffix',
          formatterSuffixSingular: 'formatterSuffixSingular',
          name: 'name',
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.gameCenterLeaderboardLocalizations.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterLeaderboardImage', async () => {
    const responsePromise =
      client.gameCenterLeaderboardLocalizations.retrieveGameCenterLeaderboardImage('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterLeaderboardImage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterLeaderboardLocalizations.retrieveGameCenterLeaderboardImage(
        'id',
        {
          'fields[gameCenterLeaderboardImages]': ['fileSize'],
          'fields[gameCenterLeaderboardLocalizations]': ['locale'],
          include: ['gameCenterLeaderboardLocalization'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
