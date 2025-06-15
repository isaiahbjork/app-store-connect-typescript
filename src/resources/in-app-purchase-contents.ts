// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as InAppPurchasesAPI from './in-app-purchases/in-app-purchases';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class InAppPurchaseContents extends APIResource {
  retrieve(
    id: string,
    query: InAppPurchaseContentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InAppPurchaseContentResponse> {
    return this._client.get(path`/v1/inAppPurchaseContents/${id}`, { query, ...options });
  }
}

export interface InAppPurchaseContent {
  id: string;

  type: 'inAppPurchaseContents';

  attributes?: InAppPurchaseContent.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: InAppPurchaseContent.Relationships;
}

export namespace InAppPurchaseContent {
  export interface Attributes {
    fileName?: string;

    fileSize?: number;

    lastModifiedDate?: string;

    url?: string;
  }

  export interface Relationships {
    inAppPurchaseV2?: Relationships.InAppPurchaseV2;
  }

  export namespace Relationships {
    export interface InAppPurchaseV2 {
      data?: InAppPurchaseV2.Data;
    }

    export namespace InAppPurchaseV2 {
      export interface Data {
        id: string;

        type: 'inAppPurchases';
      }
    }
  }
}

export interface InAppPurchaseContentResponse {
  data: InAppPurchaseContent;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<InAppPurchasesAPI.InAppPurchaseV2>;
}

export interface InAppPurchaseContentRetrieveParams {
  /**
   * the fields to include for returned resources of type inAppPurchaseContents
   */
  'fields[inAppPurchaseContents]'?: Array<
    'fileName' | 'fileSize' | 'url' | 'lastModifiedDate' | 'inAppPurchaseV2'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'inAppPurchaseV2'>;
}

export declare namespace InAppPurchaseContents {
  export {
    type InAppPurchaseContent as InAppPurchaseContent,
    type InAppPurchaseContentResponse as InAppPurchaseContentResponse,
    type InAppPurchaseContentRetrieveParams as InAppPurchaseContentRetrieveParams,
  };
}
