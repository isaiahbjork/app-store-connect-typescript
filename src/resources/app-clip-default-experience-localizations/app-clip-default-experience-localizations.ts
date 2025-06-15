// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as AppClipHeaderImagesAPI from '../app-clip-header-images';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveHeaderImageResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AppClipDefaultExperiencesAPI from '../app-clip-default-experiences/app-clip-default-experiences';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppClipDefaultExperienceLocalizations extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: AppClipDefaultExperienceLocalizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppClipDefaultExperienceLocalizationResponse> {
    return this._client.post('/v1/appClipDefaultExperienceLocalizations', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppClipDefaultExperienceLocalizationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppClipDefaultExperienceLocalizationResponse> {
    return this._client.get(path`/v1/appClipDefaultExperienceLocalizations/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppClipDefaultExperienceLocalizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppClipDefaultExperienceLocalizationResponse> {
    return this._client.patch(path`/v1/appClipDefaultExperienceLocalizations/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/appClipDefaultExperienceLocalizations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveHeaderImage(
    id: string,
    query: AppClipDefaultExperienceLocalizationRetrieveHeaderImageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppClipHeaderImagesAPI.AppClipHeaderImageResponse> {
    return this._client.get(path`/v1/appClipDefaultExperienceLocalizations/${id}/appClipHeaderImage`, {
      query,
      ...options,
    });
  }
}

export interface AppClipDefaultExperienceLocalization {
  id: string;

  type: 'appClipDefaultExperienceLocalizations';

  attributes?: AppClipDefaultExperienceLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppClipDefaultExperienceLocalization.Relationships;
}

export namespace AppClipDefaultExperienceLocalization {
  export interface Attributes {
    locale?: string;

    subtitle?: string;
  }

  export interface Relationships {
    appClipDefaultExperience?: Relationships.AppClipDefaultExperience;

    appClipHeaderImage?: Relationships.AppClipHeaderImage;
  }

  export namespace Relationships {
    export interface AppClipDefaultExperience {
      data?: AppClipDefaultExperience.Data;
    }

    export namespace AppClipDefaultExperience {
      export interface Data {
        id: string;

        type: 'appClipDefaultExperiences';
      }
    }

    export interface AppClipHeaderImage {
      data?: AppClipHeaderImage.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AppClipHeaderImage {
      export interface Data {
        id: string;

        type: 'appClipHeaderImages';
      }
    }
  }
}

export interface AppClipDefaultExperienceLocalizationResponse {
  data: AppClipDefaultExperienceLocalization;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    AppClipDefaultExperiencesAPI.AppClipDefaultExperience | AppClipHeaderImagesAPI.AppClipHeaderImage
  >;
}

export interface AppClipDefaultExperienceLocalizationCreateParams {
  data: AppClipDefaultExperienceLocalizationCreateParams.Data;
}

export namespace AppClipDefaultExperienceLocalizationCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appClipDefaultExperienceLocalizations';
  }

  export namespace Data {
    export interface Attributes {
      locale: string;

      subtitle?: string;
    }

    export interface Relationships {
      appClipDefaultExperience: Relationships.AppClipDefaultExperience;
    }

    export namespace Relationships {
      export interface AppClipDefaultExperience {
        data: AppClipDefaultExperience.Data;
      }

      export namespace AppClipDefaultExperience {
        export interface Data {
          id: string;

          type: 'appClipDefaultExperiences';
        }
      }
    }
  }
}

export interface AppClipDefaultExperienceLocalizationRetrieveParams {
  /**
   * the fields to include for returned resources of type
   * appClipDefaultExperienceLocalizations
   */
  'fields[appClipDefaultExperienceLocalizations]'?: Array<
    'locale' | 'subtitle' | 'appClipDefaultExperience' | 'appClipHeaderImage'
  >;

  /**
   * the fields to include for returned resources of type appClipHeaderImages
   */
  'fields[appClipHeaderImages]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'imageAsset'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appClipDefaultExperienceLocalization'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appClipDefaultExperience' | 'appClipHeaderImage'>;
}

export interface AppClipDefaultExperienceLocalizationUpdateParams {
  data: AppClipDefaultExperienceLocalizationUpdateParams.Data;
}

export namespace AppClipDefaultExperienceLocalizationUpdateParams {
  export interface Data {
    id: string;

    type: 'appClipDefaultExperienceLocalizations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      subtitle?: string;
    }
  }
}

export interface AppClipDefaultExperienceLocalizationRetrieveHeaderImageParams {
  /**
   * the fields to include for returned resources of type
   * appClipDefaultExperienceLocalizations
   */
  'fields[appClipDefaultExperienceLocalizations]'?: Array<
    'locale' | 'subtitle' | 'appClipDefaultExperience' | 'appClipHeaderImage'
  >;

  /**
   * the fields to include for returned resources of type appClipHeaderImages
   */
  'fields[appClipHeaderImages]'?: Array<
    | 'fileSize'
    | 'fileName'
    | 'sourceFileChecksum'
    | 'imageAsset'
    | 'uploadOperations'
    | 'assetDeliveryState'
    | 'appClipDefaultExperienceLocalization'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appClipDefaultExperienceLocalization'>;
}

AppClipDefaultExperienceLocalizations.Relationships = RelationshipsAPIRelationships;

export declare namespace AppClipDefaultExperienceLocalizations {
  export {
    type AppClipDefaultExperienceLocalization as AppClipDefaultExperienceLocalization,
    type AppClipDefaultExperienceLocalizationResponse as AppClipDefaultExperienceLocalizationResponse,
    type AppClipDefaultExperienceLocalizationCreateParams as AppClipDefaultExperienceLocalizationCreateParams,
    type AppClipDefaultExperienceLocalizationRetrieveParams as AppClipDefaultExperienceLocalizationRetrieveParams,
    type AppClipDefaultExperienceLocalizationUpdateParams as AppClipDefaultExperienceLocalizationUpdateParams,
    type AppClipDefaultExperienceLocalizationRetrieveHeaderImageParams as AppClipDefaultExperienceLocalizationRetrieveHeaderImageParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveHeaderImageResponse as RelationshipRetrieveHeaderImageResponse,
  };
}
