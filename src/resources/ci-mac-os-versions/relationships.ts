// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveXcodeVersions(
    id: string,
    query: RelationshipRetrieveXcodeVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveXcodeVersionsResponse> {
    return this._client.get(path`/v1/ciMacOsVersions/${id}/relationships/xcodeVersions`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipRetrieveXcodeVersionsResponse {
  data: Array<RelationshipRetrieveXcodeVersionsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveXcodeVersionsResponse {
  export interface Data {
    id: string;

    type: 'ciXcodeVersions';
  }
}

export interface RelationshipRetrieveXcodeVersionsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipRetrieveXcodeVersionsResponse as RelationshipRetrieveXcodeVersionsResponse,
    type RelationshipRetrieveXcodeVersionsParams as RelationshipRetrieveXcodeVersionsParams,
  };
}
