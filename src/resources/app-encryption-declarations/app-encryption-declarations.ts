// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AppEncryptionDeclarationDocumentsAPI from '../app-encryption-declaration-documents';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipCreateBuildParams,
  RelationshipRetrieveAppEncryptionDeclarationDocumentResponse,
  RelationshipRetrieveAppResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AppStoreVersionExperimentsAPI from '../app-store-version-experiments/app-store-version-experiments';
import * as AppsAPI from '../apps/apps';
import * as BuildsAPI from '../builds/builds';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppEncryptionDeclarations extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: AppEncryptionDeclarationCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarationResponse> {
    return this._client.post('/v1/appEncryptionDeclarations', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppEncryptionDeclarationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarationResponse> {
    return this._client.get(path`/v1/appEncryptionDeclarations/${id}`, { query, ...options });
  }

  list(
    query: AppEncryptionDeclarationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarations> {
    return this._client.get('/v1/appEncryptionDeclarations', { query, ...options });
  }

  /**
   * @deprecated
   */
  retrieveApp(
    id: string,
    query: AppEncryptionDeclarationRetrieveAppParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppWithoutIncludes> {
    return this._client.get(path`/v1/appEncryptionDeclarations/${id}/app`, { query, ...options });
  }

  retrieveAppEncryptionDeclarationDocument(
    id: string,
    query: AppEncryptionDeclarationRetrieveAppEncryptionDeclarationDocumentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarationDocumentsAPI.AppEncryptionDeclarationDocumentResponse> {
    return this._client.get(path`/v1/appEncryptionDeclarations/${id}/appEncryptionDeclarationDocument`, {
      query,
      ...options,
    });
  }
}

export interface AppEncryptionDeclarationDeclaration {
  id: string;

  type: 'appEncryptionDeclarations';

  attributes?: AppEncryptionDeclarationDeclaration.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppEncryptionDeclarationDeclaration.Relationships;
}

export namespace AppEncryptionDeclarationDeclaration {
  export interface Attributes {
    appDescription?: string;

    appEncryptionDeclarationState?: 'CREATED' | 'IN_REVIEW' | 'APPROVED' | 'REJECTED' | 'INVALID' | 'EXPIRED';

    availableOnFrenchStore?: boolean;

    codeValue?: string;

    containsProprietaryCryptography?: boolean;

    containsThirdPartyCryptography?: boolean;

    createdDate?: string;

    /**
     * @deprecated
     */
    documentName?: string;

    /**
     * @deprecated
     */
    documentType?: string;

    /**
     * @deprecated
     */
    documentUrl?: string;

    exempt?: boolean;

    /**
     * @deprecated
     */
    platform?: AppStoreVersionExperimentsAPI.Platform;

    /**
     * @deprecated
     */
    uploadedDate?: string;

    /**
     * @deprecated
     */
    usesEncryption?: boolean;
  }

  export interface Relationships {
    /**
     * @deprecated
     */
    app?: Relationships.App;

    appEncryptionDeclarationDocument?: Relationships.AppEncryptionDeclarationDocument;

    /**
     * @deprecated
     */
    builds?: Relationships.Builds;
  }

  export namespace Relationships {
    /**
     * @deprecated
     */
    export interface App {
      data?: App.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace App {
      export interface Data {
        id: string;

        type: 'apps';
      }
    }

    export interface AppEncryptionDeclarationDocument {
      data?: AppEncryptionDeclarationDocument.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AppEncryptionDeclarationDocument {
      export interface Data {
        id: string;

        type: 'appEncryptionDeclarationDocuments';
      }
    }

    /**
     * @deprecated
     */
    export interface Builds {
      data?: Array<Builds.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Builds {
      export interface Data {
        id: string;

        type: 'builds';
      }
    }
  }
}

export interface AppEncryptionDeclarationResponse {
  data: AppEncryptionDeclarationDeclaration;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    AppsAPI.App | BuildsAPI.Build | AppEncryptionDeclarationDocumentsAPI.AppEncryptionDeclarationDocument
  >;
}

export interface AppEncryptionDeclarations {
  data: Array<AppEncryptionDeclarationDeclaration>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    AppsAPI.App | BuildsAPI.Build | AppEncryptionDeclarationDocumentsAPI.AppEncryptionDeclarationDocument
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppWithoutIncludes {
  data: AppsAPI.App;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface AppEncryptionDeclarationCreateParams {
  data: AppEncryptionDeclarationCreateParams.Data;
}

export namespace AppEncryptionDeclarationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appEncryptionDeclarations';
  }

  export namespace Data {
    export interface Attributes {
      appDescription: string;

      availableOnFrenchStore: boolean;

      containsProprietaryCryptography: boolean;

      containsThirdPartyCryptography: boolean;
    }

    export interface Relationships {
      /**
       * @deprecated
       */
      app: Relationships.App;
    }

    export namespace Relationships {
      /**
       * @deprecated
       */
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

export interface AppEncryptionDeclarationRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * appEncryptionDeclarationDocuments
   */
  'fields[appEncryptionDeclarationDocuments]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'assetToken'
    | 'downloadUrl'
    | 'sourceFileChecksum'
    | 'uploadOperations'
    | 'assetDeliveryState'
  >;

  /**
   * the fields to include for returned resources of type appEncryptionDeclarations
   */
  'fields[appEncryptionDeclarations]'?: Array<
    | 'appDescription'
    | 'createdDate'
    | 'usesEncryption'
    | 'exempt'
    | 'containsProprietaryCryptography'
    | 'containsThirdPartyCryptography'
    | 'availableOnFrenchStore'
    | 'platform'
    | 'uploadedDate'
    | 'documentUrl'
    | 'documentName'
    | 'documentType'
    | 'appEncryptionDeclarationState'
    | 'codeValue'
    | 'app'
    | 'builds'
    | 'appEncryptionDeclarationDocument'
  >;

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
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'builds' | 'appEncryptionDeclarationDocument'>;

  /**
   * maximum number of related builds returned (when they are included)
   */
  'limit[builds]'?: number;
}

export interface AppEncryptionDeclarationListParams {
  /**
   * the fields to include for returned resources of type
   * appEncryptionDeclarationDocuments
   */
  'fields[appEncryptionDeclarationDocuments]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'assetToken'
    | 'downloadUrl'
    | 'sourceFileChecksum'
    | 'uploadOperations'
    | 'assetDeliveryState'
  >;

  /**
   * the fields to include for returned resources of type appEncryptionDeclarations
   */
  'fields[appEncryptionDeclarations]'?: Array<
    | 'appDescription'
    | 'createdDate'
    | 'usesEncryption'
    | 'exempt'
    | 'containsProprietaryCryptography'
    | 'containsThirdPartyCryptography'
    | 'availableOnFrenchStore'
    | 'platform'
    | 'uploadedDate'
    | 'documentUrl'
    | 'documentName'
    | 'documentType'
    | 'appEncryptionDeclarationState'
    | 'codeValue'
    | 'app'
    | 'builds'
    | 'appEncryptionDeclarationDocument'
  >;

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
   * filter by id(s) of related 'app'
   */
  'filter[app]'?: Array<string>;

  /**
   * filter by id(s) of related 'builds'
   */
  'filter[builds]'?: Array<string>;

  /**
   * filter by attribute 'platform'
   */
  'filter[platform]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'builds' | 'appEncryptionDeclarationDocument'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related builds returned (when they are included)
   */
  'limit[builds]'?: number;
}

export interface AppEncryptionDeclarationRetrieveAppParams {
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
}

export interface AppEncryptionDeclarationRetrieveAppEncryptionDeclarationDocumentParams {
  /**
   * the fields to include for returned resources of type
   * appEncryptionDeclarationDocuments
   */
  'fields[appEncryptionDeclarationDocuments]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'assetToken'
    | 'downloadUrl'
    | 'sourceFileChecksum'
    | 'uploadOperations'
    | 'assetDeliveryState'
  >;
}

AppEncryptionDeclarations.Relationships = RelationshipsAPIRelationships;

export declare namespace AppEncryptionDeclarations {
  export {
    type AppEncryptionDeclarationDeclaration as AppEncryptionDeclarationDeclaration,
    type AppEncryptionDeclarationResponse as AppEncryptionDeclarationResponse,
    type AppEncryptionDeclarations as AppEncryptionDeclarations,
    type AppWithoutIncludes as AppWithoutIncludes,
    type AppEncryptionDeclarationCreateParams as AppEncryptionDeclarationCreateParams,
    type AppEncryptionDeclarationRetrieveParams as AppEncryptionDeclarationRetrieveParams,
    type AppEncryptionDeclarationListParams as AppEncryptionDeclarationListParams,
    type AppEncryptionDeclarationRetrieveAppParams as AppEncryptionDeclarationRetrieveAppParams,
    type AppEncryptionDeclarationRetrieveAppEncryptionDeclarationDocumentParams as AppEncryptionDeclarationRetrieveAppEncryptionDeclarationDocumentParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveAppResponse as RelationshipRetrieveAppResponse,
    type RelationshipRetrieveAppEncryptionDeclarationDocumentResponse as RelationshipRetrieveAppEncryptionDeclarationDocumentResponse,
    type RelationshipCreateBuildParams as RelationshipCreateBuildParams,
  };
}
