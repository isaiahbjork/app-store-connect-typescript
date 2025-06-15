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
  httpPath: '/v1/betaGroups/{id}/betaRecruitmentCriterionCompatibleBuildCheck',
  operationId: 'betaGroups_betaRecruitmentCriterionCompatibleBuildCheck_getToOneRelated',
};

export const tool: Tool = {
  name: 'check_beta_recruitment_criterion_compatible_build_beta_groups',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[betaRecruitmentCriterionCompatibleBuildChecks]': {
        type: 'array',
        description:
          'the fields to include for returned resources of type betaRecruitmentCriterionCompatibleBuildChecks',
        items: {
          type: 'string',
          enum: ['hasCompatibleBuild'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.betaGroups.checkBetaRecruitmentCriterionCompatibleBuild(id, body));
};

export default { metadata, tool, handler };
