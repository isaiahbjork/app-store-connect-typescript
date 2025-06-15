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
  httpPath: '/v1/buildBundles/{id}/appClipDomainCacheStatus',
  operationId: 'buildBundles_appClipDomainCacheStatus_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_app_clip_domain_cache_status_build_bundles',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appClipDomainStatuses]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appClipDomainStatuses',
        items: {
          type: 'string',
          enum: ['domains', 'lastUpdatedDate'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.buildBundles.retrieveAppClipDomainCacheStatus(id, body));
};

export default { metadata, tool, handler };
