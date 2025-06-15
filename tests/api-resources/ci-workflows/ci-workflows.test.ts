// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AppStoreConnectAPI from 'app-store-connect-api';

const client = new AppStoreConnectAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ciWorkflows', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.ciWorkflows.create({
      data: {
        attributes: {
          actions: [{}],
          clean: true,
          containerFilePath: 'containerFilePath',
          description: 'description',
          isEnabled: true,
          name: 'name',
        },
        relationships: {
          macOsVersion: { data: { id: 'id', type: 'ciMacOsVersions' } },
          product: { data: { id: 'id', type: 'ciProducts' } },
          repository: { data: { id: 'id', type: 'scmRepositories' } },
          xcodeVersion: { data: { id: 'id', type: 'ciXcodeVersions' } },
        },
        type: 'ciWorkflows',
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
    const response = await client.ciWorkflows.create({
      data: {
        attributes: {
          actions: [
            {
              actionType: 'BUILD',
              buildDistributionAudience: 'INTERNAL_ONLY',
              destination: 'ANY_IOS_DEVICE',
              isRequiredToPass: true,
              name: 'name',
              platform: 'MACOS',
              scheme: 'scheme',
              testConfiguration: {
                kind: 'USE_SCHEME_SETTINGS',
                testDestinations: [
                  {
                    deviceTypeIdentifier: 'deviceTypeIdentifier',
                    deviceTypeName: 'deviceTypeName',
                    kind: 'SIMULATOR',
                    runtimeIdentifier: 'runtimeIdentifier',
                    runtimeName: 'runtimeName',
                  },
                ],
                testPlanName: 'testPlanName',
              },
            },
          ],
          clean: true,
          containerFilePath: 'containerFilePath',
          description: 'description',
          isEnabled: true,
          name: 'name',
          branchStartCondition: {
            autoCancel: true,
            filesAndFoldersRule: {
              matchers: [{ directory: 'directory', fileExtension: 'fileExtension', fileName: 'fileName' }],
              mode: 'START_IF_ANY_FILE_MATCHES',
            },
            source: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
          },
          isLockedForEditing: true,
          manualBranchStartCondition: {
            source: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
          },
          manualPullRequestStartCondition: {
            destination: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
            source: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
          },
          manualTagStartCondition: {
            source: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
          },
          pullRequestStartCondition: {
            autoCancel: true,
            destination: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
            filesAndFoldersRule: {
              matchers: [{ directory: 'directory', fileExtension: 'fileExtension', fileName: 'fileName' }],
              mode: 'START_IF_ANY_FILE_MATCHES',
            },
            source: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
          },
          scheduledStartCondition: {
            schedule: { days: ['SUNDAY'], frequency: 'WEEKLY', hour: 0, minute: 0, timezone: 'timezone' },
            source: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
          },
          tagStartCondition: {
            autoCancel: true,
            filesAndFoldersRule: {
              matchers: [{ directory: 'directory', fileExtension: 'fileExtension', fileName: 'fileName' }],
              mode: 'START_IF_ANY_FILE_MATCHES',
            },
            source: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
          },
        },
        relationships: {
          macOsVersion: { data: { id: 'id', type: 'ciMacOsVersions' } },
          product: { data: { id: 'id', type: 'ciProducts' } },
          repository: { data: { id: 'id', type: 'scmRepositories' } },
          xcodeVersion: { data: { id: 'id', type: 'ciXcodeVersions' } },
        },
        type: 'ciWorkflows',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.ciWorkflows.retrieve('id');
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
      client.ciWorkflows.retrieve(
        'id',
        {
          'fields[ciWorkflows]': ['name'],
          'fields[scmRepositories]': ['lastAccessedDate'],
          include: ['product'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.ciWorkflows.update('id', { data: { id: 'id', type: 'ciWorkflows' } });
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
    const response = await client.ciWorkflows.update('id', {
      data: {
        id: 'id',
        type: 'ciWorkflows',
        attributes: {
          actions: [
            {
              actionType: 'BUILD',
              buildDistributionAudience: 'INTERNAL_ONLY',
              destination: 'ANY_IOS_DEVICE',
              isRequiredToPass: true,
              name: 'name',
              platform: 'MACOS',
              scheme: 'scheme',
              testConfiguration: {
                kind: 'USE_SCHEME_SETTINGS',
                testDestinations: [
                  {
                    deviceTypeIdentifier: 'deviceTypeIdentifier',
                    deviceTypeName: 'deviceTypeName',
                    kind: 'SIMULATOR',
                    runtimeIdentifier: 'runtimeIdentifier',
                    runtimeName: 'runtimeName',
                  },
                ],
                testPlanName: 'testPlanName',
              },
            },
          ],
          branchStartCondition: {
            autoCancel: true,
            filesAndFoldersRule: {
              matchers: [{ directory: 'directory', fileExtension: 'fileExtension', fileName: 'fileName' }],
              mode: 'START_IF_ANY_FILE_MATCHES',
            },
            source: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
          },
          clean: true,
          containerFilePath: 'containerFilePath',
          description: 'description',
          isEnabled: true,
          isLockedForEditing: true,
          manualBranchStartCondition: {
            source: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
          },
          manualPullRequestStartCondition: {
            destination: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
            source: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
          },
          manualTagStartCondition: {
            source: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
          },
          name: 'name',
          pullRequestStartCondition: {
            autoCancel: true,
            destination: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
            filesAndFoldersRule: {
              matchers: [{ directory: 'directory', fileExtension: 'fileExtension', fileName: 'fileName' }],
              mode: 'START_IF_ANY_FILE_MATCHES',
            },
            source: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
          },
          scheduledStartCondition: {
            schedule: { days: ['SUNDAY'], frequency: 'WEEKLY', hour: 0, minute: 0, timezone: 'timezone' },
            source: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
          },
          tagStartCondition: {
            autoCancel: true,
            filesAndFoldersRule: {
              matchers: [{ directory: 'directory', fileExtension: 'fileExtension', fileName: 'fileName' }],
              mode: 'START_IF_ANY_FILE_MATCHES',
            },
            source: { isAllMatch: true, patterns: [{ isPrefix: true, pattern: 'pattern' }] },
          },
        },
        relationships: {
          macOsVersion: { data: { id: 'id', type: 'ciMacOsVersions' } },
          xcodeVersion: { data: { id: 'id', type: 'ciXcodeVersions' } },
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.ciWorkflows.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listBuildRuns', async () => {
    const responsePromise = client.ciWorkflows.listBuildRuns('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listBuildRuns: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ciWorkflows.listBuildRuns(
        'id',
        {
          'fields[builds]': ['version'],
          'fields[ciBuildRuns]': ['number'],
          'fields[ciProducts]': ['name'],
          'fields[ciWorkflows]': ['name'],
          'fields[scmGitReferences]': ['name'],
          'fields[scmPullRequests]': ['title'],
          'filter[builds]': ['string'],
          include: ['builds'],
          limit: 200,
          'limit[builds]': 50,
          sort: ['number'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRepository', async () => {
    const responsePromise = client.ciWorkflows.retrieveRepository('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRepository: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ciWorkflows.retrieveRepository(
        'id',
        {
          'fields[scmGitReferences]': ['name'],
          'fields[scmProviders]': ['scmProviderType'],
          'fields[scmRepositories]': ['lastAccessedDate'],
          include: ['scmProvider'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AppStoreConnectAPI.NotFoundError);
  });
});
