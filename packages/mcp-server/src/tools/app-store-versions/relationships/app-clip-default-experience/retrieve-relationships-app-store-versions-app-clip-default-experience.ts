// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_versions.relationships.app_clip_default_experience',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appStoreVersions/{id}/relationships/appClipDefaultExperience',
  operationId: 'appStoreVersions_appClipDefaultExperience_getToOneRelationship',
};

export const tool: Tool = {
  name: 'retrieve_relationships_app_store_versions_app_clip_default_experience',
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
  return asTextContentResult(
    await client.appStoreVersions.relationships.appClipDefaultExperience.retrieve(id),
  );
};

export default { metadata, tool, handler };
