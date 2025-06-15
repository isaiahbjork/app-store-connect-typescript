// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as GameCenterActivityImagesAPI from '../game-center-activity-images';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveImageResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as GameCenterActivityVersionsAPI from '../game-center-activity-versions/game-center-activity-versions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GameCenterActivityLocalizations extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: GameCenterActivityLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityLocalizationResponse> {
    return this._client.post('/v1/gameCenterActivityLocalizations', { body, ...options });
  }

  retrieve(
    id: string,
    query: GameCenterActivityLocalizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityLocalizationResponse> {
    return this._client.get(path`/v1/gameCenterActivityLocalizations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: GameCenterActivityLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityLocalizationResponse> {
    return this._client.patch(path`/v1/gameCenterActivityLocalizations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterActivityLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveImage(
    id: string,
    query: GameCenterActivityLocalizationRetrieveImageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GameCenterActivityImagesAPI.GameCenterActivityImageResponse> {
    return this._client.get(path`/v1/gameCenterActivityLocalizations/${id}/image`, { query, ...options });
  }
}

export interface GameCenterActivityLocalization {
  id: string;

  type: 'gameCenterActivityLocalizations';

  attributes?: GameCenterActivityLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: GameCenterActivityLocalization.Relationships;
}

export namespace GameCenterActivityLocalization {
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

        type: 'gameCenterActivityImages';
      }
    }

    export interface Version {
      data?: Version.Data;
    }

    export namespace Version {
      export interface Data {
        id: string;

        type: 'gameCenterActivityVersions';
      }
    }
  }
}

export interface GameCenterActivityLocalizationResponse {
  data: GameCenterActivityLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | GameCenterActivityVersionsAPI.GameCenterActivityVersion
    | GameCenterActivityImagesAPI.GameCenterActivityImage
  >;
}

export interface GameCenterActivityLocalizationCreateParams {
  data: GameCenterActivityLocalizationCreateParams.Data;
}

export namespace GameCenterActivityLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'gameCenterActivityLocalizations';
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

          type: 'gameCenterActivityVersions';
        }
      }
    }
  }
}

export interface GameCenterActivityLocalizationRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'version' | 'image'>;
}

export interface GameCenterActivityLocalizationUpdateParams {
  data: GameCenterActivityLocalizationUpdateParams.Data;
}

export namespace GameCenterActivityLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterActivityLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      description?: string;

      name?: string;
    }
  }
}

export interface GameCenterActivityLocalizationRetrieveImageParams {
  /**
   * the fields to include for returned resources of type gameCenterActivityImages
   */
  'fields[gameCenterActivityImages]'?: Array<
    'fileSize' | 'fileName' | 'imageAsset' | 'uploadOperations' | 'assetDeliveryState'
  >;
}

GameCenterActivityLocalizations.Relationships = RelationshipsAPIRelationships;

export declare namespace GameCenterActivityLocalizations {
  export {
    type GameCenterActivityLocalization as GameCenterActivityLocalization,
    type GameCenterActivityLocalizationResponse as GameCenterActivityLocalizationResponse,
    type GameCenterActivityLocalizationCreateParams as GameCenterActivityLocalizationCreateParams,
    type GameCenterActivityLocalizationRetrieveParams as GameCenterActivityLocalizationRetrieveParams,
    type GameCenterActivityLocalizationUpdateParams as GameCenterActivityLocalizationUpdateParams,
    type GameCenterActivityLocalizationRetrieveImageParams as GameCenterActivityLocalizationRetrieveImageParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveImageResponse as RelationshipRetrieveImageResponse,
  };
}
