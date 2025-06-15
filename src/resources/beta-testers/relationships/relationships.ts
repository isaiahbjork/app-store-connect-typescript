// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AppsAPI from './apps';
import { AppDeleteParams, AppListParams, AppListResponse, Apps } from './apps';
import * as BetaGroupsAPI from './beta-groups';
import {
  BetaGroupCreateParams,
  BetaGroupDeleteParams,
  BetaGroupListParams,
  BetaGroupListResponse,
  BetaGroups,
  BetaTesterBetaGroupsLinkagesRequest,
} from './beta-groups';
import * as BuildsAPI from './builds';
import {
  BetaTesterBuildsLinkagesRequest,
  BuildCreateParams,
  BuildDeleteParams,
  BuildListParams,
  BuildListResponse,
  Builds,
} from './builds';

export class Relationships extends APIResource {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  betaGroups: BetaGroupsAPI.BetaGroups = new BetaGroupsAPI.BetaGroups(this._client);
  builds: BuildsAPI.Builds = new BuildsAPI.Builds(this._client);
}

Relationships.Apps = Apps;
Relationships.BetaGroups = BetaGroups;
Relationships.Builds = Builds;

export declare namespace Relationships {
  export {
    Apps as Apps,
    type AppListResponse as AppListResponse,
    type AppListParams as AppListParams,
    type AppDeleteParams as AppDeleteParams,
  };

  export {
    BetaGroups as BetaGroups,
    type BetaTesterBetaGroupsLinkagesRequest as BetaTesterBetaGroupsLinkagesRequest,
    type BetaGroupListResponse as BetaGroupListResponse,
    type BetaGroupCreateParams as BetaGroupCreateParams,
    type BetaGroupListParams as BetaGroupListParams,
    type BetaGroupDeleteParams as BetaGroupDeleteParams,
  };

  export {
    Builds as Builds,
    type BetaTesterBuildsLinkagesRequest as BetaTesterBuildsLinkagesRequest,
    type BuildListResponse as BuildListResponse,
    type BuildCreateParams as BuildCreateParams,
    type BuildListParams as BuildListParams,
    type BuildDeleteParams as BuildDeleteParams,
  };
}
