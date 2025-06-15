// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class FinanceReports extends APIResource {
  list(query: FinanceReportListParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/v1/financeReports', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/a-gzip' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface FinanceReportListParams {
  /**
   * filter by attribute 'regionCode'
   */
  'filter[regionCode]': Array<string>;

  /**
   * filter by attribute 'reportDate'
   */
  'filter[reportDate]': Array<string>;

  /**
   * filter by attribute 'reportType'
   */
  'filter[reportType]': Array<'FINANCIAL' | 'FINANCE_DETAIL'>;

  /**
   * filter by attribute 'vendorNumber'
   */
  'filter[vendorNumber]': Array<string>;
}

export declare namespace FinanceReports {
  export { type FinanceReportListParams as FinanceReportListParams };
}
