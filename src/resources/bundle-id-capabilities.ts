// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BundleIDCapabilitiesAPI from './bundle-id-capabilities';
import * as AccessibilityDeclarationsAPI from './accessibility-declarations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BundleIDCapabilities extends APIResource {
  create(
    body: BundleIDCapabilityCreateParams,
    options?: RequestOptions,
  ): APIPromise<BundleIDCapabilityResponse> {
    return this._client.post('/v1/bundleIdCapabilities', { body, ...options });
  }

  update(
    id: string,
    body: BundleIDCapabilityUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BundleIDCapabilityResponse> {
    return this._client.patch(path`/v1/bundleIdCapabilities/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/bundleIdCapabilities/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BundleIDCapability {
  id: string;

  type: 'bundleIdCapabilities';

  attributes?: BundleIDCapability.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;
}

export namespace BundleIDCapability {
  export interface Attributes {
    capabilityType?: BundleIDCapabilitiesAPI.CapabilityType;

    settings?: Array<BundleIDCapabilitiesAPI.CapabilitySetting>;
  }
}

export interface BundleIDCapabilityResponse {
  data: BundleIDCapability;

  links: AccessibilityDeclarationsAPI.DocumentLinks;
}

export interface CapabilitySetting {
  allowedInstances?: 'ENTRY' | 'SINGLE' | 'MULTIPLE';

  description?: string;

  enabledByDefault?: boolean;

  key?: 'ICLOUD_VERSION' | 'DATA_PROTECTION_PERMISSION_LEVEL' | 'APPLE_ID_AUTH_APP_CONSENT';

  minInstances?: number;

  name?: string;

  options?: Array<CapabilitySetting.Option>;

  visible?: boolean;
}

export namespace CapabilitySetting {
  export interface Option {
    description?: string;

    enabled?: boolean;

    enabledByDefault?: boolean;

    key?:
      | 'XCODE_5'
      | 'XCODE_6'
      | 'COMPLETE_PROTECTION'
      | 'PROTECTED_UNLESS_OPEN'
      | 'PROTECTED_UNTIL_FIRST_USER_AUTH'
      | 'PRIMARY_APP_CONSENT';

    name?: string;

    supportsWildcard?: boolean;
  }
}

export type CapabilityType =
  | 'ICLOUD'
  | 'IN_APP_PURCHASE'
  | 'GAME_CENTER'
  | 'PUSH_NOTIFICATIONS'
  | 'WALLET'
  | 'INTER_APP_AUDIO'
  | 'MAPS'
  | 'ASSOCIATED_DOMAINS'
  | 'PERSONAL_VPN'
  | 'APP_GROUPS'
  | 'HEALTHKIT'
  | 'HOMEKIT'
  | 'WIRELESS_ACCESSORY_CONFIGURATION'
  | 'APPLE_PAY'
  | 'DATA_PROTECTION'
  | 'SIRIKIT'
  | 'NETWORK_EXTENSIONS'
  | 'MULTIPATH'
  | 'HOT_SPOT'
  | 'NFC_TAG_READING'
  | 'CLASSKIT'
  | 'AUTOFILL_CREDENTIAL_PROVIDER'
  | 'ACCESS_WIFI_INFORMATION'
  | 'NETWORK_CUSTOM_PROTOCOL'
  | 'COREMEDIA_HLS_LOW_LATENCY'
  | 'SYSTEM_EXTENSION_INSTALL'
  | 'USER_MANAGEMENT'
  | 'APPLE_ID_AUTH';

export interface BundleIDCapabilityCreateParams {
  data: BundleIDCapabilityCreateParams.Data;
}

export namespace BundleIDCapabilityCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'bundleIdCapabilities';
  }

  export namespace Data {
    export interface Attributes {
      capabilityType: BundleIDCapabilitiesAPI.CapabilityType;

      settings?: Array<BundleIDCapabilitiesAPI.CapabilitySetting>;
    }

    export interface Relationships {
      bundleId: Relationships.BundleID;
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
    }
  }
}

export interface BundleIDCapabilityUpdateParams {
  data: BundleIDCapabilityUpdateParams.Data;
}

export namespace BundleIDCapabilityUpdateParams {
  export interface Data {
    id: string;

    type: 'bundleIdCapabilities';

    attributes?: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      capabilityType?: BundleIDCapabilitiesAPI.CapabilityType;

      settings?: Array<BundleIDCapabilitiesAPI.CapabilitySetting>;
    }
  }
}

export declare namespace BundleIDCapabilities {
  export {
    type BundleIDCapability as BundleIDCapability,
    type BundleIDCapabilityResponse as BundleIDCapabilityResponse,
    type CapabilitySetting as CapabilitySetting,
    type CapabilityType as CapabilityType,
    type BundleIDCapabilityCreateParams as BundleIDCapabilityCreateParams,
    type BundleIDCapabilityUpdateParams as BundleIDCapabilityUpdateParams,
  };
}
