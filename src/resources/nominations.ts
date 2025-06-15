// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as ActorsAPI from './actors';
import * as AppEventsAPI from './app-events/app-events';
import * as AppPriceSchedulesAPI from './app-price-schedules/app-price-schedules';
import * as AppsAPI from './apps/apps';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Nominations extends APIResource {
  create(body: NominationCreateParams, options?: RequestOptions): APIPromise<NominationResponse> {
    return this._client.post('/v1/nominations', { body, ...options });
  }

  retrieve(
    id: string,
    query: NominationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NominationResponse> {
    return this._client.get(path`/v1/nominations/${id}`, { query, ...options });
  }

  update(id: string, body: NominationUpdateParams, options?: RequestOptions): APIPromise<NominationResponse> {
    return this._client.patch(path`/v1/nominations/${id}`, { body, ...options });
  }

  list(query: NominationListParams, options?: RequestOptions): APIPromise<NominationListResponse> {
    return this._client.get('/v1/nominations', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/nominations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Nomination {
  id: string;

  type: 'nominations';

  attributes?: Nomination.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: Nomination.Relationships;
}

export namespace Nomination {
  export interface Attributes {
    createdDate?: string;

    description?: string;

    deviceFamilies?: Array<AccessibilityDeclarationsAPI.DeviceFamily>;

    hasInAppEvents?: boolean;

    lastModifiedDate?: string;

    launchInSelectMarketsFirst?: boolean;

    locales?: Array<string>;

    name?: string;

    notes?: string;

    preOrderEnabled?: boolean;

    publishEndDate?: string;

    publishStartDate?: string;

    state?: 'DRAFT' | 'SUBMITTED' | 'ARCHIVED';

    submittedDate?: string;

    supplementalMaterialsUris?: Array<string>;

    type?: 'APP_LAUNCH' | 'APP_ENHANCEMENTS' | 'NEW_CONTENT';
  }

  export interface Relationships {
    createdByActor?: Relationships.CreatedByActor;

    inAppEvents?: Relationships.InAppEvents;

    lastModifiedByActor?: Relationships.LastModifiedByActor;

    relatedApps?: Relationships.RelatedApps;

    submittedByActor?: Relationships.SubmittedByActor;

    supportedTerritories?: Relationships.SupportedTerritories;
  }

  export namespace Relationships {
    export interface CreatedByActor {
      data?: CreatedByActor.Data;
    }

    export namespace CreatedByActor {
      export interface Data {
        id: string;

        type: 'actors';
      }
    }

    export interface InAppEvents {
      data?: Array<InAppEvents.Data>;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace InAppEvents {
      export interface Data {
        id: string;

        type: 'appEvents';
      }
    }

    export interface LastModifiedByActor {
      data?: LastModifiedByActor.Data;
    }

    export namespace LastModifiedByActor {
      export interface Data {
        id: string;

        type: 'actors';
      }
    }

    export interface RelatedApps {
      data?: Array<RelatedApps.Data>;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace RelatedApps {
      export interface Data {
        id: string;

        type: 'apps';
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

    export interface SupportedTerritories {
      data?: Array<SupportedTerritories.Data>;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace SupportedTerritories {
      export interface Data {
        id: string;

        type: 'territories';
      }
    }
  }
}

export interface NominationResponse {
  data: Nomination;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppsAPI.App | ActorsAPI.Actor | AppEventsAPI.AppEvent | AppPriceSchedulesAPI.Territory>;
}

export interface NominationListResponse {
  data: Array<Nomination>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppsAPI.App | ActorsAPI.Actor | AppEventsAPI.AppEvent | AppPriceSchedulesAPI.Territory>;

  meta?: ActorsAPI.PagingInformation;
}

export interface NominationCreateParams {
  data: NominationCreateParams.Data;
}

export namespace NominationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'nominations';
  }

  export namespace Data {
    export interface Attributes {
      description: string;

      name: string;

      publishStartDate: string;

      submitted: boolean;

      type: 'APP_LAUNCH' | 'APP_ENHANCEMENTS' | 'NEW_CONTENT';

      deviceFamilies?: Array<AccessibilityDeclarationsAPI.DeviceFamily>;

      hasInAppEvents?: boolean;

      launchInSelectMarketsFirst?: boolean;

      locales?: Array<string>;

      notes?: string;

      preOrderEnabled?: boolean;

      publishEndDate?: string;

      supplementalMaterialsUris?: Array<string>;
    }

    export interface Relationships {
      relatedApps: Relationships.RelatedApps;

      inAppEvents?: Relationships.InAppEvents;

      supportedTerritories?: Relationships.SupportedTerritories;
    }

    export namespace Relationships {
      export interface RelatedApps {
        data: Array<RelatedApps.Data>;
      }

      export namespace RelatedApps {
        export interface Data {
          id: string;

          type: 'apps';
        }
      }

      export interface InAppEvents {
        data?: Array<InAppEvents.Data>;
      }

      export namespace InAppEvents {
        export interface Data {
          id: string;

          type: 'appEvents';
        }
      }

      export interface SupportedTerritories {
        data?: Array<SupportedTerritories.Data>;
      }

      export namespace SupportedTerritories {
        export interface Data {
          id: string;

          type: 'territories';
        }
      }
    }
  }
}

export interface NominationRetrieveParams {
  /**
   * the fields to include for returned resources of type nominations
   */
  'fields[nominations]'?: Array<
    | 'name'
    | 'type'
    | 'description'
    | 'createdDate'
    | 'lastModifiedDate'
    | 'submittedDate'
    | 'state'
    | 'publishStartDate'
    | 'publishEndDate'
    | 'deviceFamilies'
    | 'locales'
    | 'supplementalMaterialsUris'
    | 'hasInAppEvents'
    | 'launchInSelectMarketsFirst'
    | 'notes'
    | 'preOrderEnabled'
    | 'relatedApps'
    | 'createdByActor'
    | 'lastModifiedByActor'
    | 'submittedByActor'
    | 'inAppEvents'
    | 'supportedTerritories'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'relatedApps'
    | 'createdByActor'
    | 'lastModifiedByActor'
    | 'submittedByActor'
    | 'inAppEvents'
    | 'supportedTerritories'
  >;

  /**
   * maximum number of related inAppEvents returned (when they are included)
   */
  'limit[inAppEvents]'?: number;

  /**
   * maximum number of related relatedApps returned (when they are included)
   */
  'limit[relatedApps]'?: number;

  /**
   * maximum number of related supportedTerritories returned (when they are included)
   */
  'limit[supportedTerritories]'?: number;
}

export interface NominationUpdateParams {
  data: NominationUpdateParams.Data;
}

export namespace NominationUpdateParams {
  export interface Data {
    id: string;

    type: 'nominations';

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      archived?: boolean;

      description?: string;

      deviceFamilies?: Array<AccessibilityDeclarationsAPI.DeviceFamily>;

      hasInAppEvents?: boolean;

      launchInSelectMarketsFirst?: boolean;

      locales?: Array<string>;

      name?: string;

      notes?: string;

      preOrderEnabled?: boolean;

      publishEndDate?: string;

      publishStartDate?: string;

      submitted?: boolean;

      supplementalMaterialsUris?: Array<string>;

      type?: 'APP_LAUNCH' | 'APP_ENHANCEMENTS' | 'NEW_CONTENT';
    }

    export interface Relationships {
      inAppEvents?: Relationships.InAppEvents;

      relatedApps?: Relationships.RelatedApps;

      supportedTerritories?: Relationships.SupportedTerritories;
    }

    export namespace Relationships {
      export interface InAppEvents {
        data?: Array<InAppEvents.Data>;
      }

      export namespace InAppEvents {
        export interface Data {
          id: string;

          type: 'appEvents';
        }
      }

      export interface RelatedApps {
        data?: Array<RelatedApps.Data>;
      }

      export namespace RelatedApps {
        export interface Data {
          id: string;

          type: 'apps';
        }
      }

      export interface SupportedTerritories {
        data?: Array<SupportedTerritories.Data>;
      }

      export namespace SupportedTerritories {
        export interface Data {
          id: string;

          type: 'territories';
        }
      }
    }
  }
}

export interface NominationListParams {
  /**
   * filter by attribute 'state'
   */
  'filter[state]': Array<'DRAFT' | 'SUBMITTED' | 'ARCHIVED'>;

  /**
   * the fields to include for returned resources of type nominations
   */
  'fields[nominations]'?: Array<
    | 'name'
    | 'type'
    | 'description'
    | 'createdDate'
    | 'lastModifiedDate'
    | 'submittedDate'
    | 'state'
    | 'publishStartDate'
    | 'publishEndDate'
    | 'deviceFamilies'
    | 'locales'
    | 'supplementalMaterialsUris'
    | 'hasInAppEvents'
    | 'launchInSelectMarketsFirst'
    | 'notes'
    | 'preOrderEnabled'
    | 'relatedApps'
    | 'createdByActor'
    | 'lastModifiedByActor'
    | 'submittedByActor'
    | 'inAppEvents'
    | 'supportedTerritories'
  >;

  /**
   * filter by id(s) of related 'relatedApps'
   */
  'filter[relatedApps]'?: Array<string>;

  /**
   * filter by attribute 'type'
   */
  'filter[type]'?: Array<'APP_LAUNCH' | 'APP_ENHANCEMENTS' | 'NEW_CONTENT'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'relatedApps'
    | 'createdByActor'
    | 'lastModifiedByActor'
    | 'submittedByActor'
    | 'inAppEvents'
    | 'supportedTerritories'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related inAppEvents returned (when they are included)
   */
  'limit[inAppEvents]'?: number;

  /**
   * maximum number of related relatedApps returned (when they are included)
   */
  'limit[relatedApps]'?: number;

  /**
   * maximum number of related supportedTerritories returned (when they are included)
   */
  'limit[supportedTerritories]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<
    | 'lastModifiedDate'
    | '-lastModifiedDate'
    | 'publishStartDate'
    | '-publishStartDate'
    | 'publishEndDate'
    | '-publishEndDate'
    | 'name'
    | '-name'
    | 'type'
    | '-type'
  >;
}

export declare namespace Nominations {
  export {
    type Nomination as Nomination,
    type NominationResponse as NominationResponse,
    type NominationListResponse as NominationListResponse,
    type NominationCreateParams as NominationCreateParams,
    type NominationRetrieveParams as NominationRetrieveParams,
    type NominationUpdateParams as NominationUpdateParams,
    type NominationListParams as NominationListParams,
  };
}
