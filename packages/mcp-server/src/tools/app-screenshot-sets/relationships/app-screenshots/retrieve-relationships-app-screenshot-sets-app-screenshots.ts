// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_screenshot_sets.relationships.app_screenshots',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appScreenshotSets/{id}/relationships/appScreenshots',
  operationId: 'appScreenshotSets_appScreenshots_getToManyRelationship',
};

export const tool: Tool = {
  name: 'retrieve_relationships_app_screenshot_sets_app_screenshots',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
  return asTextContentResult(await client.appScreenshotSets.relationships.appScreenshots.retrieve(id, body));
};

export default { metadata, tool, handler };
