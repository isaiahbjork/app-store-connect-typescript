// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'end_user_license_agreements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/endUserLicenseAgreements/{id}/territories',
  operationId: 'endUserLicenseAgreements_territories_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_territories_end_user_license_agreements',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[territories]': {
        type: 'array',
        description: 'the fields to include for returned resources of type territories',
        items: {
          type: 'string',
          enum: ['currency'],
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
  return asTextContentResult(await client.endUserLicenseAgreements.listTerritories(id, body));
};

export default { metadata, tool, handler };
