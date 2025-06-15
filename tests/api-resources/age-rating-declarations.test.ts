// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ageRatingDeclarations', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.ageRatingDeclarations.update('id', {
      data: { id: 'id', type: 'ageRatingDeclarations' },
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
    const response = await client.ageRatingDeclarations.update('id', {
      data: {
        id: 'id',
        type: 'ageRatingDeclarations',
        attributes: {
          alcoholTobaccoOrDrugUseOrReferences: 'NONE',
          contests: 'NONE',
          gambling: true,
          gamblingSimulated: 'NONE',
          horrorOrFearThemes: 'NONE',
          kidsAgeBand: 'FIVE_AND_UNDER',
          koreaAgeRatingOverride: 'NONE',
          lootBox: true,
          matureOrSuggestiveThemes: 'NONE',
          medicalOrTreatmentInformation: 'NONE',
          profanityOrCrudeHumor: 'NONE',
          sexualContentGraphicAndNudity: 'NONE',
          sexualContentOrNudity: 'NONE',
          unrestrictedWebAccess: true,
          violenceCartoonOrFantasy: 'NONE',
          violenceRealistic: 'NONE',
          violenceRealisticProlongedGraphicOrSadistic: 'NONE',
        },
      },
    });
  });
});
