// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BetaCrashLogs extends APIResource {
  retrieve(
    id: string,
    query: BetaCrashLogRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaCrashLog> {
    return this._client.get(path`/v1/betaCrashLogs/${id}`, { query, ...options });
  }
}

export interface BetaCrashLog {
  data: BetaCrashLog.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace BetaCrashLog {
  export interface Data {
    id: string;

    type: 'betaCrashLogs';

    attributes?: Data.Attributes;

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }

  export namespace Data {
    export interface Attributes {
      logText?: string;
    }
  }
}

export interface BetaCrashLogRetrieveParams {
  /**
   * the fields to include for returned resources of type betaCrashLogs
   */
  'fields[betaCrashLogs]'?: Array<'logText'>;
}

export declare namespace BetaCrashLogs {
  export { type BetaCrashLog as BetaCrashLog, type BetaCrashLogRetrieveParams as BetaCrashLogRetrieveParams };
}
