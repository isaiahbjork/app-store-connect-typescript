// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appEvents', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.appEvents.create({
      data: {
        attributes: { referenceName: 'referenceName' },
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'appEvents',
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
    const response = await client.appEvents.create({
      data: {
        attributes: {
          referenceName: 'referenceName',
          badge: 'LIVE_EVENT',
          deepLink: 'https://example.com',
          primaryLocale: 'primaryLocale',
          priority: 'HIGH',
          purchaseRequirement: 'purchaseRequirement',
          purpose: 'APPROPRIATE_FOR_ALL_USERS',
          territorySchedules: [
            {
              eventEnd: '2019-12-27T18:11:19.117Z',
              eventStart: '2019-12-27T18:11:19.117Z',
              publishStart: '2019-12-27T18:11:19.117Z',
              territories: ['string'],
            },
          ],
        },
        relationships: { app: { data: { id: 'id', type: 'apps' } } },
        type: 'appEvents',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.appEvents.retrieve('id');
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
      client.appEvents.retrieve(
        'id',
        {
          'fields[appEventLocalizations]': ['locale'],
          'fields[appEvents]': ['referenceName'],
          include: ['localizations'],
          'limit[localizations]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.appEvents.update('id', { data: { id: 'id', type: 'appEvents' } });
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
    const response = await client.appEvents.update('id', {
      data: {
        id: 'id',
        type: 'appEvents',
        attributes: {
          badge: 'LIVE_EVENT',
          deepLink: 'https://example.com',
          primaryLocale: 'primaryLocale',
          priority: 'HIGH',
          purchaseRequirement: 'purchaseRequirement',
          purpose: 'APPROPRIATE_FOR_ALL_USERS',
          referenceName: 'referenceName',
          territorySchedules: [
            {
              eventEnd: '2019-12-27T18:11:19.117Z',
              eventStart: '2019-12-27T18:11:19.117Z',
              publishStart: '2019-12-27T18:11:19.117Z',
              territories: ['string'],
            },
          ],
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.appEvents.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listLocalizations', async () => {
    const responsePromise = client.appEvents.listLocalizations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listLocalizations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appEvents.listLocalizations(
        'id',
        {
          'fields[appEventLocalizations]': ['locale'],
          'fields[appEvents]': ['referenceName'],
          'fields[appEventScreenshots]': ['fileSize'],
          'fields[appEventVideoClips]': ['fileSize'],
          include: ['appEvent'],
          limit: 200,
          'limit[appEventScreenshots]': 50,
          'limit[appEventVideoClips]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
