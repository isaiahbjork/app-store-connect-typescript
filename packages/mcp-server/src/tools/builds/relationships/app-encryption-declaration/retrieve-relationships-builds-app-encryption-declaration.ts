// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'builds.relationships.app_encryption_declaration',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/builds/{id}/appEncryptionDeclaration',
  operationId: 'builds_appEncryptionDeclaration_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_relationships_builds_app_encryption_declaration',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appEncryptionDeclarations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appEncryptionDeclarations',
        items: {
          type: 'string',
          enum: [
            'appDescription',
            'createdDate',
            'usesEncryption',
            'exempt',
            'containsProprietaryCryptography',
            'containsThirdPartyCryptography',
            'availableOnFrenchStore',
            'platform',
            'uploadedDate',
            'documentUrl',
            'documentName',
            'documentType',
            'appEncryptionDeclarationState',
            'codeValue',
            'app',
            'builds',
            'appEncryptionDeclarationDocument',
          ],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.builds.relationships.appEncryptionDeclaration.retrieve(id, body));
};

export default { metadata, tool, handler };
