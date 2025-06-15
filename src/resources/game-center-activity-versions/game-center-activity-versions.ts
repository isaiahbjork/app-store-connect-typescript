// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GameCenterActivityVersionsAPI from './game-center-activity-versions';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as GameCenterActivityImagesAPI from '../game-center-activity-images';
import * as GameCenterActivityVersionReleasesAPI from '../game-center-activity-version-releases';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as GameCenterActivitiesAPI from '../game-center-activities/game-center-activities';
import * as GameCenterActivityLocalizationsAPI from '../game-center-activity-localizations/game-center-activity-localizations';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListLocalizationsParams,
  RelationshipListLocalizationsResponse,
  RelationshipRetrieveDefaultImageResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterActivityVersions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: GameCenterActivityVersionCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityVersionResponse> {
    return this._client.post('/v1/gameCenterActivityVersions', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterActivityVersionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityVersionResponse> {
    return this._client.get(path`/v1/gameCenterActivityVersions/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterActivityVersionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityVersionResponse> {
    return this._client.patch(path`/v1/gameCenterActivityVersions/${id}`, { body, ...options });
  }

  listLocalizations(
    id: string,
    query: GameCenterActivityVersionListLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityVersionListLocalizationsResponse> {
    return this._client.get(path`/v1/gameCenterActivityVersions/${id}/localizations`, { query, ...options });
  }

  retrieveDefaultImage(
    id: string,
    query: GameCenterActivityVersionRetrieveDefaultImageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityImagesAPI.GameCenterActivityImageResponse> {
    return this._client.get(path`/v1/gameCenterActivityVersions/${id}/defaultImage`, { query, ...options });
  }
}

export interface GameCenterActivityVersion {
  id: string;

  type: 'gameCenterActivityVersions';

  attributes?: GameCenterActivityVersion.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterActivityVersion.Relationships;
}

export namespace GameCenterActivityVersion {
  export interface Attributes {
    fallbackUrl?: string;

    state?: GameCenterActivityVersionsAPI.GameCenterVersionState;

    version?: number;
  }

  export interface Relationships {
    activity?: Relationships.Activity;

    defaultImage?: Relationships.DefaultImage;

    localizations?: Relationships.Localizations;

    releases?: Relationships.Releases;
  }

  export namespace Relationships {
    export interface Activity {
      data?: Activity.Data;
    }

    export namespace Activity {
      export interface Data {
        id: string;

        type: 'gameCenterActivities';
      }
    }

    export interface DefaultImage {
      data?: DefaultImage.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace DefaultImage {
      export interface Data {
        id: string;

        type: 'gameCenterActivityImages';
      }
    }

    export interface Localizations {
      data?: Array<Localizations.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Localizations {
      export interface Data {
        id: string;

        type: 'gameCenterActivityLocalizations';
      }
    }

    export interface Releases {
      data?: Array<Releases.Data>;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Releases {
      export interface Data {
        id: string;

        type: 'gameCenterActivityVersionReleases';
      }
    }
  }
}

export interface GameCenterActivityVersionResponse {
  data: GameCenterActivityVersion;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | GameCenterActivitiesAPI.GameCenterActivity
    | GameCenterActivityLocalizationsAPI.GameCenterActivityLocalization
    | GameCenterActivityImagesAPI.GameCenterActivityImage
    | GameCenterActivityVersionReleasesAPI.GameCenterActivityVersionRelease
  >;
}

export type GameCenterVersionState =
  | 'PREPARE_FOR_SUBMISSION'
  | 'READY_FOR_REVIEW'
  | 'WAITING_FOR_REVIEW'
  | 'IN_REVIEW'
  | 'REJECTED'
  | 'ACCEPTED'
  | 'PENDING_RELEASE'
  | 'LIVE'
  | 'REPLACED_WITH_NEW_VERSION';

export interface GameCenterActivityVersionListLocalizationsResponse {
  data: Array<GameCenterActivityLocalizationsAPI.GameCenterActivityLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<GameCenterActivityVersion | GameCenterActivityImagesAPI.GameCenterActivityImage>;

  meta?: ActorsAPI.PagingInformation;
}

export interface GameCenterActivityVersionCreateParams {
  data: GameCenterActivityVersionCreateParams.Data;
}

export namespace GameCenterActivityVersionCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'gameCenterActivityVersions';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Relationships {
      activity: Relationships.Activity;
    }

    export namespace Relationships {
      export interface Activity {
        data: Activity.Data;
      }

      export namespace Activity {
        export interface Data {
          id: string;

          type: 'gameCenterActivities';
        }
      }
    }

    export interface Attributes {
      fallbackUrl?: string;
    }
  }
}

export interface GameCenterActivityVersionRetrieveParams {
  /**
   * the fields to include for returned resources of type gameCenterActivityImages
   */
  'fields[gameCenterActivityImages]'?: Array<
    'fileSize' | 'fileName' | 'imageAsset' | 'uploadOperations' | 'assetDeliveryState'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterActivityLocalizations
   */
  'fields[gameCenterActivityLocalizations]'?: Array<'locale' | 'name' | 'description' | 'version' | 'image'>;

  /**
   * the fields to include for returned resources of type gameCenterActivityVersions
   */
  'fields[gameCenterActivityVersions]'?: Array<
    'version' | 'state' | 'fallbackUrl' | 'activity' | 'localizations' | 'defaultImage' | 'releases'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'activity' | 'localizations' | 'defaultImage' | 'releases'>;

  /**
   * maximum number of related localizations returned (when they are included)
   */
  'limit[localizations]'?: number;

  /**
   * maximum number of related releases returned (when they are included)
   */
  'limit[releases]'?: number;
}

export interface GameCenterActivityVersionUpdateParams {
  data: GameCenterActivityVersionUpdateParams.Data;
}

export namespace GameCenterActivityVersionUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterActivityVersions';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      fallbackUrl?: string;
    }
  }
}

export interface GameCenterActivityVersionListLocalizationsParams {
  /**
   * the fields to include for returned resources of type gameCenterActivityImages
   */
  'fields[gameCenterActivityImages]'?: Array<
    'fileSize' | 'fileName' | 'imageAsset' | 'uploadOperations' | 'assetDeliveryState'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterActivityLocalizations
   */
  'fields[gameCenterActivityLocalizations]'?: Array<'locale' | 'name' | 'description' | 'version' | 'image'>;

  /**
   * the fields to include for returned resources of type gameCenterActivityVersions
   */
  'fields[gameCenterActivityVersions]'?: Array<
    'version' | 'state' | 'fallbackUrl' | 'activity' | 'localizations' | 'defaultImage' | 'releases'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'version' | 'image'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface GameCenterActivityVersionRetrieveDefaultImageParams {
  /**
   * the fields to include for returned resources of type gameCenterActivityImages
   */
  'fields[gameCenterActivityImages]'?: Array<
    'fileSize' | 'fileName' | 'imageAsset' | 'uploadOperations' | 'assetDeliveryState'
  >;
}

GameCenterActivityVersions.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterActivityVersions {
  export {
    type GameCenterActivityVersion as GameCenterActivityVersion,
    type GameCenterActivityVersionResponse as GameCenterActivityVersionResponse,
    type GameCenterVersionState as GameCenterVersionState,
    type GameCenterActivityVersionListLocalizationsResponse as GameCenterActivityVersionListLocalizationsResponse,
    type GameCenterActivityVersionCreateParams as GameCenterActivityVersionCreateParams,
    type GameCenterActivityVersionRetrieveParams as GameCenterActivityVersionRetrieveParams,
    type GameCenterActivityVersionUpdateParams as GameCenterActivityVersionUpdateParams,
    type GameCenterActivityVersionListLocalizationsParams as GameCenterActivityVersionListLocalizationsParams,
    type GameCenterActivityVersionRetrieveDefaultImageParams as GameCenterActivityVersionRetrieveDefaultImageParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListLocalizationsResponse as RelationshipListLocalizationsResponse,
    type RelationshipRetrieveDefaultImageResponse as RelationshipRetrieveDefaultImageResponse,
    type RelationshipListLocalizationsParams as RelationshipListLocalizationsParams,
  };
}
