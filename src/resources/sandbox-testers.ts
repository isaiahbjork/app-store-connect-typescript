// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SandboxTestersAPI from './sandbox-testers';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import * as ActorsAPI from './actors';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SandboxTesters extends APIResource {
  update(
    id: string,
    body: SandboxTesterUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SandboxTesterUpdateResponse> {
    return this._client.patch(path`/v2/sandboxTesters/${id}`, { body, ...options });
  }

  list(
    query: SandboxTesterListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SandboxTesterListResponse> {
    return this._client.get('/v2/sandboxTesters', { query, ...options });
  }
}

export interface SandboxTesterV2 {
  id: string;

  type: 'sandboxTesters';

  attributes?: SandboxTesterV2.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace SandboxTesterV2 {
  export interface Attributes {
    acAccountName?: string;

    applePayCompatible?: boolean;

    firstName?: string;

    interruptPurchases?: boolean;

    lastName?: string;

    subscriptionRenewalRate?:
      | 'MONTHLY_RENEWAL_EVERY_ONE_HOUR'
      | 'MONTHLY_RENEWAL_EVERY_THIRTY_MINUTES'
      | 'MONTHLY_RENEWAL_EVERY_FIFTEEN_MINUTES'
      | 'MONTHLY_RENEWAL_EVERY_FIVE_MINUTES'
      | 'MONTHLY_RENEWAL_EVERY_THREE_MINUTES';

    territory?: SandboxTestersAPI.TerritoryCode;
  }
}

export type TerritoryCode =
  | 'ABW'
  | 'AFG'
  | 'AGO'
  | 'AIA'
  | 'ALB'
  | 'AND'
  | 'ANT'
  | 'ARE'
  | 'ARG'
  | 'ARM'
  | 'ASM'
  | 'ATG'
  | 'AUS'
  | 'AUT'
  | 'AZE'
  | 'BDI'
  | 'BEL'
  | 'BEN'
  | 'BES'
  | 'BFA'
  | 'BGD'
  | 'BGR'
  | 'BHR'
  | 'BHS'
  | 'BIH'
  | 'BLR'
  | 'BLZ'
  | 'BMU'
  | 'BOL'
  | 'BRA'
  | 'BRB'
  | 'BRN'
  | 'BTN'
  | 'BWA'
  | 'CAF'
  | 'CAN'
  | 'CHE'
  | 'CHL'
  | 'CHN'
  | 'CIV'
  | 'CMR'
  | 'COD'
  | 'COG'
  | 'COK'
  | 'COL'
  | 'COM'
  | 'CPV'
  | 'CRI'
  | 'CUB'
  | 'CUW'
  | 'CXR'
  | 'CYM'
  | 'CYP'
  | 'CZE'
  | 'DEU'
  | 'DJI'
  | 'DMA'
  | 'DNK'
  | 'DOM'
  | 'DZA'
  | 'ECU'
  | 'EGY'
  | 'ERI'
  | 'ESP'
  | 'EST'
  | 'ETH'
  | 'FIN'
  | 'FJI'
  | 'FLK'
  | 'FRA'
  | 'FRO'
  | 'FSM'
  | 'GAB'
  | 'GBR'
  | 'GEO'
  | 'GGY'
  | 'GHA'
  | 'GIB'
  | 'GIN'
  | 'GLP'
  | 'GMB'
  | 'GNB'
  | 'GNQ'
  | 'GRC'
  | 'GRD'
  | 'GRL'
  | 'GTM'
  | 'GUF'
  | 'GUM'
  | 'GUY'
  | 'HKG'
  | 'HND'
  | 'HRV'
  | 'HTI'
  | 'HUN'
  | 'IDN'
  | 'IMN'
  | 'IND'
  | 'IRL'
  | 'IRQ'
  | 'ISL'
  | 'ISR'
  | 'ITA'
  | 'JAM'
  | 'JEY'
  | 'JOR'
  | 'JPN'
  | 'KAZ'
  | 'KEN'
  | 'KGZ'
  | 'KHM'
  | 'KIR'
  | 'KNA'
  | 'KOR'
  | 'KWT'
  | 'LAO'
  | 'LBN'
  | 'LBR'
  | 'LBY'
  | 'LCA'
  | 'LIE'
  | 'LKA'
  | 'LSO'
  | 'LTU'
  | 'LUX'
  | 'LVA'
  | 'MAC'
  | 'MAR'
  | 'MCO'
  | 'MDA'
  | 'MDG'
  | 'MDV'
  | 'MEX'
  | 'MHL'
  | 'MKD'
  | 'MLI'
  | 'MLT'
  | 'MMR'
  | 'MNE'
  | 'MNG'
  | 'MNP'
  | 'MOZ'
  | 'MRT'
  | 'MSR'
  | 'MTQ'
  | 'MUS'
  | 'MWI'
  | 'MYS'
  | 'MYT'
  | 'NAM'
  | 'NCL'
  | 'NER'
  | 'NFK'
  | 'NGA'
  | 'NIC'
  | 'NIU'
  | 'NLD'
  | 'NOR'
  | 'NPL'
  | 'NRU'
  | 'NZL'
  | 'OMN'
  | 'PAK'
  | 'PAN'
  | 'PER'
  | 'PHL'
  | 'PLW'
  | 'PNG'
  | 'POL'
  | 'PRI'
  | 'PRT'
  | 'PRY'
  | 'PSE'
  | 'PYF'
  | 'QAT'
  | 'REU'
  | 'ROU'
  | 'RUS'
  | 'RWA'
  | 'SAU'
  | 'SEN'
  | 'SGP'
  | 'SHN'
  | 'SLB'
  | 'SLE'
  | 'SLV'
  | 'SMR'
  | 'SOM'
  | 'SPM'
  | 'SRB'
  | 'SSD'
  | 'STP'
  | 'SUR'
  | 'SVK'
  | 'SVN'
  | 'SWE'
  | 'SWZ'
  | 'SXM'
  | 'SYC'
  | 'TCA'
  | 'TCD'
  | 'TGO'
  | 'THA'
  | 'TJK'
  | 'TKM'
  | 'TLS'
  | 'TON'
  | 'TTO'
  | 'TUN'
  | 'TUR'
  | 'TUV'
  | 'TWN'
  | 'TZA'
  | 'UGA'
  | 'UKR'
  | 'UMI'
  | 'URY'
  | 'USA'
  | 'UZB'
  | 'VAT'
  | 'VCT'
  | 'VEN'
  | 'VGB'
  | 'VIR'
  | 'VNM'
  | 'VUT'
  | 'WLF'
  | 'WSM'
  | 'YEM'
  | 'ZAF'
  | 'ZMB'
  | 'ZWE';

export interface SandboxTesterUpdateResponse {
  data: SandboxTesterV2;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface SandboxTesterListResponse {
  data: Array<SandboxTesterV2>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface SandboxTesterUpdateParams {
  data: SandboxTesterUpdateParams.Data;
}

export namespace SandboxTesterUpdateParams {
  export interface Data {
    id: string;

    type: 'sandboxTesters';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      interruptPurchases?: boolean;

      subscriptionRenewalRate?:
        | 'MONTHLY_RENEWAL_EVERY_ONE_HOUR'
        | 'MONTHLY_RENEWAL_EVERY_THIRTY_MINUTES'
        | 'MONTHLY_RENEWAL_EVERY_FIFTEEN_MINUTES'
        | 'MONTHLY_RENEWAL_EVERY_FIVE_MINUTES'
        | 'MONTHLY_RENEWAL_EVERY_THREE_MINUTES';

      territory?: SandboxTestersAPI.TerritoryCode;
    }
  }
}

export interface SandboxTesterListParams {
  /**
   * the fields to include for returned resources of type sandboxTesters
   */
  'fields[sandboxTesters]'?: Array<
    | 'firstName'
    | 'lastName'
    | 'acAccountName'
    | 'territory'
    | 'applePayCompatible'
    | 'interruptPurchases'
    | 'subscriptionRenewalRate'
  >;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export declare namespace SandboxTesters {
  export {
    type SandboxTesterV2 as SandboxTesterV2,
    type TerritoryCode as TerritoryCode,
    type SandboxTesterUpdateResponse as SandboxTesterUpdateResponse,
    type SandboxTesterListResponse as SandboxTesterListResponse,
    type SandboxTesterUpdateParams as SandboxTesterUpdateParams,
    type SandboxTesterListParams as SandboxTesterListParams,
  };
}
