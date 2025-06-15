// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveMacOsVersions(
    id: string,
    query: RelationshipRetrieveMacOsVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveMacOsVersionsResponse> {
    return this._client.get(path`/v1/ciXcodeVersions/${id}/relationships/macOsVersions`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipRetrieveMacOsVersionsResponse {
  data: Array<RelationshipRetrieveMacOsVersionsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipRetrieveMacOsVersionsResponse {
  export interface Data {
    id: string;

    type: 'ciMacOsVersions';
  }
}

export interface RelationshipRetrieveMacOsVersionsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipRetrieveMacOsVersionsResponse as RelationshipRetrieveMacOsVersionsResponse,
    type RelationshipRetrieveMacOsVersionsParams as RelationshipRetrieveMacOsVersionsParams,
  };
}
