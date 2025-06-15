// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AppStoreReviewAttachmentsAPI from '../app-store-review-attachments';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListAttachmentsParams,
  RelationshipListAttachmentsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AppStoreVersionsAPI from '../app-store-versions/app-store-versions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppStoreReviewDetails extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: AppStoreReviewDetailCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppStoreReviewDetailResponse> {
    return this._client.post('/v1/appStoreReviewDetails', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppStoreReviewDetailRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreReviewDetailResponse> {
    return this._client.get(path`/v1/appStoreReviewDetails/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppStoreReviewDetailUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppStoreReviewDetailResponse> {
    return this._client.patch(path`/v1/appStoreReviewDetails/${id}`, { body, ...options });
  }

  listAttachments(
    id: string,
    query: AppStoreReviewDetailListAttachmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreReviewDetailListAttachmentsResponse> {
    return this._client.get(path`/v1/appStoreReviewDetails/${id}/appStoreReviewAttachments`, {
      query,
      ...options,
    });
  }
}

export interface AppStoreReviewDetail {
  id: string;

  type: 'appStoreReviewDetails';

  attributes?: AppStoreReviewDetail.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppStoreReviewDetail.Relationships;
}

export namespace AppStoreReviewDetail {
  export interface Attributes {
    contactEmail?: string;

    contactFirstName?: string;

    contactLastName?: string;

    contactPhone?: string;

    demoAccountName?: string;

    demoAccountPassword?: string;

    demoAccountRequired?: boolean;

    notes?: string;
  }

  export interface Relationships {
    appStoreReviewAttachments?: Relationships.AppStoreReviewAttachments;

    appStoreVersion?: Relationships.AppStoreVersion;
  }

  export namespace Relationships {
    export interface AppStoreReviewAttachments {
      data?: Array<AppStoreReviewAttachments.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppStoreReviewAttachments {
      export interface Data {
        id: string;

        type: 'appStoreReviewAttachments';
      }
    }

    export interface AppStoreVersion {
      data?: AppStoreVersion.Data;
    }

    export namespace AppStoreVersion {
      export interface Data {
        id: string;

        type: 'appStoreVersions';
      }
    }
  }
}

export interface AppStoreReviewDetailResponse {
  data: AppStoreReviewDetail;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    AppStoreVersionsAPI.AppStoreVersionDetails | AppStoreReviewAttachmentsAPI.AppStoreReviewAttachment
  >;
}

export interface AppStoreReviewDetailListAttachmentsResponse {
  data: Array<AppStoreReviewAttachmentsAPI.AppStoreReviewAttachment>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppStoreReviewDetail>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppStoreReviewDetailCreateParams {
  data: AppStoreReviewDetailCreateParams.Data;
}

export namespace AppStoreReviewDetailCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'appStoreReviewDetails';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Relationships {
      appStoreVersion: Relationships.AppStoreVersion;
    }

    export namespace Relationships {
      export interface AppStoreVersion {
        data: AppStoreVersion.Data;
      }

      export namespace AppStoreVersion {
        export interface Data {
          id: string;

          type: 'appStoreVersions';
        }
      }
    }

    export interface Attributes {
      contactEmail?: string;

      contactFirstName?: string;

      contactLastName?: string;

      contactPhone?: string;

      demoAccountName?: string;

      demoAccountPassword?: string;

      demoAccountRequired?: boolean;

      notes?: string;
    }
  }
}

export interface AppStoreReviewDetailRetrieveParams {
  /**
   * the fields to include for returned resources of type appStoreReviewAttachments
   */
  'fields[appStoreReviewAttachments]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appStoreReviewDetail'
  >;

  /**
   * the fields to include for returned resources of type appStoreReviewDetails
   */
  'fields[appStoreReviewDetails]'?: Array<
    | 'contactFirstName'
    | 'contactLastName'
    | 'contactPhone'
    | 'contactEmail'
    | 'demoAccountName'
    | 'demoAccountPassword'
    | 'demoAccountRequired'
    | 'notes'
    | 'appStoreVersion'
    | 'appStoreReviewAttachments'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appStoreVersion' | 'appStoreReviewAttachments'>;

  /**
   * maximum number of related appStoreReviewAttachments returned (when they are
   * included)
   */
  'limit[appStoreReviewAttachments]'?: number;
}

export interface AppStoreReviewDetailUpdateParams {
  data: AppStoreReviewDetailUpdateParams.Data;
}

export namespace AppStoreReviewDetailUpdateParams {
  export interface Data {
    id: string;

    type: 'appStoreReviewDetails';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      contactEmail?: string;

      contactFirstName?: string;

      contactLastName?: string;

      contactPhone?: string;

      demoAccountName?: string;

      demoAccountPassword?: string;

      demoAccountRequired?: boolean;

      notes?: string;
    }
  }
}

export interface AppStoreReviewDetailListAttachmentsParams {
  /**
   * the fields to include for returned resources of type appStoreReviewAttachments
   */
  'fields[appStoreReviewAttachments]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appStoreReviewDetail'
  >;

  /**
   * the fields to include for returned resources of type appStoreReviewDetails
   */
  'fields[appStoreReviewDetails]'?: Array<
    | 'contactFirstName'
    | 'contactLastName'
    | 'contactPhone'
    | 'contactEmail'
    | 'demoAccountName'
    | 'demoAccountPassword'
    | 'demoAccountRequired'
    | 'notes'
    | 'appStoreVersion'
    | 'appStoreReviewAttachments'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appStoreReviewDetail'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

AppStoreReviewDetails.Relationships = RelationshipsAPIRelationships;

export declare namespace AppStoreReviewDetails {
  export {
    type AppStoreReviewDetail as AppStoreReviewDetail,
    type AppStoreReviewDetailResponse as AppStoreReviewDetailResponse,
    type AppStoreReviewDetailListAttachmentsResponse as AppStoreReviewDetailListAttachmentsResponse,
    type AppStoreReviewDetailCreateParams as AppStoreReviewDetailCreateParams,
    type AppStoreReviewDetailRetrieveParams as AppStoreReviewDetailRetrieveParams,
    type AppStoreReviewDetailUpdateParams as AppStoreReviewDetailUpdateParams,
    type AppStoreReviewDetailListAttachmentsParams as AppStoreReviewDetailListAttachmentsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListAttachmentsResponse as RelationshipListAttachmentsResponse,
    type RelationshipListAttachmentsParams as RelationshipListAttachmentsParams,
  };
}
