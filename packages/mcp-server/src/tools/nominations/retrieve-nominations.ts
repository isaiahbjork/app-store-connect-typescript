// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'nominations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/nominations/{id}',
  operationId: 'nominations_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_nominations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.nominations.retrieve(id, body));
};

export default { metadata, tool, handler };
