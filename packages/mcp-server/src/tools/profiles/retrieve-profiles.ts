// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'profiles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/profiles/{id}',
  operationId: 'profiles_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_profiles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[bundleIds]': {
        type: 'array',
        description: 'the fields to include for returned resources of type bundleIds',
        items: {
          type: 'string',
          enum: ['name', 'platform', 'identifier', 'seedId', 'profiles', 'bundleIdCapabilities', 'app'],
        },
      },
      'fields[certificates]': {
        type: 'array',
        description: 'the fields to include for returned resources of type certificates',
        items: {
          type: 'string',
          enum: [
            'name',
            'certificateType',
            'displayName',
            'serialNumber',
            'platform',
            'expirationDate',
            'certificateContent',
            'activated',
            'passTypeId',
          ],
        },
      },
      'fields[devices]': {
        type: 'array',
        description: 'the fields to include for returned resources of type devices',
        items: {
          type: 'string',
          enum: ['name', 'platform', 'udid', 'deviceClass', 'status', 'model', 'addedDate'],
        },
      },
      'fields[profiles]': {
        type: 'array',
        description: 'the fields to include for returned resources of type profiles',
        items: {
          type: 'string',
          enum: [
            'name',
            'platform',
            'profileType',
            'profileState',
            'profileContent',
            'uuid',
            'createdDate',
            'expirationDate',
            'bundleId',
            'devices',
            'certificates',
          ],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['bundleId', 'devices', 'certificates'],
        },
      },
      'limit[certificates]': {
        type: 'integer',
        description: 'maximum number of related certificates returned (when they are included)',
      },
      'limit[devices]': {
        type: 'integer',
        description: 'maximum number of related devices returned (when they are included)',
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.profiles.retrieve(id, body));
};

export default { metadata, tool, handler };
