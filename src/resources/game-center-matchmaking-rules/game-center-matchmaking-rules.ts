// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as MetricsAPI from './metrics';
import {
  MetricRetrieveBooleanRuleResultsParams,
  MetricRetrieveBooleanRuleResultsResponse,
  MetricRetrieveNumberRuleResultsParams,
  MetricRetrieveNumberRuleResultsResponse,
  MetricRetrieveRuleErrorsParams,
  MetricRetrieveRuleErrorsResponse,
  Metrics,
} from './metrics';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterMatchmakingRules extends APIResource {
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);

  create(
    body: GameCenterMatchmakingRuleCreateParams,
    options?: RequestOptions,
  ): APIPromise<MatchmakingRuleResponse> {
    return this._client.post('/v1/gameCenterMatchmakingRules', { body, ...options });
  }

  update(
    id: string,
    body: GameCenterMatchmakingRuleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MatchmakingRuleResponse> {
    return this._client.patch(path`/v1/gameCenterMatchmakingRules/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterMatchmakingRules/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MatchmakingRule {
  id: string;

  type: 'gameCenterMatchmakingRules';

  attributes?: MatchmakingRule.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace MatchmakingRule {
  export interface Attributes {
    description?: string;

    expression?: string;

    referenceName?: string;

    type?: 'COMPATIBLE' | 'DISTANCE' | 'MATCH' | 'TEAM';

    weight?: number;
  }
}

export interface MatchmakingRuleResponse {
  data: MatchmakingRule;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface GameCenterMatchmakingRuleCreateParams {
  data: GameCenterMatchmakingRuleCreateParams.Data;
}

export namespace GameCenterMatchmakingRuleCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'gameCenterMatchmakingRules';
  }

  export namespace Data {
    export interface Attributes {
      description: string;

      expression: string;

      referenceName: string;

      type: 'COMPATIBLE' | 'DISTANCE' | 'MATCH' | 'TEAM';

      weight?: number;
    }

    export interface Relationships {
      ruleSet: Relationships.RuleSet;
    }

    export namespace Relationships {
      export interface RuleSet {
        data: RuleSet.Data;
      }

      export namespace RuleSet {
        export interface Data {
          id: string;

          type: 'gameCenterMatchmakingRuleSets';
        }
      }
    }
  }
}

export interface GameCenterMatchmakingRuleUpdateParams {
  data: GameCenterMatchmakingRuleUpdateParams.Data;
}

export namespace GameCenterMatchmakingRuleUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterMatchmakingRules';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      description?: string;

      expression?: string;

      weight?: number;
    }
  }
}

GameCenterMatchmakingRules.Metrics = Metrics;

export declare namespace GameCenterMatchmakingRules {
  export {
    type MatchmakingRule as MatchmakingRule,
    type MatchmakingRuleResponse as MatchmakingRuleResponse,
    type GameCenterMatchmakingRuleCreateParams as GameCenterMatchmakingRuleCreateParams,
    type GameCenterMatchmakingRuleUpdateParams as GameCenterMatchmakingRuleUpdateParams,
  };

  export {
    Metrics as Metrics,
    type MetricRetrieveBooleanRuleResultsResponse as MetricRetrieveBooleanRuleResultsResponse,
    type MetricRetrieveNumberRuleResultsResponse as MetricRetrieveNumberRuleResultsResponse,
    type MetricRetrieveRuleErrorsResponse as MetricRetrieveRuleErrorsResponse,
    type MetricRetrieveBooleanRuleResultsParams as MetricRetrieveBooleanRuleResultsParams,
    type MetricRetrieveNumberRuleResultsParams as MetricRetrieveNumberRuleResultsParams,
    type MetricRetrieveRuleErrorsParams as MetricRetrieveRuleErrorsParams,
  };
}
