// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_feedback_crash_submissions.relationships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/betaFeedbackCrashSubmissions/{id}/relationships/crashLog',
  operationId: 'betaFeedbackCrashSubmissions_crashLog_getToOneRelationship',
};

export const tool: Tool = {
  name: 'get_crash_log_beta_feedback_crash_submissions_relationships',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.betaFeedbackCrashSubmissions.relationships.getCrashLog(id));
};

export default { metadata, tool, handler };
