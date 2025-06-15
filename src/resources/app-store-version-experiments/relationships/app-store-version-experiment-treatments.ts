// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActorsAPI from '../../actors';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AppStoreVersionExperimentTreatments extends APIResource {
  /**
   * @deprecated
   */
  retrieve(
    id: string,
    query: AppStoreVersionExperimentTreatmentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionExperimentTreatmentRetrieveResponse> {
    return this._client.get(
      path`/v1/appStoreVersionExperiments/${id}/relationships/appStoreVersionExperimentTreatments`,
      { query, ...options },
    );
  }
}

/**
 * @deprecated
 */
export interface AppStoreVersionExperimentTreatmentRetrieveResponse {
  data: Array<AppStoreVersionExperimentTreatmentRetrieveResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace AppStoreVersionExperimentTreatmentRetrieveResponse {
  export interface Data {
    id: string;

    type: 'appStoreVersionExperimentTreatments';
  }
}

export interface AppStoreVersionExperimentTreatmentRetrieveParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace AppStoreVersionExperimentTreatments {
  export {
    type AppStoreVersionExperimentTreatmentRetrieveResponse as AppStoreVersionExperimentTreatmentRetrieveResponse,
    type AppStoreVersionExperimentTreatmentRetrieveParams as AppStoreVersionExperimentTreatmentRetrieveParams,
  };
}
