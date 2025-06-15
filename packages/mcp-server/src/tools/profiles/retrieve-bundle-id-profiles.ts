// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'profiles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/profiles/{id}/bundleId',
  operationId: 'profiles_bundleId_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_bundle_id_profiles',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[bundleIds]': {
        type: 'array',
        description: 'the fields to include for returned resources of type bundleIds',
        items: {
          type: 'string',
          enum: ['name', 'platform', 'identifier', 'seedId', 'profiles', 'bundleIdCapabilities', 'app'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.profiles.retrieveBundleID(id, body));
};

export default { metadata, tool, handler };
