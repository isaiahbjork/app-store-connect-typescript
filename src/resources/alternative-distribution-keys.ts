// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as ActorsAPI from './actors';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AlternativeDistributionKeys extends APIResource {
  create(
    body: AlternativeDistributionKeyCreateParams,
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionKeyResponse> {
    return this._client.post('/v1/alternativeDistributionKeys', { body, ...options });
  }

  retrieve(
    id: string,
    query: AlternativeDistributionKeyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionKeyResponse> {
    return this._client.get(path`/v1/alternativeDistributionKeys/${id}`, { query, ...options });
  }

  list(
    query: AlternativeDistributionKeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlternativeDistributionKeyListResponse> {
    return this._client.get('/v1/alternativeDistributionKeys', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/alternativeDistributionKeys/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AlternativeDistributionKey {
  id: string;

  type: 'alternativeDistributionKeys';

  attributes?: AlternativeDistributionKey.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace AlternativeDistributionKey {
  export interface Attributes {
    publicKey?: string;
  }
}

export interface AlternativeDistributionKeyResponse {
  data: AlternativeDistributionKey;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AlternativeDistributionKeyListResponse {
  data: Array<AlternativeDistributionKey>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface AlternativeDistributionKeyCreateParams {
  data: AlternativeDistributionKeyCreateParams.Data;
}

export namespace AlternativeDistributionKeyCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'alternativeDistributionKeys';

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      publicKey: string;
    }

    export interface Relationships {
      app?: Relationships.App;
    }

    export namespace Relationships {
      export interface App {
        data?: App.Data;
      }

      export namespace App {
        export interface Data {
          id: string;

          type: 'apps';
        }
      }
    }
  }
}

export interface AlternativeDistributionKeyRetrieveParams {
  /**
   * the fields to include for returned resources of type alternativeDistributionKeys
   */
  'fields[alternativeDistributionKeys]'?: Array<'publicKey'>;
}

export interface AlternativeDistributionKeyListParams {
  /**
   * filter by existence or non-existence of related 'app'
   */
  'exists[app]'?: boolean;

  /**
   * the fields to include for returned resources of type alternativeDistributionKeys
   */
  'fields[alternativeDistributionKeys]'?: Array<'publicKey'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace AlternativeDistributionKeys {
  export {
    type AlternativeDistributionKey as AlternativeDistributionKey,
    type AlternativeDistributionKeyResponse as AlternativeDistributionKeyResponse,
    type AlternativeDistributionKeyListResponse as AlternativeDistributionKeyListResponse,
    type AlternativeDistributionKeyCreateParams as AlternativeDistributionKeyCreateParams,
    type AlternativeDistributionKeyRetrieveParams as AlternativeDistributionKeyRetrieveParams,
    type AlternativeDistributionKeyListParams as AlternativeDistributionKeyListParams,
  };
}
