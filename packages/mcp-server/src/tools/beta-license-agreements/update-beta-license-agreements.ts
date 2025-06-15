// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'beta_license_agreements',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/betaLicenseAgreements/{id}',
  operationId: 'betaLicenseAgreements_updateInstance',
};

export const tool: Tool = {
  name: 'update_beta_license_agreements',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['betaLicenseAgreements'],
          },
          attributes: {
            type: 'object',
            properties: {
              agreementText: {
                type: 'string',
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.betaLicenseAgreements.update(id, body));
};

export default { metadata, tool, handler };
