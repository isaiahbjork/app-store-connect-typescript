// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appEvents/{id}',
  operationId: 'appEvents_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appEventLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appEventLocalizations',
        items: {
          type: 'string',
          enum: [
            'locale',
            'name',
            'shortDescription',
            'longDescription',
            'appEvent',
            'appEventScreenshots',
            'appEventVideoClips',
          ],
        },
      },
      'fields[appEvents]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appEvents',
        items: {
          type: 'string',
          enum: [
            'referenceName',
            'badge',
            'eventState',
            'deepLink',
            'purchaseRequirement',
            'primaryLocale',
            'priority',
            'purpose',
            'territorySchedules',
            'archivedTerritorySchedules',
            'localizations',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['localizations'],
        },
      },
      'limit[localizations]': {
        type: 'integer',
        description: 'maximum number of related localizations returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appEvents.retrieve(id, body));
};

export default { metadata, tool, handler };
