// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CiIssuesAPI from './ci-issues';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CiIssues extends APIResource {
  retrieve(
    id: string,
    query: CiIssueRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiIssueRetrieveResponse> {
    return this._client.get(path`/v1/ciIssues/${id}`, { query, ...options });
  }
}

export interface CiIssue {
  id: string;

  type: 'ciIssues';

  attributes?: CiIssue.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace CiIssue {
  export interface Attributes {
    category?: string;

    fileSource?: CiIssuesAPI.FileLocation;

    issueType?: 'ANALYZER_WARNING' | 'ERROR' | 'TEST_FAILURE' | 'WARNING';

    message?: string;
  }
}

export interface FileLocation {
  lineNumber?: number;

  path?: string;
}

export interface CiIssueRetrieveResponse {
  data: CiIssue;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface CiIssueRetrieveParams {
  /**
   * the fields to include for returned resources of type ciIssues
   */
  'fields[ciIssues]'?: Array<'issueType' | 'message' | 'fileSource' | 'category'>;
}

export declare namespace CiIssues {
  export {
    type CiIssue as CiIssue,
    type FileLocation as FileLocation,
    type CiIssueRetrieveResponse as CiIssueRetrieveResponse,
    type CiIssueRetrieveParams as CiIssueRetrieveParams,
  };
}
