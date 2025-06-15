// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptionGroups/{id}/subscriptionGroupLocalizations',
  operationId: 'subscriptionGroups_subscriptionGroupLocalizations_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_localizations_subscription_groups',
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
      'fields[subscriptionGroups]': {
        type: 'array',
        description: 'the fields to include for returned resources of type subscriptionGroups',
        items: {
          type: 'string',
          enum: ['referenceName', 'subscriptions', 'subscriptionGroupLocalizations'],
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
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptionGroups.listLocalizations(id, body));
};

export default { metadata, tool, handler };
