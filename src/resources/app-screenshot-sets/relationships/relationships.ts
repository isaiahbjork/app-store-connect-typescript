// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AppScreenshotsAPI from './app-screenshots';
import {
  AppScreenshotRetrieveParams,
  AppScreenshotRetrieveResponse,
  AppScreenshotUpdateParams,
  AppScreenshots,
} from './app-screenshots';

export class Relationships extends APIResource {
  appScreenshots: AppScreenshotsAPI.AppScreenshots = new AppScreenshotsAPI.AppScreenshots(this._client);
}

Relationships.AppScreenshots = AppScreenshots;

export declare namespace Relationships {
  export {
    AppScreenshots as AppScreenshots,
    type AppScreenshotRetrieveResponse as AppScreenshotRetrieveResponse,
    type AppScreenshotRetrieveParams as AppScreenshotRetrieveParams,
    type AppScreenshotUpdateParams as AppScreenshotUpdateParams,
  };
}
