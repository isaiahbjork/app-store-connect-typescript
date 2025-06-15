// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActorsAPI from '../actors';
import * as AppStoreVersionExperimentTreatmentLocalizationsAPI from '../app-store-version-experiment-treatment-localizations/app-store-version-experiment-treatment-localizations';
import * as AppStoreVersionExperimentTreatmentsAPI from '../app-store-version-experiment-treatments/app-store-version-experiment-treatments';
import * as AppStoreVersionExperimentsAPI from './app-store-version-experiments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppStoreVersionExperimentTreatments extends APIResource {
  /**
   * @deprecated
   */
  list(
    id: string,
    query: AppStoreVersionExperimentTreatmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionExperimentTreatmentsResponse> {
    return this._client.get(path`/v1/appStoreVersionExperiments/${id}/appStoreVersionExperimentTreatments`, {
      query,
      ...options,
    });
  }
}

export interface AppStoreVersionExperimentTreatmentsResponse {
  data: Array<AppStoreVersionExperimentTreatmentsAPI.AppStoreVersionExperimentTreatment>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | AppStoreVersionExperimentsAPI.AppStoreVersionExperiment
    | AppStoreVersionExperimentsAPI.AppStoreVersionExperimentV2
    | AppStoreVersionExperimentTreatmentLocalizationsAPI.AppStoreVersionExperimentTreatmentLocalization
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppStoreVersionExperimentTreatmentListParams {
  /**
   * the fields to include for returned resources of type appStoreVersionExperiments
   */
  'fields[appStoreVersionExperiments]'?: Array<
    | 'name'
    | 'trafficProportion'
    | 'state'
    | 'reviewRequired'
    | 'startDate'
    | 'endDate'
    | 'appStoreVersion'
    | 'appStoreVersionExperimentTreatments'
    | 'platform'
    | 'app'
    | 'latestControlVersion'
    | 'controlVersions'
  >;

  /**
   * the fields to include for returned resources of type
   * appStoreVersionExperimentTreatmentLocalizations
   */
  'fields[appStoreVersionExperimentTreatmentLocalizations]'?: Array<
    'locale' | 'appStoreVersionExperimentTreatment' | 'appScreenshotSets' | 'appPreviewSets'
  >;

  /**
   * the fields to include for returned resources of type
   * appStoreVersionExperimentTreatments
   */
  'fields[appStoreVersionExperimentTreatments]'?: Array<
    | 'name'
    | 'appIcon'
    | 'appIconName'
    | 'promotedDate'
    | 'appStoreVersionExperiment'
    | 'appStoreVersionExperimentV2'
    | 'appStoreVersionExperimentTreatmentLocalizations'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'appStoreVersionExperiment'
    | 'appStoreVersionExperimentV2'
    | 'appStoreVersionExperimentTreatmentLocalizations'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appStoreVersionExperimentTreatmentLocalizations
   * returned (when they are included)
   */
  'limit[appStoreVersionExperimentTreatmentLocalizations]'?: number;
}

export declare namespace AppStoreVersionExperimentTreatments {
  export {
    type AppStoreVersionExperimentTreatmentsResponse as AppStoreVersionExperimentTreatmentsResponse,
    type AppStoreVersionExperimentTreatmentListParams as AppStoreVersionExperimentTreatmentListParams,
  };
}
