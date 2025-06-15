// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as ScmRepositoriesAPI from './scm-repositories/scm-repositories';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ScmGitReferences extends APIResource {
  retrieve(
    id: string,
    query: ScmGitReferenceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScmGitReferenceRetrieveResponse> {
    return this._client.get(path`/v1/scmGitReferences/${id}`, { query, ...options });
  }
}

export interface ScmGitReference {
  id: string;

  type: 'scmGitReferences';

  attributes?: ScmGitReference.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: ScmGitReference.Relationships;
}

export namespace ScmGitReference {
  export interface Attributes {
    canonicalName?: string;

    isDeleted?: boolean;

    kind?: 'BRANCH' | 'TAG';

    name?: string;
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

export interface ScmGitReferenceRetrieveResponse {
  data: ScmGitReference;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<ScmRepositoriesAPI.ScmRepositoryDetails>;
}

export interface ScmGitReferenceRetrieveParams {
  /**
   * the fields to include for returned resources of type scmGitReferences
   */
  'fields[scmGitReferences]'?: Array<'name' | 'canonicalName' | 'isDeleted' | 'kind' | 'repository'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'repository'>;
}

export declare namespace ScmGitReferences {
  export {
    type ScmGitReference as ScmGitReference,
    type ScmGitReferenceRetrieveResponse as ScmGitReferenceRetrieveResponse,
    type ScmGitReferenceRetrieveParams as ScmGitReferenceRetrieveParams,
  };
}
