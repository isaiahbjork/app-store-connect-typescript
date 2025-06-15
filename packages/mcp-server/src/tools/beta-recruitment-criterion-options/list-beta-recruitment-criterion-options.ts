// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_recruitment_criterion_options',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/betaRecruitmentCriterionOptions',
  operationId: 'betaRecruitmentCriterionOptions_getCollection',
};

export const tool: Tool = {
  name: 'list_beta_recruitment_criterion_options',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      'fields[betaRecruitmentCriterionOptions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaRecruitmentCriterionOptions',
        items: {
          type: 'string',
          enum: ['deviceFamilyOsVersions'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.betaRecruitmentCriterionOptions.list(body));
};

export default { metadata, tool, handler };
