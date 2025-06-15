// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListRepositoriesParams,
  RelationshipListRepositoriesResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as ScmRepositoriesAPI from '../scm-repositories/scm-repositories';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ScmProviders extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: ScmProviderRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScmProviderRetrieveResponse> {
    return this._client.get(path`/v1/scmProviders/${id}`, { query, ...options });
  }

  list(
    query: ScmProviderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScmProviderListResponse> {
    return this._client.get('/v1/scmProviders', { query, ...options });
  }

  listRepositories(
    id: string,
    query: ScmProviderListRepositoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScmRepositoriesAPI.ScmRepositories> {
    return this._client.get(path`/v1/scmProviders/${id}/repositories`, { query, ...options });
  }
}

export interface ScmProvider {
  id: string;

  type: 'scmProviders';

  attributes?: ScmProvider.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: ScmProvider.Relationships;
}

export namespace ScmProvider {
  export interface Attributes {
    scmProviderType?: Attributes.ScmProviderType;

    url?: string;
  }

  export namespace Attributes {
    export interface ScmProviderType {
      displayName?: string;

      isOnPremise?: boolean;

      kind?:
        | 'BITBUCKET_CLOUD'
        | 'BITBUCKET_SERVER'
        | 'GITHUB_CLOUD'
        | 'GITHUB_ENTERPRISE'
        | 'GITLAB_CLOUD'
        | 'GITLAB_SELF_MANAGED';
    }
  }

  export interface Relationships {
    repositories?: Relationships.Repositories;
  }

  export namespace Relationships {
    export interface Repositories {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }
  }
}

export interface ScmProviderRetrieveResponse {
  data: ScmProvider;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface ScmProviderListResponse {
  data: Array<ScmProvider>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface ScmProviderRetrieveParams {
  /**
   * the fields to include for returned resources of type scmProviders
   */
  'fields[scmProviders]'?: Array<'scmProviderType' | 'url' | 'repositories'>;
}

export interface ScmProviderListParams {
  /**
   * the fields to include for returned resources of type scmProviders
   */
  'fields[scmProviders]'?: Array<'scmProviderType' | 'url' | 'repositories'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface ScmProviderListRepositoriesParams {
  /**
   * the fields to include for returned resources of type scmGitReferences
   */
  'fields[scmGitReferences]'?: Array<'name' | 'canonicalName' | 'isDeleted' | 'kind' | 'repository'>;

  /**
   * the fields to include for returned resources of type scmProviders
   */
  'fields[scmProviders]'?: Array<'scmProviderType' | 'url' | 'repositories'>;

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

ScmProviders.Relationships = RelationshipsAPIRelationships;

export declare namespace ScmProviders {
  export {
    type ScmProvider as ScmProvider,
    type ScmProviderRetrieveResponse as ScmProviderRetrieveResponse,
    type ScmProviderListResponse as ScmProviderListResponse,
    type ScmProviderRetrieveParams as ScmProviderRetrieveParams,
    type ScmProviderListParams as ScmProviderListParams,
    type ScmProviderListRepositoriesParams as ScmProviderListRepositoriesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListRepositoriesResponse as RelationshipListRepositoriesResponse,
    type RelationshipListRepositoriesParams as RelationshipListRepositoriesParams,
  };
}
