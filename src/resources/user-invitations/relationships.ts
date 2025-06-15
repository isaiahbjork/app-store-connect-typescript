// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveVisibleApps(
    id: string,
    query: RelationshipRetrieveVisibleAppsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveVisibleAppsResponse> {
    return this._client.get(path`/v1/userInvitations/${id}/relationships/visibleApps`, { query, ...options });
  }
}

export interface RelationshipRetrieveVisibleAppsResponse {
  data: Array<RelationshipRetrieveVisibleAppsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveVisibleAppsResponse {
  export interface Data {
    id: string;

    type: 'apps';
  }
}

export interface RelationshipRetrieveVisibleAppsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipRetrieveVisibleAppsResponse as RelationshipRetrieveVisibleAppsResponse,
    type RelationshipRetrieveVisibleAppsParams as RelationshipRetrieveVisibleAppsParams,
  };
}
