// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Metrics extends APIResource {
  getBetaTesterUsages(
    id: string,
    query: MetricGetBetaTesterUsagesParams,
    options?: RequestOptions,
  ): APIPromise<MetricGetBetaTesterUsagesResponse> {
    return this._client.get(path`/v1/betaTesters/${id}/metrics/betaTesterUsages`, { query, ...options });
  }
}

export interface MetricGetBetaTesterUsagesResponse {
  data: Array<MetricGetBetaTesterUsagesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace MetricGetBetaTesterUsagesResponse {
  export interface Data {
    dataPoints?: Data.DataPoints;

    dimensions?: Data.Dimensions;
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

        sessionCount?: number;
      }
    }

    export interface Dimensions {
      apps?: Dimensions.Apps;
    }

    export namespace Dimensions {
      export interface Apps {
        data?: string;

        links?: Apps.Links;
      }

      export namespace Apps {
        export interface Links {
          groupBy?: string;

          related?: string;
        }
      }
    }
  }
}

export interface MetricGetBetaTesterUsagesParams {
  /**
   * filter by 'apps' relationship dimension
   */
  'filter[apps]': string;

  /**
   * maximum number of groups to return per page
   */
  limit?: number;

  /**
   * the duration of the reporting period
   */
  period?: 'P7D' | 'P30D' | 'P90D' | 'P365D';
}

export declare namespace Metrics {
  export {
    type MetricGetBetaTesterUsagesResponse as MetricGetBetaTesterUsagesResponse,
    type MetricGetBetaTesterUsagesParams as MetricGetBetaTesterUsagesParams,
  };
}
