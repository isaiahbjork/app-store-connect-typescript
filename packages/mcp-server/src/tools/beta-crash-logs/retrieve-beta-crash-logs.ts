// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_crash_logs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/betaCrashLogs/{id}',
  operationId: 'betaCrashLogs_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_beta_crash_logs',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[betaCrashLogs]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaCrashLogs',
        items: {
          type: 'string',
          enum: ['logText'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.betaCrashLogs.retrieve(id, body));
};

export default { metadata, tool, handler };
