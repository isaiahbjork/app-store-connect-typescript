// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class SalesReports extends APIResource {
  list(query: SalesReportListParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/v1/salesReports', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/a-gzip' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface SalesReportListParams {
  /**
   * filter by attribute 'frequency'
   */
  'filter[frequency]': Array<'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'>;

  /**
   * filter by attribute 'reportSubType'
   */
  'filter[reportSubType]': Array<
    'SUMMARY' | 'DETAILED' | 'SUMMARY_INSTALL_TYPE' | 'SUMMARY_TERRITORY' | 'SUMMARY_CHANNEL'
  >;

  /**
   * filter by attribute 'reportType'
   */
  'filter[reportType]': Array<
    | 'SALES'
    | 'PRE_ORDER'
    | 'NEWSSTAND'
    | 'SUBSCRIPTION'
    | 'SUBSCRIPTION_EVENT'
    | 'SUBSCRIBER'
    | 'SUBSCRIPTION_OFFER_CODE_REDEMPTION'
    | 'INSTALLS'
    | 'FIRST_ANNUAL'
    | 'WIN_BACK_ELIGIBILITY'
  >;

  /**
   * filter by attribute 'vendorNumber'
   */
  'filter[vendorNumber]': Array<string>;

  /**
   * filter by attribute 'reportDate'
   */
  'filter[reportDate]'?: Array<string>;

  /**
   * filter by attribute 'version'
   */
  'filter[version]'?: Array<string>;
}

export declare namespace SalesReports {
  export { type SalesReportListParams as SalesReportListParams };
}
