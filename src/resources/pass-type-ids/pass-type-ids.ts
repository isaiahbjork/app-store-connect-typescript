// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as CertificatesAPI from '../certificates/certificates';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListCertificatesParams,
  RelationshipListCertificatesResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PassTypeIDs extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: PassTypeIDCreateParams, options?: RequestOptions): APIPromise<PassTypeIDResponse> {
    return this._client.post('/v1/passTypeIds', { body, ...options });
  }

  retrieve(
    id: string,
    query: PassTypeIDRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PassTypeIDResponse> {
    return this._client.get(path`/v1/passTypeIds/${id}`, { query, ...options });
  }

  update(id: string, body: PassTypeIDUpdateParams, options?: RequestOptions): APIPromise<PassTypeIDResponse> {
    return this._client.patch(path`/v1/passTypeIds/${id}`, { body, ...options });
  }

  list(
    query: PassTypeIDListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PassTypeIDListResponse> {
    return this._client.get('/v1/passTypeIds', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/passTypeIds/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listCertificates(
    id: string,
    query: PassTypeIDListCertificatesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CertificatesAPI.CertificatesResponse> {
    return this._client.get(path`/v1/passTypeIds/${id}/certificates`, { query, ...options });
  }
}

export interface PassTypeID {
  id: string;

  type: 'passTypeIds';

  attributes?: PassTypeID.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: PassTypeID.Relationships;
}

export namespace PassTypeID {
  export interface Attributes {
    identifier?: string;

    name?: string;
  }

  export interface Relationships {
    certificates?: Relationships.Certificates;
  }

  export namespace Relationships {
    export interface Certificates {
      data?: Array<Certificates.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Certificates {
      export interface Data {
        id: string;

        type: 'certificates';
      }
    }
  }
}

export interface PassTypeIDResponse {
  data: PassTypeID;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<CertificatesAPI.Certificate>;
}

export interface PassTypeIDListResponse {
  data: Array<PassTypeID>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<CertificatesAPI.Certificate>;

  meta?: ActorsAPI.PagingInformation;
}

export interface PassTypeIDCreateParams {
  data: PassTypeIDCreateParams.Data;
}

export namespace PassTypeIDCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    type: 'passTypeIds';
  }

  export namespace Data {
    export interface Attributes {
      identifier: string;

      name: string;
    }
  }
}

export interface PassTypeIDRetrieveParams {
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

export interface PassTypeIDUpdateParams {
  data: PassTypeIDUpdateParams.Data;
}

export namespace PassTypeIDUpdateParams {
  export interface Data {
    id: string;

    type: 'passTypeIds';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      name?: string;
    }
  }
}

export interface PassTypeIDListParams {
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
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * filter by attribute 'identifier'
   */
  'filter[identifier]'?: Array<string>;

  /**
   * filter by attribute 'name'
   */
  'filter[name]'?: Array<string>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'certificates'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related certificates returned (when they are included)
   */
  'limit[certificates]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<'name' | '-name' | 'identifier' | '-identifier' | 'id' | '-id'>;
}

export interface PassTypeIDListCertificatesParams {
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

PassTypeIDs.Relationships = RelationshipsAPIRelationships;

export declare namespace PassTypeIDs {
  export {
    type PassTypeID as PassTypeID,
    type PassTypeIDResponse as PassTypeIDResponse,
    type PassTypeIDListResponse as PassTypeIDListResponse,
    type PassTypeIDCreateParams as PassTypeIDCreateParams,
    type PassTypeIDRetrieveParams as PassTypeIDRetrieveParams,
    type PassTypeIDUpdateParams as PassTypeIDUpdateParams,
    type PassTypeIDListParams as PassTypeIDListParams,
    type PassTypeIDListCertificatesParams as PassTypeIDListCertificatesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListCertificatesResponse as RelationshipListCertificatesResponse,
    type RelationshipListCertificatesParams as RelationshipListCertificatesParams,
  };
}
