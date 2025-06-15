// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import * as BetaTestersAPI from '../beta-testers/beta-testers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Metrics extends APIResource {
  retrieveBetaTesterUsages(
    id: string,
    query: MetricRetrieveBetaTesterUsagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppsBetaTesterUsagesV1MetricResponse> {
    return this._client.get(path`/v1/apps/${id}/metrics/betaTesterUsages`, { query, ...options });
  }
}

export interface AppsBetaTesterUsagesV1MetricResponse {
  data: Array<AppsBetaTesterUsagesV1MetricResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<BetaTestersAPI.BetaTester>;

  meta?: ActorsAPI.PagingInformation;
}

export namespace AppsBetaTesterUsagesV1MetricResponse {
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
      betaTesters?: Dimensions.BetaTesters;
    }

    export namespace Dimensions {
      export interface BetaTesters {
        data?: string;

        links?: BetaTesters.Links;
      }

      export namespace BetaTesters {
        export interface Links {
          groupBy?: string;

          related?: string;
        }
      }
    }
  }
}

export interface MetricRetrieveBetaTesterUsagesParams {
  /**
   * filter by 'betaTesters' relationship dimension
   */
  'filter[betaTesters]'?: string;

  /**
   * the dimension by which to group the results
   */
  groupBy?: Array<'betaTesters'>;

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
    type AppsBetaTesterUsagesV1MetricResponse as AppsBetaTesterUsagesV1MetricResponse,
    type MetricRetrieveBetaTesterUsagesParams as MetricRetrieveBetaTesterUsagesParams,
  };
}
