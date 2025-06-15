// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_testers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/betaTesters/{id}/betaGroups',
  operationId: 'betaTesters_betaGroups_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_beta_groups_beta_testers',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[betaGroups]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaGroups',
        items: {
          type: 'string',
          enum: [
            'name',
            'createdDate',
            'isInternalGroup',
            'hasAccessToAllBuilds',
            'publicLinkEnabled',
            'publicLinkId',
            'publicLinkLimitEnabled',
            'publicLinkLimit',
            'publicLink',
            'feedbackEnabled',
            'iosBuildsAvailableForAppleSiliconMac',
            'iosBuildsAvailableForAppleVision',
            'app',
            'builds',
            'betaTesters',
            'betaRecruitmentCriteria',
            'betaRecruitmentCriterionCompatibleBuildCheck',
          ],
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
  const { id, ...body } = args as any;
  return asTextContentResult(await client.betaTesters.listBetaGroups(id, body));
};

export default { metadata, tool, handler };
