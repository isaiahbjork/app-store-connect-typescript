// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AppStoreVersionExperimentTreatmentsAPI from './app-store-version-experiment-treatments';
import {
  AppStoreVersionExperimentTreatmentRetrieveParams,
  AppStoreVersionExperimentTreatmentRetrieveResponse,
  AppStoreVersionExperimentTreatments,
} from './app-store-version-experiment-treatments';

export class Relationships extends APIResource {
  appStoreVersionExperimentTreatments: AppStoreVersionExperimentTreatmentsAPI.AppStoreVersionExperimentTreatments =
    new AppStoreVersionExperimentTreatmentsAPI.AppStoreVersionExperimentTreatments(this._client);
}

Relationships.AppStoreVersionExperimentTreatments = AppStoreVersionExperimentTreatments;

export declare namespace Relationships {
  export {
    AppStoreVersionExperimentTreatments as AppStoreVersionExperimentTreatments,
    type AppStoreVersionExperimentTreatmentRetrieveResponse as AppStoreVersionExperimentTreatmentRetrieveResponse,
    type AppStoreVersionExperimentTreatmentRetrieveParams as AppStoreVersionExperimentTreatmentRetrieveParams,
  };
}
