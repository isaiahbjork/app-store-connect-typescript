// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/appEvents',
  operationId: 'apps_appEvents_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_app_events_apps',
  description: '',
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
      'filter[eventState]': {
        type: 'array',
        description: "filter by attribute 'eventState'",
        items: {
          type: 'string',
          enum: [
            'DRAFT',
            'READY_FOR_REVIEW',
            'WAITING_FOR_REVIEW',
            'IN_REVIEW',
            'REJECTED',
            'ACCEPTED',
            'APPROVED',
            'PUBLISHED',
            'PAST',
            'ARCHIVED',
          ],
        },
      },
      'filter[id]': {
        type: 'array',
        description: 'filter by id(s)',
        items: {
          type: 'string',
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
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[localizations]': {
        type: 'integer',
        description: 'maximum number of related localizations returned (when they are included)',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.retrieveAppEvents(id, body));
};

export default { metadata, tool, handler };
