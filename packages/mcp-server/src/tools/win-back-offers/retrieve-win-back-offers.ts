// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'win_back_offers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/winBackOffers/{id}',
  operationId: 'winBackOffers_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_win_back_offers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/win_back_offer_response',\n  $defs: {\n    win_back_offer_response: {\n      type: 'object',\n      title: 'WinBackOfferResponse',\n      properties: {\n        data: {\n          $ref: '#/$defs/win_back_offer'\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        },\n        included: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/win_back_offer_price'\n          }\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    win_back_offer: {\n      type: 'object',\n      title: 'WinBackOffer',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'winBackOffers'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            customerEligibilityPaidSubscriptionDurationInMonths: {\n              type: 'integer'\n            },\n            customerEligibilityTimeSinceLastSubscribedInMonths: {\n              $ref: '#/$defs/integer_range'\n            },\n            customerEligibilityWaitBetweenOffersInMonths: {\n              type: 'integer'\n            },\n            duration: {\n              $ref: '#/$defs/subscription_offer_duration'\n            },\n            endDate: {\n              type: 'string',\n              format: 'date'\n            },\n            offerId: {\n              type: 'string'\n            },\n            offerMode: {\n              $ref: '#/$defs/subscription_offer_mode'\n            },\n            periodCount: {\n              type: 'integer'\n            },\n            priority: {\n              type: 'string',\n              enum: [                'HIGH',\n                'NORMAL'\n              ]\n            },\n            promotionIntent: {\n              type: 'string',\n              enum: [                'NOT_PROMOTED',\n                'USE_AUTO_GENERATED_ASSETS'\n              ]\n            },\n            referenceName: {\n              type: 'string'\n            },\n            startDate: {\n              type: 'string',\n              format: 'date'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            prices: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'winBackOfferPrices'\n                        ]\n                      }\n                    },\n                    required: [                      'id',\n                      'type'\n                    ]\n                  }\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                },\n                meta: {\n                  $ref: '#/$defs/paging_information'\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    integer_range: {\n      type: 'object',\n      properties: {\n        maximum: {\n          type: 'integer'\n        },\n        minimum: {\n          type: 'integer'\n        }\n      }\n    },\n    subscription_offer_duration: {\n      type: 'string',\n      enum: [        'THREE_DAYS',\n        'ONE_WEEK',\n        'TWO_WEEKS',\n        'ONE_MONTH',\n        'TWO_MONTHS',\n        'THREE_MONTHS',\n        'SIX_MONTHS',\n        'ONE_YEAR'\n      ]\n    },\n    subscription_offer_mode: {\n      type: 'string',\n      enum: [        'PAY_AS_YOU_GO',\n        'PAY_UP_FRONT',\n        'FREE_TRIAL'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    win_back_offer_price: {\n      type: 'object',\n      title: 'WinBackOfferPrice',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'winBackOfferPrices'\n          ]\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            subscriptionPricePoint: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'subscriptionPricePoints'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              }\n            },\n            territory: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'territories'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[winBackOfferPrices]': {
        type: 'array',
        description: 'the fields to include for returned resources of type winBackOfferPrices',
        items: {
          type: 'string',
          enum: ['territory', 'subscriptionPricePoint'],
        },
      },
      'fields[winBackOffers]': {
        type: 'array',
        description: 'the fields to include for returned resources of type winBackOffers',
        items: {
          type: 'string',
          enum: [
            'referenceName',
            'offerId',
            'duration',
            'offerMode',
            'periodCount',
            'customerEligibilityPaidSubscriptionDurationInMonths',
            'customerEligibilityTimeSinceLastSubscribedInMonths',
            'customerEligibilityWaitBetweenOffersInMonths',
            'startDate',
            'endDate',
            'priority',
            'promotionIntent',
            'prices',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['prices'],
        },
      },
      'limit[prices]': {
        type: 'integer',
        description: 'maximum number of related prices returned (when they are included)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.winBackOffers.retrieve(id, body)));
};

export default { metadata, tool, handler };
