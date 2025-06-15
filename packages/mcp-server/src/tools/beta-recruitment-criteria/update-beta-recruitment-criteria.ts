// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_recruitment_criteria',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/betaRecruitmentCriteria/{id}',
  operationId: 'betaRecruitmentCriteria_updateInstance',
};

export const tool: Tool = {
  name: 'update_beta_recruitment_criteria',
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
            enum: ['betaRecruitmentCriteria'],
          },
          attributes: {
            type: 'object',
            properties: {
              deviceFamilyOsVersionFilters: {
                type: 'array',
                items: {
                  $ref: '#/$defs/device_family_os_version_filter',
                },
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
      },
    },
    $defs: {
      device_family_os_version_filter: {
        type: 'object',
        properties: {
          deviceFamily: {
            $ref: '#/$defs/device_family',
          },
          maximumOsInclusive: {
            type: 'string',
          },
          minimumOsInclusive: {
            type: 'string',
          },
        },
        required: [],
      },
      device_family: {
        type: 'string',
        enum: ['IPHONE', 'IPAD', 'APPLE_TV', 'APPLE_WATCH', 'MAC', 'VISION'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.betaRecruitmentCriteria.update(id, body));
};

export default { metadata, tool, handler };
