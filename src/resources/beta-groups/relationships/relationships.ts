// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccessibilityDeclarationsAPI from '../../accessibility-declarations';
import * as ActorsAPI from '../../actors';
import * as BetaTestersAPI from './beta-testers';
import {
  BetaGroupBetaTestersLinkagesRequest,
  BetaTesterAddParams,
  BetaTesterListParams,
  BetaTesterRemoveParams,
  BetaTesters,
} from './beta-testers';
import * as BuildsAPI from './builds';
import {
  BetaGroupBuildsLinkagesRequest,
  BuildAddParams,
  BuildListParams,
  BuildRemoveParams,
  Builds,
} from './builds';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Relationships extends APIResource {
  betaTesters: BetaTestersAPI.BetaTesters = new BetaTestersAPI.BetaTesters(this._client);
  builds: BuildsAPI.Builds = new BuildsAPI.Builds(this._client);

  checkBetaRecruitmentCriterionCompatibleBuild(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipCheckBetaRecruitmentCriterionCompatibleBuildResponse> {
    return this._client.get(
      path`/v1/betaGroups/${id}/relationships/betaRecruitmentCriterionCompatibleBuildCheck`,
      options,
    );
  }

  listBetaRecruitmentCriteria(
    id: string,
    options?: RequestOptions,
  ): APIPromise<RelationshipListBetaRecruitmentCriteriaResponse> {
    return this._client.get(path`/v1/betaGroups/${id}/relationships/betaRecruitmentCriteria`, options);
  }

  listBetaTesters(
    id: string,
    query: RelationshipListBetaTestersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListBetaTestersResponse> {
    return this._client.get(path`/v1/betaGroups/${id}/relationships/betaTesters`, { query, ...options });
  }

  listBuilds(
    id: string,
    query: RelationshipListBuildsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelationshipListBuildsResponse> {
    return this._client.get(path`/v1/betaGroups/${id}/relationships/builds`, { query, ...options });
  }

  retrieveApp(id: string, options?: RequestOptions): APIPromise<RelationshipRetrieveAppResponse> {
    return this._client.get(path`/v1/betaGroups/${id}/relationships/app`, options);
  }
}

export interface RelationshipCheckBetaRecruitmentCriterionCompatibleBuildResponse {
  data: RelationshipCheckBetaRecruitmentCriterionCompatibleBuildResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipCheckBetaRecruitmentCriterionCompatibleBuildResponse {
  export interface Data {
    id: string;

    type: 'betaRecruitmentCriterionCompatibleBuildChecks';
  }
}

export interface RelationshipListBetaRecruitmentCriteriaResponse {
  data: RelationshipListBetaRecruitmentCriteriaResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipListBetaRecruitmentCriteriaResponse {
  export interface Data {
    id: string;

    type: 'betaRecruitmentCriteria';
  }
}

export interface RelationshipListBetaTestersResponse {
  data: Array<RelationshipListBetaTestersResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListBetaTestersResponse {
  export interface Data {
    id: string;

    type: 'betaTesters';
  }
}

export interface RelationshipListBuildsResponse {
  data: Array<RelationshipListBuildsResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace RelationshipListBuildsResponse {
  export interface Data {
    id: string;

    type: 'builds';
  }
}

export interface RelationshipRetrieveAppResponse {
  data: RelationshipRetrieveAppResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace RelationshipRetrieveAppResponse {
  export interface Data {
    id: string;

    type: 'apps';
  }
}

export interface RelationshipListBetaTestersParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface RelationshipListBuildsParams {
  /**
   * maximum resources per page
   */
  limit?: number;
}

Relationships.BetaTesters = BetaTesters;
Relationships.Builds = Builds;

export declare namespace Relationships {
  export {
    type RelationshipCheckBetaRecruitmentCriterionCompatibleBuildResponse as RelationshipCheckBetaRecruitmentCriterionCompatibleBuildResponse,
    type RelationshipListBetaRecruitmentCriteriaResponse as RelationshipListBetaRecruitmentCriteriaResponse,
    type RelationshipListBetaTestersResponse as RelationshipListBetaTestersResponse,
    type RelationshipListBuildsResponse as RelationshipListBuildsResponse,
    type RelationshipRetrieveAppResponse as RelationshipRetrieveAppResponse,
    type RelationshipListBetaTestersParams as RelationshipListBetaTestersParams,
    type RelationshipListBuildsParams as RelationshipListBuildsParams,
  };

  export {
    BetaTesters as BetaTesters,
    type BetaGroupBetaTestersLinkagesRequest as BetaGroupBetaTestersLinkagesRequest,
    type BetaTesterListParams as BetaTesterListParams,
    type BetaTesterAddParams as BetaTesterAddParams,
    type BetaTesterRemoveParams as BetaTesterRemoveParams,
  };

  export {
    Builds as Builds,
    type BetaGroupBuildsLinkagesRequest as BetaGroupBuildsLinkagesRequest,
    type BuildListParams as BuildListParams,
    type BuildAddParams as BuildAddParams,
    type BuildRemoveParams as BuildRemoveParams,
  };
}
