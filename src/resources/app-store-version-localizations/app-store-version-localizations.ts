// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppCustomProductPageLocalizationsAPI from '../app-custom-product-page-localizations/app-custom-product-page-localizations';
import * as AppPreviewSetsAPI from '../app-preview-sets/app-preview-sets';
import * as AppScreenshotSetsAPI from '../app-screenshot-sets/app-screenshot-sets';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListAppPreviewSetsParams,
  RelationshipListAppPreviewSetsResponse,
  RelationshipListAppScreenshotSetsParams,
  RelationshipListAppScreenshotSetsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AppStoreVersionsAPI from '../app-store-versions/app-store-versions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppStoreVersionLocalizations extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: AppStoreVersionLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionLocalizationResponse> {
    return this._client.post('/v1/appStoreVersionLocalizations', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppStoreVersionLocalizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionLocalizationResponse> {
    return this._client.get(path`/v1/appStoreVersionLocalizations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppStoreVersionLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionLocalizationResponse> {
    return this._client.patch(path`/v1/appStoreVersionLocalizations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appStoreVersionLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listAppPreviewSets(
    id: string,
    query: AppStoreVersionLocalizationListAppPreviewSetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCustomProductPageLocalizationsAPI.PreviewSetsResponse> {
    return this._client.get(path`/v1/appStoreVersionLocalizations/${id}/appPreviewSets`, {
      query,
      ...options,
    });
  }

  listAppScreenshotSets(
    id: string,
    query: AppStoreVersionLocalizationListAppScreenshotSetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCustomProductPageLocalizationsAPI.ScreenshotSetsResponse> {
    return this._client.get(path`/v1/appStoreVersionLocalizations/${id}/appScreenshotSets`, {
      query,
      ...options,
    });
  }
}

export interface AppStoreVersionLocalization {
  id: string;

  type: 'appStoreVersionLocalizations';

  attributes?: AppStoreVersionLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppStoreVersionLocalization.Relationships;
}

export namespace AppStoreVersionLocalization {
  export interface Attributes {
    description?: string;

    keywords?: string;

    locale?: string;

    marketingUrl?: string;

    promotionalText?: string;

    supportUrl?: string;

    whatsNew?: string;
  }

  export interface Relationships {
    appPreviewSets?: Relationships.AppPreviewSets;

    appScreenshotSets?: Relationships.AppScreenshotSets;

    appStoreVersion?: Relationships.AppStoreVersion;
  }

  export namespace Relationships {
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

    export interface AppStoreVersion {
      data?: AppStoreVersion.Data;
    }

    export namespace AppStoreVersion {
      export interface Data {
        id: string;

        type: 'appStoreVersions';
      }
    }
  }
}

export interface AppStoreVersionLocalizationResponse {
  data: AppStoreVersionLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppStoreVersionsAPI.AppStoreVersionDetails
    | AppScreenshotSetsAPI.AppScreenshotSet
    | AppPreviewSetsAPI.AppPreviewSet
  >;
}

export interface AppStoreVersionLocalizationCreateParams {
  data: AppStoreVersionLocalizationCreateParams.Data;
}

export namespace AppStoreVersionLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appStoreVersionLocalizations';
  }

  export namespace Data {
    export interface Attributes {
      locale: string;

      description?: string;

      keywords?: string;

      marketingUrl?: string;

      promotionalText?: string;

      supportUrl?: string;

      whatsNew?: string;
    }

    export interface Relationships {
      appStoreVersion: Relationships.AppStoreVersion;
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
    }
  }
}

export interface AppStoreVersionLocalizationRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'appStoreVersion' | 'appScreenshotSets' | 'appPreviewSets'>;

  /**
   * maximum number of related appPreviewSets returned (when they are included)
   */
  'limit[appPreviewSets]'?: number;

  /**
   * maximum number of related appScreenshotSets returned (when they are included)
   */
  'limit[appScreenshotSets]'?: number;
}

export interface AppStoreVersionLocalizationUpdateParams {
  data: AppStoreVersionLocalizationUpdateParams.Data;
}

export namespace AppStoreVersionLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'appStoreVersionLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      description?: string;

      keywords?: string;

      marketingUrl?: string;

      promotionalText?: string;

      supportUrl?: string;

      whatsNew?: string;
    }
  }
}

export interface AppStoreVersionLocalizationListAppPreviewSetsParams {
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
   * filter by id(s) of related 'appCustomProductPageLocalization'
   */
  'filter[appCustomProductPageLocalization]'?: Array<string>;

  /**
   * filter by id(s) of related 'appStoreVersionExperimentTreatmentLocalization'
   */
  'filter[appStoreVersionExperimentTreatmentLocalization]'?: Array<string>;

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

export interface AppStoreVersionLocalizationListAppScreenshotSetsParams {
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
   * filter by id(s) of related 'appCustomProductPageLocalization'
   */
  'filter[appCustomProductPageLocalization]'?: Array<string>;

  /**
   * filter by id(s) of related 'appStoreVersionExperimentTreatmentLocalization'
   */
  'filter[appStoreVersionExperimentTreatmentLocalization]'?: Array<string>;

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

AppStoreVersionLocalizations.Relationships = RelationshipsAPIRelationships;

export declare namespace AppStoreVersionLocalizations {
  export {
    type AppStoreVersionLocalization as AppStoreVersionLocalization,
    type AppStoreVersionLocalizationResponse as AppStoreVersionLocalizationResponse,
    type AppStoreVersionLocalizationCreateParams as AppStoreVersionLocalizationCreateParams,
    type AppStoreVersionLocalizationRetrieveParams as AppStoreVersionLocalizationRetrieveParams,
    type AppStoreVersionLocalizationUpdateParams as AppStoreVersionLocalizationUpdateParams,
    type AppStoreVersionLocalizationListAppPreviewSetsParams as AppStoreVersionLocalizationListAppPreviewSetsParams,
    type AppStoreVersionLocalizationListAppScreenshotSetsParams as AppStoreVersionLocalizationListAppScreenshotSetsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListAppPreviewSetsResponse as RelationshipListAppPreviewSetsResponse,
    type RelationshipListAppScreenshotSetsResponse as RelationshipListAppScreenshotSetsResponse,
    type RelationshipListAppPreviewSetsParams as RelationshipListAppPreviewSetsParams,
    type RelationshipListAppScreenshotSetsParams as RelationshipListAppScreenshotSetsParams,
  };
}
