// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'bundle_ids',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/bundleIds/{id}/bundleIdCapabilities',
  operationId: 'bundleIds_bundleIdCapabilities_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_bundle_id_capabilities_bundle_ids',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[bundleIdCapabilities]': {
        type: 'array',
        description: 'the fields to include for returned resources of type bundleIdCapabilities',
        items: {
          type: 'string',
          enum: ['capabilityType', 'settings'],
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
  return asTextContentResult(await client.bundleIDs.retrieveBundleIDCapabilities(id, body));
};

export default { metadata, tool, handler };
