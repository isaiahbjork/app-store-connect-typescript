// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BetaFeedbackCrashSubmissionsAPI from './beta-feedback-crash-submissions';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as BetaCrashLogsAPI from '../beta-crash-logs';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppStoreVersionExperimentsAPI from '../app-store-version-experiments/app-store-version-experiments';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipGetCrashLogResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as BetaTestersAPI from '../beta-testers/beta-testers';
import * as BuildsAPI from '../builds/builds';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BetaFeedbackCrashSubmissions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: BetaFeedbackCrashSubmissionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaFeedbackCrashSubmissionRetrieveResponse> {
    return this._client.get(path`/v1/betaFeedbackCrashSubmissions/${id}`, { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/betaFeedbackCrashSubmissions/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getCrashLog(
    id: string,
    query: BetaFeedbackCrashSubmissionGetCrashLogParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaCrashLogsAPI.BetaCrashLog> {
    return this._client.get(path`/v1/betaFeedbackCrashSubmissions/${id}/crashLog`, { query, ...options });
  }
}

export interface BetaFeedbackCrashSubmission {
  id: string;

  type: 'betaFeedbackCrashSubmissions';

  attributes?: BetaFeedbackCrashSubmission.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BetaFeedbackCrashSubmission.Relationships;
}

export namespace BetaFeedbackCrashSubmission {
  export interface Attributes {
    appPlatform?: AppStoreVersionExperimentsAPI.Platform;

    appUptimeInMilliseconds?: number;

    architecture?: string;

    batteryPercentage?: number;

    buildBundleId?: string;

    comment?: string;

    connectionType?: BetaFeedbackCrashSubmissionsAPI.DeviceConnectionType;

    createdDate?: string;

    deviceFamily?: AccessibilityDeclarationsAPI.DeviceFamily;

    deviceModel?: string;

    devicePlatform?: AppStoreVersionExperimentsAPI.Platform;

    diskBytesAvailable?: number;

    diskBytesTotal?: number;

    email?: string;

    locale?: string;

    osVersion?: string;

    pairedAppleWatch?: string;

    screenHeightInPoints?: number;

    screenWidthInPoints?: number;

    timeZone?: string;
  }

  export interface Relationships {
    build?: Relationships.Build;

    crashLog?: Relationships.CrashLog;

    tester?: Relationships.Tester;
  }

  export namespace Relationships {
    export interface Build {
      data?: Build.Data;
    }

    export namespace Build {
      export interface Data {
        id: string;

        type: 'builds';
      }
    }

    export interface CrashLog {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface Tester {
      data?: Tester.Data;
    }

    export namespace Tester {
      export interface Data {
        id: string;

        type: 'betaTesters';
      }
    }
  }
}

export type DeviceConnectionType = 'WIFI' | 'MOBILE_DATA' | 'WIRE' | 'UNKNOWN' | 'NONE';

export interface BetaFeedbackCrashSubmissionRetrieveResponse {
  data: BetaFeedbackCrashSubmission;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<BuildsAPI.Build | BetaTestersAPI.BetaTester>;
}

export interface BetaFeedbackCrashSubmissionRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * betaFeedbackCrashSubmissions
   */
  'fields[betaFeedbackCrashSubmissions]'?: Array<
    | 'createdDate'
    | 'comment'
    | 'email'
    | 'deviceModel'
    | 'osVersion'
    | 'locale'
    | 'timeZone'
    | 'architecture'
    | 'connectionType'
    | 'pairedAppleWatch'
    | 'appUptimeInMilliseconds'
    | 'diskBytesAvailable'
    | 'diskBytesTotal'
    | 'batteryPercentage'
    | 'screenWidthInPoints'
    | 'screenHeightInPoints'
    | 'appPlatform'
    | 'devicePlatform'
    | 'deviceFamily'
    | 'buildBundleId'
    | 'crashLog'
    | 'build'
    | 'tester'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'build' | 'tester'>;
}

export interface BetaFeedbackCrashSubmissionGetCrashLogParams {
  /**
   * the fields to include for returned resources of type betaCrashLogs
   */
  'fields[betaCrashLogs]'?: Array<'logText'>;
}

BetaFeedbackCrashSubmissions.Relationships = RelationshipsAPIRelationships;

export declare namespace BetaFeedbackCrashSubmissions {
  export {
    type BetaFeedbackCrashSubmission as BetaFeedbackCrashSubmission,
    type DeviceConnectionType as DeviceConnectionType,
    type BetaFeedbackCrashSubmissionRetrieveResponse as BetaFeedbackCrashSubmissionRetrieveResponse,
    type BetaFeedbackCrashSubmissionRetrieveParams as BetaFeedbackCrashSubmissionRetrieveParams,
    type BetaFeedbackCrashSubmissionGetCrashLogParams as BetaFeedbackCrashSubmissionGetCrashLogParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipGetCrashLogResponse as RelationshipGetCrashLogResponse,
  };
}
