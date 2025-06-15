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
  httpPath: '/v1/devices',
  operationId: 'devices_getCollection',
};

export const tool: Tool = {
  name: 'list_devices',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      'fields[devices]': {
        type: 'array',
        description: 'the fields to include for returned resources of type devices',
        items: {
          type: 'string',
          enum: ['name', 'platform', 'udid', 'deviceClass', 'status', 'model', 'addedDate'],
        },
      },
      'filter[id]': {
        type: 'array',
        description: 'filter by id(s)',
        items: {
          type: 'string',
        },
      },
      'filter[name]': {
        type: 'array',
        description: "filter by attribute 'name'",
        items: {
          type: 'string',
        },
      },
      'filter[platform]': {
        type: 'array',
        description: "filter by attribute 'platform'",
        items: {
          type: 'string',
          enum: ['IOS', 'MAC_OS', 'UNIVERSAL'],
        },
      },
      'filter[status]': {
        type: 'array',
        description: "filter by attribute 'status'",
        items: {
          type: 'string',
          enum: ['ENABLED', 'DISABLED'],
        },
      },
      'filter[udid]': {
        type: 'array',
        description: "filter by attribute 'udid'",
        items: {
          type: 'string',
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; resources will be sorted as specified',
        items: {
          type: 'string',
          enum: ['name', '-name', 'platform', '-platform', 'udid', '-udid', 'status', '-status', 'id', '-id'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.devices.list(body));
};

export default { metadata, tool, handler };
