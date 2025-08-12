// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource salesReports', () => {
  test('list: required and optional params', async () => {
    const response = await client.salesReports.list({
      'filter[frequency]': ['DAILY'],
      'filter[reportSubType]': ['SUMMARY'],
      'filter[reportType]': ['SALES'],
      'filter[vendorNumber]': ['string'],
      'filter[reportDate]': ['string'],
      'filter[version]': ['string'],
    });
  });
});
