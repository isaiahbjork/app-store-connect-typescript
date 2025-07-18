// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_infos',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appInfos/{id}/appInfoLocalizations',
  operationId: 'appInfos_appInfoLocalizations_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_app_info_localizations_app_infos',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[appInfoLocalizations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appInfoLocalizations',
        items: {
          type: 'string',
          enum: [
            'locale',
            'name',
            'subtitle',
            'privacyPolicyUrl',
            'privacyChoicesUrl',
            'privacyPolicyText',
            'appInfo',
          ],
        },
      },
      'fields[appInfos]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appInfos',
        items: {
          type: 'string',
          enum: [
            'appStoreState',
            'state',
            'appStoreAgeRating',
            'australiaAgeRating',
            'brazilAgeRating',
            'brazilAgeRatingV2',
            'franceAgeRating',
            'koreaAgeRating',
            'kidsAgeBand',
            'app',
            'ageRatingDeclaration',
            'appInfoLocalizations',
            'primaryCategory',
            'primarySubcategoryOne',
            'primarySubcategoryTwo',
            'secondaryCategory',
            'secondarySubcategoryOne',
            'secondarySubcategoryTwo',
          ],
        },
      },
      'filter[locale]': {
        type: 'array',
        description: "filter by attribute 'locale'",
        items: {
          type: 'string',
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['appInfo'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
    },
    required: ['id'],
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appInfos.listAppInfoLocalizations(id, body));
};

export default { metadata, tool, handler };
