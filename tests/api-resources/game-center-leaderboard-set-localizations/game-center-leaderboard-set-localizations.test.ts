// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterLeaderboardSetLocalizations', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.gameCenterLeaderboardSetLocalizations.create({
      data: {
        attributes: { locale: 'locale', name: 'name' },
        relationships: {
          gameCenterLeaderboardSet: { data: { id: 'id', type: 'gameCenterLeaderboardSets' } },
        },
        type: 'gameCenterLeaderboardSetLocalizations',
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
    const response = await client.gameCenterLeaderboardSetLocalizations.create({
      data: {
        attributes: { locale: 'locale', name: 'name' },
        relationships: {
          gameCenterLeaderboardSet: { data: { id: 'id', type: 'gameCenterLeaderboardSets' } },
        },
        type: 'gameCenterLeaderboardSetLocalizations',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.gameCenterLeaderboardSetLocalizations.retrieve('id');
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
      client.gameCenterLeaderboardSetLocalizations.retrieve(
        'id',
        {
          'fields[gameCenterLeaderboardSetImages]': ['fileSize'],
          'fields[gameCenterLeaderboardSetLocalizations]': ['locale'],
          include: ['gameCenterLeaderboardSet'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.gameCenterLeaderboardSetLocalizations.update('id', {
      data: { id: 'id', type: 'gameCenterLeaderboardSetLocalizations' },
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
    const response = await client.gameCenterLeaderboardSetLocalizations.update('id', {
      data: { id: 'id', type: 'gameCenterLeaderboardSetLocalizations', attributes: { name: 'name' } },
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.gameCenterLeaderboardSetLocalizations.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveImage', async () => {
    const responsePromise = client.gameCenterLeaderboardSetLocalizations.retrieveImage('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveImage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterLeaderboardSetLocalizations.retrieveImage(
        'id',
        {
          'fields[gameCenterLeaderboardSetImages]': ['fileSize'],
          'fields[gameCenterLeaderboardSetLocalizations]': ['locale'],
          include: ['gameCenterLeaderboardSetLocalization'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
