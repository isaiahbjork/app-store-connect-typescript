// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'builds.relationships.individual_testers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/builds/{id}/relationships/individualTesters',
  operationId: 'builds_individualTesters_getToManyRelationship',
};

export const tool: Tool = {
  name: 'retrieve_relationships_builds_individual_testers',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
  return asTextContentResult(await client.builds.relationships.individualTesters.retrieve(id, body));
};

export default { metadata, tool, handler };
