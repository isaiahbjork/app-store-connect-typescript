// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Relationships extends APIResource {
  retrieveApp(id: string, options?: RequestOptions): APIPromise<RelationshipRetrieveAppResponse> {
    return this._client.get(path`/v1/betaLicenseAgreements/${id}/relationships/app`, options);
  }
}

export interface RelationshipRetrieveAppResponse {
  data: RelationshipRetrieveAppResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppResponse {
  export interface Data {
    id: string;

    type: 'apps';
  }
}

export declare namespace Relationships {
  export { type RelationshipRetrieveAppResponse as RelationshipRetrieveAppResponse };
}
