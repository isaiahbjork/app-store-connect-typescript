// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_feedback_screenshot_submissions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/betaFeedbackScreenshotSubmissions/{id}',
  operationId: 'betaFeedbackScreenshotSubmissions_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_beta_feedback_screenshot_submissions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[betaFeedbackScreenshotSubmissions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaFeedbackScreenshotSubmissions',
        items: {
          type: 'string',
          enum: [
            'createdDate',
            'comment',
            'email',
            'deviceModel',
            'osVersion',
            'locale',
            'timeZone',
            'architecture',
            'connectionType',
            'pairedAppleWatch',
            'appUptimeInMilliseconds',
            'diskBytesAvailable',
            'diskBytesTotal',
            'batteryPercentage',
            'screenWidthInPoints',
            'screenHeightInPoints',
            'appPlatform',
            'devicePlatform',
            'deviceFamily',
            'buildBundleId',
            'screenshots',
            'build',
            'tester',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['build', 'tester'],
        },
      },
    },
    required: ['id'],
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.betaFeedbackScreenshotSubmissions.retrieve(id, body));
};

export default { metadata, tool, handler };
