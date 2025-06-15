// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import * as MetricsAPI from '../apps/metrics';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Metrics extends APIResource {
  listBetaTesterUsages(
    id: string,
    query: MetricListBetaTesterUsagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MetricsAPI.AppsBetaTesterUsagesV1MetricResponse> {
    return this._client.get(path`/v1/betaGroups/${id}/metrics/betaTesterUsages`, { query, ...options });
  }

  listPublicLinkUsages(
    id: string,
    query: MetricListPublicLinkUsagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MetricListPublicLinkUsagesResponse> {
    return this._client.get(path`/v1/betaGroups/${id}/metrics/publicLinkUsages`, { query, ...options });
  }
}

export interface MetricListPublicLinkUsagesResponse {
  data: Array<MetricListPublicLinkUsagesResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace MetricListPublicLinkUsagesResponse {
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
        acceptedCount?: number;

        didNotAcceptCount?: number;

        didNotMeetCriteriaCount?: number;

        notClearRatio?: number;

        notInterestingRatio?: number;

        notRelevantRatio?: number;

        viewCount?: number;
      }
    }
  }
}

export interface MetricListBetaTesterUsagesParams {
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

export interface MetricListPublicLinkUsagesParams {
  /**
   * maximum number of groups to return per page
   */
  limit?: number;
}

export declare namespace Metrics {
  export {
    type MetricListPublicLinkUsagesResponse as MetricListPublicLinkUsagesResponse,
    type MetricListBetaTesterUsagesParams as MetricListBetaTesterUsagesParams,
    type MetricListPublicLinkUsagesParams as MetricListPublicLinkUsagesParams,
  };
}
