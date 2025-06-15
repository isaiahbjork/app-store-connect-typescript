// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as AppInfosAPI from './app-infos/app-infos';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AppInfoLocalizations extends APIResource {
  create(
    body: AppInfoLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppInfoLocalizationResponse> {
    return this._client.post('/v1/appInfoLocalizations', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppInfoLocalizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppInfoLocalizationResponse> {
    return this._client.get(path`/v1/appInfoLocalizations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppInfoLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppInfoLocalizationResponse> {
    return this._client.patch(path`/v1/appInfoLocalizations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appInfoLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AppInfoLocalization {
  id: string;

  type: 'appInfoLocalizations';

  attributes?: AppInfoLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppInfoLocalization.Relationships;
}

export namespace AppInfoLocalization {
  export interface Attributes {
    locale?: string;

    name?: string;

    privacyChoicesUrl?: string;

    privacyPolicyText?: string;

    privacyPolicyUrl?: string;

    subtitle?: string;
  }

  export interface Relationships {
    appInfo?: Relationships.AppInfo;
  }

  export namespace Relationships {
    export interface AppInfo {
      data?: AppInfo.Data;
    }

    export namespace AppInfo {
      export interface Data {
        id: string;

        type: 'appInfos';
      }
    }
  }
}

export interface AppInfoLocalizationResponse {
  data: AppInfoLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppInfosAPI.AppInfo>;
}

export interface AppInfoLocalizationCreateParams {
  data: AppInfoLocalizationCreateParams.Data;
}

export namespace AppInfoLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appInfoLocalizations';
  }

  export namespace Data {
    export interface Attributes {
      locale: string;

      name: string;

      privacyChoicesUrl?: string;

      privacyPolicyText?: string;

      privacyPolicyUrl?: string;

      subtitle?: string;
    }

    export interface Relationships {
      appInfo: Relationships.AppInfo;
    }

    export namespace Relationships {
      export interface AppInfo {
        data: AppInfo.Data;
      }

      export namespace AppInfo {
        export interface Data {
          id: string;

          type: 'appInfos';
        }
      }
    }
  }
}

export interface AppInfoLocalizationRetrieveParams {
  /**
   * the fields to include for returned resources of type appInfoLocalizations
   */
  'fields[appInfoLocalizations]'?: Array<
    | 'locale'
    | 'name'
    | 'subtitle'
    | 'privacyPolicyUrl'
    | 'privacyChoicesUrl'
    | 'privacyPolicyText'
    | 'appInfo'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appInfo'>;
}

export interface AppInfoLocalizationUpdateParams {
  data: AppInfoLocalizationUpdateParams.Data;
}

export namespace AppInfoLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'appInfoLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      name?: string;

      privacyChoicesUrl?: string;

      privacyPolicyText?: string;

      privacyPolicyUrl?: string;

      subtitle?: string;
    }
  }
}

export declare namespace AppInfoLocalizations {
  export {
    type AppInfoLocalization as AppInfoLocalization,
    type AppInfoLocalizationResponse as AppInfoLocalizationResponse,
    type AppInfoLocalizationCreateParams as AppInfoLocalizationCreateParams,
    type AppInfoLocalizationRetrieveParams as AppInfoLocalizationRetrieveParams,
    type AppInfoLocalizationUpdateParams as AppInfoLocalizationUpdateParams,
  };
}
