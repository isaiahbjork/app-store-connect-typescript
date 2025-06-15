// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppStoreVersionExperimentsAPI from './app-store-version-experiments/app-store-version-experiments';
import * as BetaFeedbackCrashSubmissionsAPI from './beta-feedback-crash-submissions/beta-feedback-crash-submissions';
import * as BetaTestersAPI from './beta-testers/beta-testers';
import * as BuildsAPI from './builds/builds';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BetaFeedbackScreenshotSubmissions extends APIResource {
  retrieve(
    id: string,
    query: BetaFeedbackScreenshotSubmissionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaFeedbackScreenshotSubmissionRetrieveResponse> {
    return this._client.get(path`/v1/betaFeedbackScreenshotSubmissions/${id}`, { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/betaFeedbackScreenshotSubmissions/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BetaFeedbackScreenshotSubmission {
  id: string;

  type: 'betaFeedbackScreenshotSubmissions';

  attributes?: BetaFeedbackScreenshotSubmission.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BetaFeedbackScreenshotSubmission.Relationships;
}

export namespace BetaFeedbackScreenshotSubmission {
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

    screenshots?: Array<Attributes.Screenshot>;

    screenWidthInPoints?: number;

    timeZone?: string;
  }

  export namespace Attributes {
    export interface Screenshot {
      expirationDate?: string;

      height?: number;

      url?: string;

      width?: number;
    }
  }

  export interface Relationships {
    build?: Relationships.Build;

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

export interface BetaFeedbackScreenshotSubmissionRetrieveResponse {
  data: BetaFeedbackScreenshotSubmission;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<BuildsAPI.Build | BetaTestersAPI.BetaTester>;
}

export interface BetaFeedbackScreenshotSubmissionRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * betaFeedbackScreenshotSubmissions
   */
  'fields[betaFeedbackScreenshotSubmissions]'?: Array<
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
    | 'screenshots'
    | 'build'
    | 'tester'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'build' | 'tester'>;
}

export declare namespace BetaFeedbackScreenshotSubmissions {
  export {
    type BetaFeedbackScreenshotSubmission as BetaFeedbackScreenshotSubmission,
    type BetaFeedbackScreenshotSubmissionRetrieveResponse as BetaFeedbackScreenshotSubmissionRetrieveResponse,
    type BetaFeedbackScreenshotSubmissionRetrieveParams as BetaFeedbackScreenshotSubmissionRetrieveParams,
  };
}
