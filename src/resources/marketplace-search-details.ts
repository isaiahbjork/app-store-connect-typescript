// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MarketplaceSearchDetails extends APIResource {
  create(
    body: MarketplaceSearchDetailCreateParams,
    options?: RequestOptions,
  ): APIPromise<MarketplaceSearchDetail> {
    return this._client.post('/v1/marketplaceSearchDetails', { body, ...options });
  }

  update(
    id: string,
    body: MarketplaceSearchDetailUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MarketplaceSearchDetail> {
    return this._client.patch(path`/v1/marketplaceSearchDetails/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/marketplaceSearchDetails/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MarketplaceSearchDetail {
  data: MarketplaceSearchDetail.Data;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export namespace MarketplaceSearchDetail {
  export interface Data {
    id: string;

    type: 'marketplaceSearchDetails';

    attributes?: Data.Attributes;

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }

  export namespace Data {
    export interface Attributes {
      catalogUrl?: string;
    }
  }
}

export interface MarketplaceSearchDetailCreateParams {
  data: MarketplaceSearchDetailCreateParams.Data;
}

export namespace MarketplaceSearchDetailCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'marketplaceSearchDetails';
  }

  export namespace Data {
    export interface Attributes {
      catalogUrl: string;
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

export interface MarketplaceSearchDetailUpdateParams {
  data: MarketplaceSearchDetailUpdateParams.Data;
}

export namespace MarketplaceSearchDetailUpdateParams {
  export interface Data {
    id: string;

    type: 'marketplaceSearchDetails';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      catalogUrl?: string;
    }
  }
}

export declare namespace MarketplaceSearchDetails {
  export {
    type MarketplaceSearchDetail as MarketplaceSearchDetail,
    type MarketplaceSearchDetailCreateParams as MarketplaceSearchDetailCreateParams,
    type MarketplaceSearchDetailUpdateParams as MarketplaceSearchDetailUpdateParams,
  };
}
