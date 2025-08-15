# Changelog

## 0.1.0-alpha.3 (2025-08-15)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/isaiahbjork/app-store-connect-typescript/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **client:** add support for endpoint-specific base URLs ([c8430e5](https://github.com/isaiahbjork/app-store-connect-typescript/commit/c8430e5fb4420a2b27ffea0ed33e11e36e78d6cb))
* **mcp:** add logging when environment variable is set ([f9ea2b3](https://github.com/isaiahbjork/app-store-connect-typescript/commit/f9ea2b33fa8a9be6bab26c1f708a2ea4a55dbf3c))
* **mcp:** add unix socket option for remote MCP ([18dbc5a](https://github.com/isaiahbjork/app-store-connect-typescript/commit/18dbc5ae1625525ebf2c374be7da55fab8460b02))
* **mcp:** fallback for void-typed methods ([f6562e3](https://github.com/isaiahbjork/app-store-connect-typescript/commit/f6562e39c09688e26fa7ab306e1d39a8e7e94e69))
* **mcp:** remote server with passthru auth ([6eeeeab](https://github.com/isaiahbjork/app-store-connect-typescript/commit/6eeeeabdf8395c44fb82cd93491071c39e5ee421))
* **mcp:** support filtering tool results by a jq expression ([0302eab](https://github.com/isaiahbjork/app-store-connect-typescript/commit/0302eab5e9a0202a7c409d999b1d567b16ae7990))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([a296a8e](https://github.com/isaiahbjork/app-store-connect-typescript/commit/a296a8eef02d45aa72ca85c78f27adf176c38c70))
* **client:** explicitly copy fetch in withOptions ([2f56a4f](https://github.com/isaiahbjork/app-store-connect-typescript/commit/2f56a4f47d98126de7a34d8ee52adb010c9537e6))
* **client:** get fetchOptions type more reliably ([cb96746](https://github.com/isaiahbjork/app-store-connect-typescript/commit/cb96746de52bb7eea8f06b2bbceb4b0ae1a4f92f))
* **mcp:** avoid sending `jq_filter` to base API ([d8e2655](https://github.com/isaiahbjork/app-store-connect-typescript/commit/d8e265524579b40657c17b58d673b95f54a07db9))
* **mcp:** fix bug in header handling ([549a957](https://github.com/isaiahbjork/app-store-connect-typescript/commit/549a9578ef9b490fb7e9f20c8dea7cc9aa8ffc22))
* **mcp:** fix tool description of jq_filter ([8a57b05](https://github.com/isaiahbjork/app-store-connect-typescript/commit/8a57b05137d7474bfc939ec027e62809c6852774))
* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([1a6447e](https://github.com/isaiahbjork/app-store-connect-typescript/commit/1a6447ee14f227fd5004fd57d1384c32a236fff1))
* **mcp:** include required section for top-level properties and support naming transformations ([bdaca43](https://github.com/isaiahbjork/app-store-connect-typescript/commit/bdaca4377712895b36f66353fed9485ab08aee3d))
* **mcp:** relax input type for asTextContextResult ([6bf21cf](https://github.com/isaiahbjork/app-store-connect-typescript/commit/6bf21cfc50c8eda4a00599b1580385d9667c4a7b))
* **mcp:** reverse validJson capability option and limit scope ([61ecf4b](https://github.com/isaiahbjork/app-store-connect-typescript/commit/61ecf4b70e80cffabd67e347d1d2513766d602ac))
* **mcp:** support jq filtering on cloudflare workers ([fd17161](https://github.com/isaiahbjork/app-store-connect-typescript/commit/fd17161fd3086b1502125bae05182f2b8ecbfcea))


### Chores

* add docs to RequestOptions type ([1fc0bf4](https://github.com/isaiahbjork/app-store-connect-typescript/commit/1fc0bf49f27cf6f8d87c1f06f69c30ba53ad32cb))
* **ci:** enable for pull requests ([d961a18](https://github.com/isaiahbjork/app-store-connect-typescript/commit/d961a18d5b87a3681f2f799821d76a44c275476f))
* **ci:** only run for pushes and fork pull requests ([25424b3](https://github.com/isaiahbjork/app-store-connect-typescript/commit/25424b304ce5dbb5c57d616297dff466aa146fce))
* **client:** improve path param validation ([4830be2](https://github.com/isaiahbjork/app-store-connect-typescript/commit/4830be2b6e8b2e14cb4b9897c4a6b04768ccc716))
* **client:** refactor imports ([0362841](https://github.com/isaiahbjork/app-store-connect-typescript/commit/03628416373f637d23cc7434d6409df573b74963))
* **internal:** codegen related update ([ea2d731](https://github.com/isaiahbjork/app-store-connect-typescript/commit/ea2d73157e26b4d429abc3748db8b96511d9f967))
* **internal:** codegen related update ([3bb8068](https://github.com/isaiahbjork/app-store-connect-typescript/commit/3bb8068d9ef42d57db4d64f126e9ffed42a0406c))
* **internal:** move publish config ([580efd4](https://github.com/isaiahbjork/app-store-connect-typescript/commit/580efd48a5e2b0c76ebbe7b280a30598d5b721e3))
* **internal:** remove redundant imports config ([be9fc53](https://github.com/isaiahbjork/app-store-connect-typescript/commit/be9fc539919c1c7695ad8156d39cab250ee23e57))
* **internal:** update comment in script ([0e53bbb](https://github.com/isaiahbjork/app-store-connect-typescript/commit/0e53bbbf7f7412414d856d5d3fbe19cd3c314903))
* make some internal functions async ([bae964c](https://github.com/isaiahbjork/app-store-connect-typescript/commit/bae964c97519d3faf5c8898de1ed123000b8459d))
* **mcp:** document remote server in README.md ([57505ba](https://github.com/isaiahbjork/app-store-connect-typescript/commit/57505ba828a82e19aac707cef5c2dd51b92408e6))
* **mcp:** formatting ([3fe5b3a](https://github.com/isaiahbjork/app-store-connect-typescript/commit/3fe5b3a5512c17285aefa68b7bf7abb0dfd0ee70))
* **mcp:** minor cleanup of types and package.json ([2605e9c](https://github.com/isaiahbjork/app-store-connect-typescript/commit/2605e9c1c82eec2f547cbe3e0e18de1f114b651e))
* **mcp:** refactor streamable http transport ([453c145](https://github.com/isaiahbjork/app-store-connect-typescript/commit/453c145b44ee287e3e0af9e1428f7c746624be09))
* **mcp:** rework imports in tools ([1d3f412](https://github.com/isaiahbjork/app-store-connect-typescript/commit/1d3f412b2c185b9d0ff3bf572e5eb4fdf512b7a1))
* **readme:** update badges ([c71b503](https://github.com/isaiahbjork/app-store-connect-typescript/commit/c71b503eaf68850966a85587c3e2444b9e0bf2c4))
* **readme:** use better example snippet for undocumented params ([72d499d](https://github.com/isaiahbjork/app-store-connect-typescript/commit/72d499d2d796147df4649d198c07a01a5a46912f))
* **ts:** reorder package.json imports ([7f65e38](https://github.com/isaiahbjork/app-store-connect-typescript/commit/7f65e384431c184df79f26a09b1b2f4f58a2d068))
* update @stainless-api/prism-cli to v5.15.0 ([1c4ca28](https://github.com/isaiahbjork/app-store-connect-typescript/commit/1c4ca2892fa152e12516f0c3f45da89e78431678))


### Refactors

* **types:** replace Record with mapped types ([28b1712](https://github.com/isaiahbjork/app-store-connect-typescript/commit/28b171228ef71df40a80c1815a6cc7a1ae33ee6c))

## 0.1.0-alpha.2 (2025-06-15)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/isaiahbjork/app-store-connect-typescript/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Chores

* update SDK settings ([debf04b](https://github.com/isaiahbjork/app-store-connect-typescript/commit/debf04baf62c486d50f4dda64077ee7bc0b0d300))

## 0.1.0-alpha.1 (2025-06-15)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/isaiahbjork/app-store-connect-typescript/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([a05c3fb](https://github.com/isaiahbjork/app-store-connect-typescript/commit/a05c3fbc213d8bb094ede5335e77fb8372470d0d))


### Chores

* configure new SDK language ([f04a25a](https://github.com/isaiahbjork/app-store-connect-typescript/commit/f04a25a88f1afd29d7b5aeeb48925fd2cb0b5a97))
* update SDK settings ([ef35e21](https://github.com/isaiahbjork/app-store-connect-typescript/commit/ef35e212e4107a1d66c1ce13b00819153b5f7ff0))
