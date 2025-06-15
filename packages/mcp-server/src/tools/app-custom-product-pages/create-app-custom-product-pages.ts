// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_custom_product_pages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appCustomProductPages',
  operationId: 'appCustomProductPages_createInstance',
};

export const tool: Tool = {
  name: 'create_app_custom_product_pages',
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
              name: {
                type: 'string',
              },
            },
            required: ['name'],
          },
          relationships: {
            type: 'object',
            properties: {
              app: {
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
                        enum: ['apps'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
              appCustomProductPageVersions: {
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
                          enum: ['appCustomProductPageVersions'],
                        },
                      },
                      required: ['id', 'type'],
                    },
                  },
                },
                required: [],
              },
              appStoreVersionTemplate: {
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
                        enum: ['appStoreVersions'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
              customProductPageTemplate: {
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
                        enum: ['appCustomProductPages'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: [],
              },
            },
            required: ['app'],
          },
          type: {
            type: 'string',
            enum: ['appCustomProductPages'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
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
                    locale: {
                      type: 'string',
                    },
                    promotionalText: {
                      type: 'string',
                    },
                  },
                  required: ['locale'],
                },
                type: {
                  type: 'string',
                  enum: ['appCustomProductPageLocalizations'],
                },
                id: {
                  type: 'string',
                },
                relationships: {
                  type: 'object',
                  properties: {
                    appCustomProductPageVersion: {
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
                              enum: ['appCustomProductPageVersions'],
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
                  enum: ['appCustomProductPageVersions'],
                },
                id: {
                  type: 'string',
                },
                attributes: {
                  type: 'object',
                  properties: {
                    deepLink: {
                      type: 'string',
                    },
                  },
                  required: [],
                },
                relationships: {
                  type: 'object',
                  properties: {
                    appCustomProductPage: {
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
                              enum: ['appCustomProductPages'],
                            },
                          },
                          required: ['id', 'type'],
                        },
                      },
                      required: [],
                    },
                    appCustomProductPageLocalizations: {
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
                                enum: ['appCustomProductPageLocalizations'],
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
              required: ['type'],
            },
          ],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appCustomProductPages.create(body));
};

export default { metadata, tool, handler };
