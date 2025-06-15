// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AnalyticsReportSegmentsAPI from '../analytics-report-segments';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListSegmentsParams,
  RelationshipListSegmentsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AnalyticsReportInstances extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: AnalyticsReportInstanceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsReportInstanceRetrieveResponse> {
    return this._client.get(path`/v1/analyticsReportInstances/${id}`, { query, ...options });
  }

  listSegments(
    id: string,
    query: AnalyticsReportInstanceListSegmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsReportInstanceListSegmentsResponse> {
    return this._client.get(path`/v1/analyticsReportInstances/${id}/segments`, { query, ...options });
  }
}

export interface AnalyticsReportInstance {
  id: string;

  type: 'analyticsReportInstances';

  attributes?: AnalyticsReportInstance.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AnalyticsReportInstance.Relationships;
}

export namespace AnalyticsReportInstance {
  export interface Attributes {
    granularity?: 'DAILY' | 'WEEKLY' | 'MONTHLY';

    processingDate?: string;
  }

  export interface Relationships {
    segments?: Relationships.Segments;
  }

  export namespace Relationships {
    export interface Segments {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }
  }
}

export interface AnalyticsReportInstanceRetrieveResponse {
  data: AnalyticsReportInstance;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AnalyticsReportInstanceListSegmentsResponse {
  data: Array<AnalyticsReportSegmentsAPI.AnalyticsReportSegment>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface AnalyticsReportInstanceRetrieveParams {
  /**
   * the fields to include for returned resources of type analyticsReportInstances
   */
  'fields[analyticsReportInstances]'?: Array<'granularity' | 'processingDate' | 'segments'>;
}

export interface AnalyticsReportInstanceListSegmentsParams {
  /**
   * the fields to include for returned resources of type analyticsReportSegments
   */
  'fields[analyticsReportSegments]'?: Array<'checksum' | 'sizeInBytes' | 'url'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

AnalyticsReportInstances.Relationships = RelationshipsAPIRelationships;

export declare namespace AnalyticsReportInstances {
  export {
    type AnalyticsReportInstance as AnalyticsReportInstance,
    type AnalyticsReportInstanceRetrieveResponse as AnalyticsReportInstanceRetrieveResponse,
    type AnalyticsReportInstanceListSegmentsResponse as AnalyticsReportInstanceListSegmentsResponse,
    type AnalyticsReportInstanceRetrieveParams as AnalyticsReportInstanceRetrieveParams,
    type AnalyticsReportInstanceListSegmentsParams as AnalyticsReportInstanceListSegmentsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListSegmentsResponse as RelationshipListSegmentsResponse,
    type RelationshipListSegmentsParams as RelationshipListSegmentsParams,
  };
}
