// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_info_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appInfoLocalizations/{id}',
  operationId: 'appInfoLocalizations_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_info_localizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appInfoLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appInfoLocalizations',
        items: {
          type: 'string',
          enum: [
            'locale',
            'name',
            'subtitle',
            'privacyPolicyUrl',
            'privacyChoicesUrl',
            'privacyPolicyText',
            'appInfo',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appInfo'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appInfoLocalizations.retrieve(id, body));
};

export default { metadata, tool, handler };
