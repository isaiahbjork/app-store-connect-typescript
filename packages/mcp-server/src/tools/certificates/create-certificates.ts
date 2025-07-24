// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/certificates',
  operationId: 'certificates_createInstance',
};

export const tool: Tool = {
  name: 'create_certificates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/certificate_response',\n  $defs: {\n    certificate_response: {\n      type: 'object',\n      title: 'CertificateResponse',\n      properties: {\n        data: {\n          $ref: '#/$defs/certificate'\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        },\n        included: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/pass_type_id'\n          }\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    certificate: {\n      type: 'object',\n      title: 'Certificate',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'certificates'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            activated: {\n              type: 'boolean'\n            },\n            certificateContent: {\n              type: 'string'\n            },\n            certificateType: {\n              $ref: '#/$defs/certificate_type'\n            },\n            displayName: {\n              type: 'string'\n            },\n            expirationDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            name: {\n              type: 'string'\n            },\n            platform: {\n              $ref: '#/$defs/bundle_id_platform'\n            },\n            serialNumber: {\n              type: 'string'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            passTypeId: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'passTypeIds'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    certificate_type: {\n      type: 'string',\n      enum: [        'APPLE_PAY',\n        'APPLE_PAY_MERCHANT_IDENTITY',\n        'APPLE_PAY_PSP_IDENTITY',\n        'APPLE_PAY_RSA',\n        'DEVELOPER_ID_KEXT',\n        'DEVELOPER_ID_KEXT_G2',\n        'DEVELOPER_ID_APPLICATION',\n        'DEVELOPER_ID_APPLICATION_G2',\n        'DEVELOPMENT',\n        'DISTRIBUTION',\n        'IDENTITY_ACCESS',\n        'IOS_DEVELOPMENT',\n        'IOS_DISTRIBUTION',\n        'MAC_APP_DISTRIBUTION',\n        'MAC_INSTALLER_DISTRIBUTION',\n        'MAC_APP_DEVELOPMENT',\n        'PASS_TYPE_ID',\n        'PASS_TYPE_ID_WITH_NFC'\n      ]\n    },\n    bundle_id_platform: {\n      type: 'string',\n      enum: [        'IOS',\n        'MAC_OS',\n        'UNIVERSAL'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    pass_type_id: {\n      type: 'object',\n      title: 'PassTypeId',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'passTypeIds'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            identifier: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            certificates: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'certificates'\n                        ]\n                      }\n                    },\n                    required: [                      'id',\n                      'type'\n                    ]\n                  }\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                },\n                meta: {\n                  $ref: '#/$defs/paging_information'\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              certificateType: {
                $ref: '#/$defs/certificate_type',
              },
              csrContent: {
                type: 'string',
              },
            },
            required: ['certificateType', 'csrContent'],
          },
          type: {
            type: 'string',
            enum: ['certificates'],
          },
          relationships: {
            type: 'object',
            properties: {
              merchantId: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['merchantIds'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
              },
              passTypeId: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['passTypeIds'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
              },
            },
          },
        },
        required: ['attributes', 'type'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['data'],
    $defs: {
      certificate_type: {
        type: 'string',
        enum: [
          'APPLE_PAY',
          'APPLE_PAY_MERCHANT_IDENTITY',
          'APPLE_PAY_PSP_IDENTITY',
          'APPLE_PAY_RSA',
          'DEVELOPER_ID_KEXT',
          'DEVELOPER_ID_KEXT_G2',
          'DEVELOPER_ID_APPLICATION',
          'DEVELOPER_ID_APPLICATION_G2',
          'DEVELOPMENT',
          'DISTRIBUTION',
          'IDENTITY_ACCESS',
          'IOS_DEVELOPMENT',
          'IOS_DISTRIBUTION',
          'MAC_APP_DISTRIBUTION',
          'MAC_INSTALLER_DISTRIBUTION',
          'MAC_APP_DEVELOPMENT',
          'PASS_TYPE_ID',
          'PASS_TYPE_ID_WITH_NFC',
        ],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.certificates.create(body)));
};

export default { metadata, tool, handler };
