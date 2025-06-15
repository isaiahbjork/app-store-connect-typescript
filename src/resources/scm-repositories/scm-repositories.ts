// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as ScmGitReferencesAPI from '../scm-git-references';
import * as ScmPullRequestsAPI from '../scm-pull-requests';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as ScmProvidersAPI from '../scm-providers/scm-providers';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListGitReferencesParams,
  RelationshipListGitReferencesResponse,
  RelationshipListPullRequestsParams,
  RelationshipListPullRequestsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ScmRepositories extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: ScmRepositoryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScmRepositoryResponse> {
    return this._client.get(path`/v1/scmRepositories/${id}`, { query, ...options });
  }

  list(
    query: ScmRepositoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScmRepositories> {
    return this._client.get('/v1/scmRepositories', { query, ...options });
  }

  listGitReferences(
    id: string,
    query: ScmRepositoryListGitReferencesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScmRepositoryListGitReferencesResponse> {
    return this._client.get(path`/v1/scmRepositories/${id}/gitReferences`, { query, ...options });
  }

  listPullRequests(
    id: string,
    query: ScmRepositoryListPullRequestsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScmRepositoryListPullRequestsResponse> {
    return this._client.get(path`/v1/scmRepositories/${id}/pullRequests`, { query, ...options });
  }
}

export interface ScmRepositories {
  data: Array<ScmRepositoryDetails>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<ScmProvidersAPI.ScmProvider | ScmGitReferencesAPI.ScmGitReference>;

  meta?: ActorsAPI.PagingInformation;
}

export interface ScmRepositoryDetails {
  id: string;

  type: 'scmRepositories';

  attributes?: ScmRepositoryDetails.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: ScmRepositoryDetails.Relationships;
}

export namespace ScmRepositoryDetails {
  export interface Attributes {
    httpCloneUrl?: string;

    lastAccessedDate?: string;

    ownerName?: string;

    repositoryName?: string;

    sshCloneUrl?: string;
  }

  export interface Relationships {
    defaultBranch?: Relationships.DefaultBranch;

    gitReferences?: Relationships.GitReferences;

    pullRequests?: Relationships.PullRequests;

    scmProvider?: Relationships.ScmProvider;
  }

  export namespace Relationships {
    export interface DefaultBranch {
      data?: DefaultBranch.Data;
    }

    export namespace DefaultBranch {
      export interface Data {
        id: string;

        type: 'scmGitReferences';
      }
    }

    export interface GitReferences {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface PullRequests {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface ScmProvider {
      data?: ScmProvider.Data;
    }

    export namespace ScmProvider {
      export interface Data {
        id: string;

        type: 'scmProviders';
      }
    }
  }
}

export interface ScmRepositoryResponse {
  data: ScmRepositoryDetails;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<ScmProvidersAPI.ScmProvider | ScmGitReferencesAPI.ScmGitReference>;
}

export interface ScmRepositoryListGitReferencesResponse {
  data: Array<ScmGitReferencesAPI.ScmGitReference>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<ScmRepositoryDetails>;

  meta?: ActorsAPI.PagingInformation;
}

export interface ScmRepositoryListPullRequestsResponse {
  data: Array<ScmPullRequestsAPI.ScmPullRequest>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<ScmRepositoryDetails>;

  meta?: ActorsAPI.PagingInformation;
}

export interface ScmRepositoryRetrieveParams {
  /**
   * the fields to include for returned resources of type scmRepositories
   */
  'fields[scmRepositories]'?: Array<
    | 'lastAccessedDate'
    | 'httpCloneUrl'
    | 'sshCloneUrl'
    | 'ownerName'
    | 'repositoryName'
    | 'scmProvider'
    | 'defaultBranch'
    | 'gitReferences'
    | 'pullRequests'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'scmProvider' | 'defaultBranch'>;
}

export interface ScmRepositoryListParams {
  /**
   * the fields to include for returned resources of type scmRepositories
   */
  'fields[scmRepositories]'?: Array<
    | 'lastAccessedDate'
    | 'httpCloneUrl'
    | 'sshCloneUrl'
    | 'ownerName'
    | 'repositoryName'
    | 'scmProvider'
    | 'defaultBranch'
    | 'gitReferences'
    | 'pullRequests'
  >;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'scmProvider' | 'defaultBranch'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface ScmRepositoryListGitReferencesParams {
  /**
   * the fields to include for returned resources of type scmGitReferences
   */
  'fields[scmGitReferences]'?: Array<'name' | 'canonicalName' | 'isDeleted' | 'kind' | 'repository'>;

  /**
   * the fields to include for returned resources of type scmRepositories
   */
  'fields[scmRepositories]'?: Array<
    | 'lastAccessedDate'
    | 'httpCloneUrl'
    | 'sshCloneUrl'
    | 'ownerName'
    | 'repositoryName'
    | 'scmProvider'
    | 'defaultBranch'
    | 'gitReferences'
    | 'pullRequests'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'repository'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface ScmRepositoryListPullRequestsParams {
  /**
   * the fields to include for returned resources of type scmPullRequests
   */
  'fields[scmPullRequests]'?: Array<
    | 'title'
    | 'number'
    | 'webUrl'
    | 'sourceRepositoryOwner'
    | 'sourceRepositoryName'
    | 'sourceBranchName'
    | 'destinationRepositoryOwner'
    | 'destinationRepositoryName'
    | 'destinationBranchName'
    | 'isClosed'
    | 'isCrossRepository'
    | 'repository'
  >;

  /**
   * the fields to include for returned resources of type scmRepositories
   */
  'fields[scmRepositories]'?: Array<
    | 'lastAccessedDate'
    | 'httpCloneUrl'
    | 'sshCloneUrl'
    | 'ownerName'
    | 'repositoryName'
    | 'scmProvider'
    | 'defaultBranch'
    | 'gitReferences'
    | 'pullRequests'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'repository'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

ScmRepositories.Relationships = RelationshipsAPIRelationships;

export declare namespace ScmRepositories {
  export {
    type ScmRepositories as ScmRepositories,
    type ScmRepositoryDetails as ScmRepositoryDetails,
    type ScmRepositoryResponse as ScmRepositoryResponse,
    type ScmRepositoryListGitReferencesResponse as ScmRepositoryListGitReferencesResponse,
    type ScmRepositoryListPullRequestsResponse as ScmRepositoryListPullRequestsResponse,
    type ScmRepositoryRetrieveParams as ScmRepositoryRetrieveParams,
    type ScmRepositoryListParams as ScmRepositoryListParams,
    type ScmRepositoryListGitReferencesParams as ScmRepositoryListGitReferencesParams,
    type ScmRepositoryListPullRequestsParams as ScmRepositoryListPullRequestsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListGitReferencesResponse as RelationshipListGitReferencesResponse,
    type RelationshipListPullRequestsResponse as RelationshipListPullRequestsResponse,
    type RelationshipListGitReferencesParams as RelationshipListGitReferencesParams,
    type RelationshipListPullRequestsParams as RelationshipListPullRequestsParams,
  };
}
