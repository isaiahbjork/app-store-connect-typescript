// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Metrics extends APIResource {
  retrieveBooleanRuleResults(
    id: string,
    query: MetricRetrieveBooleanRuleResultsParams,
    options?: RequestOptions,
  ): APIPromise<MetricRetrieveBooleanRuleResultsResponse> {
    return this._client.get(
      path`/v1/gameCenterMatchmakingRules/${id}/metrics/matchmakingBooleanRuleResults`,
      { query, ...options },
    );
  }

  retrieveNumberRuleResults(
    id: string,
    query: MetricRetrieveNumberRuleResultsParams,
    options?: RequestOptions,
  ): APIPromise<MetricRetrieveNumberRuleResultsResponse> {
    return this._client.get(path`/v1/gameCenterMatchmakingRules/${id}/metrics/matchmakingNumberRuleResults`, {
      query,
      ...options,
    });
  }

  retrieveRuleErrors(
    id: string,
    query: MetricRetrieveRuleErrorsParams,
    options?: RequestOptions,
  ): APIPromise<MetricRetrieveRuleErrorsResponse> {
    return this._client.get(path`/v1/gameCenterMatchmakingRules/${id}/metrics/matchmakingRuleErrors`, {
      query,
      ...options,
    });
  }
}

export interface MetricRetrieveBooleanRuleResultsResponse {
  data: Array<MetricRetrieveBooleanRuleResultsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace MetricRetrieveBooleanRuleResultsResponse {
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
        count?: number;
      }
    }

    export interface Dimensions {
      gameCenterMatchmakingQueue?: Dimensions.GameCenterMatchmakingQueue;

      result?: Dimensions.Result;
    }

    export namespace Dimensions {
      export interface GameCenterMatchmakingQueue {
        data?: string;

        links?: GameCenterMatchmakingQueue.Links;
      }

      export namespace GameCenterMatchmakingQueue {
        export interface Links {
          groupBy?: string;

          related?: string;
        }
      }

      export interface Result {
        data?: string;

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

export interface MetricRetrieveNumberRuleResultsResponse {
  data: Array<MetricRetrieveNumberRuleResultsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace MetricRetrieveNumberRuleResultsResponse {
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
        averageResult?: number;

        count?: number;

        p50Result?: number;

        p95Result?: number;
      }
    }

    export interface Dimensions {
      gameCenterMatchmakingQueue?: Dimensions.GameCenterMatchmakingQueue;
    }

    export namespace Dimensions {
      export interface GameCenterMatchmakingQueue {
        data?: string;

        links?: GameCenterMatchmakingQueue.Links;
      }

      export namespace GameCenterMatchmakingQueue {
        export interface Links {
          groupBy?: string;

          related?: string;
        }
      }
    }
  }
}

export interface MetricRetrieveRuleErrorsResponse {
  data: Array<MetricRetrieveRuleErrorsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace MetricRetrieveRuleErrorsResponse {
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
        count?: number;
      }
    }

    export interface Dimensions {
      gameCenterMatchmakingQueue?: Dimensions.GameCenterMatchmakingQueue;
    }

    export namespace Dimensions {
      export interface GameCenterMatchmakingQueue {
        data?: string;

        links?: GameCenterMatchmakingQueue.Links;
      }

      export namespace GameCenterMatchmakingQueue {
        export interface Links {
          groupBy?: string;

          related?: string;
        }
      }
    }
  }
}

export interface MetricRetrieveBooleanRuleResultsParams {
  /**
   * the granularity of the per-group dataset
   */
  granularity: 'P1D' | 'PT1H' | 'PT15M';

  /**
   * filter by 'gameCenterMatchmakingQueue' relationship dimension
   */
  'filter[gameCenterMatchmakingQueue]'?: string;

  /**
   * filter by 'result' attribute dimension
   */
  'filter[result]'?: string;

  /**
   * the dimension by which to group the results
   */
  groupBy?: Array<'result' | 'gameCenterMatchmakingQueue'>;

  /**
   * maximum number of groups to return per page
   */
  limit?: number;

  /**
   * comma-separated list of sort expressions; metrics will be sorted as specified
   */
  sort?: Array<'count' | '-count'>;
}

export interface MetricRetrieveNumberRuleResultsParams {
  /**
   * the granularity of the per-group dataset
   */
  granularity: 'P1D' | 'PT1H' | 'PT15M';

  /**
   * filter by 'gameCenterMatchmakingQueue' relationship dimension
   */
  'filter[gameCenterMatchmakingQueue]'?: string;

  /**
   * the dimension by which to group the results
   */
  groupBy?: Array<'gameCenterMatchmakingQueue'>;

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
    | 'averageResult'
    | '-averageResult'
    | 'p50Result'
    | '-p50Result'
    | 'p95Result'
    | '-p95Result'
  >;
}

export interface MetricRetrieveRuleErrorsParams {
  /**
   * the granularity of the per-group dataset
   */
  granularity: 'P1D' | 'PT1H' | 'PT15M';

  /**
   * filter by 'gameCenterMatchmakingQueue' relationship dimension
   */
  'filter[gameCenterMatchmakingQueue]'?: string;

  /**
   * the dimension by which to group the results
   */
  groupBy?: Array<'gameCenterMatchmakingQueue'>;

  /**
   * maximum number of groups to return per page
   */
  limit?: number;

  /**
   * comma-separated list of sort expressions; metrics will be sorted as specified
   */
  sort?: Array<'count' | '-count'>;
}

export declare namespace Metrics {
  export {
    type MetricRetrieveBooleanRuleResultsResponse as MetricRetrieveBooleanRuleResultsResponse,
    type MetricRetrieveNumberRuleResultsResponse as MetricRetrieveNumberRuleResultsResponse,
    type MetricRetrieveRuleErrorsResponse as MetricRetrieveRuleErrorsResponse,
    type MetricRetrieveBooleanRuleResultsParams as MetricRetrieveBooleanRuleResultsParams,
    type MetricRetrieveNumberRuleResultsParams as MetricRetrieveNumberRuleResultsParams,
    type MetricRetrieveRuleErrorsParams as MetricRetrieveRuleErrorsParams,
  };
}
