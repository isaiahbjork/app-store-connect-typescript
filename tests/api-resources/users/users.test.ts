// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.users.retrieve('id');
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
      client.users.retrieve(
        'id',
        {
          'fields[apps]': ['accessibilityUrl'],
          'fields[users]': ['username'],
          include: ['visibleApps'],
          'limit[visibleApps]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.users.update('id', { data: { id: 'id', type: 'users' } });
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
    const response = await client.users.update('id', {
      data: {
        id: 'id',
        type: 'users',
        attributes: { allAppsVisible: true, provisioningAllowed: true, roles: ['ADMIN'] },
        relationships: { visibleApps: { data: [{ id: 'id', type: 'apps' }] } },
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.users.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.list(
        {
          'fields[apps]': ['accessibilityUrl'],
          'fields[users]': ['username'],
          'filter[roles]': ['ADMIN'],
          'filter[username]': ['string'],
          'filter[visibleApps]': ['string'],
          include: ['visibleApps'],
          limit: 200,
          'limit[visibleApps]': 50,
          sort: ['username'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.users.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getVisibleApps', async () => {
    const responsePromise = client.users.getVisibleApps('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getVisibleApps: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.getVisibleApps(
        'id',
        { 'fields[apps]': ['accessibilityUrl'], limit: 200 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
