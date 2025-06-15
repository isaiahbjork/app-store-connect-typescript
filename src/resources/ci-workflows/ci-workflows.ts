// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CiWorkflowsAPI from './ci-workflows';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as CiMacOsVersionsAPI from '../ci-mac-os-versions/ci-mac-os-versions';
import * as CiProductsAPI from '../ci-products/ci-products';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListBuildRunsParams,
  RelationshipListBuildRunsResponse,
  RelationshipRetrieveRepositoryResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as CiXcodeVersionsAPI from '../ci-xcode-versions/ci-xcode-versions';
import * as ScmRepositoriesAPI from '../scm-repositories/scm-repositories';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CiWorkflows extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: CiWorkflowCreateParams, options?: RequestOptions): APIPromise<CiWorkflowResponse> {
    return this._client.post('/v1/ciWorkflows', { body, ...options });
  }

  retrieve(
    id: string,
    query: CiWorkflowRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiWorkflowResponse> {
    return this._client.get(path`/v1/ciWorkflows/${id}`, { query, ...options });
  }

  update(id: string, body: CiWorkflowUpdateParams, options?: RequestOptions): APIPromise<CiWorkflowResponse> {
    return this._client.patch(path`/v1/ciWorkflows/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/ciWorkflows/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listBuildRuns(
    id: string,
    query: CiWorkflowListBuildRunsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CiProductsAPI.CiBuildRuns> {
    return this._client.get(path`/v1/ciWorkflows/${id}/buildRuns`, { query, ...options });
  }

  retrieveRepository(
    id: string,
    query: CiWorkflowRetrieveRepositoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScmRepositoriesAPI.ScmRepositoryResponse> {
    return this._client.get(path`/v1/ciWorkflows/${id}/repository`, { query, ...options });
  }
}

export type BuildAudienceType = 'INTERNAL_ONLY' | 'APP_STORE_ELIGIBLE';

export interface CiAction {
  actionType?: CiActionType;

  buildDistributionAudience?: BuildAudienceType;

  destination?:
    | 'ANY_IOS_DEVICE'
    | 'ANY_IOS_SIMULATOR'
    | 'ANY_TVOS_DEVICE'
    | 'ANY_TVOS_SIMULATOR'
    | 'ANY_WATCHOS_DEVICE'
    | 'ANY_WATCHOS_SIMULATOR'
    | 'ANY_MAC'
    | 'ANY_MAC_CATALYST'
    | 'ANY_VISIONOS_DEVICE'
    | 'ANY_VISIONOS_SIMULATOR';

  isRequiredToPass?: boolean;

  name?: string;

  platform?: 'MACOS' | 'IOS' | 'TVOS' | 'WATCHOS' | 'VISIONOS';

  scheme?: string;

  testConfiguration?: CiAction.TestConfiguration;
}

export namespace CiAction {
  export interface TestConfiguration {
    kind?: 'USE_SCHEME_SETTINGS' | 'SPECIFIC_TEST_PLANS';

    testDestinations?: Array<TestConfiguration.TestDestination>;

    testPlanName?: string;
  }

  export namespace TestConfiguration {
    export interface TestDestination {
      deviceTypeIdentifier?: string;

      deviceTypeName?: string;

      kind?: CiXcodeVersionsAPI.CiTestDestinationKind;

      runtimeIdentifier?: string;

      runtimeName?: string;
    }
  }
}

export type CiActionType = 'BUILD' | 'ANALYZE' | 'TEST' | 'ARCHIVE';

export interface CiBranchPatterns {
  isAllMatch?: boolean;

  patterns?: Array<CiBranchPatterns.Pattern>;
}

export namespace CiBranchPatterns {
  export interface Pattern {
    isPrefix?: boolean;

    pattern?: string;
  }
}

export interface CiBranchStartCondition {
  autoCancel?: boolean;

  filesAndFoldersRule?: CiFilesAndFoldersRule;

  source?: CiBranchPatterns;
}

export interface CiFilesAndFoldersRule {
  matchers?: Array<CiFilesAndFoldersRule.Matcher>;

  mode?: 'START_IF_ANY_FILE_MATCHES' | 'DO_NOT_START_IF_ALL_FILES_MATCH';
}

export namespace CiFilesAndFoldersRule {
  export interface Matcher {
    directory?: string;

    fileExtension?: string;

    fileName?: string;
  }
}

export interface CiManualBranchStartCondition {
  source?: CiBranchPatterns;
}

export interface CiManualPullRequestStartCondition {
  destination?: CiBranchPatterns;

  source?: CiBranchPatterns;
}

export interface CiManualTagStartCondition {
  source?: CiTagPatterns;
}

export interface CiPullRequestStartCondition {
  autoCancel?: boolean;

  destination?: CiBranchPatterns;

  filesAndFoldersRule?: CiFilesAndFoldersRule;

  source?: CiBranchPatterns;
}

export interface CiScheduledStartCondition {
  schedule?: CiScheduledStartCondition.Schedule;

  source?: CiBranchPatterns;
}

export namespace CiScheduledStartCondition {
  export interface Schedule {
    days?: Array<'SUNDAY' | 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY'>;

    frequency?: 'WEEKLY' | 'DAILY' | 'HOURLY';

    hour?: number;

    minute?: number;

    timezone?: string;
  }
}

export interface CiTagPatterns {
  isAllMatch?: boolean;

  patterns?: Array<CiTagPatterns.Pattern>;
}

export namespace CiTagPatterns {
  export interface Pattern {
    isPrefix?: boolean;

    pattern?: string;
  }
}

export interface CiTagStartCondition {
  autoCancel?: boolean;

  filesAndFoldersRule?: CiFilesAndFoldersRule;

  source?: CiTagPatterns;
}

export interface CiWorkflow {
  id: string;

  type: 'ciWorkflows';

  attributes?: CiWorkflow.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: CiWorkflow.Relationships;
}

export namespace CiWorkflow {
  export interface Attributes {
    actions?: Array<CiWorkflowsAPI.CiAction>;

    branchStartCondition?: CiWorkflowsAPI.CiBranchStartCondition;

    clean?: boolean;

    containerFilePath?: string;

    description?: string;

    isEnabled?: boolean;

    isLockedForEditing?: boolean;

    lastModifiedDate?: string;

    manualBranchStartCondition?: CiWorkflowsAPI.CiManualBranchStartCondition;

    manualPullRequestStartCondition?: CiWorkflowsAPI.CiManualPullRequestStartCondition;

    manualTagStartCondition?: CiWorkflowsAPI.CiManualTagStartCondition;

    name?: string;

    pullRequestStartCondition?: CiWorkflowsAPI.CiPullRequestStartCondition;

    scheduledStartCondition?: CiWorkflowsAPI.CiScheduledStartCondition;

    tagStartCondition?: CiWorkflowsAPI.CiTagStartCondition;
  }

  export interface Relationships {
    buildRuns?: Relationships.BuildRuns;

    macOsVersion?: Relationships.MacOsVersion;

    product?: Relationships.Product;

    repository?: Relationships.Repository;

    xcodeVersion?: Relationships.XcodeVersion;
  }

  export namespace Relationships {
    export interface BuildRuns {
      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export interface MacOsVersion {
      data?: MacOsVersion.Data;
    }

    export namespace MacOsVersion {
      export interface Data {
        id: string;

        type: 'ciMacOsVersions';
      }
    }

    export interface Product {
      data?: Product.Data;
    }

    export namespace Product {
      export interface Data {
        id: string;

        type: 'ciProducts';
      }
    }

    export interface Repository {
      data?: Repository.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace Repository {
      export interface Data {
        id: string;

        type: 'scmRepositories';
      }
    }

    export interface XcodeVersion {
      data?: XcodeVersion.Data;
    }

    export namespace XcodeVersion {
      export interface Data {
        id: string;

        type: 'ciXcodeVersions';
      }
    }
  }
}

export interface CiWorkflowResponse {
  data: CiWorkflow;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | CiProductsAPI.CiProductDetails
    | ScmRepositoriesAPI.ScmRepositoryDetails
    | CiXcodeVersionsAPI.CiXcodeVersion
    | CiMacOsVersionsAPI.CiMacOsVersion
  >;
}

export interface CiWorkflowCreateParams {
  data: CiWorkflowCreateParams.Data;
}

export namespace CiWorkflowCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'ciWorkflows';
  }

  export namespace Data {
    export interface Attributes {
      actions: Array<CiWorkflowsAPI.CiAction>;

      clean: boolean;

      containerFilePath: string;

      description: string;

      isEnabled: boolean;

      name: string;

      branchStartCondition?: CiWorkflowsAPI.CiBranchStartCondition;

      isLockedForEditing?: boolean;

      manualBranchStartCondition?: CiWorkflowsAPI.CiManualBranchStartCondition;

      manualPullRequestStartCondition?: CiWorkflowsAPI.CiManualPullRequestStartCondition;

      manualTagStartCondition?: CiWorkflowsAPI.CiManualTagStartCondition;

      pullRequestStartCondition?: CiWorkflowsAPI.CiPullRequestStartCondition;

      scheduledStartCondition?: CiWorkflowsAPI.CiScheduledStartCondition;

      tagStartCondition?: CiWorkflowsAPI.CiTagStartCondition;
    }

    export interface Relationships {
      macOsVersion: Relationships.MacOsVersion;

      product: Relationships.Product;

      repository: Relationships.Repository;

      xcodeVersion: Relationships.XcodeVersion;
    }

    export namespace Relationships {
      export interface MacOsVersion {
        data: MacOsVersion.Data;
      }

      export namespace MacOsVersion {
        export interface Data {
          id: string;

          type: 'ciMacOsVersions';
        }
      }

      export interface Product {
        data: Product.Data;
      }

      export namespace Product {
        export interface Data {
          id: string;

          type: 'ciProducts';
        }
      }

      export interface Repository {
        data: Repository.Data;
      }

      export namespace Repository {
        export interface Data {
          id: string;

          type: 'scmRepositories';
        }
      }

      export interface XcodeVersion {
        data: XcodeVersion.Data;
      }

      export namespace XcodeVersion {
        export interface Data {
          id: string;

          type: 'ciXcodeVersions';
        }
      }
    }
  }
}

export interface CiWorkflowRetrieveParams {
  /**
   * the fields to include for returned resources of type ciWorkflows
   */
  'fields[ciWorkflows]'?: Array<
    | 'name'
    | 'description'
    | 'branchStartCondition'
    | 'tagStartCondition'
    | 'pullRequestStartCondition'
    | 'scheduledStartCondition'
    | 'manualBranchStartCondition'
    | 'manualTagStartCondition'
    | 'manualPullRequestStartCondition'
    | 'actions'
    | 'isEnabled'
    | 'isLockedForEditing'
    | 'clean'
    | 'containerFilePath'
    | 'lastModifiedDate'
    | 'product'
    | 'repository'
    | 'xcodeVersion'
    | 'macOsVersion'
    | 'buildRuns'
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
  include?: Array<'product' | 'repository' | 'xcodeVersion' | 'macOsVersion'>;
}

export interface CiWorkflowUpdateParams {
  data: CiWorkflowUpdateParams.Data;
}

export namespace CiWorkflowUpdateParams {
  export interface Data {
    id: string;

    type: 'ciWorkflows';

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      actions?: Array<CiWorkflowsAPI.CiAction>;

      branchStartCondition?: CiWorkflowsAPI.CiBranchStartCondition;

      clean?: boolean;

      containerFilePath?: string;

      description?: string;

      isEnabled?: boolean;

      isLockedForEditing?: boolean;

      manualBranchStartCondition?: CiWorkflowsAPI.CiManualBranchStartCondition;

      manualPullRequestStartCondition?: CiWorkflowsAPI.CiManualPullRequestStartCondition;

      manualTagStartCondition?: CiWorkflowsAPI.CiManualTagStartCondition;

      name?: string;

      pullRequestStartCondition?: CiWorkflowsAPI.CiPullRequestStartCondition;

      scheduledStartCondition?: CiWorkflowsAPI.CiScheduledStartCondition;

      tagStartCondition?: CiWorkflowsAPI.CiTagStartCondition;
    }

    export interface Relationships {
      macOsVersion?: Relationships.MacOsVersion;

      xcodeVersion?: Relationships.XcodeVersion;
    }

    export namespace Relationships {
      export interface MacOsVersion {
        data?: MacOsVersion.Data;
      }

      export namespace MacOsVersion {
        export interface Data {
          id: string;

          type: 'ciMacOsVersions';
        }
      }

      export interface XcodeVersion {
        data?: XcodeVersion.Data;
      }

      export namespace XcodeVersion {
        export interface Data {
          id: string;

          type: 'ciXcodeVersions';
        }
      }
    }
  }
}

export interface CiWorkflowListBuildRunsParams {
  /**
   * the fields to include for returned resources of type builds
   */
  'fields[builds]'?: Array<
    | 'version'
    | 'uploadedDate'
    | 'expirationDate'
    | 'expired'
    | 'minOsVersion'
    | 'lsMinimumSystemVersion'
    | 'computedMinMacOsVersion'
    | 'computedMinVisionOsVersion'
    | 'iconAssetToken'
    | 'processingState'
    | 'buildAudienceType'
    | 'usesNonExemptEncryption'
    | 'preReleaseVersion'
    | 'individualTesters'
    | 'betaGroups'
    | 'betaBuildLocalizations'
    | 'appEncryptionDeclaration'
    | 'betaAppReviewSubmission'
    | 'app'
    | 'buildBetaDetail'
    | 'appStoreVersion'
    | 'icons'
    | 'buildBundles'
    | 'perfPowerMetrics'
    | 'diagnosticSignatures'
  >;

  /**
   * the fields to include for returned resources of type ciBuildRuns
   */
  'fields[ciBuildRuns]'?: Array<
    | 'number'
    | 'createdDate'
    | 'startedDate'
    | 'finishedDate'
    | 'sourceCommit'
    | 'destinationCommit'
    | 'isPullRequestBuild'
    | 'issueCounts'
    | 'executionProgress'
    | 'completionStatus'
    | 'startReason'
    | 'cancelReason'
    | 'builds'
    | 'workflow'
    | 'product'
    | 'sourceBranchOrTag'
    | 'destinationBranch'
    | 'actions'
    | 'pullRequest'
  >;

  /**
   * the fields to include for returned resources of type ciProducts
   */
  'fields[ciProducts]'?: Array<
    | 'name'
    | 'createdDate'
    | 'productType'
    | 'app'
    | 'bundleId'
    | 'workflows'
    | 'primaryRepositories'
    | 'additionalRepositories'
    | 'buildRuns'
  >;

  /**
   * the fields to include for returned resources of type ciWorkflows
   */
  'fields[ciWorkflows]'?: Array<
    | 'name'
    | 'description'
    | 'branchStartCondition'
    | 'tagStartCondition'
    | 'pullRequestStartCondition'
    | 'scheduledStartCondition'
    | 'manualBranchStartCondition'
    | 'manualTagStartCondition'
    | 'manualPullRequestStartCondition'
    | 'actions'
    | 'isEnabled'
    | 'isLockedForEditing'
    | 'clean'
    | 'containerFilePath'
    | 'lastModifiedDate'
    | 'product'
    | 'repository'
    | 'xcodeVersion'
    | 'macOsVersion'
    | 'buildRuns'
  >;

  /**
   * the fields to include for returned resources of type scmGitReferences
   */
  'fields[scmGitReferences]'?: Array<'name' | 'canonicalName' | 'isDeleted' | 'kind' | 'repository'>;

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
   * filter by id(s) of related 'builds'
   */
  'filter[builds]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    'builds' | 'workflow' | 'product' | 'sourceBranchOrTag' | 'destinationBranch' | 'pullRequest'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related builds returned (when they are included)
   */
  'limit[builds]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'number' | '-number'>;
}

export interface CiWorkflowRetrieveRepositoryParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'scmProvider' | 'defaultBranch'>;
}

CiWorkflows.Relationships = RelationshipsAPIRelationships;

export declare namespace CiWorkflows {
  export {
    type BuildAudienceType as BuildAudienceType,
    type CiAction as CiAction,
    type CiActionType as CiActionType,
    type CiBranchPatterns as CiBranchPatterns,
    type CiBranchStartCondition as CiBranchStartCondition,
    type CiFilesAndFoldersRule as CiFilesAndFoldersRule,
    type CiManualBranchStartCondition as CiManualBranchStartCondition,
    type CiManualPullRequestStartCondition as CiManualPullRequestStartCondition,
    type CiManualTagStartCondition as CiManualTagStartCondition,
    type CiPullRequestStartCondition as CiPullRequestStartCondition,
    type CiScheduledStartCondition as CiScheduledStartCondition,
    type CiTagPatterns as CiTagPatterns,
    type CiTagStartCondition as CiTagStartCondition,
    type CiWorkflow as CiWorkflow,
    type CiWorkflowResponse as CiWorkflowResponse,
    type CiWorkflowCreateParams as CiWorkflowCreateParams,
    type CiWorkflowRetrieveParams as CiWorkflowRetrieveParams,
    type CiWorkflowUpdateParams as CiWorkflowUpdateParams,
    type CiWorkflowListBuildRunsParams as CiWorkflowListBuildRunsParams,
    type CiWorkflowRetrieveRepositoryParams as CiWorkflowRetrieveRepositoryParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListBuildRunsResponse as RelationshipListBuildRunsResponse,
    type RelationshipRetrieveRepositoryResponse as RelationshipRetrieveRepositoryResponse,
    type RelationshipListBuildRunsParams as RelationshipListBuildRunsParams,
  };
}
