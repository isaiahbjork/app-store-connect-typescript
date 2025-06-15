// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_issues',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ciIssues/{id}',
  operationId: 'ciIssues_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_ci_issues',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[ciIssues]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ciIssues',
        items: {
          type: 'string',
          enum: ['issueType', 'message', 'fileSource', 'category'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ciIssues.retrieve(id, body));
};

export default { metadata, tool, handler };
