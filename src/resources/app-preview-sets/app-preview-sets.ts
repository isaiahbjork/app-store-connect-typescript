// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppPreviewSetsAPI from './app-preview-sets';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AppPreviewsAPI from '../app-previews';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppCustomProductPageLocalizationsAPI from '../app-custom-product-page-localizations/app-custom-product-page-localizations';
import * as AppStoreVersionExperimentTreatmentLocalizationsAPI from '../app-store-version-experiment-treatment-localizations/app-store-version-experiment-treatment-localizations';
import * as AppStoreVersionLocalizationsAPI from '../app-store-version-localizations/app-store-version-localizations';
import * as RelationshipsAPI from './relationships/relationships';
import { Relationships as RelationshipsAPIRelationships } from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppPreviewSets extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: AppPreviewSetCreateParams, options?: RequestOptions): APIPromise<AppPreviewSetResponse> {
    return this._client.post('/v1/appPreviewSets', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppPreviewSetRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppPreviewSetResponse> {
    return this._client.get(path`/v1/appPreviewSets/${id}`, { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appPreviewSets/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listAppPreviews(
    id: string,
    query: AppPreviewSetListAppPreviewsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppPreviewSetListAppPreviewsResponse> {
    return this._client.get(path`/v1/appPreviewSets/${id}/appPreviews`, { query, ...options });
  }
}

export interface AppPreviewSet {
  id: string;

  type: 'appPreviewSets';

  attributes?: AppPreviewSet.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppPreviewSet.Relationships;
}

export namespace AppPreviewSet {
  export interface Attributes {
    previewType?: AppPreviewSetsAPI.PreviewType;
  }

  export interface Relationships {
    appCustomProductPageLocalization?: Relationships.AppCustomProductPageLocalization;

    appPreviews?: Relationships.AppPreviews;

    appStoreVersionExperimentTreatmentLocalization?: Relationships.AppStoreVersionExperimentTreatmentLocalization;

    appStoreVersionLocalization?: Relationships.AppStoreVersionLocalization;
  }

  export namespace Relationships {
    export interface AppCustomProductPageLocalization {
      data?: AppCustomProductPageLocalization.Data;
    }

    export namespace AppCustomProductPageLocalization {
      export interface Data {
        id: string;

        type: 'appCustomProductPageLocalizations';
      }
    }

    export interface AppPreviews {
      data?: Array<AppPreviews.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppPreviews {
      export interface Data {
        id: string;

        type: 'appPreviews';
      }
    }

    export interface AppStoreVersionExperimentTreatmentLocalization {
      data?: AppStoreVersionExperimentTreatmentLocalization.Data;
    }

    export namespace AppStoreVersionExperimentTreatmentLocalization {
      export interface Data {
        id: string;

        type: 'appStoreVersionExperimentTreatmentLocalizations';
      }
    }

    export interface AppStoreVersionLocalization {
      data?: AppStoreVersionLocalization.Data;
    }

    export namespace AppStoreVersionLocalization {
      export interface Data {
        id: string;

        type: 'appStoreVersionLocalizations';
      }
    }
  }
}

export interface AppPreviewSetResponse {
  data: AppPreviewSet;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppStoreVersionLocalizationsAPI.AppStoreVersionLocalization
    | AppCustomProductPageLocalizationsAPI.Localization
    | AppStoreVersionExperimentTreatmentLocalizationsAPI.AppStoreVersionExperimentTreatmentLocalization
    | AppPreviewsAPI.AppPreview
  >;
}

export type PreviewType =
  | 'IPHONE_67'
  | 'IPHONE_61'
  | 'IPHONE_65'
  | 'IPHONE_58'
  | 'IPHONE_55'
  | 'IPHONE_47'
  | 'IPHONE_40'
  | 'IPHONE_35'
  | 'IPAD_PRO_3GEN_129'
  | 'IPAD_PRO_3GEN_11'
  | 'IPAD_PRO_129'
  | 'IPAD_105'
  | 'IPAD_97'
  | 'DESKTOP'
  | 'APPLE_TV'
  | 'APPLE_VISION_PRO';

export interface AppPreviewSetListAppPreviewsResponse {
  data: Array<AppPreviewsAPI.AppPreview>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppPreviewSet>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppPreviewSetCreateParams {
  data: AppPreviewSetCreateParams.Data;
}

export namespace AppPreviewSetCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'appPreviewSets';

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      previewType: AppPreviewSetsAPI.PreviewType;
    }

    export interface Relationships {
      appCustomProductPageLocalization?: Relationships.AppCustomProductPageLocalization;

      appStoreVersionExperimentTreatmentLocalization?: Relationships.AppStoreVersionExperimentTreatmentLocalization;

      appStoreVersionLocalization?: Relationships.AppStoreVersionLocalization;
    }

    export namespace Relationships {
      export interface AppCustomProductPageLocalization {
        data?: AppCustomProductPageLocalization.Data;
      }

      export namespace AppCustomProductPageLocalization {
        export interface Data {
          id: string;

          type: 'appCustomProductPageLocalizations';
        }
      }

      export interface AppStoreVersionExperimentTreatmentLocalization {
        data?: AppStoreVersionExperimentTreatmentLocalization.Data;
      }

      export namespace AppStoreVersionExperimentTreatmentLocalization {
        export interface Data {
          id: string;

          type: 'appStoreVersionExperimentTreatmentLocalizations';
        }
      }

      export interface AppStoreVersionLocalization {
        data?: AppStoreVersionLocalization.Data;
      }

      export namespace AppStoreVersionLocalization {
        export interface Data {
          id: string;

          type: 'appStoreVersionLocalizations';
        }
      }
    }
  }
}

export interface AppPreviewSetRetrieveParams {
  /**
   * the fields to include for returned resources of type appPreviews
   */
  'fields[appPreviews]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'previewFrameTimeCode'
    | 'mimeType'
    | 'videoUrl'
    | 'previewFrameImage'
    | 'previewImage'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'videoDeliveryState'
    | 'appPreviewSet'
  >;

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
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'appStoreVersionLocalization'
    | 'appCustomProductPageLocalization'
    | 'appStoreVersionExperimentTreatmentLocalization'
    | 'appPreviews'
  >;

  /**
   * maximum number of related appPreviews returned (when they are included)
   */
  'limit[appPreviews]'?: number;
}

export interface AppPreviewSetListAppPreviewsParams {
  /**
   * the fields to include for returned resources of type appPreviews
   */
  'fields[appPreviews]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'previewFrameTimeCode'
    | 'mimeType'
    | 'videoUrl'
    | 'previewFrameImage'
    | 'previewImage'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'videoDeliveryState'
    | 'appPreviewSet'
  >;

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
   * comma-separated list of relationships to include
   */
  include?: Array<'appPreviewSet'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

AppPreviewSets.Relationships = RelationshipsAPIRelationships;

export declare namespace AppPreviewSets {
  export {
    type AppPreviewSet as AppPreviewSet,
    type AppPreviewSetResponse as AppPreviewSetResponse,
    type PreviewType as PreviewType,
    type AppPreviewSetListAppPreviewsResponse as AppPreviewSetListAppPreviewsResponse,
    type AppPreviewSetCreateParams as AppPreviewSetCreateParams,
    type AppPreviewSetRetrieveParams as AppPreviewSetRetrieveParams,
    type AppPreviewSetListAppPreviewsParams as AppPreviewSetListAppPreviewsParams,
  };

  export { RelationshipsAPIRelationships as Relationships };
}
