// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'scm_pull_requests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/scmPullRequests/{id}',
  operationId: 'scmPullRequests_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_scm_pull_requests',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[scmPullRequests]': {
        type: 'array',
        description: 'the fields to include for returned resources of type scmPullRequests',
        items: {
          type: 'string',
          enum: [
            'title',
            'number',
            'webUrl',
            'sourceRepositoryOwner',
            'sourceRepositoryName',
            'sourceBranchName',
            'destinationRepositoryOwner',
            'destinationRepositoryName',
            'destinationBranchName',
            'isClosed',
            'isCrossRepository',
            'repository',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['repository'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.scmPullRequests.retrieve(id, body));
};

export default { metadata, tool, handler };
