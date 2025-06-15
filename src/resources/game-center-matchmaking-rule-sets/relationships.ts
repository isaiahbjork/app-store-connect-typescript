// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  listMatchmakingQueues(
    id: string,
    query: RelationshipListMatchmakingQueuesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListMatchmakingQueuesResponse> {
    return this._client.get(path`/v1/gameCenterMatchmakingRuleSets/${id}/relationships/matchmakingQueues`, {
      query,
      ...options,
    });
  }

  listRules(
    id: string,
    query: RelationshipListRulesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListRulesResponse> {
    return this._client.get(path`/v1/gameCenterMatchmakingRuleSets/${id}/relationships/rules`, {
      query,
      ...options,
    });
  }

  listTeams(
    id: string,
    query: RelationshipListTeamsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListTeamsResponse> {
    return this._client.get(path`/v1/gameCenterMatchmakingRuleSets/${id}/relationships/teams`, {
      query,
      ...options,
    });
  }
}

export interface RelationshipListMatchmakingQueuesResponse {
  data: Array<RelationshipListMatchmakingQueuesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListMatchmakingQueuesResponse {
  export interface Data {
    id: string;

    type: 'gameCenterMatchmakingQueues';
  }
}

export interface RelationshipListRulesResponse {
  data: Array<RelationshipListRulesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListRulesResponse {
  export interface Data {
    id: string;

    type: 'gameCenterMatchmakingRules';
  }
}

export interface RelationshipListTeamsResponse {
  data: Array<RelationshipListTeamsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListTeamsResponse {
  export interface Data {
    id: string;

    type: 'gameCenterMatchmakingTeams';
  }
}

export interface RelationshipListMatchmakingQueuesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListRulesParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListTeamsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace Relationships {
  export {
    type RelationshipListMatchmakingQueuesResponse as RelationshipListMatchmakingQueuesResponse,
    type RelationshipListRulesResponse as RelationshipListRulesResponse,
    type RelationshipListTeamsResponse as RelationshipListTeamsResponse,
    type RelationshipListMatchmakingQueuesParams as RelationshipListMatchmakingQueuesParams,
    type RelationshipListRulesParams as RelationshipListRulesParams,
    type RelationshipListTeamsParams as RelationshipListTeamsParams,
  };
}
