// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'bundle_ids',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bundleIds/{id}/profiles',
  operationId: 'bundleIds_profiles_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_profiles_bundle_ids',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[profiles]': {
        type: 'array',
        description: 'the fields to include for returned resources of type profiles',
        items: {
          type: 'string',
          enum: [
            'name',
            'platform',
            'profileType',
            'profileState',
            'profileContent',
            'uuid',
            'createdDate',
            'expirationDate',
            'bundleId',
            'devices',
            'certificates',
          ],
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
  return asTextContentResult(await client.bundleIDs.retrieveProfiles(id, body));
};

export default { metadata, tool, handler };
