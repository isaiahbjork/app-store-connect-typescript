// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as GameCenterChallengeImagesAPI from '../game-center-challenge-images';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveImageResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as GameCenterChallengeVersionsAPI from '../game-center-challenge-versions/game-center-challenge-versions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterChallengeLocalizations extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: GameCenterChallengeLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeLocalizationResponse> {
    return this._client.post('/v1/gameCenterChallengeLocalizations', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterChallengeLocalizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeLocalizationResponse> {
    return this._client.get(path`/v1/gameCenterChallengeLocalizations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterChallengeLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeLocalizationResponse> {
    return this._client.patch(path`/v1/gameCenterChallengeLocalizations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterChallengeLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveImage(
    id: string,
    query: GameCenterChallengeLocalizationRetrieveImageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterChallengeImagesAPI.GameCenterChallengeImageResponse> {
    return this._client.get(path`/v1/gameCenterChallengeLocalizations/${id}/image`, { query, ...options });
  }
}

export interface GameCenterChallengeLocalization {
  id: string;

  type: 'gameCenterChallengeLocalizations';

  attributes?: GameCenterChallengeLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterChallengeLocalization.Relationships;
}

export namespace GameCenterChallengeLocalization {
  export interface Attributes {
    description?: string;

    locale?: string;

    name?: string;
  }

  export interface Relationships {
    image?: Relationships.Image;

    version?: Relationships.Version;
  }

  export namespace Relationships {
    export interface Image {
      data?: Image.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace Image {
      export interface Data {
        id: string;

        type: 'gameCenterChallengeImages';
      }
    }

    export interface Version {
      data?: Version.Data;
    }

    export namespace Version {
      export interface Data {
        id: string;

        type: 'gameCenterChallengeVersions';
      }
    }
  }
}

export interface GameCenterChallengeLocalizationResponse {
  data: GameCenterChallengeLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | GameCenterChallengeVersionsAPI.GameCenterChallengeVersion
    | GameCenterChallengeImagesAPI.GameCenterChallengeImage
  >;
}

export interface GameCenterChallengeLocalizationCreateParams {
  data: GameCenterChallengeLocalizationCreateParams.Data;
}

export namespace GameCenterChallengeLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'gameCenterChallengeLocalizations';
  }

  export namespace Data {
    export interface Attributes {
      locale: string;

      name: string;

      description?: string;
    }

    export interface Relationships {
      version: Relationships.Version;
    }

    export namespace Relationships {
      export interface Version {
        data: Version.Data;
      }

      export namespace Version {
        export interface Data {
          id: string;

          type: 'gameCenterChallengeVersions';
        }
      }
    }
  }
}

export interface GameCenterChallengeLocalizationRetrieveParams {
  /**
   * the fields to include for returned resources of type gameCenterChallengeImages
   */
  'fields[gameCenterChallengeImages]'?: Array<
    'fileSize' | 'fileName' | 'imageAsset' | 'uploadOperations' | 'assetDeliveryState'
  >;

  /**
   * the fields to include for returned resources of type
   * gameCenterChallengeLocalizations
   */
  'fields[gameCenterChallengeLocalizations]'?: Array<'locale' | 'name' | 'description' | 'version' | 'image'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'version' | 'image'>;
}

export interface GameCenterChallengeLocalizationUpdateParams {
  data: GameCenterChallengeLocalizationUpdateParams.Data;
}

export namespace GameCenterChallengeLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterChallengeLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      description?: string;

      name?: string;
    }
  }
}

export interface GameCenterChallengeLocalizationRetrieveImageParams {
  /**
   * the fields to include for returned resources of type gameCenterChallengeImages
   */
  'fields[gameCenterChallengeImages]'?: Array<
    'fileSize' | 'fileName' | 'imageAsset' | 'uploadOperations' | 'assetDeliveryState'
  >;
}

GameCenterChallengeLocalizations.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterChallengeLocalizations {
  export {
    type GameCenterChallengeLocalization as GameCenterChallengeLocalization,
    type GameCenterChallengeLocalizationResponse as GameCenterChallengeLocalizationResponse,
    type GameCenterChallengeLocalizationCreateParams as GameCenterChallengeLocalizationCreateParams,
    type GameCenterChallengeLocalizationRetrieveParams as GameCenterChallengeLocalizationRetrieveParams,
    type GameCenterChallengeLocalizationUpdateParams as GameCenterChallengeLocalizationUpdateParams,
    type GameCenterChallengeLocalizationRetrieveImageParams as GameCenterChallengeLocalizationRetrieveImageParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveImageResponse as RelationshipRetrieveImageResponse,
  };
}
