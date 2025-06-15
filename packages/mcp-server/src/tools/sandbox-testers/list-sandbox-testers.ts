// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'sandbox_testers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/sandboxTesters',
  operationId: 'sandboxTestersV2_getCollection',
};

export const tool: Tool = {
  name: 'list_sandbox_testers',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      'fields[sandboxTesters]': {
        type: 'array',
        description: 'the fields to include for returned resources of type sandboxTesters',
        items: {
          type: 'string',
          enum: [
            'firstName',
            'lastName',
            'acAccountName',
            'territory',
            'applePayCompatible',
            'interruptPurchases',
            'subscriptionRenewalRate',
          ],
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
  const body = args as any;
  return asTextContentResult(await client.sandboxTesters.list(body));
};

export default { metadata, tool, handler };
