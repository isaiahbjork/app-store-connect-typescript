// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Metrics extends APIResource {
  retrieveClassicMatchmakingRequests(
    id: string,
    query: MetricRetrieveClassicMatchmakingRequestsParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterMatchmakingAppRequestsV1Metric> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/metrics/classicMatchmakingRequests`, {
      query,
      ...options,
    });
  }

  retrieveRuleBasedMatchmakingRequests(
    id: string,
    query: MetricRetrieveRuleBasedMatchmakingRequestsParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterMatchmakingAppRequestsV1Metric> {
    return this._client.get(path`/v1/gameCenterDetails/${id}/metrics/ruleBasedMatchmakingRequests`, {
      query,
      ...options,
    });
  }
}

export interface GameCenterMatchmakingAppRequestsV1Metric {
  data: Array<GameCenterMatchmakingAppRequestsV1Metric.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace GameCenterMatchmakingAppRequestsV1Metric {
  export interface Data {
    dataPoints?: Data.DataPoints;

    dimensions?: Data.Dimensions;

    granularity?: 'P1D' | 'PT1H' | 'PT15M';
  }

  export namespace Data {
    export interface DataPoints {
      end?: string;

      start?: string;

      values?: DataPoints.Values;
    }

    export namespace DataPoints {
      export interface Values {
        averageSecondsInQueue?: number;

        count?: number;

        p50SecondsInQueue?: number;

        p95SecondsInQueue?: number;
      }
    }

    export interface Dimensions {
      result?: Dimensions.Result;
    }

    export namespace Dimensions {
      export interface Result {
        data?: 'MATCHED' | 'CANCELED' | 'EXPIRED';

        links?: Result.Links;
      }

      export namespace Result {
        export interface Links {
          groupBy?: string;
        }
      }
    }
  }
}

export interface MetricRetrieveClassicMatchmakingRequestsParams {
  /**
   * the granularity of the per-group dataset
   */
  granularity: 'P1D' | 'PT1H' | 'PT15M';

  /**
   * filter by 'result' attribute dimension
   */
  'filter[result]'?: 'MATCHED' | 'CANCELED' | 'EXPIRED';

  /**
   * the dimension by which to group the results
   */
  groupBy?: Array<'result'>;

  /**
   * maximum number of groups to return per page
   */
  limit?: number;

  /**
   * comma-separated list of sort expressions; metrics will be sorted as specified
   */
  sort?: Array<
    | 'count'
    | '-count'
    | 'averageSecondsInQueue'
    | '-averageSecondsInQueue'
    | 'p50SecondsInQueue'
    | '-p50SecondsInQueue'
    | 'p95SecondsInQueue'
    | '-p95SecondsInQueue'
  >;
}

export interface MetricRetrieveRuleBasedMatchmakingRequestsParams {
  /**
   * the granularity of the per-group dataset
   */
  granularity: 'P1D' | 'PT1H' | 'PT15M';

  /**
   * filter by 'result' attribute dimension
   */
  'filter[result]'?: 'MATCHED' | 'CANCELED' | 'EXPIRED';

  /**
   * the dimension by which to group the results
   */
  groupBy?: Array<'result'>;

  /**
   * maximum number of groups to return per page
   */
  limit?: number;

  /**
   * comma-separated list of sort expressions; metrics will be sorted as specified
   */
  sort?: Array<
    | 'count'
    | '-count'
    | 'averageSecondsInQueue'
    | '-averageSecondsInQueue'
    | 'p50SecondsInQueue'
    | '-p50SecondsInQueue'
    | 'p95SecondsInQueue'
    | '-p95SecondsInQueue'
  >;
}

export declare namespace Metrics {
  export {
    type GameCenterMatchmakingAppRequestsV1Metric as GameCenterMatchmakingAppRequestsV1Metric,
    type MetricRetrieveClassicMatchmakingRequestsParams as MetricRetrieveClassicMatchmakingRequestsParams,
    type MetricRetrieveRuleBasedMatchmakingRequestsParams as MetricRetrieveRuleBasedMatchmakingRequestsParams,
  };
}
