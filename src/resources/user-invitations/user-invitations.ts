// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UserInvitationsAPI from './user-invitations';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppsAPI from '../apps/apps';
import * as BetaTestersAPI from '../beta-testers/beta-testers';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveVisibleAppsParams,
  RelationshipRetrieveVisibleAppsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class UserInvitations extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: UserInvitationCreateParams, options?: RequestOptions): APIPromise<UserInvitationResponse> {
    return this._client.post('/v1/userInvitations', { body, ...options });
  }

  retrieve(
    id: string,
    query: UserInvitationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserInvitationResponse> {
    return this._client.get(path`/v1/userInvitations/${id}`, { query, ...options });
  }

  list(
    query: UserInvitationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserInvitationListResponse> {
    return this._client.get('/v1/userInvitations', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/userInvitations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveVisibleApps(
    id: string,
    query: UserInvitationRetrieveVisibleAppsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaTestersAPI.AppsWithoutIncludesResponse> {
    return this._client.get(path`/v1/userInvitations/${id}/visibleApps`, { query, ...options });
  }
}

export interface UserInvitation {
  id: string;

  type: 'userInvitations';

  attributes?: UserInvitation.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: UserInvitation.Relationships;
}

export namespace UserInvitation {
  export interface Attributes {
    allAppsVisible?: boolean;

    email?: string;

    expirationDate?: string;

    firstName?: string;

    lastName?: string;

    provisioningAllowed?: boolean;

    roles?: Array<UserInvitationsAPI.UserRole>;
  }

  export interface Relationships {
    visibleApps?: Relationships.VisibleApps;
  }

  export namespace Relationships {
    export interface VisibleApps {
      data?: Array<VisibleApps.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace VisibleApps {
      export interface Data {
        id: string;

        type: 'apps';
      }
    }
  }
}

export interface UserInvitationResponse {
  data: UserInvitation;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppsAPI.App>;
}

export type UserRole =
  | 'ADMIN'
  | 'FINANCE'
  | 'ACCOUNT_HOLDER'
  | 'SALES'
  | 'MARKETING'
  | 'APP_MANAGER'
  | 'DEVELOPER'
  | 'ACCESS_TO_REPORTS'
  | 'CUSTOMER_SUPPORT'
  | 'CREATE_APPS'
  | 'CLOUD_MANAGED_DEVELOPER_ID'
  | 'CLOUD_MANAGED_APP_DISTRIBUTION'
  | 'GENERATE_INDIVIDUAL_KEYS';

export interface UserInvitationListResponse {
  data: Array<UserInvitation>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppsAPI.App>;

  meta?: ActorsAPI.PagingInformation;
}

export interface UserInvitationCreateParams {
  data: UserInvitationCreateParams.Data;
}

export namespace UserInvitationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'userInvitations';

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      email: string;

      firstName: string;

      lastName: string;

      roles: Array<UserInvitationsAPI.UserRole>;

      allAppsVisible?: boolean;

      provisioningAllowed?: boolean;
    }

    export interface Relationships {
      visibleApps?: Relationships.VisibleApps;
    }

    export namespace Relationships {
      export interface VisibleApps {
        data?: Array<VisibleApps.Data>;
      }

      export namespace VisibleApps {
        export interface Data {
          id: string;

          type: 'apps';
        }
      }
    }
  }
}

export interface UserInvitationRetrieveParams {
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
   * the fields to include for returned resources of type userInvitations
   */
  'fields[userInvitations]'?: Array<
    | 'email'
    | 'firstName'
    | 'lastName'
    | 'expirationDate'
    | 'roles'
    | 'allAppsVisible'
    | 'provisioningAllowed'
    | 'visibleApps'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'visibleApps'>;

  /**
   * maximum number of related visibleApps returned (when they are included)
   */
  'limit[visibleApps]'?: number;
}

export interface UserInvitationListParams {
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
   * the fields to include for returned resources of type userInvitations
   */
  'fields[userInvitations]'?: Array<
    | 'email'
    | 'firstName'
    | 'lastName'
    | 'expirationDate'
    | 'roles'
    | 'allAppsVisible'
    | 'provisioningAllowed'
    | 'visibleApps'
  >;

  /**
   * filter by attribute 'email'
   */
  'filter[email]'?: Array<string>;

  /**
   * filter by attribute 'roles'
   */
  'filter[roles]'?: Array<
    | 'ADMIN'
    | 'FINANCE'
    | 'ACCOUNT_HOLDER'
    | 'SALES'
    | 'MARKETING'
    | 'APP_MANAGER'
    | 'DEVELOPER'
    | 'ACCESS_TO_REPORTS'
    | 'CUSTOMER_SUPPORT'
    | 'CREATE_APPS'
    | 'CLOUD_MANAGED_DEVELOPER_ID'
    | 'CLOUD_MANAGED_APP_DISTRIBUTION'
    | 'GENERATE_INDIVIDUAL_KEYS'
  >;

  /**
   * filter by id(s) of related 'visibleApps'
   */
  'filter[visibleApps]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'visibleApps'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related visibleApps returned (when they are included)
   */
  'limit[visibleApps]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'email' | '-email' | 'lastName' | '-lastName'>;
}

export interface UserInvitationRetrieveVisibleAppsParams {
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
   * maximum resources per page
   */
  limit?: number;
}

UserInvitations.Relationships = RelationshipsAPIRelationships;

export declare namespace UserInvitations {
  export {
    type UserInvitation as UserInvitation,
    type UserInvitationResponse as UserInvitationResponse,
    type UserRole as UserRole,
    type UserInvitationListResponse as UserInvitationListResponse,
    type UserInvitationCreateParams as UserInvitationCreateParams,
    type UserInvitationRetrieveParams as UserInvitationRetrieveParams,
    type UserInvitationListParams as UserInvitationListParams,
    type UserInvitationRetrieveVisibleAppsParams as UserInvitationRetrieveVisibleAppsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveVisibleAppsResponse as RelationshipRetrieveVisibleAppsResponse,
    type RelationshipRetrieveVisibleAppsParams as RelationshipRetrieveVisibleAppsParams,
  };
}
