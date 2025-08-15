// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource marketplaceSearchDetails', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.marketplaceSearchDetails.create({
      data: {
        attributes: { catalogUrl: 'https://example.com' },
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'marketplaceSearchDetails',
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
    const response = await client.marketplaceSearchDetails.create({
      data: {
        attributes: { catalogUrl: 'https://example.com' },
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'marketplaceSearchDetails',
      },
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.marketplaceSearchDetails.update('id', {
      data: { id: 'id', type: 'marketplaceSearchDetails' },
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
    const response = await client.marketplaceSearchDetails.update('id', {
      data: { id: 'id', type: 'marketplaceSearchDetails', attributes: { catalogUrl: 'https://example.com' } },
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.marketplaceSearchDetails.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
