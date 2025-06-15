// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'age_rating_declarations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/ageRatingDeclarations/{id}',
  operationId: 'ageRatingDeclarations_updateInstance',
};

export const tool: Tool = {
  name: 'update_age_rating_declarations',
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
            enum: ['ageRatingDeclarations'],
          },
          attributes: {
            type: 'object',
            properties: {
              alcoholTobaccoOrDrugUseOrReferences: {
                type: 'string',
                enum: ['NONE'],
              },
              contests: {
                type: 'string',
                enum: ['NONE'],
              },
              gambling: {
                type: 'boolean',
              },
              gamblingSimulated: {
                type: 'string',
                enum: ['NONE'],
              },
              horrorOrFearThemes: {
                type: 'string',
                enum: ['NONE'],
              },
              kidsAgeBand: {
                $ref: '#/$defs/kids_age_band',
              },
              koreaAgeRatingOverride: {
                type: 'string',
                enum: ['NONE', 'FIFTEEN_PLUS', 'NINETEEN_PLUS'],
              },
              lootBox: {
                type: 'boolean',
              },
              matureOrSuggestiveThemes: {
                type: 'string',
                enum: ['NONE'],
              },
              medicalOrTreatmentInformation: {
                type: 'string',
                enum: ['NONE'],
              },
              profanityOrCrudeHumor: {
                type: 'string',
                enum: ['NONE'],
              },
              sexualContentGraphicAndNudity: {
                type: 'string',
                enum: ['NONE'],
              },
              sexualContentOrNudity: {
                type: 'string',
                enum: ['NONE'],
              },
              unrestrictedWebAccess: {
                type: 'boolean',
              },
              violenceCartoonOrFantasy: {
                type: 'string',
                enum: ['NONE'],
              },
              violenceRealistic: {
                type: 'string',
                enum: ['NONE'],
              },
              violenceRealisticProlongedGraphicOrSadistic: {
                type: 'string',
                enum: ['NONE'],
              },
            },
            required: [],
          },
        },
        required: ['id', 'type'],
      },
    },
    $defs: {
      kids_age_band: {
        type: 'string',
        enum: ['FIVE_AND_UNDER', 'SIX_TO_EIGHT', 'NINE_TO_ELEVEN'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.ageRatingDeclarations.update(id, body));
};

export default { metadata, tool, handler };
