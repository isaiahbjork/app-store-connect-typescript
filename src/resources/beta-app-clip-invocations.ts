// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as ActorsAPI from './actors';
import * as BetaAppClipInvocationLocalizationsAPI from './beta-app-clip-invocation-localizations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BetaAppClipInvocations extends APIResource {
  create(
    body: BetaAppClipInvocationCreateParams,
    options?: RequestOptions,
  ): APIPromise<BetaAppClipInvocationResponse> {
    return this._client.post('/v1/betaAppClipInvocations', { body, ...options });
  }

  retrieve(
    id: string,
    query: BetaAppClipInvocationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaAppClipInvocationResponse> {
    return this._client.get(path`/v1/betaAppClipInvocations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: BetaAppClipInvocationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BetaAppClipInvocationResponse> {
    return this._client.patch(path`/v1/betaAppClipInvocations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/betaAppClipInvocations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BetaAppClipInvocation {
  id: string;

  type: 'betaAppClipInvocations';

  attributes?: BetaAppClipInvocation.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: BetaAppClipInvocation.Relationships;
}

export namespace BetaAppClipInvocation {
  export interface Attributes {
    url?: string;
  }

  export interface Relationships {
    betaAppClipInvocationLocalizations?: Relationships.BetaAppClipInvocationLocalizations;
  }

  export namespace Relationships {
    export interface BetaAppClipInvocationLocalizations {
      data?: Array<BetaAppClipInvocationLocalizations.Data>;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace BetaAppClipInvocationLocalizations {
      export interface Data {
        id: string;

        type: 'betaAppClipInvocationLocalizations';
      }
    }
  }
}

export interface BetaAppClipInvocationResponse {
  data: BetaAppClipInvocation;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<BetaAppClipInvocationLocalizationsAPI.BetaAppClipInvocationLocalization>;
}

export interface BetaAppClipInvocationCreateParams {
  data: BetaAppClipInvocationCreateParams.Data;

  included?: Array<BetaAppClipInvocationCreateParams.Included>;
}

export namespace BetaAppClipInvocationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'betaAppClipInvocations';
  }

  export namespace Data {
    export interface Attributes {
      url: string;
    }

    export interface Relationships {
      betaAppClipInvocationLocalizations: Relationships.BetaAppClipInvocationLocalizations;

      buildBundle: Relationships.BuildBundle;
    }

    export namespace Relationships {
      export interface BetaAppClipInvocationLocalizations {
        data: Array<BetaAppClipInvocationLocalizations.Data>;
      }

      export namespace BetaAppClipInvocationLocalizations {
        export interface Data {
          id: string;

          type: 'betaAppClipInvocationLocalizations';
        }
      }

      export interface BuildBundle {
        data: BuildBundle.Data;
      }

      export namespace BuildBundle {
        export interface Data {
          id: string;

          type: 'buildBundles';
        }
      }
    }
  }

  export interface Included {
    attributes: Included.Attributes;

    type: 'betaAppClipInvocationLocalizations';

    id?: string;

    relationships?: Included.Relationships;
  }

  export namespace Included {
    export interface Attributes {
      locale: string;

      title: string;
    }

    export interface Relationships {
      betaAppClipInvocation?: Relationships.BetaAppClipInvocation;
    }

    export namespace Relationships {
      export interface BetaAppClipInvocation {
        data?: BetaAppClipInvocation.Data;
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

export interface BetaAppClipInvocationRetrieveParams {
  /**
   * the fields to include for returned resources of type betaAppClipInvocations
   */
  'fields[betaAppClipInvocations]'?: Array<'url' | 'betaAppClipInvocationLocalizations'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'betaAppClipInvocationLocalizations'>;

  /**
   * maximum number of related betaAppClipInvocationLocalizations returned (when they
   * are included)
   */
  'limit[betaAppClipInvocationLocalizations]'?: number;
}

export interface BetaAppClipInvocationUpdateParams {
  data: BetaAppClipInvocationUpdateParams.Data;
}

export namespace BetaAppClipInvocationUpdateParams {
  export interface Data {
    id: string;

    type: 'betaAppClipInvocations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      url?: string;
    }
  }
}

export declare namespace BetaAppClipInvocations {
  export {
    type BetaAppClipInvocation as BetaAppClipInvocation,
    type BetaAppClipInvocationResponse as BetaAppClipInvocationResponse,
    type BetaAppClipInvocationCreateParams as BetaAppClipInvocationCreateParams,
    type BetaAppClipInvocationRetrieveParams as BetaAppClipInvocationRetrieveParams,
    type BetaAppClipInvocationUpdateParams as BetaAppClipInvocationUpdateParams,
  };
}
