// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppCustomProductPageVersionsAPI from './app-custom-product-page-versions/app-custom-product-page-versions';
import * as AppEventsAPI from './app-events/app-events';
import * as AppStoreVersionExperimentsAPI from './app-store-version-experiments/app-store-version-experiments';
import * as AppStoreVersionsAPI from './app-store-versions/app-store-versions';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ReviewSubmissionItems extends APIResource {
  create(
    body: ReviewSubmissionItemCreateParams,
    options?: RequestOptions,
  ): APIPromise<ReviewSubmissionItemResponse> {
    return this._client.post('/v1/reviewSubmissionItems', { body, ...options });
  }

  update(
    id: string,
    body: ReviewSubmissionItemUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ReviewSubmissionItemResponse> {
    return this._client.patch(path`/v1/reviewSubmissionItems/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/reviewSubmissionItems/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ReviewSubmissionItem {
  id: string;

  type: 'reviewSubmissionItems';

  attributes?: ReviewSubmissionItem.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: ReviewSubmissionItem.Relationships;
}

export namespace ReviewSubmissionItem {
  export interface Attributes {
    state?: 'READY_FOR_REVIEW' | 'ACCEPTED' | 'APPROVED' | 'REJECTED' | 'REMOVED';
  }

  export interface Relationships {
    appCustomProductPageVersion?: Relationships.AppCustomProductPageVersion;

    appEvent?: Relationships.AppEvent;

    appStoreVersion?: Relationships.AppStoreVersion;

    appStoreVersionExperiment?: Relationships.AppStoreVersionExperiment;

    appStoreVersionExperimentV2?: Relationships.AppStoreVersionExperimentV2;
  }

  export namespace Relationships {
    export interface AppCustomProductPageVersion {
      data?: AppCustomProductPageVersion.Data;
    }

    export namespace AppCustomProductPageVersion {
      export interface Data {
        id: string;

        type: 'appCustomProductPageVersions';
      }
    }

    export interface AppEvent {
      data?: AppEvent.Data;
    }

    export namespace AppEvent {
      export interface Data {
        id: string;

        type: 'appEvents';
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

    export interface AppStoreVersionExperiment {
      data?: AppStoreVersionExperiment.Data;
    }

    export namespace AppStoreVersionExperiment {
      export interface Data {
        id: string;

        type: 'appStoreVersionExperiments';
      }
    }

    export interface AppStoreVersionExperimentV2 {
      data?: AppStoreVersionExperimentV2.Data;
    }

    export namespace AppStoreVersionExperimentV2 {
      export interface Data {
        id: string;

        type: 'appStoreVersionExperiments';
      }
    }
  }
}

export interface ReviewSubmissionItemResponse {
  data: ReviewSubmissionItem;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppStoreVersionsAPI.AppStoreVersionDetails
    | AppCustomProductPageVersionsAPI.AppCustomProductPageVersion
    | AppStoreVersionExperimentsAPI.AppStoreVersionExperiment
    | AppStoreVersionExperimentsAPI.AppStoreVersionExperimentV2
    | AppEventsAPI.AppEvent
  >;
}

export interface ReviewSubmissionItemCreateParams {
  data: ReviewSubmissionItemCreateParams.Data;
}

export namespace ReviewSubmissionItemCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'reviewSubmissionItems';
  }

  export namespace Data {
    export interface Relationships {
      reviewSubmission: Relationships.ReviewSubmission;

      appCustomProductPageVersion?: Relationships.AppCustomProductPageVersion;

      appEvent?: Relationships.AppEvent;

      appStoreVersion?: Relationships.AppStoreVersion;

      appStoreVersionExperiment?: Relationships.AppStoreVersionExperiment;

      appStoreVersionExperimentV2?: Relationships.AppStoreVersionExperimentV2;
    }

    export namespace Relationships {
      export interface ReviewSubmission {
        data: ReviewSubmission.Data;
      }

      export namespace ReviewSubmission {
        export interface Data {
          id: string;

          type: 'reviewSubmissions';
        }
      }

      export interface AppCustomProductPageVersion {
        data?: AppCustomProductPageVersion.Data;
      }

      export namespace AppCustomProductPageVersion {
        export interface Data {
          id: string;

          type: 'appCustomProductPageVersions';
        }
      }

      export interface AppEvent {
        data?: AppEvent.Data;
      }

      export namespace AppEvent {
        export interface Data {
          id: string;

          type: 'appEvents';
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

      export interface AppStoreVersionExperiment {
        data?: AppStoreVersionExperiment.Data;
      }

      export namespace AppStoreVersionExperiment {
        export interface Data {
          id: string;

          type: 'appStoreVersionExperiments';
        }
      }

      export interface AppStoreVersionExperimentV2 {
        data?: AppStoreVersionExperimentV2.Data;
      }

      export namespace AppStoreVersionExperimentV2 {
        export interface Data {
          id: string;

          type: 'appStoreVersionExperiments';
        }
      }
    }
  }
}

export interface ReviewSubmissionItemUpdateParams {
  data: ReviewSubmissionItemUpdateParams.Data;
}

export namespace ReviewSubmissionItemUpdateParams {
  export interface Data {
    id: string;

    type: 'reviewSubmissionItems';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      removed?: boolean;

      resolved?: boolean;
    }
  }
}

export declare namespace ReviewSubmissionItems {
  export {
    type ReviewSubmissionItem as ReviewSubmissionItem,
    type ReviewSubmissionItemResponse as ReviewSubmissionItemResponse,
    type ReviewSubmissionItemCreateParams as ReviewSubmissionItemCreateParams,
    type ReviewSubmissionItemUpdateParams as ReviewSubmissionItemUpdateParams,
  };
}
