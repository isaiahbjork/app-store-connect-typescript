// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_screenshots',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appScreenshots/{id}',
  operationId: 'appScreenshots_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_screenshots',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appScreenshots]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appScreenshots',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'sourceFileChecksum',
            'imageAsset',
            'assetToken',
            'assetType',
            'uploadOperations',
            'assetDeliveryState',
            'appScreenshotSet',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appScreenshotSet'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appScreenshots.retrieve(id, body));
};

export default { metadata, tool, handler };
