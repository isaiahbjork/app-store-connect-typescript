// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listDeltas(
    id: string,
    query: RelationshipListDeltasParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListDeltasResponse> {
    return this._client.get(path`/v1/alternativeDistributionPackageVersions/${id}/relationships/deltas`, {
      query,
      ...options,
    });
  }

  listVariants(
    id: string,
    query: RelationshipListVariantsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListVariantsResponse> {
    return this._client.get(path`/v1/alternativeDistributionPackageVersions/${id}/relationships/variants`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipListDeltasResponse {
  data: Array<RelationshipListDeltasResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListDeltasResponse {
  export interface Data {
    id: string;

    type: 'alternativeDistributionPackageDeltas';
  }
}

export interface RelationshipListVariantsResponse {
  data: Array<RelationshipListVariantsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListVariantsResponse {
  export interface Data {
    id: string;

    type: 'alternativeDistributionPackageVariants';
  }
}

export interface RelationshipListDeltasParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListVariantsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListDeltasResponse as RelationshipListDeltasResponse,
    type RelationshipListVariantsResponse as RelationshipListVariantsResponse,
    type RelationshipListDeltasParams as RelationshipListDeltasParams,
    type RelationshipListVariantsParams as RelationshipListVariantsParams,
  };
}
