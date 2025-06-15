// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_version_phased_releases',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/appStoreVersionPhasedReleases/{id}',
  operationId: 'appStoreVersionPhasedReleases_updateInstance',
};

export const tool: Tool = {
  name: 'update_app_store_version_phased_releases',
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
        required: ['id', 'type'],
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
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appStoreVersionPhasedReleases.update(id, body));
};

export default { metadata, tool, handler };
