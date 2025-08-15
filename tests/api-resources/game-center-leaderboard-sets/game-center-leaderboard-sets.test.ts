// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterLeaderboardSets', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.gameCenterLeaderboardSets.create({
      data: {
        attributes: { referenceName: 'referenceName', vendorIdentifier: 'vendorIdentifier' },
        type: 'gameCenterLeaderboardSets',
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
    const response = await client.gameCenterLeaderboardSets.create({
      data: {
        attributes: { referenceName: 'referenceName', vendorIdentifier: 'vendorIdentifier' },
        type: 'gameCenterLeaderboardSets',
        relationships: {
          gameCenterDetail: { data: { id: 'id', type: 'gameCenterDetails' } },
          gameCenterGroup: { data: { id: 'id', type: 'gameCenterGroups' } },
          gameCenterLeaderboards: { data: [{ id: 'id', type: 'gameCenterLeaderboards' }] },
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.gameCenterLeaderboardSets.retrieve('id');
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
      client.gameCenterLeaderboardSets.retrieve(
        'id',
        {
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

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.gameCenterLeaderboardSets.update('id', {
      data: { id: 'id', type: 'gameCenterLeaderboardSets' },
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
    const response = await client.gameCenterLeaderboardSets.update('id', {
      data: { id: 'id', type: 'gameCenterLeaderboardSets', attributes: { referenceName: 'referenceName' } },
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.gameCenterLeaderboardSets.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listGameCenterLeaderboards', async () => {
    const responsePromise = client.gameCenterLeaderboardSets.listGameCenterLeaderboards('id');
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
      client.gameCenterLeaderboardSets.listGameCenterLeaderboards(
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
  test.skip('listLocalizations', async () => {
    const responsePromise = client.gameCenterLeaderboardSets.listLocalizations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listLocalizations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterLeaderboardSets.listLocalizations(
        'id',
        {
          'fields[gameCenterLeaderboardSetImages]': ['fileSize'],
          'fields[gameCenterLeaderboardSetLocalizations]': ['locale'],
          'fields[gameCenterLeaderboardSets]': ['referenceName'],
          include: ['gameCenterLeaderboardSet'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listReleases', async () => {
    const responsePromise = client.gameCenterLeaderboardSets.listReleases('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listReleases: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterLeaderboardSets.listReleases(
        'id',
        {
          'fields[gameCenterDetails]': ['arcadeEnabled'],
          'fields[gameCenterLeaderboardSetReleases]': ['live'],
          'fields[gameCenterLeaderboardSets]': ['referenceName'],
          'filter[gameCenterDetail]': ['string'],
          'filter[live]': ['string'],
          include: ['gameCenterDetail'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveGroupLeaderboardSet', async () => {
    const responsePromise = client.gameCenterLeaderboardSets.retrieveGroupLeaderboardSet('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveGroupLeaderboardSet: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterLeaderboardSets.retrieveGroupLeaderboardSet(
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
