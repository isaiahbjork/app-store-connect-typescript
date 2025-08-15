// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'profiles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/profiles',
  operationId: 'profiles_getCollection',
};

export const tool: Tool = {
  name: 'list_profiles',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
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
      'filter[id]': {
        type: 'array',
        description: 'filter by id(s)',
        items: {
          type: 'string',
        },
      },
      'filter[name]': {
        type: 'array',
        description: "filter by attribute 'name'",
        items: {
          type: 'string',
        },
      },
      'filter[profileState]': {
        type: 'array',
        description: "filter by attribute 'profileState'",
        items: {
          type: 'string',
          enum: ['ACTIVE', 'INVALID'],
        },
      },
      'filter[profileType]': {
        type: 'array',
        description: "filter by attribute 'profileType'",
        items: {
          type: 'string',
          enum: [
            'IOS_APP_DEVELOPMENT',
            'IOS_APP_STORE',
            'IOS_APP_ADHOC',
            'IOS_APP_INHOUSE',
            'MAC_APP_DEVELOPMENT',
            'MAC_APP_STORE',
            'MAC_APP_DIRECT',
            'TVOS_APP_DEVELOPMENT',
            'TVOS_APP_STORE',
            'TVOS_APP_ADHOC',
            'TVOS_APP_INHOUSE',
            'MAC_CATALYST_APP_DEVELOPMENT',
            'MAC_CATALYST_APP_STORE',
            'MAC_CATALYST_APP_DIRECT',
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
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      'limit[certificates]': {
        type: 'integer',
        description: 'maximum number of related certificates returned (when they are included)',
      },
      'limit[devices]': {
        type: 'integer',
        description: 'maximum number of related devices returned (when they are included)',
      },
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; resources will be sorted as specified',
        items: {
          type: 'string',
          enum: [
            'name',
            '-name',
            'profileType',
            '-profileType',
            'profileState',
            '-profileState',
            'id',
            '-id',
          ],
        },
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.profiles.list(body));
};

export default { metadata, tool, handler };
