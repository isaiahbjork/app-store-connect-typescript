// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BundleIDsAPI from './bundle-ids';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as BundleIDCapabilitiesAPI from '../bundle-id-capabilities';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppEncryptionDeclarationsAPI from '../app-encryption-declarations/app-encryption-declarations';
import * as AppsAPI from '../apps/apps';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveAppResponse,
  RelationshipRetrieveBundleIDCapabilitiesParams,
  RelationshipRetrieveBundleIDCapabilitiesResponse,
  RelationshipRetrieveProfilesParams,
  RelationshipRetrieveProfilesResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as ProfilesAPI from '../profiles/profiles';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BundleIDs extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: BundleIDCreateParams, options?: RequestOptions): APIPromise<BundleIDResponse> {
    return this._client.post('/v1/bundleIds', { body, ...options });
  }

  retrieve(
    id: string,
    query: BundleIDRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BundleIDResponse> {
    return this._client.get(path`/v1/bundleIds/${id}`, { query, ...options });
  }

  update(id: string, body: BundleIDUpdateParams, options?: RequestOptions): APIPromise<BundleIDResponse> {
    return this._client.patch(path`/v1/bundleIds/${id}`, { body, ...options });
  }

  list(
    query: BundleIDListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BundleIDListResponse> {
    return this._client.get('/v1/bundleIds', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/bundleIds/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveApp(
    id: string,
    query: BundleIDRetrieveAppParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEncryptionDeclarationsAPI.AppWithoutIncludes> {
    return this._client.get(path`/v1/bundleIds/${id}/app`, { query, ...options });
  }

  retrieveBundleIDCapabilities(
    id: string,
    query: BundleIDRetrieveBundleIDCapabilitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BundleIDRetrieveBundleIDCapabilitiesResponse> {
    return this._client.get(path`/v1/bundleIds/${id}/bundleIdCapabilities`, { query, ...options });
  }

  retrieveProfiles(
    id: string,
    query: BundleIDRetrieveProfilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BundleIDRetrieveProfilesResponse> {
    return this._client.get(path`/v1/bundleIds/${id}/profiles`, { query, ...options });
  }
}

export interface BundleID {
  id: string;

  type: 'bundleIds';

  attributes?: BundleID.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BundleID.Relationships;
}

export namespace BundleID {
  export interface Attributes {
    identifier?: string;

    name?: string;

    platform?: BundleIDsAPI.BundleIDPlatform;

    seedId?: string;
  }

  export interface Relationships {
    app?: Relationships.App;

    bundleIdCapabilities?: Relationships.BundleIDCapabilities;

    profiles?: Relationships.Profiles;
  }

  export namespace Relationships {
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

    export interface BundleIDCapabilities {
      data?: Array<BundleIDCapabilities.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace BundleIDCapabilities {
      export interface Data {
        id: string;

        type: 'bundleIdCapabilities';
      }
    }

    export interface Profiles {
      data?: Array<Profiles.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Profiles {
      export interface Data {
        id: string;

        type: 'profiles';
      }
    }
  }
}

export type BundleIDPlatform = 'IOS' | 'MAC_OS' | 'UNIVERSAL';

export interface BundleIDResponse {
  data: BundleID;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<ProfilesAPI.Profile | BundleIDCapabilitiesAPI.BundleIDCapability | AppsAPI.App>;
}

export interface BundleIDListResponse {
  data: Array<BundleID>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<ProfilesAPI.Profile | BundleIDCapabilitiesAPI.BundleIDCapability | AppsAPI.App>;

  meta?: ActorsAPI.PagingInformation;
}

export interface BundleIDRetrieveBundleIDCapabilitiesResponse {
  data: Array<BundleIDCapabilitiesAPI.BundleIDCapability>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface BundleIDRetrieveProfilesResponse {
  data: Array<ProfilesAPI.Profile>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface BundleIDCreateParams {
  data: BundleIDCreateParams.Data;
}

export namespace BundleIDCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'bundleIds';
  }

  export namespace Data {
    export interface Attributes {
      identifier: string;

      name: string;

      platform: BundleIDsAPI.BundleIDPlatform;

      seedId?: string;
    }
  }
}

export interface BundleIDRetrieveParams {
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
   * the fields to include for returned resources of type bundleIdCapabilities
   */
  'fields[bundleIdCapabilities]'?: Array<'capabilityType' | 'settings'>;

  /**
   * the fields to include for returned resources of type bundleIds
   */
  'fields[bundleIds]'?: Array<
    'name' | 'platform' | 'identifier' | 'seedId' | 'profiles' | 'bundleIdCapabilities' | 'app'
  >;

  /**
   * the fields to include for returned resources of type profiles
   */
  'fields[profiles]'?: Array<
    | 'name'
    | 'platform'
    | 'profileType'
    | 'profileState'
    | 'profileContent'
    | 'uuid'
    | 'createdDate'
    | 'expirationDate'
    | 'bundleId'
    | 'devices'
    | 'certificates'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'profiles' | 'bundleIdCapabilities' | 'app'>;

  /**
   * maximum number of related bundleIdCapabilities returned (when they are included)
   */
  'limit[bundleIdCapabilities]'?: number;

  /**
   * maximum number of related profiles returned (when they are included)
   */
  'limit[profiles]'?: number;
}

export interface BundleIDUpdateParams {
  data: BundleIDUpdateParams.Data;
}

export namespace BundleIDUpdateParams {
  export interface Data {
    id: string;

    type: 'bundleIds';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      name?: string;
    }
  }
}

export interface BundleIDListParams {
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
   * the fields to include for returned resources of type bundleIdCapabilities
   */
  'fields[bundleIdCapabilities]'?: Array<'capabilityType' | 'settings'>;

  /**
   * the fields to include for returned resources of type bundleIds
   */
  'fields[bundleIds]'?: Array<
    'name' | 'platform' | 'identifier' | 'seedId' | 'profiles' | 'bundleIdCapabilities' | 'app'
  >;

  /**
   * the fields to include for returned resources of type profiles
   */
  'fields[profiles]'?: Array<
    | 'name'
    | 'platform'
    | 'profileType'
    | 'profileState'
    | 'profileContent'
    | 'uuid'
    | 'createdDate'
    | 'expirationDate'
    | 'bundleId'
    | 'devices'
    | 'certificates'
  >;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * filter by attribute 'identifier'
   */
  'filter[identifier]'?: Array<string>;

  /**
   * filter by attribute 'name'
   */
  'filter[name]'?: Array<string>;

  /**
   * filter by attribute 'platform'
   */
  'filter[platform]'?: Array<'IOS' | 'MAC_OS' | 'UNIVERSAL'>;

  /**
   * filter by attribute 'seedId'
   */
  'filter[seedId]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'profiles' | 'bundleIdCapabilities' | 'app'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related bundleIdCapabilities returned (when they are included)
   */
  'limit[bundleIdCapabilities]'?: number;

  /**
   * maximum number of related profiles returned (when they are included)
   */
  'limit[profiles]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<
    | 'name'
    | '-name'
    | 'platform'
    | '-platform'
    | 'identifier'
    | '-identifier'
    | 'seedId'
    | '-seedId'
    | 'id'
    | '-id'
  >;
}

export interface BundleIDRetrieveAppParams {
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

export interface BundleIDRetrieveBundleIDCapabilitiesParams {
  /**
   * the fields to include for returned resources of type bundleIdCapabilities
   */
  'fields[bundleIdCapabilities]'?: Array<'capabilityType' | 'settings'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface BundleIDRetrieveProfilesParams {
  /**
   * the fields to include for returned resources of type profiles
   */
  'fields[profiles]'?: Array<
    | 'name'
    | 'platform'
    | 'profileType'
    | 'profileState'
    | 'profileContent'
    | 'uuid'
    | 'createdDate'
    | 'expirationDate'
    | 'bundleId'
    | 'devices'
    | 'certificates'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;
}

BundleIDs.Relationships = RelationshipsAPIRelationships;

export declare namespace BundleIDs {
  export {
    type BundleID as BundleID,
    type BundleIDPlatform as BundleIDPlatform,
    type BundleIDResponse as BundleIDResponse,
    type BundleIDListResponse as BundleIDListResponse,
    type BundleIDRetrieveBundleIDCapabilitiesResponse as BundleIDRetrieveBundleIDCapabilitiesResponse,
    type BundleIDRetrieveProfilesResponse as BundleIDRetrieveProfilesResponse,
    type BundleIDCreateParams as BundleIDCreateParams,
    type BundleIDRetrieveParams as BundleIDRetrieveParams,
    type BundleIDUpdateParams as BundleIDUpdateParams,
    type BundleIDListParams as BundleIDListParams,
    type BundleIDRetrieveAppParams as BundleIDRetrieveAppParams,
    type BundleIDRetrieveBundleIDCapabilitiesParams as BundleIDRetrieveBundleIDCapabilitiesParams,
    type BundleIDRetrieveProfilesParams as BundleIDRetrieveProfilesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveAppResponse as RelationshipRetrieveAppResponse,
    type RelationshipRetrieveBundleIDCapabilitiesResponse as RelationshipRetrieveBundleIDCapabilitiesResponse,
    type RelationshipRetrieveProfilesResponse as RelationshipRetrieveProfilesResponse,
    type RelationshipRetrieveBundleIDCapabilitiesParams as RelationshipRetrieveBundleIDCapabilitiesParams,
    type RelationshipRetrieveProfilesParams as RelationshipRetrieveProfilesParams,
  };
}
