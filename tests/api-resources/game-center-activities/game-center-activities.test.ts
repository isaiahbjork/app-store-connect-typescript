// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterActivities', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.gameCenterActivities.create({
      data: {
        attributes: { referenceName: 'referenceName', vendorIdentifier: 'vendorIdentifier' },
        type: 'gameCenterActivities',
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
    const response = await client.gameCenterActivities.create({
      data: {
        attributes: {
          referenceName: 'referenceName',
          vendorIdentifier: 'vendorIdentifier',
          maximumPlayersCount: 0,
          minimumPlayersCount: 0,
          playStyle: 'ASYNCHRONOUS',
          properties: { foo: 'string' },
          supportsPartyCode: true,
        },
        type: 'gameCenterActivities',
        relationships: {
          gameCenterDetail: { data: { id: 'id', type: 'gameCenterDetails' } },
          gameCenterGroup: { data: { id: 'id', type: 'gameCenterGroups' } },
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.gameCenterActivities.retrieve('id');
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
      client.gameCenterActivities.retrieve(
        'id',
        {
          'fields[gameCenterActivities]': ['referenceName'],
          'fields[gameCenterActivityVersions]': ['version'],
          include: ['gameCenterDetail'],
          'limit[achievements]': 50,
          'limit[leaderboards]': 50,
          'limit[versions]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.gameCenterActivities.update('id', {
      data: { id: 'id', type: 'gameCenterActivities' },
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
    const response = await client.gameCenterActivities.update('id', {
      data: {
        id: 'id',
        type: 'gameCenterActivities',
        attributes: {
          archived: true,
          maximumPlayersCount: 0,
          minimumPlayersCount: 0,
          playStyle: 'ASYNCHRONOUS',
          properties: { foo: 'string' },
          referenceName: 'referenceName',
          supportsPartyCode: true,
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.gameCenterActivities.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listVersions', async () => {
    const responsePromise = client.gameCenterActivities.listVersions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterActivities.listVersions(
        'id',
        {
          'fields[gameCenterActivities]': ['referenceName'],
          'fields[gameCenterActivityImages]': ['fileSize'],
          'fields[gameCenterActivityLocalizations]': ['locale'],
          'fields[gameCenterActivityVersionReleases]': ['version'],
          'fields[gameCenterActivityVersions]': ['version'],
          include: ['activity'],
          limit: 200,
          'limit[localizations]': 50,
          'limit[releases]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
