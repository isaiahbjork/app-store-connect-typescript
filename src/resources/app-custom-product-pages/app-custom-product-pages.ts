// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppCustomProductPageLocalizationsAPI from '../app-custom-product-page-localizations/app-custom-product-page-localizations';
import * as AppCustomProductPageVersionsAPI from '../app-custom-product-page-versions/app-custom-product-page-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListVersionsParams,
  RelationshipListVersionsResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AppsAPI from '../apps/apps';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppCustomProductPages extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: AppCustomProductPageCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppCustomProductPageResponse> {
    return this._client.post('/v1/appCustomProductPages', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppCustomProductPageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCustomProductPageResponse> {
    return this._client.get(path`/v1/appCustomProductPages/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppCustomProductPageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppCustomProductPageResponse> {
    return this._client.patch(path`/v1/appCustomProductPages/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appCustomProductPages/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listVersions(
    id: string,
    query: AppCustomProductPageListVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCustomProductPageListVersionsResponse> {
    return this._client.get(path`/v1/appCustomProductPages/${id}/appCustomProductPageVersions`, {
      query,
      ...options,
    });
  }
}

export interface AppCustomProductPage {
  id: string;

  type: 'appCustomProductPages';

  attributes?: AppCustomProductPage.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppCustomProductPage.Relationships;
}

export namespace AppCustomProductPage {
  export interface Attributes {
    name?: string;

    url?: string;

    visible?: boolean;
  }

  export interface Relationships {
    app?: Relationships.App;

    appCustomProductPageVersions?: Relationships.AppCustomProductPageVersions;
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

    export interface AppCustomProductPageVersions {
      data?: Array<AppCustomProductPageVersions.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppCustomProductPageVersions {
      export interface Data {
        id: string;

        type: 'appCustomProductPageVersions';
      }
    }
  }
}

export interface AppCustomProductPageResponse {
  data: AppCustomProductPage;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppsAPI.App | AppCustomProductPageVersionsAPI.AppCustomProductPageVersion>;
}

export interface AppCustomProductPageListVersionsResponse {
  data: Array<AppCustomProductPageVersionsAPI.AppCustomProductPageVersion>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppCustomProductPage | AppCustomProductPageLocalizationsAPI.Localization>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppCustomProductPageCreateParams {
  data: AppCustomProductPageCreateParams.Data;

  included?: Array<
    | AppCustomProductPageCreateParams.AppCustomProductPageLocalizationInlineCreate
    | AppCustomProductPageCreateParams.AppCustomProductPageVersionInlineCreate
  >;
}

export namespace AppCustomProductPageCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appCustomProductPages';
  }

  export namespace Data {
    export interface Attributes {
      name: string;
    }

    export interface Relationships {
      app: Relationships.App;

      appCustomProductPageVersions?: Relationships.AppCustomProductPageVersions;

      appStoreVersionTemplate?: Relationships.AppStoreVersionTemplate;

      customProductPageTemplate?: Relationships.CustomProductPageTemplate;
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

      export interface AppCustomProductPageVersions {
        data?: Array<AppCustomProductPageVersions.Data>;
      }

      export namespace AppCustomProductPageVersions {
        export interface Data {
          id: string;

          type: 'appCustomProductPageVersions';
        }
      }

      export interface AppStoreVersionTemplate {
        data?: AppStoreVersionTemplate.Data;
      }

      export namespace AppStoreVersionTemplate {
        export interface Data {
          id: string;

          type: 'appStoreVersions';
        }
      }

      export interface CustomProductPageTemplate {
        data?: CustomProductPageTemplate.Data;
      }

      export namespace CustomProductPageTemplate {
        export interface Data {
          id: string;

          type: 'appCustomProductPages';
        }
      }
    }
  }

  export interface AppCustomProductPageLocalizationInlineCreate {
    attributes: AppCustomProductPageLocalizationInlineCreate.Attributes;

    type: 'appCustomProductPageLocalizations';

    id?: string;

    relationships?: AppCustomProductPageLocalizationInlineCreate.Relationships;
  }

  export namespace AppCustomProductPageLocalizationInlineCreate {
    export interface Attributes {
      locale: string;

      promotionalText?: string;
    }

    export interface Relationships {
      appCustomProductPageVersion?: Relationships.AppCustomProductPageVersion;
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
    }
  }

  export interface AppCustomProductPageVersionInlineCreate {
    type: 'appCustomProductPageVersions';

    id?: string;

    attributes?: AppCustomProductPageVersionInlineCreate.Attributes;

    relationships?: AppCustomProductPageVersionInlineCreate.Relationships;
  }

  export namespace AppCustomProductPageVersionInlineCreate {
    export interface Attributes {
      deepLink?: string;
    }

    export interface Relationships {
      appCustomProductPage?: Relationships.AppCustomProductPage;

      appCustomProductPageLocalizations?: Relationships.AppCustomProductPageLocalizations;
    }

    export namespace Relationships {
      export interface AppCustomProductPage {
        data?: AppCustomProductPage.Data;
      }

      export namespace AppCustomProductPage {
        export interface Data {
          id: string;

          type: 'appCustomProductPages';
        }
      }

      export interface AppCustomProductPageLocalizations {
        data?: Array<AppCustomProductPageLocalizations.Data>;
      }

      export namespace AppCustomProductPageLocalizations {
        export interface Data {
          id: string;

          type: 'appCustomProductPageLocalizations';
        }
      }
    }
  }
}

export interface AppCustomProductPageRetrieveParams {
  /**
   * the fields to include for returned resources of type appCustomProductPages
   */
  'fields[appCustomProductPages]'?: Array<
    'name' | 'url' | 'visible' | 'app' | 'appCustomProductPageVersions'
  >;

  /**
   * the fields to include for returned resources of type
   * appCustomProductPageVersions
   */
  'fields[appCustomProductPageVersions]'?: Array<
    'version' | 'state' | 'deepLink' | 'appCustomProductPage' | 'appCustomProductPageLocalizations'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'appCustomProductPageVersions'>;

  /**
   * maximum number of related appCustomProductPageVersions returned (when they are
   * included)
   */
  'limit[appCustomProductPageVersions]'?: number;
}

export interface AppCustomProductPageUpdateParams {
  data: AppCustomProductPageUpdateParams.Data;
}

export namespace AppCustomProductPageUpdateParams {
  export interface Data {
    id: string;

    type: 'appCustomProductPages';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      name?: string;

      visible?: boolean;
    }
  }
}

export interface AppCustomProductPageListVersionsParams {
  /**
   * the fields to include for returned resources of type
   * appCustomProductPageLocalizations
   */
  'fields[appCustomProductPageLocalizations]'?: Array<
    'locale' | 'promotionalText' | 'appCustomProductPageVersion' | 'appScreenshotSets' | 'appPreviewSets'
  >;

  /**
   * the fields to include for returned resources of type appCustomProductPages
   */
  'fields[appCustomProductPages]'?: Array<
    'name' | 'url' | 'visible' | 'app' | 'appCustomProductPageVersions'
  >;

  /**
   * the fields to include for returned resources of type
   * appCustomProductPageVersions
   */
  'fields[appCustomProductPageVersions]'?: Array<
    'version' | 'state' | 'deepLink' | 'appCustomProductPage' | 'appCustomProductPageLocalizations'
  >;

  /**
   * filter by attribute 'state'
   */
  'filter[state]'?: Array<
    | 'PREPARE_FOR_SUBMISSION'
    | 'READY_FOR_REVIEW'
    | 'WAITING_FOR_REVIEW'
    | 'IN_REVIEW'
    | 'ACCEPTED'
    | 'APPROVED'
    | 'REPLACED_WITH_NEW_VERSION'
    | 'REJECTED'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appCustomProductPage' | 'appCustomProductPageLocalizations'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related appCustomProductPageLocalizations returned (when they
   * are included)
   */
  'limit[appCustomProductPageLocalizations]'?: number;
}

AppCustomProductPages.Relationships = RelationshipsAPIRelationships;

export declare namespace AppCustomProductPages {
  export {
    type AppCustomProductPage as AppCustomProductPage,
    type AppCustomProductPageResponse as AppCustomProductPageResponse,
    type AppCustomProductPageListVersionsResponse as AppCustomProductPageListVersionsResponse,
    type AppCustomProductPageCreateParams as AppCustomProductPageCreateParams,
    type AppCustomProductPageRetrieveParams as AppCustomProductPageRetrieveParams,
    type AppCustomProductPageUpdateParams as AppCustomProductPageUpdateParams,
    type AppCustomProductPageListVersionsParams as AppCustomProductPageListVersionsParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListVersionsResponse as RelationshipListVersionsResponse,
    type RelationshipListVersionsParams as RelationshipListVersionsParams,
  };
}
