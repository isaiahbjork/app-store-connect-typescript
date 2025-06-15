// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AppsAPI from '../../apps/apps';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Builds extends APIResource {
  list(
    id: string,
    query: BuildListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppsAPI.BuildsWithoutIncludesResponse> {
    return this._client.get(path`/v1/betaGroups/${id}/builds`, { query, ...options });
  }

  add(id: string, body: BuildAddParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/betaGroups/${id}/relationships/builds`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  remove(id: string, body: BuildRemoveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/betaGroups/${id}/relationships/builds`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BetaGroupBuildsLinkagesRequest {
  data: Array<BetaGroupBuildsLinkagesRequest.Data>;
}

export namespace BetaGroupBuildsLinkagesRequest {
  export interface Data {
    id: string;

    type: 'builds';
  }
}

export interface BuildListParams {
  /**
   * the fields to include for returned resources of type builds
   */
  'fields[builds]'?: Array<
    | 'version'
    | 'uploadedDate'
    | 'expirationDate'
    | 'expired'
    | 'minOsVersion'
    | 'lsMinimumSystemVersion'
    | 'computedMinMacOsVersion'
    | 'computedMinVisionOsVersion'
    | 'iconAssetToken'
    | 'processingState'
    | 'buildAudienceType'
    | 'usesNonExemptEncryption'
    | 'preReleaseVersion'
    | 'individualTesters'
    | 'betaGroups'
    | 'betaBuildLocalizations'
    | 'appEncryptionDeclaration'
    | 'betaAppReviewSubmission'
    | 'app'
    | 'buildBetaDetail'
    | 'appStoreVersion'
    | 'icons'
    | 'buildBundles'
    | 'perfPowerMetrics'
    | 'diagnosticSignatures'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface BuildAddParams {
  data: Array<BuildAddParams.Data>;
}

export namespace BuildAddParams {
  export interface Data {
    id: string;

    type: 'builds';
  }
}

export interface BuildRemoveParams {
  data: Array<BuildRemoveParams.Data>;
}

export namespace BuildRemoveParams {
  export interface Data {
    id: string;

    type: 'builds';
  }
}

export declare namespace Builds {
  export {
    type BetaGroupBuildsLinkagesRequest as BetaGroupBuildsLinkagesRequest,
    type BuildListParams as BuildListParams,
    type BuildAddParams as BuildAddParams,
    type BuildRemoveParams as BuildRemoveParams,
  };
}
