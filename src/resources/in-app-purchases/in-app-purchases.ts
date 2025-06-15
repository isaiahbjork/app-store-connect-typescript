// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InAppPurchasesAPI from './in-app-purchases';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as InAppPurchaseAppStoreReviewScreenshotsAPI from '../in-app-purchase-app-store-review-screenshots';
import * as InAppPurchaseContentsAPI from '../in-app-purchase-contents';
import * as InAppPurchaseImagesAPI from '../in-app-purchase-images';
import * as InAppPurchaseLocalizationsAPI from '../in-app-purchase-localizations';
import * as PromotedPurchasesAPI from '../promoted-purchases';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as InAppPurchaseAvailabilitiesAPI from '../in-app-purchase-availabilities/in-app-purchase-availabilities';
import * as InAppPurchasePricePointsAPI from '../in-app-purchase-price-points/in-app-purchase-price-points';
import * as InAppPurchasePriceSchedulesAPI from '../in-app-purchase-price-schedules/in-app-purchase-price-schedules';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveAppStoreReviewScreenshotResponse,
  RelationshipRetrieveContentResponse,
  RelationshipRetrieveIapPriceScheduleResponse,
  RelationshipRetrieveImagesParams,
  RelationshipRetrieveImagesResponse,
  RelationshipRetrieveInAppPurchaseAvailabilityResponse,
  RelationshipRetrieveInAppPurchaseLocalizationsParams,
  RelationshipRetrieveInAppPurchaseLocalizationsResponse,
  RelationshipRetrievePricePointsParams,
  RelationshipRetrievePricePointsResponse,
  RelationshipRetrievePromotedPurchaseResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class InAppPurchases extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: InAppPurchaseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseV2Response> {
    return this._client.get(path`/v2/inAppPurchases/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: InAppPurchaseUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseV2Response> {
    return this._client.patch(path`/v2/inAppPurchases/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/inAppPurchases/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  inAppPurchases(
    body: InAppPurchaseInAppPurchasesParams,
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseV2Response> {
    return this._client.post('/v2/inAppPurchases', { body, ...options });
  }

  retrieveAppStoreReviewScreenshot(
    id: string,
    query: InAppPurchaseRetrieveAppStoreReviewScreenshotParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseAppStoreReviewScreenshotsAPI.InAppPurchaseAppStoreReviewScreenshotResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/appStoreReviewScreenshot`, { query, ...options });
  }

  retrieveContent(
    id: string,
    query: InAppPurchaseRetrieveContentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseContentsAPI.InAppPurchaseContentResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/content`, { query, ...options });
  }

  retrieveIapPriceSchedule(
    id: string,
    query: InAppPurchaseRetrieveIapPriceScheduleParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InAppPurchasePriceSchedulesAPI.PriceScheduleResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/iapPriceSchedule`, { query, ...options });
  }

  retrieveImages(
    id: string,
    query: InAppPurchaseRetrieveImagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseRetrieveImagesResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/images`, { query, ...options });
  }

  retrieveInAppPurchaseAvailability(
    id: string,
    query: InAppPurchaseRetrieveInAppPurchaseAvailabilityParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseAvailabilitiesAPI.InAppPurchaseAvailabilityResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/inAppPurchaseAvailability`, { query, ...options });
  }

  retrieveInAppPurchaseLocalizations(
    id: string,
    query: InAppPurchaseRetrieveInAppPurchaseLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseRetrieveInAppPurchaseLocalizationsResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/inAppPurchaseLocalizations`, { query, ...options });
  }

  retrievePricePoints(
    id: string,
    query: InAppPurchaseRetrievePricePointsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InAppPurchasePricePointsAPI.PricePointsResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/pricePoints`, { query, ...options });
  }

  retrievePromotedPurchase(
    id: string,
    query: InAppPurchaseRetrievePromotedPurchaseParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PromotedPurchasesAPI.PromotedPurchaseResponse> {
    return this._client.get(path`/v2/inAppPurchases/${id}/promotedPurchase`, { query, ...options });
  }
}

/**
 * @deprecated
 */
export interface InAppPurchase {
  id: string;

  type: 'inAppPurchases';

  attributes?: InAppPurchase.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: InAppPurchase.Relationships;
}

export namespace InAppPurchase {
  export interface Attributes {
    inAppPurchaseType?:
      | 'AUTOMATICALLY_RENEWABLE_SUBSCRIPTION'
      | 'NON_CONSUMABLE'
      | 'CONSUMABLE'
      | 'NON_RENEWING_SUBSCRIPTION'
      | 'FREE_SUBSCRIPTION';

    productId?: string;

    referenceName?: string;

    state?:
      | 'CREATED'
      | 'DEVELOPER_SIGNED_OFF'
      | 'DEVELOPER_ACTION_NEEDED'
      | 'DELETION_IN_PROGRESS'
      | 'APPROVED'
      | 'DELETED'
      | 'REMOVED_FROM_SALE'
      | 'DEVELOPER_REMOVED_FROM_SALE'
      | 'WAITING_FOR_UPLOAD'
      | 'PROCESSING_CONTENT'
      | 'REPLACED'
      | 'REJECTED'
      | 'WAITING_FOR_SCREENSHOT'
      | 'PREPARE_FOR_SUBMISSION'
      | 'MISSING_METADATA'
      | 'READY_TO_SUBMIT'
      | 'WAITING_FOR_REVIEW'
      | 'IN_REVIEW'
      | 'PENDING_DEVELOPER_RELEASE';
  }

  export interface Relationships {
    apps?: Relationships.Apps;
  }

  export namespace Relationships {
    export interface Apps {
      data?: Array<Apps.Data>;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Apps {
      export interface Data {
        id: string;

        type: 'apps';
      }
    }
  }
}

export type InAppPurchaseType = 'CONSUMABLE' | 'NON_CONSUMABLE' | 'NON_RENEWING_SUBSCRIPTION';

export interface InAppPurchaseV2 {
  id: string;

  type: 'inAppPurchases';

  attributes?: InAppPurchaseV2.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: InAppPurchaseV2.Relationships;
}

export namespace InAppPurchaseV2 {
  export interface Attributes {
    contentHosting?: boolean;

    familySharable?: boolean;

    inAppPurchaseType?: InAppPurchasesAPI.InAppPurchaseType;

    name?: string;

    productId?: string;

    reviewNote?: string;

    state?:
      | 'MISSING_METADATA'
      | 'WAITING_FOR_UPLOAD'
      | 'PROCESSING_CONTENT'
      | 'READY_TO_SUBMIT'
      | 'WAITING_FOR_REVIEW'
      | 'IN_REVIEW'
      | 'DEVELOPER_ACTION_NEEDED'
      | 'PENDING_BINARY_APPROVAL'
      | 'APPROVED'
      | 'DEVELOPER_REMOVED_FROM_SALE'
      | 'REMOVED_FROM_SALE'
      | 'REJECTED';
  }

  export interface Relationships {
    appStoreReviewScreenshot?: Relationships.AppStoreReviewScreenshot;

    content?: Relationships.Content;

    iapPriceSchedule?: Relationships.IapPriceSchedule;

    images?: Relationships.Images;

    inAppPurchaseAvailability?: Relationships.InAppPurchaseAvailability;

    inAppPurchaseLocalizations?: Relationships.InAppPurchaseLocalizations;

    pricePoints?: Relationships.PricePoints;

    promotedPurchase?: Relationships.PromotedPurchase;
  }

  export namespace Relationships {
    export interface AppStoreReviewScreenshot {
      data?: AppStoreReviewScreenshot.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AppStoreReviewScreenshot {
      export interface Data {
        id: string;

        type: 'inAppPurchaseAppStoreReviewScreenshots';
      }
    }

    export interface Content {
      data?: Content.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace Content {
      export interface Data {
        id: string;

        type: 'inAppPurchaseContents';
      }
    }

    export interface IapPriceSchedule {
      data?: IapPriceSchedule.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace IapPriceSchedule {
      export interface Data {
        id: string;

        type: 'inAppPurchasePriceSchedules';
      }
    }

    export interface Images {
      data?: Array<Images.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Images {
      export interface Data {
        id: string;

        type: 'inAppPurchaseImages';
      }
    }

    export interface InAppPurchaseAvailability {
      data?: InAppPurchaseAvailability.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace InAppPurchaseAvailability {
      export interface Data {
        id: string;

        type: 'inAppPurchaseAvailabilities';
      }
    }

    export interface InAppPurchaseLocalizations {
      data?: Array<InAppPurchaseLocalizations.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace InAppPurchaseLocalizations {
      export interface Data {
        id: string;

        type: 'inAppPurchaseLocalizations';
      }
    }

    export interface PricePoints {
      data?: Array<PricePoints.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace PricePoints {
      export interface Data {
        id: string;

        type: 'inAppPurchasePricePoints';
      }
    }

    export interface PromotedPurchase {
      data?: PromotedPurchase.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace PromotedPurchase {
      export interface Data {
        id: string;

        type: 'promotedPurchases';
      }
    }
  }
}

export interface InAppPurchaseV2Response {
  data: InAppPurchaseV2;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | InAppPurchaseLocalizationsAPI.InAppPurchaseLocalization
    | InAppPurchasePricePointsAPI.PricePoint
    | InAppPurchaseContentsAPI.InAppPurchaseContent
    | InAppPurchaseAppStoreReviewScreenshotsAPI.InAppPurchaseAppStoreReviewScreenshot
    | PromotedPurchasesAPI.PromotedPurchase
    | InAppPurchasePriceSchedulesAPI.PriceSchedule
    | InAppPurchaseAvailabilitiesAPI.InAppPurchaseAvailability
    | InAppPurchaseImagesAPI.InAppPurchaseImage
  >;
}

export interface InAppPurchaseRetrieveImagesResponse {
  data: Array<InAppPurchaseImagesAPI.InAppPurchaseImage>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<InAppPurchaseV2>;

  meta?: ActorsAPI.PagingInformation;
}

export interface InAppPurchaseRetrieveInAppPurchaseLocalizationsResponse {
  data: Array<InAppPurchaseLocalizationsAPI.InAppPurchaseLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<InAppPurchaseV2>;

  meta?: ActorsAPI.PagingInformation;
}

export interface InAppPurchaseRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * inAppPurchaseAppStoreReviewScreenshots
   */
  'fields[inAppPurchaseAppStoreReviewScreenshots]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'imageAsset'
    | 'assetToken'
    | 'assetType'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'inAppPurchaseV2'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchaseAvailabilities
   */
  'fields[inAppPurchaseAvailabilities]'?: Array<'availableInNewTerritories' | 'availableTerritories'>;

  /**
   * the fields to include for returned resources of type inAppPurchaseContents
   */
  'fields[inAppPurchaseContents]'?: Array<
    'fileName' | 'fileSize' | 'url' | 'lastModifiedDate' | 'inAppPurchaseV2'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchaseImages
   */
  'fields[inAppPurchaseImages]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'assetToken'
    | 'imageAsset'
    | 'uploadOperations'
    | 'state'
    | 'inAppPurchase'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchaseLocalizations
   */
  'fields[inAppPurchaseLocalizations]'?: Array<
    'name' | 'locale' | 'description' | 'state' | 'inAppPurchaseV2'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchasePricePoints
   */
  'fields[inAppPurchasePricePoints]'?: Array<'customerPrice' | 'proceeds' | 'territory' | 'equalizations'>;

  /**
   * the fields to include for returned resources of type inAppPurchasePriceSchedules
   */
  'fields[inAppPurchasePriceSchedules]'?: Array<'baseTerritory' | 'manualPrices' | 'automaticPrices'>;

  /**
   * the fields to include for returned resources of type inAppPurchases
   */
  'fields[inAppPurchases]'?: Array<
    | 'name'
    | 'productId'
    | 'inAppPurchaseType'
    | 'state'
    | 'reviewNote'
    | 'familySharable'
    | 'contentHosting'
    | 'inAppPurchaseLocalizations'
    | 'pricePoints'
    | 'content'
    | 'appStoreReviewScreenshot'
    | 'promotedPurchase'
    | 'iapPriceSchedule'
    | 'inAppPurchaseAvailability'
    | 'images'
  >;

  /**
   * the fields to include for returned resources of type promotedPurchases
   */
  'fields[promotedPurchases]'?: Array<
    'visibleForAllUsers' | 'enabled' | 'state' | 'inAppPurchaseV2' | 'subscription'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'inAppPurchaseLocalizations'
    | 'pricePoints'
    | 'content'
    | 'appStoreReviewScreenshot'
    | 'promotedPurchase'
    | 'iapPriceSchedule'
    | 'inAppPurchaseAvailability'
    | 'images'
  >;

  /**
   * maximum number of related images returned (when they are included)
   */
  'limit[images]'?: number;

  /**
   * maximum number of related inAppPurchaseLocalizations returned (when they are
   * included)
   */
  'limit[inAppPurchaseLocalizations]'?: number;

  /**
   * maximum number of related pricePoints returned (when they are included)
   */
  'limit[pricePoints]'?: number;
}

export interface InAppPurchaseUpdateParams {
  data: InAppPurchaseUpdateParams.Data;
}

export namespace InAppPurchaseUpdateParams {
  export interface Data {
    id: string;

    type: 'inAppPurchases';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      familySharable?: boolean;

      name?: string;

      reviewNote?: string;
    }
  }
}

export interface InAppPurchaseInAppPurchasesParams {
  data: InAppPurchaseInAppPurchasesParams.Data;
}

export namespace InAppPurchaseInAppPurchasesParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'inAppPurchases';
  }

  export namespace Data {
    export interface Attributes {
      inAppPurchaseType: InAppPurchasesAPI.InAppPurchaseType;

      name: string;

      productId: string;

      familySharable?: boolean;

      reviewNote?: string;
    }

    export interface Relationships {
      app: Relationships.App;
    }

    export namespace Relationships {
      export interface App {
        data: App.Data;
      }

      export namespace App {
        export interface Data {
          id: string;

          type: 'apps';
        }
      }
    }
  }
}

export interface InAppPurchaseRetrieveAppStoreReviewScreenshotParams {
  /**
   * the fields to include for returned resources of type
   * inAppPurchaseAppStoreReviewScreenshots
   */
  'fields[inAppPurchaseAppStoreReviewScreenshots]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'imageAsset'
    | 'assetToken'
    | 'assetType'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'inAppPurchaseV2'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchases
   */
  'fields[inAppPurchases]'?: Array<
    | 'name'
    | 'productId'
    | 'inAppPurchaseType'
    | 'state'
    | 'reviewNote'
    | 'familySharable'
    | 'contentHosting'
    | 'inAppPurchaseLocalizations'
    | 'pricePoints'
    | 'content'
    | 'appStoreReviewScreenshot'
    | 'promotedPurchase'
    | 'iapPriceSchedule'
    | 'inAppPurchaseAvailability'
    | 'images'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'inAppPurchaseV2'>;
}

export interface InAppPurchaseRetrieveContentParams {
  /**
   * the fields to include for returned resources of type inAppPurchaseContents
   */
  'fields[inAppPurchaseContents]'?: Array<
    'fileName' | 'fileSize' | 'url' | 'lastModifiedDate' | 'inAppPurchaseV2'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchases
   */
  'fields[inAppPurchases]'?: Array<
    | 'name'
    | 'productId'
    | 'inAppPurchaseType'
    | 'state'
    | 'reviewNote'
    | 'familySharable'
    | 'contentHosting'
    | 'inAppPurchaseLocalizations'
    | 'pricePoints'
    | 'content'
    | 'appStoreReviewScreenshot'
    | 'promotedPurchase'
    | 'iapPriceSchedule'
    | 'inAppPurchaseAvailability'
    | 'images'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'inAppPurchaseV2'>;
}

export interface InAppPurchaseRetrieveIapPriceScheduleParams {
  /**
   * the fields to include for returned resources of type inAppPurchasePrices
   */
  'fields[inAppPurchasePrices]'?: Array<
    'startDate' | 'endDate' | 'manual' | 'inAppPurchasePricePoint' | 'territory'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchasePriceSchedules
   */
  'fields[inAppPurchasePriceSchedules]'?: Array<'baseTerritory' | 'manualPrices' | 'automaticPrices'>;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'baseTerritory' | 'manualPrices' | 'automaticPrices'>;

  /**
   * maximum number of related automaticPrices returned (when they are included)
   */
  'limit[automaticPrices]'?: number;

  /**
   * maximum number of related manualPrices returned (when they are included)
   */
  'limit[manualPrices]'?: number;
}

export interface InAppPurchaseRetrieveImagesParams {
  /**
   * the fields to include for returned resources of type inAppPurchaseImages
   */
  'fields[inAppPurchaseImages]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'assetToken'
    | 'imageAsset'
    | 'uploadOperations'
    | 'state'
    | 'inAppPurchase'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchases
   */
  'fields[inAppPurchases]'?: Array<
    | 'name'
    | 'productId'
    | 'inAppPurchaseType'
    | 'state'
    | 'reviewNote'
    | 'familySharable'
    | 'contentHosting'
    | 'inAppPurchaseLocalizations'
    | 'pricePoints'
    | 'content'
    | 'appStoreReviewScreenshot'
    | 'promotedPurchase'
    | 'iapPriceSchedule'
    | 'inAppPurchaseAvailability'
    | 'images'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'inAppPurchase'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface InAppPurchaseRetrieveInAppPurchaseAvailabilityParams {
  /**
   * the fields to include for returned resources of type inAppPurchaseAvailabilities
   */
  'fields[inAppPurchaseAvailabilities]'?: Array<'availableInNewTerritories' | 'availableTerritories'>;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'availableTerritories'>;

  /**
   * maximum number of related availableTerritories returned (when they are included)
   */
  'limit[availableTerritories]'?: number;
}

export interface InAppPurchaseRetrieveInAppPurchaseLocalizationsParams {
  /**
   * the fields to include for returned resources of type inAppPurchaseLocalizations
   */
  'fields[inAppPurchaseLocalizations]'?: Array<
    'name' | 'locale' | 'description' | 'state' | 'inAppPurchaseV2'
  >;

  /**
   * the fields to include for returned resources of type inAppPurchases
   */
  'fields[inAppPurchases]'?: Array<
    | 'name'
    | 'productId'
    | 'inAppPurchaseType'
    | 'state'
    | 'reviewNote'
    | 'familySharable'
    | 'contentHosting'
    | 'inAppPurchaseLocalizations'
    | 'pricePoints'
    | 'content'
    | 'appStoreReviewScreenshot'
    | 'promotedPurchase'
    | 'iapPriceSchedule'
    | 'inAppPurchaseAvailability'
    | 'images'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'inAppPurchaseV2'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface InAppPurchaseRetrievePricePointsParams {
  /**
   * the fields to include for returned resources of type inAppPurchasePricePoints
   */
  'fields[inAppPurchasePricePoints]'?: Array<'customerPrice' | 'proceeds' | 'territory' | 'equalizations'>;

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
  include?: Array<'territory'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface InAppPurchaseRetrievePromotedPurchaseParams {
  /**
   * the fields to include for returned resources of type inAppPurchases
   */
  'fields[inAppPurchases]'?: Array<
    | 'name'
    | 'productId'
    | 'inAppPurchaseType'
    | 'state'
    | 'reviewNote'
    | 'familySharable'
    | 'contentHosting'
    | 'inAppPurchaseLocalizations'
    | 'pricePoints'
    | 'content'
    | 'appStoreReviewScreenshot'
    | 'promotedPurchase'
    | 'iapPriceSchedule'
    | 'inAppPurchaseAvailability'
    | 'images'
  >;

  /**
   * the fields to include for returned resources of type promotedPurchases
   */
  'fields[promotedPurchases]'?: Array<
    'visibleForAllUsers' | 'enabled' | 'state' | 'inAppPurchaseV2' | 'subscription'
  >;

  /**
   * the fields to include for returned resources of type subscriptions
   */
  'fields[subscriptions]'?: Array<
    | 'name'
    | 'productId'
    | 'familySharable'
    | 'state'
    | 'subscriptionPeriod'
    | 'reviewNote'
    | 'groupLevel'
    | 'subscriptionLocalizations'
    | 'appStoreReviewScreenshot'
    | 'group'
    | 'introductoryOffers'
    | 'promotionalOffers'
    | 'offerCodes'
    | 'prices'
    | 'pricePoints'
    | 'promotedPurchase'
    | 'subscriptionAvailability'
    | 'winBackOffers'
    | 'images'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'inAppPurchaseV2' | 'subscription'>;
}

InAppPurchases.Relationships = RelationshipsAPIRelationships;

export declare namespace InAppPurchases {
  export {
    type InAppPurchase as InAppPurchase,
    type InAppPurchaseType as InAppPurchaseType,
    type InAppPurchaseV2 as InAppPurchaseV2,
    type InAppPurchaseV2Response as InAppPurchaseV2Response,
    type InAppPurchaseRetrieveImagesResponse as InAppPurchaseRetrieveImagesResponse,
    type InAppPurchaseRetrieveInAppPurchaseLocalizationsResponse as InAppPurchaseRetrieveInAppPurchaseLocalizationsResponse,
    type InAppPurchaseRetrieveParams as InAppPurchaseRetrieveParams,
    type InAppPurchaseUpdateParams as InAppPurchaseUpdateParams,
    type InAppPurchaseInAppPurchasesParams as InAppPurchaseInAppPurchasesParams,
    type InAppPurchaseRetrieveAppStoreReviewScreenshotParams as InAppPurchaseRetrieveAppStoreReviewScreenshotParams,
    type InAppPurchaseRetrieveContentParams as InAppPurchaseRetrieveContentParams,
    type InAppPurchaseRetrieveIapPriceScheduleParams as InAppPurchaseRetrieveIapPriceScheduleParams,
    type InAppPurchaseRetrieveImagesParams as InAppPurchaseRetrieveImagesParams,
    type InAppPurchaseRetrieveInAppPurchaseAvailabilityParams as InAppPurchaseRetrieveInAppPurchaseAvailabilityParams,
    type InAppPurchaseRetrieveInAppPurchaseLocalizationsParams as InAppPurchaseRetrieveInAppPurchaseLocalizationsParams,
    type InAppPurchaseRetrievePricePointsParams as InAppPurchaseRetrievePricePointsParams,
    type InAppPurchaseRetrievePromotedPurchaseParams as InAppPurchaseRetrievePromotedPurchaseParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveAppStoreReviewScreenshotResponse as RelationshipRetrieveAppStoreReviewScreenshotResponse,
    type RelationshipRetrieveContentResponse as RelationshipRetrieveContentResponse,
    type RelationshipRetrieveIapPriceScheduleResponse as RelationshipRetrieveIapPriceScheduleResponse,
    type RelationshipRetrieveImagesResponse as RelationshipRetrieveImagesResponse,
    type RelationshipRetrieveInAppPurchaseAvailabilityResponse as RelationshipRetrieveInAppPurchaseAvailabilityResponse,
    type RelationshipRetrieveInAppPurchaseLocalizationsResponse as RelationshipRetrieveInAppPurchaseLocalizationsResponse,
    type RelationshipRetrievePricePointsResponse as RelationshipRetrievePricePointsResponse,
    type RelationshipRetrievePromotedPurchaseResponse as RelationshipRetrievePromotedPurchaseResponse,
    type RelationshipRetrieveImagesParams as RelationshipRetrieveImagesParams,
    type RelationshipRetrieveInAppPurchaseLocalizationsParams as RelationshipRetrieveInAppPurchaseLocalizationsParams,
    type RelationshipRetrievePricePointsParams as RelationshipRetrievePricePointsParams,
  };
}
