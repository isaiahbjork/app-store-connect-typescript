// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_build_actions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ciBuildActions/{id}/issues',
  operationId: 'ciBuildActions_issues_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_issues_ci_build_actions',
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
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ciBuildActions.listIssues(id, body));
};

export default { metadata, tool, handler };
