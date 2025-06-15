// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_encryption_declarations.relationships',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appEncryptionDeclarations/{id}/relationships/builds',
  operationId: 'appEncryptionDeclarations_builds_createToManyRelationship',
};

export const tool: Tool = {
  name: 'create_build_app_encryption_declarations_relationships',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            type: {
              type: 'string',
              enum: ['builds'],
            },
          },
          required: ['id', 'type'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.appEncryptionDeclarations.relationships.createBuild(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
