// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/subscriptions/{id}',
  operationId: 'subscriptions_updateInstance',
};

export const tool: Tool = {
  name: 'update_subscriptions',
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
            enum: ['subscriptions'],
          },
          attributes: {
            type: 'object',
            properties: {
              familySharable: {
                type: 'boolean',
              },
              groupLevel: {
                type: 'integer',
              },
              name: {
                type: 'string',
              },
              reviewNote: {
                type: 'string',
              },
              subscriptionPeriod: {
                type: 'string',
                enum: ['ONE_WEEK', 'ONE_MONTH', 'TWO_MONTHS', 'THREE_MONTHS', 'SIX_MONTHS', 'ONE_YEAR'],
              },
            },
            required: [],
          },
          relationships: {
            type: 'object',
            properties: {
              introductoryOffers: {
                type: 'object',
                properties: {
                  data: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['subscriptionIntroductoryOffers'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: [],
              },
              prices: {
                type: 'object',
                properties: {
                  data: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['subscriptionPrices'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: [],
              },
              promotionalOffers: {
                type: 'object',
                properties: {
                  data: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['subscriptionPromotionalOffers'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: [],
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
      },
      included: {
        type: 'array',
        items: {
          anyOf: [
            {
              type: 'object',
              properties: {
                attributes: {
                  type: 'object',
                  properties: {
                    duration: {
                      $ref: '#/$defs/subscription_offer_duration',
                    },
                    name: {
                      type: 'string',
                    },
                    numberOfPeriods: {
                      type: 'integer',
                    },
                    offerCode: {
                      type: 'string',
                    },
                    offerMode: {
                      $ref: '#/$defs/subscription_offer_mode',
                    },
                  },
                  required: ['duration', 'name', 'numberOfPeriods', 'offerCode', 'offerMode'],
                },
                type: {
                  type: 'string',
                  enum: ['subscriptionPromotionalOffers'],
                },
                id: {
                  type: 'string',
                },
                relationships: {
                  type: 'object',
                  properties: {
                    prices: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              id: {
                                type: 'string',
                              },
                              type: {
                                type: 'string',
                                enum: ['subscriptionPromotionalOfferPrices'],
                              },
                            },
                            required: ['id', 'type'],
                          },
                        },
                      },
                      required: [],
                    },
                    subscription: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          properties: {
                            id: {
                              type: 'string',
                            },
                            type: {
                              type: 'string',
                              enum: ['subscriptions'],
                            },
                          },
                          required: ['id', 'type'],
                        },
                      },
                      required: [],
                    },
                  },
                  required: [],
                },
              },
              required: ['attributes', 'type'],
            },
            {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  enum: ['subscriptionPrices'],
                },
                id: {
                  type: 'string',
                },
                attributes: {
                  type: 'object',
                  properties: {
                    preserveCurrentPrice: {
                      type: 'boolean',
                    },
                    startDate: {
                      type: 'string',
                      format: 'date',
                    },
                  },
                  required: [],
                },
                relationships: {
                  type: 'object',
                  properties: {
                    subscription: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          properties: {
                            id: {
                              type: 'string',
                            },
                            type: {
                              type: 'string',
                              enum: ['subscriptions'],
                            },
                          },
                          required: ['id', 'type'],
                        },
                      },
                      required: [],
                    },
                    subscriptionPricePoint: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          properties: {
                            id: {
                              type: 'string',
                            },
                            type: {
                              type: 'string',
                              enum: ['subscriptionPricePoints'],
                            },
                          },
                          required: ['id', 'type'],
                        },
                      },
                      required: [],
                    },
                    territory: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          properties: {
                            id: {
                              type: 'string',
                            },
                            type: {
                              type: 'string',
                              enum: ['territories'],
                            },
                          },
                          required: ['id', 'type'],
                        },
                      },
                      required: [],
                    },
                  },
                  required: [],
                },
              },
              required: ['type'],
            },
            {
              type: 'object',
              properties: {
                attributes: {
                  type: 'object',
                  properties: {
                    duration: {
                      $ref: '#/$defs/subscription_offer_duration',
                    },
                    numberOfPeriods: {
                      type: 'integer',
                    },
                    offerMode: {
                      $ref: '#/$defs/subscription_offer_mode',
                    },
                    endDate: {
                      type: 'string',
                      format: 'date',
                    },
                    startDate: {
                      type: 'string',
                      format: 'date',
                    },
                  },
                  required: ['duration', 'numberOfPeriods', 'offerMode'],
                },
                type: {
                  type: 'string',
                  enum: ['subscriptionIntroductoryOffers'],
                },
                id: {
                  type: 'string',
                },
                relationships: {
                  type: 'object',
                  properties: {
                    subscription: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          properties: {
                            id: {
                              type: 'string',
                            },
                            type: {
                              type: 'string',
                              enum: ['subscriptions'],
                            },
                          },
                          required: ['id', 'type'],
                        },
                      },
                      required: [],
                    },
                    subscriptionPricePoint: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          properties: {
                            id: {
                              type: 'string',
                            },
                            type: {
                              type: 'string',
                              enum: ['subscriptionPricePoints'],
                            },
                          },
                          required: ['id', 'type'],
                        },
                      },
                      required: [],
                    },
                    territory: {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          properties: {
                            id: {
                              type: 'string',
                            },
                            type: {
                              type: 'string',
                              enum: ['territories'],
                            },
                          },
                          required: ['id', 'type'],
                        },
                      },
                      required: [],
                    },
                  },
                  required: [],
                },
              },
              required: ['attributes', 'type'],
            },
          ],
        },
      },
    },
    $defs: {
      subscription_offer_duration: {
        type: 'string',
        enum: [
          'THREE_DAYS',
          'ONE_WEEK',
          'TWO_WEEKS',
          'ONE_MONTH',
          'TWO_MONTHS',
          'THREE_MONTHS',
          'SIX_MONTHS',
          'ONE_YEAR',
        ],
      },
      subscription_offer_mode: {
        type: 'string',
        enum: ['PAY_AS_YOU_GO', 'PAY_UP_FRONT', 'FREE_TRIAL'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptions.update(id, body));
};

export default { metadata, tool, handler };
