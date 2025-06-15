// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_mac_os_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ciMacOsVersions/{id}',
  operationId: 'ciMacOsVersions_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_ci_mac_os_versions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[ciMacOsVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ciMacOsVersions',
        items: {
          type: 'string',
          enum: ['version', 'name', 'xcodeVersions'],
        },
      },
      'fields[ciXcodeVersions]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ciXcodeVersions',
        items: {
          type: 'string',
          enum: ['version', 'name', 'testDestinations', 'macOsVersions'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['xcodeVersions'],
        },
      },
      'limit[xcodeVersions]': {
        type: 'integer',
        description: 'maximum number of related xcodeVersions returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ciMacOsVersions.retrieve(id, body));
};

export default { metadata, tool, handler };
