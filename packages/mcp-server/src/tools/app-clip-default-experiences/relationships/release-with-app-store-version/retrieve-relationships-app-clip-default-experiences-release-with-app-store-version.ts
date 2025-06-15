// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clip_default_experiences.relationships.release_with_app_store_version',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appClipDefaultExperiences/{id}/relationships/releaseWithAppStoreVersion',
  operationId: 'appClipDefaultExperiences_releaseWithAppStoreVersion_getToOneRelationship',
};

export const tool: Tool = {
  name: 'retrieve_relationships_app_clip_default_experiences_release_with_app_store_version',
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
    await client.appClipDefaultExperiences.relationships.releaseWithAppStoreVersion.retrieve(id),
  );
};

export default { metadata, tool, handler };
