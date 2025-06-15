// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class GameCenterMatchmakingTeams extends APIResource {
  create(
    body: GameCenterMatchmakingTeamCreateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterMatchmakingTeamResponse> {
    return this._client.post('/v1/gameCenterMatchmakingTeams', { body, ...options });
  }

  update(
    id: string,
    body: GameCenterMatchmakingTeamUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GameCenterMatchmakingTeamResponse> {
    return this._client.patch(path`/v1/gameCenterMatchmakingTeams/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/gameCenterMatchmakingTeams/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GameCenterMatchmakingTeam {
  id: string;

  type: 'gameCenterMatchmakingTeams';

  attributes?: GameCenterMatchmakingTeam.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace GameCenterMatchmakingTeam {
  export interface Attributes {
    maxPlayers?: number;

    minPlayers?: number;

    referenceName?: string;
  }
}

export interface GameCenterMatchmakingTeamResponse {
  data: GameCenterMatchmakingTeam;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface GameCenterMatchmakingTeamCreateParams {
  data: GameCenterMatchmakingTeamCreateParams.Data;
}

export namespace GameCenterMatchmakingTeamCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'gameCenterMatchmakingTeams';
  }

  export namespace Data {
    export interface Attributes {
      maxPlayers: number;

      minPlayers: number;

      referenceName: string;
    }

    export interface Relationships {
      ruleSet: Relationships.RuleSet;
    }

    export namespace Relationships {
      export interface RuleSet {
        data: RuleSet.Data;
      }

      export namespace RuleSet {
        export interface Data {
          id: string;

          type: 'gameCenterMatchmakingRuleSets';
        }
      }
    }
  }
}

export interface GameCenterMatchmakingTeamUpdateParams {
  data: GameCenterMatchmakingTeamUpdateParams.Data;
}

export namespace GameCenterMatchmakingTeamUpdateParams {
  export interface Data {
    id: string;

    type: 'gameCenterMatchmakingTeams';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      maxPlayers?: number;

      minPlayers?: number;
    }
  }
}

export declare namespace GameCenterMatchmakingTeams {
  export {
    type GameCenterMatchmakingTeam as GameCenterMatchmakingTeam,
    type GameCenterMatchmakingTeamResponse as GameCenterMatchmakingTeamResponse,
    type GameCenterMatchmakingTeamCreateParams as GameCenterMatchmakingTeamCreateParams,
    type GameCenterMatchmakingTeamUpdateParams as GameCenterMatchmakingTeamUpdateParams,
  };
}
