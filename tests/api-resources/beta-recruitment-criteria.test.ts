// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource betaRecruitmentCriteria', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.betaRecruitmentCriteria.create({
      data: {
        attributes: { deviceFamilyOsVersionFilters: [{}] },
        relationships: { betaGroup: { data: { id: 'id', type: 'betaGroups' } } },
        type: 'betaRecruitmentCriteria',
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
    const response = await client.betaRecruitmentCriteria.create({
      data: {
        attributes: {
          deviceFamilyOsVersionFilters: [
            {
              deviceFamily: 'IPHONE',
              maximumOsInclusive: 'maximumOsInclusive',
              minimumOsInclusive: 'minimumOsInclusive',
            },
          ],
        },
        relationships: { betaGroup: { data: { id: 'id', type: 'betaGroups' } } },
        type: 'betaRecruitmentCriteria',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.betaRecruitmentCriteria.update('id', {
      data: { id: 'id', type: 'betaRecruitmentCriteria' },
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
    const response = await client.betaRecruitmentCriteria.update('id', {
      data: {
        id: 'id',
        type: 'betaRecruitmentCriteria',
        attributes: {
          deviceFamilyOsVersionFilters: [
            {
              deviceFamily: 'IPHONE',
              maximumOsInclusive: 'maximumOsInclusive',
              minimumOsInclusive: 'minimumOsInclusive',
            },
          ],
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.betaRecruitmentCriteria.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
