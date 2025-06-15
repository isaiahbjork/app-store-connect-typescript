// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveResponse(id: string, options?: RequestOptions): APIPromise<RelationshipRetrieveResponseResponse> {
    return this._client.get(path`/v1/customerReviews/${id}/relationships/response`, options);
  }
}

export interface RelationshipRetrieveResponseResponse {
  data: RelationshipRetrieveResponseResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveResponseResponse {
  export interface Data {
    id: string;

    type: 'customerReviewResponses';
  }
}

export declare namespace Relationships {
  export { type RelationshipRetrieveResponseResponse as RelationshipRetrieveResponseResponse };
}
