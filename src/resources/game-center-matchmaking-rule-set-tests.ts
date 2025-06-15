// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppStoreVersionExperimentsAPI from './app-store-version-experiments/app-store-version-experiments';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GameCenterMatchmakingRuleSetTests extends APIResource {
  create(
    body: GameCenterMatchmakingRuleSetTestCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterMatchmakingRuleSetTestCreateResponse> {
    return this._client.post('/v1/gameCenterMatchmakingRuleSetTests', { body, ...options });
  }
}

export interface GameCenterMatchmakingRuleSetTestCreateResponse {
  data: GameCenterMatchmakingRuleSetTestCreateResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace GameCenterMatchmakingRuleSetTestCreateResponse {
  export interface Data {
    id: string;

    type: 'gameCenterMatchmakingRuleSetTests';

    attributes?: Data.Attributes;

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }

  export namespace Data {
    export interface Attributes {
      matchmakingResults?: Array<Array<Attributes.MatchmakingResult>>;
    }

    export namespace Attributes {
      export interface MatchmakingResult {
        requestName?: string;

        teamAssignments?: Array<MatchmakingResult.TeamAssignment>;
      }

      export namespace MatchmakingResult {
        export interface TeamAssignment {
          playerId?: string;

          team?: string;
        }
      }
    }
  }
}

export interface GameCenterMatchmakingRuleSetTestCreateParams {
  data: GameCenterMatchmakingRuleSetTestCreateParams.Data;

  included?: Array<
    | GameCenterMatchmakingRuleSetTestCreateParams.GameCenterMatchmakingTestPlayerPropertyInlineCreate
    | GameCenterMatchmakingRuleSetTestCreateParams.GameCenterMatchmakingTestRequestInlineCreate
  >;
}

export namespace GameCenterMatchmakingRuleSetTestCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'gameCenterMatchmakingRuleSetTests';
  }

  export namespace Data {
    export interface Relationships {
      matchmakingRequests: Relationships.MatchmakingRequests;

      matchmakingRuleSet: Relationships.MatchmakingRuleSet;
    }

    export namespace Relationships {
      export interface MatchmakingRequests {
        data: Array<MatchmakingRequests.Data>;
      }

      export namespace MatchmakingRequests {
        export interface Data {
          id: string;

          type: 'gameCenterMatchmakingTestRequests';
        }
      }

      export interface MatchmakingRuleSet {
        data: MatchmakingRuleSet.Data;
      }

      export namespace MatchmakingRuleSet {
        export interface Data {
          id: string;

          type: 'gameCenterMatchmakingRuleSets';
        }
      }
    }
  }

  export interface GameCenterMatchmakingTestPlayerPropertyInlineCreate {
    attributes: GameCenterMatchmakingTestPlayerPropertyInlineCreate.Attributes;

    type: 'gameCenterMatchmakingTestPlayerProperties';

    id?: string;
  }

  export namespace GameCenterMatchmakingTestPlayerPropertyInlineCreate {
    export interface Attributes {
      playerId: string;

      properties?: Array<Attributes.Property>;
    }

    export namespace Attributes {
      export interface Property {
        key?: string;

        value?: string;
      }
    }
  }

  export interface GameCenterMatchmakingTestRequestInlineCreate {
    attributes: GameCenterMatchmakingTestRequestInlineCreate.Attributes;

    type: 'gameCenterMatchmakingTestRequests';

    id?: string;

    relationships?: GameCenterMatchmakingTestRequestInlineCreate.Relationships;
  }

  export namespace GameCenterMatchmakingTestRequestInlineCreate {
    export interface Attributes {
      appVersion: string;

      bundleId: string;

      platform: AppStoreVersionExperimentsAPI.Platform;

      requestName: string;

      secondsInQueue: number;

      locale?:
        | 'AR-SA'
        | 'CA-ES'
        | 'CS-CZ'
        | 'DA-DK'
        | 'DE-DE'
        | 'EL-GR'
        | 'EN-AU'
        | 'EN-GB'
        | 'EN-US'
        | 'EN-KY'
        | 'ES-ES'
        | 'ES-MX'
        | 'FI-FI'
        | 'FR-CA'
        | 'FR-FR'
        | 'HI-IN'
        | 'HR-HR'
        | 'HU-HU'
        | 'ID-ID'
        | 'IT-IT'
        | 'IW-IL'
        | 'JA-JP'
        | 'KO-KR'
        | 'MS-MY'
        | 'NL-NL'
        | 'NO-NO'
        | 'PL-PL'
        | 'PT-BR'
        | 'PT-PT'
        | 'RO-RO'
        | 'RU-RU'
        | 'SK-SK'
        | 'SV-SE'
        | 'TH-TH'
        | 'TR-TR'
        | 'UK-UA'
        | 'ZH-CN'
        | 'ZH-TW'
        | 'ZH-HK';

      location?: Attributes.Location;

      maxPlayers?: number;

      minPlayers?: number;

      playerCount?: number;
    }

    export namespace Attributes {
      export interface Location {
        latitude?: number;

        longitude?: number;
      }
    }

    export interface Relationships {
      matchmakingPlayerProperties?: Relationships.MatchmakingPlayerProperties;
    }

    export namespace Relationships {
      export interface MatchmakingPlayerProperties {
        data?: Array<MatchmakingPlayerProperties.Data>;
      }

      export namespace MatchmakingPlayerProperties {
        export interface Data {
          id: string;

          type: 'gameCenterMatchmakingTestPlayerProperties';
        }
      }
    }
  }
}

export declare namespace GameCenterMatchmakingRuleSetTests {
  export {
    type GameCenterMatchmakingRuleSetTestCreateResponse as GameCenterMatchmakingRuleSetTestCreateResponse,
    type GameCenterMatchmakingRuleSetTestCreateParams as GameCenterMatchmakingRuleSetTestCreateParams,
  };
}
