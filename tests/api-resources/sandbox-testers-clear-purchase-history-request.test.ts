// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sandboxTestersClearPurchaseHistoryRequest', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.sandboxTestersClearPurchaseHistoryRequest.create({
      data: {
        relationships: { sandboxTesters: { data: [{ id: 'id', type: 'sandboxTesters' }] } },
        type: 'sandboxTestersClearPurchaseHistoryRequest',
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
    const response = await client.sandboxTestersClearPurchaseHistoryRequest.create({
      data: {
        relationships: { sandboxTesters: { data: [{ id: 'id', type: 'sandboxTesters' }] } },
        type: 'sandboxTestersClearPurchaseHistoryRequest',
      },
    });
  });
});
