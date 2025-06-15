// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as DevicesAPI from '../devices';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as BundleIDsAPI from '../bundle-ids/bundle-ids';
import * as CertificatesAPI from '../certificates/certificates';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipListCertificatesParams,
  RelationshipListCertificatesResponse,
  RelationshipListDevicesParams,
  RelationshipListDevicesResponse,
  RelationshipRetrieveBundleIDResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Profiles extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(body: ProfileCreateParams, options?: RequestOptions): APIPromise<ProfileResponse> {
    return this._client.post('/v1/profiles', { body, ...options });
  }

  retrieve(
    id: string,
    query: ProfileRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProfileResponse> {
    return this._client.get(path`/v1/profiles/${id}`, { query, ...options });
  }

  list(
    query: ProfileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProfileListResponse> {
    return this._client.get('/v1/profiles', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/profiles/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listCertificates(
    id: string,
    query: ProfileListCertificatesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProfileListCertificatesResponse> {
    return this._client.get(path`/v1/profiles/${id}/certificates`, { query, ...options });
  }

  listDevices(
    id: string,
    query: ProfileListDevicesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProfileListDevicesResponse> {
    return this._client.get(path`/v1/profiles/${id}/devices`, { query, ...options });
  }

  retrieveBundleID(
    id: string,
    query: ProfileRetrieveBundleIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProfileRetrieveBundleIDResponse> {
    return this._client.get(path`/v1/profiles/${id}/bundleId`, { query, ...options });
  }
}

export interface Profile {
  id: string;

  type: 'profiles';

  attributes?: Profile.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: Profile.Relationships;
}

export namespace Profile {
  export interface Attributes {
    createdDate?: string;

    expirationDate?: string;

    name?: string;

    platform?: BundleIDsAPI.BundleIDPlatform;

    profileContent?: string;

    profileState?: 'ACTIVE' | 'INVALID';

    profileType?:
      | 'IOS_APP_DEVELOPMENT'
      | 'IOS_APP_STORE'
      | 'IOS_APP_ADHOC'
      | 'IOS_APP_INHOUSE'
      | 'MAC_APP_DEVELOPMENT'
      | 'MAC_APP_STORE'
      | 'MAC_APP_DIRECT'
      | 'TVOS_APP_DEVELOPMENT'
      | 'TVOS_APP_STORE'
      | 'TVOS_APP_ADHOC'
      | 'TVOS_APP_INHOUSE'
      | 'MAC_CATALYST_APP_DEVELOPMENT'
      | 'MAC_CATALYST_APP_STORE'
      | 'MAC_CATALYST_APP_DIRECT';

    uuid?: string;
  }

  export interface Relationships {
    bundleId?: Relationships.BundleID;

    certificates?: Relationships.Certificates;

    devices?: Relationships.Devices;
  }

  export namespace Relationships {
    export interface BundleID {
      data?: BundleID.Data;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;
    }

    export namespace BundleID {
      export interface Data {
        id: string;

        type: 'bundleIds';
      }
    }

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

    export interface Devices {
      data?: Array<Devices.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Devices {
      export interface Data {
        id: string;

        type: 'devices';
      }
    }
  }
}

export interface ProfileResponse {
  data: Profile;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<BundleIDsAPI.BundleID | DevicesAPI.Device | CertificatesAPI.Certificate>;
}

export interface ProfileListResponse {
  data: Array<Profile>;

  links: ActorsAPI.PagedDocumentLinks;

  included?: Array<BundleIDsAPI.BundleID | DevicesAPI.Device | CertificatesAPI.Certificate>;

  meta?: ActorsAPI.PagingInformation;
}

export interface ProfileListCertificatesResponse {
  data: Array<CertificatesAPI.Certificate>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface ProfileListDevicesResponse {
  data: Array<DevicesAPI.Device>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface ProfileRetrieveBundleIDResponse {
  data: BundleIDsAPI.BundleID;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface ProfileCreateParams {
  data: ProfileCreateParams.Data;
}

export namespace ProfileCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'profiles';
  }

  export namespace Data {
    export interface Attributes {
      name: string;

      profileType:
        | 'IOS_APP_DEVELOPMENT'
        | 'IOS_APP_STORE'
        | 'IOS_APP_ADHOC'
        | 'IOS_APP_INHOUSE'
        | 'MAC_APP_DEVELOPMENT'
        | 'MAC_APP_STORE'
        | 'MAC_APP_DIRECT'
        | 'TVOS_APP_DEVELOPMENT'
        | 'TVOS_APP_STORE'
        | 'TVOS_APP_ADHOC'
        | 'TVOS_APP_INHOUSE'
        | 'MAC_CATALYST_APP_DEVELOPMENT'
        | 'MAC_CATALYST_APP_STORE'
        | 'MAC_CATALYST_APP_DIRECT';
    }

    export interface Relationships {
      bundleId: Relationships.BundleID;

      certificates: Relationships.Certificates;

      devices?: Relationships.Devices;
    }

    export namespace Relationships {
      export interface BundleID {
        data: BundleID.Data;
      }

      export namespace BundleID {
        export interface Data {
          id: string;

          type: 'bundleIds';
        }
      }

      export interface Certificates {
        data: Array<Certificates.Data>;
      }

      export namespace Certificates {
        export interface Data {
          id: string;

          type: 'certificates';
        }
      }

      export interface Devices {
        data?: Array<Devices.Data>;
      }

      export namespace Devices {
        export interface Data {
          id: string;

          type: 'devices';
        }
      }
    }
  }
}

export interface ProfileRetrieveParams {
  /**
   * the fields to include for returned resources of type bundleIds
   */
  'fields[bundleIds]'?: Array<
    'name' | 'platform' | 'identifier' | 'seedId' | 'profiles' | 'bundleIdCapabilities' | 'app'
  >;

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
   * the fields to include for returned resources of type devices
   */
  'fields[devices]'?: Array<'name' | 'platform' | 'udid' | 'deviceClass' | 'status' | 'model' | 'addedDate'>;

  /**
   * the fields to include for returned resources of type profiles
   */
  'fields[profiles]'?: Array<
    | 'name'
    | 'platform'
    | 'profileType'
    | 'profileState'
    | 'profileContent'
    | 'uuid'
    | 'createdDate'
    | 'expirationDate'
    | 'bundleId'
    | 'devices'
    | 'certificates'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'bundleId' | 'devices' | 'certificates'>;

  /**
   * maximum number of related certificates returned (when they are included)
   */
  'limit[certificates]'?: number;

  /**
   * maximum number of related devices returned (when they are included)
   */
  'limit[devices]'?: number;
}

export interface ProfileListParams {
  /**
   * the fields to include for returned resources of type bundleIds
   */
  'fields[bundleIds]'?: Array<
    'name' | 'platform' | 'identifier' | 'seedId' | 'profiles' | 'bundleIdCapabilities' | 'app'
  >;

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
   * the fields to include for returned resources of type devices
   */
  'fields[devices]'?: Array<'name' | 'platform' | 'udid' | 'deviceClass' | 'status' | 'model' | 'addedDate'>;

  /**
   * the fields to include for returned resources of type profiles
   */
  'fields[profiles]'?: Array<
    | 'name'
    | 'platform'
    | 'profileType'
    | 'profileState'
    | 'profileContent'
    | 'uuid'
    | 'createdDate'
    | 'expirationDate'
    | 'bundleId'
    | 'devices'
    | 'certificates'
  >;

  /**
   * filter by id(s)
   */
  'filter[id]'?: Array<string>;

  /**
   * filter by attribute 'name'
   */
  'filter[name]'?: Array<string>;

  /**
   * filter by attribute 'profileState'
   */
  'filter[profileState]'?: Array<'ACTIVE' | 'INVALID'>;

  /**
   * filter by attribute 'profileType'
   */
  'filter[profileType]'?: Array<
    | 'IOS_APP_DEVELOPMENT'
    | 'IOS_APP_STORE'
    | 'IOS_APP_ADHOC'
    | 'IOS_APP_INHOUSE'
    | 'MAC_APP_DEVELOPMENT'
    | 'MAC_APP_STORE'
    | 'MAC_APP_DIRECT'
    | 'TVOS_APP_DEVELOPMENT'
    | 'TVOS_APP_STORE'
    | 'TVOS_APP_ADHOC'
    | 'TVOS_APP_INHOUSE'
    | 'MAC_CATALYST_APP_DEVELOPMENT'
    | 'MAC_CATALYST_APP_STORE'
    | 'MAC_CATALYST_APP_DIRECT'
  >;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'bundleId' | 'devices' | 'certificates'>;

  /**
   * maximum resources per page
   */
  limit?: number;

  /**
   * maximum number of related certificates returned (when they are included)
   */
  'limit[certificates]'?: number;

  /**
   * maximum number of related devices returned (when they are included)
   */
  'limit[devices]'?: number;

  /**
   * comma-separated list of sort expressions; resources will be sorted as specified
   */
  sort?: Array<
    'name' | '-name' | 'profileType' | '-profileType' | 'profileState' | '-profileState' | 'id' | '-id'
  >;
}

export interface ProfileListCertificatesParams {
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
   * maximum resources per page
   */
  limit?: number;
}

export interface ProfileListDevicesParams {
  /**
   * the fields to include for returned resources of type devices
   */
  'fields[devices]'?: Array<'name' | 'platform' | 'udid' | 'deviceClass' | 'status' | 'model' | 'addedDate'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

export interface ProfileRetrieveBundleIDParams {
  /**
   * the fields to include for returned resources of type bundleIds
   */
  'fields[bundleIds]'?: Array<
    'name' | 'platform' | 'identifier' | 'seedId' | 'profiles' | 'bundleIdCapabilities' | 'app'
  >;
}

Profiles.Relationships = RelationshipsAPIRelationships;

export declare namespace Profiles {
  export {
    type Profile as Profile,
    type ProfileResponse as ProfileResponse,
    type ProfileListResponse as ProfileListResponse,
    type ProfileListCertificatesResponse as ProfileListCertificatesResponse,
    type ProfileListDevicesResponse as ProfileListDevicesResponse,
    type ProfileRetrieveBundleIDResponse as ProfileRetrieveBundleIDResponse,
    type ProfileCreateParams as ProfileCreateParams,
    type ProfileRetrieveParams as ProfileRetrieveParams,
    type ProfileListParams as ProfileListParams,
    type ProfileListCertificatesParams as ProfileListCertificatesParams,
    type ProfileListDevicesParams as ProfileListDevicesParams,
    type ProfileRetrieveBundleIDParams as ProfileRetrieveBundleIDParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipListCertificatesResponse as RelationshipListCertificatesResponse,
    type RelationshipListDevicesResponse as RelationshipListDevicesResponse,
    type RelationshipRetrieveBundleIDResponse as RelationshipRetrieveBundleIDResponse,
    type RelationshipListCertificatesParams as RelationshipListCertificatesParams,
    type RelationshipListDevicesParams as RelationshipListDevicesParams,
  };
}
