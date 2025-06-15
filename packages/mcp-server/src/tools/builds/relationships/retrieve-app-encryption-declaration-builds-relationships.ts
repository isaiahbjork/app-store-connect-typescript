// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'builds.relationships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/builds/{id}/relationships/appEncryptionDeclaration',
  operationId: 'builds_appEncryptionDeclaration_getToOneRelationship',
};

export const tool: Tool = {
  name: 'retrieve_app_encryption_declaration_builds_relationships',
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
  return asTextContentResult(await client.builds.relationships.retrieveAppEncryptionDeclaration(id));
};

export default { metadata, tool, handler };
