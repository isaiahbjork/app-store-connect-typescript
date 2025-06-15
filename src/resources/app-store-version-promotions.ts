// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AppStoreVersionPromotions extends APIResource {
  create(
    body: AppStoreVersionPromotionCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionPromotionCreateResponse> {
    return this._client.post('/v1/appStoreVersionPromotions', { body, ...options });
  }
}

export interface AppStoreVersionPromotionCreateResponse {
  data: AppStoreVersionPromotionCreateResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace AppStoreVersionPromotionCreateResponse {
  export interface Data {
    id: string;

    type: 'appStoreVersionPromotions';

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }
}

export interface AppStoreVersionPromotionCreateParams {
  data: AppStoreVersionPromotionCreateParams.Data;
}

export namespace AppStoreVersionPromotionCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'appStoreVersionPromotions';
  }

  export namespace Data {
    export interface Relationships {
      appStoreVersion: Relationships.AppStoreVersion;

      appStoreVersionExperimentTreatment: Relationships.AppStoreVersionExperimentTreatment;
    }

    export namespace Relationships {
      export interface AppStoreVersion {
        data: AppStoreVersion.Data;
      }

      export namespace AppStoreVersion {
        export interface Data {
          id: string;

          type: 'appStoreVersions';
        }
      }

      export interface AppStoreVersionExperimentTreatment {
        data: AppStoreVersionExperimentTreatment.Data;
      }

      export namespace AppStoreVersionExperimentTreatment {
        export interface Data {
          id: string;

          type: 'appStoreVersionExperimentTreatments';
        }
      }
    }
  }
}

export declare namespace AppStoreVersionPromotions {
  export {
    type AppStoreVersionPromotionCreateResponse as AppStoreVersionPromotionCreateResponse,
    type AppStoreVersionPromotionCreateParams as AppStoreVersionPromotionCreateParams,
  };
}
