// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as GameCenterMatchmakingTeamsAPI from '../game-center-matchmaking-teams';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as GameCenterMatchmakingQueuesAPI from '../game-center-matchmaking-queues/game-center-matchmaking-queues';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListMatchmakingQueuesParams,
  RelationshipListMatchmakingQueuesResponse,
  RelationshipListRulesParams,
  RelationshipListRulesResponse,
  RelationshipListTeamsParams,
  RelationshipListTeamsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as GameCenterMatchmakingRulesAPI from '../game-center-matchmaking-rules/game-center-matchmaking-rules';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterMatchmakingRuleSets extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: GameCenterMatchmakingRuleSetCreateParams,
    options?: RequestOptions,
  ): APIPromise<RuleSetResponse> {
    return this._client.post('/v1/gameCenterMatchmakingRuleSets', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterMatchmakingRuleSetRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RuleSetResponse> {
    return this._client.get(path`/v1/gameCenterMatchmakingRuleSets/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterMatchmakingRuleSetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RuleSetResponse> {
    return this._client.patch(path`/v1/gameCenterMatchmakingRuleSets/${id}`, { body, ...options });
  }

  list(
    query: GameCenterMatchmakingRuleSetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterMatchmakingRuleSetListResponse> {
    return this._client.get('/v1/gameCenterMatchmakingRuleSets', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterMatchmakingRuleSets/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listMatchmakingQueues(
    id: string,
    query: GameCenterMatchmakingRuleSetListMatchmakingQueuesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterMatchmakingQueuesAPI.MatchmakingQueuesResponse> {
    return this._client.get(path`/v1/gameCenterMatchmakingRuleSets/${id}/matchmakingQueues`, {
      query,
      ...options,
    });
  }

  listRules(
    id: string,
    query: GameCenterMatchmakingRuleSetListRulesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterMatchmakingRuleSetListRulesResponse> {
    return this._client.get(path`/v1/gameCenterMatchmakingRuleSets/${id}/rules`, { query, ...options });
  }

  listTeams(
    id: string,
    query: GameCenterMatchmakingRuleSetListTeamsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterMatchmakingRuleSetListTeamsResponse> {
    return this._client.get(path`/v1/gameCenterMatchmakingRuleSets/${id}/teams`, { query, ...options });
  }
}

export interface RuleSet {
  id: string;

  type: 'gameCenterMatchmakingRuleSets';

  attributes?: RuleSet.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: RuleSet.Relationships;
}

export namespace RuleSet {
  export interface Attributes {
    maxPlayers?: number;

    minPlayers?: number;

    referenceName?: string;

    ruleLanguageVersion?: number;
  }

  export interface Relationships {
    matchmakingQueues?: Relationships.MatchmakingQueues;

    rules?: Relationships.Rules;

    teams?: Relationships.Teams;
  }

  export namespace Relationships {
    export interface MatchmakingQueues {
      data?: Array<MatchmakingQueues.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace MatchmakingQueues {
      export interface Data {
        id: string;

        type: 'gameCenterMatchmakingQueues';
      }
    }

    export interface Rules {
      data?: Array<Rules.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Rules {
      export interface Data {
        id: string;

        type: 'gameCenterMatchmakingRules';
      }
    }

    export interface Teams {
      data?: Array<Teams.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Teams {
      export interface Data {
        id: string;

        type: 'gameCenterMatchmakingTeams';
      }
    }
  }
}

export interface RuleSetResponse {
  data: RuleSet;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | GameCenterMatchmakingTeamsAPI.GameCenterMatchmakingTeam
    | GameCenterMatchmakingRulesAPI.MatchmakingRule
    | GameCenterMatchmakingQueuesAPI.MatchmakingQueue
  >;
}

export interface GameCenterMatchmakingRuleSetListResponse {
  data: Array<RuleSet>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | GameCenterMatchmakingTeamsAPI.GameCenterMatchmakingTeam
    | GameCenterMatchmakingRulesAPI.MatchmakingRule
    | GameCenterMatchmakingQueuesAPI.MatchmakingQueue
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterMatchmakingRuleSetListRulesResponse {
  data: Array<GameCenterMatchmakingRulesAPI.MatchmakingRule>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterMatchmakingRuleSetListTeamsResponse {
  data: Array<GameCenterMatchmakingTeamsAPI.GameCenterMatchmakingTeam>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterMatchmakingRuleSetCreateParams {
  data: GameCenterMatchmakingRuleSetCreateParams.Data;
}

export namespace GameCenterMatchmakingRuleSetCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'gameCenterMatchmakingRuleSets';
  }

  export namespace Data {
    export interface Attributes {
      maxPlayers: number;

      minPlayers: number;

      referenceName: string;

      ruleLanguageVersion: number;
    }
  }
}

export interface GameCenterMatchmakingRuleSetRetrieveParams {
  /**
   * the fields to include for returned resources of type gameCenterMatchmakingQueues
   */
  'fields[gameCenterMatchmakingQueues]'?: Array<
    'referenceName' | 'classicMatchmakingBundleIds' | 'ruleSet' | 'experimentRuleSet'
  >;

  /**
   * the fields to include for returned resources of type gameCenterMatchmakingRules
   */
  'fields[gameCenterMatchmakingRules]'?: Array<
    'referenceName' | 'description' | 'type' | 'expression' | 'weight'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterMatchmakingRuleSets
   */
  'fields[gameCenterMatchmakingRuleSets]'?: Array<
    | 'referenceName'
    | 'ruleLanguageVersion'
    | 'minPlayers'
    | 'maxPlayers'
    | 'teams'
    | 'rules'
    | 'matchmakingQueues'
  >;

  /**
   * the fields to include for returned resources of type gameCenterMatchmakingTeams
   */
  'fields[gameCenterMatchmakingTeams]'?: Array<'referenceName' | 'minPlayers' | 'maxPlayers'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'teams' | 'rules' | 'matchmakingQueues'>;

  /**
   * maximum number of related matchmakingQueues returned (when they are included)
   */
  'limit[matchmakingQueues]'?: number;

  /**
   * maximum number of related rules returned (when they are included)
   */
  'limit[rules]'?: number;

  /**
   * maximum number of related teams returned (when they are included)
   */
  'limit[teams]'?: number;
}

export interface GameCenterMatchmakingRuleSetUpdateParams {
  data: GameCenterMatchmakingRuleSetUpdateParams.Data;
}

export namespace GameCenterMatchmakingRuleSetUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterMatchmakingRuleSets';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      maxPlayers?: number;

      minPlayers?: number;
    }
  }
}

export interface GameCenterMatchmakingRuleSetListParams {
  /**
   * the fields to include for returned resources of type gameCenterMatchmakingQueues
   */
  'fields[gameCenterMatchmakingQueues]'?: Array<
    'referenceName' | 'classicMatchmakingBundleIds' | 'ruleSet' | 'experimentRuleSet'
  >;

  /**
   * the fields to include for returned resources of type gameCenterMatchmakingRules
   */
  'fields[gameCenterMatchmakingRules]'?: Array<
    'referenceName' | 'description' | 'type' | 'expression' | 'weight'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterMatchmakingRuleSets
   */
  'fields[gameCenterMatchmakingRuleSets]'?: Array<
    | 'referenceName'
    | 'ruleLanguageVersion'
    | 'minPlayers'
    | 'maxPlayers'
    | 'teams'
    | 'rules'
    | 'matchmakingQueues'
  >;

  /**
   * the fields to include for returned resources of type gameCenterMatchmakingTeams
   */
  'fields[gameCenterMatchmakingTeams]'?: Array<'referenceName' | 'minPlayers' | 'maxPlayers'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'teams' | 'rules' | 'matchmakingQueues'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related matchmakingQueues returned (when they are included)
   */
  'limit[matchmakingQueues]'?: number;

  /**
   * maximum number of related rules returned (when they are included)
   */
  'limit[rules]'?: number;

  /**
   * maximum number of related teams returned (when they are included)
   */
  'limit[teams]'?: number;
}

export interface GameCenterMatchmakingRuleSetListMatchmakingQueuesParams {
  /**
   * the fields to include for returned resources of type gameCenterMatchmakingQueues
   */
  'fields[gameCenterMatchmakingQueues]'?: Array<
    'referenceName' | 'classicMatchmakingBundleIds' | 'ruleSet' | 'experimentRuleSet'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterMatchmakingRuleSets
   */
  'fields[gameCenterMatchmakingRuleSets]'?: Array<
    | 'referenceName'
    | 'ruleLanguageVersion'
    | 'minPlayers'
    | 'maxPlayers'
    | 'teams'
    | 'rules'
    | 'matchmakingQueues'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'ruleSet' | 'experimentRuleSet'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface GameCenterMatchmakingRuleSetListRulesParams {
  /**
   * the fields to include for returned resources of type gameCenterMatchmakingRules
   */
  'fields[gameCenterMatchmakingRules]'?: Array<
    'referenceName' | 'description' | 'type' | 'expression' | 'weight'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface GameCenterMatchmakingRuleSetListTeamsParams {
  /**
   * the fields to include for returned resources of type gameCenterMatchmakingTeams
   */
  'fields[gameCenterMatchmakingTeams]'?: Array<'referenceName' | 'minPlayers' | 'maxPlayers'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

GameCenterMatchmakingRuleSets.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterMatchmakingRuleSets {
  export {
    type RuleSet as RuleSet,
    type RuleSetResponse as RuleSetResponse,
    type GameCenterMatchmakingRuleSetListResponse as GameCenterMatchmakingRuleSetListResponse,
    type GameCenterMatchmakingRuleSetListRulesResponse as GameCenterMatchmakingRuleSetListRulesResponse,
    type GameCenterMatchmakingRuleSetListTeamsResponse as GameCenterMatchmakingRuleSetListTeamsResponse,
    type GameCenterMatchmakingRuleSetCreateParams as GameCenterMatchmakingRuleSetCreateParams,
    type GameCenterMatchmakingRuleSetRetrieveParams as GameCenterMatchmakingRuleSetRetrieveParams,
    type GameCenterMatchmakingRuleSetUpdateParams as GameCenterMatchmakingRuleSetUpdateParams,
    type GameCenterMatchmakingRuleSetListParams as GameCenterMatchmakingRuleSetListParams,
    type GameCenterMatchmakingRuleSetListMatchmakingQueuesParams as GameCenterMatchmakingRuleSetListMatchmakingQueuesParams,
    type GameCenterMatchmakingRuleSetListRulesParams as GameCenterMatchmakingRuleSetListRulesParams,
    type GameCenterMatchmakingRuleSetListTeamsParams as GameCenterMatchmakingRuleSetListTeamsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListMatchmakingQueuesResponse as RelationshipListMatchmakingQueuesResponse,
    type RelationshipListRulesResponse as RelationshipListRulesResponse,
    type RelationshipListTeamsResponse as RelationshipListTeamsResponse,
    type RelationshipListMatchmakingQueuesParams as RelationshipListMatchmakingQueuesParams,
    type RelationshipListRulesParams as RelationshipListRulesParams,
    type RelationshipListTeamsParams as RelationshipListTeamsParams,
  };
}
