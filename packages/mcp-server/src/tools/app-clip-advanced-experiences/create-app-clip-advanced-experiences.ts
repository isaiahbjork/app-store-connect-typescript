// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_clip_advanced_experiences',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appClipAdvancedExperiences',
  operationId: 'appClipAdvancedExperiences_createInstance',
};

export const tool: Tool = {
  name: 'create_app_clip_advanced_experiences',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              defaultLanguage: {
                $ref: '#/$defs/app_clip_advanced_experience_language',
              },
              isPoweredBy: {
                type: 'boolean',
              },
              link: {
                type: 'string',
              },
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
                      },
                      source: {
                        type: 'string',
                        enum: ['CALCULATED', 'MANUALLY_PLACED'],
                      },
                    },
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
                      },
                    },
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
                  },
                  placeId: {
                    type: 'string',
                  },
                  relationship: {
                    type: 'string',
                    enum: ['OWNER', 'AUTHORIZED', 'OTHER'],
                  },
                },
              },
            },
            required: ['defaultLanguage', 'isPoweredBy', 'link'],
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
                required: ['data'],
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
                required: ['data'],
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
                required: ['data'],
              },
            },
            required: ['appClip', 'headerImage', 'localizations'],
          },
          type: {
            type: 'string',
            enum: ['appClipAdvancedExperiences'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
      included: {
        type: 'array',
        items: {
          $ref: '#/$defs/app_clip_advanced_experience_localization_inline_create',
        },
      },
    },
    required: ['data'],
    $defs: {
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
      app_clip_action: {
        type: 'string',
        enum: ['OPEN', 'VIEW', 'PLAY'],
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
          },
        },
        required: ['type'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appClipAdvancedExperiences.create(body));
};

export default { metadata, tool, handler };
