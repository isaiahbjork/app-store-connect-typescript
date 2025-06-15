// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppCustomProductPageLocalizationsAPI from '../app-custom-product-page-localizations/app-custom-product-page-localizations';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListLocalizationsParams,
  RelationshipListLocalizationsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AppCustomProductPagesAPI from '../app-custom-product-pages/app-custom-product-pages';
import * as AppPreviewSetsAPI from '../app-preview-sets/app-preview-sets';
import * as AppScreenshotSetsAPI from '../app-screenshot-sets/app-screenshot-sets';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppCustomProductPageVersions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: AppCustomProductPageVersionCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppCustomProductPageVersionResponse> {
    return this._client.post('/v1/appCustomProductPageVersions', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppCustomProductPageVersionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCustomProductPageVersionResponse> {
    return this._client.get(path`/v1/appCustomProductPageVersions/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppCustomProductPageVersionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppCustomProductPageVersionResponse> {
    return this._client.patch(path`/v1/appCustomProductPageVersions/${id}`, { body, ...options });
  }

  listLocalizations(
    id: string,
    query: AppCustomProductPageVersionListLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCustomProductPageVersionListLocalizationsResponse> {
    return this._client.get(path`/v1/appCustomProductPageVersions/${id}/appCustomProductPageLocalizations`, {
      query,
      ...options,
    });
  }
}

export interface AppCustomProductPageVersion {
  id: string;

  type: 'appCustomProductPageVersions';

  attributes?: AppCustomProductPageVersion.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppCustomProductPageVersion.Relationships;
}

export namespace AppCustomProductPageVersion {
  export interface Attributes {
    deepLink?: string;

    state?:
      | 'PREPARE_FOR_SUBMISSION'
      | 'READY_FOR_REVIEW'
      | 'WAITING_FOR_REVIEW'
      | 'IN_REVIEW'
      | 'ACCEPTED'
      | 'APPROVED'
      | 'REPLACED_WITH_NEW_VERSION'
      | 'REJECTED';

    version?: string;
  }

  export interface Relationships {
    appCustomProductPage?: Relationships.AppCustomProductPage;

    appCustomProductPageLocalizations?: Relationships.AppCustomProductPageLocalizations;
  }

  export namespace Relationships {
    export interface AppCustomProductPage {
      data?: AppCustomProductPage.Data;
    }

    export namespace AppCustomProductPage {
      export interface Data {
        id: string;

        type: 'appCustomProductPages';
      }
    }

    export interface AppCustomProductPageLocalizations {
      data?: Array<AppCustomProductPageLocalizations.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppCustomProductPageLocalizations {
      export interface Data {
        id: string;

        type: 'appCustomProductPageLocalizations';
      }
    }
  }
}

export interface AppCustomProductPageVersionResponse {
  data: AppCustomProductPageVersion;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    AppCustomProductPagesAPI.AppCustomProductPage | AppCustomProductPageLocalizationsAPI.Localization
  >;
}

export interface AppCustomProductPageVersionListLocalizationsResponse {
  data: Array<AppCustomProductPageLocalizationsAPI.Localization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    AppCustomProductPageVersion | AppScreenshotSetsAPI.AppScreenshotSet | AppPreviewSetsAPI.AppPreviewSet
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppCustomProductPageVersionCreateParams {
  data: AppCustomProductPageVersionCreateParams.Data;
}

export namespace AppCustomProductPageVersionCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'appCustomProductPageVersions';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Relationships {
      appCustomProductPage: Relationships.AppCustomProductPage;

      appCustomProductPageLocalizations?: Relationships.AppCustomProductPageLocalizations;
    }

    export namespace Relationships {
      export interface AppCustomProductPage {
        data: AppCustomProductPage.Data;
      }

      export namespace AppCustomProductPage {
        export interface Data {
          id: string;

          type: 'appCustomProductPages';
        }
      }

      export interface AppCustomProductPageLocalizations {
        data?: Array<AppCustomProductPageLocalizations.Data>;
      }

      export namespace AppCustomProductPageLocalizations {
        export interface Data {
          id: string;

          type: 'appCustomProductPageLocalizations';
        }
      }
    }

    export interface Attributes {
      deepLink?: string;
    }
  }
}

export interface AppCustomProductPageVersionRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * appCustomProductPageLocalizations
   */
  'fields[appCustomProductPageLocalizations]'?: Array<
    'locale' | 'promotionalText' | 'appCustomProductPageVersion' | 'appScreenshotSets' | 'appPreviewSets'
  >;

  /**
   * the fields to include for returned resources of type
   * appCustomProductPageVersions
   */
  'fields[appCustomProductPageVersions]'?: Array<
    'version' | 'state' | 'deepLink' | 'appCustomProductPage' | 'appCustomProductPageLocalizations'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appCustomProductPage' | 'appCustomProductPageLocalizations'>;

  /**
   * maximum number of related appCustomProductPageLocalizations returned (when they
   * are included)
   */
  'limit[appCustomProductPageLocalizations]'?: number;
}

export interface AppCustomProductPageVersionUpdateParams {
  data: AppCustomProductPageVersionUpdateParams.Data;
}

export namespace AppCustomProductPageVersionUpdateParams {
  export interface Data {
    id: string;

    type: 'appCustomProductPageVersions';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      deepLink?: string;
    }
  }
}

export interface AppCustomProductPageVersionListLocalizationsParams {
  /**
   * the fields to include for returned resources of type
   * appCustomProductPageLocalizations
   */
  'fields[appCustomProductPageLocalizations]'?: Array<
    'locale' | 'promotionalText' | 'appCustomProductPageVersion' | 'appScreenshotSets' | 'appPreviewSets'
  >;

  /**
   * the fields to include for returned resources of type
   * appCustomProductPageVersions
   */
  'fields[appCustomProductPageVersions]'?: Array<
    'version' | 'state' | 'deepLink' | 'appCustomProductPage' | 'appCustomProductPageLocalizations'
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
   * filter by attribute 'locale'
   */
  'filter[locale]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appCustomProductPageVersion' | 'appScreenshotSets' | 'appPreviewSets'>;

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

AppCustomProductPageVersions.Relationships = RelationshipsAPIRelationships;

export declare namespace AppCustomProductPageVersions {
  export {
    type AppCustomProductPageVersion as AppCustomProductPageVersion,
    type AppCustomProductPageVersionResponse as AppCustomProductPageVersionResponse,
    type AppCustomProductPageVersionListLocalizationsResponse as AppCustomProductPageVersionListLocalizationsResponse,
    type AppCustomProductPageVersionCreateParams as AppCustomProductPageVersionCreateParams,
    type AppCustomProductPageVersionRetrieveParams as AppCustomProductPageVersionRetrieveParams,
    type AppCustomProductPageVersionUpdateParams as AppCustomProductPageVersionUpdateParams,
    type AppCustomProductPageVersionListLocalizationsParams as AppCustomProductPageVersionListLocalizationsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListLocalizationsResponse as RelationshipListLocalizationsResponse,
    type RelationshipListLocalizationsParams as RelationshipListLocalizationsParams,
  };
}
