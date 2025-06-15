// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DiagnosticSignaturesAPI from './diagnostic-signatures';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DiagnosticSignatures extends APIResource {
  retrieveLogs(
    id: string,
    query: DiagnosticSignatureRetrieveLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DiagnosticSignatureRetrieveLogsResponse> {
    return this._client.get(path`/v1/diagnosticSignatures/${id}/logs`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.apple.diagnostic-logs+json' }, options?.headers]),
    });
  }
}

export interface DiagnosticLogCallStackNode {
  address?: string;

  binaryName?: string;

  binaryUUID?: string;

  fileName?: string;

  insightsCategory?: string;

  isBlameFrame?: boolean;

  lineNumber?: string;

  offsetIntoBinaryTextSegment?: string;

  offsetIntoSymbol?: string;

  rawFrame?: string;

  sampleCount?: number;

  subFrames?: Array<DiagnosticLogCallStackNode>;

  symbolName?: string;
}

export interface DiagnosticSignatureRetrieveLogsResponse {
  productData?: Array<DiagnosticSignatureRetrieveLogsResponse.ProductData>;

  version?: string;
}

export namespace DiagnosticSignatureRetrieveLogsResponse {
  export interface ProductData {
    diagnosticInsights?: Array<ProductData.DiagnosticInsight>;

    diagnosticLogs?: Array<ProductData.DiagnosticLog>;

    signatureId?: string;
  }

  export namespace ProductData {
    export interface DiagnosticInsight {
      insightsCategory?: string;

      insightsString?: string;

      insightsURL?: string;
    }

    export interface DiagnosticLog {
      callStackTree?: Array<DiagnosticLog.CallStackTree>;

      diagnosticMetaData?: DiagnosticLog.DiagnosticMetaData;
    }

    export namespace DiagnosticLog {
      export interface CallStackTree {
        callStackPerThread?: boolean;

        callStacks?: Array<CallStackTree.CallStack>;
      }

      export namespace CallStackTree {
        export interface CallStack {
          callStackRootFrames?: Array<DiagnosticSignaturesAPI.DiagnosticLogCallStackNode>;
        }
      }

      export interface DiagnosticMetaData {
        appVersion?: string;

        buildVersion?: string;

        bundleId?: string;

        deviceType?: string;

        event?: string;

        eventDetail?: string;

        osVersion?: string;

        platformArchitecture?: string;

        writesCaused?: string;
      }
    }
  }
}

export interface DiagnosticSignatureRetrieveLogsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace DiagnosticSignatures {
  export {
    type DiagnosticLogCallStackNode as DiagnosticLogCallStackNode,
    type DiagnosticSignatureRetrieveLogsResponse as DiagnosticSignatureRetrieveLogsResponse,
    type DiagnosticSignatureRetrieveLogsParams as DiagnosticSignatureRetrieveLogsParams,
  };
}
