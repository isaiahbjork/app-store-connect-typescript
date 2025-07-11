// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'app-store-connect-api-mcp/filtering';
import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'devices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/devices',
  operationId: 'devices_createInstance',
};

export const tool: Tool = {
  name: 'create_devices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/device_response',\n  $defs: {\n    device_response: {\n      type: 'object',\n      title: 'DeviceResponse',\n      properties: {\n        data: {\n          $ref: '#/$defs/device'\n        },\n        links: {\n          $ref: '#/$defs/document_links'\n        }\n      },\n      required: [        'data',\n        'links'\n      ]\n    },\n    device: {\n      type: 'object',\n      title: 'Device',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'devices'\n          ]\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            addedDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            deviceClass: {\n              type: 'string',\n              enum: [                'APPLE_VISION_PRO',\n                'APPLE_WATCH',\n                'IPAD',\n                'IPHONE',\n                'IPOD',\n                'APPLE_TV',\n                'MAC'\n              ]\n            },\n            model: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            platform: {\n              $ref: '#/$defs/bundle_id_platform'\n            },\n            status: {\n              type: 'string',\n              enum: [                'ENABLED',\n                'DISABLED'\n              ]\n            },\n            udid: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        links: {\n          $ref: '#/$defs/resource_links'\n        }\n      },\n      required: [        'id',\n        'type'\n      ]\n    },\n    bundle_id_platform: {\n      type: 'string',\n      enum: [        'IOS',\n        'MAC_OS',\n        'UNIVERSAL'\n      ]\n    },\n    resource_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    document_links: {\n      type: 'object',\n      properties: {\n        self: {\n          type: 'string'\n        }\n      },\n      required: [        'self'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
              platform: {
                $ref: '#/$defs/bundle_id_platform',
              },
              udid: {
                type: 'string',
              },
            },
            required: ['name', 'platform', 'udid'],
          },
          type: {
            type: 'string',
            enum: ['devices'],
          },
        },
        required: ['attributes', 'type'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      bundle_id_platform: {
        type: 'string',
        enum: ['IOS', 'MAC_OS', 'UNIVERSAL'],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.devices.create(body)));
};

export default { metadata, tool, handler };
