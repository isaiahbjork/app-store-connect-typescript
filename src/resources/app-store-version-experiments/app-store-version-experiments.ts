// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppStoreVersionExperimentsAPI from './app-store-version-experiments';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppStoreVersionExperimentTreatmentsAPI from '../app-store-version-experiment-treatments/app-store-version-experiment-treatments';
import * as AppStoreVersionExperimentsAppStoreVersionExperimentTreatmentsAPI from './app-store-version-experiment-treatments';
import {
  AppStoreVersionExperimentTreatmentListParams,
  AppStoreVersionExperimentTreatments as AppStoreVersionExperimentTreatmentsAPIAppStoreVersionExperimentTreatments,
  AppStoreVersionExperimentTreatmentsResponse,
} from './app-store-version-experiment-treatments';
import * as AppStoreVersionsAPI from '../app-store-versions/app-store-versions';
import * as AppsAPI from '../apps/apps';
import * as RelationshipsAPI from './relationships/relationships';
import { Relationships as RelationshipsAPIRelationships } from './relationships/relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppStoreVersionExperiments extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);
  appStoreVersionExperimentTreatments: AppStoreVersionExperimentsAppStoreVersionExperimentTreatmentsAPI.AppStoreVersionExperimentTreatments =
    new AppStoreVersionExperimentsAppStoreVersionExperimentTreatmentsAPI.AppStoreVersionExperimentTreatments(
      this._client,
    );

  /**
   * @deprecated
   */
  create(
    body: AppStoreVersionExperimentCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionExperimentResponse> {
    return this._client.post('/v1/appStoreVersionExperiments', { body, ...options });
  }

  /**
   * @deprecated
   */
  retrieve(
    id: string,
    query: AppStoreVersionExperimentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionExperimentResponse> {
    return this._client.get(path`/v1/appStoreVersionExperiments/${id}`, { query, ...options });
  }

  /**
   * @deprecated
   */
  update(
    id: string,
    body: AppStoreVersionExperimentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppStoreVersionExperimentResponse> {
    return this._client.patch(path`/v1/appStoreVersionExperiments/${id}`, { body, ...options });
  }

  /**
   * @deprecated
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appStoreVersionExperiments/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * @deprecated
 */
export interface AppStoreVersionExperiment {
  id: string;

  type: 'appStoreVersionExperiments';

  attributes?: AppStoreVersionExperiment.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppStoreVersionExperiment.Relationships;
}

export namespace AppStoreVersionExperiment {
  export interface Attributes {
    endDate?: string;

    name?: string;

    reviewRequired?: boolean;

    startDate?: string;

    state?:
      | 'PREPARE_FOR_SUBMISSION'
      | 'READY_FOR_REVIEW'
      | 'WAITING_FOR_REVIEW'
      | 'IN_REVIEW'
      | 'ACCEPTED'
      | 'APPROVED'
      | 'REJECTED'
      | 'COMPLETED'
      | 'STOPPED';

    trafficProportion?: number;
  }

  export interface Relationships {
    appStoreVersion?: Relationships.AppStoreVersion;

    appStoreVersionExperimentTreatments?: Relationships.AppStoreVersionExperimentTreatments;
  }

  export namespace Relationships {
    export interface AppStoreVersion {
      data?: AppStoreVersion.Data;
    }

    export namespace AppStoreVersion {
      export interface Data {
        id: string;

        type: 'appStoreVersions';
      }
    }

    export interface AppStoreVersionExperimentTreatments {
      data?: Array<AppStoreVersionExperimentTreatments.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppStoreVersionExperimentTreatments {
      export interface Data {
        id: string;

        type: 'appStoreVersionExperimentTreatments';
      }
    }
  }
}

/**
 * @deprecated
 */
export interface AppStoreVersionExperimentResponse {
  /**
   * @deprecated
   */
  data: AppStoreVersionExperiment;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppStoreVersionsAPI.AppStoreVersionDetails
    | AppStoreVersionExperimentTreatmentsAPI.AppStoreVersionExperimentTreatment
  >;
}

export interface AppStoreVersionExperimentV2 {
  id: string;

  type: 'appStoreVersionExperiments';

  attributes?: AppStoreVersionExperimentV2.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppStoreVersionExperimentV2.Relationships;
}

export namespace AppStoreVersionExperimentV2 {
  export interface Attributes {
    endDate?: string;

    name?: string;

    platform?: AppStoreVersionExperimentsAPI.Platform;

    reviewRequired?: boolean;

    startDate?: string;

    state?:
      | 'PREPARE_FOR_SUBMISSION'
      | 'READY_FOR_REVIEW'
      | 'WAITING_FOR_REVIEW'
      | 'IN_REVIEW'
      | 'ACCEPTED'
      | 'APPROVED'
      | 'REJECTED'
      | 'COMPLETED'
      | 'STOPPED';

    trafficProportion?: number;
  }

  export interface Relationships {
    app?: Relationships.App;

    appStoreVersionExperimentTreatments?: Relationships.AppStoreVersionExperimentTreatments;

    controlVersions?: Relationships.ControlVersions;

    latestControlVersion?: Relationships.LatestControlVersion;
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

    export interface AppStoreVersionExperimentTreatments {
      data?: Array<AppStoreVersionExperimentTreatments.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppStoreVersionExperimentTreatments {
      export interface Data {
        id: string;

        type: 'appStoreVersionExperimentTreatments';
      }
    }

    export interface ControlVersions {
      data?: Array<ControlVersions.Data>;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace ControlVersions {
      export interface Data {
        id: string;

        type: 'appStoreVersions';
      }
    }

    export interface LatestControlVersion {
      data?: LatestControlVersion.Data;
    }

    export namespace LatestControlVersion {
      export interface Data {
        id: string;

        type: 'appStoreVersions';
      }
    }
  }
}

export interface AppStoreVersionExperimentV2Response {
  data: AppStoreVersionExperimentV2;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppsAPI.App
    | AppStoreVersionsAPI.AppStoreVersionDetails
    | AppStoreVersionExperimentTreatmentsAPI.AppStoreVersionExperimentTreatment
  >;
}

export type Platform = 'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS';

export interface AppStoreVersionExperimentCreateParams {
  data: AppStoreVersionExperimentCreateParams.Data;
}

export namespace AppStoreVersionExperimentCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appStoreVersionExperiments';
  }

  export namespace Data {
    export interface Attributes {
      name: string;

      trafficProportion: number;
    }

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
  }
}

export interface AppStoreVersionExperimentRetrieveParams {
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
  >;

  /**
   * the fields to include for returned resources of type
   * appStoreVersionExperimentTreatments
   */
  'fields[appStoreVersionExperimentTreatments]'?: Array<
    | 'name'
    | 'appIcon'
    | 'appIconName'
    | 'promotedDate'
    | 'appStoreVersionExperiment'
    | 'appStoreVersionExperimentV2'
    | 'appStoreVersionExperimentTreatmentLocalizations'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appStoreVersion' | 'appStoreVersionExperimentTreatments'>;

  /**
   * maximum number of related appStoreVersionExperimentTreatments returned (when
   * they are included)
   */
  'limit[appStoreVersionExperimentTreatments]'?: number;
}

export interface AppStoreVersionExperimentUpdateParams {
  data: AppStoreVersionExperimentUpdateParams.Data;
}

export namespace AppStoreVersionExperimentUpdateParams {
  export interface Data {
    id: string;

    type: 'appStoreVersionExperiments';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      name?: string;

      started?: boolean;

      trafficProportion?: number;
    }
  }
}

AppStoreVersionExperiments.Relationships = RelationshipsAPIRelationships;
AppStoreVersionExperiments.AppStoreVersionExperimentTreatments =
  AppStoreVersionExperimentTreatmentsAPIAppStoreVersionExperimentTreatments;

export declare namespace AppStoreVersionExperiments {
  export {
    type AppStoreVersionExperiment as AppStoreVersionExperiment,
    type AppStoreVersionExperimentResponse as AppStoreVersionExperimentResponse,
    type AppStoreVersionExperimentV2 as AppStoreVersionExperimentV2,
    type AppStoreVersionExperimentV2Response as AppStoreVersionExperimentV2Response,
    type Platform as Platform,
    type AppStoreVersionExperimentCreateParams as AppStoreVersionExperimentCreateParams,
    type AppStoreVersionExperimentRetrieveParams as AppStoreVersionExperimentRetrieveParams,
    type AppStoreVersionExperimentUpdateParams as AppStoreVersionExperimentUpdateParams,
  };

  export { RelationshipsAPIRelationships as Relationships };

  export {
    AppStoreVersionExperimentTreatmentsAPIAppStoreVersionExperimentTreatments as AppStoreVersionExperimentTreatments,
    type AppStoreVersionExperimentTreatmentsResponse as AppStoreVersionExperimentTreatmentsResponse,
    type AppStoreVersionExperimentTreatmentListParams as AppStoreVersionExperimentTreatmentListParams,
  };
}
