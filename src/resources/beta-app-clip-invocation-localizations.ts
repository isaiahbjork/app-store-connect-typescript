// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BetaAppClipInvocationLocalizations extends APIResource {
  create(
    body: BetaAppClipInvocationLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<BetaAppClipInvocationLocalizationResponse> {
    return this._client.post('/v1/betaAppClipInvocationLocalizations', { body, ...options });
  }

  update(
    id: string,
    body: BetaAppClipInvocationLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BetaAppClipInvocationLocalizationResponse> {
    return this._client.patch(path`/v1/betaAppClipInvocationLocalizations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/betaAppClipInvocationLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BetaAppClipInvocationLocalization {
  id: string;

  type: 'betaAppClipInvocationLocalizations';

  attributes?: BetaAppClipInvocationLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace BetaAppClipInvocationLocalization {
  export interface Attributes {
    locale?: string;

    title?: string;
  }
}

export interface BetaAppClipInvocationLocalizationResponse {
  data: BetaAppClipInvocationLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface BetaAppClipInvocationLocalizationCreateParams {
  data: BetaAppClipInvocationLocalizationCreateParams.Data;
}

export namespace BetaAppClipInvocationLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'betaAppClipInvocationLocalizations';
  }

  export namespace Data {
    export interface Attributes {
      locale: string;

      title: string;
    }

    export interface Relationships {
      betaAppClipInvocation: Relationships.BetaAppClipInvocation;
    }

    export namespace Relationships {
      export interface BetaAppClipInvocation {
        data: BetaAppClipInvocation.Data;
      }

      export namespace BetaAppClipInvocation {
        export interface Data {
          id: string;

          type: 'betaAppClipInvocations';
        }
      }
    }
  }
}

export interface BetaAppClipInvocationLocalizationUpdateParams {
  data: BetaAppClipInvocationLocalizationUpdateParams.Data;
}

export namespace BetaAppClipInvocationLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'betaAppClipInvocationLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      title?: string;
    }
  }
}

export declare namespace BetaAppClipInvocationLocalizations {
  export {
    type BetaAppClipInvocationLocalization as BetaAppClipInvocationLocalization,
    type BetaAppClipInvocationLocalizationResponse as BetaAppClipInvocationLocalizationResponse,
    type BetaAppClipInvocationLocalizationCreateParams as BetaAppClipInvocationLocalizationCreateParams,
    type BetaAppClipInvocationLocalizationUpdateParams as BetaAppClipInvocationLocalizationUpdateParams,
  };
}
