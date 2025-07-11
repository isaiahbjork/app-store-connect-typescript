// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clip_advanced_experiences',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/appClipAdvancedExperiences/{id}',
  operationId: 'appClipAdvancedExperiences_updateInstance',
};

export const tool: Tool = {
  name: 'update_app_clip_advanced_experiences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
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
            enum: ['appClipAdvancedExperiences'],
          },
          attributes: {
            type: 'object',
            properties: {
              action: {
                $ref: '#/$defs/app_clip_action',
              },
              businessCategory: {
                type: 'string',
                enum: [
                  'AUTOMOTIVE',
                  'BEAUTY',
                  'BIKES',
                  'BOOKS',
                  'CASINO',
                  'EDUCATION',
                  'EDUCATION_JAPAN',
                  'ENTERTAINMENT',
                  'EV_CHARGER',
                  'FINANCIAL_USD',
                  'FINANCIAL_CNY',
                  'FINANCIAL_GBP',
                  'FINANCIAL_JPY',
                  'FINANCIAL_EUR',
                  'FITNESS',
                  'FOOD_AND_DRINK',
                  'GAS',
                  'GROCERY',
                  'HEALTH_AND_MEDICAL',
                  'HOTEL_AND_TRAVEL',
                  'MUSIC',
                  'PARKING',
                  'PET_SERVICES',
                  'PROFESSIONAL_SERVICES',
                  'SHOPPING',
                  'TICKETING',
                  'TRANSIT',
                ],
              },
              defaultLanguage: {
                $ref: '#/$defs/app_clip_advanced_experience_language',
              },
              isPoweredBy: {
                type: 'boolean',
              },
              place: {
                type: 'object',
                properties: {
                  categories: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                  displayPoint: {
                    type: 'object',
                    properties: {
                      coordinates: {
                        type: 'object',
                        properties: {
                          latitude: {
                            type: 'number',
                          },
                          longitude: {
                            type: 'number',
                          },
                        },
                        required: [],
                      },
                      source: {
                        type: 'string',
                        enum: ['CALCULATED', 'MANUALLY_PLACED'],
                      },
                    },
                    required: [],
                  },
                  homePage: {
                    type: 'string',
                  },
                  mainAddress: {
                    type: 'object',
                    properties: {
                      fullAddress: {
                        type: 'string',
                      },
                      structuredAddress: {
                        type: 'object',
                        properties: {
                          countryCode: {
                            type: 'string',
                          },
                          floor: {
                            type: 'string',
                          },
                          locality: {
                            type: 'string',
                          },
                          neighborhood: {
                            type: 'string',
                          },
                          postalCode: {
                            type: 'string',
                          },
                          stateProvince: {
                            type: 'string',
                          },
                          streetAddress: {
                            type: 'array',
                            items: {
                              type: 'string',
                            },
                          },
                        },
                        required: [],
                      },
                    },
                    required: [],
                  },
                  mapAction: {
                    type: 'string',
                    enum: [
                      'BUY_TICKETS',
                      'VIEW_AVAILABILITY',
                      'VIEW_PRICING',
                      'HOTEL_BOOK_ROOM',
                      'PARKING_RESERVE_PARKING',
                      'RESTAURANT_JOIN_WAITLIST',
                      'RESTAURANT_ORDER_DELIVERY',
                      'RESTAURANT_ORDER_FOOD',
                      'RESTAURANT_ORDER_TAKEOUT',
                      'RESTAURANT_RESERVATION',
                      'SCHEDULE_APPOINTMENT',
                      'RESTAURANT_VIEW_MENU',
                      'THEATER_NOW_PLAYING',
                      'AIRLINE_BOOK_TRAVEL',
                      'AIRLINE_CHECK_IN',
                      'AIRLINE_FLIGHT_STATUS',
                      'APPLY',
                      'BOOK',
                      'BOOK_ACTIVITIES',
                      'BOOK_RIDES',
                      'BOOK_TEETIMES',
                      'BOOK_TOURS',
                      'CAREERS',
                      'CHARGE_EV',
                      'COUPONS',
                      'DONATE',
                      'EVENTS',
                      'EVENTS_SHOWS',
                      'EVENTS_SPORTS',
                      'GIFT_CARD',
                      'HOTEL_AMENITIES',
                      'JOIN',
                      'PARKING_AVAILABLE',
                      'RESTAURANT_PICKUP',
                      'RETAIL_SERVICE_QUOTE',
                      'RETAIL_STORE_DELIVERY',
                      'RETAIL_STORE_PICKUP',
                      'RETAIL_STORE_SHOP',
                      'SERVICES',
                      'SUPPORT',
                    ],
                  },
                  names: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                  phoneNumber: {
                    type: 'object',
                    properties: {
                      intent: {
                        type: 'string',
                      },
                      number: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['FAX', 'LANDLINE', 'MOBILE', 'TOLLFREE'],
                      },
                    },
                    required: [],
                  },
                  placeId: {
                    type: 'string',
                  },
                  relationship: {
                    type: 'string',
                    enum: ['OWNER', 'AUTHORIZED', 'OTHER'],
                  },
                },
                required: [],
              },
              removed: {
                type: 'boolean',
              },
            },
            required: [],
          },
          relationships: {
            type: 'object',
            properties: {
              appClip: {
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
                        enum: ['appClips'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
              headerImage: {
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
                        enum: ['appClipAdvancedExperienceImages'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
              localizations: {
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
                          enum: ['appClipAdvancedExperienceLocalizations'],
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
          $ref: '#/$defs/app_clip_advanced_experience_localization_inline_create',
        },
      },
    },
    $defs: {
      app_clip_action: {
        type: 'string',
        enum: ['OPEN', 'VIEW', 'PLAY'],
      },
      app_clip_advanced_experience_language: {
        type: 'string',
        enum: [
          'AR',
          'CA',
          'CS',
          'DA',
          'DE',
          'EL',
          'EN',
          'ES',
          'FI',
          'FR',
          'HE',
          'HI',
          'HR',
          'HU',
          'ID',
          'IT',
          'JA',
          'KO',
          'MS',
          'NL',
          'NO',
          'PL',
          'PT',
          'RO',
          'RU',
          'SK',
          'SV',
          'TH',
          'TR',
          'UK',
          'VI',
          'ZH',
        ],
      },
      app_clip_advanced_experience_localization_inline_create: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: ['appClipAdvancedExperienceLocalizations'],
          },
          id: {
            type: 'string',
          },
          attributes: {
            type: 'object',
            properties: {
              language: {
                $ref: '#/$defs/app_clip_advanced_experience_language',
              },
              subtitle: {
                type: 'string',
              },
              title: {
                type: 'string',
              },
            },
            required: [],
          },
        },
        required: ['type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appClipAdvancedExperiences.update(id, body));
};

export default { metadata, tool, handler };
