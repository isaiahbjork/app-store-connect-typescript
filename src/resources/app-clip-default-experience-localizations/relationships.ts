// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveHeaderImage(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrieveHeaderImageResponse> {
    return this._client.get(
      path`/v1/appClipDefaultExperienceLocalizations/${id}/relationships/appClipHeaderImage`,
      options,
    );
  }
}

export interface RelationshipRetrieveHeaderImageResponse {
  data: RelationshipRetrieveHeaderImageResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveHeaderImageResponse {
  export interface Data {
    id: string;

    type: 'appClipHeaderImages';
  }
}

export declare namespace Relationships {
  export { type RelationshipRetrieveHeaderImageResponse as RelationshipRetrieveHeaderImageResponse };
}
