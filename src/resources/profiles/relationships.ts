// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listCertificates(
    id: string,
    query: RelationshipListCertificatesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListCertificatesResponse> {
    return this._client.get(path`/v1/profiles/${id}/relationships/certificates`, { query, ...options });
  }

  listDevices(
    id: string,
    query: RelationshipListDevicesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListDevicesResponse> {
    return this._client.get(path`/v1/profiles/${id}/relationships/devices`, { query, ...options });
  }

  retrieveBundleID(id: string, options?: RequestOptions): APIPromise<RelationshipRetrieveBundleIDResponse> {
    return this._client.get(path`/v1/profiles/${id}/relationships/bundleId`, options);
  }
}

export interface RelationshipListCertificatesResponse {
  data: Array<RelationshipListCertificatesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListCertificatesResponse {
  export interface Data {
    id: string;

    type: 'certificates';
  }
}

export interface RelationshipListDevicesResponse {
  data: Array<RelationshipListDevicesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListDevicesResponse {
  export interface Data {
    id: string;

    type: 'devices';
  }
}

export interface RelationshipRetrieveBundleIDResponse {
  data: RelationshipRetrieveBundleIDResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveBundleIDResponse {
  export interface Data {
    id: string;

    type: 'bundleIds';
  }
}

export interface RelationshipListCertificatesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListDevicesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListCertificatesResponse as RelationshipListCertificatesResponse,
    type RelationshipListDevicesResponse as RelationshipListDevicesResponse,
    type RelationshipRetrieveBundleIDResponse as RelationshipRetrieveBundleIDResponse,
    type RelationshipListCertificatesParams as RelationshipListCertificatesParams,
    type RelationshipListDevicesParams as RelationshipListDevicesParams,
  };
}
