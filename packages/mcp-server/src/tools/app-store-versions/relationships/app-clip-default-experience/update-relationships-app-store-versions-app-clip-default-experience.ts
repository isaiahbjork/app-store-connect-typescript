// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_versions.relationships.app_clip_default_experience',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/appStoreVersions/{id}/relationships/appClipDefaultExperience',
  operationId: 'appStoreVersions_appClipDefaultExperience_updateToOneRelationship',
};

export const tool: Tool = {
  name: 'update_relationships_app_store_versions_app_clip_default_experience',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['appClipDefaultExperiences'],
          },
        },
        required: ['id', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.appStoreVersions.relationships.appClipDefaultExperience.update(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
