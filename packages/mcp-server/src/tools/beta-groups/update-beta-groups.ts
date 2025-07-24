// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/betaGroups/{id}',
  operationId: 'betaGroups_updateInstance',
};

export const tool: Tool = {
  name: 'update_beta_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['betaGroups'],
          },
          attributes: {
            type: 'object',
            properties: {
              feedbackEnabled: {
                type: 'boolean',
              },
              iosBuildsAvailableForAppleSiliconMac: {
                type: 'boolean',
              },
              iosBuildsAvailableForAppleVision: {
                type: 'boolean',
              },
              name: {
                type: 'string',
              },
              publicLinkEnabled: {
                type: 'boolean',
              },
              publicLinkLimit: {
                type: 'integer',
              },
              publicLinkLimitEnabled: {
                type: 'boolean',
              },
            },
          },
        },
        required: ['id', 'type'],
      },
    },
    required: ['id', 'data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.betaGroups.update(id, body));
};

export default { metadata, tool, handler };
