// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterLeaderboardSets', () => {
  // Prism tests are disabled
  test.skip('retrieveGameCenterLeaderboardSets', async () => {
    const responsePromise =
      client.gameCenterDetails.relationships.gameCenterLeaderboardSets.retrieveGameCenterLeaderboardSets(
        'id',
      );
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
      client.gameCenterDetails.relationships.gameCenterLeaderboardSets.retrieveGameCenterLeaderboardSets(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('updateGameCenterLeaderboardSets: only required params', async () => {
    const responsePromise =
      client.gameCenterDetails.relationships.gameCenterLeaderboardSets.updateGameCenterLeaderboardSets('id', {
        data: [{ id: 'id', type: 'gameCenterLeaderboardSets' }],
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
  test.skip('updateGameCenterLeaderboardSets: required and optional params', async () => {
    const response =
      await client.gameCenterDetails.relationships.gameCenterLeaderboardSets.updateGameCenterLeaderboardSets(
        'id',
        { data: [{ id: 'id', type: 'gameCenterLeaderboardSets' }] },
      );
  });
});
