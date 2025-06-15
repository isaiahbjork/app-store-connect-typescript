// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'win_back_offers',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/winBackOffers/{id}',
  operationId: 'winBackOffers_updateInstance',
};

export const tool: Tool = {
  name: 'update_win_back_offers',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['winBackOffers'],
          },
          attributes: {
            type: 'object',
            properties: {
              customerEligibilityPaidSubscriptionDurationInMonths: {
                type: 'integer',
              },
              customerEligibilityTimeSinceLastSubscribedInMonths: {
                $ref: '#/$defs/integer_range',
              },
              customerEligibilityWaitBetweenOffersInMonths: {
                type: 'integer',
              },
              endDate: {
                type: 'string',
                format: 'date',
              },
              priority: {
                type: 'string',
                enum: ['HIGH', 'NORMAL'],
              },
              promotionIntent: {
                type: 'string',
                enum: ['NOT_PROMOTED', 'USE_AUTO_GENERATED_ASSETS'],
              },
              startDate: {
                type: 'string',
                format: 'date',
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
      },
    },
    $defs: {
      integer_range: {
        type: 'object',
        properties: {
          maximum: {
            type: 'integer',
          },
          minimum: {
            type: 'integer',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.winBackOffers.update(id, body));
};

export default { metadata, tool, handler };
