// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VisibleAppsAPI from './visible-apps';
import {
  LinkagesRequestVisibleApps,
  VisibleAppCreateParams,
  VisibleAppDeleteParams,
  VisibleAppGetParams,
  VisibleAppGetResponse,
  VisibleAppUpdateParams,
  VisibleApps,
} from './visible-apps';

export class Relationships extends APIResource {
  visibleApps: VisibleAppsAPI.VisibleApps = new VisibleAppsAPI.VisibleApps(this._client);
}

Relationships.VisibleApps = VisibleApps;

export declare namespace Relationships {
  export {
    VisibleApps as VisibleApps,
    type LinkagesRequestVisibleApps as LinkagesRequestVisibleApps,
    type VisibleAppGetResponse as VisibleAppGetResponse,
    type VisibleAppCreateParams as VisibleAppCreateParams,
    type VisibleAppUpdateParams as VisibleAppUpdateParams,
    type VisibleAppDeleteParams as VisibleAppDeleteParams,
    type VisibleAppGetParams as VisibleAppGetParams,
  };
}
