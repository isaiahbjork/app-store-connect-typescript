// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appStoreVersions/{id}/appStoreVersionPhasedRelease',
  operationId: 'appStoreVersions_appStoreVersionPhasedRelease_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_app_store_version_phased_release_app_store_versions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appStoreVersionPhasedReleases]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appStoreVersionPhasedReleases',
        items: {
          type: 'string',
          enum: ['phasedReleaseState', 'startDate', 'totalPauseDuration', 'currentDayNumber'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appStoreVersions.retrieveAppStoreVersionPhasedRelease(id, body));
};

export default { metadata, tool, handler };
