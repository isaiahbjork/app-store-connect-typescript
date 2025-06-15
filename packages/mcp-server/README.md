# App Store Connect API TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:isaiahbjork/app-store-connect-typescript.git
cd app-store-connect-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export APP_STORE_CONNECT_API_API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://app.stainless.com/docs/guides/publish), this will become: `npx -y app-store-connect-api-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "app_store_connect_api_api": {
      "command": "node",
      "args": [
        "/path/to/local/app-store-connect-typescript/packages/mcp-server",
        "--client=claude",
        "--tools=dynamic"
      ],
      "env": {
        "APP_STORE_CONNECT_API_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "app-store-connect-api-mcp/server";

// import a specific tool
import createAccessibilityDeclarations from "app-store-connect-api-mcp/tools/accessibility-declarations/create-accessibility-declarations";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createAccessibilityDeclarations, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `accessibility_declarations`:

- `create_accessibility_declarations` (`write`):
- `retrieve_accessibility_declarations` (`read`):
- `update_accessibility_declarations` (`write`):
- `delete_accessibility_declarations` (`write`):

### Resource `actors`:

- `retrieve_actors` (`read`):
- `list_actors` (`read`):

### Resource `age_rating_declarations`:

- `update_age_rating_declarations` (`write`):

### Resource `alternative_distribution_domains`:

- `create_alternative_distribution_domains` (`write`):
- `retrieve_alternative_distribution_domains` (`read`):
- `list_alternative_distribution_domains` (`read`):
- `delete_alternative_distribution_domains` (`write`):

### Resource `alternative_distribution_keys`:

- `create_alternative_distribution_keys` (`write`):
- `retrieve_alternative_distribution_keys` (`read`):
- `list_alternative_distribution_keys` (`read`):
- `delete_alternative_distribution_keys` (`write`):

### Resource `alternative_distribution_package_deltas`:

- `retrieve_alternative_distribution_package_deltas` (`read`):

### Resource `alternative_distribution_package_variants`:

- `retrieve_alternative_distribution_package_variants` (`read`):

### Resource `alternative_distribution_package_versions`:

- `retrieve_alternative_distribution_package_versions` (`read`):
- `list_deltas_alternative_distribution_package_versions` (`read`):
- `list_variants_alternative_distribution_package_versions` (`read`):

### Resource `alternative_distribution_package_versions.relationships`:

- `list_deltas_alternative_distribution_package_versions_relationships` (`read`):
- `list_variants_alternative_distribution_package_versions_relationships` (`read`):

### Resource `alternative_distribution_packages`:

- `create_alternative_distribution_packages` (`write`):
- `retrieve_alternative_distribution_packages` (`read`):
- `list_versions_alternative_distribution_packages` (`read`):

### Resource `alternative_distribution_packages.relationships`:

- `list_versions_alternative_distribution_packages_relationships` (`read`):

### Resource `analytics_report_instances`:

- `retrieve_analytics_report_instances` (`read`):
- `list_segments_analytics_report_instances` (`read`):

### Resource `analytics_report_instances.relationships`:

- `list_segments_analytics_report_instances_relationships` (`read`):

### Resource `analytics_report_requests`:

- `create_analytics_report_requests` (`write`):
- `retrieve_analytics_report_requests` (`read`):
- `delete_analytics_report_requests` (`write`):
- `list_reports_analytics_report_requests` (`read`):

### Resource `analytics_report_requests.relationships`:

- `list_reports_analytics_report_requests_relationships` (`read`):

### Resource `analytics_report_segments`:

- `retrieve_analytics_report_segments` (`read`):

### Resource `analytics_reports`:

- `retrieve_analytics_reports` (`read`):
- `list_instances_analytics_reports` (`read`):

### Resource `analytics_reports.relationships`:

- `list_instances_analytics_reports_relationships` (`read`):

### Resource `app_availabilities`:

- `create_app_availabilities` (`write`):
- `retrieve_app_availabilities` (`read`):
- `list_territory_availabilities_app_availabilities` (`read`):

### Resource `app_availabilities.relationships`:

- `list_territory_availabilities_app_availabilities_relationships` (`read`):

### Resource `app_categories`:

- `retrieve_app_categories` (`read`):
- `list_app_categories` (`read`):
- `list_subcategories_app_categories` (`read`):
- `retrieve_parent_app_categories` (`read`):

### Resource `app_categories.relationships`:

- `list_subcategories_app_categories_relationships` (`read`):
- `retrieve_parent_app_categories_relationships` (`read`):

### Resource `app_clip_advanced_experience_images`:

- `create_app_clip_advanced_experience_images` (`write`):
- `retrieve_app_clip_advanced_experience_images` (`read`):
- `update_app_clip_advanced_experience_images` (`write`):

### Resource `app_clip_advanced_experiences`:

- `create_app_clip_advanced_experiences` (`write`):
- `retrieve_app_clip_advanced_experiences` (`read`):
- `update_app_clip_advanced_experiences` (`write`):

### Resource `app_clip_app_store_review_details`:

- `create_app_clip_app_store_review_details` (`write`):
- `retrieve_app_clip_app_store_review_details` (`read`):
- `update_app_clip_app_store_review_details` (`write`):

### Resource `app_clip_default_experience_localizations`:

- `create_app_clip_default_experience_localizations` (`write`):
- `retrieve_app_clip_default_experience_localizations` (`read`):
- `update_app_clip_default_experience_localizations` (`write`):
- `delete_app_clip_default_experience_localizations` (`write`):
- `retrieve_header_image_app_clip_default_experience_localizations` (`read`):

### Resource `app_clip_default_experience_localizations.relationships`:

- `retrieve_header_image_app_clip_default_experience_localizations_relationships` (`read`):

### Resource `app_clip_default_experiences`:

- `create_app_clip_default_experiences` (`write`):
- `retrieve_app_clip_default_experiences` (`read`):
- `update_app_clip_default_experiences` (`write`):
- `delete_app_clip_default_experiences` (`write`):
- `list_app_clip_default_experience_localizations_app_clip_default_experiences` (`read`):
- `retrieve_app_clip_app_store_review_detail_app_clip_default_experiences` (`read`):
- `retrieve_release_with_app_store_version_app_clip_default_experiences` (`read`):

### Resource `app_clip_default_experiences.relationships`:

- `list_app_clip_default_experience_localizations_app_clip_default_experiences_relationships` (`read`):
- `retrieve_app_clip_app_store_review_detail_app_clip_default_experiences_relationships` (`read`):

### Resource `app_clip_default_experiences.relationships.release_with_app_store_version`:

- `retrieve_relationships_app_clip_default_experiences_release_with_app_store_version` (`read`):
- `update_relationships_app_clip_default_experiences_release_with_app_store_version` (`write`):

### Resource `app_clip_header_images`:

- `create_app_clip_header_images` (`write`):
- `retrieve_app_clip_header_images` (`read`):
- `update_app_clip_header_images` (`write`):
- `delete_app_clip_header_images` (`write`):

### Resource `app_clips`:

- `retrieve_app_clips` (`read`):
- `list_advanced_experiences_app_clips` (`read`):
- `list_default_experiences_app_clips` (`read`):

### Resource `app_clips.relationships`:

- `retrieve_advanced_experiences_app_clips_relationships` (`read`):
- `retrieve_default_experiences_app_clips_relationships` (`read`):

### Resource `app_custom_product_page_localizations`:

- `create_app_custom_product_page_localizations` (`write`):
- `retrieve_app_custom_product_page_localizations` (`read`):
- `update_app_custom_product_page_localizations` (`write`):
- `delete_app_custom_product_page_localizations` (`write`):
- `list_app_preview_sets_app_custom_product_page_localizations` (`read`):
- `list_app_screenshot_sets_app_custom_product_page_localizations` (`read`):

### Resource `app_custom_product_page_localizations.relationships`:

- `list_app_preview_sets_app_custom_product_page_localizations_relationships` (`read`):
- `list_app_screenshot_sets_app_custom_product_page_localizations_relationships` (`read`):

### Resource `app_custom_product_page_versions`:

- `create_app_custom_product_page_versions` (`write`):
- `retrieve_app_custom_product_page_versions` (`read`):
- `update_app_custom_product_page_versions` (`write`):
- `list_localizations_app_custom_product_page_versions` (`read`):

### Resource `app_custom_product_page_versions.relationships`:

- `list_localizations_app_custom_product_page_versions_relationships` (`read`):

### Resource `app_custom_product_pages`:

- `create_app_custom_product_pages` (`write`):
- `retrieve_app_custom_product_pages` (`read`):
- `update_app_custom_product_pages` (`write`):
- `delete_app_custom_product_pages` (`write`):
- `list_versions_app_custom_product_pages` (`read`):

### Resource `app_custom_product_pages.relationships`:

- `list_versions_app_custom_product_pages_relationships` (`read`):

### Resource `app_encryption_declaration_documents`:

- `create_app_encryption_declaration_documents` (`write`):
- `retrieve_app_encryption_declaration_documents` (`read`):
- `update_app_encryption_declaration_documents` (`write`):

### Resource `app_encryption_declarations`:

- `create_app_encryption_declarations` (`write`):
- `retrieve_app_encryption_declarations` (`read`):
- `list_app_encryption_declarations` (`read`):
- `retrieve_app_app_encryption_declarations` (`read`):
- `retrieve_app_encryption_declaration_document_app_encryption_declarations` (`read`):

### Resource `app_encryption_declarations.relationships`:

- `create_build_app_encryption_declarations_relationships` (`write`):
- `retrieve_app_app_encryption_declarations_relationships` (`read`):
- `retrieve_app_encryption_declaration_document_app_encryption_declarations_relationships` (`read`):

### Resource `app_event_localizations`:

- `create_app_event_localizations` (`write`):
- `retrieve_app_event_localizations` (`read`):
- `update_app_event_localizations` (`write`):
- `delete_app_event_localizations` (`write`):
- `list_screenshots_app_event_localizations` (`read`):
- `list_video_clips_app_event_localizations` (`read`):

### Resource `app_event_localizations.relationships`:

- `list_screenshots_app_event_localizations_relationships` (`read`):
- `list_video_clips_app_event_localizations_relationships` (`read`):

### Resource `app_event_screenshots`:

- `create_app_event_screenshots` (`write`):
- `retrieve_app_event_screenshots` (`read`):
- `update_app_event_screenshots` (`write`):
- `delete_app_event_screenshots` (`write`):

### Resource `app_event_video_clips`:

- `create_app_event_video_clips` (`write`):
- `retrieve_app_event_video_clips` (`read`):
- `update_app_event_video_clips` (`write`):
- `delete_app_event_video_clips` (`write`):

### Resource `app_events`:

- `create_app_events` (`write`):
- `retrieve_app_events` (`read`):
- `update_app_events` (`write`):
- `delete_app_events` (`write`):
- `list_localizations_app_events` (`read`):

### Resource `app_events.relationships`:

- `list_localizations_app_events_relationships` (`read`):

### Resource `app_info_localizations`:

- `create_app_info_localizations` (`write`):
- `retrieve_app_info_localizations` (`read`):
- `update_app_info_localizations` (`write`):
- `delete_app_info_localizations` (`write`):

### Resource `app_infos`:

- `retrieve_app_infos` (`read`):
- `update_app_infos` (`write`):
- `list_app_info_localizations_app_infos` (`read`):
- `retrieve_age_rating_declaration_app_infos` (`read`):
- `retrieve_primary_category_app_infos` (`read`):
- `retrieve_primary_subcategory_one_app_infos` (`read`):
- `retrieve_primary_subcategory_two_app_infos` (`read`):
- `retrieve_secondary_category_app_infos` (`read`):
- `retrieve_secondary_subcategory_one_app_infos` (`read`):
- `retrieve_secondary_subcategory_two_app_infos` (`read`):

### Resource `app_infos.relationships`:

- `list_app_info_localizations_app_infos_relationships` (`read`):
- `retrieve_age_rating_declaration_app_infos_relationships` (`read`):
- `retrieve_primary_category_app_infos_relationships` (`read`):
- `retrieve_primary_subcategory_one_app_infos_relationships` (`read`):
- `retrieve_primary_subcategory_two_app_infos_relationships` (`read`):
- `retrieve_secondary_category_app_infos_relationships` (`read`):
- `retrieve_secondary_subcategory_one_app_infos_relationships` (`read`):
- `retrieve_secondary_subcategory_two_app_infos_relationships` (`read`):

### Resource `app_preview_sets`:

- `create_app_preview_sets` (`write`):
- `retrieve_app_preview_sets` (`read`):
- `delete_app_preview_sets` (`write`):
- `list_app_previews_app_preview_sets` (`read`):

### Resource `app_preview_sets.relationships.app_previews`:

- `retrieve_relationships_app_preview_sets_app_previews` (`read`):
- `update_relationships_app_preview_sets_app_previews` (`write`):

### Resource `app_previews`:

- `create_app_previews` (`write`):
- `retrieve_app_previews` (`read`):
- `update_app_previews` (`write`):
- `delete_app_previews` (`write`):

### Resource `app_price_points`:

- `retrieve_app_price_points` (`read`):
- `list_equalizations_app_price_points` (`read`):

### Resource `app_price_points.relationships`:

- `list_equalizations_app_price_points_relationships` (`read`):

### Resource `app_price_schedules`:

- `create_app_price_schedules` (`write`):
- `retrieve_app_price_schedules` (`read`):
- `list_automatic_prices_app_price_schedules` (`read`):
- `list_manual_prices_app_price_schedules` (`read`):
- `retrieve_base_territory_app_price_schedules` (`read`):

### Resource `app_price_schedules.relationships`:

- `list_automatic_prices_app_price_schedules_relationships` (`read`):
- `list_manual_prices_app_price_schedules_relationships` (`read`):
- `retrieve_base_territory_app_price_schedules_relationships` (`read`):

### Resource `app_screenshot_sets`:

- `create_app_screenshot_sets` (`write`):
- `retrieve_app_screenshot_sets` (`read`):
- `delete_app_screenshot_sets` (`write`):
- `list_app_screenshots_app_screenshot_sets` (`read`):

### Resource `app_screenshot_sets.relationships.app_screenshots`:

- `retrieve_relationships_app_screenshot_sets_app_screenshots` (`read`):
- `update_relationships_app_screenshot_sets_app_screenshots` (`write`):

### Resource `app_screenshots`:

- `create_app_screenshots` (`write`):
- `retrieve_app_screenshots` (`read`):
- `update_app_screenshots` (`write`):
- `delete_app_screenshots` (`write`):

### Resource `app_store_review_attachments`:

- `create_app_store_review_attachments` (`write`):
- `retrieve_app_store_review_attachments` (`read`):
- `update_app_store_review_attachments` (`write`):
- `delete_app_store_review_attachments` (`write`):

### Resource `app_store_review_details`:

- `create_app_store_review_details` (`write`):
- `retrieve_app_store_review_details` (`read`):
- `update_app_store_review_details` (`write`):
- `list_attachments_app_store_review_details` (`read`):

### Resource `app_store_review_details.relationships`:

- `list_attachments_app_store_review_details_relationships` (`read`):

### Resource `app_store_version_experiment_treatment_localizations`:

- `create_app_store_version_experiment_treatment_localizations` (`write`):
- `retrieve_app_store_version_experiment_treatment_localizations` (`read`):
- `delete_app_store_version_experiment_treatment_localizations` (`write`):
- `list_app_preview_sets_app_store_version_experiment_treatment_localizations` (`read`):
- `list_app_screenshot_sets_app_store_version_experiment_treatment_localizations` (`read`):

### Resource `app_store_version_experiment_treatment_localizations.relationships`:

- `list_app_preview_sets_app_store_version_experiment_treatment_localizations_relationships` (`read`):
- `list_app_screenshot_sets_app_store_version_experiment_treatment_localizations_relationships` (`read`):

### Resource `app_store_version_experiment_treatments`:

- `create_app_store_version_experiment_treatments` (`write`):
- `retrieve_app_store_version_experiment_treatments` (`read`):
- `update_app_store_version_experiment_treatments` (`write`):
- `delete_app_store_version_experiment_treatments` (`write`):
- `list_localizations_app_store_version_experiment_treatments` (`read`):

### Resource `app_store_version_experiment_treatments.relationships`:

- `list_localizations_app_store_version_experiment_treatments_relationships` (`read`):

### Resource `app_store_version_experiments`:

- `create_app_store_version_experiments` (`write`):
- `retrieve_app_store_version_experiments` (`read`):
- `update_app_store_version_experiments` (`write`):
- `delete_app_store_version_experiments` (`write`):

### Resource `app_store_version_experiments.relationships.app_store_version_experiment_treatments`:

- `retrieve_relationships_app_store_version_experiments_app_store_version_experiment_treatments` (`read`):

### Resource `app_store_version_experiments.app_store_version_experiment_treatments`:

- `list_app_store_version_experiments_app_store_version_experiment_treatments` (`read`):

### Resource `app_store_version_localizations`:

- `create_app_store_version_localizations` (`write`):
- `retrieve_app_store_version_localizations` (`read`):
- `update_app_store_version_localizations` (`write`):
- `delete_app_store_version_localizations` (`write`):
- `list_app_preview_sets_app_store_version_localizations` (`read`):
- `list_app_screenshot_sets_app_store_version_localizations` (`read`):

### Resource `app_store_version_localizations.relationships`:

- `list_app_preview_sets_app_store_version_localizations_relationships` (`read`):
- `list_app_screenshot_sets_app_store_version_localizations_relationships` (`read`):

### Resource `app_store_version_phased_releases`:

- `create_app_store_version_phased_releases` (`write`):
- `update_app_store_version_phased_releases` (`write`):
- `delete_app_store_version_phased_releases` (`write`):

### Resource `app_store_version_promotions`:

- `create_app_store_version_promotions` (`write`):

### Resource `app_store_version_release_requests`:

- `create_app_store_version_release_requests` (`write`):

### Resource `app_store_version_submissions`:

- `delete_app_store_version_submissions` (`write`):

### Resource `app_store_versions`:

- `create_app_store_versions` (`write`):
- `retrieve_app_store_versions` (`read`):
- `update_app_store_versions` (`write`):
- `delete_app_store_versions` (`write`):
- `retrieve_age_rating_declaration_app_store_versions` (`read`):
- `retrieve_alternative_distribution_package_app_store_versions` (`read`):
- `retrieve_app_clip_default_experience_app_store_versions` (`read`):
- `retrieve_app_store_review_detail_app_store_versions` (`read`):
- `retrieve_app_store_version_experiments_app_store_versions` (`read`):
- `retrieve_app_store_version_experiments_v2_app_store_versions` (`read`):
- `retrieve_app_store_version_localizations_app_store_versions` (`read`):
- `retrieve_app_store_version_phased_release_app_store_versions` (`read`):
- `retrieve_app_store_version_submission_app_store_versions` (`read`):
- `retrieve_build_app_store_versions` (`read`):
- `retrieve_customer_reviews_app_store_versions` (`read`):
- `retrieve_game_center_app_version_app_store_versions` (`read`):
- `retrieve_routing_app_coverage_app_store_versions` (`read`):

### Resource `app_store_versions.relationships`:

- `retrieve_age_rating_declaration_app_store_versions_relationships` (`read`):
- `retrieve_alternative_distribution_package_app_store_versions_relationships` (`read`):
- `retrieve_app_store_review_detail_app_store_versions_relationships` (`read`):
- `retrieve_app_store_version_experiments_app_store_versions_relationships` (`read`):
- `retrieve_app_store_version_experiments_v2_app_store_versions_relationships` (`read`):
- `retrieve_app_store_version_localizations_app_store_versions_relationships` (`read`):
- `retrieve_app_store_version_phased_release_app_store_versions_relationships` (`read`):
- `retrieve_app_store_version_submission_app_store_versions_relationships` (`read`):
- `retrieve_customer_reviews_app_store_versions_relationships` (`read`):
- `retrieve_game_center_app_version_app_store_versions_relationships` (`read`):
- `retrieve_routing_app_coverage_app_store_versions_relationships` (`read`):

### Resource `app_store_versions.relationships.app_clip_default_experience`:

- `retrieve_relationships_app_store_versions_app_clip_default_experience` (`read`):
- `update_relationships_app_store_versions_app_clip_default_experience` (`write`):

### Resource `app_store_versions.relationships.build`:

- `retrieve_relationships_app_store_versions_build` (`read`):
- `update_relationships_app_store_versions_build` (`write`):

### Resource `apps`:

- `retrieve_apps` (`read`):
- `update_apps` (`write`):
- `list_apps` (`read`):
- `retrieve_accessibility_declarations_apps` (`read`):
- `retrieve_alternative_distribution_key_apps` (`read`):
- `retrieve_analytics_report_requests_apps` (`read`):
- `retrieve_app_availability_v2_apps` (`read`):
- `retrieve_app_clips_apps` (`read`):
- `retrieve_app_custom_product_pages_apps` (`read`):
- `retrieve_app_encryption_declarations_apps` (`read`):
- `retrieve_app_events_apps` (`read`):
- `retrieve_app_infos_apps` (`read`):
- `retrieve_app_price_points_apps` (`read`):
- `retrieve_app_price_schedule_apps` (`read`):
- `retrieve_app_store_version_experiments_v2_apps` (`read`):
- `retrieve_app_store_versions_apps` (`read`):
- `retrieve_background_assets_apps` (`read`):
- `retrieve_beta_app_localizations_apps` (`read`):
- `retrieve_beta_app_review_detail_apps` (`read`):
- `retrieve_beta_feedback_crash_submissions_apps` (`read`):
- `retrieve_beta_feedback_screenshot_submissions_apps` (`read`):
- `retrieve_beta_groups_apps` (`read`):
- `retrieve_beta_license_agreement_apps` (`read`):
- `retrieve_builds_apps` (`read`):
- `retrieve_ci_product_apps` (`read`):
- `retrieve_customer_review_summarizations_apps` (`read`):
- `retrieve_customer_reviews_apps` (`read`):
- `retrieve_end_user_license_agreement_apps` (`read`):
- `retrieve_game_center_detail_apps` (`read`):
- `retrieve_game_center_enabled_versions_apps` (`read`):
- `retrieve_in_app_purchases_apps` (`read`):
- `retrieve_in_app_purchases_v2_apps` (`read`):
- `retrieve_marketplace_search_detail_apps` (`read`):
- `retrieve_perf_power_metrics_apps` (`read`):
- `retrieve_pre_release_versions_apps` (`read`):
- `retrieve_promoted_purchases_apps` (`read`):
- `retrieve_review_submissions_apps` (`read`):
- `retrieve_subscription_grace_period_apps` (`read`):
- `retrieve_subscription_groups_apps` (`read`):
- `retrieve_webhooks_apps` (`read`):

### Resource `apps.relationships`:

- `delete_beta_testers_apps_relationships` (`write`):
- `retrieve_accessibility_declarations_apps_relationships` (`read`):
- `retrieve_alternative_distribution_key_apps_relationships` (`read`):
- `retrieve_analytics_report_requests_apps_relationships` (`read`):
- `retrieve_app_availability_v2_apps_relationships` (`read`):
- `retrieve_app_clips_apps_relationships` (`read`):
- `retrieve_app_custom_product_pages_apps_relationships` (`read`):
- `retrieve_app_encryption_declarations_apps_relationships` (`read`):
- `retrieve_app_events_apps_relationships` (`read`):
- `retrieve_app_infos_apps_relationships` (`read`):
- `retrieve_app_price_points_apps_relationships` (`read`):
- `retrieve_app_price_schedule_apps_relationships` (`read`):
- `retrieve_app_store_version_experiments_v2_apps_relationships` (`read`):
- `retrieve_app_store_versions_apps_relationships` (`read`):
- `retrieve_background_assets_apps_relationships` (`read`):
- `retrieve_beta_app_localizations_apps_relationships` (`read`):
- `retrieve_beta_app_review_detail_apps_relationships` (`read`):
- `retrieve_beta_feedback_crash_submissions_apps_relationships` (`read`):
- `retrieve_beta_feedback_screenshot_submissions_apps_relationships` (`read`):
- `retrieve_beta_groups_apps_relationships` (`read`):
- `retrieve_beta_license_agreement_apps_relationships` (`read`):
- `retrieve_builds_apps_relationships` (`read`):
- `retrieve_ci_product_apps_relationships` (`read`):
- `retrieve_customer_reviews_apps_relationships` (`read`):
- `retrieve_end_user_license_agreement_apps_relationships` (`read`):
- `retrieve_game_center_detail_apps_relationships` (`read`):
- `retrieve_game_center_enabled_versions_apps_relationships` (`read`):
- `retrieve_in_app_purchases_apps_relationships` (`read`):
- `retrieve_in_app_purchases_v2_apps_relationships` (`read`):
- `retrieve_marketplace_search_detail_apps_relationships` (`read`):
- `retrieve_pre_release_versions_apps_relationships` (`read`):
- `retrieve_review_submissions_apps_relationships` (`read`):
- `retrieve_subscription_grace_period_apps_relationships` (`read`):
- `retrieve_subscription_groups_apps_relationships` (`read`):
- `retrieve_webhooks_apps_relationships` (`read`):

### Resource `apps.relationships.promoted_purchases`:

- `retrieve_promoted_purchases_relationships_apps_promoted_purchases` (`read`):
- `update_promoted_purchases_relationships_apps_promoted_purchases` (`write`):

### Resource `apps.metrics`:

- `retrieve_beta_tester_usages_apps_metrics` (`read`):

### Resource `background_asset_upload_files`:

- `create_background_asset_upload_files` (`write`):
- `retrieve_background_asset_upload_files` (`read`):
- `update_background_asset_upload_files` (`write`):

### Resource `background_asset_version_internal_beta_releases`:

- `retrieve_background_asset_version_internal_beta_releases` (`read`):

### Resource `background_asset_versions`:

- `create_background_asset_versions` (`write`):
- `retrieve_background_asset_versions` (`read`):
- `list_upload_files_background_asset_versions` (`read`):

### Resource `background_asset_versions.relationships`:

- `list_upload_files_background_asset_versions_relationships` (`read`):

### Resource `background_assets`:

- `create_background_assets` (`write`):
- `retrieve_background_assets` (`read`):
- `list_versions_background_assets` (`read`):

### Resource `background_assets.relationships`:

- `list_versions_background_assets_relationships` (`read`):

### Resource `beta_app_clip_invocation_localizations`:

- `create_beta_app_clip_invocation_localizations` (`write`):
- `update_beta_app_clip_invocation_localizations` (`write`):
- `delete_beta_app_clip_invocation_localizations` (`write`):

### Resource `beta_app_clip_invocations`:

- `create_beta_app_clip_invocations` (`write`):
- `retrieve_beta_app_clip_invocations` (`read`):
- `update_beta_app_clip_invocations` (`write`):
- `delete_beta_app_clip_invocations` (`write`):

### Resource `beta_app_localizations`:

- `create_beta_app_localizations` (`write`):
- `retrieve_beta_app_localizations` (`read`):
- `update_beta_app_localizations` (`write`):
- `list_beta_app_localizations` (`read`):
- `delete_beta_app_localizations` (`write`):
- `retrieve_app_beta_app_localizations` (`read`):

### Resource `beta_app_localizations.relationships`:

- `retrieve_app_beta_app_localizations_relationships` (`read`):

### Resource `beta_app_review_details`:

- `retrieve_beta_app_review_details` (`read`):
- `update_beta_app_review_details` (`write`):
- `list_beta_app_review_details` (`read`):
- `retrieve_app_beta_app_review_details` (`read`):

### Resource `beta_app_review_details.relationships`:

- `retrieve_app_beta_app_review_details_relationships` (`read`):

### Resource `beta_app_review_submissions`:

- `create_beta_app_review_submissions` (`write`):
- `retrieve_beta_app_review_submissions` (`read`):
- `list_beta_app_review_submissions` (`read`):
- `retrieve_build_beta_app_review_submissions` (`read`):

### Resource `beta_app_review_submissions.relationships`:

- `retrieve_build_beta_app_review_submissions_relationships` (`read`):

### Resource `beta_build_localizations`:

- `create_beta_build_localizations` (`write`):
- `retrieve_beta_build_localizations` (`read`):
- `update_beta_build_localizations` (`write`):
- `list_beta_build_localizations` (`read`):
- `delete_beta_build_localizations` (`write`):
- `retrieve_build_beta_build_localizations` (`read`):

### Resource `beta_build_localizations.relationships`:

- `retrieve_build_beta_build_localizations_relationships` (`read`):

### Resource `beta_crash_logs`:

- `retrieve_beta_crash_logs` (`read`):

### Resource `beta_feedback_crash_submissions`:

- `retrieve_beta_feedback_crash_submissions` (`read`):
- `delete_beta_feedback_crash_submissions` (`write`):
- `get_crash_log_beta_feedback_crash_submissions` (`read`):

### Resource `beta_feedback_crash_submissions.relationships`:

- `get_crash_log_beta_feedback_crash_submissions_relationships` (`read`):

### Resource `beta_feedback_screenshot_submissions`:

- `retrieve_beta_feedback_screenshot_submissions` (`read`):
- `delete_beta_feedback_screenshot_submissions` (`write`):

### Resource `beta_groups`:

- `create_beta_groups` (`write`):
- `retrieve_beta_groups` (`read`):
- `update_beta_groups` (`write`):
- `list_beta_groups` (`read`):
- `delete_beta_groups` (`write`):
- `check_beta_recruitment_criterion_compatible_build_beta_groups` (`read`):
- `list_beta_recruitment_criteria_beta_groups` (`read`):
- `retrieve_app_beta_groups` (`read`):

### Resource `beta_groups.relationships`:

- `check_beta_recruitment_criterion_compatible_build_beta_groups_relationships` (`read`):
- `list_beta_recruitment_criteria_beta_groups_relationships` (`read`):
- `list_beta_testers_beta_groups_relationships` (`read`):
- `list_builds_beta_groups_relationships` (`read`):
- `retrieve_app_beta_groups_relationships` (`read`):

### Resource `beta_groups.relationships.beta_testers`:

- `list_relationships_beta_groups_beta_testers` (`read`):
- `add_relationships_beta_groups_beta_testers` (`write`):
- `remove_relationships_beta_groups_beta_testers` (`write`):

### Resource `beta_groups.relationships.builds`:

- `list_relationships_beta_groups_builds` (`read`):
- `add_relationships_beta_groups_builds` (`write`):
- `remove_relationships_beta_groups_builds` (`write`):

### Resource `beta_groups.metrics`:

- `list_beta_tester_usages_beta_groups_metrics` (`read`):
- `list_public_link_usages_beta_groups_metrics` (`read`):

### Resource `beta_license_agreements`:

- `retrieve_beta_license_agreements` (`read`):
- `update_beta_license_agreements` (`write`):
- `list_beta_license_agreements` (`read`):
- `retrieve_app_beta_license_agreements` (`read`):

### Resource `beta_license_agreements.relationships`:

- `retrieve_app_beta_license_agreements_relationships` (`read`):

### Resource `beta_recruitment_criteria`:

- `create_beta_recruitment_criteria` (`write`):
- `update_beta_recruitment_criteria` (`write`):
- `delete_beta_recruitment_criteria` (`write`):

### Resource `beta_recruitment_criterion_options`:

- `list_beta_recruitment_criterion_options` (`read`):

### Resource `beta_tester_invitations`:

- `create_beta_tester_invitations` (`write`):

### Resource `beta_testers`:

- `create_beta_testers` (`write`):
- `retrieve_beta_testers` (`read`):
- `list_beta_testers` (`read`):
- `delete_beta_testers` (`write`):
- `list_apps_beta_testers` (`read`):
- `list_beta_groups_beta_testers` (`read`):
- `list_builds_beta_testers` (`read`):

### Resource `beta_testers.relationships.apps`:

- `list_relationships_beta_testers_apps` (`read`):
- `delete_relationships_beta_testers_apps` (`write`):

### Resource `beta_testers.relationships.beta_groups`:

- `create_relationships_beta_testers_beta_groups` (`write`):
- `list_relationships_beta_testers_beta_groups` (`read`):
- `delete_relationships_beta_testers_beta_groups` (`write`):

### Resource `beta_testers.relationships.builds`:

- `create_relationships_beta_testers_builds` (`write`):
- `list_relationships_beta_testers_builds` (`read`):
- `delete_relationships_beta_testers_builds` (`write`):

### Resource `beta_testers.metrics`:

- `get_beta_tester_usages_beta_testers_metrics` (`read`):

### Resource `build_beta_details`:

- `retrieve_build_beta_details` (`read`):
- `update_build_beta_details` (`write`):
- `list_build_beta_details` (`read`):
- `retrieve_build_build_beta_details` (`read`):

### Resource `build_beta_details.relationships`:

- `retrieve_build_build_beta_details_relationships` (`read`):

### Resource `build_beta_notifications`:

- `create_build_beta_notifications` (`write`):

### Resource `builds`:

- `retrieve_builds` (`read`):
- `update_builds` (`write`):
- `list_builds` (`read`):
- `retrieve_app_builds` (`read`):
- `retrieve_app_store_version_builds` (`read`):
- `retrieve_beta_app_review_submission_builds` (`read`):
- `retrieve_beta_build_localizations_builds` (`read`):
- `retrieve_build_beta_detail_builds` (`read`):
- `retrieve_diagnostic_signatures_builds` (`read`):
- `retrieve_icons_builds` (`read`):
- `retrieve_individual_testers_builds` (`read`):
- `retrieve_perf_power_metrics_builds` (`read`):
- `retrieve_pre_release_version_builds` (`read`):

### Resource `builds.relationships`:

- `retrieve_app_builds_relationships` (`read`):
- `retrieve_app_encryption_declaration_builds_relationships` (`read`):
- `retrieve_app_store_version_builds_relationships` (`read`):
- `retrieve_beta_app_review_submission_builds_relationships` (`read`):
- `retrieve_beta_build_localizations_builds_relationships` (`read`):
- `retrieve_build_beta_detail_builds_relationships` (`read`):
- `retrieve_diagnostic_signatures_builds_relationships` (`read`):
- `retrieve_icons_builds_relationships` (`read`):
- `retrieve_pre_release_version_builds_relationships` (`read`):

### Resource `builds.relationships.app_encryption_declaration`:

- `retrieve_relationships_builds_app_encryption_declaration` (`read`):
- `update_relationships_builds_app_encryption_declaration` (`write`):

### Resource `builds.relationships.beta_groups`:

- `create_relationships_builds_beta_groups` (`write`):
- `delete_relationships_builds_beta_groups` (`write`):

### Resource `builds.relationships.individual_testers`:

- `create_relationships_builds_individual_testers` (`write`):
- `retrieve_relationships_builds_individual_testers` (`read`):
- `delete_relationships_builds_individual_testers` (`write`):

### Resource `builds.metrics`:

- `retrieve_beta_build_usages_builds_metrics` (`read`):

### Resource `bundle_id_capabilities`:

- `create_bundle_id_capabilities` (`write`):
- `update_bundle_id_capabilities` (`write`):
- `delete_bundle_id_capabilities` (`write`):

### Resource `bundle_ids`:

- `create_bundle_ids` (`write`):
- `retrieve_bundle_ids` (`read`):
- `update_bundle_ids` (`write`):
- `list_bundle_ids` (`read`):
- `delete_bundle_ids` (`write`):
- `retrieve_app_bundle_ids` (`read`):
- `retrieve_bundle_id_capabilities_bundle_ids` (`read`):
- `retrieve_profiles_bundle_ids` (`read`):

### Resource `bundle_ids.relationships`:

- `retrieve_app_bundle_ids_relationships` (`read`):
- `retrieve_bundle_id_capabilities_bundle_ids_relationships` (`read`):
- `retrieve_profiles_bundle_ids_relationships` (`read`):

### Resource `certificates`:

- `create_certificates` (`write`):
- `retrieve_certificates` (`read`):
- `update_certificates` (`write`):
- `list_certificates` (`read`):
- `delete_certificates` (`write`):
- `retrieve_pass_type_id_certificates` (`read`):

### Resource `certificates.relationships`:

- `retrieve_pass_type_id_certificates_relationships` (`read`):

### Resource `ci_artifacts`:

- `retrieve_ci_artifacts` (`read`):

### Resource `ci_build_actions`:

- `retrieve_ci_build_actions` (`read`):
- `list_artifacts_ci_build_actions` (`read`):
- `list_issues_ci_build_actions` (`read`):
- `list_test_results_ci_build_actions` (`read`):
- `retrieve_build_run_ci_build_actions` (`read`):

### Resource `ci_build_actions.relationships`:

- `list_artifacts_ci_build_actions_relationships` (`read`):
- `list_issues_ci_build_actions_relationships` (`read`):
- `list_test_results_ci_build_actions_relationships` (`read`):
- `retrieve_build_run_ci_build_actions_relationships` (`read`):

### Resource `ci_build_runs`:

- `create_ci_build_runs` (`write`):
- `retrieve_ci_build_runs` (`read`):
- `list_actions_ci_build_runs` (`read`):
- `list_builds_ci_build_runs` (`read`):

### Resource `ci_build_runs.relationships`:

- `list_actions_ci_build_runs_relationships` (`read`):
- `list_builds_ci_build_runs_relationships` (`read`):

### Resource `ci_issues`:

- `retrieve_ci_issues` (`read`):

### Resource `ci_mac_os_versions`:

- `retrieve_ci_mac_os_versions` (`read`):
- `list_ci_mac_os_versions` (`read`):
- `list_xcode_versions_ci_mac_os_versions` (`read`):

### Resource `ci_mac_os_versions.relationships`:

- `retrieve_xcode_versions_ci_mac_os_versions_relationships` (`read`):

### Resource `ci_products`:

- `retrieve_ci_products` (`read`):
- `list_ci_products` (`read`):
- `delete_ci_products` (`write`):
- `list_build_runs_ci_products` (`read`):
- `list_workflows_ci_products` (`read`):
- `retrieve_additional_repositories_ci_products` (`read`):
- `retrieve_app_ci_products` (`read`):
- `retrieve_primary_repositories_ci_products` (`read`):

### Resource `ci_products.relationships`:

- `list_build_runs_ci_products_relationships` (`read`):
- `list_workflows_ci_products_relationships` (`read`):
- `retrieve_additional_repositories_ci_products_relationships` (`read`):
- `retrieve_app_ci_products_relationships` (`read`):
- `retrieve_primary_repositories_ci_products_relationships` (`read`):

### Resource `ci_test_results`:

- `retrieve_ci_test_results` (`read`):

### Resource `ci_workflows`:

- `create_ci_workflows` (`write`):
- `retrieve_ci_workflows` (`read`):
- `update_ci_workflows` (`write`):
- `delete_ci_workflows` (`write`):
- `list_build_runs_ci_workflows` (`read`):
- `retrieve_repository_ci_workflows` (`read`):

### Resource `ci_workflows.relationships`:

- `list_build_runs_ci_workflows_relationships` (`read`):
- `retrieve_repository_ci_workflows_relationships` (`read`):

### Resource `ci_xcode_versions`:

- `retrieve_ci_xcode_versions` (`read`):
- `list_ci_xcode_versions` (`read`):
- `list_mac_os_versions_ci_xcode_versions` (`read`):

### Resource `ci_xcode_versions.relationships`:

- `retrieve_mac_os_versions_ci_xcode_versions_relationships` (`read`):

### Resource `customer_review_responses`:

- `create_customer_review_responses` (`write`):
- `retrieve_customer_review_responses` (`read`):
- `delete_customer_review_responses` (`write`):

### Resource `customer_reviews`:

- `retrieve_customer_reviews` (`read`):
- `retrieve_response_customer_reviews` (`read`):

### Resource `customer_reviews.relationships`:

- `retrieve_response_customer_reviews_relationships` (`read`):

### Resource `devices`:

- `create_devices` (`write`):
- `retrieve_devices` (`read`):
- `update_devices` (`write`):
- `list_devices` (`read`):

### Resource `end_app_availability_pre_orders`:

- `create_end_app_availability_pre_orders` (`write`):

### Resource `end_user_license_agreements`:

- `create_end_user_license_agreements` (`write`):
- `retrieve_end_user_license_agreements` (`read`):
- `update_end_user_license_agreements` (`write`):
- `delete_end_user_license_agreements` (`write`):
- `list_territories_end_user_license_agreements` (`read`):

### Resource `end_user_license_agreements.relationships`:

- `retrieve_territories_end_user_license_agreements_relationships` (`read`):

### Resource `finance_reports`:

- `list_finance_reports` (`read`):

### Resource `game_center_achievement_images`:

- `create_game_center_achievement_images` (`write`):
- `retrieve_game_center_achievement_images` (`read`):
- `update_game_center_achievement_images` (`write`):
- `delete_game_center_achievement_images` (`write`):

### Resource `game_center_achievement_localizations`:

- `create_game_center_achievement_localizations` (`write`):
- `retrieve_game_center_achievement_localizations` (`read`):
- `update_game_center_achievement_localizations` (`write`):
- `delete_game_center_achievement_localizations` (`write`):
- `retrieve_game_center_achievement_game_center_achievement_localizations` (`read`):
- `retrieve_game_center_achievement_image_game_center_achievement_localizations` (`read`):

### Resource `game_center_achievement_localizations.relationships`:

- `retrieve_game_center_achievement_game_center_achievement_localizations_relationships` (`read`):
- `retrieve_game_center_achievement_image_game_center_achievement_localizations_relationships` (`read`):

### Resource `game_center_achievement_releases`:

- `create_game_center_achievement_releases` (`write`):
- `retrieve_game_center_achievement_releases` (`read`):
- `delete_game_center_achievement_releases` (`write`):

### Resource `game_center_achievements`:

- `create_game_center_achievements` (`write`):
- `retrieve_game_center_achievements` (`read`):
- `update_game_center_achievements` (`write`):
- `delete_game_center_achievements` (`write`):
- `list_localizations_game_center_achievements` (`read`):
- `list_releases_game_center_achievements` (`read`):

### Resource `game_center_achievements.relationships`:

- `list_localizations_game_center_achievements_relationships` (`read`):
- `list_releases_game_center_achievements_relationships` (`read`):
- `update_activity_game_center_achievements_relationships` (`write`):

### Resource `game_center_achievements.relationships.group_achievement`:

- `retrieve_relationships_game_center_achievements_group_achievement` (`read`):
- `update_relationships_game_center_achievements_group_achievement` (`write`):

### Resource `game_center_activities`:

- `create_game_center_activities` (`write`):
- `retrieve_game_center_activities` (`read`):
- `update_game_center_activities` (`write`):
- `delete_game_center_activities` (`write`):
- `list_versions_game_center_activities` (`read`):

### Resource `game_center_activities.relationships`:

- `list_versions_game_center_activities_relationships` (`read`):

### Resource `game_center_activities.relationships.achievements`:

- `create_relationships_game_center_activities_achievements` (`write`):
- `delete_relationships_game_center_activities_achievements` (`write`):

### Resource `game_center_activities.relationships.leaderboards`:

- `create_relationships_game_center_activities_leaderboards` (`write`):
- `delete_relationships_game_center_activities_leaderboards` (`write`):

### Resource `game_center_activity_images`:

- `create_game_center_activity_images` (`write`):
- `retrieve_game_center_activity_images` (`read`):
- `update_game_center_activity_images` (`write`):
- `delete_game_center_activity_images` (`write`):

### Resource `game_center_activity_localizations`:

- `create_game_center_activity_localizations` (`write`):
- `retrieve_game_center_activity_localizations` (`read`):
- `update_game_center_activity_localizations` (`write`):
- `delete_game_center_activity_localizations` (`write`):
- `retrieve_image_game_center_activity_localizations` (`read`):

### Resource `game_center_activity_localizations.relationships`:

- `retrieve_image_game_center_activity_localizations_relationships` (`read`):

### Resource `game_center_activity_version_releases`:

- `create_game_center_activity_version_releases` (`write`):
- `retrieve_game_center_activity_version_releases` (`read`):
- `delete_game_center_activity_version_releases` (`write`):

### Resource `game_center_activity_versions`:

- `create_game_center_activity_versions` (`write`):
- `retrieve_game_center_activity_versions` (`read`):
- `update_game_center_activity_versions` (`write`):
- `list_localizations_game_center_activity_versions` (`read`):
- `retrieve_default_image_game_center_activity_versions` (`read`):

### Resource `game_center_activity_versions.relationships`:

- `list_localizations_game_center_activity_versions_relationships` (`read`):
- `retrieve_default_image_game_center_activity_versions_relationships` (`read`):

### Resource `game_center_app_versions`:

- `create_game_center_app_versions` (`write`):
- `retrieve_game_center_app_versions` (`read`):
- `update_game_center_app_versions` (`write`):
- `list_compatibility_versions_game_center_app_versions` (`read`):
- `retrieve_app_store_version_game_center_app_versions` (`read`):

### Resource `game_center_app_versions.relationships`:

- `retrieve_app_store_version_game_center_app_versions_relationships` (`read`):

### Resource `game_center_app_versions.relationships.compatibility_versions`:

- `create_relationships_game_center_app_versions_compatibility_versions` (`write`):
- `list_relationships_game_center_app_versions_compatibility_versions` (`read`):
- `delete_relationships_game_center_app_versions_compatibility_versions` (`write`):

### Resource `game_center_challenge_images`:

- `create_game_center_challenge_images` (`write`):
- `retrieve_game_center_challenge_images` (`read`):
- `update_game_center_challenge_images` (`write`):
- `delete_game_center_challenge_images` (`write`):

### Resource `game_center_challenge_localizations`:

- `create_game_center_challenge_localizations` (`write`):
- `retrieve_game_center_challenge_localizations` (`read`):
- `update_game_center_challenge_localizations` (`write`):
- `delete_game_center_challenge_localizations` (`write`):
- `retrieve_image_game_center_challenge_localizations` (`read`):

### Resource `game_center_challenge_localizations.relationships`:

- `retrieve_image_game_center_challenge_localizations_relationships` (`read`):

### Resource `game_center_challenge_version_releases`:

- `create_game_center_challenge_version_releases` (`write`):
- `retrieve_game_center_challenge_version_releases` (`read`):
- `delete_game_center_challenge_version_releases` (`write`):

### Resource `game_center_challenge_versions`:

- `create_game_center_challenge_versions` (`write`):
- `retrieve_game_center_challenge_versions` (`read`):
- `list_localizations_game_center_challenge_versions` (`read`):
- `retrieve_default_image_game_center_challenge_versions` (`read`):

### Resource `game_center_challenge_versions.relationships`:

- `list_localizations_game_center_challenge_versions_relationships` (`read`):
- `retrieve_default_image_game_center_challenge_versions_relationships` (`read`):

### Resource `game_center_challenges`:

- `create_game_center_challenges` (`write`):
- `retrieve_game_center_challenges` (`read`):
- `update_game_center_challenges` (`write`):
- `delete_game_center_challenges` (`write`):
- `list_versions_game_center_challenges` (`read`):

### Resource `game_center_challenges.relationships`:

- `list_versions_game_center_challenges_relationships` (`read`):
- `update_leaderboard_game_center_challenges_relationships` (`write`):

### Resource `game_center_details`:

- `retrieve_game_center_details` (`read`):
- `update_game_center_details` (`write`):
- `game_center_details_game_center_details` (`write`):
- `retrieve_achievement_releases_game_center_details` (`read`):
- `retrieve_activity_releases_game_center_details` (`read`):
- `retrieve_challenge_releases_game_center_details` (`read`):
- `retrieve_game_center_achievements_game_center_details` (`read`):
- `retrieve_game_center_activities_game_center_details` (`read`):
- `retrieve_game_center_app_versions_game_center_details` (`read`):
- `retrieve_game_center_challenges_game_center_details` (`read`):
- `retrieve_game_center_group_game_center_details` (`read`):
- `retrieve_game_center_leaderboard_sets_game_center_details` (`read`):
- `retrieve_game_center_leaderboards_game_center_details` (`read`):
- `retrieve_leaderboard_releases_game_center_details` (`read`):
- `retrieve_leaderboard_set_releases_game_center_details` (`read`):

### Resource `game_center_details.relationships`:

- `retrieve_achievement_releases_game_center_details_relationships` (`read`):
- `retrieve_activity_releases_game_center_details_relationships` (`read`):
- `retrieve_challenge_releases_game_center_details_relationships` (`read`):
- `retrieve_game_center_activities_game_center_details_relationships` (`read`):
- `retrieve_game_center_app_versions_game_center_details_relationships` (`read`):
- `retrieve_game_center_challenges_game_center_details_relationships` (`read`):
- `retrieve_game_center_group_game_center_details_relationships` (`read`):
- `retrieve_leaderboard_releases_game_center_details_relationships` (`read`):
- `retrieve_leaderboard_set_releases_game_center_details_relationships` (`read`):
- `update_challenges_minimum_platform_versions_game_center_details_relationships` (`write`):

### Resource `game_center_details.relationships.game_center_achievements`:

- `retrieve_game_center_achievements_relationships_game_center_details_game_center_achievements` (`read`):
- `update_game_center_achievements_relationships_game_center_details_game_center_achievements` (`write`):

### Resource `game_center_details.relationships.game_center_leaderboard_sets`:

- `retrieve_game_center_leaderboard_sets_relationships_game_center_details_game_center_leaderboard_sets` (`read`):
- `update_game_center_leaderboard_sets_relationships_game_center_details_game_center_leaderboard_sets` (`write`):

### Resource `game_center_details.relationships.game_center_leaderboards`:

- `retrieve_game_center_leaderboards_relationships_game_center_details_game_center_leaderboards` (`read`):
- `update_game_center_leaderboards_relationships_game_center_details_game_center_leaderboards` (`write`):

### Resource `game_center_details.metrics`:

- `retrieve_classic_matchmaking_requests_game_center_details_metrics` (`read`):
- `retrieve_rule_based_matchmaking_requests_game_center_details_metrics` (`read`):

### Resource `game_center_groups`:

- `create_game_center_groups` (`write`):
- `retrieve_game_center_groups` (`read`):
- `update_game_center_groups` (`write`):
- `list_game_center_groups` (`read`):
- `delete_game_center_groups` (`write`):
- `list_game_center_achievements_game_center_groups` (`read`):
- `list_game_center_activities_game_center_groups` (`read`):
- `list_game_center_challenges_game_center_groups` (`read`):
- `list_game_center_leaderboard_sets_game_center_groups` (`read`):
- `list_game_center_leaderboards_game_center_groups` (`read`):
- `retrieve_game_center_details_game_center_groups` (`read`):

### Resource `game_center_groups.relationships.game_center_achievements`:

- `update_relationships_game_center_groups_game_center_achievements` (`write`):
- `list_relationships_game_center_groups_game_center_achievements` (`read`):

### Resource `game_center_groups.relationships.game_center_activities`:

- `list_relationships_game_center_groups_game_center_activities` (`read`):

### Resource `game_center_groups.relationships.game_center_challenges`:

- `list_relationships_game_center_groups_game_center_challenges` (`read`):

### Resource `game_center_groups.relationships.game_center_details`:

- `retrieve_relationships_game_center_groups_game_center_details` (`read`):

### Resource `game_center_groups.relationships.game_center_leaderboard_sets`:

- `update_relationships_game_center_groups_game_center_leaderboard_sets` (`write`):
- `list_relationships_game_center_groups_game_center_leaderboard_sets` (`read`):

### Resource `game_center_groups.relationships.game_center_leaderboards`:

- `update_relationships_game_center_groups_game_center_leaderboards` (`write`):
- `list_relationships_game_center_groups_game_center_leaderboards` (`read`):

### Resource `game_center_leaderboard_entry_submissions`:

- `create_game_center_leaderboard_entry_submissions` (`write`):

### Resource `game_center_leaderboard_images`:

- `create_game_center_leaderboard_images` (`write`):
- `retrieve_game_center_leaderboard_images` (`read`):
- `update_game_center_leaderboard_images` (`write`):
- `delete_game_center_leaderboard_images` (`write`):

### Resource `game_center_leaderboard_localizations`:

- `create_game_center_leaderboard_localizations` (`write`):
- `retrieve_game_center_leaderboard_localizations` (`read`):
- `update_game_center_leaderboard_localizations` (`write`):
- `delete_game_center_leaderboard_localizations` (`write`):
- `retrieve_game_center_leaderboard_image_game_center_leaderboard_localizations` (`read`):

### Resource `game_center_leaderboard_localizations.relationships`:

- `retrieve_game_center_leaderboard_image_game_center_leaderboard_localizations_relationships` (`read`):

### Resource `game_center_leaderboard_releases`:

- `create_game_center_leaderboard_releases` (`write`):
- `retrieve_game_center_leaderboard_releases` (`read`):
- `delete_game_center_leaderboard_releases` (`write`):

### Resource `game_center_leaderboard_set_images`:

- `create_game_center_leaderboard_set_images` (`write`):
- `retrieve_game_center_leaderboard_set_images` (`read`):
- `update_game_center_leaderboard_set_images` (`write`):
- `delete_game_center_leaderboard_set_images` (`write`):

### Resource `game_center_leaderboard_set_localizations`:

- `create_game_center_leaderboard_set_localizations` (`write`):
- `retrieve_game_center_leaderboard_set_localizations` (`read`):
- `update_game_center_leaderboard_set_localizations` (`write`):
- `delete_game_center_leaderboard_set_localizations` (`write`):
- `retrieve_image_game_center_leaderboard_set_localizations` (`read`):

### Resource `game_center_leaderboard_set_localizations.relationships`:

- `retrieve_image_game_center_leaderboard_set_localizations_relationships` (`read`):

### Resource `game_center_leaderboard_set_member_localizations`:

- `create_game_center_leaderboard_set_member_localizations` (`write`):
- `update_game_center_leaderboard_set_member_localizations` (`write`):
- `list_game_center_leaderboard_set_member_localizations` (`read`):
- `delete_game_center_leaderboard_set_member_localizations` (`write`):
- `retrieve_game_center_leaderboard_game_center_leaderboard_set_member_localizations` (`read`):
- `retrieve_game_center_leaderboard_set_game_center_leaderboard_set_member_localizations` (`read`):

### Resource `game_center_leaderboard_set_member_localizations.relationships`:

- `retrieve_game_center_leaderboard_game_center_leaderboard_set_member_localizations_relationships` (`read`):
- `retrieve_game_center_leaderboard_set_game_center_leaderboard_set_member_localizations_relationships` (`read`):

### Resource `game_center_leaderboard_set_releases`:

- `create_game_center_leaderboard_set_releases` (`write`):
- `retrieve_game_center_leaderboard_set_releases` (`read`):
- `delete_game_center_leaderboard_set_releases` (`write`):

### Resource `game_center_leaderboard_sets`:

- `create_game_center_leaderboard_sets` (`write`):
- `retrieve_game_center_leaderboard_sets` (`read`):
- `update_game_center_leaderboard_sets` (`write`):
- `delete_game_center_leaderboard_sets` (`write`):
- `list_game_center_leaderboards_game_center_leaderboard_sets` (`read`):
- `list_localizations_game_center_leaderboard_sets` (`read`):
- `list_releases_game_center_leaderboard_sets` (`read`):
- `retrieve_group_leaderboard_set_game_center_leaderboard_sets` (`read`):

### Resource `game_center_leaderboard_sets.relationships`:

- `list_localizations_game_center_leaderboard_sets_relationships` (`read`):
- `list_releases_game_center_leaderboard_sets_relationships` (`read`):

### Resource `game_center_leaderboard_sets.relationships.game_center_leaderboards`:

- `create_relationships_game_center_leaderboard_sets_game_center_leaderboards` (`write`):
- `update_relationships_game_center_leaderboard_sets_game_center_leaderboards` (`write`):
- `list_relationships_game_center_leaderboard_sets_game_center_leaderboards` (`read`):
- `delete_relationships_game_center_leaderboard_sets_game_center_leaderboards` (`write`):

### Resource `game_center_leaderboard_sets.relationships.group_leaderboard_set`:

- `retrieve_relationships_game_center_leaderboard_sets_group_leaderboard_set` (`read`):
- `update_relationships_game_center_leaderboard_sets_group_leaderboard_set` (`write`):

### Resource `game_center_leaderboards`:

- `create_game_center_leaderboards` (`write`):
- `retrieve_game_center_leaderboards` (`read`):
- `update_game_center_leaderboards` (`write`):
- `delete_game_center_leaderboards` (`write`):
- `list_localizations_game_center_leaderboards` (`read`):
- `list_releases_game_center_leaderboards` (`read`):

### Resource `game_center_leaderboards.relationships`:

- `list_localizations_game_center_leaderboards_relationships` (`read`):
- `list_releases_game_center_leaderboards_relationships` (`read`):
- `update_activity_game_center_leaderboards_relationships` (`write`):
- `update_challenge_game_center_leaderboards_relationships` (`write`):

### Resource `game_center_leaderboards.relationships.group_leaderboard`:

- `retrieve_relationships_game_center_leaderboards_group_leaderboard` (`read`):
- `update_relationships_game_center_leaderboards_group_leaderboard` (`write`):

### Resource `game_center_matchmaking_queues`:

- `create_game_center_matchmaking_queues` (`write`):
- `retrieve_game_center_matchmaking_queues` (`read`):
- `update_game_center_matchmaking_queues` (`write`):
- `list_game_center_matchmaking_queues` (`read`):
- `delete_game_center_matchmaking_queues` (`write`):

### Resource `game_center_matchmaking_queues.metrics`:

- `get_experiment_queue_sizes_game_center_matchmaking_queues_metrics` (`read`):
- `get_experiment_requests_game_center_matchmaking_queues_metrics` (`read`):
- `get_queue_sizes_game_center_matchmaking_queues_metrics` (`read`):
- `get_requests_game_center_matchmaking_queues_metrics` (`read`):
- `get_sessions_game_center_matchmaking_queues_metrics` (`read`):

### Resource `game_center_matchmaking_rule_set_tests`:

- `create_game_center_matchmaking_rule_set_tests` (`write`):

### Resource `game_center_matchmaking_rule_sets`:

- `create_game_center_matchmaking_rule_sets` (`write`):
- `retrieve_game_center_matchmaking_rule_sets` (`read`):
- `update_game_center_matchmaking_rule_sets` (`write`):
- `list_game_center_matchmaking_rule_sets` (`read`):
- `delete_game_center_matchmaking_rule_sets` (`write`):
- `list_matchmaking_queues_game_center_matchmaking_rule_sets` (`read`):
- `list_rules_game_center_matchmaking_rule_sets` (`read`):
- `list_teams_game_center_matchmaking_rule_sets` (`read`):

### Resource `game_center_matchmaking_rule_sets.relationships`:

- `list_matchmaking_queues_game_center_matchmaking_rule_sets_relationships` (`read`):
- `list_rules_game_center_matchmaking_rule_sets_relationships` (`read`):
- `list_teams_game_center_matchmaking_rule_sets_relationships` (`read`):

### Resource `game_center_matchmaking_rules`:

- `create_game_center_matchmaking_rules` (`write`):
- `update_game_center_matchmaking_rules` (`write`):
- `delete_game_center_matchmaking_rules` (`write`):

### Resource `game_center_matchmaking_rules.metrics`:

- `retrieve_boolean_rule_results_game_center_matchmaking_rules_metrics` (`read`):
- `retrieve_number_rule_results_game_center_matchmaking_rules_metrics` (`read`):
- `retrieve_rule_errors_game_center_matchmaking_rules_metrics` (`read`):

### Resource `game_center_matchmaking_teams`:

- `create_game_center_matchmaking_teams` (`write`):
- `update_game_center_matchmaking_teams` (`write`):
- `delete_game_center_matchmaking_teams` (`write`):

### Resource `game_center_player_achievement_submissions`:

- `create_game_center_player_achievement_submissions` (`write`):

### Resource `in_app_purchase_app_store_review_screenshots`:

- `create_in_app_purchase_app_store_review_screenshots` (`write`):
- `retrieve_in_app_purchase_app_store_review_screenshots` (`read`):
- `update_in_app_purchase_app_store_review_screenshots` (`write`):
- `delete_in_app_purchase_app_store_review_screenshots` (`write`):

### Resource `in_app_purchase_availabilities`:

- `create_in_app_purchase_availabilities` (`write`):
- `retrieve_in_app_purchase_availabilities` (`read`):
- `list_available_territories_in_app_purchase_availabilities` (`read`):

### Resource `in_app_purchase_availabilities.relationships`:

- `list_available_territories_in_app_purchase_availabilities_relationships` (`read`):

### Resource `in_app_purchase_contents`:

- `retrieve_in_app_purchase_contents` (`read`):

### Resource `in_app_purchase_images`:

- `create_in_app_purchase_images` (`write`):
- `retrieve_in_app_purchase_images` (`read`):
- `update_in_app_purchase_images` (`write`):
- `delete_in_app_purchase_images` (`write`):

### Resource `in_app_purchase_localizations`:

- `create_in_app_purchase_localizations` (`write`):
- `retrieve_in_app_purchase_localizations` (`read`):
- `update_in_app_purchase_localizations` (`write`):
- `delete_in_app_purchase_localizations` (`write`):

### Resource `in_app_purchase_price_schedules`:

- `create_in_app_purchase_price_schedules` (`write`):
- `retrieve_in_app_purchase_price_schedules` (`read`):
- `list_automatic_prices_in_app_purchase_price_schedules` (`read`):
- `list_manual_prices_in_app_purchase_price_schedules` (`read`):
- `retrieve_base_territory_in_app_purchase_price_schedules` (`read`):

### Resource `in_app_purchase_price_schedules.relationships`:

- `list_automatic_prices_in_app_purchase_price_schedules_relationships` (`read`):
- `list_manual_prices_in_app_purchase_price_schedules_relationships` (`read`):
- `retrieve_base_territory_in_app_purchase_price_schedules_relationships` (`read`):

### Resource `in_app_purchase_submissions`:

- `create_in_app_purchase_submissions` (`write`):

### Resource `in_app_purchases`:

- `retrieve_in_app_purchases` (`read`):
- `update_in_app_purchases` (`write`):
- `delete_in_app_purchases` (`write`):
- `in_app_purchases_in_app_purchases` (`write`):
- `retrieve_app_store_review_screenshot_in_app_purchases` (`read`):
- `retrieve_content_in_app_purchases` (`read`):
- `retrieve_iap_price_schedule_in_app_purchases` (`read`):
- `retrieve_images_in_app_purchases` (`read`):
- `retrieve_in_app_purchase_availability_in_app_purchases` (`read`):
- `retrieve_in_app_purchase_localizations_in_app_purchases` (`read`):
- `retrieve_price_points_in_app_purchases` (`read`):
- `retrieve_promoted_purchase_in_app_purchases` (`read`):

### Resource `in_app_purchases.relationships`:

- `retrieve_app_store_review_screenshot_in_app_purchases_relationships` (`read`):
- `retrieve_content_in_app_purchases_relationships` (`read`):
- `retrieve_iap_price_schedule_in_app_purchases_relationships` (`read`):
- `retrieve_images_in_app_purchases_relationships` (`read`):
- `retrieve_in_app_purchase_availability_in_app_purchases_relationships` (`read`):
- `retrieve_in_app_purchase_localizations_in_app_purchases_relationships` (`read`):
- `retrieve_price_points_in_app_purchases_relationships` (`read`):
- `retrieve_promoted_purchase_in_app_purchases_relationships` (`read`):

### Resource `marketplace_search_details`:

- `create_marketplace_search_details` (`write`):
- `update_marketplace_search_details` (`write`):
- `delete_marketplace_search_details` (`write`):

### Resource `marketplace_webhooks`:

- `create_marketplace_webhooks` (`write`):
- `update_marketplace_webhooks` (`write`):
- `list_marketplace_webhooks` (`read`):
- `delete_marketplace_webhooks` (`write`):

### Resource `merchant_ids`:

- `create_merchant_ids` (`write`):
- `retrieve_merchant_ids` (`read`):
- `update_merchant_ids` (`write`):
- `list_merchant_ids` (`read`):
- `delete_merchant_ids` (`write`):
- `list_certificates_merchant_ids` (`read`):

### Resource `merchant_ids.relationships`:

- `list_certificates_merchant_ids_relationships` (`read`):

### Resource `nominations`:

- `create_nominations` (`write`):
- `retrieve_nominations` (`read`):
- `update_nominations` (`write`):
- `list_nominations` (`read`):
- `delete_nominations` (`write`):

### Resource `pass_type_ids`:

- `create_pass_type_ids` (`write`):
- `retrieve_pass_type_ids` (`read`):
- `update_pass_type_ids` (`write`):
- `list_pass_type_ids` (`read`):
- `delete_pass_type_ids` (`write`):
- `list_certificates_pass_type_ids` (`read`):

### Resource `pass_type_ids.relationships`:

- `list_certificates_pass_type_ids_relationships` (`read`):

### Resource `pre_release_versions`:

- `retrieve_pre_release_versions` (`read`):
- `list_pre_release_versions` (`read`):
- `list_builds_pre_release_versions` (`read`):
- `retrieve_app_pre_release_versions` (`read`):

### Resource `pre_release_versions.relationships`:

- `list_builds_pre_release_versions_relationships` (`read`):
- `retrieve_app_pre_release_versions_relationships` (`read`):

### Resource `profiles`:

- `create_profiles` (`write`):
- `retrieve_profiles` (`read`):
- `list_profiles` (`read`):
- `delete_profiles` (`write`):
- `list_certificates_profiles` (`read`):
- `list_devices_profiles` (`read`):
- `retrieve_bundle_id_profiles` (`read`):

### Resource `profiles.relationships`:

- `list_certificates_profiles_relationships` (`read`):
- `list_devices_profiles_relationships` (`read`):
- `retrieve_bundle_id_profiles_relationships` (`read`):

### Resource `promoted_purchases`:

- `create_promoted_purchases` (`write`):
- `retrieve_promoted_purchases` (`read`):
- `update_promoted_purchases` (`write`):
- `delete_promoted_purchases` (`write`):

### Resource `review_submission_items`:

- `create_review_submission_items` (`write`):
- `update_review_submission_items` (`write`):
- `delete_review_submission_items` (`write`):

### Resource `review_submissions`:

- `create_review_submissions` (`write`):
- `retrieve_review_submissions` (`read`):
- `update_review_submissions` (`write`):
- `list_review_submissions` (`read`):
- `list_items_review_submissions` (`read`):

### Resource `review_submissions.relationships`:

- `list_items_review_submissions_relationships` (`read`):

### Resource `routing_app_coverages`:

- `create_routing_app_coverages` (`write`):
- `retrieve_routing_app_coverages` (`read`):
- `update_routing_app_coverages` (`write`):
- `delete_routing_app_coverages` (`write`):

### Resource `sales_reports`:

- `list_sales_reports` (`read`):

### Resource `sandbox_testers`:

- `update_sandbox_testers` (`write`):
- `list_sandbox_testers` (`read`):

### Resource `sandbox_testers_clear_purchase_history_request`:

- `create_sandbox_testers_clear_purchase_history_request` (`write`):

### Resource `scm_git_references`:

- `retrieve_scm_git_references` (`read`):

### Resource `scm_providers`:

- `retrieve_scm_providers` (`read`):
- `list_scm_providers` (`read`):
- `list_repositories_scm_providers` (`read`):

### Resource `scm_providers.relationships`:

- `list_repositories_scm_providers_relationships` (`read`):

### Resource `scm_pull_requests`:

- `retrieve_scm_pull_requests` (`read`):

### Resource `scm_repositories`:

- `retrieve_scm_repositories` (`read`):
- `list_scm_repositories` (`read`):
- `list_git_references_scm_repositories` (`read`):
- `list_pull_requests_scm_repositories` (`read`):

### Resource `scm_repositories.relationships`:

- `list_git_references_scm_repositories_relationships` (`read`):
- `list_pull_requests_scm_repositories_relationships` (`read`):

### Resource `subscription_app_store_review_screenshots`:

- `create_subscription_app_store_review_screenshots` (`write`):
- `retrieve_subscription_app_store_review_screenshots` (`read`):
- `update_subscription_app_store_review_screenshots` (`write`):
- `delete_subscription_app_store_review_screenshots` (`write`):

### Resource `subscription_availabilities`:

- `create_subscription_availabilities` (`write`):
- `retrieve_subscription_availabilities` (`read`):
- `list_available_territories_subscription_availabilities` (`read`):

### Resource `subscription_availabilities.relationships`:

- `list_available_territories_subscription_availabilities_relationships` (`read`):

### Resource `subscription_grace_periods`:

- `retrieve_subscription_grace_periods` (`read`):
- `update_subscription_grace_periods` (`write`):

### Resource `subscription_group_localizations`:

- `create_subscription_group_localizations` (`write`):
- `retrieve_subscription_group_localizations` (`read`):
- `update_subscription_group_localizations` (`write`):
- `delete_subscription_group_localizations` (`write`):

### Resource `subscription_group_submissions`:

- `create_subscription_group_submissions` (`write`):

### Resource `subscription_groups`:

- `create_subscription_groups` (`write`):
- `retrieve_subscription_groups` (`read`):
- `update_subscription_groups` (`write`):
- `delete_subscription_groups` (`write`):
- `list_localizations_subscription_groups` (`read`):
- `list_subscriptions_subscription_groups` (`read`):

### Resource `subscription_groups.relationships`:

- `list_localizations_subscription_groups_relationships` (`read`):
- `list_subscriptions_subscription_groups_relationships` (`read`):

### Resource `subscription_images`:

- `create_subscription_images` (`write`):
- `retrieve_subscription_images` (`read`):
- `update_subscription_images` (`write`):
- `delete_subscription_images` (`write`):

### Resource `subscription_introductory_offers`:

- `create_subscription_introductory_offers` (`write`):
- `update_subscription_introductory_offers` (`write`):
- `delete_subscription_introductory_offers` (`write`):

### Resource `subscription_localizations`:

- `create_subscription_localizations` (`write`):
- `retrieve_subscription_localizations` (`read`):
- `update_subscription_localizations` (`write`):
- `delete_subscription_localizations` (`write`):

### Resource `subscription_offer_code_custom_codes`:

- `create_subscription_offer_code_custom_codes` (`write`):
- `retrieve_subscription_offer_code_custom_codes` (`read`):
- `update_subscription_offer_code_custom_codes` (`write`):

### Resource `subscription_offer_code_one_time_use_codes`:

- `create_subscription_offer_code_one_time_use_codes` (`write`):
- `retrieve_subscription_offer_code_one_time_use_codes` (`read`):
- `update_subscription_offer_code_one_time_use_codes` (`write`):
- `list_values_subscription_offer_code_one_time_use_codes` (`read`):

### Resource `subscription_offer_codes`:

- `create_subscription_offer_codes` (`write`):
- `retrieve_subscription_offer_codes` (`read`):
- `update_subscription_offer_codes` (`write`):
- `list_custom_codes_subscription_offer_codes` (`read`):
- `list_one_time_use_codes_subscription_offer_codes` (`read`):
- `list_prices_subscription_offer_codes` (`read`):

### Resource `subscription_offer_codes.relationships`:

- `list_custom_codes_subscription_offer_codes_relationships` (`read`):
- `list_one_time_use_codes_subscription_offer_codes_relationships` (`read`):
- `list_prices_subscription_offer_codes_relationships` (`read`):

### Resource `subscription_price_points`:

- `retrieve_subscription_price_points` (`read`):
- `list_equalizations_subscription_price_points` (`read`):

### Resource `subscription_price_points.relationships`:

- `list_equalizations_subscription_price_points_relationships` (`read`):

### Resource `subscription_prices`:

- `create_subscription_prices` (`write`):
- `delete_subscription_prices` (`write`):

### Resource `subscription_promotional_offers`:

- `create_subscription_promotional_offers` (`write`):
- `retrieve_subscription_promotional_offers` (`read`):
- `update_subscription_promotional_offers` (`write`):
- `delete_subscription_promotional_offers` (`write`):
- `list_prices_subscription_promotional_offers` (`read`):

### Resource `subscription_promotional_offers.relationships`:

- `list_prices_subscription_promotional_offers_relationships` (`read`):

### Resource `subscription_submissions`:

- `create_subscription_submissions` (`write`):

### Resource `subscriptions`:

- `create_subscriptions` (`write`):
- `retrieve_subscriptions` (`read`):
- `update_subscriptions` (`write`):
- `delete_subscriptions` (`write`):
- `check_subscription_availability_subscriptions` (`read`):
- `list_images_subscriptions` (`read`):
- `list_introductory_offers_subscriptions` (`read`):
- `list_offer_codes_subscriptions` (`read`):
- `list_price_points_subscriptions` (`read`):
- `list_prices_subscriptions` (`read`):
- `list_promotional_offers_subscriptions` (`read`):
- `list_subscription_localizations_subscriptions` (`read`):
- `list_win_back_offers_subscriptions` (`read`):
- `retrieve_app_store_review_screenshot_subscriptions` (`read`):
- `retrieve_promoted_purchase_subscriptions` (`read`):

### Resource `subscriptions.relationships`:

- `check_subscription_availability_subscriptions_relationships` (`read`):
- `list_images_subscriptions_relationships` (`read`):
- `list_promotional_offers_subscriptions_relationships` (`read`):
- `list_subscription_localizations_subscriptions_relationships` (`read`):
- `list_win_back_offers_subscriptions_relationships` (`read`):
- `retrieve_app_store_review_screenshot_subscriptions_relationships` (`read`):
- `retrieve_promoted_purchase_subscriptions_relationships` (`read`):

### Resource `subscriptions.relationships.introductory_offers`:

- `list_relationships_subscriptions_introductory_offers` (`read`):
- `delete_relationships_subscriptions_introductory_offers` (`write`):

### Resource `subscriptions.relationships.offer_codes`:

- `list_relationships_subscriptions_offer_codes` (`read`):

### Resource `subscriptions.relationships.price_points`:

- `list_relationships_subscriptions_price_points` (`read`):

### Resource `subscriptions.relationships.prices`:

- `list_relationships_subscriptions_prices` (`read`):
- `delete_relationships_subscriptions_prices` (`write`):

### Resource `territories`:

- `list_territories` (`read`):

### Resource `territory_availabilities`:

- `update_territory_availabilities` (`write`):

### Resource `user_invitations`:

- `create_user_invitations` (`write`):
- `retrieve_user_invitations` (`read`):
- `list_user_invitations` (`read`):
- `delete_user_invitations` (`write`):
- `retrieve_visible_apps_user_invitations` (`read`):

### Resource `user_invitations.relationships`:

- `retrieve_visible_apps_user_invitations_relationships` (`read`):

### Resource `users`:

- `retrieve_users` (`read`):
- `update_users` (`write`):
- `list_users` (`read`):
- `delete_users` (`write`):
- `get_visible_apps_users` (`read`):

### Resource `users.relationships.visible_apps`:

- `create_relationships_users_visible_apps` (`write`):
- `update_relationships_users_visible_apps` (`write`):
- `delete_relationships_users_visible_apps` (`write`):
- `get_relationships_users_visible_apps` (`read`):

### Resource `webhook_deliveries`:

- `create_webhook_deliveries` (`write`):

### Resource `webhook_pings`:

- `create_webhook_pings` (`write`):

### Resource `webhooks`:

- `create_webhooks` (`write`):
- `retrieve_webhooks` (`read`):
- `update_webhooks` (`write`):
- `delete_webhooks` (`write`):
- `list_deliveries_webhooks` (`read`):

### Resource `webhooks.relationships`:

- `list_deliveries_webhooks_relationships` (`read`):

### Resource `win_back_offers`:

- `create_win_back_offers` (`write`):
- `retrieve_win_back_offers` (`read`):
- `update_win_back_offers` (`write`):
- `delete_win_back_offers` (`write`):
- `list_prices_win_back_offers` (`read`):

### Resource `win_back_offers.relationships`:

- `list_prices_win_back_offers_relationships` (`read`):

### Resource `build_bundles`:

- `retrieve_app_clip_domain_cache_status_build_bundles` (`read`):
- `retrieve_app_clip_domain_debug_status_build_bundles` (`read`):
- `retrieve_beta_app_clip_invocations_build_bundles` (`read`):
- `retrieve_build_bundle_file_sizes_build_bundles` (`read`):

### Resource `build_bundles.relationships`:

- `retrieve_app_clip_domain_cache_status_build_bundles_relationships` (`read`):
- `retrieve_app_clip_domain_debug_status_build_bundles_relationships` (`read`):
- `retrieve_beta_app_clip_invocations_build_bundles_relationships` (`read`):
- `retrieve_build_bundle_file_sizes_build_bundles_relationships` (`read`):

### Resource `diagnostic_signatures`:

- `retrieve_logs_diagnostic_signatures` (`read`):

### Resource `game_center_enabled_versions`:

- `list_compatible_versions_game_center_enabled_versions` (`read`):

### Resource `game_center_enabled_versions.relationships.compatible_versions`:

- `create_relationships_game_center_enabled_versions_compatible_versions` (`write`):
- `retrieve_relationships_game_center_enabled_versions_compatible_versions` (`read`):
- `update_relationships_game_center_enabled_versions_compatible_versions` (`write`):
- `delete_relationships_game_center_enabled_versions_compatible_versions` (`write`):

### Resource `in_app_purchase_price_points`:

- `list_equalizations_in_app_purchase_price_points` (`read`):

### Resource `in_app_purchase_price_points.relationships`:

- `retrieve_equalizations_in_app_purchase_price_points_relationships` (`read`):
