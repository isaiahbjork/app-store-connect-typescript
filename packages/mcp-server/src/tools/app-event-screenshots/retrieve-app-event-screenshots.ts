// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_event_screenshots',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appEventScreenshots/{id}',
  operationId: 'appEventScreenshots_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_event_screenshots',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appEventScreenshots]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appEventScreenshots',
        items: {
          type: 'string',
          enum: [
            'fileSize',
            'fileName',
            'imageAsset',
            'assetToken',
            'uploadOperations',
            'assetDeliveryState',
            'appEventAssetType',
            'appEventLocalization',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appEventLocalization'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appEventScreenshots.retrieve(id, body));
};

export default { metadata, tool, handler };
