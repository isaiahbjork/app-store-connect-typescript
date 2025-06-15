// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CertificatesAPI from './certificates';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as BundleIDsAPI from '../bundle-ids/bundle-ids';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrievePassTypeIDResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import * as PassTypeIDsAPI from '../pass-type-ids/pass-type-ids';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Certificates extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: CertificateCreateParams, options?: RequestOptions): APIPromise<CertificateResponse> {
    return this._client.post('/v1/certificates', { body, ...options });
  }

  retrieve(
    id: string,
    query: CertificateRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CertificateResponse> {
    return this._client.get(path`/v1/certificates/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: CertificateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CertificateResponse> {
    return this._client.patch(path`/v1/certificates/${id}`, { body, ...options });
  }

  list(
    query: CertificateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CertificatesResponse> {
    return this._client.get('/v1/certificates', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/certificates/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrievePassTypeID(
    id: string,
    query: CertificateRetrievePassTypeIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PassTypeIDsAPI.PassTypeIDResponse> {
    return this._client.get(path`/v1/certificates/${id}/passTypeId`, { query, ...options });
  }
}

export interface Certificate {
  id: string;

  type: 'certificates';

  attributes?: Certificate.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: Certificate.Relationships;
}

export namespace Certificate {
  export interface Attributes {
    activated?: boolean;

    certificateContent?: string;

    certificateType?: CertificatesAPI.CertificateType;

    displayName?: string;

    expirationDate?: string;

    name?: string;

    platform?: BundleIDsAPI.BundleIDPlatform;

    serialNumber?: string;
  }

  export interface Relationships {
    passTypeId?: Relationships.PassTypeID;
  }

  export namespace Relationships {
    export interface PassTypeID {
      data?: PassTypeID.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace PassTypeID {
      export interface Data {
        id: string;

        type: 'passTypeIds';
      }
    }
  }
}

export interface CertificateResponse {
  data: Certificate;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<PassTypeIDsAPI.PassTypeID>;
}

export type CertificateType =
  | 'APPLE_PAY'
  | 'APPLE_PAY_MERCHANT_IDENTITY'
  | 'APPLE_PAY_PSP_IDENTITY'
  | 'APPLE_PAY_RSA'
  | 'DEVELOPER_ID_KEXT'
  | 'DEVELOPER_ID_KEXT_G2'
  | 'DEVELOPER_ID_APPLICATION'
  | 'DEVELOPER_ID_APPLICATION_G2'
  | 'DEVELOPMENT'
  | 'DISTRIBUTION'
  | 'IDENTITY_ACCESS'
  | 'IOS_DEVELOPMENT'
  | 'IOS_DISTRIBUTION'
  | 'MAC_APP_DISTRIBUTION'
  | 'MAC_INSTALLER_DISTRIBUTION'
  | 'MAC_APP_DEVELOPMENT'
  | 'PASS_TYPE_ID'
  | 'PASS_TYPE_ID_WITH_NFC';

export interface CertificatesResponse {
  data: Array<Certificate>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<PassTypeIDsAPI.PassTypeID>;

  meta?: ActorsAPI.PagingInformation;
}

export interface CertificateCreateParams {
  data: CertificateCreateParams.Data;
}

export namespace CertificateCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'certificates';

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      certificateType: CertificatesAPI.CertificateType;

      csrContent: string;
    }

    export interface Relationships {
      merchantId?: Relationships.MerchantID;

      passTypeId?: Relationships.PassTypeID;
    }

    export namespace Relationships {
      export interface MerchantID {
        data?: MerchantID.Data;
      }

      export namespace MerchantID {
        export interface Data {
          id: string;

          type: 'merchantIds';
        }
      }

      export interface PassTypeID {
        data?: PassTypeID.Data;
      }

      export namespace PassTypeID {
        export interface Data {
          id: string;

          type: 'passTypeIds';
        }
      }
    }
  }
}

export interface CertificateRetrieveParams {
  /**
   * the fields to include for returned resources of type certificates
   */
  'fields[certificates]'?: Array<
    | 'name'
    | 'certificateType'
    | 'displayName'
    | 'serialNumber'
    | 'platform'
    | 'expirationDate'
    | 'certificateContent'
    | 'activated'
    | 'passTypeId'
  >;

  /**
   * the fields to include for returned resources of type passTypeIds
   */
  'fields[passTypeIds]'?: Array<'name' | 'identifier' | 'certificates'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'passTypeId'>;
}

export interface CertificateUpdateParams {
  data: CertificateUpdateParams.Data;
}

export namespace CertificateUpdateParams {
  export interface Data {
    id: string;

    type: 'certificates';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      activated?: boolean;
    }
  }
}

export interface CertificateListParams {
  /**
   * the fields to include for returned resources of type certificates
   */
  'fields[certificates]'?: Array<
    | 'name'
    | 'certificateType'
    | 'displayName'
    | 'serialNumber'
    | 'platform'
    | 'expirationDate'
    | 'certificateContent'
    | 'activated'
    | 'passTypeId'
  >;

  /**
   * the fields to include for returned resources of type passTypeIds
   */
  'fields[passTypeIds]'?: Array<'name' | 'identifier' | 'certificates'>;

  /**
   * filter by attribute 'certificateType'
   */
  'filter[certificateType]'?: Array<
    | 'APPLE_PAY'
    | 'APPLE_PAY_MERCHANT_IDENTITY'
    | 'APPLE_PAY_PSP_IDENTITY'
    | 'APPLE_PAY_RSA'
    | 'DEVELOPER_ID_KEXT'
    | 'DEVELOPER_ID_KEXT_G2'
    | 'DEVELOPER_ID_APPLICATION'
    | 'DEVELOPER_ID_APPLICATION_G2'
    | 'DEVELOPMENT'
    | 'DISTRIBUTION'
    | 'IDENTITY_ACCESS'
    | 'IOS_DEVELOPMENT'
    | 'IOS_DISTRIBUTION'
    | 'MAC_APP_DISTRIBUTION'
    | 'MAC_INSTALLER_DISTRIBUTION'
    | 'MAC_APP_DEVELOPMENT'
    | 'PASS_TYPE_ID'
    | 'PASS_TYPE_ID_WITH_NFC'
  >;

  /**
   * filter by attribute 'displayName'
   */
  'filter[displayName]'?: Array<string>;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * filter by attribute 'serialNumber'
   */
  'filter[serialNumber]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'passTypeId'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<
    | 'displayName'
    | '-displayName'
    | 'certificateType'
    | '-certificateType'
    | 'serialNumber'
    | '-serialNumber'
    | 'id'
    | '-id'
  >;
}

export interface CertificateRetrievePassTypeIDParams {
  /**
   * the fields to include for returned resources of type certificates
   */
  'fields[certificates]'?: Array<
    | 'name'
    | 'certificateType'
    | 'displayName'
    | 'serialNumber'
    | 'platform'
    | 'expirationDate'
    | 'certificateContent'
    | 'activated'
    | 'passTypeId'
  >;

  /**
   * the fields to include for returned resources of type passTypeIds
   */
  'fields[passTypeIds]'?: Array<'name' | 'identifier' | 'certificates'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'certificates'>;

  /**
   * maximum number of related certificates returned (when they are included)
   */
  'limit[certificates]'?: number;
}

Certificates.Relationships = RelationshipsAPIRelationships;

export declare namespace Certificates {
  export {
    type Certificate as Certificate,
    type CertificateResponse as CertificateResponse,
    type CertificateType as CertificateType,
    type CertificatesResponse as CertificatesResponse,
    type CertificateCreateParams as CertificateCreateParams,
    type CertificateRetrieveParams as CertificateRetrieveParams,
    type CertificateUpdateParams as CertificateUpdateParams,
    type CertificateListParams as CertificateListParams,
    type CertificateRetrievePassTypeIDParams as CertificateRetrievePassTypeIDParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrievePassTypeIDResponse as RelationshipRetrievePassTypeIDResponse,
  };
}
