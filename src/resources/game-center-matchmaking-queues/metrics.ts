// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Metrics extends APIResource {
  getExperimentQueueSizes(
    id: string,
    query: MetricGetExperimentQueueSizesParams,
    options?: RequestOptions,
  ): APIPromise<QueueSizesV1MetricResponse> {
    return this._client.get(
      path`/v1/gameCenterMatchmakingQueues/${id}/metrics/experimentMatchmakingQueueSizes`,
      { query, ...options },
    );
  }

  getExperimentRequests(
    id: string,
    query: MetricGetExperimentRequestsParams,
    options?: RequestOptions,
  ): APIPromise<QueueRequestsV1MetricResponse> {
    return this._client.get(
      path`/v1/gameCenterMatchmakingQueues/${id}/metrics/experimentMatchmakingRequests`,
      { query, ...options },
    );
  }

  getQueueSizes(
    id: string,
    query: MetricGetQueueSizesParams,
    options?: RequestOptions,
  ): APIPromise<QueueSizesV1MetricResponse> {
    return this._client.get(path`/v1/gameCenterMatchmakingQueues/${id}/metrics/matchmakingQueueSizes`, {
      query,
      ...options,
    });
  }

  getRequests(
    id: string,
    query: MetricGetRequestsParams,
    options?: RequestOptions,
  ): APIPromise<QueueRequestsV1MetricResponse> {
    return this._client.get(path`/v1/gameCenterMatchmakingQueues/${id}/metrics/matchmakingRequests`, {
      query,
      ...options,
    });
  }

  getSessions(
    id: string,
    query: MetricGetSessionsParams,
    options?: RequestOptions,
  ): APIPromise<MetricGetSessionsResponse> {
    return this._client.get(path`/v1/gameCenterMatchmakingQueues/${id}/metrics/matchmakingSessions`, {
      query,
      ...options,
    });
  }
}

export interface QueueRequestsV1MetricResponse {
  data: Array<QueueRequestsV1MetricResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace QueueRequestsV1MetricResponse {
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
      gameCenterDetail?: Dimensions.GameCenterDetail;

      result?: Dimensions.Result;
    }

    export namespace Dimensions {
      export interface GameCenterDetail {
        data?: string;

        links?: GameCenterDetail.Links;
      }

      export namespace GameCenterDetail {
        export interface Links {
          groupBy?: string;

          related?: string;
        }
      }

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

export interface QueueSizesV1MetricResponse {
  data: Array<QueueSizesV1MetricResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace QueueSizesV1MetricResponse {
  export interface Data {
    dataPoints?: Data.DataPoints;

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
        averageNumberOfRequests?: number;

        count?: number;

        p50NumberOfRequests?: number;

        p95NumberOfRequests?: number;
      }
    }
  }
}

export interface MetricGetSessionsResponse {
  data: Array<MetricGetSessionsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace MetricGetSessionsResponse {
  export interface Data {
    dataPoints?: Data.DataPoints;

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
        averagePlayerCount?: number;

        count?: number;

        p50PlayerCount?: number;

        p95PlayerCount?: number;
      }
    }
  }
}

export interface MetricGetExperimentQueueSizesParams {
  /**
   * the granularity of the per-group dataset
   */
  granularity: 'P1D' | 'PT1H' | 'PT15M';

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
    | 'averageNumberOfRequests'
    | '-averageNumberOfRequests'
    | 'p50NumberOfRequests'
    | '-p50NumberOfRequests'
    | 'p95NumberOfRequests'
    | '-p95NumberOfRequests'
  >;
}

export interface MetricGetExperimentRequestsParams {
  /**
   * the granularity of the per-group dataset
   */
  granularity: 'P1D' | 'PT1H' | 'PT15M';

  /**
   * filter by 'gameCenterDetail' relationship dimension
   */
  'filter[gameCenterDetail]'?: string;

  /**
   * filter by 'result' attribute dimension
   */
  'filter[result]'?: 'MATCHED' | 'CANCELED' | 'EXPIRED';

  /**
   * the dimension by which to group the results
   */
  groupBy?: Array<'result' | 'gameCenterDetail'>;

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

export interface MetricGetQueueSizesParams {
  /**
   * the granularity of the per-group dataset
   */
  granularity: 'P1D' | 'PT1H' | 'PT15M';

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
    | 'averageNumberOfRequests'
    | '-averageNumberOfRequests'
    | 'p50NumberOfRequests'
    | '-p50NumberOfRequests'
    | 'p95NumberOfRequests'
    | '-p95NumberOfRequests'
  >;
}

export interface MetricGetRequestsParams {
  /**
   * the granularity of the per-group dataset
   */
  granularity: 'P1D' | 'PT1H' | 'PT15M';

  /**
   * filter by 'gameCenterDetail' relationship dimension
   */
  'filter[gameCenterDetail]'?: string;

  /**
   * filter by 'result' attribute dimension
   */
  'filter[result]'?: 'MATCHED' | 'CANCELED' | 'EXPIRED';

  /**
   * the dimension by which to group the results
   */
  groupBy?: Array<'result' | 'gameCenterDetail'>;

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

export interface MetricGetSessionsParams {
  /**
   * the granularity of the per-group dataset
   */
  granularity: 'P1D' | 'PT1H' | 'PT15M';

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
    | 'averagePlayerCount'
    | '-averagePlayerCount'
    | 'p50PlayerCount'
    | '-p50PlayerCount'
    | 'p95PlayerCount'
    | '-p95PlayerCount'
  >;
}

export declare namespace Metrics {
  export {
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
