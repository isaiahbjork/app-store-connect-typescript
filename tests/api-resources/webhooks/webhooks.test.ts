// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.webhooks.create({
      data: {
        attributes: {
          enabled: true,
          eventTypes: ['APP_STORE_VERSION_APP_VERSION_STATE_UPDATED'],
          name: 'name',
          secret: 'secret',
          url: 'https://example.com',
        },
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'webhooks',
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
    const response = await client.webhooks.create({
      data: {
        attributes: {
          enabled: true,
          eventTypes: ['APP_STORE_VERSION_APP_VERSION_STATE_UPDATED'],
          name: 'name',
          secret: 'secret',
          url: 'https://example.com',
        },
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'webhooks',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.webhooks.retrieve('id');
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
      client.webhooks.retrieve(
        'id',
        { 'fields[webhooks]': ['enabled'], include: ['app'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.webhooks.update('id', { data: { id: 'id', type: 'webhooks' } });
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
    const response = await client.webhooks.update('id', {
      data: {
        id: 'id',
        type: 'webhooks',
        attributes: {
          enabled: true,
          eventTypes: ['APP_STORE_VERSION_APP_VERSION_STATE_UPDATED'],
          name: 'name',
          secret: 'secret',
          url: 'https://example.com',
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.webhooks.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listDeliveries', async () => {
    const responsePromise = client.webhooks.listDeliveries('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listDeliveries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.listDeliveries(
        'id',
        {
          'fields[webhookDeliveries]': ['createdDate'],
          'fields[webhookEvents]': ['eventType'],
          'filter[createdDateGreaterThanOrEqualTo]': ['string'],
          'filter[createdDateLessThan]': ['string'],
          'filter[deliveryState]': ['SUCCEEDED'],
          include: ['event'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
