// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'end_user_license_agreements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/endUserLicenseAgreements/{id}',
  operationId: 'endUserLicenseAgreements_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_end_user_license_agreements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[endUserLicenseAgreements]': {
        type: 'array',
        description: 'the fields to include for returned resources of type endUserLicenseAgreements',
        items: {
          type: 'string',
          enum: ['agreementText', 'app', 'territories'],
        },
      },
      'fields[territories]': {
        type: 'array',
        description: 'the fields to include for returned resources of type territories',
        items: {
          type: 'string',
          enum: ['currency'],
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['app', 'territories'],
        },
      },
      'limit[territories]': {
        type: 'integer',
        description: 'maximum number of related territories returned (when they are included)',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.endUserLicenseAgreements.retrieve(id, body));
};

export default { metadata, tool, handler };
