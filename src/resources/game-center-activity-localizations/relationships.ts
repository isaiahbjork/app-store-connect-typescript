// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveImage(id: string, options?: RequestOptions): APIPromise<RelationshipRetrieveImageResponse> {
    return this._client.get(path`/v1/gameCenterActivityLocalizations/${id}/relationships/image`, options);
  }
}

export interface RelationshipRetrieveImageResponse {
  data: RelationshipRetrieveImageResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveImageResponse {
  export interface Data {
    id: string;

    type: 'gameCenterActivityImages';
  }
}

export declare namespace Relationships {
  export { type RelationshipRetrieveImageResponse as RelationshipRetrieveImageResponse };
}
