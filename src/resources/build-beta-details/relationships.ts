// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveBuild(id: string, options?: RequestOptions): APIPromise<RelationshipRetrieveBuildResponse> {
    return this._client.get(path`/v1/buildBetaDetails/${id}/relationships/build`, options);
  }
}

export interface RelationshipRetrieveBuildResponse {
  data: RelationshipRetrieveBuildResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveBuildResponse {
  export interface Data {
    id: string;

    type: 'builds';
  }
}

export declare namespace Relationships {
  export { type RelationshipRetrieveBuildResponse as RelationshipRetrieveBuildResponse };
}
