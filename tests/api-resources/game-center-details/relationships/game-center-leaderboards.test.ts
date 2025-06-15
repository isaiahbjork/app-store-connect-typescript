// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterLeaderboards', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterLeaderboards', async () => {
    const responsePromise =
      client.gameCenterDetails.relationships.gameCenterLeaderboards.retrieveGameCenterLeaderboards('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterLeaderboards: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterDetails.relationships.gameCenterLeaderboards.retrieveGameCenterLeaderboards(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateGameCenterLeaderboards: only required params', async () => {
    const responsePromise =
      client.gameCenterDetails.relationships.gameCenterLeaderboards.updateGameCenterLeaderboards('id', {
        data: [{ id: 'id', type: 'gameCenterLeaderboards' }],
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
  test.skip('updateGameCenterLeaderboards: required and optional params', async () => {
    const response =
      await client.gameCenterDetails.relationships.gameCenterLeaderboards.updateGameCenterLeaderboards('id', {
        data: [{ id: 'id', type: 'gameCenterLeaderboards' }],
      });
  });
});
