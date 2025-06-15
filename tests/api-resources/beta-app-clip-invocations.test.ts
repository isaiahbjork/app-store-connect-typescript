// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource betaAppClipInvocations', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.betaAppClipInvocations.create({
      data: {
        attributes: { url: 'https://example.com' },
        relationships: {
          betaAppClipInvocationLocalizations: {
            data: [{ id: 'id', type: 'betaAppClipInvocationLocalizations' }],
          },
          buildBundle: { data: { id: 'id', type: 'buildBundles' } },
        },
        type: 'betaAppClipInvocations',
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
    const response = await client.betaAppClipInvocations.create({
      data: {
        attributes: { url: 'https://example.com' },
        relationships: {
          betaAppClipInvocationLocalizations: {
            data: [{ id: 'id', type: 'betaAppClipInvocationLocalizations' }],
          },
          buildBundle: { data: { id: 'id', type: 'buildBundles' } },
        },
        type: 'betaAppClipInvocations',
      },
      included: [
        {
          attributes: { locale: 'locale', title: 'title' },
          type: 'betaAppClipInvocationLocalizations',
          id: 'id',
          relationships: { betaAppClipInvocation: { data: { id: 'id', type: 'betaAppClipInvocations' } } },
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.betaAppClipInvocations.retrieve('id');
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
      client.betaAppClipInvocations.retrieve(
        'id',
        {
          'fields[betaAppClipInvocations]': ['url'],
          include: ['betaAppClipInvocationLocalizations'],
          'limit[betaAppClipInvocationLocalizations]': 50,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.betaAppClipInvocations.update('id', {
      data: { id: 'id', type: 'betaAppClipInvocations' },
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
    const response = await client.betaAppClipInvocations.update('id', {
      data: { id: 'id', type: 'betaAppClipInvocations', attributes: { url: 'https://example.com' } },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.betaAppClipInvocations.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
