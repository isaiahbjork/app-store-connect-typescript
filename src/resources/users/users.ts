// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppsAPI from '../apps/apps';
import * as BetaTestersAPI from '../beta-testers/beta-testers';
import * as UserInvitationsAPI from '../user-invitations/user-invitations';
import * as RelationshipsAPI from './relationships/relationships';
import { Relationships as RelationshipsAPIRelationships } from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: UserRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserResponse> {
    return this._client.get(path`/v1/users/${id}`, { query, ...options });
  }

  update(id: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<UserResponse> {
    return this._client.patch(path`/v1/users/${id}`, { body, ...options });
  }

  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    return this._client.get('/v1/users', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/users/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  getVisibleApps(
    id: string,
    query: UserGetVisibleAppsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaTestersAPI.AppsWithoutIncludesResponse> {
    return this._client.get(path`/v1/users/${id}/visibleApps`, { query, ...options });
  }
}

export interface User {
  id: string;

  type: 'users';

  attributes?: User.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: User.Relationships;
}

export namespace User {
  export interface Attributes {
    allAppsVisible?: boolean;

    firstName?: string;

    lastName?: string;

    provisioningAllowed?: boolean;

    roles?: Array<UserInvitationsAPI.UserRole>;

    username?: string;
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

export interface UserResponse {
  data: User;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppsAPI.App>;
}

export interface UserListResponse {
  data: Array<User>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppsAPI.App>;

  meta?: ActorsAPI.PagingInformation;
}

export interface UserRetrieveParams {
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
   * the fields to include for returned resources of type users
   */
  'fields[users]'?: Array<
    'username' | 'firstName' | 'lastName' | 'roles' | 'allAppsVisible' | 'provisioningAllowed' | 'visibleApps'
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

export interface UserUpdateParams {
  data: UserUpdateParams.Data;
}

export namespace UserUpdateParams {
  export interface Data {
    id: string;

    type: 'users';

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      allAppsVisible?: boolean;

      provisioningAllowed?: boolean;

      roles?: Array<UserInvitationsAPI.UserRole>;
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

export interface UserListParams {
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
   * the fields to include for returned resources of type users
   */
  'fields[users]'?: Array<
    'username' | 'firstName' | 'lastName' | 'roles' | 'allAppsVisible' | 'provisioningAllowed' | 'visibleApps'
  >;

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
   * filter by attribute 'username'
   */
  'filter[username]'?: Array<string>;

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
  sort?: Array<'username' | '-username' | 'lastName' | '-lastName'>;
}

export interface UserGetVisibleAppsParams {
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

Users.Relationships = RelationshipsAPIRelationships;

export declare namespace Users {
  export {
    type User as User,
    type UserResponse as UserResponse,
    type UserListResponse as UserListResponse,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserGetVisibleAppsParams as UserGetVisibleAppsParams,
  };

  export { RelationshipsAPIRelationships as Relationships };
}
