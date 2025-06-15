// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccessibilityDeclarationsAPI from '../accessibility-declarations';
import * as ActorsAPI from '../actors';
import * as AlternativeDistributionPackageVersionsAPI from '../alternative-distribution-package-versions/alternative-distribution-package-versions';
import * as AppPriceSchedulesAPI from '../app-price-schedules/app-price-schedules';
import * as AppsAPI from '../apps/apps';
import * as RelationshipsAPI from './relationships';
import {
  RelationshipRetrieveTerritoriesParams,
  RelationshipRetrieveTerritoriesResponse,
  Relationships as RelationshipsAPIRelationships,
} from './relationships';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EndUserLicenseAgreements extends APIResource {
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  create(
    body: EndUserLicenseAgreementCreateParams,
    options?: RequestOptions,
  ): APIPromise<EndUserLicenseAgreementResponse> {
    return this._client.post('/v1/endUserLicenseAgreements', { body, ...options });
  }

  retrieve(
    id: string,
    query: EndUserLicenseAgreementRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EndUserLicenseAgreementResponse> {
    return this._client.get(path`/v1/endUserLicenseAgreements/${id}`, { query, ...options });
  }

  update(
    id: string,
    body: EndUserLicenseAgreementUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EndUserLicenseAgreementResponse> {
    return this._client.patch(path`/v1/endUserLicenseAgreements/${id}`, { body, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/endUserLicenseAgreements/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listTerritories(
    id: string,
    query: EndUserLicenseAgreementListTerritoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EndUserLicenseAgreementListTerritoriesResponse> {
    return this._client.get(path`/v1/endUserLicenseAgreements/${id}/territories`, { query, ...options });
  }
}

export interface EndUserLicenseAgreement {
  id: string;

  type: 'endUserLicenseAgreements';

  attributes?: EndUserLicenseAgreement.Attributes;

  links?: AccessibilityDeclarationsAPI.ResourceLinks;

  relationships?: EndUserLicenseAgreement.Relationships;
}

export namespace EndUserLicenseAgreement {
  export interface Attributes {
    agreementText?: string;
  }

  export interface Relationships {
    app?: Relationships.App;

    territories?: Relationships.Territories;
  }

  export namespace Relationships {
    export interface App {
      data?: App.Data;
    }

    export namespace App {
      export interface Data {
        id: string;

        type: 'apps';
      }
    }

    export interface Territories {
      data?: Array<Territories.Data>;

      links?: AlternativeDistributionPackageVersionsAPI.RelationshipLinks;

      meta?: ActorsAPI.PagingInformation;
    }

    export namespace Territories {
      export interface Data {
        id: string;

        type: 'territories';
      }
    }
  }
}

export interface EndUserLicenseAgreementResponse {
  data: EndUserLicenseAgreement;

  links: AccessibilityDeclarationsAPI.DocumentLinks;

  included?: Array<AppsAPI.App | AppPriceSchedulesAPI.Territory>;
}

export interface EndUserLicenseAgreementListTerritoriesResponse {
  data: Array<AppPriceSchedulesAPI.Territory>;

  links: ActorsAPI.PagedDocumentLinks;

  meta?: ActorsAPI.PagingInformation;
}

export interface EndUserLicenseAgreementCreateParams {
  data: EndUserLicenseAgreementCreateParams.Data;
}

export namespace EndUserLicenseAgreementCreateParams {
  export interface Data {
    attributes: Data.Attributes;

    relationships: Data.Relationships;

    type: 'endUserLicenseAgreements';
  }

  export namespace Data {
    export interface Attributes {
      agreementText: string;
    }

    export interface Relationships {
      app: Relationships.App;

      territories: Relationships.Territories;
    }

    export namespace Relationships {
      export interface App {
        data: App.Data;
      }

      export namespace App {
        export interface Data {
          id: string;

          type: 'apps';
        }
      }

      export interface Territories {
        data: Array<Territories.Data>;
      }

      export namespace Territories {
        export interface Data {
          id: string;

          type: 'territories';
        }
      }
    }
  }
}

export interface EndUserLicenseAgreementRetrieveParams {
  /**
   * the fields to include for returned resources of type endUserLicenseAgreements
   */
  'fields[endUserLicenseAgreements]'?: Array<'agreementText' | 'app' | 'territories'>;

  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * comma-separated list of relationships to include
   */
  include?: Array<'app' | 'territories'>;

  /**
   * maximum number of related territories returned (when they are included)
   */
  'limit[territories]'?: number;
}

export interface EndUserLicenseAgreementUpdateParams {
  data: EndUserLicenseAgreementUpdateParams.Data;
}

export namespace EndUserLicenseAgreementUpdateParams {
  export interface Data {
    id: string;

    type: 'endUserLicenseAgreements';

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      agreementText?: string;
    }

    export interface Relationships {
      territories?: Relationships.Territories;
    }

    export namespace Relationships {
      export interface Territories {
        data?: Array<Territories.Data>;
      }

      export namespace Territories {
        export interface Data {
          id: string;

          type: 'territories';
        }
      }
    }
  }
}

export interface EndUserLicenseAgreementListTerritoriesParams {
  /**
   * the fields to include for returned resources of type territories
   */
  'fields[territories]'?: Array<'currency'>;

  /**
   * maximum resources per page
   */
  limit?: number;
}

EndUserLicenseAgreements.Relationships = RelationshipsAPIRelationships;

export declare namespace EndUserLicenseAgreements {
  export {
    type EndUserLicenseAgreement as EndUserLicenseAgreement,
    type EndUserLicenseAgreementResponse as EndUserLicenseAgreementResponse,
    type EndUserLicenseAgreementListTerritoriesResponse as EndUserLicenseAgreementListTerritoriesResponse,
    type EndUserLicenseAgreementCreateParams as EndUserLicenseAgreementCreateParams,
    type EndUserLicenseAgreementRetrieveParams as EndUserLicenseAgreementRetrieveParams,
    type EndUserLicenseAgreementUpdateParams as EndUserLicenseAgreementUpdateParams,
    type EndUserLicenseAgreementListTerritoriesParams as EndUserLicenseAgreementListTerritoriesParams,
  };

  export {
    RelationshipsAPIRelationships as Relationships,
    type RelationshipRetrieveTerritoriesResponse as RelationshipRetrieveTerritoriesResponse,
    type RelationshipRetrieveTerritoriesParams as RelationshipRetrieveTerritoriesParams,
  };
}
