// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as ReviewSubmissionItemsAPI from '../review-submission-items';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppCustomProductPageVersionsAPI from '../app-custom-product-page-versions/app-custom-product-page-versions';
import * as AppEventsAPI from '../app-events/app-events';
import * as AppStoreVersionExperimentsAPI from '../app-store-version-experiments/app-store-version-experiments';
import * as AppStoreVersionsAPI from '../app-store-versions/app-store-versions';
import * as AppsAPI from '../apps/apps';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListItemsParams,
  RelationshipListItemsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ReviewSubmissions extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: ReviewSubmissionCreateParams, options?: RequestOptions): APIPromise<ReviewSubmissionResponse> {
    return this._client.post('/v1/reviewSubmissions', { body, ...options });
  }

  retrieve(
    id: string,
    query: ReviewSubmissionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReviewSubmissionResponse> {
    return this._client.get(path`/v1/reviewSubmissions/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: ReviewSubmissionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ReviewSubmissionResponse> {
    return this._client.patch(path`/v1/reviewSubmissions/${id}`, { body, ...options });
  }

  list(query: ReviewSubmissionListParams, options?: RequestOptions): APIPromise<ReviewSubmissionsResponse> {
    return this._client.get('/v1/reviewSubmissions', { query, ...options });
  }

  listItems(
    id: string,
    query: ReviewSubmissionListItemsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReviewSubmissionListItemsResponse> {
    return this._client.get(path`/v1/reviewSubmissions/${id}/items`, { query, ...options });
  }
}

export interface ReviewSubmission {
  id: string;

  type: 'reviewSubmissions';

  attributes?: ReviewSubmission.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: ReviewSubmission.Relationships;
}

export namespace ReviewSubmission {
  export interface Attributes {
    platform?: AppStoreVersionExperimentsAPI.Platform;

    state?:
      | 'READY_FOR_REVIEW'
      | 'WAITING_FOR_REVIEW'
      | 'IN_REVIEW'
      | 'UNRESOLVED_ISSUES'
      | 'CANCELING'
      | 'COMPLETING'
      | 'COMPLETE';

    submittedDate?: string;
  }

  export interface Relationships {
    app?: Relationships.App;

    appStoreVersionForReview?: Relationships.AppStoreVersionForReview;

    items?: Relationships.Items;

    lastUpdatedByActor?: Relationships.LastUpdatedByActor;

    submittedByActor?: Relationships.SubmittedByActor;
  }

  export namespace Relationships {
    export interface App {
      data?: App.Data;
    }

    export namespace App {
      export interface Data {
        id: string;

        type: 'apps';
      }
    }

    export interface AppStoreVersionForReview {
      data?: AppStoreVersionForReview.Data;
    }

    export namespace AppStoreVersionForReview {
      export interface Data {
        id: string;

        type: 'appStoreVersions';
      }
    }

    export interface Items {
      data?: Array<Items.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Items {
      export interface Data {
        id: string;

        type: 'reviewSubmissionItems';
      }
    }

    export interface LastUpdatedByActor {
      data?: LastUpdatedByActor.Data;
    }

    export namespace LastUpdatedByActor {
      export interface Data {
        id: string;

        type: 'actors';
      }
    }

    export interface SubmittedByActor {
      data?: SubmittedByActor.Data;
    }

    export namespace SubmittedByActor {
      export interface Data {
        id: string;

        type: 'actors';
      }
    }
  }
}

export interface ReviewSubmissionResponse {
  data: ReviewSubmission;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppsAPI.App
    | ReviewSubmissionItemsAPI.ReviewSubmissionItem
    | AppStoreVersionsAPI.AppStoreVersionDetails
    | ActorsAPI.Actor
  >;
}

export interface ReviewSubmissionsResponse {
  data: Array<ReviewSubmission>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | AppsAPI.App
    | ReviewSubmissionItemsAPI.ReviewSubmissionItem
    | AppStoreVersionsAPI.AppStoreVersionDetails
    | ActorsAPI.Actor
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface ReviewSubmissionListItemsResponse {
  data: Array<ReviewSubmissionItemsAPI.ReviewSubmissionItem>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    | AppStoreVersionsAPI.AppStoreVersionDetails
    | AppCustomProductPageVersionsAPI.AppCustomProductPageVersion
    | AppStoreVersionExperimentsAPI.AppStoreVersionExperiment
    | AppStoreVersionExperimentsAPI.AppStoreVersionExperimentV2
    | AppEventsAPI.AppEvent
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface ReviewSubmissionCreateParams {
  data: ReviewSubmissionCreateParams.Data;
}

export namespace ReviewSubmissionCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'reviewSubmissions';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Relationships {
      app: Relationships.App;
    }

    export namespace Relationships {
      export interface App {
        data: App.Data;
      }

      export namespace App {
        export interface Data {
          id: string;

          type: 'apps';
        }
      }
    }

    export interface Attributes {
      platform?: AppStoreVersionExperimentsAPI.Platform;
    }
  }
}

export interface ReviewSubmissionRetrieveParams {
  /**
   * the fields to include for returned resources of type reviewSubmissionItems
   */
  'fields[reviewSubmissionItems]'?: Array<
    | 'state'
    | 'appStoreVersion'
    | 'appCustomProductPageVersion'
    | 'appStoreVersionExperiment'
    | 'appStoreVersionExperimentV2'
    | 'appEvent'
  >;

  /**
   * the fields to include for returned resources of type reviewSubmissions
   */
  'fields[reviewSubmissions]'?: Array<
    | 'platform'
    | 'submittedDate'
    | 'state'
    | 'app'
    | 'items'
    | 'appStoreVersionForReview'
    | 'submittedByActor'
    | 'lastUpdatedByActor'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'items' | 'appStoreVersionForReview' | 'submittedByActor' | 'lastUpdatedByActor'>;

  /**
   * maximum number of related items returned (when they are included)
   */
  'limit[items]'?: number;
}

export interface ReviewSubmissionUpdateParams {
  data: ReviewSubmissionUpdateParams.Data;
}

export namespace ReviewSubmissionUpdateParams {
  export interface Data {
    id: string;

    type: 'reviewSubmissions';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      canceled?: boolean;

      platform?: AppStoreVersionExperimentsAPI.Platform;

      submitted?: boolean;
    }
  }
}

export interface ReviewSubmissionListParams {
  /**
   * filter by id(s) of related 'app'
   */
  'filter[app]': Array<string>;

  /**
   * the fields to include for returned resources of type reviewSubmissionItems
   */
  'fields[reviewSubmissionItems]'?: Array<
    | 'state'
    | 'appStoreVersion'
    | 'appCustomProductPageVersion'
    | 'appStoreVersionExperiment'
    | 'appStoreVersionExperimentV2'
    | 'appEvent'
  >;

  /**
   * the fields to include for returned resources of type reviewSubmissions
   */
  'fields[reviewSubmissions]'?: Array<
    | 'platform'
    | 'submittedDate'
    | 'state'
    | 'app'
    | 'items'
    | 'appStoreVersionForReview'
    | 'submittedByActor'
    | 'lastUpdatedByActor'
  >;

  /**
   * filter by attribute 'platform'
   */
  'filter[platform]'?: Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'>;

  /**
   * filter by attribute 'state'
   */
  'filter[state]'?: Array<
    | 'READY_FOR_REVIEW'
    | 'WAITING_FOR_REVIEW'
    | 'IN_REVIEW'
    | 'UNRESOLVED_ISSUES'
    | 'CANCELING'
    | 'COMPLETING'
    | 'COMPLETE'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'items' | 'appStoreVersionForReview' | 'submittedByActor' | 'lastUpdatedByActor'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related items returned (when they are included)
   */
  'limit[items]'?: number;
}

export interface ReviewSubmissionListItemsParams {
  /**
   * the fields to include for returned resources of type
   * appCustomProductPageVersions
   */
  'fields[appCustomProductPageVersions]'?: Array<
    'version' | 'state' | 'deepLink' | 'appCustomProductPage' | 'appCustomProductPageLocalizations'
  >;

  /**
   * the fields to include for returned resources of type appEvents
   */
  'fields[appEvents]'?: Array<
    | 'referenceName'
    | 'badge'
    | 'eventState'
    | 'deepLink'
    | 'purchaseRequirement'
    | 'primaryLocale'
    | 'priority'
    | 'purpose'
    | 'territorySchedules'
    | 'archivedTerritorySchedules'
    | 'localizations'
  >;

  /**
   * the fields to include for returned resources of type appStoreVersionExperiments
   */
  'fields[appStoreVersionExperiments]'?: Array<
    | 'name'
    | 'trafficProportion'
    | 'state'
    | 'reviewRequired'
    | 'startDate'
    | 'endDate'
    | 'appStoreVersion'
    | 'appStoreVersionExperimentTreatments'
    | 'platform'
    | 'app'
    | 'latestControlVersion'
    | 'controlVersions'
  >;

  /**
   * the fields to include for returned resources of type appStoreVersions
   */
  'fields[appStoreVersions]'?: Array<
    | 'platform'
    | 'versionString'
    | 'appStoreState'
    | 'appVersionState'
    | 'copyright'
    | 'reviewType'
    | 'releaseType'
    | 'earliestReleaseDate'
    | 'usesIdfa'
    | 'downloadable'
    | 'createdDate'
    | 'app'
    | 'ageRatingDeclaration'
    | 'appStoreVersionLocalizations'
    | 'build'
    | 'appStoreVersionPhasedRelease'
    | 'gameCenterAppVersion'
    | 'routingAppCoverage'
    | 'appStoreReviewDetail'
    | 'appStoreVersionSubmission'
    | 'appClipDefaultExperience'
    | 'appStoreVersionExperiments'
    | 'appStoreVersionExperimentsV2'
    | 'customerReviews'
    | 'alternativeDistributionPackage'
  >;

  /**
   * the fields to include for returned resources of type reviewSubmissionItems
   */
  'fields[reviewSubmissionItems]'?: Array<
    | 'state'
    | 'appStoreVersion'
    | 'appCustomProductPageVersion'
    | 'appStoreVersionExperiment'
    | 'appStoreVersionExperimentV2'
    | 'appEvent'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'appStoreVersion'
    | 'appCustomProductPageVersion'
    | 'appStoreVersionExperiment'
    | 'appStoreVersionExperimentV2'
    | 'appEvent'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;
}

ReviewSubmissions.Relationships = RelationshipsAPIRelationships;

export declare namespace ReviewSubmissions {
  export {
    type ReviewSubmission as ReviewSubmission,
    type ReviewSubmissionResponse as ReviewSubmissionResponse,
    type ReviewSubmissionsResponse as ReviewSubmissionsResponse,
    type ReviewSubmissionListItemsResponse as ReviewSubmissionListItemsResponse,
    type ReviewSubmissionCreateParams as ReviewSubmissionCreateParams,
    type ReviewSubmissionRetrieveParams as ReviewSubmissionRetrieveParams,
    type ReviewSubmissionUpdateParams as ReviewSubmissionUpdateParams,
    type ReviewSubmissionListParams as ReviewSubmissionListParams,
    type ReviewSubmissionListItemsParams as ReviewSubmissionListItemsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListItemsResponse as RelationshipListItemsResponse,
    type RelationshipListItemsParams as RelationshipListItemsParams,
  };
}
