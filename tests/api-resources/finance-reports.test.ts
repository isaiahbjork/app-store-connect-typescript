// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource financeReports', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.financeReports.list({
      'filter[regionCode]': ['string'],
      'filter[reportDate]': ['string'],
      'filter[reportType]': ['FINANCIAL'],
      'filter[vendorNumber]': ['string'],
    });
  });
});
