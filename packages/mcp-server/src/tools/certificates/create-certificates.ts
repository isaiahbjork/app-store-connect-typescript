// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: '',
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
                required: [],
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
                required: [],
              },
            },
            required: [],
          },
        },
        required: ['attributes', 'type'],
      },
    },
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
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.certificates.create(body));
};

export default { metadata, tool, handler };
