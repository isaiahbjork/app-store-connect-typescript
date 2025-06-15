// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appInfos', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.appInfos.retrieve('id');
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
      client.appInfos.retrieve(
        'id',
        {
          'fields[ageRatingDeclarations]': ['alcoholTobaccoOrDrugUseOrReferences'],
          'fields[appCategories]': ['platforms'],
          'fields[appInfoLocalizations]': ['locale'],
          'fields[appInfos]': ['appStoreState'],
          include: ['app'],
          'limit[appInfoLocalizations]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.appInfos.update('id', { data: { id: 'id', type: 'appInfos' } });
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
    const response = await client.appInfos.update('id', {
      data: {
        id: 'id',
        type: 'appInfos',
        relationships: {
          primaryCategory: { data: { id: 'id', type: 'appCategories' } },
          primarySubcategoryOne: { data: { id: 'id', type: 'appCategories' } },
          primarySubcategoryTwo: { data: { id: 'id', type: 'appCategories' } },
          secondaryCategory: { data: { id: 'id', type: 'appCategories' } },
          secondarySubcategoryOne: { data: { id: 'id', type: 'appCategories' } },
          secondarySubcategoryTwo: { data: { id: 'id', type: 'appCategories' } },
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listAppInfoLocalizations', async () => {
    const responsePromise = client.appInfos.listAppInfoLocalizations('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAppInfoLocalizations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appInfos.listAppInfoLocalizations(
        'id',
        {
          'fields[appInfoLocalizations]': ['locale'],
          'fields[appInfos]': ['appStoreState'],
          'filter[locale]': ['string'],
          include: ['appInfo'],
          limit: 200,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAgeRatingDeclaration', async () => {
    const responsePromise = client.appInfos.retrieveAgeRatingDeclaration('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAgeRatingDeclaration: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appInfos.retrieveAgeRatingDeclaration(
        'id',
        { 'fields[ageRatingDeclarations]': ['alcoholTobaccoOrDrugUseOrReferences'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePrimaryCategory', async () => {
    const responsePromise = client.appInfos.retrievePrimaryCategory('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePrimaryCategory: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appInfos.retrievePrimaryCategory(
        'id',
        { 'fields[appCategories]': ['platforms'], include: ['subcategories'], 'limit[subcategories]': 50 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePrimarySubcategoryOne', async () => {
    const responsePromise = client.appInfos.retrievePrimarySubcategoryOne('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePrimarySubcategoryOne: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appInfos.retrievePrimarySubcategoryOne(
        'id',
        { 'fields[appCategories]': ['platforms'], include: ['subcategories'], 'limit[subcategories]': 50 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePrimarySubcategoryTwo', async () => {
    const responsePromise = client.appInfos.retrievePrimarySubcategoryTwo('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePrimarySubcategoryTwo: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appInfos.retrievePrimarySubcategoryTwo(
        'id',
        { 'fields[appCategories]': ['platforms'], include: ['subcategories'], 'limit[subcategories]': 50 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSecondaryCategory', async () => {
    const responsePromise = client.appInfos.retrieveSecondaryCategory('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSecondaryCategory: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appInfos.retrieveSecondaryCategory(
        'id',
        { 'fields[appCategories]': ['platforms'], include: ['subcategories'], 'limit[subcategories]': 50 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSecondarySubcategoryOne', async () => {
    const responsePromise = client.appInfos.retrieveSecondarySubcategoryOne('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSecondarySubcategoryOne: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appInfos.retrieveSecondarySubcategoryOne(
        'id',
        { 'fields[appCategories]': ['platforms'], include: ['subcategories'], 'limit[subcategories]': 50 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSecondarySubcategoryTwo', async () => {
    const responsePromise = client.appInfos.retrieveSecondarySubcategoryTwo('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSecondarySubcategoryTwo: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.appInfos.retrieveSecondarySubcategoryTwo(
        'id',
        { 'fields[appCategories]': ['platforms'], include: ['subcategories'], 'limit[subcategories]': 50 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
