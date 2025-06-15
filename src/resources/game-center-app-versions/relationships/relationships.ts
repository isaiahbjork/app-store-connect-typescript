// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessibilityDeclarationsAPI from '../../accessibility-declarations';
import * as CompatibilityVersionsAPI from './compatibility-versions';
import {
  CompatibilityVersionCreateParams,
  CompatibilityVersionDeleteParams,
  CompatibilityVersionListParams,
  CompatibilityVersionListResponse,
  CompatibilityVersions,
  CompatibilityVersionsLinkagesRequest,
} from './compatibility-versions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Relationships extends APIResource {
  compatibilityVersions: CompatibilityVersionsAPI.CompatibilityVersions =
    new CompatibilityVersionsAPI.CompatibilityVersions(this._client);

  retrieveAppStoreVersion(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveAppStoreVersionResponse> {
    return this._client.get(path`/v1/gameCenterAppVersions/${id}/relationships/appStoreVersion`, options);
  }
}

export interface RelationshipRetrieveAppStoreVersionResponse {
  data: RelationshipRetrieveAppStoreVersionResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppStoreVersionResponse {
  export interface Data {
    id: string;

    type: 'appStoreVersions';
  }
}

Relationships.CompatibilityVersions = CompatibilityVersions;

export declare namespace Relationships {
  export { type RelationshipRetrieveAppStoreVersionResponse as RelationshipRetrieveAppStoreVersionResponse };

  export {
    CompatibilityVersions as CompatibilityVersions,
    type CompatibilityVersionsLinkagesRequest as CompatibilityVersionsLinkagesRequest,
    type CompatibilityVersionListResponse as CompatibilityVersionListResponse,
    type CompatibilityVersionCreateParams as CompatibilityVersionCreateParams,
    type CompatibilityVersionListParams as CompatibilityVersionListParams,
    type CompatibilityVersionDeleteParams as CompatibilityVersionDeleteParams,
  };
}
