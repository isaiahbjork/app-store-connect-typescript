// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrievePassTypeID(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipRetrievePassTypeIDResponse> {
    return this._client.get(path`/v1/certificates/${id}/relationships/passTypeId`, options);
  }
}

export interface RelationshipRetrievePassTypeIDResponse {
  data: RelationshipRetrievePassTypeIDResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrievePassTypeIDResponse {
  export interface Data {
    id: string;

    type: 'passTypeIds';
  }
}

export declare namespace Relationships {
  export { type RelationshipRetrievePassTypeIDResponse as RelationshipRetrievePassTypeIDResponse };
}
