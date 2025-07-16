// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'nominations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/nominations',
  operationId: 'nominations_getCollection',
};

export const tool: Tool = {
  name: 'list_nominations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      'filter[state]': {
        type: 'array',
        description: "filter by attribute 'state'",
        items: {
          type: 'string',
          enum: ['DRAFT', 'SUBMITTED', 'ARCHIVED'],
        },
      },
      'fields[nominations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type nominations',
        items: {
          type: 'string',
          enum: [
            'name',
            'type',
            'description',
            'createdDate',
            'lastModifiedDate',
            'submittedDate',
            'state',
            'publishStartDate',
            'publishEndDate',
            'deviceFamilies',
            'locales',
            'supplementalMaterialsUris',
            'hasInAppEvents',
            'launchInSelectMarketsFirst',
            'notes',
            'preOrderEnabled',
            'relatedApps',
            'createdByActor',
            'lastModifiedByActor',
            'submittedByActor',
            'inAppEvents',
            'supportedTerritories',
          ],
        },
      },
      'filter[relatedApps]': {
        type: 'array',
        description: "filter by id(s) of related 'relatedApps'",
        items: {
          type: 'string',
        },
      },
      'filter[type]': {
        type: 'array',
        description: "filter by attribute 'type'",
        items: {
          type: 'string',
          enum: ['APP_LAUNCH', 'APP_ENHANCEMENTS', 'NEW_CONTENT'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: [
            'relatedApps',
            'createdByActor',
            'lastModifiedByActor',
            'submittedByActor',
            'inAppEvents',
            'supportedTerritories',
          ],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[inAppEvents]': {
        type: 'integer',
        description: 'maximum number of related inAppEvents returned (when they are included)',
      },
      'limit[relatedApps]': {
        type: 'integer',
        description: 'maximum number of related relatedApps returned (when they are included)',
      },
      'limit[supportedTerritories]': {
        type: 'integer',
        description: 'maximum number of related supportedTerritories returned (when they are included)',
      },
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; resources will be sorted as specified',
        items: {
          type: 'string',
          enum: [
            'lastModifiedDate',
            '-lastModifiedDate',
            'publishStartDate',
            '-publishStartDate',
            'publishEndDate',
            '-publishEndDate',
            'name',
            '-name',
            'type',
            '-type',
          ],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.nominations.list(body));
};

export default { metadata, tool, handler };
