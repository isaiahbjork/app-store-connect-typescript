// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as ScmRepositoriesAPI from './scm-repositories/scm-repositories';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ScmPullRequests extends APIResource {
  retrieve(
    id: string,
    query: ScmPullRequestRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScmPullRequestRetrieveResponse> {
    return this._client.get(path`/v1/scmPullRequests/${id}`, { query, ...options });
  }
}

export interface ScmPullRequest {
  id: string;

  type: 'scmPullRequests';

  attributes?: ScmPullRequest.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: ScmPullRequest.Relationships;
}

export namespace ScmPullRequest {
  export interface Attributes {
    destinationBranchName?: string;

    destinationRepositoryName?: string;

    destinationRepositoryOwner?: string;

    isClosed?: boolean;

    isCrossRepository?: boolean;

    number?: number;

    sourceBranchName?: string;

    sourceRepositoryName?: string;

    sourceRepositoryOwner?: string;

    title?: string;

    webUrl?: string;
  }

  export interface Relationships {
    repository?: Relationships.Repository;
  }

  export namespace Relationships {
    export interface Repository {
      data?: Repository.Data;
    }

    export namespace Repository {
      export interface Data {
        id: string;

        type: 'scmRepositories';
      }
    }
  }
}

export interface ScmPullRequestRetrieveResponse {
  data: ScmPullRequest;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<ScmRepositoriesAPI.ScmRepositoryDetails>;
}

export interface ScmPullRequestRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'repository'>;
}

export declare namespace ScmPullRequests {
  export {
    type ScmPullRequest as ScmPullRequest,
    type ScmPullRequestRetrieveResponse as ScmPullRequestRetrieveResponse,
    type ScmPullRequestRetrieveParams as ScmPullRequestRetrieveParams,
  };
}
