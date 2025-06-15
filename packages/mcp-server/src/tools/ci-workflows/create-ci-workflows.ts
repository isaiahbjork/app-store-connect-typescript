// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'app-store-connect-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AppStoreConnectAPI from 'app-store-connect-api';

export const metadata: Metadata = {
  resource: 'ci_workflows',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/ciWorkflows',
  operationId: 'ciWorkflows_createInstance',
};

export const tool: Tool = {
  name: 'create_ci_workflows',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'object',
        properties: {
          attributes: {
            type: 'object',
            properties: {
              actions: {
                type: 'array',
                items: {
                  $ref: '#/$defs/ci_action',
                },
              },
              clean: {
                type: 'boolean',
              },
              containerFilePath: {
                type: 'string',
              },
              description: {
                type: 'string',
              },
              isEnabled: {
                type: 'boolean',
              },
              name: {
                type: 'string',
              },
              branchStartCondition: {
                $ref: '#/$defs/ci_branch_start_condition',
              },
              isLockedForEditing: {
                type: 'boolean',
              },
              manualBranchStartCondition: {
                $ref: '#/$defs/ci_manual_branch_start_condition',
              },
              manualPullRequestStartCondition: {
                $ref: '#/$defs/ci_manual_pull_request_start_condition',
              },
              manualTagStartCondition: {
                $ref: '#/$defs/ci_manual_tag_start_condition',
              },
              pullRequestStartCondition: {
                $ref: '#/$defs/ci_pull_request_start_condition',
              },
              scheduledStartCondition: {
                $ref: '#/$defs/ci_scheduled_start_condition',
              },
              tagStartCondition: {
                $ref: '#/$defs/ci_tag_start_condition',
              },
            },
            required: ['actions', 'clean', 'containerFilePath', 'description', 'isEnabled', 'name'],
          },
          relationships: {
            type: 'object',
            properties: {
              macOsVersion: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['ciMacOsVersions'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
              product: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['ciProducts'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
              repository: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['scmRepositories'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
              xcodeVersion: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                        enum: ['ciXcodeVersions'],
                      },
                    },
                    required: ['id', 'type'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['macOsVersion', 'product', 'repository', 'xcodeVersion'],
          },
          type: {
            type: 'string',
            enum: ['ciWorkflows'],
          },
        },
        required: ['attributes', 'relationships', 'type'],
      },
    },
    $defs: {
      ci_action: {
        type: 'object',
        properties: {
          actionType: {
            $ref: '#/$defs/ci_action_type',
          },
          buildDistributionAudience: {
            $ref: '#/$defs/build_audience_type',
          },
          destination: {
            type: 'string',
            enum: [
              'ANY_IOS_DEVICE',
              'ANY_IOS_SIMULATOR',
              'ANY_TVOS_DEVICE',
              'ANY_TVOS_SIMULATOR',
              'ANY_WATCHOS_DEVICE',
              'ANY_WATCHOS_SIMULATOR',
              'ANY_MAC',
              'ANY_MAC_CATALYST',
              'ANY_VISIONOS_DEVICE',
              'ANY_VISIONOS_SIMULATOR',
            ],
          },
          isRequiredToPass: {
            type: 'boolean',
          },
          name: {
            type: 'string',
          },
          platform: {
            type: 'string',
            enum: ['MACOS', 'IOS', 'TVOS', 'WATCHOS', 'VISIONOS'],
          },
          scheme: {
            type: 'string',
          },
          testConfiguration: {
            type: 'object',
            properties: {
              kind: {
                type: 'string',
                enum: ['USE_SCHEME_SETTINGS', 'SPECIFIC_TEST_PLANS'],
              },
              testDestinations: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    deviceTypeIdentifier: {
                      type: 'string',
                    },
                    deviceTypeName: {
                      type: 'string',
                    },
                    kind: {
                      $ref: '#/$defs/ci_test_destination_kind',
                    },
                    runtimeIdentifier: {
                      type: 'string',
                    },
                    runtimeName: {
                      type: 'string',
                    },
                  },
                  required: [],
                },
              },
              testPlanName: {
                type: 'string',
              },
            },
            required: [],
          },
        },
        required: [],
      },
      ci_action_type: {
        type: 'string',
        enum: ['BUILD', 'ANALYZE', 'TEST', 'ARCHIVE'],
      },
      build_audience_type: {
        type: 'string',
        enum: ['INTERNAL_ONLY', 'APP_STORE_ELIGIBLE'],
      },
      ci_test_destination_kind: {
        type: 'string',
        enum: ['SIMULATOR', 'MAC'],
      },
      ci_branch_start_condition: {
        type: 'object',
        properties: {
          autoCancel: {
            type: 'boolean',
          },
          filesAndFoldersRule: {
            $ref: '#/$defs/ci_files_and_folders_rule',
          },
          source: {
            $ref: '#/$defs/ci_branch_patterns',
          },
        },
        required: [],
      },
      ci_files_and_folders_rule: {
        type: 'object',
        properties: {
          matchers: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                directory: {
                  type: 'string',
                },
                fileExtension: {
                  type: 'string',
                },
                fileName: {
                  type: 'string',
                },
              },
              required: [],
            },
          },
          mode: {
            type: 'string',
            enum: ['START_IF_ANY_FILE_MATCHES', 'DO_NOT_START_IF_ALL_FILES_MATCH'],
          },
        },
        required: [],
      },
      ci_branch_patterns: {
        type: 'object',
        properties: {
          isAllMatch: {
            type: 'boolean',
          },
          patterns: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                isPrefix: {
                  type: 'boolean',
                },
                pattern: {
                  type: 'string',
                },
              },
              required: [],
            },
          },
        },
        required: [],
      },
      ci_manual_branch_start_condition: {
        type: 'object',
        properties: {
          source: {
            $ref: '#/$defs/ci_branch_patterns',
          },
        },
        required: [],
      },
      ci_manual_pull_request_start_condition: {
        type: 'object',
        properties: {
          destination: {
            $ref: '#/$defs/ci_branch_patterns',
          },
          source: {
            $ref: '#/$defs/ci_branch_patterns',
          },
        },
        required: [],
      },
      ci_manual_tag_start_condition: {
        type: 'object',
        properties: {
          source: {
            $ref: '#/$defs/ci_tag_patterns',
          },
        },
        required: [],
      },
      ci_tag_patterns: {
        type: 'object',
        properties: {
          isAllMatch: {
            type: 'boolean',
          },
          patterns: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                isPrefix: {
                  type: 'boolean',
                },
                pattern: {
                  type: 'string',
                },
              },
              required: [],
            },
          },
        },
        required: [],
      },
      ci_pull_request_start_condition: {
        type: 'object',
        properties: {
          autoCancel: {
            type: 'boolean',
          },
          destination: {
            $ref: '#/$defs/ci_branch_patterns',
          },
          filesAndFoldersRule: {
            $ref: '#/$defs/ci_files_and_folders_rule',
          },
          source: {
            $ref: '#/$defs/ci_branch_patterns',
          },
        },
        required: [],
      },
      ci_scheduled_start_condition: {
        type: 'object',
        properties: {
          schedule: {
            type: 'object',
            properties: {
              days: {
                type: 'array',
                items: {
                  type: 'string',
                  enum: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
                },
              },
              frequency: {
                type: 'string',
                enum: ['WEEKLY', 'DAILY', 'HOURLY'],
              },
              hour: {
                type: 'integer',
              },
              minute: {
                type: 'integer',
              },
              timezone: {
                type: 'string',
              },
            },
            required: [],
          },
          source: {
            $ref: '#/$defs/ci_branch_patterns',
          },
        },
        required: [],
      },
      ci_tag_start_condition: {
        type: 'object',
        properties: {
          autoCancel: {
            type: 'boolean',
          },
          filesAndFoldersRule: {
            $ref: '#/$defs/ci_files_and_folders_rule',
          },
          source: {
            $ref: '#/$defs/ci_tag_patterns',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AppStoreConnectAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.ciWorkflows.create(body));
};

export default { metadata, tool, handler };
