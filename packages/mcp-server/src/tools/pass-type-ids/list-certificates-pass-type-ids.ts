// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'pass_type_ids',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/passTypeIds/{id}/certificates',
  operationId: 'passTypeIds_certificates_getToManyRelated',
};

export const tool: Tool = {
  name: 'list_certificates_pass_type_ids',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'fields[certificates]': {
        type: 'array',
        description: 'the fields to include for returned resources of type certificates',
        items: {
          type: 'string',
          enum: [
            'name',
            'certificateType',
            'displayName',
            'serialNumber',
            'platform',
            'expirationDate',
            'certificateContent',
            'activated',
            'passTypeId',
          ],
        },
      },
      'fields[passTypeIds]': {
        type: 'array',
        description: 'the fields to include for returned resources of type passTypeIds',
        items: {
          type: 'string',
          enum: ['name', 'identifier', 'certificates'],
        },
      },
      'filter[certificateType]': {
        type: 'array',
        description: "filter by attribute 'certificateType'",
        items: {
          type: 'string',
          enum: [
            'APPLE_PAY',
            'APPLE_PAY_MERCHANT_IDENTITY',
            'APPLE_PAY_PSP_IDENTITY',
            'APPLE_PAY_RSA',
            'DEVELOPER_ID_KEXT',
            'DEVELOPER_ID_KEXT_G2',
            'DEVELOPER_ID_APPLICATION',
            'DEVELOPER_ID_APPLICATION_G2',
            'DEVELOPMENT',
            'DISTRIBUTION',
            'IDENTITY_ACCESS',
            'IOS_DEVELOPMENT',
            'IOS_DISTRIBUTION',
            'MAC_APP_DISTRIBUTION',
            'MAC_INSTALLER_DISTRIBUTION',
            'MAC_APP_DEVELOPMENT',
            'PASS_TYPE_ID',
            'PASS_TYPE_ID_WITH_NFC',
          ],
        },
      },
      'filter[displayName]': {
        type: 'array',
        description: "filter by attribute 'displayName'",
        items: {
          type: 'string',
        },
      },
      'filter[id]': {
        type: 'array',
        description: 'filter by id(s)',
        items: {
          type: 'string',
        },
      },
      'filter[serialNumber]': {
        type: 'array',
        description: "filter by attribute 'serialNumber'",
        items: {
          type: 'string',
        },
      },
      include: {
        type: 'array',
        description: 'comma-separated list of relationships to include',
        items: {
          type: 'string',
          enum: ['passTypeId'],
        },
      },
      limit: {
        type: 'integer',
        description: 'maximum resources per page',
      },
      sort: {
        type: 'array',
        description: 'comma-separated list of sort expressions; resources will be sorted as specified',
        items: {
          type: 'string',
          enum: [
            'displayName',
            '-displayName',
            'certificateType',
            '-certificateType',
            'serialNumber',
            '-serialNumber',
            'id',
            '-id',
          ],
        },
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.passTypeIDs.listCertificates(id, body));
};

export default { metadata, tool, handler };
