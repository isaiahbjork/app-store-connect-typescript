// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppsAPI from '../apps/apps';
import * as RelationshipsAPI from './relationships/relationships';
import { Relationships } from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterEnabledVersions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  /**
   * @deprecated
   */
  listCompatibleVersions(
    id: string,
    query: GameCenterEnabledVersionListCompatibleVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppsAPI.GameCenterEnabledVersionsResponse> {
    return this._client.get(path`/v1/gameCenterEnabledVersions/${id}/compatibleVersions`, {
      query,
      ...options,
    });
  }
}

export interface GameCenterEnabledVersionListCompatibleVersionsParams {
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
   * the fields to include for returned resources of type gameCenterEnabledVersions
   */
  'fields[gameCenterEnabledVersions]'?: Array<
    'platform' | 'versionString' | 'iconAsset' | 'compatibleVersions' | 'app'
  >;

  /**
   * filter by id(s) of related 'app'
   */
  'filter[app]'?: Array<string>;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * filter by attribute 'platform'
   */
  'filter[platform]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

  /**
   * filter by attribute 'versionString'
   */
  'filter[versionString]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'compatibleVersions' | 'app'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related compatibleVersions returned (when they are included)
   */
  'limit[compatibleVersions]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'versionString' | '-versionString'>;
}

GameCenterEnabledVersions.Relationships = Relationships;

export declare namespace GameCenterEnabledVersions {
  export { type GameCenterEnabledVersionListCompatibleVersionsParams as GameCenterEnabledVersionListCompatibleVersionsParams };

  export { Relationships as Relationships };
}
