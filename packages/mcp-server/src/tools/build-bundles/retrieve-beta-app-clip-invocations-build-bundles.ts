// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'build_bundles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/buildBundles/{id}/betaAppClipInvocations',
  operationId: 'buildBundles_betaAppClipInvocations_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_beta_app_clip_invocations_build_bundles',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[betaAppClipInvocationLocalizations]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type betaAppClipInvocationLocalizations',
        items: {
          type: 'string',
          enum: ['title', 'locale'],
        },
      },
      'fields[betaAppClipInvocations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaAppClipInvocations',
        items: {
          type: 'string',
          enum: ['url', 'betaAppClipInvocationLocalizations'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['betaAppClipInvocationLocalizations'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[betaAppClipInvocationLocalizations]': {
        type: 'integer',
        description:
          'maximum number of related betaAppClipInvocationLocalizations returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.buildBundles.retrieveBetaAppClipInvocations(id, body));
};

export default { metadata, tool, handler };
