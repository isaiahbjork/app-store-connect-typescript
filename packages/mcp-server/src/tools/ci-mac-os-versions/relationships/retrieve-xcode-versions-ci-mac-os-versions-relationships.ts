// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_mac_os_versions.relationships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/ciMacOsVersions/{id}/relationships/xcodeVersions',
  operationId: 'ciMacOsVersions_xcodeVersions_getToManyRelationship',
};

export const tool: Tool = {
  name: 'retrieve_xcode_versions_ci_mac_os_versions_relationships',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
  return asTextContentResult(await client.ciMacOsVersions.relationships.retrieveXcodeVersions(id, body));
};

export default { metadata, tool, handler };
