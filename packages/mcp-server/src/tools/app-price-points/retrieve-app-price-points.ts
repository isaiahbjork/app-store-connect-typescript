// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_price_points',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v3/appPricePoints/{id}',
  operationId: 'appPricePointsV3_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_price_points',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appPricePoints]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appPricePoints',
        items: {
          type: 'string',
          enum: ['customerPrice', 'proceeds', 'app', 'equalizations', 'territory'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['app', 'territory'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appPricePoints.retrieve(id, body));
};

export default { metadata, tool, handler };
