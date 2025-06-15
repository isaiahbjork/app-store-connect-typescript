// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  getCrashLog(id: string, options?: RequestOptions): APIPromise<RelationshipGetCrashLogResponse> {
    return this._client.get(path`/v1/betaFeedbackCrashSubmissions/${id}/relationships/crashLog`, options);
  }
}

export interface RelationshipGetCrashLogResponse {
  data: RelationshipGetCrashLogResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipGetCrashLogResponse {
  export interface Data {
    id: string;

    type: 'betaCrashLogs';
  }
}

export declare namespace Relationships {
  export { type RelationshipGetCrashLogResponse as RelationshipGetCrashLogResponse };
}
