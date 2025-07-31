// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_infos',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appInfos/{id}',
  operationId: 'appInfos_getInstance',
};

export const tool: Tool = {
  name: 'retrieve_app_infos',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[ageRatingDeclarations]': {
        type: 'array',
        description: 'the fields to include for returned resources of type ageRatingDeclarations',
        items: {
          type: 'string',
          enum: [
            'alcoholTobaccoOrDrugUseOrReferences',
            'contests',
            'gambling',
            'gamblingSimulated',
            'kidsAgeBand',
            'lootBox',
            'medicalOrTreatmentInformation',
            'profanityOrCrudeHumor',
            'sexualContentGraphicAndNudity',
            'sexualContentOrNudity',
            'horrorOrFearThemes',
            'matureOrSuggestiveThemes',
            'unrestrictedWebAccess',
            'violenceCartoonOrFantasy',
            'violenceRealisticProlongedGraphicOrSadistic',
            'violenceRealistic',
            'koreaAgeRatingOverride',
          ],
        },
      },
      'fields[appCategories]': {
        type: 'array',
        description: 'the fields to include for returned resources of type appCategories',
        items: {
          type: 'string',
          enum: ['platforms', 'subcategories', 'parent'],
        },
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
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: [
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
      'limit[appInfoLocalizations]': {
        type: 'integer',
        description: 'maximum number of related appInfoLocalizations returned (when they are included)',
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
  return asTextContentResult(await client.appInfos.retrieve(id, body));
};

export default { metadata, tool, handler };
