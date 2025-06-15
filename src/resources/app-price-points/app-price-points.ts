// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListEqualizationsParams,
  RelationshipListEqualizationsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AppPriceSchedulesAPI from '../app-price-schedules/app-price-schedules';
import * as AppsAPI from '../apps/apps';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppPricePoints extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: AppPricePointRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppPricePointRetrieveResponse> {
    return this._client.get(path`/v3/appPricePoints/${id}`, { query, ...options });
  }

  listEqualizations(
    id: string,
    query: AppPricePointListEqualizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppPricePoints> {
    return this._client.get(path`/v3/appPricePoints/${id}/equalizations`, { query, ...options });
  }
}

export interface AppPricePoint {
  id: string;

  type: 'appPricePoints';

  attributes?: AppPricePoint.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppPricePoint.Relationships;
}

export namespace AppPricePoint {
  export interface Attributes {
    customerPrice?: string;

    proceeds?: string;
  }

  export interface Relationships {
    app?: Relationships.App;

    equalizations?: Relationships.Equalizations;

    territory?: Relationships.Territory;
  }

  export namespace Relationships {
    export interface App {
      data?: App.Data;
    }

    export namespace App {
      export interface Data {
        id: string;

        type: 'apps';
      }
    }

    export interface Equalizations {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface Territory {
      data?: Territory.Data;
    }

    export namespace Territory {
      export interface Data {
        id: string;

        type: 'territories';
      }
    }
  }
}

export interface AppPricePoints {
  data: Array<AppPricePoint>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppsAPI.App | AppPriceSchedulesAPI.Territory>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppPricePointRetrieveResponse {
  data: AppPricePoint;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppsAPI.App | AppPriceSchedulesAPI.Territory>;
}

export interface AppPricePointRetrieveParams {
  /**
   * the fields to include for returned resources of type appPricePoints
   */
  'fields[appPricePoints]'?: Array<'customerPrice' | 'proceeds' | 'app' | 'equalizations' | 'territory'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'territory'>;
}

export interface AppPricePointListEqualizationsParams {
  /**
   * the fields to include for returned resources of type appPricePoints
   */
  'fields[appPricePoints]'?: Array<'customerPrice' | 'proceeds' | 'app' | 'equalizations' | 'territory'>;

  /**
   * the fields to include for returned resources of type apps
   */
  'fields[apps]'?: Array<
    | 'accessibilityUrl'
    | 'name'
    | 'bundleId'
    | 'sku'
    | 'primaryLocale'
    | 'isOrEverWasMadeForKids'
    | 'subscriptionStatusUrl'
    | 'subscriptionStatusUrlVersion'
    | 'subscriptionStatusUrlForSandbox'
    | 'subscriptionStatusUrlVersionForSandbox'
    | 'contentRightsDeclaration'
    | 'streamlinedPurchasingEnabled'
    | 'accessibilityDeclarations'
    | 'appEncryptionDeclarations'
    | 'ciProduct'
    | 'betaTesters'
    | 'betaGroups'
    | 'appStoreVersions'
    | 'preReleaseVersions'
    | 'betaAppLocalizations'
    | 'builds'
    | 'betaLicenseAgreement'
    | 'betaAppReviewDetail'
    | 'appInfos'
    | 'appClips'
    | 'appPricePoints'
    | 'endUserLicenseAgreement'
    | 'appPriceSchedule'
    | 'appAvailabilityV2'
    | 'inAppPurchases'
    | 'subscriptionGroups'
    | 'gameCenterEnabledVersions'
    | 'perfPowerMetrics'
    | 'appCustomProductPages'
    | 'inAppPurchasesV2'
    | 'promotedPurchases'
    | 'appEvents'
    | 'reviewSubmissions'
    | 'subscriptionGracePeriod'
    | 'customerReviews'
    | 'customerReviewSummarizations'
    | 'gameCenterDetail'
    | 'appStoreVersionExperimentsV2'
    | 'alternativeDistributionKey'
    | 'analyticsReportRequests'
    | 'marketplaceSearchDetail'
    | 'backgroundAssets'
    | 'betaFeedbackScreenshotSubmissions'
    | 'betaFeedbackCrashSubmissions'
    | 'webhooks'
  >;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * filter by id(s) of related 'territory'
   */
  'filter[territory]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'territory'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

AppPricePoints.Relationships = RelationshipsAPIRelationships;

export declare namespace AppPricePoints {
  export {
    type AppPricePoint as AppPricePoint,
    type AppPricePoints as AppPricePoints,
    type AppPricePointRetrieveResponse as AppPricePointRetrieveResponse,
    type AppPricePointRetrieveParams as AppPricePointRetrieveParams,
    type AppPricePointListEqualizationsParams as AppPricePointListEqualizationsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListEqualizationsResponse as RelationshipListEqualizationsResponse,
    type RelationshipListEqualizationsParams as RelationshipListEqualizationsParams,
  };
}
