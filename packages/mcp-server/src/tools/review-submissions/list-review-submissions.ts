// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'review_submissions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/reviewSubmissions',
  operationId: 'reviewSubmissions_getCollection',
};

export const tool: Tool = {
  name: 'list_review_submissions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      'filter[app]': {
        type: 'array',
        description: "filter by id(s) of related 'app'",
        items: {
          type: 'string',
        },
      },
      'fields[reviewSubmissionItems]': {
        type: 'array',
        description: 'the fields to include for returned resources of type reviewSubmissionItems',
        items: {
          type: 'string',
          enum: [
            'state',
            'appStoreVersion',
            'appCustomProductPageVersion',
            'appStoreVersionExperiment',
            'appStoreVersionExperimentV2',
            'appEvent',
          ],
        },
      },
      'fields[reviewSubmissions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type reviewSubmissions',
        items: {
          type: 'string',
          enum: [
            'platform',
            'submittedDate',
            'state',
            'app',
            'items',
            'appStoreVersionForReview',
            'submittedByActor',
            'lastUpdatedByActor',
          ],
        },
      },
      'filter[platform]': {
        type: 'array',
        description: "filter by attribute 'platform'",
        items: {
          type: 'string',
          enum: ['IOS', 'MAC_OS', 'TV_OS', 'VISION_OS'],
        },
      },
      'filter[state]': {
        type: 'array',
        description: "filter by attribute 'state'",
        items: {
          type: 'string',
          enum: [
            'READY_FOR_REVIEW',
            'WAITING_FOR_REVIEW',
            'IN_REVIEW',
            'UNRESOLVED_ISSUES',
            'CANCELING',
            'COMPLETING',
            'COMPLETE',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['app', 'items', 'appStoreVersionForReview', 'submittedByActor', 'lastUpdatedByActor'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[items]': {
        type: 'integer',
        description: 'maximum number of related items returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.reviewSubmissions.list(body));
};

export default { metadata, tool, handler };
