// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as GameCenterAchievementsAPI from './game-center-achievements';
import {
  GameCenterAchievementListParams,
  GameCenterAchievementListResponse,
  GameCenterAchievementUpdateParams,
  GameCenterAchievements,
} from './game-center-achievements';
import * as GameCenterActivitiesAPI from './game-center-activities';
import {
  GameCenterActivities,
  GameCenterActivityListParams,
  GameCenterActivityListResponse,
} from './game-center-activities';
import * as GameCenterChallengesAPI from './game-center-challenges';
import {
  GameCenterChallengeListParams,
  GameCenterChallengeListResponse,
  GameCenterChallenges,
} from './game-center-challenges';
import * as GameCenterDetailsAPI from './game-center-details';
import {
  GameCenterDetailRetrieveParams,
  GameCenterDetailRetrieveResponse,
  GameCenterDetails,
} from './game-center-details';
import * as GameCenterLeaderboardSetsAPI from './game-center-leaderboard-sets';
import {
  GameCenterLeaderboardSetListParams,
  GameCenterLeaderboardSetListResponse,
  GameCenterLeaderboardSetUpdateParams,
  GameCenterLeaderboardSets,
} from './game-center-leaderboard-sets';
import * as GameCenterLeaderboardsAPI from './game-center-leaderboards';
import {
  GameCenterLeaderboardListParams,
  GameCenterLeaderboardListResponse,
  GameCenterLeaderboardUpdateParams,
  GameCenterLeaderboards,
} from './game-center-leaderboards';

export class Relationships extends APIResource {
  gameCenterAchievements: GameCenterAchievementsAPI.GameCenterAchievements =
    new GameCenterAchievementsAPI.GameCenterAchievements(this._client);
  gameCenterActivities: GameCenterActivitiesAPI.GameCenterActivities =
    new GameCenterActivitiesAPI.GameCenterActivities(this._client);
  gameCenterChallenges: GameCenterChallengesAPI.GameCenterChallenges =
    new GameCenterChallengesAPI.GameCenterChallenges(this._client);
  gameCenterDetails: GameCenterDetailsAPI.GameCenterDetails = new GameCenterDetailsAPI.GameCenterDetails(
    this._client,
  );
  gameCenterLeaderboardSets: GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSets =
    new GameCenterLeaderboardSetsAPI.GameCenterLeaderboardSets(this._client);
  gameCenterLeaderboards: GameCenterLeaderboardsAPI.GameCenterLeaderboards =
    new GameCenterLeaderboardsAPI.GameCenterLeaderboards(this._client);
}

Relationships.GameCenterAchievements = GameCenterAchievements;
Relationships.GameCenterActivities = GameCenterActivities;
Relationships.GameCenterChallenges = GameCenterChallenges;
Relationships.GameCenterDetails = GameCenterDetails;
Relationships.GameCenterLeaderboardSets = GameCenterLeaderboardSets;
Relationships.GameCenterLeaderboards = GameCenterLeaderboards;

export declare namespace Relationships {
  export {
    GameCenterAchievements as GameCenterAchievements,
    type GameCenterAchievementListResponse as GameCenterAchievementListResponse,
    type GameCenterAchievementUpdateParams as GameCenterAchievementUpdateParams,
    type GameCenterAchievementListParams as GameCenterAchievementListParams,
  };

  export {
    GameCenterActivities as GameCenterActivities,
    type GameCenterActivityListResponse as GameCenterActivityListResponse,
    type GameCenterActivityListParams as GameCenterActivityListParams,
  };

  export {
    GameCenterChallenges as GameCenterChallenges,
    type GameCenterChallengeListResponse as GameCenterChallengeListResponse,
    type GameCenterChallengeListParams as GameCenterChallengeListParams,
  };

  export {
    GameCenterDetails as GameCenterDetails,
    type GameCenterDetailRetrieveResponse as GameCenterDetailRetrieveResponse,
    type GameCenterDetailRetrieveParams as GameCenterDetailRetrieveParams,
  };

  export {
    GameCenterLeaderboardSets as GameCenterLeaderboardSets,
    type GameCenterLeaderboardSetListResponse as GameCenterLeaderboardSetListResponse,
    type GameCenterLeaderboardSetUpdateParams as GameCenterLeaderboardSetUpdateParams,
    type GameCenterLeaderboardSetListParams as GameCenterLeaderboardSetListParams,
  };

  export {
    GameCenterLeaderboards as GameCenterLeaderboards,
    type GameCenterLeaderboardListResponse as GameCenterLeaderboardListResponse,
    type GameCenterLeaderboardUpdateParams as GameCenterLeaderboardUpdateParams,
    type GameCenterLeaderboardListParams as GameCenterLeaderboardListParams,
  };
}
