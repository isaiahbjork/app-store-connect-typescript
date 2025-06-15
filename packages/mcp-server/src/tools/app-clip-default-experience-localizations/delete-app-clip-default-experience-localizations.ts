// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clip_default_experience_localizations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/appClipDefaultExperienceLocalizations/{id}',
  operationId: 'appClipDefaultExperienceLocalizations_deleteInstance',
};

export const tool: Tool = {
  name: 'delete_app_clip_default_experience_localizations',
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
  await client.appClipDefaultExperienceLocalizations.delete(id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
