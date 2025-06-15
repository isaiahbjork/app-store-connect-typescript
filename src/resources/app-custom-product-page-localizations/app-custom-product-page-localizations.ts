// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AppPreviewsAPI from '../app-previews';
import * as AppScreenshotsAPI from '../app-screenshots';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListAppPreviewSetsParams,
  RelationshipListAppPreviewSetsResponse,
  RelationshipListAppScreenshotSetsParams,
  RelationshipListAppScreenshotSetsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AppCustomProductPageVersionsAPI from '../app-custom-product-page-versions/app-custom-product-page-versions';
import * as AppPreviewSetsAPI from '../app-preview-sets/app-preview-sets';
import * as AppScreenshotSetsAPI from '../app-screenshot-sets/app-screenshot-sets';
import * as AppStoreVersionExperimentTreatmentLocalizationsAPI from '../app-store-version-experiment-treatment-localizations/app-store-version-experiment-treatment-localizations';
import * as AppStoreVersionLocalizationsAPI from '../app-store-version-localizations/app-store-version-localizations';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppCustomProductPageLocalizations extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: AppCustomProductPageLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<LocalizationResponse> {
    return this._client.post('/v1/appCustomProductPageLocalizations', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppCustomProductPageLocalizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocalizationResponse> {
    return this._client.get(path`/v1/appCustomProductPageLocalizations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppCustomProductPageLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LocalizationResponse> {
    return this._client.patch(path`/v1/appCustomProductPageLocalizations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appCustomProductPageLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listAppPreviewSets(
    id: string,
    query: AppCustomProductPageLocalizationListAppPreviewSetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PreviewSetsResponse> {
    return this._client.get(path`/v1/appCustomProductPageLocalizations/${id}/appPreviewSets`, {
      query,
      ...options,
    });
  }

  listAppScreenshotSets(
    id: string,
    query: AppCustomProductPageLocalizationListAppScreenshotSetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScreenshotSetsResponse> {
    return this._client.get(path`/v1/appCustomProductPageLocalizations/${id}/appScreenshotSets`, {
      query,
      ...options,
    });
  }
}

export interface Localization {
  id: string;

  type: 'appCustomProductPageLocalizations';

  attributes?: Localization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: Localization.Relationships;
}

export namespace Localization {
  export interface Attributes {
    locale?: string;

    promotionalText?: string;
  }

  export interface Relationships {
    appCustomProductPageVersion?: Relationships.AppCustomProductPageVersion;

    appPreviewSets?: Relationships.AppPreviewSets;

    appScreenshotSets?: Relationships.AppScreenshotSets;
  }

  export namespace Relationships {
    export interface AppCustomProductPageVersion {
      data?: AppCustomProductPageVersion.Data;
    }

    export namespace AppCustomProductPageVersion {
      export interface Data {
        id: string;

        type: 'appCustomProductPageVersions';
      }
    }

    export interface AppPreviewSets {
      data?: Array<AppPreviewSets.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppPreviewSets {
      export interface Data {
        id: string;

        type: 'appPreviewSets';
      }
    }

    export interface AppScreenshotSets {
      data?: Array<AppScreenshotSets.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppScreenshotSets {
      export interface Data {
        id: string;

        type: 'appScreenshotSets';
      }
    }
  }
}

export interface LocalizationResponse {
  data: Localization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppCustomProductPageVersionsAPI.AppCustomProductPageVersion
    | AppScreenshotSetsAPI.AppScreenshotSet
    | AppPreviewSetsAPI.AppPreviewSet
  >;
}

export interface PreviewSetsResponse {
  data: Array<AppPreviewSetsAPI.AppPreviewSet>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | AppStoreVersionLocalizationsAPI.AppStoreVersionLocalization
    | Localization
    | AppStoreVersionExperimentTreatmentLocalizationsAPI.AppStoreVersionExperimentTreatmentLocalization
    | AppPreviewsAPI.AppPreview
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface ScreenshotSetsResponse {
  data: Array<AppScreenshotSetsAPI.AppScreenshotSet>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | AppStoreVersionLocalizationsAPI.AppStoreVersionLocalization
    | Localization
    | AppStoreVersionExperimentTreatmentLocalizationsAPI.AppStoreVersionExperimentTreatmentLocalization
    | AppScreenshotsAPI.AppScreenshot
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppCustomProductPageLocalizationCreateParams {
  data: AppCustomProductPageLocalizationCreateParams.Data;
}

export namespace AppCustomProductPageLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appCustomProductPageLocalizations';
  }

  export namespace Data {
    export interface Attributes {
      locale: string;

      promotionalText?: string;
    }

    export interface Relationships {
      appCustomProductPageVersion: Relationships.AppCustomProductPageVersion;
    }

    export namespace Relationships {
      export interface AppCustomProductPageVersion {
        data: AppCustomProductPageVersion.Data;
      }

      export namespace AppCustomProductPageVersion {
        export interface Data {
          id: string;

          type: 'appCustomProductPageVersions';
        }
      }
    }
  }
}

export interface AppCustomProductPageLocalizationRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * appCustomProductPageLocalizations
   */
  'fields[appCustomProductPageLocalizations]'?: Array<
    'locale' | 'promotionalText' | 'appCustomProductPageVersion' | 'appScreenshotSets' | 'appPreviewSets'
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
   * comma-separated list of relationships to include
   */
  include?: Array<'appCustomProductPageVersion' | 'appScreenshotSets' | 'appPreviewSets'>;

  /**
   * maximum number of related appPreviewSets returned (when they are included)
   */
  'limit[appPreviewSets]'?: number;

  /**
   * maximum number of related appScreenshotSets returned (when they are included)
   */
  'limit[appScreenshotSets]'?: number;
}

export interface AppCustomProductPageLocalizationUpdateParams {
  data: AppCustomProductPageLocalizationUpdateParams.Data;
}

export namespace AppCustomProductPageLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'appCustomProductPageLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      promotionalText?: string;
    }
  }
}

export interface AppCustomProductPageLocalizationListAppPreviewSetsParams {
  /**
   * the fields to include for returned resources of type
   * appCustomProductPageLocalizations
   */
  'fields[appCustomProductPageLocalizations]'?: Array<
    'locale' | 'promotionalText' | 'appCustomProductPageVersion' | 'appScreenshotSets' | 'appPreviewSets'
  >;

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
   * the fields to include for returned resources of type
   * appStoreVersionExperimentTreatmentLocalizations
   */
  'fields[appStoreVersionExperimentTreatmentLocalizations]'?: Array<
    'locale' | 'appStoreVersionExperimentTreatment' | 'appScreenshotSets' | 'appPreviewSets'
  >;

  /**
   * the fields to include for returned resources of type
   * appStoreVersionLocalizations
   */
  'fields[appStoreVersionLocalizations]'?: Array<
    | 'description'
    | 'locale'
    | 'keywords'
    | 'marketingUrl'
    | 'promotionalText'
    | 'supportUrl'
    | 'whatsNew'
    | 'appStoreVersion'
    | 'appScreenshotSets'
    | 'appPreviewSets'
  >;

  /**
   * filter by id(s) of related 'appStoreVersionExperimentTreatmentLocalization'
   */
  'filter[appStoreVersionExperimentTreatmentLocalization]'?: Array<string>;

  /**
   * filter by id(s) of related 'appStoreVersionLocalization'
   */
  'filter[appStoreVersionLocalization]'?: Array<string>;

  /**
   * filter by attribute 'previewType'
   */
  'filter[previewType]'?: Array<
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
    | 'APPLE_VISION_PRO'
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
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appPreviews returned (when they are included)
   */
  'limit[appPreviews]'?: number;
}

export interface AppCustomProductPageLocalizationListAppScreenshotSetsParams {
  /**
   * the fields to include for returned resources of type
   * appCustomProductPageLocalizations
   */
  'fields[appCustomProductPageLocalizations]'?: Array<
    'locale' | 'promotionalText' | 'appCustomProductPageVersion' | 'appScreenshotSets' | 'appPreviewSets'
  >;

  /**
   * the fields to include for returned resources of type appScreenshots
   */
  'fields[appScreenshots]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'imageAsset'
    | 'assetToken'
    | 'assetType'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appScreenshotSet'
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
   * appStoreVersionLocalizations
   */
  'fields[appStoreVersionLocalizations]'?: Array<
    | 'description'
    | 'locale'
    | 'keywords'
    | 'marketingUrl'
    | 'promotionalText'
    | 'supportUrl'
    | 'whatsNew'
    | 'appStoreVersion'
    | 'appScreenshotSets'
    | 'appPreviewSets'
  >;

  /**
   * filter by id(s) of related 'appStoreVersionExperimentTreatmentLocalization'
   */
  'filter[appStoreVersionExperimentTreatmentLocalization]'?: Array<string>;

  /**
   * filter by id(s) of related 'appStoreVersionLocalization'
   */
  'filter[appStoreVersionLocalization]'?: Array<string>;

  /**
   * filter by attribute 'screenshotDisplayType'
   */
  'filter[screenshotDisplayType]'?: Array<
    | 'APP_IPHONE_67'
    | 'APP_IPHONE_61'
    | 'APP_IPHONE_65'
    | 'APP_IPHONE_58'
    | 'APP_IPHONE_55'
    | 'APP_IPHONE_47'
    | 'APP_IPHONE_40'
    | 'APP_IPHONE_35'
    | 'APP_IPAD_PRO_3GEN_129'
    | 'APP_IPAD_PRO_3GEN_11'
    | 'APP_IPAD_PRO_129'
    | 'APP_IPAD_105'
    | 'APP_IPAD_97'
    | 'APP_DESKTOP'
    | 'APP_WATCH_ULTRA'
    | 'APP_WATCH_SERIES_10'
    | 'APP_WATCH_SERIES_7'
    | 'APP_WATCH_SERIES_4'
    | 'APP_WATCH_SERIES_3'
    | 'APP_APPLE_TV'
    | 'APP_APPLE_VISION_PRO'
    | 'IMESSAGE_APP_IPHONE_67'
    | 'IMESSAGE_APP_IPHONE_61'
    | 'IMESSAGE_APP_IPHONE_65'
    | 'IMESSAGE_APP_IPHONE_58'
    | 'IMESSAGE_APP_IPHONE_55'
    | 'IMESSAGE_APP_IPHONE_47'
    | 'IMESSAGE_APP_IPHONE_40'
    | 'IMESSAGE_APP_IPAD_PRO_3GEN_129'
    | 'IMESSAGE_APP_IPAD_PRO_3GEN_11'
    | 'IMESSAGE_APP_IPAD_PRO_129'
    | 'IMESSAGE_APP_IPAD_105'
    | 'IMESSAGE_APP_IPAD_97'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'appStoreVersionLocalization'
    | 'appCustomProductPageLocalization'
    | 'appStoreVersionExperimentTreatmentLocalization'
    | 'appScreenshots'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appScreenshots returned (when they are included)
   */
  'limit[appScreenshots]'?: number;
}

AppCustomProductPageLocalizations.Relationships = RelationshipsAPIRelationships;

export declare namespace AppCustomProductPageLocalizations {
  export {
    type Localization as Localization,
    type LocalizationResponse as LocalizationResponse,
    type PreviewSetsResponse as PreviewSetsResponse,
    type ScreenshotSetsResponse as ScreenshotSetsResponse,
    type AppCustomProductPageLocalizationCreateParams as AppCustomProductPageLocalizationCreateParams,
    type AppCustomProductPageLocalizationRetrieveParams as AppCustomProductPageLocalizationRetrieveParams,
    type AppCustomProductPageLocalizationUpdateParams as AppCustomProductPageLocalizationUpdateParams,
    type AppCustomProductPageLocalizationListAppPreviewSetsParams as AppCustomProductPageLocalizationListAppPreviewSetsParams,
    type AppCustomProductPageLocalizationListAppScreenshotSetsParams as AppCustomProductPageLocalizationListAppScreenshotSetsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListAppPreviewSetsResponse as RelationshipListAppPreviewSetsResponse,
    type RelationshipListAppScreenshotSetsResponse as RelationshipListAppScreenshotSetsResponse,
    type RelationshipListAppPreviewSetsParams as RelationshipListAppPreviewSetsParams,
    type RelationshipListAppScreenshotSetsParams as RelationshipListAppScreenshotSetsParams,
  };
}
