// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_offer_code_one_time_use_codes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptionOfferCodeOneTimeUseCodes/{id}/values',
  operationId: 'subscriptionOfferCodeOneTimeUseCodes_values_getToOneRelated',
};

export const tool: Tool = {
  name: 'list_values_subscription_offer_code_one_time_use_codes',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptionOfferCodeOneTimeUseCodes.listValues(id));
};

export default { metadata, tool, handler };
