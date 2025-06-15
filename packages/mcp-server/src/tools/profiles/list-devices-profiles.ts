// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'profiles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/profiles/{id}/devices',
  operationId: 'profiles_devices_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_devices_profiles',
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
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.profiles.listDevices(id, body));
};

export default { metadata, tool, handler };
