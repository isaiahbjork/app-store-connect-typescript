// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/preReleaseVersions',
  operationId: 'apps_preReleaseVersions_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_pre_release_versions_apps',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[preReleaseVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type preReleaseVersions',
        items: {
          type: 'string',
          enum: ['version', 'platform', 'builds', 'app'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.retrievePreReleaseVersions(id, body));
};

export default { metadata, tool, handler };
