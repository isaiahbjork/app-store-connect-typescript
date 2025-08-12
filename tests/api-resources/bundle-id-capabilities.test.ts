// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bundleIDCapabilities', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.bundleIDCapabilities.create({
      data: {
        attributes: { capabilityType: 'ICLOUD' },
        relationships: { bundleId: { data: { id: 'id', type: 'bundleIds' } } },
        type: 'bundleIdCapabilities',
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
    const response = await client.bundleIDCapabilities.create({
      data: {
        attributes: {
          capabilityType: 'ICLOUD',
          settings: [
            {
              allowedInstances: 'ENTRY',
              description: 'description',
              enabledByDefault: true,
              key: 'ICLOUD_VERSION',
              minInstances: 0,
              name: 'name',
              options: [
                {
                  description: 'description',
                  enabled: true,
                  enabledByDefault: true,
                  key: 'XCODE_5',
                  name: 'name',
                  supportsWildcard: true,
                },
              ],
              visible: true,
            },
          ],
        },
        relationships: { bundleId: { data: { id: 'id', type: 'bundleIds' } } },
        type: 'bundleIdCapabilities',
      },
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.bundleIDCapabilities.update('id', {
      data: { id: 'id', type: 'bundleIdCapabilities' },
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
  test.skip('update: required and optional params', async () => {
    const response = await client.bundleIDCapabilities.update('id', {
      data: {
        id: 'id',
        type: 'bundleIdCapabilities',
        attributes: {
          capabilityType: 'ICLOUD',
          settings: [
            {
              allowedInstances: 'ENTRY',
              description: 'description',
              enabledByDefault: true,
              key: 'ICLOUD_VERSION',
              minInstances: 0,
              name: 'name',
              options: [
                {
                  description: 'description',
                  enabled: true,
                  enabledByDefault: true,
                  key: 'XCODE_5',
                  name: 'name',
                  supportsWildcard: true,
                },
              ],
              visible: true,
            },
          ],
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.bundleIDCapabilities.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
