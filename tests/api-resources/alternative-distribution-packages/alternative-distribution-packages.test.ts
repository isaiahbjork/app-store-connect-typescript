// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource alternativeDistributionPackages', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.alternativeDistributionPackages.create({
      data: {
        relationships: { appStoreVersion: { data: { id: 'id', type: 'appStoreVersions' } } },
        type: 'alternativeDistributionPackages',
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
    const response = await client.alternativeDistributionPackages.create({
      data: {
        relationships: { appStoreVersion: { data: { id: 'id', type: 'appStoreVersions' } } },
        type: 'alternativeDistributionPackages',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.alternativeDistributionPackages.retrieve('id');
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
      client.alternativeDistributionPackages.retrieve(
        'id',
        {
          'fields[alternativeDistributionPackages]': ['versions'],
          'fields[alternativeDistributionPackageVersions]': ['url'],
          include: ['versions'],
          'limit[versions]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listVersions', async () => {
    const responsePromise = client.alternativeDistributionPackages.listVersions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.alternativeDistributionPackages.listVersions(
        'id',
        {
          'fields[alternativeDistributionPackageDeltas]': ['url'],
          'fields[alternativeDistributionPackages]': ['versions'],
          'fields[alternativeDistributionPackageVariants]': ['url'],
          'fields[alternativeDistributionPackageVersions]': ['url'],
          'filter[state]': ['COMPLETED'],
          include: ['variants'],
          limit: 200,
          'limit[deltas]': 50,
          'limit[variants]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
