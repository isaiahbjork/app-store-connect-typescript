// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_screenshot_sets.relationships.app_screenshots',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/appScreenshotSets/{id}/relationships/appScreenshots',
  operationId: 'appScreenshotSets_appScreenshots_replaceToManyRelationship',
};

export const tool: Tool = {
  name: 'update_relationships_app_screenshot_sets_app_screenshots',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            type: {
              type: 'string',
              enum: ['appScreenshots'],
            },
          },
          required: ['id', 'type'],
        },
      },
    },
    required: ['id', 'data'],
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.appScreenshotSets.relationships.appScreenshots.update(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
