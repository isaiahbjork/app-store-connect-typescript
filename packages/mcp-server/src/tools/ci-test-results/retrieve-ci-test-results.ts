// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_test_results',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ciTestResults/{id}',
  operationId: 'ciTestResults_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_ci_test_results',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[ciTestResults]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ciTestResults',
        items: {
          type: 'string',
          enum: ['className', 'name', 'status', 'fileSource', 'message', 'destinationTestResults'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ciTestResults.retrieve(id, body));
};

export default { metadata, tool, handler };
