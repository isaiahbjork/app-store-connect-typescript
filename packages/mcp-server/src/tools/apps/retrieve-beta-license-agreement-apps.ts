// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/betaLicenseAgreement',
  operationId: 'apps_betaLicenseAgreement_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_beta_license_agreement_apps',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[betaLicenseAgreements]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaLicenseAgreements',
        items: {
          type: 'string',
          enum: ['agreementText', 'app'],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.apps.retrieveBetaLicenseAgreement(id, body));
};

export default { metadata, tool, handler };
