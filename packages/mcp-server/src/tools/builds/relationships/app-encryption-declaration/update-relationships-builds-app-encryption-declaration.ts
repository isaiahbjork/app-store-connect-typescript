// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'builds.relationships.app_encryption_declaration',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/builds/{id}/relationships/appEncryptionDeclaration',
  operationId: 'builds_appEncryptionDeclaration_updateToOneRelationship',
};

export const tool: Tool = {
  name: 'update_relationships_builds_app_encryption_declaration',
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
            enum: ['appEncryptionDeclarations'],
          },
        },
        required: ['id', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.builds.relationships.appEncryptionDeclaration.update(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
