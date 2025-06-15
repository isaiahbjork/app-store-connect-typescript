// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AppEventScreenshotsAPI from '../app-event-screenshots';
import * as AppEventVideoClipsAPI from '../app-event-video-clips';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListScreenshotsParams,
  RelationshipListScreenshotsResponse,
  RelationshipListVideoClipsParams,
  RelationshipListVideoClipsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AppEventsAPI from '../app-events/app-events';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppEventLocalizations extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: AppEventLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppEventLocalizationResponse> {
    return this._client.post('/v1/appEventLocalizations', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppEventLocalizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEventLocalizationResponse> {
    return this._client.get(path`/v1/appEventLocalizations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppEventLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppEventLocalizationResponse> {
    return this._client.patch(path`/v1/appEventLocalizations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appEventLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listScreenshots(
    id: string,
    query: AppEventLocalizationListScreenshotsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEventLocalizationListScreenshotsResponse> {
    return this._client.get(path`/v1/appEventLocalizations/${id}/appEventScreenshots`, { query, ...options });
  }

  listVideoClips(
    id: string,
    query: AppEventLocalizationListVideoClipsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEventLocalizationListVideoClipsResponse> {
    return this._client.get(path`/v1/appEventLocalizations/${id}/appEventVideoClips`, { query, ...options });
  }
}

export interface AppEventLocalization {
  id: string;

  type: 'appEventLocalizations';

  attributes?: AppEventLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppEventLocalization.Relationships;
}

export namespace AppEventLocalization {
  export interface Attributes {
    locale?: string;

    longDescription?: string;

    name?: string;

    shortDescription?: string;
  }

  export interface Relationships {
    appEvent?: Relationships.AppEvent;

    appEventScreenshots?: Relationships.AppEventScreenshots;

    appEventVideoClips?: Relationships.AppEventVideoClips;
  }

  export namespace Relationships {
    export interface AppEvent {
      data?: AppEvent.Data;
    }

    export namespace AppEvent {
      export interface Data {
        id: string;

        type: 'appEvents';
      }
    }

    export interface AppEventScreenshots {
      data?: Array<AppEventScreenshots.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppEventScreenshots {
      export interface Data {
        id: string;

        type: 'appEventScreenshots';
      }
    }

    export interface AppEventVideoClips {
      data?: Array<AppEventVideoClips.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppEventVideoClips {
      export interface Data {
        id: string;

        type: 'appEventVideoClips';
      }
    }
  }
}

export interface AppEventLocalizationResponse {
  data: AppEventLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppEventsAPI.AppEvent
    | AppEventScreenshotsAPI.AppEventScreenshot
    | AppEventVideoClipsAPI.AppEventVideoClip
  >;
}

export interface AppEventLocalizationListScreenshotsResponse {
  data: Array<AppEventScreenshotsAPI.AppEventScreenshot>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppEventLocalization>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppEventLocalizationListVideoClipsResponse {
  data: Array<AppEventVideoClipsAPI.AppEventVideoClip>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppEventLocalization>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppEventLocalizationCreateParams {
  data: AppEventLocalizationCreateParams.Data;
}

export namespace AppEventLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appEventLocalizations';
  }

  export namespace Data {
    export interface Attributes {
      locale: string;

      longDescription?: string;

      name?: string;

      shortDescription?: string;
    }

    export interface Relationships {
      appEvent: Relationships.AppEvent;
    }

    export namespace Relationships {
      export interface AppEvent {
        data: AppEvent.Data;
      }

      export namespace AppEvent {
        export interface Data {
          id: string;

          type: 'appEvents';
        }
      }
    }
  }
}

export interface AppEventLocalizationRetrieveParams {
  /**
   * the fields to include for returned resources of type appEventLocalizations
   */
  'fields[appEventLocalizations]'?: Array<
    | 'locale'
    | 'name'
    | 'shortDescription'
    | 'longDescription'
    | 'appEvent'
    | 'appEventScreenshots'
    | 'appEventVideoClips'
  >;

  /**
   * the fields to include for returned resources of type appEventScreenshots
   */
  'fields[appEventScreenshots]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'imageAsset'
    | 'assetToken'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appEventAssetType'
    | 'appEventLocalization'
  >;

  /**
   * the fields to include for returned resources of type appEventVideoClips
   */
  'fields[appEventVideoClips]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'previewFrameTimeCode'
    | 'videoUrl'
    | 'previewFrameImage'
    | 'previewImage'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'videoDeliveryState'
    | 'appEventAssetType'
    | 'appEventLocalization'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips'>;

  /**
   * maximum number of related appEventScreenshots returned (when they are included)
   */
  'limit[appEventScreenshots]'?: number;

  /**
   * maximum number of related appEventVideoClips returned (when they are included)
   */
  'limit[appEventVideoClips]'?: number;
}

export interface AppEventLocalizationUpdateParams {
  data: AppEventLocalizationUpdateParams.Data;
}

export namespace AppEventLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'appEventLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      longDescription?: string;

      name?: string;

      shortDescription?: string;
    }
  }
}

export interface AppEventLocalizationListScreenshotsParams {
  /**
   * the fields to include for returned resources of type appEventLocalizations
   */
  'fields[appEventLocalizations]'?: Array<
    | 'locale'
    | 'name'
    | 'shortDescription'
    | 'longDescription'
    | 'appEvent'
    | 'appEventScreenshots'
    | 'appEventVideoClips'
  >;

  /**
   * the fields to include for returned resources of type appEventScreenshots
   */
  'fields[appEventScreenshots]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'imageAsset'
    | 'assetToken'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appEventAssetType'
    | 'appEventLocalization'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appEventLocalization'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppEventLocalizationListVideoClipsParams {
  /**
   * the fields to include for returned resources of type appEventLocalizations
   */
  'fields[appEventLocalizations]'?: Array<
    | 'locale'
    | 'name'
    | 'shortDescription'
    | 'longDescription'
    | 'appEvent'
    | 'appEventScreenshots'
    | 'appEventVideoClips'
  >;

  /**
   * the fields to include for returned resources of type appEventVideoClips
   */
  'fields[appEventVideoClips]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'previewFrameTimeCode'
    | 'videoUrl'
    | 'previewFrameImage'
    | 'previewImage'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'videoDeliveryState'
    | 'appEventAssetType'
    | 'appEventLocalization'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appEventLocalization'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

AppEventLocalizations.Relationships = RelationshipsAPIRelationships;

export declare namespace AppEventLocalizations {
  export {
    type AppEventLocalization as AppEventLocalization,
    type AppEventLocalizationResponse as AppEventLocalizationResponse,
    type AppEventLocalizationListScreenshotsResponse as AppEventLocalizationListScreenshotsResponse,
    type AppEventLocalizationListVideoClipsResponse as AppEventLocalizationListVideoClipsResponse,
    type AppEventLocalizationCreateParams as AppEventLocalizationCreateParams,
    type AppEventLocalizationRetrieveParams as AppEventLocalizationRetrieveParams,
    type AppEventLocalizationUpdateParams as AppEventLocalizationUpdateParams,
    type AppEventLocalizationListScreenshotsParams as AppEventLocalizationListScreenshotsParams,
    type AppEventLocalizationListVideoClipsParams as AppEventLocalizationListVideoClipsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListScreenshotsResponse as RelationshipListScreenshotsResponse,
    type RelationshipListVideoClipsResponse as RelationshipListVideoClipsResponse,
    type RelationshipListScreenshotsParams as RelationshipListScreenshotsParams,
    type RelationshipListVideoClipsParams as RelationshipListVideoClipsParams,
  };
}
