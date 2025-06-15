// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AppClipAdvancedExperiencesAPI from './app-clip-advanced-experiences';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as ActorsAPI from './actors';
import * as AppClipAdvancedExperienceImagesAPI from './app-clip-advanced-experience-images';
import * as AppClipsAPI from './app-clips/app-clips';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AppClipAdvancedExperiences extends APIResource {
  create(
    body: AppClipAdvancedExperienceCreateParams,
    options?: RequestOptions,
  ): APIPromise<AppClipAdvancedExperienceResponse> {
    return this._client.post('/v1/appClipAdvancedExperiences', { body, ...options });
  }

  retrieve(
    id: string,
    query: AppClipAdvancedExperienceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppClipAdvancedExperienceResponse> {
    return this._client.get(path`/v1/appClipAdvancedExperiences/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: AppClipAdvancedExperienceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AppClipAdvancedExperienceResponse> {
    return this._client.patch(path`/v1/appClipAdvancedExperiences/${id}`, { body, ...options });
  }
}

export type AppClipAction = 'OPEN' | 'VIEW' | 'PLAY';

export interface AppClipAdvancedExperience {
  id: string;

  type: 'appClipAdvancedExperiences';

  attributes?: AppClipAdvancedExperience.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: AppClipAdvancedExperience.Relationships;
}

export namespace AppClipAdvancedExperience {
  export interface Attributes {
    action?: AppClipAdvancedExperiencesAPI.AppClipAction;

    businessCategory?:
      | 'AUTOMOTIVE'
      | 'BEAUTY'
      | 'BIKES'
      | 'BOOKS'
      | 'CASINO'
      | 'EDUCATION'
      | 'EDUCATION_JAPAN'
      | 'ENTERTAINMENT'
      | 'EV_CHARGER'
      | 'FINANCIAL_USD'
      | 'FINANCIAL_CNY'
      | 'FINANCIAL_GBP'
      | 'FINANCIAL_JPY'
      | 'FINANCIAL_EUR'
      | 'FITNESS'
      | 'FOOD_AND_DRINK'
      | 'GAS'
      | 'GROCERY'
      | 'HEALTH_AND_MEDICAL'
      | 'HOTEL_AND_TRAVEL'
      | 'MUSIC'
      | 'PARKING'
      | 'PET_SERVICES'
      | 'PROFESSIONAL_SERVICES'
      | 'SHOPPING'
      | 'TICKETING'
      | 'TRANSIT';

    defaultLanguage?: AppClipAdvancedExperiencesAPI.AppClipAdvancedExperienceLanguage;

    isPoweredBy?: boolean;

    link?: string;

    place?: Attributes.Place;

    placeStatus?: 'PENDING' | 'MATCHED' | 'NO_MATCH';

    status?: 'RECEIVED' | 'DEACTIVATED' | 'APP_TRANSFER_IN_PROGRESS';

    version?: number;
  }

  export namespace Attributes {
    export interface Place {
      categories?: Array<string>;

      displayPoint?: Place.DisplayPoint;

      homePage?: string;

      mainAddress?: Place.MainAddress;

      mapAction?:
        | 'BUY_TICKETS'
        | 'VIEW_AVAILABILITY'
        | 'VIEW_PRICING'
        | 'HOTEL_BOOK_ROOM'
        | 'PARKING_RESERVE_PARKING'
        | 'RESTAURANT_JOIN_WAITLIST'
        | 'RESTAURANT_ORDER_DELIVERY'
        | 'RESTAURANT_ORDER_FOOD'
        | 'RESTAURANT_ORDER_TAKEOUT'
        | 'RESTAURANT_RESERVATION'
        | 'SCHEDULE_APPOINTMENT'
        | 'RESTAURANT_VIEW_MENU'
        | 'THEATER_NOW_PLAYING'
        | 'AIRLINE_BOOK_TRAVEL'
        | 'AIRLINE_CHECK_IN'
        | 'AIRLINE_FLIGHT_STATUS'
        | 'APPLY'
        | 'BOOK'
        | 'BOOK_ACTIVITIES'
        | 'BOOK_RIDES'
        | 'BOOK_TEETIMES'
        | 'BOOK_TOURS'
        | 'CAREERS'
        | 'CHARGE_EV'
        | 'COUPONS'
        | 'DONATE'
        | 'EVENTS'
        | 'EVENTS_SHOWS'
        | 'EVENTS_SPORTS'
        | 'GIFT_CARD'
        | 'HOTEL_AMENITIES'
        | 'JOIN'
        | 'PARKING_AVAILABLE'
        | 'RESTAURANT_PICKUP'
        | 'RETAIL_SERVICE_QUOTE'
        | 'RETAIL_STORE_DELIVERY'
        | 'RETAIL_STORE_PICKUP'
        | 'RETAIL_STORE_SHOP'
        | 'SERVICES'
        | 'SUPPORT';

      names?: Array<string>;

      phoneNumber?: Place.PhoneNumber;

      placeId?: string;

      relationship?: 'OWNER' | 'AUTHORIZED' | 'OTHER';
    }

    export namespace Place {
      export interface DisplayPoint {
        coordinates?: DisplayPoint.Coordinates;

        source?: 'CALCULATED' | 'MANUALLY_PLACED';
      }

      export namespace DisplayPoint {
        export interface Coordinates {
          latitude?: number;

          longitude?: number;
        }
      }

      export interface MainAddress {
        fullAddress?: string;

        structuredAddress?: MainAddress.StructuredAddress;
      }

      export namespace MainAddress {
        export interface StructuredAddress {
          countryCode?: string;

          floor?: string;

          locality?: string;

          neighborhood?: string;

          postalCode?: string;

          stateProvince?: string;

          streetAddress?: Array<string>;
        }
      }

      export interface PhoneNumber {
        intent?: string;

        number?: string;

        type?: 'FAX' | 'LANDLINE' | 'MOBILE' | 'TOLLFREE';
      }
    }
  }

  export interface Relationships {
    appClip?: Relationships.AppClip;

    headerImage?: Relationships.HeaderImage;

    localizations?: Relationships.Localizations;
  }

  export namespace Relationships {
    export interface AppClip {
      data?: AppClip.Data;
    }

    export namespace AppClip {
      export interface Data {
        id: string;

        type: 'appClips';
      }
    }

    export interface HeaderImage {
      data?: HeaderImage.Data;
    }

    export namespace HeaderImage {
      export interface Data {
        id: string;

        type: 'appClipAdvancedExperienceImages';
      }
    }

    export interface Localizations {
      data?: Array<Localizations.Data>;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Localizations {
      export interface Data {
        id: string;

        type: 'appClipAdvancedExperienceLocalizations';
      }
    }
  }
}

export type AppClipAdvancedExperienceLanguage =
  | 'AR'
  | 'CA'
  | 'CS'
  | 'DA'
  | 'DE'
  | 'EL'
  | 'EN'
  | 'ES'
  | 'FI'
  | 'FR'
  | 'HE'
  | 'HI'
  | 'HR'
  | 'HU'
  | 'ID'
  | 'IT'
  | 'JA'
  | 'KO'
  | 'MS'
  | 'NL'
  | 'NO'
  | 'PL'
  | 'PT'
  | 'RO'
  | 'RU'
  | 'SK'
  | 'SV'
  | 'TH'
  | 'TR'
  | 'UK'
  | 'VI'
  | 'ZH';

export interface AppClipAdvancedExperienceLocalization {
  id: string;

  type: 'appClipAdvancedExperienceLocalizations';

  attributes?: AppClipAdvancedExperienceLocalization.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace AppClipAdvancedExperienceLocalization {
  export interface Attributes {
    language?: AppClipAdvancedExperiencesAPI.AppClipAdvancedExperienceLanguage;

    subtitle?: string;

    title?: string;
  }
}

export interface AppClipAdvancedExperienceLocalizationInlineCreate {
  type: 'appClipAdvancedExperienceLocalizations';

  id?: string;

  attributes?: AppClipAdvancedExperienceLocalizationInlineCreate.Attributes;
}

export namespace AppClipAdvancedExperienceLocalizationInlineCreate {
  export interface Attributes {
    language?: AppClipAdvancedExperiencesAPI.AppClipAdvancedExperienceLanguage;

    subtitle?: string;

    title?: string;
  }
}

export interface AppClipAdvancedExperienceResponse {
  data: AppClipAdvancedExperience;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<
    | AppClipsAPI.AppClip
    | AppClipAdvancedExperienceImagesAPI.AppClipAdvancedExperienceImage
    | AppClipAdvancedExperienceLocalization
  >;
}

export interface AppClipAdvancedExperienceCreateParams {
  data: AppClipAdvancedExperienceCreateParams.Data;

  included?: Array<AppClipAdvancedExperienceLocalizationInlineCreate>;
}

export namespace AppClipAdvancedExperienceCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'appClipAdvancedExperiences';
  }

  export namespace Data {
    export interface Attributes {
      defaultLanguage: AppClipAdvancedExperiencesAPI.AppClipAdvancedExperienceLanguage;

      isPoweredBy: boolean;

      link: string;

      action?: AppClipAdvancedExperiencesAPI.AppClipAction;

      businessCategory?:
        | 'AUTOMOTIVE'
        | 'BEAUTY'
        | 'BIKES'
        | 'BOOKS'
        | 'CASINO'
        | 'EDUCATION'
        | 'EDUCATION_JAPAN'
        | 'ENTERTAINMENT'
        | 'EV_CHARGER'
        | 'FINANCIAL_USD'
        | 'FINANCIAL_CNY'
        | 'FINANCIAL_GBP'
        | 'FINANCIAL_JPY'
        | 'FINANCIAL_EUR'
        | 'FITNESS'
        | 'FOOD_AND_DRINK'
        | 'GAS'
        | 'GROCERY'
        | 'HEALTH_AND_MEDICAL'
        | 'HOTEL_AND_TRAVEL'
        | 'MUSIC'
        | 'PARKING'
        | 'PET_SERVICES'
        | 'PROFESSIONAL_SERVICES'
        | 'SHOPPING'
        | 'TICKETING'
        | 'TRANSIT';

      place?: Attributes.Place;
    }

    export namespace Attributes {
      export interface Place {
        categories?: Array<string>;

        displayPoint?: Place.DisplayPoint;

        homePage?: string;

        mainAddress?: Place.MainAddress;

        mapAction?:
          | 'BUY_TICKETS'
          | 'VIEW_AVAILABILITY'
          | 'VIEW_PRICING'
          | 'HOTEL_BOOK_ROOM'
          | 'PARKING_RESERVE_PARKING'
          | 'RESTAURANT_JOIN_WAITLIST'
          | 'RESTAURANT_ORDER_DELIVERY'
          | 'RESTAURANT_ORDER_FOOD'
          | 'RESTAURANT_ORDER_TAKEOUT'
          | 'RESTAURANT_RESERVATION'
          | 'SCHEDULE_APPOINTMENT'
          | 'RESTAURANT_VIEW_MENU'
          | 'THEATER_NOW_PLAYING'
          | 'AIRLINE_BOOK_TRAVEL'
          | 'AIRLINE_CHECK_IN'
          | 'AIRLINE_FLIGHT_STATUS'
          | 'APPLY'
          | 'BOOK'
          | 'BOOK_ACTIVITIES'
          | 'BOOK_RIDES'
          | 'BOOK_TEETIMES'
          | 'BOOK_TOURS'
          | 'CAREERS'
          | 'CHARGE_EV'
          | 'COUPONS'
          | 'DONATE'
          | 'EVENTS'
          | 'EVENTS_SHOWS'
          | 'EVENTS_SPORTS'
          | 'GIFT_CARD'
          | 'HOTEL_AMENITIES'
          | 'JOIN'
          | 'PARKING_AVAILABLE'
          | 'RESTAURANT_PICKUP'
          | 'RETAIL_SERVICE_QUOTE'
          | 'RETAIL_STORE_DELIVERY'
          | 'RETAIL_STORE_PICKUP'
          | 'RETAIL_STORE_SHOP'
          | 'SERVICES'
          | 'SUPPORT';

        names?: Array<string>;

        phoneNumber?: Place.PhoneNumber;

        placeId?: string;

        relationship?: 'OWNER' | 'AUTHORIZED' | 'OTHER';
      }

      export namespace Place {
        export interface DisplayPoint {
          coordinates?: DisplayPoint.Coordinates;

          source?: 'CALCULATED' | 'MANUALLY_PLACED';
        }

        export namespace DisplayPoint {
          export interface Coordinates {
            latitude?: number;

            longitude?: number;
          }
        }

        export interface MainAddress {
          fullAddress?: string;

          structuredAddress?: MainAddress.StructuredAddress;
        }

        export namespace MainAddress {
          export interface StructuredAddress {
            countryCode?: string;

            floor?: string;

            locality?: string;

            neighborhood?: string;

            postalCode?: string;

            stateProvince?: string;

            streetAddress?: Array<string>;
          }
        }

        export interface PhoneNumber {
          intent?: string;

          number?: string;

          type?: 'FAX' | 'LANDLINE' | 'MOBILE' | 'TOLLFREE';
        }
      }
    }

    export interface Relationships {
      appClip: Relationships.AppClip;

      headerImage: Relationships.HeaderImage;

      localizations: Relationships.Localizations;
    }

    export namespace Relationships {
      export interface AppClip {
        data: AppClip.Data;
      }

      export namespace AppClip {
        export interface Data {
          id: string;

          type: 'appClips';
        }
      }

      export interface HeaderImage {
        data: HeaderImage.Data;
      }

      export namespace HeaderImage {
        export interface Data {
          id: string;

          type: 'appClipAdvancedExperienceImages';
        }
      }

      export interface Localizations {
        data: Array<Localizations.Data>;
      }

      export namespace Localizations {
        export interface Data {
          id: string;

          type: 'appClipAdvancedExperienceLocalizations';
        }
      }
    }
  }
}

export interface AppClipAdvancedExperienceRetrieveParams {
  /**
   * the fields to include for returned resources of type appClipAdvancedExperiences
   */
  'fields[appClipAdvancedExperiences]'?: Array<
    | 'link'
    | 'version'
    | 'status'
    | 'action'
    | 'isPoweredBy'
    | 'place'
    | 'placeStatus'
    | 'businessCategory'
    | 'defaultLanguage'
    | 'appClip'
    | 'headerImage'
    | 'localizations'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'appClip' | 'headerImage' | 'localizations'>;

  /**
   * maximum number of related localizations returned (when they are included)
   */
  'limit[localizations]'?: number;
}

export interface AppClipAdvancedExperienceUpdateParams {
  data: AppClipAdvancedExperienceUpdateParams.Data;

  included?: Array<AppClipAdvancedExperienceLocalizationInlineCreate>;
}

export namespace AppClipAdvancedExperienceUpdateParams {
  export interface Data {
    id: string;

    type: 'appClipAdvancedExperiences';

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      action?: AppClipAdvancedExperiencesAPI.AppClipAction;

      businessCategory?:
        | 'AUTOMOTIVE'
        | 'BEAUTY'
        | 'BIKES'
        | 'BOOKS'
        | 'CASINO'
        | 'EDUCATION'
        | 'EDUCATION_JAPAN'
        | 'ENTERTAINMENT'
        | 'EV_CHARGER'
        | 'FINANCIAL_USD'
        | 'FINANCIAL_CNY'
        | 'FINANCIAL_GBP'
        | 'FINANCIAL_JPY'
        | 'FINANCIAL_EUR'
        | 'FITNESS'
        | 'FOOD_AND_DRINK'
        | 'GAS'
        | 'GROCERY'
        | 'HEALTH_AND_MEDICAL'
        | 'HOTEL_AND_TRAVEL'
        | 'MUSIC'
        | 'PARKING'
        | 'PET_SERVICES'
        | 'PROFESSIONAL_SERVICES'
        | 'SHOPPING'
        | 'TICKETING'
        | 'TRANSIT';

      defaultLanguage?: AppClipAdvancedExperiencesAPI.AppClipAdvancedExperienceLanguage;

      isPoweredBy?: boolean;

      place?: Attributes.Place;

      removed?: boolean;
    }

    export namespace Attributes {
      export interface Place {
        categories?: Array<string>;

        displayPoint?: Place.DisplayPoint;

        homePage?: string;

        mainAddress?: Place.MainAddress;

        mapAction?:
          | 'BUY_TICKETS'
          | 'VIEW_AVAILABILITY'
          | 'VIEW_PRICING'
          | 'HOTEL_BOOK_ROOM'
          | 'PARKING_RESERVE_PARKING'
          | 'RESTAURANT_JOIN_WAITLIST'
          | 'RESTAURANT_ORDER_DELIVERY'
          | 'RESTAURANT_ORDER_FOOD'
          | 'RESTAURANT_ORDER_TAKEOUT'
          | 'RESTAURANT_RESERVATION'
          | 'SCHEDULE_APPOINTMENT'
          | 'RESTAURANT_VIEW_MENU'
          | 'THEATER_NOW_PLAYING'
          | 'AIRLINE_BOOK_TRAVEL'
          | 'AIRLINE_CHECK_IN'
          | 'AIRLINE_FLIGHT_STATUS'
          | 'APPLY'
          | 'BOOK'
          | 'BOOK_ACTIVITIES'
          | 'BOOK_RIDES'
          | 'BOOK_TEETIMES'
          | 'BOOK_TOURS'
          | 'CAREERS'
          | 'CHARGE_EV'
          | 'COUPONS'
          | 'DONATE'
          | 'EVENTS'
          | 'EVENTS_SHOWS'
          | 'EVENTS_SPORTS'
          | 'GIFT_CARD'
          | 'HOTEL_AMENITIES'
          | 'JOIN'
          | 'PARKING_AVAILABLE'
          | 'RESTAURANT_PICKUP'
          | 'RETAIL_SERVICE_QUOTE'
          | 'RETAIL_STORE_DELIVERY'
          | 'RETAIL_STORE_PICKUP'
          | 'RETAIL_STORE_SHOP'
          | 'SERVICES'
          | 'SUPPORT';

        names?: Array<string>;

        phoneNumber?: Place.PhoneNumber;

        placeId?: string;

        relationship?: 'OWNER' | 'AUTHORIZED' | 'OTHER';
      }

      export namespace Place {
        export interface DisplayPoint {
          coordinates?: DisplayPoint.Coordinates;

          source?: 'CALCULATED' | 'MANUALLY_PLACED';
        }

        export namespace DisplayPoint {
          export interface Coordinates {
            latitude?: number;

            longitude?: number;
          }
        }

        export interface MainAddress {
          fullAddress?: string;

          structuredAddress?: MainAddress.StructuredAddress;
        }

        export namespace MainAddress {
          export interface StructuredAddress {
            countryCode?: string;

            floor?: string;

            locality?: string;

            neighborhood?: string;

            postalCode?: string;

            stateProvince?: string;

            streetAddress?: Array<string>;
          }
        }

        export interface PhoneNumber {
          intent?: string;

          number?: string;

          type?: 'FAX' | 'LANDLINE' | 'MOBILE' | 'TOLLFREE';
        }
      }
    }

    export interface Relationships {
      appClip?: Relationships.AppClip;

      headerImage?: Relationships.HeaderImage;

      localizations?: Relationships.Localizations;
    }

    export namespace Relationships {
      export interface AppClip {
        data?: AppClip.Data;
      }

      export namespace AppClip {
        export interface Data {
          id: string;

          type: 'appClips';
        }
      }

      export interface HeaderImage {
        data?: HeaderImage.Data;
      }

      export namespace HeaderImage {
        export interface Data {
          id: string;

          type: 'appClipAdvancedExperienceImages';
        }
      }

      export interface Localizations {
        data?: Array<Localizations.Data>;
      }

      export namespace Localizations {
        export interface Data {
          id: string;

          type: 'appClipAdvancedExperienceLocalizations';
        }
      }
    }
  }
}

export declare namespace AppClipAdvancedExperiences {
  export {
    type AppClipAction as AppClipAction,
    type AppClipAdvancedExperience as AppClipAdvancedExperience,
    type AppClipAdvancedExperienceLanguage as AppClipAdvancedExperienceLanguage,
    type AppClipAdvancedExperienceLocalization as AppClipAdvancedExperienceLocalization,
    type AppClipAdvancedExperienceLocalizationInlineCreate as AppClipAdvancedExperienceLocalizationInlineCreate,
    type AppClipAdvancedExperienceResponse as AppClipAdvancedExperienceResponse,
    type AppClipAdvancedExperienceCreateParams as AppClipAdvancedExperienceCreateParams,
    type AppClipAdvancedExperienceRetrieveParams as AppClipAdvancedExperienceRetrieveParams,
    type AppClipAdvancedExperienceUpdateParams as AppClipAdvancedExperienceUpdateParams,
  };
}
