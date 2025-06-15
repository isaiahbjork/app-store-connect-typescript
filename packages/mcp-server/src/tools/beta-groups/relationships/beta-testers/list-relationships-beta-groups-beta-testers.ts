// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_groups.relationships.beta_testers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/betaGroups/{id}/betaTesters',
  operationId: 'betaGroups_betaTesters_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_relationships_beta_groups_beta_testers',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[betaTesters]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaTesters',
        items: {
          type: 'string',
          enum: ['firstName', 'lastName', 'email', 'inviteType', 'state', 'apps', 'betaGroups', 'builds'],
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
  return asTextContentResult(await client.betaGroups.relationships.betaTesters.list(id, body));
};

export default { metadata, tool, handler };
