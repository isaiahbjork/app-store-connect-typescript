// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_infos',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appInfos/{id}/ageRatingDeclaration',
  operationId: 'appInfos_ageRatingDeclaration_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_age_rating_declaration_app_infos',
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
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.appInfos.retrieveAgeRatingDeclaration(id, body));
};

export default { metadata, tool, handler };
