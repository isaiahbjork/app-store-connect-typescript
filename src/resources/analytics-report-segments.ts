// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AnalyticsReportSegments extends APIResource {
  retrieve(
    id: string,
    query: AnalyticsReportSegmentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsReportSegmentRetrieveResponse> {
    return this._client.get(path`/v1/analyticsReportSegments/${id}`, { query, ...options });
  }
}

export interface AnalyticsReportSegment {
  id: string;

  type: 'analyticsReportSegments';

  attributes?: AnalyticsReportSegment.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace AnalyticsReportSegment {
  export interface Attributes {
    checksum?: string;

    sizeInBytes?: number;

    url?: string;
  }
}

export interface AnalyticsReportSegmentRetrieveResponse {
  data: AnalyticsReportSegment;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AnalyticsReportSegmentRetrieveParams {
  /**
   * the fields to include for returned resources of type analyticsReportSegments
   */
  'fields[analyticsReportSegments]'?: Array<'checksum' | 'sizeInBytes' | 'url'>;
}

export declare namespace AnalyticsReportSegments {
  export {
    type AnalyticsReportSegment as AnalyticsReportSegment,
    type AnalyticsReportSegmentRetrieveResponse as AnalyticsReportSegmentRetrieveResponse,
    type AnalyticsReportSegmentRetrieveParams as AnalyticsReportSegmentRetrieveParams,
  };
}
