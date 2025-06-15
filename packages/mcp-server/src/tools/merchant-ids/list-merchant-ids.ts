// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'merchant_ids',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/merchantIds',
  operationId: 'merchantIds_getCollection',
};

export const tool: Tool = {
  name: 'list_merchant_ids',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      'fields[certificates]': {
        type: 'array',
        description: 'the fields to include for returned resources of type certificates',
        items: {
          type: 'string',
          enum: [
            'name',
            'certificateType',
            'displayName',
            'serialNumber',
            'platform',
            'expirationDate',
            'certificateContent',
            'activated',
            'passTypeId',
          ],
        },
      },
      'fields[merchantIds]': {
        type: 'array',
        description: 'the fields to include for returned resources of type merchantIds',
        items: {
          type: 'string',
          enum: ['name', 'identifier', 'certificates'],
        },
      },
      'filter[identifier]': {
        type: 'array',
        description: "filter by attribute 'identifier'",
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['certificates'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[certificates]': {
        type: 'integer',
        description: 'maximum number of related certificates returned (when they are included)',
      },
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; resources will be sorted as specified',
        items: {
          type: 'string',
          enum: ['name', '-name', 'identifier', '-identifier'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.merchantIDs.list(body));
};

export default { metadata, tool, handler };
