// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AppClipAdvancedExperienceImagesAPI from '../app-clip-advanced-experience-images';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppPreviewSetsAPI from '../app-preview-sets/app-preview-sets';
import * as AppScreenshotSetsAPI from '../app-screenshot-sets/app-screenshot-sets';
import * as AppStoreVersionExperimentTreatmentLocalizationsAPI from '../app-store-version-experiment-treatment-localizations/app-store-version-experiment-treatment-localizations';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListLocalizationsParams,
  RelationshipListLocalizationsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AppStoreVersionExperimentsAPI from '../app-store-version-experiments/app-store-version-experiments';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppStoreVersionExperimentTreatments extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: AppStoreVersionExperimentTreatmentCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionExperimentTreatmentResponse> {
    return this._client.post('/v1/appStoreVersionExperimentTreatments', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppStoreVersionExperimentTreatmentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionExperimentTreatmentResponse> {
    return this._client.get(path`/v1/appStoreVersionExperimentTreatments/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppStoreVersionExperimentTreatmentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionExperimentTreatmentResponse> {
    return this._client.patch(path`/v1/appStoreVersionExperimentTreatments/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appStoreVersionExperimentTreatments/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listLocalizations(
    id: string,
    query: AppStoreVersionExperimentTreatmentListLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionExperimentTreatmentListLocalizationsResponse> {
    return this._client.get(
      path`/v1/appStoreVersionExperimentTreatments/${id}/appStoreVersionExperimentTreatmentLocalizations`,
      { query, ...options },
    );
  }
}

export interface AppStoreVersionExperimentTreatment {
  id: string;

  type: 'appStoreVersionExperimentTreatments';

  attributes?: AppStoreVersionExperimentTreatment.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppStoreVersionExperimentTreatment.Relationships;
}

export namespace AppStoreVersionExperimentTreatment {
  export interface Attributes {
    appIcon?: AppClipAdvancedExperienceImagesAPI.ImageAsset;

    appIconName?: string;

    name?: string;

    promotedDate?: string;
  }

  export interface Relationships {
    appStoreVersionExperiment?: Relationships.AppStoreVersionExperiment;

    appStoreVersionExperimentTreatmentLocalizations?: Relationships.AppStoreVersionExperimentTreatmentLocalizations;

    appStoreVersionExperimentV2?: Relationships.AppStoreVersionExperimentV2;
  }

  export namespace Relationships {
    export interface AppStoreVersionExperiment {
      data?: AppStoreVersionExperiment.Data;
    }

    export namespace AppStoreVersionExperiment {
      export interface Data {
        id: string;

        type: 'appStoreVersionExperiments';
      }
    }

    export interface AppStoreVersionExperimentTreatmentLocalizations {
      data?: Array<AppStoreVersionExperimentTreatmentLocalizations.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppStoreVersionExperimentTreatmentLocalizations {
      export interface Data {
        id: string;

        type: 'appStoreVersionExperimentTreatmentLocalizations';
      }
    }

    export interface AppStoreVersionExperimentV2 {
      data?: AppStoreVersionExperimentV2.Data;
    }

    export namespace AppStoreVersionExperimentV2 {
      export interface Data {
        id: string;

        type: 'appStoreVersionExperiments';
      }
    }
  }
}

export interface AppStoreVersionExperimentTreatmentResponse {
  data: AppStoreVersionExperimentTreatment;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppStoreVersionExperimentsAPI.AppStoreVersionExperiment
    | AppStoreVersionExperimentsAPI.AppStoreVersionExperimentV2
    | AppStoreVersionExperimentTreatmentLocalizationsAPI.AppStoreVersionExperimentTreatmentLocalization
  >;
}

export interface AppStoreVersionExperimentTreatmentListLocalizationsResponse {
  data: Array<AppStoreVersionExperimentTreatmentLocalizationsAPI.AppStoreVersionExperimentTreatmentLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | AppStoreVersionExperimentTreatment
    | AppScreenshotSetsAPI.AppScreenshotSet
    | AppPreviewSetsAPI.AppPreviewSet
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppStoreVersionExperimentTreatmentCreateParams {
  data: AppStoreVersionExperimentTreatmentCreateParams.Data;
}

export namespace AppStoreVersionExperimentTreatmentCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'appStoreVersionExperimentTreatments';

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      name: string;

      appIconName?: string;
    }

    export interface Relationships {
      appStoreVersionExperiment?: Relationships.AppStoreVersionExperiment;

      appStoreVersionExperimentV2?: Relationships.AppStoreVersionExperimentV2;
    }

    export namespace Relationships {
      export interface AppStoreVersionExperiment {
        data?: AppStoreVersionExperiment.Data;
      }

      export namespace AppStoreVersionExperiment {
        export interface Data {
          id: string;

          type: 'appStoreVersionExperiments';
        }
      }

      export interface AppStoreVersionExperimentV2 {
        data?: AppStoreVersionExperimentV2.Data;
      }

      export namespace AppStoreVersionExperimentV2 {
        export interface Data {
          id: string;

          type: 'appStoreVersionExperiments';
        }
      }
    }
  }
}

export interface AppStoreVersionExperimentTreatmentRetrieveParams {
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
   * maximum number of related appStoreVersionExperimentTreatmentLocalizations
   * returned (when they are included)
   */
  'limit[appStoreVersionExperimentTreatmentLocalizations]'?: number;
}

export interface AppStoreVersionExperimentTreatmentUpdateParams {
  data: AppStoreVersionExperimentTreatmentUpdateParams.Data;
}

export namespace AppStoreVersionExperimentTreatmentUpdateParams {
  export interface Data {
    id: string;

    type: 'appStoreVersionExperimentTreatments';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      appIconName?: string;

      name?: string;
    }
  }
}

export interface AppStoreVersionExperimentTreatmentListLocalizationsParams {
  /**
   * the fields to include for returned resources of type appPreviewSets
   */
  'fields[appPreviewSets]'?: Array<
    | 'previewType'
    | 'appStoreVersionLocalization'
    | 'appCustomProductPageLocalization'
    | 'appStoreVersionExperimentTreatmentLocalization'
    | 'appPreviews'
  >;

  /**
   * the fields to include for returned resources of type appScreenshotSets
   */
  'fields[appScreenshotSets]'?: Array<
    | 'screenshotDisplayType'
    | 'appStoreVersionLocalization'
    | 'appCustomProductPageLocalization'
    | 'appStoreVersionExperimentTreatmentLocalization'
    | 'appScreenshots'
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
   * filter by attribute 'locale'
   */
  'filter[locale]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appStoreVersionExperimentTreatment' | 'appScreenshotSets' | 'appPreviewSets'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appPreviewSets returned (when they are included)
   */
  'limit[appPreviewSets]'?: number;

  /**
   * maximum number of related appScreenshotSets returned (when they are included)
   */
  'limit[appScreenshotSets]'?: number;
}

AppStoreVersionExperimentTreatments.Relationships = RelationshipsAPIRelationships;

export declare namespace AppStoreVersionExperimentTreatments {
  export {
    type AppStoreVersionExperimentTreatment as AppStoreVersionExperimentTreatment,
    type AppStoreVersionExperimentTreatmentResponse as AppStoreVersionExperimentTreatmentResponse,
    type AppStoreVersionExperimentTreatmentListLocalizationsResponse as AppStoreVersionExperimentTreatmentListLocalizationsResponse,
    type AppStoreVersionExperimentTreatmentCreateParams as AppStoreVersionExperimentTreatmentCreateParams,
    type AppStoreVersionExperimentTreatmentRetrieveParams as AppStoreVersionExperimentTreatmentRetrieveParams,
    type AppStoreVersionExperimentTreatmentUpdateParams as AppStoreVersionExperimentTreatmentUpdateParams,
    type AppStoreVersionExperimentTreatmentListLocalizationsParams as AppStoreVersionExperimentTreatmentListLocalizationsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListLocalizationsResponse as RelationshipListLocalizationsResponse,
    type RelationshipListLocalizationsParams as RelationshipListLocalizationsParams,
  };
}
