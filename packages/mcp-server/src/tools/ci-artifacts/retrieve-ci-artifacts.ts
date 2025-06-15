// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_artifacts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ciArtifacts/{id}',
  operationId: 'ciArtifacts_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_ci_artifacts',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[ciArtifacts]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ciArtifacts',
        items: {
          type: 'string',
          enum: ['fileType', 'fileName', 'fileSize', 'downloadUrl'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ciArtifacts.retrieve(id, body));
};

export default { metadata, tool, handler };
