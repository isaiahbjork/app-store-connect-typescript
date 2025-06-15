// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Actors extends APIResource {
  retrieve(
    id: string,
    query: ActorRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActorRetrieveResponse> {
    return this._client.get(path`/v1/actors/${id}`, { query, ...options });
  }

  list(query: ActorListParams, options?: RequestOptions): APIPromise<ActorListResponse> {
    return this._client.get('/v1/actors', { query, ...options });
  }
}

export interface Actor {
  id: string;

  type: 'actors';

  attributes?: Actor.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace Actor {
  export interface Attributes {
    actorType?: 'USER' | 'API_KEY' | 'XCODE_CLOUD' | 'APPLE';

    apiKeyId?: string;

    userEmail?: string;

    userFirstName?: string;

    userLastName?: string;
  }
}

export interface PagedDocumentLinks {
  self: string;

  first?: string;

  next?: string;
}

export interface PagingInformation {
  paging: PagingInformation.Paging;
}

export namespace PagingInformation {
  export interface Paging {
    limit: number;

    nextCursor?: string;

    total?: number;
  }
}

export interface ActorRetrieveResponse {
  data: Actor;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface ActorListResponse {
  data: Array<Actor>;

  links: PagedDocumentLinks;

  meta?: PagingInformation;
}

export interface ActorRetrieveParams {
  /**
   * the fields to include for returned resources of type actors
   */
  'fields[actors]'?: Array<'actorType' | 'userFirstName' | 'userLastName' | 'userEmail' | 'apiKeyId'>;
}

export interface ActorListParams {
  /**
   * filter by id(s)
   */
  'filter[id]': Array<string>;

  /**
   * the fields to include for returned resources of type actors
   */
  'fields[actors]'?: Array<'actorType' | 'userFirstName' | 'userLastName' | 'userEmail' | 'apiKeyId'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Actors {
  export {
    type Actor as Actor,
    type PagedDocumentLinks as PagedDocumentLinks,
    type PagingInformation as PagingInformation,
    type ActorRetrieveResponse as ActorRetrieveResponse,
    type ActorListResponse as ActorListResponse,
    type ActorRetrieveParams as ActorRetrieveParams,
    type ActorListParams as ActorListParams,
  };
}
