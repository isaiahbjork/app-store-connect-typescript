// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CiTestResultsAPI from './ci-test-results';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as CiIssuesAPI from './ci-issues';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CiTestResults extends APIResource {
  retrieve(
    id: string,
    query: CiTestResultRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiTestResultRetrieveResponse> {
    return this._client.get(path`/v1/ciTestResults/${id}`, { query, ...options });
  }
}

export interface CiTestResult {
  id: string;

  type: 'ciTestResults';

  attributes?: CiTestResult.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace CiTestResult {
  export interface Attributes {
    className?: string;

    destinationTestResults?: Array<Attributes.DestinationTestResult>;

    fileSource?: CiIssuesAPI.FileLocation;

    message?: string;

    name?: string;

    status?: CiTestResultsAPI.CiTestStatus;
  }

  export namespace Attributes {
    export interface DestinationTestResult {
      deviceName?: string;

      duration?: number;

      osVersion?: string;

      status?: CiTestResultsAPI.CiTestStatus;

      uuid?: string;
    }
  }
}

export type CiTestStatus = 'SUCCESS' | 'FAILURE' | 'MIXED' | 'SKIPPED' | 'EXPECTED_FAILURE';

export interface CiTestResultRetrieveResponse {
  data: CiTestResult;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface CiTestResultRetrieveParams {
  /**
   * the fields to include for returned resources of type ciTestResults
   */
  'fields[ciTestResults]'?: Array<
    'className' | 'name' | 'status' | 'fileSource' | 'message' | 'destinationTestResults'
  >;
}

export declare namespace CiTestResults {
  export {
    type CiTestResult as CiTestResult,
    type CiTestStatus as CiTestStatus,
    type CiTestResultRetrieveResponse as CiTestResultRetrieveResponse,
    type CiTestResultRetrieveParams as CiTestResultRetrieveParams,
  };
}
