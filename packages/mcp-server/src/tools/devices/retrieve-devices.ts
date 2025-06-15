// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'devices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/devices/{id}',
  operationId: 'devices_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_devices',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[devices]': {
        type: 'array',
        description: 'the fields to include for returned resources of type devices',
        items: {
          type: 'string',
          enum: ['name', 'platform', 'udid', 'deviceClass', 'status', 'model', 'addedDate'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.devices.retrieve(id, body));
};

export default { metadata, tool, handler };
