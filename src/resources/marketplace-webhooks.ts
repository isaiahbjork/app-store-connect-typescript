// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as ActorsAPI from './actors';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MarketplaceWebhooks extends APIResource {
  create(
    body: MarketplaceWebhookCreateParams,
    options?: RequestOptions,
  ): APIPromise<MarketplaceWebhookResponse> {
    return this._client.post('/v1/marketplaceWebhooks', { body, ...options });
  }

  update(
    id: string,
    body: MarketplaceWebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MarketplaceWebhookResponse> {
    return this._client.patch(path`/v1/marketplaceWebhooks/${id}`, { body, ...options });
  }

  list(
    query: MarketplaceWebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketplaceWebhookListResponse> {
    return this._client.get('/v1/marketplaceWebhooks', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/marketplaceWebhooks/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MarketplaceWebhook {
  id: string;

  type: 'marketplaceWebhooks';

  attributes?: MarketplaceWebhook.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace MarketplaceWebhook {
  export interface Attributes {
    endpointUrl?: string;
  }
}

export interface MarketplaceWebhookResponse {
  data: MarketplaceWebhook;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface MarketplaceWebhookListResponse {
  data: Array<MarketplaceWebhook>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface MarketplaceWebhookCreateParams {
  data: MarketplaceWebhookCreateParams.Data;
}

export namespace MarketplaceWebhookCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'marketplaceWebhooks';
  }

  export namespace Data {
    export interface Attributes {
      endpointUrl: string;

      secret: string;
    }
  }
}

export interface MarketplaceWebhookUpdateParams {
  data: MarketplaceWebhookUpdateParams.Data;
}

export namespace MarketplaceWebhookUpdateParams {
  export interface Data {
    id: string;

    type: 'marketplaceWebhooks';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      endpointUrl?: string;

      secret?: string;
    }
  }
}

export interface MarketplaceWebhookListParams {
  /**
   * the fields to include for returned resources of type marketplaceWebhooks
   */
  'fields[marketplaceWebhooks]'?: Array<'endpointUrl'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace MarketplaceWebhooks {
  export {
    type MarketplaceWebhook as MarketplaceWebhook,
    type MarketplaceWebhookResponse as MarketplaceWebhookResponse,
    type MarketplaceWebhookListResponse as MarketplaceWebhookListResponse,
    type MarketplaceWebhookCreateParams as MarketplaceWebhookCreateParams,
    type MarketplaceWebhookUpdateParams as MarketplaceWebhookUpdateParams,
    type MarketplaceWebhookListParams as MarketplaceWebhookListParams,
  };
}
