// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppInfosAPI from './app-infos';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AgeRatingDeclarationsAPI from '../age-rating-declarations';
import * as AppInfoLocalizationsAPI from '../app-info-localizations';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppCategoriesAPI from '../app-categories/app-categories';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListAppInfoLocalizationsParams,
  RelationshipListAppInfoLocalizationsResponse,
  RelationshipRetrieveAgeRatingDeclarationResponse,
  RelationshipRetrievePrimaryCategoryResponse,
  RelationshipRetrievePrimarySubcategoryOneResponse,
  RelationshipRetrievePrimarySubcategoryTwoResponse,
  RelationshipRetrieveSecondaryCategoryResponse,
  RelationshipRetrieveSecondarySubcategoryOneResponse,
  RelationshipRetrieveSecondarySubcategoryTwoResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as AppsAPI from '../apps/apps';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppInfos extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  retrieve(
    id: string,
    query: AppInfoRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppInfoResponse> {
    return this._client.get(path`/v1/appInfos/${id}`, { query, ...options });
  }

  update(id: string, body: AppInfoUpdateParams, options?: RequestOptions): APIPromise<AppInfoResponse> {
    return this._client.patch(path`/v1/appInfos/${id}`, { body, ...options });
  }

  listAppInfoLocalizations(
    id: string,
    query: AppInfoListAppInfoLocalizationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppInfoListAppInfoLocalizationsResponse> {
    return this._client.get(path`/v1/appInfos/${id}/appInfoLocalizations`, { query, ...options });
  }

  retrieveAgeRatingDeclaration(
    id: string,
    query: AppInfoRetrieveAgeRatingDeclarationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgeRatingDeclarationsAPI.AgeRatingDeclarationResponse> {
    return this._client.get(path`/v1/appInfos/${id}/ageRatingDeclaration`, { query, ...options });
  }

  retrievePrimaryCategory(
    id: string,
    query: AppInfoRetrievePrimaryCategoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCategoriesAPI.AppCategoryResponse> {
    return this._client.get(path`/v1/appInfos/${id}/primaryCategory`, { query, ...options });
  }

  retrievePrimarySubcategoryOne(
    id: string,
    query: AppInfoRetrievePrimarySubcategoryOneParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCategoriesAPI.AppCategoryResponse> {
    return this._client.get(path`/v1/appInfos/${id}/primarySubcategoryOne`, { query, ...options });
  }

  retrievePrimarySubcategoryTwo(
    id: string,
    query: AppInfoRetrievePrimarySubcategoryTwoParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCategoriesAPI.AppCategoryResponse> {
    return this._client.get(path`/v1/appInfos/${id}/primarySubcategoryTwo`, { query, ...options });
  }

  retrieveSecondaryCategory(
    id: string,
    query: AppInfoRetrieveSecondaryCategoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCategoriesAPI.AppCategoryResponse> {
    return this._client.get(path`/v1/appInfos/${id}/secondaryCategory`, { query, ...options });
  }

  retrieveSecondarySubcategoryOne(
    id: string,
    query: AppInfoRetrieveSecondarySubcategoryOneParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCategoriesAPI.AppCategoryResponse> {
    return this._client.get(path`/v1/appInfos/${id}/secondarySubcategoryOne`, { query, ...options });
  }

  retrieveSecondarySubcategoryTwo(
    id: string,
    query: AppInfoRetrieveSecondarySubcategoryTwoParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppCategoriesAPI.AppCategoryResponse> {
    return this._client.get(path`/v1/appInfos/${id}/secondarySubcategoryTwo`, { query, ...options });
  }
}

export interface AppInfo {
  id: string;

  type: 'appInfos';

  attributes?: AppInfo.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppInfo.Relationships;
}

export namespace AppInfo {
  export interface Attributes {
    /**
     * @deprecated
     */
    appStoreAgeRating?: 'FOUR_PLUS' | 'NINE_PLUS' | 'TWELVE_PLUS' | 'SEVENTEEN_PLUS' | 'UNRATED';

    /**
     * @deprecated
     */
    appStoreState?: AppInfosAPI.AppStoreVersionState;

    /**
     * @deprecated
     */
    australiaAgeRating?: 'FIFTEEN' | 'EIGHTEEN';

    /**
     * @deprecated
     */
    brazilAgeRating?: 'L' | 'TEN' | 'TWELVE' | 'FOURTEEN' | 'SIXTEEN' | 'EIGHTEEN';

    /**
     * @deprecated
     */
    brazilAgeRatingV2?:
      | 'SELF_RATED_L'
      | 'SELF_RATED_TEN'
      | 'SELF_RATED_TWELVE'
      | 'SELF_RATED_FOURTEEN'
      | 'SELF_RATED_SIXTEEN'
      | 'SELF_RATED_EIGHTEEN'
      | 'OFFICIAL_L'
      | 'OFFICIAL_TEN'
      | 'OFFICIAL_TWELVE'
      | 'OFFICIAL_FOURTEEN'
      | 'OFFICIAL_SIXTEEN'
      | 'OFFICIAL_EIGHTEEN';

    /**
     * @deprecated
     */
    franceAgeRating?: 'EIGHTEEN';

    kidsAgeBand?: AgeRatingDeclarationsAPI.KidsAgeBand;

    /**
     * @deprecated
     */
    koreaAgeRating?: 'ALL' | 'TWELVE' | 'FIFTEEN' | 'NINETEEN' | 'NOT_APPLICABLE';

    state?:
      | 'ACCEPTED'
      | 'DEVELOPER_REJECTED'
      | 'IN_REVIEW'
      | 'PENDING_RELEASE'
      | 'PREPARE_FOR_SUBMISSION'
      | 'READY_FOR_DISTRIBUTION'
      | 'READY_FOR_REVIEW'
      | 'REJECTED'
      | 'REPLACED_WITH_NEW_INFO'
      | 'WAITING_FOR_REVIEW';
  }

  export interface Relationships {
    ageRatingDeclaration?: Relationships.AgeRatingDeclaration;

    app?: Relationships.App;

    appInfoLocalizations?: Relationships.AppInfoLocalizations;

    primaryCategory?: Relationships.PrimaryCategory;

    primarySubcategoryOne?: Relationships.PrimarySubcategoryOne;

    primarySubcategoryTwo?: Relationships.PrimarySubcategoryTwo;

    secondaryCategory?: Relationships.SecondaryCategory;

    secondarySubcategoryOne?: Relationships.SecondarySubcategoryOne;

    secondarySubcategoryTwo?: Relationships.SecondarySubcategoryTwo;
  }

  export namespace Relationships {
    export interface AgeRatingDeclaration {
      data?: AgeRatingDeclaration.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace AgeRatingDeclaration {
      export interface Data {
        id: string;

        type: 'ageRatingDeclarations';
      }
    }

    export interface App {
      data?: App.Data;
    }

    export namespace App {
      export interface Data {
        id: string;

        type: 'apps';
      }
    }

    export interface AppInfoLocalizations {
      data?: Array<AppInfoLocalizations.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace AppInfoLocalizations {
      export interface Data {
        id: string;

        type: 'appInfoLocalizations';
      }
    }

    export interface PrimaryCategory {
      data?: PrimaryCategory.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace PrimaryCategory {
      export interface Data {
        id: string;

        type: 'appCategories';
      }
    }

    export interface PrimarySubcategoryOne {
      data?: PrimarySubcategoryOne.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace PrimarySubcategoryOne {
      export interface Data {
        id: string;

        type: 'appCategories';
      }
    }

    export interface PrimarySubcategoryTwo {
      data?: PrimarySubcategoryTwo.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace PrimarySubcategoryTwo {
      export interface Data {
        id: string;

        type: 'appCategories';
      }
    }

    export interface SecondaryCategory {
      data?: SecondaryCategory.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace SecondaryCategory {
      export interface Data {
        id: string;

        type: 'appCategories';
      }
    }

    export interface SecondarySubcategoryOne {
      data?: SecondarySubcategoryOne.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace SecondarySubcategoryOne {
      export interface Data {
        id: string;

        type: 'appCategories';
      }
    }

    export interface SecondarySubcategoryTwo {
      data?: SecondarySubcategoryTwo.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace SecondarySubcategoryTwo {
      export interface Data {
        id: string;

        type: 'appCategories';
      }
    }
  }
}

export interface AppInfoResponse {
  data: AppInfo;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppsAPI.App
    | AgeRatingDeclarationsAPI.AgeRatingDeclaration
    | AppInfoLocalizationsAPI.AppInfoLocalization
    | AppCategoriesAPI.AppCategory
  >;
}

export type AppStoreVersionState =
  | 'ACCEPTED'
  | 'DEVELOPER_REMOVED_FROM_SALE'
  | 'DEVELOPER_REJECTED'
  | 'IN_REVIEW'
  | 'INVALID_BINARY'
  | 'METADATA_REJECTED'
  | 'PENDING_APPLE_RELEASE'
  | 'PENDING_CONTRACT'
  | 'PENDING_DEVELOPER_RELEASE'
  | 'PREPARE_FOR_SUBMISSION'
  | 'PREORDER_READY_FOR_SALE'
  | 'PROCESSING_FOR_APP_STORE'
  | 'READY_FOR_REVIEW'
  | 'READY_FOR_SALE'
  | 'REJECTED'
  | 'REMOVED_FROM_SALE'
  | 'WAITING_FOR_EXPORT_COMPLIANCE'
  | 'WAITING_FOR_REVIEW'
  | 'REPLACED_WITH_NEW_VERSION'
  | 'NOT_APPLICABLE';

export interface AppInfoListAppInfoLocalizationsResponse {
  data: Array<AppInfoLocalizationsAPI.AppInfoLocalization>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<AppInfo>;

  meta?: ActorsAPI.PagingInformation;
}

export interface AppInfoRetrieveParams {
  /**
   * the fields to include for returned resources of type ageRatingDeclarations
   */
  'fields[ageRatingDeclarations]'?: Array<
    | 'alcoholTobaccoOrDrugUseOrReferences'
    | 'contests'
    | 'gambling'
    | 'gamblingSimulated'
    | 'kidsAgeBand'
    | 'lootBox'
    | 'medicalOrTreatmentInformation'
    | 'profanityOrCrudeHumor'
    | 'sexualContentGraphicAndNudity'
    | 'sexualContentOrNudity'
    | 'horrorOrFearThemes'
    | 'matureOrSuggestiveThemes'
    | 'unrestrictedWebAccess'
    | 'violenceCartoonOrFantasy'
    | 'violenceRealisticProlongedGraphicOrSadistic'
    | 'violenceRealistic'
    | 'koreaAgeRatingOverride'
  >;

  /**
   * the fields to include for returned resources of type appCategories
   */
  'fields[appCategories]'?: Array<'platforms' | 'subcategories' | 'parent'>;

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
   * the fields to include for returned resources of type appInfos
   */
  'fields[appInfos]'?: Array<
    | 'appStoreState'
    | 'state'
    | 'appStoreAgeRating'
    | 'australiaAgeRating'
    | 'brazilAgeRating'
    | 'brazilAgeRatingV2'
    | 'franceAgeRating'
    | 'koreaAgeRating'
    | 'kidsAgeBand'
    | 'app'
    | 'ageRatingDeclaration'
    | 'appInfoLocalizations'
    | 'primaryCategory'
    | 'primarySubcategoryOne'
    | 'primarySubcategoryTwo'
    | 'secondaryCategory'
    | 'secondarySubcategoryOne'
    | 'secondarySubcategoryTwo'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<
    | 'app'
    | 'ageRatingDeclaration'
    | 'appInfoLocalizations'
    | 'primaryCategory'
    | 'primarySubcategoryOne'
    | 'primarySubcategoryTwo'
    | 'secondaryCategory'
    | 'secondarySubcategoryOne'
    | 'secondarySubcategoryTwo'
  >;

  /**
   * maximum number of related appInfoLocalizations returned (when they are included)
   */
  'limit[appInfoLocalizations]'?: number;
}

export interface AppInfoUpdateParams {
  data: AppInfoUpdateParams.Data;
}

export namespace AppInfoUpdateParams {
  export interface Data {
    id: string;

    type: 'appInfos';

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Relationships {
      primaryCategory?: Relationships.PrimaryCategory;

      primarySubcategoryOne?: Relationships.PrimarySubcategoryOne;

      primarySubcategoryTwo?: Relationships.PrimarySubcategoryTwo;

      secondaryCategory?: Relationships.SecondaryCategory;

      secondarySubcategoryOne?: Relationships.SecondarySubcategoryOne;

      secondarySubcategoryTwo?: Relationships.SecondarySubcategoryTwo;
    }

    export namespace Relationships {
      export interface PrimaryCategory {
        data?: PrimaryCategory.Data;
      }

      export namespace PrimaryCategory {
        export interface Data {
          id: string;

          type: 'appCategories';
        }
      }

      export interface PrimarySubcategoryOne {
        data?: PrimarySubcategoryOne.Data;
      }

      export namespace PrimarySubcategoryOne {
        export interface Data {
          id: string;

          type: 'appCategories';
        }
      }

      export interface PrimarySubcategoryTwo {
        data?: PrimarySubcategoryTwo.Data;
      }

      export namespace PrimarySubcategoryTwo {
        export interface Data {
          id: string;

          type: 'appCategories';
        }
      }

      export interface SecondaryCategory {
        data?: SecondaryCategory.Data;
      }

      export namespace SecondaryCategory {
        export interface Data {
          id: string;

          type: 'appCategories';
        }
      }

      export interface SecondarySubcategoryOne {
        data?: SecondarySubcategoryOne.Data;
      }

      export namespace SecondarySubcategoryOne {
        export interface Data {
          id: string;

          type: 'appCategories';
        }
      }

      export interface SecondarySubcategoryTwo {
        data?: SecondarySubcategoryTwo.Data;
      }

      export namespace SecondarySubcategoryTwo {
        export interface Data {
          id: string;

          type: 'appCategories';
        }
      }
    }
  }
}

export interface AppInfoListAppInfoLocalizationsParams {
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
   * the fields to include for returned resources of type appInfos
   */
  'fields[appInfos]'?: Array<
    | 'appStoreState'
    | 'state'
    | 'appStoreAgeRating'
    | 'australiaAgeRating'
    | 'brazilAgeRating'
    | 'brazilAgeRatingV2'
    | 'franceAgeRating'
    | 'koreaAgeRating'
    | 'kidsAgeBand'
    | 'app'
    | 'ageRatingDeclaration'
    | 'appInfoLocalizations'
    | 'primaryCategory'
    | 'primarySubcategoryOne'
    | 'primarySubcategoryTwo'
    | 'secondaryCategory'
    | 'secondarySubcategoryOne'
    | 'secondarySubcategoryTwo'
  >;

  /**
   * filter by attribute 'locale'
   */
  'filter[locale]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appInfo'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface AppInfoRetrieveAgeRatingDeclarationParams {
  /**
   * the fields to include for returned resources of type ageRatingDeclarations
   */
  'fields[ageRatingDeclarations]'?: Array<
    | 'alcoholTobaccoOrDrugUseOrReferences'
    | 'contests'
    | 'gambling'
    | 'gamblingSimulated'
    | 'kidsAgeBand'
    | 'lootBox'
    | 'medicalOrTreatmentInformation'
    | 'profanityOrCrudeHumor'
    | 'sexualContentGraphicAndNudity'
    | 'sexualContentOrNudity'
    | 'horrorOrFearThemes'
    | 'matureOrSuggestiveThemes'
    | 'unrestrictedWebAccess'
    | 'violenceCartoonOrFantasy'
    | 'violenceRealisticProlongedGraphicOrSadistic'
    | 'violenceRealistic'
    | 'koreaAgeRatingOverride'
  >;
}

export interface AppInfoRetrievePrimaryCategoryParams {
  /**
   * the fields to include for returned resources of type appCategories
   */
  'fields[appCategories]'?: Array<'platforms' | 'subcategories' | 'parent'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subcategories' | 'parent'>;

  /**
   * maximum number of related subcategories returned (when they are included)
   */
  'limit[subcategories]'?: number;
}

export interface AppInfoRetrievePrimarySubcategoryOneParams {
  /**
   * the fields to include for returned resources of type appCategories
   */
  'fields[appCategories]'?: Array<'platforms' | 'subcategories' | 'parent'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subcategories' | 'parent'>;

  /**
   * maximum number of related subcategories returned (when they are included)
   */
  'limit[subcategories]'?: number;
}

export interface AppInfoRetrievePrimarySubcategoryTwoParams {
  /**
   * the fields to include for returned resources of type appCategories
   */
  'fields[appCategories]'?: Array<'platforms' | 'subcategories' | 'parent'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subcategories' | 'parent'>;

  /**
   * maximum number of related subcategories returned (when they are included)
   */
  'limit[subcategories]'?: number;
}

export interface AppInfoRetrieveSecondaryCategoryParams {
  /**
   * the fields to include for returned resources of type appCategories
   */
  'fields[appCategories]'?: Array<'platforms' | 'subcategories' | 'parent'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subcategories' | 'parent'>;

  /**
   * maximum number of related subcategories returned (when they are included)
   */
  'limit[subcategories]'?: number;
}

export interface AppInfoRetrieveSecondarySubcategoryOneParams {
  /**
   * the fields to include for returned resources of type appCategories
   */
  'fields[appCategories]'?: Array<'platforms' | 'subcategories' | 'parent'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subcategories' | 'parent'>;

  /**
   * maximum number of related subcategories returned (when they are included)
   */
  'limit[subcategories]'?: number;
}

export interface AppInfoRetrieveSecondarySubcategoryTwoParams {
  /**
   * the fields to include for returned resources of type appCategories
   */
  'fields[appCategories]'?: Array<'platforms' | 'subcategories' | 'parent'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'subcategories' | 'parent'>;

  /**
   * maximum number of related subcategories returned (when they are included)
   */
  'limit[subcategories]'?: number;
}

AppInfos.Relationships = RelationshipsAPIRelationships;

export declare namespace AppInfos {
  export {
    type AppInfo as AppInfo,
    type AppInfoResponse as AppInfoResponse,
    type AppStoreVersionState as AppStoreVersionState,
    type AppInfoListAppInfoLocalizationsResponse as AppInfoListAppInfoLocalizationsResponse,
    type AppInfoRetrieveParams as AppInfoRetrieveParams,
    type AppInfoUpdateParams as AppInfoUpdateParams,
    type AppInfoListAppInfoLocalizationsParams as AppInfoListAppInfoLocalizationsParams,
    type AppInfoRetrieveAgeRatingDeclarationParams as AppInfoRetrieveAgeRatingDeclarationParams,
    type AppInfoRetrievePrimaryCategoryParams as AppInfoRetrievePrimaryCategoryParams,
    type AppInfoRetrievePrimarySubcategoryOneParams as AppInfoRetrievePrimarySubcategoryOneParams,
    type AppInfoRetrievePrimarySubcategoryTwoParams as AppInfoRetrievePrimarySubcategoryTwoParams,
    type AppInfoRetrieveSecondaryCategoryParams as AppInfoRetrieveSecondaryCategoryParams,
    type AppInfoRetrieveSecondarySubcategoryOneParams as AppInfoRetrieveSecondarySubcategoryOneParams,
    type AppInfoRetrieveSecondarySubcategoryTwoParams as AppInfoRetrieveSecondarySubcategoryTwoParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListAppInfoLocalizationsResponse as RelationshipListAppInfoLocalizationsResponse,
    type RelationshipRetrieveAgeRatingDeclarationResponse as RelationshipRetrieveAgeRatingDeclarationResponse,
    type RelationshipRetrievePrimaryCategoryResponse as RelationshipRetrievePrimaryCategoryResponse,
    type RelationshipRetrievePrimarySubcategoryOneResponse as RelationshipRetrievePrimarySubcategoryOneResponse,
    type RelationshipRetrievePrimarySubcategoryTwoResponse as RelationshipRetrievePrimarySubcategoryTwoResponse,
    type RelationshipRetrieveSecondaryCategoryResponse as RelationshipRetrieveSecondaryCategoryResponse,
    type RelationshipRetrieveSecondarySubcategoryOneResponse as RelationshipRetrieveSecondarySubcategoryOneResponse,
    type RelationshipRetrieveSecondarySubcategoryTwoResponse as RelationshipRetrieveSecondarySubcategoryTwoResponse,
    type RelationshipListAppInfoLocalizationsParams as RelationshipListAppInfoLocalizationsParams,
  };
}
