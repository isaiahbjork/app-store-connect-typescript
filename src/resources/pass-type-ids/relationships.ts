// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
    return this._client.get(path`/v1/passTypeIds/${id}/relationships/certificates`, { query, ...options });
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

export interface RelationshipListCertificatesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListCertificatesResponse as RelationshipListCertificatesResponse,
    type RelationshipListCertificatesParams as RelationshipListCertificatesParams,
  };
}
