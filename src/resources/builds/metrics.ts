// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Metrics extends APIResource {
  retrieveBetaBuildUsages(
    id: string,
    query: MetricRetrieveBetaBuildUsagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MetricRetrieveBetaBuildUsagesResponse> {
    return this._client.get(path`/v1/builds/${id}/metrics/betaBuildUsages`, { query, ...options });
  }
}

export interface MetricRetrieveBetaBuildUsagesResponse {
  data: Array<MetricRetrieveBetaBuildUsagesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace MetricRetrieveBetaBuildUsagesResponse {
  export interface Data {
    dataPoints?: Data.DataPoints;
  }

  export namespace Data {
    export interface DataPoints {
      end?: string;

      start?: string;

      values?: DataPoints.Values;
    }

    export namespace DataPoints {
      export interface Values {
        crashCount?: number;

        feedbackCount?: number;

        installCount?: number;

        inviteCount?: number;

        sessionCount?: number;
      }
    }
  }
}

export interface MetricRetrieveBetaBuildUsagesParams {
  /**
   * maximum number of groups to return per page
   */
  limit?: number;
}

export declare namespace Metrics {
  export {
    type MetricRetrieveBetaBuildUsagesResponse as MetricRetrieveBetaBuildUsagesResponse,
    type MetricRetrieveBetaBuildUsagesParams as MetricRetrieveBetaBuildUsagesParams,
  };
}
