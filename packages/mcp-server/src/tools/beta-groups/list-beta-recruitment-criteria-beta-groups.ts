// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/betaGroups/{id}/betaRecruitmentCriteria',
  operationId: 'betaGroups_betaRecruitmentCriteria_getToOneRelated',
};

export const tool: Tool = {
  name: 'list_beta_recruitment_criteria_beta_groups',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[betaRecruitmentCriteria]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaRecruitmentCriteria',
        items: {
          type: 'string',
          enum: ['lastModifiedDate', 'deviceFamilyOsVersionFilters'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.betaGroups.listBetaRecruitmentCriteria(id, body));
};

export default { metadata, tool, handler };
