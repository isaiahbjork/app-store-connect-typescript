// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as ActorsAPI from './actors';
import * as BundleIDsAPI from './bundle-ids/bundle-ids';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Devices extends APIResource {
  create(body: DeviceCreateParams, options?: RequestOptions): APIPromise<DeviceResponse> {
    return this._client.post('/v1/devices', { body, ...options });
  }

  retrieve(
    id: string,
    query: DeviceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeviceResponse> {
    return this._client.get(path`/v1/devices/${id}`, { query, ...options });
  }

  update(id: string, body: DeviceUpdateParams, options?: RequestOptions): APIPromise<DeviceResponse> {
    return this._client.patch(path`/v1/devices/${id}`, { body, ...options });
  }

  list(
    query: DeviceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeviceListResponse> {
    return this._client.get('/v1/devices', { query, ...options });
  }
}

export interface Device {
  id: string;

  type: 'devices';

  attributes?: Device.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace Device {
  export interface Attributes {
    addedDate?: string;

    deviceClass?: 'APPLE_VISION_PRO' | 'APPLE_WATCH' | 'IPAD' | 'IPHONE' | 'IPOD' | 'APPLE_TV' | 'MAC';

    model?: string;

    name?: string;

    platform?: BundleIDsAPI.BundleIDPlatform;

    status?: 'ENABLED' | 'DISABLED';

    udid?: string;
  }
}

export interface DeviceResponse {
  data: Device;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface DeviceListResponse {
  data: Array<Device>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface DeviceCreateParams {
  data: DeviceCreateParams.Data;
}

export namespace DeviceCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'devices';
  }

  export namespace Data {
    export interface Attributes {
      name: string;

      platform: BundleIDsAPI.BundleIDPlatform;

      udid: string;
    }
  }
}

export interface DeviceRetrieveParams {
  /**
   * the fields to include for returned resources of type devices
   */
  'fields[devices]'?: Array<'name' | 'platform' | 'udid' | 'deviceClass' | 'status' | 'model' | 'addedDate'>;
}

export interface DeviceUpdateParams {
  data: DeviceUpdateParams.Data;
}

export namespace DeviceUpdateParams {
  export interface Data {
    id: string;

    type: 'devices';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      name?: string;

      status?: 'ENABLED' | 'DISABLED';
    }
  }
}

export interface DeviceListParams {
  /**
   * the fields to include for returned resources of type devices
   */
  'fields[devices]'?: Array<'name' | 'platform' | 'udid' | 'deviceClass' | 'status' | 'model' | 'addedDate'>;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * filter by attribute 'name'
   */
  'filter[name]'?: Array<string>;

  /**
   * filter by attribute 'platform'
   */
  'filter[platform]'?: Array<'IOS' | 'MAC_OS' | 'UNIVERSAL'>;

  /**
   * filter by attribute 'status'
   */
  'filter[status]'?: Array<'ENABLED' | 'DISABLED'>;

  /**
   * filter by attribute 'udid'
   */
  'filter[udid]'?: Array<string>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<
    'name' | '-name' | 'platform' | '-platform' | 'udid' | '-udid' | 'status' | '-status' | 'id' | '-id'
  >;
}

export declare namespace Devices {
  export {
    type Device as Device,
    type DeviceResponse as DeviceResponse,
    type DeviceListResponse as DeviceListResponse,
    type DeviceCreateParams as DeviceCreateParams,
    type DeviceRetrieveParams as DeviceRetrieveParams,
    type DeviceUpdateParams as DeviceUpdateParams,
    type DeviceListParams as DeviceListParams,
  };
}
