// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscription_offer_code_one_time_use_codes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/subscriptionOfferCodeOneTimeUseCodes/{id}',
  operationId: 'subscriptionOfferCodeOneTimeUseCodes_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_subscription_offer_code_one_time_use_codes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/subscription_offer_code_one_time_use_code_response',\n  $defs: {\n    subscription_offer_code_one_time_use_code_response: {\n      type: 'object',\n      title: 'SubscriptionOfferCodeOneTimeUseCodeResponse',\n      properties: {\n        data: {\n          $ref: '#/$defs/subscription_offer_code_one_time_use_code'\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        },\n        included: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/subscription_offer_code'\n          }\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    subscription_offer_code_one_time_use_code: {\n      type: 'object',\n      title: 'SubscriptionOfferCodeOneTimeUseCode',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'subscriptionOfferCodeOneTimeUseCodes'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            active: {\n              type: 'boolean'\n            },\n            createdDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            expirationDate: {\n              type: 'string',\n              format: 'date'\n            },\n            numberOfCodes: {\n              type: 'integer'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            offerCode: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'subscriptionOfferCodes'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              }\n            },\n            values: {\n              type: 'object',\n              properties: {\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    relationship_links: {\n      type: 'object',\n      properties: {\n        related: {\n          type: 'string'\n        },\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    },\n    subscription_offer_code: {\n      type: 'object',\n      title: 'SubscriptionOfferCode',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'subscriptionOfferCodes'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            active: {\n              type: 'boolean'\n            },\n            customerEligibilities: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/subscription_customer_eligibility'\n              }\n            },\n            duration: {\n              $ref: '#/$defs/subscription_offer_duration'\n            },\n            name: {\n              type: 'string'\n            },\n            numberOfPeriods: {\n              type: 'integer'\n            },\n            offerEligibility: {\n              $ref: '#/$defs/subscription_offer_eligibility'\n            },\n            offerMode: {\n              $ref: '#/$defs/subscription_offer_mode'\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        },\n        relationships: {\n          type: 'object',\n          properties: {\n            customCodes: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'subscriptionOfferCodeCustomCodes'\n                        ]\n                      }\n                    },\n                    required: [                      'id',\n                      'type'\n                    ]\n                  }\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                },\n                meta: {\n                  $ref: '#/$defs/paging_information'\n                }\n              }\n            },\n            oneTimeUseCodes: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'subscriptionOfferCodeOneTimeUseCodes'\n                        ]\n                      }\n                    },\n                    required: [                      'id',\n                      'type'\n                    ]\n                  }\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                },\n                meta: {\n                  $ref: '#/$defs/paging_information'\n                }\n              }\n            },\n            prices: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string',\n                        enum: [                          'subscriptionOfferCodePrices'\n                        ]\n                      }\n                    },\n                    required: [                      'id',\n                      'type'\n                    ]\n                  }\n                },\n                links: {\n                  $ref: '#/$defs/relationship_links'\n                },\n                meta: {\n                  $ref: '#/$defs/paging_information'\n                }\n              }\n            },\n            subscription: {\n              type: 'object',\n              properties: {\n                data: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string'\n                    },\n                    type: {\n                      type: 'string',\n                      enum: [                        'subscriptions'\n                      ]\n                    }\n                  },\n                  required: [                    'id',\n                    'type'\n                  ]\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    subscription_customer_eligibility: {\n      type: 'string',\n      enum: [        'NEW',\n        'EXISTING',\n        'EXPIRED'\n      ]\n    },\n    subscription_offer_duration: {\n      type: 'string',\n      enum: [        'THREE_DAYS',\n        'ONE_WEEK',\n        'TWO_WEEKS',\n        'ONE_MONTH',\n        'TWO_MONTHS',\n        'THREE_MONTHS',\n        'SIX_MONTHS',\n        'ONE_YEAR'\n      ]\n    },\n    subscription_offer_eligibility: {\n      type: 'string',\n      enum: [        'STACK_WITH_INTRO_OFFERS',\n        'REPLACE_INTRO_OFFERS'\n      ]\n    },\n    subscription_offer_mode: {\n      type: 'string',\n      enum: [        'PAY_AS_YOU_GO',\n        'PAY_UP_FRONT',\n        'FREE_TRIAL'\n      ]\n    },\n    paging_information: {\n      type: 'object',\n      properties: {\n        paging: {\n          type: 'object',\n          properties: {\n            limit: {\n              type: 'integer'\n            },\n            nextCursor: {\n              type: 'string'\n            },\n            total: {\n              type: 'integer'\n            }\n          },\n          required: [            'limit'\n          ]\n        }\n      },\n      required: [        'paging'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[subscriptionOfferCodeOneTimeUseCodes]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes',
        items: {
          type: 'string',
          enum: ['numberOfCodes', 'createdDate', 'expirationDate', 'active', 'offerCode', 'values'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['offerCode'],
        },
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.subscriptionOfferCodeOneTimeUseCodes.retrieve(id, body)),
  );
};

export default { metadata, tool, handler };
