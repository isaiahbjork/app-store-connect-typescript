// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AppPreviewsAPI from './app-previews';
import {
  AppPreviewRetrieveParams,
  AppPreviewRetrieveResponse,
  AppPreviewUpdateParams,
  AppPreviews,
} from './app-previews';

export class Relationships extends APIResource {
  appPreviews: AppPreviewsAPI.AppPreviews = new AppPreviewsAPI.AppPreviews(this._client);
}

Relationships.AppPreviews = AppPreviews;

export declare namespace Relationships {
  export {
    AppPreviews as AppPreviews,
    type AppPreviewRetrieveResponse as AppPreviewRetrieveResponse,
    type AppPreviewRetrieveParams as AppPreviewRetrieveParams,
    type AppPreviewUpdateParams as AppPreviewUpdateParams,
  };
}
