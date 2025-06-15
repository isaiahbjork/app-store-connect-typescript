// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AppEventScreenshotsAPI from '../app-event-screenshots';
import * as AppEventVideoClipsAPI from '../app-event-video-clips';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppEventLocalizationsAPI from '../app-event-localizations/app-event-localizations';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListLocalizationsParams,
  RelationshipListLocalizationsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppEvents extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: AppEventCreateParams, options?: RequestOptions): APIPromise<AppEventResponse> {
    return this._client.post('/v1/appEvents', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppEventRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEventResponse> {
    return this._client.get(path`/v1/appEvents/${id}`, { query, ...options });
  }

  update(id: string, body: AppEventUpdateParams, options?: RequestOptions): APIPromise<AppEventResponse> {
    return this._client.patch(path`/v1/appEvents/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appEvents/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listLocalizations(
    id: string,
    query: AppEventListLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppEventListLocalizationsResponse> {
    return this._client.get(path`/v1/appEvents/${id}/localizations`, { query, ...options });
  }
}

export interface AppEvent {
  id: string;

  type: 'appEvents';

  attributes?: AppEvent.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppEvent.Relationships;
}

export namespace AppEvent {
  export interface Attributes {
    archivedTerritorySchedules?: Array<Attributes.ArchivedTerritorySchedule>;

    badge?:
      | 'LIVE_EVENT'
      | 'PREMIERE'
      | 'CHALLENGE'
      | 'COMPETITION'
      | 'NEW_SEASON'
      | 'MAJOR_UPDATE'
      | 'SPECIAL_EVENT';

    deepLink?: string;

    eventState?:
      | 'DRAFT'
      | 'READY_FOR_REVIEW'
      | 'WAITING_FOR_REVIEW'
      | 'IN_REVIEW'
      | 'REJECTED'
      | 'ACCEPTED'
      | 'APPROVED'
      | 'PUBLISHED'
      | 'PAST'
      | 'ARCHIVED';

    primaryLocale?: string;

    priority?: 'HIGH' | 'NORMAL';

    purchaseRequirement?: string;

    purpose?:
      | 'APPROPRIATE_FOR_ALL_USERS'
      | 'ATTRACT_NEW_USERS'
      | 'KEEP_ACTIVE_USERS_INFORMED'
      | 'BRING_BACK_LAPSED_USERS';

    referenceName?: string;

    territorySchedules?: Array<Attributes.TerritorySchedule>;
  }

  export namespace Attributes {
    export interface ArchivedTerritorySchedule {
      eventEnd?: string;

      eventStart?: string;

      publishStart?: string;

      territories?: Array<string>;
    }

    export interface TerritorySchedule {
      eventEnd?: string;

      eventStart?: string;

      publishStart?: string;

      territories?: Array<string>;
    }
  }

  export interface Relationships {
    localizations?: Relationships.Localizations;
  }

  export namespace Relationships {
    export interface Localizations {
      data?: Array<Localizations.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Localizations {
      export interface Data {
        id: string;

        type: 'appEventLocalizations';
      }
    }
  }
}

export interface AppEventResponse {
  data: AppEvent;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppEventLocalizationsAPI.AppEventLocalization>;
}

export interface AppEventListLocalizationsResponse {
  data: Array<AppEventLocalizationsAPI.AppEventLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<
    AppEvent | AppEventScreenshotsAPI.AppEventScreenshot | AppEventVideoClipsAPI.AppEventVideoClip
  >;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppEventCreateParams {
  data: AppEventCreateParams.Data;
}

export namespace AppEventCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appEvents';
  }

  export namespace Data {
    export interface Attributes {
      referenceName: string;

      badge?:
        | 'LIVE_EVENT'
        | 'PREMIERE'
        | 'CHALLENGE'
        | 'COMPETITION'
        | 'NEW_SEASON'
        | 'MAJOR_UPDATE'
        | 'SPECIAL_EVENT';

      deepLink?: string;

      primaryLocale?: string;

      priority?: 'HIGH' | 'NORMAL';

      purchaseRequirement?: string;

      purpose?:
        | 'APPROPRIATE_FOR_ALL_USERS'
        | 'ATTRACT_NEW_USERS'
        | 'KEEP_ACTIVE_USERS_INFORMED'
        | 'BRING_BACK_LAPSED_USERS';

      territorySchedules?: Array<Attributes.TerritorySchedule>;
    }

    export namespace Attributes {
      export interface TerritorySchedule {
        eventEnd?: string;

        eventStart?: string;

        publishStart?: string;

        territories?: Array<string>;
      }
    }

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
  }
}

export interface AppEventRetrieveParams {
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
   * comma-separated list of relationships to include
   */
  include?: Array<'localizations'>;

  /**
   * maximum number of related localizations returned (when they are included)
   */
  'limit[localizations]'?: number;
}

export interface AppEventUpdateParams {
  data: AppEventUpdateParams.Data;
}

export namespace AppEventUpdateParams {
  export interface Data {
    id: string;

    type: 'appEvents';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      badge?:
        | 'LIVE_EVENT'
        | 'PREMIERE'
        | 'CHALLENGE'
        | 'COMPETITION'
        | 'NEW_SEASON'
        | 'MAJOR_UPDATE'
        | 'SPECIAL_EVENT';

      deepLink?: string;

      primaryLocale?: string;

      priority?: 'HIGH' | 'NORMAL';

      purchaseRequirement?: string;

      purpose?:
        | 'APPROPRIATE_FOR_ALL_USERS'
        | 'ATTRACT_NEW_USERS'
        | 'KEEP_ACTIVE_USERS_INFORMED'
        | 'BRING_BACK_LAPSED_USERS';

      referenceName?: string;

      territorySchedules?: Array<Attributes.TerritorySchedule>;
    }

    export namespace Attributes {
      export interface TerritorySchedule {
        eventEnd?: string;

        eventStart?: string;

        publishStart?: string;

        territories?: Array<string>;
      }
    }
  }
}

export interface AppEventListLocalizationsParams {
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
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appEventScreenshots returned (when they are included)
   */
  'limit[appEventScreenshots]'?: number;

  /**
   * maximum number of related appEventVideoClips returned (when they are included)
   */
  'limit[appEventVideoClips]'?: number;
}

AppEvents.Relationships = RelationshipsAPIRelationships;

export declare namespace AppEvents {
  export {
    type AppEvent as AppEvent,
    type AppEventResponse as AppEventResponse,
    type AppEventListLocalizationsResponse as AppEventListLocalizationsResponse,
    type AppEventCreateParams as AppEventCreateParams,
    type AppEventRetrieveParams as AppEventRetrieveParams,
    type AppEventUpdateParams as AppEventUpdateParams,
    type AppEventListLocalizationsParams as AppEventListLocalizationsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListLocalizationsResponse as RelationshipListLocalizationsResponse,
    type RelationshipListLocalizationsParams as RelationshipListLocalizationsParams,
  };
}
