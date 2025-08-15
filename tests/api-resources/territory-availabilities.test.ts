// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource territoryAvailabilities', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.territoryAvailabilities.update('id', {
      data: { id: 'id', type: 'territoryAvailabilities' },
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
    const response = await client.territoryAvailabilities.update('id', {
      data: {
        id: 'id',
        type: 'territoryAvailabilities',
        attributes: { available: true, preOrderEnabled: true, releaseDate: '2019-12-27' },
      },
    });
  });
});
