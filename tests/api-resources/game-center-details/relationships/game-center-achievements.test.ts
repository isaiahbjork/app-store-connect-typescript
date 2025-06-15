// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gameCenterAchievements', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterAchievements', async () => {
    const responsePromise =
      client.gameCenterDetails.relationships.gameCenterAchievements.retrieveGameCenterAchievements('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveGameCenterAchievements: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gameCenterDetails.relationships.gameCenterAchievements.retrieveGameCenterAchievements(
        'id',
        { limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateGameCenterAchievements: only required params', async () => {
    const responsePromise =
      client.gameCenterDetails.relationships.gameCenterAchievements.updateGameCenterAchievements('id', {
        data: [{ id: 'id', type: 'gameCenterAchievements' }],
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
  test.skip('updateGameCenterAchievements: required and optional params', async () => {
    const response =
      await client.gameCenterDetails.relationships.gameCenterAchievements.updateGameCenterAchievements('id', {
        data: [{ id: 'id', type: 'gameCenterAchievements' }],
      });
  });
});
