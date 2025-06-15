// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class BuildBetaNotifications extends APIResource {
  create(
    body: BuildBetaNotificationCreateParams,
    options?: RequestOptions,
  ): APIPromise<BuildBetaNotificationCreateResponse> {
    return this._client.post('/v1/buildBetaNotifications', { body, ...options });
  }
}

export interface BuildBetaNotificationCreateResponse {
  data: BuildBetaNotificationCreateResponse.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace BuildBetaNotificationCreateResponse {
  export interface Data {
    id: string;

    type: 'buildBetaNotifications';

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }
}

export interface BuildBetaNotificationCreateParams {
  data: BuildBetaNotificationCreateParams.Data;
}

export namespace BuildBetaNotificationCreateParams {
  export interface Data {
    relationships: Data.Relationships;

    type: 'buildBetaNotifications';
  }

  export namespace Data {
    export interface Relationships {
      build: Relationships.Build;
    }

    export namespace Relationships {
      export interface Build {
        data: Build.Data;
      }

      export namespace Build {
        export interface Data {
          id: string;

          type: 'builds';
        }
      }
    }
  }
}

export declare namespace BuildBetaNotifications {
  export {
    type BuildBetaNotificationCreateResponse as BuildBetaNotificationCreateResponse,
    type BuildBetaNotificationCreateParams as BuildBetaNotificationCreateParams,
  };
}
