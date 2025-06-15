// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_version_phased_releases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/appStoreVersionPhasedReleases',
  operationId: 'appStoreVersionPhasedReleases_createInstance',
};

export const tool: Tool = {
  name: 'create_app_store_version_phased_releases',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          relationships: {
            type: 'object',
            properties: {
              appStoreVersion: {
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
                required: ['data'],
              },
            },
            required: ['appStoreVersion'],
          },
          type: {
            type: 'string',
            enum: ['appStoreVersionPhasedReleases'],
          },
          attributes: {
            type: 'object',
            properties: {
              phasedReleaseState: {
                $ref: '#/$defs/phased_release_state',
              },
            },
            required: [],
          },
        },
        required: ['relationships', 'type'],
      },
    },
    $defs: {
      phased_release_state: {
        type: 'string',
        enum: ['INACTIVE', 'ACTIVE', 'PAUSED', 'COMPLETE'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.appStoreVersionPhasedReleases.create(body));
};

export default { metadata, tool, handler };
