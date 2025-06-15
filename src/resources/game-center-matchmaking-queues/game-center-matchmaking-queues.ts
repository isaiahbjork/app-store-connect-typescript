// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as MetricsAPI from './metrics';
import {
  MetricGetExperimentQueueSizesParams,
  MetricGetExperimentRequestsParams,
  MetricGetQueueSizesParams,
  MetricGetRequestsParams,
  MetricGetSessionsParams,
  MetricGetSessionsResponse,
  Metrics,
  QueueRequestsV1MetricResponse,
  QueueSizesV1MetricResponse,
} from './metrics';
import * as GameCenterMatchmakingRuleSetsAPI from '../game-center-matchmaking-rule-sets/game-center-matchmaking-rule-sets';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterMatchmakingQueues extends APIResource {
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);

  create(
    body: GameCenterMatchmakingQueueCreateParams,
    options?: RequestOptions,
  ): APIPromise<MatchmakingQueueResponse> {
    return this._client.post('/v1/gameCenterMatchmakingQueues', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterMatchmakingQueueRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MatchmakingQueueResponse> {
    return this._client.get(path`/v1/gameCenterMatchmakingQueues/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterMatchmakingQueueUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MatchmakingQueueResponse> {
    return this._client.patch(path`/v1/gameCenterMatchmakingQueues/${id}`, { body, ...options });
  }

  list(
    query: GameCenterMatchmakingQueueListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MatchmakingQueuesResponse> {
    return this._client.get('/v1/gameCenterMatchmakingQueues', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterMatchmakingQueues/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MatchmakingQueue {
  id: string;

  type: 'gameCenterMatchmakingQueues';

  attributes?: MatchmakingQueue.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: MatchmakingQueue.Relationships;
}

export namespace MatchmakingQueue {
  export interface Attributes {
    classicMatchmakingBundleIds?: Array<string>;

    referenceName?: string;
  }

  export interface Relationships {
    experimentRuleSet?: Relationships.ExperimentRuleSet;

    ruleSet?: Relationships.RuleSet;
  }

  export namespace Relationships {
    export interface ExperimentRuleSet {
      data?: ExperimentRuleSet.Data;
    }

    export namespace ExperimentRuleSet {
      export interface Data {
        id: string;

        type: 'gameCenterMatchmakingRuleSets';
      }
    }

    export interface RuleSet {
      data?: RuleSet.Data;
    }

    export namespace RuleSet {
      export interface Data {
        id: string;

        type: 'gameCenterMatchmakingRuleSets';
      }
    }
  }
}

export interface MatchmakingQueueResponse {
  data: MatchmakingQueue;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<GameCenterMatchmakingRuleSetsAPI.RuleSet>;
}

export interface MatchmakingQueuesResponse {
  data: Array<MatchmakingQueue>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<GameCenterMatchmakingRuleSetsAPI.RuleSet>;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterMatchmakingQueueCreateParams {
  data: GameCenterMatchmakingQueueCreateParams.Data;
}

export namespace GameCenterMatchmakingQueueCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'gameCenterMatchmakingQueues';
  }

  export namespace Data {
    export interface Attributes {
      referenceName: string;

      classicMatchmakingBundleIds?: Array<string>;
    }

    export interface Relationships {
      ruleSet: Relationships.RuleSet;

      experimentRuleSet?: Relationships.ExperimentRuleSet;
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

      export interface ExperimentRuleSet {
        data?: ExperimentRuleSet.Data;
      }

      export namespace ExperimentRuleSet {
        export interface Data {
          id: string;

          type: 'gameCenterMatchmakingRuleSets';
        }
      }
    }
  }
}

export interface GameCenterMatchmakingQueueRetrieveParams {
  /**
   * the fields to include for returned resources of type gameCenterMatchmakingQueues
   */
  'fields[gameCenterMatchmakingQueues]'?: Array<
    'referenceName' | 'classicMatchmakingBundleIds' | 'ruleSet' | 'experimentRuleSet'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'ruleSet' | 'experimentRuleSet'>;
}

export interface GameCenterMatchmakingQueueUpdateParams {
  data: GameCenterMatchmakingQueueUpdateParams.Data;
}

export namespace GameCenterMatchmakingQueueUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterMatchmakingQueues';

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      classicMatchmakingBundleIds?: Array<string>;
    }

    export interface Relationships {
      experimentRuleSet?: Relationships.ExperimentRuleSet;

      ruleSet?: Relationships.RuleSet;
    }

    export namespace Relationships {
      export interface ExperimentRuleSet {
        data?: ExperimentRuleSet.Data;
      }

      export namespace ExperimentRuleSet {
        export interface Data {
          id: string;

          type: 'gameCenterMatchmakingRuleSets';
        }
      }

      export interface RuleSet {
        data?: RuleSet.Data;
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

export interface GameCenterMatchmakingQueueListParams {
  /**
   * the fields to include for returned resources of type gameCenterMatchmakingQueues
   */
  'fields[gameCenterMatchmakingQueues]'?: Array<
    'referenceName' | 'classicMatchmakingBundleIds' | 'ruleSet' | 'experimentRuleSet'
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

GameCenterMatchmakingQueues.Metrics = Metrics;

export declare namespace GameCenterMatchmakingQueues {
  export {
    type MatchmakingQueue as MatchmakingQueue,
    type MatchmakingQueueResponse as MatchmakingQueueResponse,
    type MatchmakingQueuesResponse as MatchmakingQueuesResponse,
    type GameCenterMatchmakingQueueCreateParams as GameCenterMatchmakingQueueCreateParams,
    type GameCenterMatchmakingQueueRetrieveParams as GameCenterMatchmakingQueueRetrieveParams,
    type GameCenterMatchmakingQueueUpdateParams as GameCenterMatchmakingQueueUpdateParams,
    type GameCenterMatchmakingQueueListParams as GameCenterMatchmakingQueueListParams,
  };

  export {
    Metrics as Metrics,
    type QueueRequestsV1MetricResponse as QueueRequestsV1MetricResponse,
    type QueueSizesV1MetricResponse as QueueSizesV1MetricResponse,
    type MetricGetSessionsResponse as MetricGetSessionsResponse,
    type MetricGetExperimentQueueSizesParams as MetricGetExperimentQueueSizesParams,
    type MetricGetExperimentRequestsParams as MetricGetExperimentRequestsParams,
    type MetricGetQueueSizesParams as MetricGetQueueSizesParams,
    type MetricGetRequestsParams as MetricGetRequestsParams,
    type MetricGetSessionsParams as MetricGetSessionsParams,
  };
}
