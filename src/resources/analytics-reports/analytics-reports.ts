// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AnalyticsReportInstancesAPI from '../analytics-report-instances/analytics-report-instances';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListInstancesParams,
  RelationshipListInstancesResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AnalyticsReports extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: AnalyticsReportRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsReportRetrieveResponse> {
    return this._client.get(path`/v1/analyticsReports/${id}`, { query, ...options });
  }

  listInstances(
    id: string,
    query: AnalyticsReportListInstancesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsReportListInstancesResponse> {
    return this._client.get(path`/v1/analyticsReports/${id}/instances`, { query, ...options });
  }
}

export interface AnalyticsReport {
  id: string;

  type: 'analyticsReports';

  attributes?: AnalyticsReport.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AnalyticsReport.Relationships;
}

export namespace AnalyticsReport {
  export interface Attributes {
    category?: 'APP_USAGE' | 'APP_STORE_ENGAGEMENT' | 'COMMERCE' | 'FRAMEWORK_USAGE' | 'PERFORMANCE';

    name?: string;
  }

  export interface Relationships {
    instances?: Relationships.Instances;
  }

  export namespace Relationships {
    export interface Instances {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }
  }
}

export interface AnalyticsReportRetrieveResponse {
  data: AnalyticsReport;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AnalyticsReportListInstancesResponse {
  data: Array<AnalyticsReportInstancesAPI.AnalyticsReportInstance>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface AnalyticsReportRetrieveParams {
  /**
   * the fields to include for returned resources of type analyticsReports
   */
  'fields[analyticsReports]'?: Array<'name' | 'category' | 'instances'>;
}

export interface AnalyticsReportListInstancesParams {
  /**
   * the fields to include for returned resources of type analyticsReportInstances
   */
  'fields[analyticsReportInstances]'?: Array<'granularity' | 'processingDate' | 'segments'>;

  /**
   * filter by attribute 'granularity'
   */
  'filter[granularity]'?: Array<'DAILY' | 'WEEKLY' | 'MONTHLY'>;

  /**
   * filter by attribute 'processingDate'
   */
  'filter[processingDate]'?: Array<string>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

AnalyticsReports.Relationships = RelationshipsAPIRelationships;

export declare namespace AnalyticsReports {
  export {
    type AnalyticsReport as AnalyticsReport,
    type AnalyticsReportRetrieveResponse as AnalyticsReportRetrieveResponse,
    type AnalyticsReportListInstancesResponse as AnalyticsReportListInstancesResponse,
    type AnalyticsReportRetrieveParams as AnalyticsReportRetrieveParams,
    type AnalyticsReportListInstancesParams as AnalyticsReportListInstancesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListInstancesResponse as RelationshipListInstancesResponse,
    type RelationshipListInstancesParams as RelationshipListInstancesParams,
  };
}
