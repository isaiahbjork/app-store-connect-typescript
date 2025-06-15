// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_recruitment_criteria',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/betaRecruitmentCriteria',
  operationId: 'betaRecruitmentCriteria_createInstance',
};

export const tool: Tool = {
  name: 'create_beta_recruitment_criteria',
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
              deviceFamilyOsVersionFilters: {
                type: 'array',
                items: {
                  $ref: '#/$defs/device_family_os_version_filter',
                },
              },
            },
            required: ['deviceFamilyOsVersionFilters'],
          },
          relationships: {
            type: 'object',
            properties: {
              betaGroup: {
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
                        enum: ['betaGroups'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['betaGroup'],
          },
          type: {
            type: 'string',
            enum: ['betaRecruitmentCriteria'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
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
  const body = args as any;
  return asTextContentResult(await client.betaRecruitmentCriteria.create(body));
};

export default { metadata, tool, handler };
