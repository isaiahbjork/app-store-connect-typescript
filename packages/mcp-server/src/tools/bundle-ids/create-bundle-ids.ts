// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'bundle_ids',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/bundleIds',
  operationId: 'bundleIds_createInstance',
};

export const tool: Tool = {
  name: 'create_bundle_ids',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              identifier: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              platform: {
                $ref: '#/$defs/bundle_id_platform',
              },
              seedId: {
                type: 'string',
              },
            },
            required: ['identifier', 'name', 'platform'],
          },
          type: {
            type: 'string',
            enum: ['bundleIds'],
          },
        },
        required: ['attributes', 'type'],
      },
    },
    required: ['data'],
    $defs: {
      bundle_id_platform: {
        type: 'string',
        enum: ['IOS', 'MAC_OS', 'UNIVERSAL'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.bundleIDs.create(body));
};

export default { metadata, tool, handler };
