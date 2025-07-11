// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_screenshot_sets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appScreenshotSets/{id}',
  operationId: 'appScreenshotSets_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_screenshot_sets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
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
      'fields[appScreenshotSets]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appScreenshotSets',
        items: {
          type: 'string',
          enum: [
            'screenshotDisplayType',
            'appStoreVersionLocalization',
            'appCustomProductPageLocalization',
            'appStoreVersionExperimentTreatmentLocalization',
            'appScreenshots',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: [
            'appStoreVersionLocalization',
            'appCustomProductPageLocalization',
            'appStoreVersionExperimentTreatmentLocalization',
            'appScreenshots',
          ],
        },
      },
      'limit[appScreenshots]': {
        type: 'integer',
        description: 'maximum number of related appScreenshots returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appScreenshotSets.retrieve(id, body));
};

export default { metadata, tool, handler };
