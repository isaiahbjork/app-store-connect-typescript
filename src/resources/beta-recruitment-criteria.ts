// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BetaRecruitmentCriteriaAPI from './beta-recruitment-criteria';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BetaRecruitmentCriteria extends APIResource {
  create(
    body: BetaRecruitmentCriterionCreateParams,
    options?: RequestOptions,
  ): APIPromise<BetaRecruitmentCriterionResponse> {
    return this._client.post('/v1/betaRecruitmentCriteria', { body, ...options });
  }

  update(
    id: string,
    body: BetaRecruitmentCriterionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BetaRecruitmentCriterionResponse> {
    return this._client.patch(path`/v1/betaRecruitmentCriteria/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/betaRecruitmentCriteria/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BetaRecruitmentCriterion {
  id: string;

  type: 'betaRecruitmentCriteria';

  attributes?: BetaRecruitmentCriterion.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace BetaRecruitmentCriterion {
  export interface Attributes {
    deviceFamilyOsVersionFilters?: Array<BetaRecruitmentCriteriaAPI.DeviceFamilyOsVersionFilter>;

    lastModifiedDate?: string;
  }
}

export interface BetaRecruitmentCriterionResponse {
  data: BetaRecruitmentCriterion;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface DeviceFamilyOsVersionFilter {
  deviceFamily?: AccessibilityDeclarationsAPI.DeviceFamily;

  maximumOsInclusive?: string;

  minimumOsInclusive?: string;
}

export interface BetaRecruitmentCriterionCreateParams {
  data: BetaRecruitmentCriterionCreateParams.Data;
}

export namespace BetaRecruitmentCriterionCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'betaRecruitmentCriteria';
  }

  export namespace Data {
    export interface Attributes {
      deviceFamilyOsVersionFilters: Array<BetaRecruitmentCriteriaAPI.DeviceFamilyOsVersionFilter>;
    }

    export interface Relationships {
      betaGroup: Relationships.BetaGroup;
    }

    export namespace Relationships {
      export interface BetaGroup {
        data: BetaGroup.Data;
      }

      export namespace BetaGroup {
        export interface Data {
          id: string;

          type: 'betaGroups';
        }
      }
    }
  }
}

export interface BetaRecruitmentCriterionUpdateParams {
  data: BetaRecruitmentCriterionUpdateParams.Data;
}

export namespace BetaRecruitmentCriterionUpdateParams {
  export interface Data {
    id: string;

    type: 'betaRecruitmentCriteria';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      deviceFamilyOsVersionFilters?: Array<BetaRecruitmentCriteriaAPI.DeviceFamilyOsVersionFilter>;
    }
  }
}

export declare namespace BetaRecruitmentCriteria {
  export {
    type BetaRecruitmentCriterion as BetaRecruitmentCriterion,
    type BetaRecruitmentCriterionResponse as BetaRecruitmentCriterionResponse,
    type DeviceFamilyOsVersionFilter as DeviceFamilyOsVersionFilter,
    type BetaRecruitmentCriterionCreateParams as BetaRecruitmentCriterionCreateParams,
    type BetaRecruitmentCriterionUpdateParams as BetaRecruitmentCriterionUpdateParams,
  };
}
