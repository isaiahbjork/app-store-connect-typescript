// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterLeaderboards', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.gameCenterLeaderboards.create({
      data: {
        attributes: {
          defaultFormatter: 'INTEGER',
          referenceName: 'referenceName',
          scoreSortType: 'ASC',
          submissionType: 'BEST_SCORE',
          vendorIdentifier: 'vendorIdentifier',
        },
        type: 'gameCenterLeaderboards',
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
    const response = await client.gameCenterLeaderboards.create({
      data: {
        attributes: {
          defaultFormatter: 'INTEGER',
          referenceName: 'referenceName',
          scoreSortType: 'ASC',
          submissionType: 'BEST_SCORE',
          vendorIdentifier: 'vendorIdentifier',
          activityProperties: { foo: 'string' },
          recurrenceDuration: 'recurrenceDuration',
          recurrenceRule: 'recurrenceRule',
          recurrenceStartDate: '2019-12-27T18:11:19.117Z',
          scoreRangeEnd: 'scoreRangeEnd',
          scoreRangeStart: 'scoreRangeStart',
          visibility: 'SHOW_FOR_ALL',
        },
        type: 'gameCenterLeaderboards',
        relationships: {
          gameCenterDetail: { data: { id: 'id', type: 'gameCenterDetails' } },
          gameCenterGroup: { data: { id: 'id', type: 'gameCenterGroups' } },
          gameCenterLeaderboardSets: { data: [{ id: 'id', type: 'gameCenterLeaderboardSets' }] },
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.gameCenterLeaderboards.retrieve('id');
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
      client.gameCenterLeaderboards.retrieve(
        'id',
        {
          'fields[gameCenterLeaderboardLocalizations]': ['locale'],
          'fields[gameCenterLeaderboardReleases]': ['live'],
          'fields[gameCenterLeaderboards]': ['defaultFormatter'],
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
  test.skip('update: only required params', async () => {
    const responsePromise = client.gameCenterLeaderboards.update('id', {
      data: { id: 'id', type: 'gameCenterLeaderboards' },
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
    const response = await client.gameCenterLeaderboards.update('id', {
      data: {
        id: 'id',
        type: 'gameCenterLeaderboards',
        attributes: {
          activityProperties: { foo: 'string' },
          archived: true,
          defaultFormatter: 'INTEGER',
          recurrenceDuration: 'recurrenceDuration',
          recurrenceRule: 'recurrenceRule',
          recurrenceStartDate: '2019-12-27T18:11:19.117Z',
          referenceName: 'referenceName',
          scoreRangeEnd: 'scoreRangeEnd',
          scoreRangeStart: 'scoreRangeStart',
          scoreSortType: 'ASC',
          submissionType: 'BEST_SCORE',
          visibility: 'SHOW_FOR_ALL',
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.gameCenterLeaderboards.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listLocalizations', async () => {
    const responsePromise = client.gameCenterLeaderboards.listLocalizations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listLocalizations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterLeaderboards.listLocalizations(
        'id',
        {
          'fields[gameCenterLeaderboardImages]': ['fileSize'],
          'fields[gameCenterLeaderboardLocalizations]': ['locale'],
          'fields[gameCenterLeaderboards]': ['defaultFormatter'],
          include: ['gameCenterLeaderboard'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listReleases', async () => {
    const responsePromise = client.gameCenterLeaderboards.listReleases('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listReleases: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterLeaderboards.listReleases(
        'id',
        {
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterLeaderboardReleases]': ['live'],
          'fields[gameCenterLeaderboards]': ['defaultFormatter'],
          'filter[gameCenterDetail]': ['string'],
          'filter[live]': ['string'],
          include: ['gameCenterDetail'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
