// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterChallenges', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.gameCenterChallenges.create({
      data: {
        attributes: {
          challengeType: 'LEADERBOARD',
          referenceName: 'referenceName',
          vendorIdentifier: 'vendorIdentifier',
        },
        type: 'gameCenterChallenges',
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
    const response = await client.gameCenterChallenges.create({
      data: {
        attributes: {
          challengeType: 'LEADERBOARD',
          referenceName: 'referenceName',
          vendorIdentifier: 'vendorIdentifier',
          allowedDurations: ['ONE_DAY'],
          repeatable: true,
        },
        type: 'gameCenterChallenges',
        relationships: {
          gameCenterDetail: { data: { id: 'id', type: 'gameCenterDetails' } },
          gameCenterGroup: { data: { id: 'id', type: 'gameCenterGroups' } },
          leaderboard: { data: { id: 'id', type: 'gameCenterLeaderboards' } },
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.gameCenterChallenges.retrieve('id');
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
      client.gameCenterChallenges.retrieve(
        'id',
        {
          'fields[gameCenterChallenges]': ['referenceName'],
          'fields[gameCenterChallengeVersions]': ['version'],
          include: ['gameCenterDetail'],
          'limit[versions]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.gameCenterChallenges.update('id', {
      data: { id: 'id', type: 'gameCenterChallenges' },
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
    const response = await client.gameCenterChallenges.update('id', {
      data: {
        id: 'id',
        type: 'gameCenterChallenges',
        attributes: {
          allowedDurations: ['ONE_DAY'],
          archived: true,
          referenceName: 'referenceName',
          repeatable: true,
        },
        relationships: { leaderboard: { data: { id: 'id', type: 'gameCenterLeaderboards' } } },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.gameCenterChallenges.delete('id');
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
    const responsePromise = client.gameCenterChallenges.listVersions('id');
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
      client.gameCenterChallenges.listVersions(
        'id',
        {
          'fields[gameCenterChallengeImages]': ['fileSize'],
          'fields[gameCenterChallengeLocalizations]': ['locale'],
          'fields[gameCenterChallenges]': ['referenceName'],
          'fields[gameCenterChallengeVersionReleases]': ['version'],
          'fields[gameCenterChallengeVersions]': ['version'],
          include: ['challenge'],
          limit: 200,
          'limit[localizations]': 50,
          'limit[releases]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
