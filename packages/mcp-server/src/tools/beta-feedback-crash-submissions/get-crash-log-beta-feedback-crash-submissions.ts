// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_feedback_crash_submissions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/betaFeedbackCrashSubmissions/{id}/crashLog',
  operationId: 'betaFeedbackCrashSubmissions_crashLog_getToOneRelated',
};

export const tool: Tool = {
  name: 'get_crash_log_beta_feedback_crash_submissions',
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
  return asTextContentResult(await client.betaFeedbackCrashSubmissions.getCrashLog(id, body));
};

export default { metadata, tool, handler };
