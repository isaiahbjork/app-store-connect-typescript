// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_group_localizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptionGroupLocalizations/{id}',
  operationId: 'subscriptionGroupLocalizations_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_subscription_group_localizations',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[subscriptionGroupLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionGroupLocalizations',
        items: {
          type: 'string',
          enum: ['name', 'customAppName', 'locale', 'state', 'subscriptionGroup'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['subscriptionGroup'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptionGroupLocalizations.retrieve(id, body));
};

export default { metadata, tool, handler };
