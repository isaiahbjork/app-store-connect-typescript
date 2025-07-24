// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'AppEncryptionDeclarationWithoutIncludesResponse',\n  properties: {\n    data: {\n      $ref: '#/$defs/app_encryption_declaration_declaration'\n    },\n    links: {\n      $ref: '#/$defs/document_links'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    app_encryption_declaration_declaration: {\n      type: 'object',\n      title: 'AppEncryptionDeclaration',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'appEncryptionDeclarations'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            appDescription: {\n              type: 'string'\n            },\n            appEncryptionDeclarationState: {\n              type: 'string',\n              enum: [                'CREATED',\n                'IN_REVIEW',\n                'APPROVED',\n                'REJECTED',\n                'INVALID',\n                'EXPIRED'\n              ]\n            },\n            availableOnFrenchStore: {\n              type: 'boolean'\n            },\n            codeValue: {\n              type: 'string'\n            },\n            containsProprietaryCryptography: {\n              type: 'boolean'\n            },\n            containsThirdPartyCryptography: {\n              type: 'boolean'\n            },\n            createdDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            documentName: {\n              type: 'string'\n            },\n            documentType: {\n              type: 'string'\n            },\n            documentUrl: {\n              type: 'string'\n            },\n            exempt: {\n              type: 'boolean'\n            },\n            platform: {\n              $ref: '#/$defs/platform'\n            },\n            uploadedDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            usesEncryption: {\n              type: 'boolean'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            app: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'apps'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              }\n            },\n            appEncryptionDeclarationDocument: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'appEncryptionDeclarationDocuments'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              }\n            },\n            builds: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'builds'\n                        ]\n                      }\n                    },\n                    required: [                      'id',\n                      'type'\n                    ]\n                  }\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                },\n                meta: {\n                  $ref: '#/$defs/paging_information'\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    platform: {\n      type: 'string',\n      enum: [        'IOS',\n        'MAC_OS',\n        'TV_OS',\n        'VISION_OS'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.builds.relationships.appEncryptionDeclaration.retrieve(id, body)),
  );
};

export default { metadata, tool, handler };
