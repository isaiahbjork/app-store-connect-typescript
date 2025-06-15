// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveApp(id: string, options?: RequestOptions): APIPromise<RelationshipRetrieveAppResponse> {
    return this._client.get(path`/v1/bundleIds/${id}/relationships/app`, options);
  }

  retrieveBundleIDCapabilities(
    id: string,
    query: RelationshipRetrieveBundleIDCapabilitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveBundleIDCapabilitiesResponse> {
    return this._client.get(path`/v1/bundleIds/${id}/relationships/bundleIdCapabilities`, {
      query,
      ...options,
    });
  }

  retrieveProfiles(
    id: string,
    query: RelationshipRetrieveProfilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveProfilesResponse> {
    return this._client.get(path`/v1/bundleIds/${id}/relationships/profiles`, { query, ...options });
  }
}

export interface RelationshipRetrieveAppResponse {
  data: RelationshipRetrieveAppResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppResponse {
  export interface Data {
    id: string;

    type: 'apps';
  }
}

export interface RelationshipRetrieveBundleIDCapabilitiesResponse {
  data: Array<RelationshipRetrieveBundleIDCapabilitiesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveBundleIDCapabilitiesResponse {
  export interface Data {
    id: string;

    type: 'bundleIdCapabilities';
  }
}

export interface RelationshipRetrieveProfilesResponse {
  data: Array<RelationshipRetrieveProfilesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveProfilesResponse {
  export interface Data {
    id: string;

    type: 'profiles';
  }
}

export interface RelationshipRetrieveBundleIDCapabilitiesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipRetrieveProfilesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipRetrieveAppResponse as RelationshipRetrieveAppResponse,
    type RelationshipRetrieveBundleIDCapabilitiesResponse as RelationshipRetrieveBundleIDCapabilitiesResponse,
    type RelationshipRetrieveProfilesResponse as RelationshipRetrieveProfilesResponse,
    type RelationshipRetrieveBundleIDCapabilitiesParams as RelationshipRetrieveBundleIDCapabilitiesParams,
    type RelationshipRetrieveProfilesParams as RelationshipRetrieveProfilesParams,
  };
}
