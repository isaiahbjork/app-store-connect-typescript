// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'merchant_ids',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/merchantIds/{id}',
  operationId: 'merchantIds_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_merchant_ids',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['certificates'],
        },
      },
      'limit[certificates]': {
        type: 'integer',
        description: 'maximum number of related certificates returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.merchantIDs.retrieve(id, body));
};

export default { metadata, tool, handler };
