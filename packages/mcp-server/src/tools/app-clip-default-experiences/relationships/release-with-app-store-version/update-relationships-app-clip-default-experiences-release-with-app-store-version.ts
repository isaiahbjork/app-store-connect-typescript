// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clip_default_experiences.relationships.release_with_app_store_version',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/appClipDefaultExperiences/{id}/relationships/releaseWithAppStoreVersion',
  operationId: 'appClipDefaultExperiences_releaseWithAppStoreVersion_updateToOneRelationship',
};

export const tool: Tool = {
  name: 'update_relationships_app_clip_default_experiences_release_with_app_store_version',
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
            enum: ['appStoreVersions'],
          },
        },
        required: ['id', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.appClipDefaultExperiences.relationships.releaseWithAppStoreVersion.update(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
