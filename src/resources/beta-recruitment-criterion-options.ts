// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as ActorsAPI from './actors';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class BetaRecruitmentCriterionOptions extends APIResource {
  list(
    query: BetaRecruitmentCriterionOptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaRecruitmentCriterionOptionListResponse> {
    return this._client.get('/v1/betaRecruitmentCriterionOptions', { query, ...options });
  }
}

export interface BetaRecruitmentCriterionOptionListResponse {
  data: Array<BetaRecruitmentCriterionOptionListResponse.Data>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export namespace BetaRecruitmentCriterionOptionListResponse {
  export interface Data {
    id: string;

    type: 'betaRecruitmentCriterionOptions';

    attributes?: Data.Attributes;

    links?: AccessibilityDeclarationsAPI.ResourceLinks;
  }

  export namespace Data {
    export interface Attributes {
      deviceFamilyOsVersions?: Array<Attributes.DeviceFamilyOsVersion>;
    }

    export namespace Attributes {
      export interface DeviceFamilyOsVersion {
        deviceFamily?: AccessibilityDeclarationsAPI.DeviceFamily;

        osVersions?: Array<string>;
      }
    }
  }
}

export interface BetaRecruitmentCriterionOptionListParams {
  /**
   * the fields to include for returned resources of type
   * betaRecruitmentCriterionOptions
   */
  'fields[betaRecruitmentCriterionOptions]'?: Array<'deviceFamilyOsVersions'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace BetaRecruitmentCriterionOptions {
  export {
    type BetaRecruitmentCriterionOptionListResponse as BetaRecruitmentCriterionOptionListResponse,
    type BetaRecruitmentCriterionOptionListParams as BetaRecruitmentCriterionOptionListParams,
  };
}
