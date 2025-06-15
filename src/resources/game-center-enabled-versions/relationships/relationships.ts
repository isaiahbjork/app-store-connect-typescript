// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CompatibleVersionsAPI from './compatible-versions';
import {
  CompatibleVersionCreateParams,
  CompatibleVersionDeleteParams,
  CompatibleVersionRetrieveParams,
  CompatibleVersionRetrieveResponse,
  CompatibleVersionUpdateParams,
  CompatibleVersions,
  Linkages,
} from './compatible-versions';

export class Relationships extends APIResource {
  compatibleVersions: CompatibleVersionsAPI.CompatibleVersions = new CompatibleVersionsAPI.CompatibleVersions(
    this._client,
  );
}

Relationships.CompatibleVersions = CompatibleVersions;

export declare namespace Relationships {
  export {
    CompatibleVersions as CompatibleVersions,
    type Linkages as Linkages,
    type CompatibleVersionRetrieveResponse as CompatibleVersionRetrieveResponse,
    type CompatibleVersionCreateParams as CompatibleVersionCreateParams,
    type CompatibleVersionRetrieveParams as CompatibleVersionRetrieveParams,
    type CompatibleVersionUpdateParams as CompatibleVersionUpdateParams,
    type CompatibleVersionDeleteParams as CompatibleVersionDeleteParams,
  };
}
