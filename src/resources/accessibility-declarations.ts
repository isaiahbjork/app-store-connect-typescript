// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccessibilityDeclarations extends APIResource {
  create(
    body: AccessibilityDeclarationCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccessibilityDeclarationResponse> {
    return this._client.post('/v1/accessibilityDeclarations', { body, ...options });
  }

  retrieve(
    id: string,
    query: AccessibilityDeclarationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccessibilityDeclarationResponse> {
    return this._client.get(path`/v1/accessibilityDeclarations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AccessibilityDeclarationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AccessibilityDeclarationResponse> {
    return this._client.patch(path`/v1/accessibilityDeclarations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/accessibilityDeclarations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AccessibilityDeclaration {
  id: string;

  type: 'accessibilityDeclarations';

  attributes?: AccessibilityDeclaration.Attributes;

  links?: ResourceLinks;
}

export namespace AccessibilityDeclaration {
  export interface Attributes {
    deviceFamily?: AccessibilityDeclarationsAPI.DeviceFamily;

    state?: 'DRAFT' | 'PUBLISHED' | 'REPLACED';

    supportsAudioDescriptions?: boolean;

    supportsCaptions?: boolean;

    supportsDarkInterface?: boolean;

    supportsDifferentiateWithoutColorAlone?: boolean;

    supportsLargerText?: boolean;

    supportsReducedMotion?: boolean;

    supportsSufficientContrast?: boolean;

    supportsVoiceControl?: boolean;

    supportsVoiceover?: boolean;
  }
}

export interface AccessibilityDeclarationResponse {
  data: AccessibilityDeclaration;

  links: DocumentLinks;
}

export type DeviceFamily = 'IPHONE' | 'IPAD' | 'APPLE_TV' | 'APPLE_WATCH' | 'MAC' | 'VISION';

export interface DocumentLinks {
  self: string;
}

export interface ResourceLinks {
  self?: string;
}

export interface AccessibilityDeclarationCreateParams {
  data: AccessibilityDeclarationCreateParams.Data;
}

export namespace AccessibilityDeclarationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'accessibilityDeclarations';
  }

  export namespace Data {
    export interface Attributes {
      deviceFamily: AccessibilityDeclarationsAPI.DeviceFamily;

      supportsAudioDescriptions?: boolean;

      supportsCaptions?: boolean;

      supportsDarkInterface?: boolean;

      supportsDifferentiateWithoutColorAlone?: boolean;

      supportsLargerText?: boolean;

      supportsReducedMotion?: boolean;

      supportsSufficientContrast?: boolean;

      supportsVoiceControl?: boolean;

      supportsVoiceover?: boolean;
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

export interface AccessibilityDeclarationRetrieveParams {
  /**
   * the fields to include for returned resources of type accessibilityDeclarations
   */
  'fields[accessibilityDeclarations]'?: Array<
    | 'deviceFamily'
    | 'state'
    | 'supportsAudioDescriptions'
    | 'supportsCaptions'
    | 'supportsDarkInterface'
    | 'supportsDifferentiateWithoutColorAlone'
    | 'supportsLargerText'
    | 'supportsReducedMotion'
    | 'supportsSufficientContrast'
    | 'supportsVoiceControl'
    | 'supportsVoiceover'
  >;
}

export interface AccessibilityDeclarationUpdateParams {
  data: AccessibilityDeclarationUpdateParams.Data;
}

export namespace AccessibilityDeclarationUpdateParams {
  export interface Data {
    id: string;

    type: 'accessibilityDeclarations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      publish?: boolean;

      supportsAudioDescriptions?: boolean;

      supportsCaptions?: boolean;

      supportsDarkInterface?: boolean;

      supportsDifferentiateWithoutColorAlone?: boolean;

      supportsLargerText?: boolean;

      supportsReducedMotion?: boolean;

      supportsSufficientContrast?: boolean;

      supportsVoiceControl?: boolean;

      supportsVoiceover?: boolean;
    }
  }
}

export declare namespace AccessibilityDeclarations {
  export {
    type AccessibilityDeclaration as AccessibilityDeclaration,
    type AccessibilityDeclarationResponse as AccessibilityDeclarationResponse,
    type DeviceFamily as DeviceFamily,
    type DocumentLinks as DocumentLinks,
    type ResourceLinks as ResourceLinks,
    type AccessibilityDeclarationCreateParams as AccessibilityDeclarationCreateParams,
    type AccessibilityDeclarationRetrieveParams as AccessibilityDeclarationRetrieveParams,
    type AccessibilityDeclarationUpdateParams as AccessibilityDeclarationUpdateParams,
  };
}
