// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appClipAdvancedExperiences', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.appClipAdvancedExperiences.create({
      data: {
        attributes: { defaultLanguage: 'AR', isPoweredBy: true, link: 'https://example.com' },
        relationships: {
          appClip: { data: { id: 'id', type: 'appClips' } },
          headerImage: { data: { id: 'id', type: 'appClipAdvancedExperienceImages' } },
          localizations: { data: [{ id: 'id', type: 'appClipAdvancedExperienceLocalizations' }] },
        },
        type: 'appClipAdvancedExperiences',
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
    const response = await client.appClipAdvancedExperiences.create({
      data: {
        attributes: {
          defaultLanguage: 'AR',
          isPoweredBy: true,
          link: 'https://example.com',
          action: 'OPEN',
          businessCategory: 'AUTOMOTIVE',
          place: {
            categories: ['string'],
            displayPoint: { coordinates: { latitude: 0, longitude: 0 }, source: 'CALCULATED' },
            homePage: 'homePage',
            mainAddress: {
              fullAddress: 'fullAddress',
              structuredAddress: {
                countryCode: 'countryCode',
                floor: 'floor',
                locality: 'locality',
                neighborhood: 'neighborhood',
                postalCode: 'postalCode',
                stateProvince: 'stateProvince',
                streetAddress: ['string'],
              },
            },
            mapAction: 'BUY_TICKETS',
            names: ['string'],
            phoneNumber: { intent: 'intent', number: 'number', type: 'FAX' },
            placeId: 'placeId',
            relationship: 'OWNER',
          },
        },
        relationships: {
          appClip: { data: { id: 'id', type: 'appClips' } },
          headerImage: { data: { id: 'id', type: 'appClipAdvancedExperienceImages' } },
          localizations: { data: [{ id: 'id', type: 'appClipAdvancedExperienceLocalizations' }] },
        },
        type: 'appClipAdvancedExperiences',
      },
      included: [
        {
          type: 'appClipAdvancedExperienceLocalizations',
          id: 'id',
          attributes: { language: 'AR', subtitle: 'subtitle', title: 'title' },
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.appClipAdvancedExperiences.retrieve('id');
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
      client.appClipAdvancedExperiences.retrieve(
        'id',
        { 'fields[appClipAdvancedExperiences]': ['link'], include: ['appClip'], 'limit[localizations]': 50 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.appClipAdvancedExperiences.update('id', {
      data: { id: 'id', type: 'appClipAdvancedExperiences' },
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
  test.skip('update: required and optional params', async () => {
    const response = await client.appClipAdvancedExperiences.update('id', {
      data: {
        id: 'id',
        type: 'appClipAdvancedExperiences',
        attributes: {
          action: 'OPEN',
          businessCategory: 'AUTOMOTIVE',
          defaultLanguage: 'AR',
          isPoweredBy: true,
          place: {
            categories: ['string'],
            displayPoint: { coordinates: { latitude: 0, longitude: 0 }, source: 'CALCULATED' },
            homePage: 'homePage',
            mainAddress: {
              fullAddress: 'fullAddress',
              structuredAddress: {
                countryCode: 'countryCode',
                floor: 'floor',
                locality: 'locality',
                neighborhood: 'neighborhood',
                postalCode: 'postalCode',
                stateProvince: 'stateProvince',
                streetAddress: ['string'],
              },
            },
            mapAction: 'BUY_TICKETS',
            names: ['string'],
            phoneNumber: { intent: 'intent', number: 'number', type: 'FAX' },
            placeId: 'placeId',
            relationship: 'OWNER',
          },
          removed: true,
        },
        relationships: {
          appClip: { data: { id: 'id', type: 'appClips' } },
          headerImage: { data: { id: 'id', type: 'appClipAdvancedExperienceImages' } },
          localizations: { data: [{ id: 'id', type: 'appClipAdvancedExperienceLocalizations' }] },
        },
      },
      included: [
        {
          type: 'appClipAdvancedExperienceLocalizations',
          id: 'id',
          attributes: { language: 'AR', subtitle: 'subtitle', title: 'title' },
        },
      ],
    });
  });
});
