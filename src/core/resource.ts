// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { AppStoreConnectAPI } from '../client';

export abstract class APIResource {
  protected _client: AppStoreConnectAPI;

  constructor(client: AppStoreConnectAPI) {
    this._client = client;
  }
}
