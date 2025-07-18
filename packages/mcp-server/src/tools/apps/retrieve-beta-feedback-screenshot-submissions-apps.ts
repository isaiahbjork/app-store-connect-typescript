// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/betaFeedbackScreenshotSubmissions',
  operationId: 'apps_betaFeedbackScreenshotSubmissions_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_beta_feedback_screenshot_submissions_apps',
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
      'fields[betaTesters]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaTesters',
        items: {
          type: 'string',
          enum: ['firstName', 'lastName', 'email', 'inviteType', 'state', 'apps', 'betaGroups', 'builds'],
        },
      },
      'fields[builds]': {
        type: 'array',
        description: 'the fields to include for returned resources of type builds',
        items: {
          type: 'string',
          enum: [
            'version',
            'uploadedDate',
            'expirationDate',
            'expired',
            'minOsVersion',
            'lsMinimumSystemVersion',
            'computedMinMacOsVersion',
            'computedMinVisionOsVersion',
            'iconAssetToken',
            'processingState',
            'buildAudienceType',
            'usesNonExemptEncryption',
            'preReleaseVersion',
            'individualTesters',
            'betaGroups',
            'betaBuildLocalizations',
            'appEncryptionDeclaration',
            'betaAppReviewSubmission',
            'app',
            'buildBetaDetail',
            'appStoreVersion',
            'icons',
            'buildBundles',
            'perfPowerMetrics',
            'diagnosticSignatures',
          ],
        },
      },
      'filter[appPlatform]': {
        type: 'array',
        description: "filter by attribute 'appPlatform'",
        items: {
          type: 'string',
          enum: ['IOS', 'MAC_OS', 'TV_OS', 'VISION_OS'],
        },
      },
      'filter[build': {
        type: 'object',
        properties: {
          'preReleaseVersion]': {
            type: 'array',
            description: "filter by id(s) of related 'build.preReleaseVersion'",
            items: {
              type: 'string',
            },
          },
        },
      },
      'filter[build]': {
        type: 'array',
        description: "filter by id(s) of related 'build'",
        items: {
          type: 'string',
        },
      },
      'filter[deviceModel]': {
        type: 'array',
        description: "filter by attribute 'deviceModel'",
        items: {
          type: 'string',
        },
      },
      'filter[devicePlatform]': {
        type: 'array',
        description: "filter by attribute 'devicePlatform'",
        items: {
          type: 'string',
          enum: ['IOS', 'MAC_OS', 'TV_OS', 'VISION_OS'],
        },
      },
      'filter[osVersion]': {
        type: 'array',
        description: "filter by attribute 'osVersion'",
        items: {
          type: 'string',
        },
      },
      'filter[tester]': {
        type: 'array',
        description: "filter by id(s) of related 'tester'",
        items: {
          type: 'string',
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
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; resources will be sorted as specified',
        items: {
          type: 'string',
          enum: ['createdDate', '-createdDate'],
        },
      },
    },
    required: ['id'],
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.retrieveBetaFeedbackScreenshotSubmissions(id, body));
};

export default { metadata, tool, handler };
