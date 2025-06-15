// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppClipDefaultExperiencesAPI from './app-clip-default-experiences/app-clip-default-experiences';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AppClipAppStoreReviewDetails extends APIResource {
  create(
    body: AppClipAppStoreReviewDetailCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppClipAppStoreReviewDetailResponse> {
    return this._client.post('/v1/appClipAppStoreReviewDetails', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppClipAppStoreReviewDetailRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppClipAppStoreReviewDetailResponse> {
    return this._client.get(path`/v1/appClipAppStoreReviewDetails/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppClipAppStoreReviewDetailUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppClipAppStoreReviewDetailResponse> {
    return this._client.patch(path`/v1/appClipAppStoreReviewDetails/${id}`, { body, ...options });
  }
}

export interface AppClipAppStoreReviewDetail {
  id: string;

  type: 'appClipAppStoreReviewDetails';

  attributes?: AppClipAppStoreReviewDetail.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppClipAppStoreReviewDetail.Relationships;
}

export namespace AppClipAppStoreReviewDetail {
  export interface Attributes {
    invocationUrls?: Array<string>;
  }

  export interface Relationships {
    appClipDefaultExperience?: Relationships.AppClipDefaultExperience;
  }

  export namespace Relationships {
    export interface AppClipDefaultExperience {
      data?: AppClipDefaultExperience.Data;
    }

    export namespace AppClipDefaultExperience {
      export interface Data {
        id: string;

        type: 'appClipDefaultExperiences';
      }
    }
  }
}

export interface AppClipAppStoreReviewDetailResponse {
  data: AppClipAppStoreReviewDetail;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppClipDefaultExperiencesAPI.AppClipDefaultExperience>;
}

export interface AppClipAppStoreReviewDetailCreateParams {
  data: AppClipAppStoreReviewDetailCreateParams.Data;
}

export namespace AppClipAppStoreReviewDetailCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'appClipAppStoreReviewDetails';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Relationships {
      appClipDefaultExperience: Relationships.AppClipDefaultExperience;
    }

    export namespace Relationships {
      export interface AppClipDefaultExperience {
        data: AppClipDefaultExperience.Data;
      }

      export namespace AppClipDefaultExperience {
        export interface Data {
          id: string;

          type: 'appClipDefaultExperiences';
        }
      }
    }

    export interface Attributes {
      invocationUrls?: Array<string>;
    }
  }
}

export interface AppClipAppStoreReviewDetailRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * appClipAppStoreReviewDetails
   */
  'fields[appClipAppStoreReviewDetails]'?: Array<'invocationUrls' | 'appClipDefaultExperience'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appClipDefaultExperience'>;
}

export interface AppClipAppStoreReviewDetailUpdateParams {
  data: AppClipAppStoreReviewDetailUpdateParams.Data;
}

export namespace AppClipAppStoreReviewDetailUpdateParams {
  export interface Data {
    id: string;

    type: 'appClipAppStoreReviewDetails';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      invocationUrls?: Array<string>;
    }
  }
}

export declare namespace AppClipAppStoreReviewDetails {
  export {
    type AppClipAppStoreReviewDetail as AppClipAppStoreReviewDetail,
    type AppClipAppStoreReviewDetailResponse as AppClipAppStoreReviewDetailResponse,
    type AppClipAppStoreReviewDetailCreateParams as AppClipAppStoreReviewDetailCreateParams,
    type AppClipAppStoreReviewDetailRetrieveParams as AppClipAppStoreReviewDetailRetrieveParams,
    type AppClipAppStoreReviewDetailUpdateParams as AppClipAppStoreReviewDetailUpdateParams,
  };
}
