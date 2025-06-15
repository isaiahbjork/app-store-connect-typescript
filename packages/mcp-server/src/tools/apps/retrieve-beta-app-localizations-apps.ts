// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/apps/{id}/betaAppLocalizations',
  operationId: 'apps_betaAppLocalizations_getToManyRelated',
};

export const tool: Tool = {
  name: 'retrieve_beta_app_localizations_apps',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[betaAppLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type betaAppLocalizations',
        items: {
          type: 'string',
          enum: [
            'feedbackEmail',
            'marketingUrl',
            'privacyPolicyUrl',
            'tvOsPrivacyPolicy',
            'description',
            'locale',
            'app',
          ],
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
  return asTextContentResult(await client.apps.retrieveBetaAppLocalizations(id, body));
};

export default { metadata, tool, handler };
