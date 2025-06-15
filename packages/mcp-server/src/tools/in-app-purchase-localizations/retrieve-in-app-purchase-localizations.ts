// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'in_app_purchase_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/inAppPurchaseLocalizations/{id}',
  operationId: 'inAppPurchaseLocalizations_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_in_app_purchase_localizations',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[inAppPurchaseLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type inAppPurchaseLocalizations',
        items: {
          type: 'string',
          enum: ['name', 'locale', 'description', 'state', 'inAppPurchaseV2'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['inAppPurchaseV2'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.inAppPurchaseLocalizations.retrieve(id, body));
};

export default { metadata, tool, handler };
