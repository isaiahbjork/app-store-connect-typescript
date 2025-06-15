// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppScreenshotSetsAPI from './app-screenshot-sets';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AppScreenshotsAPI from '../app-screenshots';
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

export class AppScreenshotSets extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: AppScreenshotSetCreateParams, options?: RequestOptions): APIPromise<AppScreenshotSetResponse> {
    return this._client.post('/v1/appScreenshotSets', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppScreenshotSetRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppScreenshotSetResponse> {
    return this._client.get(path`/v1/appScreenshotSets/${id}`, { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appScreenshotSets/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listAppScreenshots(
    id: string,
    query: AppScreenshotSetListAppScreenshotsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppScreenshotSetListAppScreenshotsResponse> {
    return this._client.get(path`/v1/appScreenshotSets/${id}/appScreenshots`, { query, ...options });
  }
}

export interface AppScreenshotSet {
  id: string;

  type: 'appScreenshotSets';

  attributes?: AppScreenshotSet.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppScreenshotSet.Relationships;
}

export namespace AppScreenshotSet {
  export interface Attributes {
    screenshotDisplayType?: AppScreenshotSetsAPI.ScreenshotDisplayType;
  }

  export interface Relationships {
    appCustomProductPageLocalization?: Relationships.AppCustomProductPageLocalization;

    appScreenshots?: Relationships.AppScreenshots;

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

    export interface AppScreenshots {
      data?: Array<AppScreenshots.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppScreenshots {
      export interface Data {
        id: string;

        type: 'appScreenshots';
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

export interface AppScreenshotSetResponse {
  data: AppScreenshotSet;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppStoreVersionLocalizationsAPI.AppStoreVersionLocalization
    | AppCustomProductPageLocalizationsAPI.Localization
    | AppStoreVersionExperimentTreatmentLocalizationsAPI.AppStoreVersionExperimentTreatmentLocalization
    | AppScreenshotsAPI.AppScreenshot
  >;
}

export type ScreenshotDisplayType =
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
  | 'IMESSAGE_APP_IPAD_97';

export interface AppScreenshotSetListAppScreenshotsResponse {
  data: Array<AppScreenshotsAPI.AppScreenshot>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppScreenshotSet>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppScreenshotSetCreateParams {
  data: AppScreenshotSetCreateParams.Data;
}

export namespace AppScreenshotSetCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'appScreenshotSets';

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      screenshotDisplayType: AppScreenshotSetsAPI.ScreenshotDisplayType;
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

export interface AppScreenshotSetRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'appStoreVersionLocalization'
    | 'appCustomProductPageLocalization'
    | 'appStoreVersionExperimentTreatmentLocalization'
    | 'appScreenshots'
  >;

  /**
   * maximum number of related appScreenshots returned (when they are included)
   */
  'limit[appScreenshots]'?: number;
}

export interface AppScreenshotSetListAppScreenshotsParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'appScreenshotSet'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

AppScreenshotSets.Relationships = RelationshipsAPIRelationships;

export declare namespace AppScreenshotSets {
  export {
    type AppScreenshotSet as AppScreenshotSet,
    type AppScreenshotSetResponse as AppScreenshotSetResponse,
    type ScreenshotDisplayType as ScreenshotDisplayType,
    type AppScreenshotSetListAppScreenshotsResponse as AppScreenshotSetListAppScreenshotsResponse,
    type AppScreenshotSetCreateParams as AppScreenshotSetCreateParams,
    type AppScreenshotSetRetrieveParams as AppScreenshotSetRetrieveParams,
    type AppScreenshotSetListAppScreenshotsParams as AppScreenshotSetListAppScreenshotsParams,
  };

  export { RelationshipsAPIRelationships as Relationships };
}
