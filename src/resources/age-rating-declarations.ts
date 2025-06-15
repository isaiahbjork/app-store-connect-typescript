// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AgeRatingDeclarationsAPI from './age-rating-declarations';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AgeRatingDeclarations extends APIResource {
  update(
    id: string,
    body: AgeRatingDeclarationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AgeRatingDeclarationResponse> {
    return this._client.patch(path`/v1/ageRatingDeclarations/${id}`, { body, ...options });
  }
}

export interface AgeRatingDeclaration {
  id: string;

  type: 'ageRatingDeclarations';

  attributes?: AgeRatingDeclaration.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace AgeRatingDeclaration {
  export interface Attributes {
    alcoholTobaccoOrDrugUseOrReferences?: 'NONE';

    contests?: 'NONE';

    gambling?: boolean;

    gamblingSimulated?: 'NONE';

    horrorOrFearThemes?: 'NONE';

    kidsAgeBand?: AgeRatingDeclarationsAPI.KidsAgeBand;

    koreaAgeRatingOverride?: 'NONE' | 'FIFTEEN_PLUS' | 'NINETEEN_PLUS';

    lootBox?: boolean;

    matureOrSuggestiveThemes?: 'NONE';

    medicalOrTreatmentInformation?: 'NONE';

    profanityOrCrudeHumor?: 'NONE';

    sexualContentGraphicAndNudity?: 'NONE';

    sexualContentOrNudity?: 'NONE';

    unrestrictedWebAccess?: boolean;

    violenceCartoonOrFantasy?: 'NONE';

    violenceRealistic?: 'NONE';

    violenceRealisticProlongedGraphicOrSadistic?: 'NONE';
  }
}

export interface AgeRatingDeclarationResponse {
  data: AgeRatingDeclaration;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export type KidsAgeBand = 'FIVE_AND_UNDER' | 'SIX_TO_EIGHT' | 'NINE_TO_ELEVEN';

export interface AgeRatingDeclarationUpdateParams {
  data: AgeRatingDeclarationUpdateParams.Data;
}

export namespace AgeRatingDeclarationUpdateParams {
  export interface Data {
    id: string;

    type: 'ageRatingDeclarations';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      alcoholTobaccoOrDrugUseOrReferences?: 'NONE';

      contests?: 'NONE';

      gambling?: boolean;

      gamblingSimulated?: 'NONE';

      horrorOrFearThemes?: 'NONE';

      kidsAgeBand?: AgeRatingDeclarationsAPI.KidsAgeBand;

      koreaAgeRatingOverride?: 'NONE' | 'FIFTEEN_PLUS' | 'NINETEEN_PLUS';

      lootBox?: boolean;

      matureOrSuggestiveThemes?: 'NONE';

      medicalOrTreatmentInformation?: 'NONE';

      profanityOrCrudeHumor?: 'NONE';

      sexualContentGraphicAndNudity?: 'NONE';

      sexualContentOrNudity?: 'NONE';

      unrestrictedWebAccess?: boolean;

      violenceCartoonOrFantasy?: 'NONE';

      violenceRealistic?: 'NONE';

      violenceRealisticProlongedGraphicOrSadistic?: 'NONE';
    }
  }
}

export declare namespace AgeRatingDeclarations {
  export {
    type AgeRatingDeclaration as AgeRatingDeclaration,
    type AgeRatingDeclarationResponse as AgeRatingDeclarationResponse,
    type KidsAgeBand as KidsAgeBand,
    type AgeRatingDeclarationUpdateParams as AgeRatingDeclarationUpdateParams,
  };
}
