// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listBuilds(
    id: string,
    query: RelationshipListBuildsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListBuildsResponse> {
    return this._client.get(path`/v1/preReleaseVersions/${id}/relationships/builds`, { query, ...options });
  }

  retrieveApp(id: string, options?: RequestOptions): APIPromise<RelationshipRetrieveAppResponse> {
    return this._client.get(path`/v1/preReleaseVersions/${id}/relationships/app`, options);
  }
}

export interface RelationshipListBuildsResponse {
  data: Array<RelationshipListBuildsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListBuildsResponse {
  export interface Data {
    id: string;

    type: 'builds';
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

export interface RelationshipListBuildsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListBuildsResponse as RelationshipListBuildsResponse,
    type RelationshipRetrieveAppResponse as RelationshipRetrieveAppResponse,
    type RelationshipListBuildsParams as RelationshipListBuildsParams,
  };
}
