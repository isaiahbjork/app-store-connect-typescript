// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'app_store_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/appStoreVersions/{id}/ageRatingDeclaration',
  operationId: 'appStoreVersions_ageRatingDeclaration_getToOneRelated',
};

export const tool: Tool = {
  name: 'retrieve_age_rating_declaration_app_store_versions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'AgeRatingDeclarationWithoutIncludesResponse',\n  properties: {\n    data: {\n      $ref: '#/$defs/age_rating_declaration'\n    },\n    links: {\n      $ref: '#/$defs/document_links'\n    }\n  },\n  required: [    'data',\n    'links'\n  ],\n  $defs: {\n    age_rating_declaration: {\n      type: 'object',\n      title: 'AgeRatingDeclaration',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'ageRatingDeclarations'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            alcoholTobaccoOrDrugUseOrReferences: {\n              type: 'string',\n              enum: [                'NONE'\n              ]\n            },\n            contests: {\n              type: 'string',\n              enum: [                'NONE'\n              ]\n            },\n            gambling: {\n              type: 'boolean'\n            },\n            gamblingSimulated: {\n              type: 'string',\n              enum: [                'NONE'\n              ]\n            },\n            horrorOrFearThemes: {\n              type: 'string',\n              enum: [                'NONE'\n              ]\n            },\n            kidsAgeBand: {\n              $ref: '#/$defs/kids_age_band'\n            },\n            koreaAgeRatingOverride: {\n              type: 'string',\n              enum: [                'NONE',\n                'FIFTEEN_PLUS',\n                'NINETEEN_PLUS'\n              ]\n            },\n            lootBox: {\n              type: 'boolean'\n            },\n            matureOrSuggestiveThemes: {\n              type: 'string',\n              enum: [                'NONE'\n              ]\n            },\n            medicalOrTreatmentInformation: {\n              type: 'string',\n              enum: [                'NONE'\n              ]\n            },\n            profanityOrCrudeHumor: {\n              type: 'string',\n              enum: [                'NONE'\n              ]\n            },\n            sexualContentGraphicAndNudity: {\n              type: 'string',\n              enum: [                'NONE'\n              ]\n            },\n            sexualContentOrNudity: {\n              type: 'string',\n              enum: [                'NONE'\n              ]\n            },\n            unrestrictedWebAccess: {\n              type: 'boolean'\n            },\n            violenceCartoonOrFantasy: {\n              type: 'string',\n              enum: [                'NONE'\n              ]\n            },\n            violenceRealistic: {\n              type: 'string',\n              enum: [                'NONE'\n              ]\n            },\n            violenceRealisticProlongedGraphicOrSadistic: {\n              type: 'string',\n              enum: [                'NONE'\n              ]\n            }\n          }\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    kids_age_band: {\n      type: 'string',\n      enum: [        'FIVE_AND_UNDER',\n        'SIX_TO_EIGHT',\n        'NINE_TO_ELEVEN'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      }\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.appStoreVersions.retrieveAgeRatingDeclaration(id, body)),
  );
};

export default { metadata, tool, handler };
