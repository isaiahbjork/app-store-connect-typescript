// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListReportsParams,
  RelationshipListReportsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AnalyticsReportsAPI from '../analytics-reports/analytics-reports';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AnalyticsReportRequests extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: AnalyticsReportRequestCreateParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsReportRequestResponse> {
    return this._client.post('/v1/analyticsReportRequests', { body, ...options });
  }

  retrieve(
    id: string,
    query: AnalyticsReportRequestRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsReportRequestResponse> {
    return this._client.get(path`/v1/analyticsReportRequests/${id}`, { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/analyticsReportRequests/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listReports(
    id: string,
    query: AnalyticsReportRequestListReportsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsReportRequestListReportsResponse> {
    return this._client.get(path`/v1/analyticsReportRequests/${id}/reports`, { query, ...options });
  }
}

export interface AnalyticsReportRequest {
  id: string;

  type: 'analyticsReportRequests';

  attributes?: AnalyticsReportRequest.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AnalyticsReportRequest.Relationships;
}

export namespace AnalyticsReportRequest {
  export interface Attributes {
    accessType?: 'ONE_TIME_SNAPSHOT' | 'ONGOING';

    stoppedDueToInactivity?: boolean;
  }

  export interface Relationships {
    reports?: Relationships.Reports;
  }

  export namespace Relationships {
    export interface Reports {
      data?: Array<Reports.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Reports {
      export interface Data {
        id: string;

        type: 'analyticsReports';
      }
    }
  }
}

export interface AnalyticsReportRequestResponse {
  data: AnalyticsReportRequest;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AnalyticsReportsAPI.AnalyticsReport>;
}

export interface AnalyticsReportRequestListReportsResponse {
  data: Array<AnalyticsReportsAPI.AnalyticsReport>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface AnalyticsReportRequestCreateParams {
  data: AnalyticsReportRequestCreateParams.Data;
}

export namespace AnalyticsReportRequestCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'analyticsReportRequests';
  }

  export namespace Data {
    export interface Attributes {
      accessType: 'ONE_TIME_SNAPSHOT' | 'ONGOING';
    }

    export interface Relationships {
      app: Relationships.App;
    }

    export namespace Relationships {
      export interface App {
        data: App.Data;
      }

      export namespace App {
        export interface Data {
          id: string;

          type: 'apps';
        }
      }
    }
  }
}

export interface AnalyticsReportRequestRetrieveParams {
  /**
   * the fields to include for returned resources of type analyticsReportRequests
   */
  'fields[analyticsReportRequests]'?: Array<'accessType' | 'stoppedDueToInactivity' | 'reports'>;

  /**
   * the fields to include for returned resources of type analyticsReports
   */
  'fields[analyticsReports]'?: Array<'name' | 'category' | 'instances'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'reports'>;

  /**
   * maximum number of related reports returned (when they are included)
   */
  'limit[reports]'?: number;
}

export interface AnalyticsReportRequestListReportsParams {
  /**
   * the fields to include for returned resources of type analyticsReports
   */
  'fields[analyticsReports]'?: Array<'name' | 'category' | 'instances'>;

  /**
   * filter by attribute 'category'
   */
  'filter[category]'?: Array<
    'APP_USAGE' | 'APP_STORE_ENGAGEMENT' | 'COMMERCE' | 'FRAMEWORK_USAGE' | 'PERFORMANCE'
  >;

  /**
   * filter by attribute 'name'
   */
  'filter[name]'?: Array<string>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

AnalyticsReportRequests.Relationships = RelationshipsAPIRelationships;

export declare namespace AnalyticsReportRequests {
  export {
    type AnalyticsReportRequest as AnalyticsReportRequest,
    type AnalyticsReportRequestResponse as AnalyticsReportRequestResponse,
    type AnalyticsReportRequestListReportsResponse as AnalyticsReportRequestListReportsResponse,
    type AnalyticsReportRequestCreateParams as AnalyticsReportRequestCreateParams,
    type AnalyticsReportRequestRetrieveParams as AnalyticsReportRequestRetrieveParams,
    type AnalyticsReportRequestListReportsParams as AnalyticsReportRequestListReportsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListReportsResponse as RelationshipListReportsResponse,
    type RelationshipListReportsParams as RelationshipListReportsParams,
  };
}
