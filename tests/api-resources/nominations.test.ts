// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource nominations', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.nominations.create({
      data: {
        attributes: {
          description: 'description',
          name: 'name',
          publishStartDate: '2019-12-27T18:11:19.117Z',
          submitted: true,
          type: 'APP_LAUNCH',
        },
        relationships: { relatedApps: { data: [{ id: 'id', type: 'apps' }] } },
        type: 'nominations',
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
    const response = await client.nominations.create({
      data: {
        attributes: {
          description: 'description',
          name: 'name',
          publishStartDate: '2019-12-27T18:11:19.117Z',
          submitted: true,
          type: 'APP_LAUNCH',
          deviceFamilies: ['IPHONE'],
          hasInAppEvents: true,
          launchInSelectMarketsFirst: true,
          locales: ['string'],
          notes: 'notes',
          preOrderEnabled: true,
          publishEndDate: '2019-12-27T18:11:19.117Z',
          supplementalMaterialsUris: ['https://example.com'],
        },
        relationships: {
          relatedApps: { data: [{ id: 'id', type: 'apps' }] },
          inAppEvents: { data: [{ id: 'id', type: 'appEvents' }] },
          supportedTerritories: { data: [{ id: 'id', type: 'territories' }] },
        },
        type: 'nominations',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.nominations.retrieve('id');
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
      client.nominations.retrieve(
        'id',
        {
          'fields[nominations]': ['name'],
          include: ['relatedApps'],
          'limit[inAppEvents]': 50,
          'limit[relatedApps]': 50,
          'limit[supportedTerritories]': 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.nominations.update('id', { data: { id: 'id', type: 'nominations' } });
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
    const response = await client.nominations.update('id', {
      data: {
        id: 'id',
        type: 'nominations',
        attributes: {
          archived: true,
          description: 'description',
          deviceFamilies: ['IPHONE'],
          hasInAppEvents: true,
          launchInSelectMarketsFirst: true,
          locales: ['string'],
          name: 'name',
          notes: 'notes',
          preOrderEnabled: true,
          publishEndDate: '2019-12-27T18:11:19.117Z',
          publishStartDate: '2019-12-27T18:11:19.117Z',
          submitted: true,
          supplementalMaterialsUris: ['https://example.com'],
          type: 'APP_LAUNCH',
        },
        relationships: {
          inAppEvents: { data: [{ id: 'id', type: 'appEvents' }] },
          relatedApps: { data: [{ id: 'id', type: 'apps' }] },
          supportedTerritories: { data: [{ id: 'id', type: 'territories' }] },
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.nominations.list({ 'filter[state]': ['DRAFT'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.nominations.list({
      'filter[state]': ['DRAFT'],
      'fields[nominations]': ['name'],
      'filter[relatedApps]': ['string'],
      'filter[type]': ['APP_LAUNCH'],
      include: ['relatedApps'],
      limit: 200,
      'limit[inAppEvents]': 50,
      'limit[relatedApps]': 50,
      'limit[supportedTerritories]': 200,
      sort: ['lastModifiedDate'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.nominations.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
