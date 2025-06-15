// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'devices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/devices',
  operationId: 'devices_createInstance',
};

export const tool: Tool = {
  name: 'create_devices',
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
              name: {
                type: 'string',
              },
              platform: {
                $ref: '#/$defs/bundle_id_platform',
              },
              udid: {
                type: 'string',
              },
            },
            required: ['name', 'platform', 'udid'],
          },
          type: {
            type: 'string',
            enum: ['devices'],
          },
        },
        required: ['attributes', 'type'],
      },
    },
    $defs: {
      bundle_id_platform: {
        type: 'string',
        enum: ['IOS', 'MAC_OS', 'UNIVERSAL'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.devices.create(body));
};

export default { metadata, tool, handler };
