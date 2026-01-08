# ONX Civilian Vehicles Pack (CVP) - Documentation (2026)

These resources include blank livery `model.yft` files for easy creation of custom liveries for the ONX Civilian Vehicles, plus Developer Details for easy reference to pack resource optimization.

Documentation folders:

* General documentation: https://github.com/onxgg/rockstar/tree/main/CVP%20Civilian%20Vehicle%20Pack
* Livery templates and install references: https://github.com/onxgg/rockstar/tree/main/CVP%20Civilian%20Vehicle%20Pack/Livery%20Templates
* Developer details (polycounts, optimization, etc.): https://github.com/onxgg/rockstar/tree/main/CVP%20Civilian%20Vehicle%20Pack/Developer%20Details

---

## Table of contents

* [Overview](#overview)
* [Compatibility](#compatibility)
* [Installation](#installation)
* [Folders](#folders)
* [Terminology (resource names vs spawn codes)](#terminology-resource-names-vs-spawn-codes)
* [Asset entitlement](#asset-entitlement)
* [Vehicles (spawn codes)](#vehicles-spawn-codes)

  * [Cheval](#cheval)
  * [Declasse](#declasse)
  * [Invetero](#invetero)
  * [Vapid](#vapid)
  * [Bravado](#bravado)
  * [Albany](#albany)
  * [Buckingham](#buckingham)
  * [Ubermacht](#ubermacht)
  * [Benefactor](#benefactor)
  * [Canis](#canis)
  * [Brute](#brute)

* [Custom liveries](#custom-liveries)
* [Developer details](#developer-details)
* [Troubleshooting](#troubleshooting)
* [Support](#support)
* [License / redistribution](#license--redistribution)

---

## Overview

The ONX CVP includes civilain vehicle assets and supporting resources. This documentation helps server owners:

* Install the pack cleanly and efficiently
* Understand entitlement behavior
* Identify vehicle spawn codes
* Create custom liveries using provided templates
* Reference optimization details (polycounts, etc.)

Note: This repository is documentation-focused. Your runnable assets are delivered via Tebex and may be entitlement-gated.

---

## Compatibility

* Tested on game build 3095 or higher
* Use on lower game builds at your own risk

Recommended `server.cfg`:

```cfg
set sv_enforceGameBuild 3095
```

---

## Installation

1. To run our resources efficiently create the following resource folders:

   * `[onx_vehicles]`

2. Add these lines to your `server.cfg` or `resources.cfg`:

```cfg
ensure [onx_vehicles]
```

3. Install any of the following downloaded resources into `[onx_vehicles]`:

```
onx-cvp-a-shared
```

4. Install any of the following downloaded resources into `[onx_vehicles]`:

```
onx-cvp-c-pack
    OR
onx-cvp-d-NAME
```

5. `NAME` refers to the unique name of any standalone vehicle resource.
6. `OR` refers to installing the subscription pack vehicles OR the standalone vehicle. If you have installed the subscription pack do not also install a standalone vehicle if it is included in the pack.

Recommended load order guidance:

* Keep all `onx-cvp-a-\*` resources above `onx-cvp-b-\*`, and `onx-cvp-b-\*` above `onx-cvp-c-\*`.
* Ensure any custom livery resources start after the CVP resources they depend on.

---

## Folders

* `Developer Details`

  * Holds optimization and asset details for each vehicle in the CVP Pack.

* `Livery Templates`

  * Holds blank `model.yft` files and PNG templates for easy custom livery creation.

---

## Terminology (resource names vs spawn codes)

These are not the same:

* Resource name: what you `ensure` in `server.cfg` (example: `onx-cvp-c-pack` or `onx-cvp-d-NAME`)
* Spawn code / model name: what you spawn in-game (example: `onx_tfgranger`)

---

## Asset entitlement

* Entitlement is tied to your Cfx.re account that you used when purchasing via Tebex.
* If your package is subscription based, you will lose access with console error `You lack the required entitlement to use onx-cvp-NAME` if you attempt to run the resource.
* To grant access to developers of your server, provide them with keys for their own developer environment.
* To transfer access to someone else, manage this at:
  https://portal.cfx.re/assets/granted-assets
* Be mindful that the license key will only remain active if the original buyer renews the license if applicable.

---

## Vehicles (spawn codes)

Use the spawn codes below in your vehicle spawner, menu, or command system.

### Cheval
- Ambassador (2006-2017) `onx_ambassador`

### Declasse
- Alamo 2700LX (2022-2025) `onx_tfalamo`
- Granger 3700LX (2022-2025) `onx_tfgranger`
- Merit Classic (1977-1985) `onx_merit1`
- Merit Cruiser (1991-1996) `onx_merit2`
- Merit (2006-2017) `onx_merit3`
- Tulip M-100 Coupe (1978-1983) `onx_tulip2c`

### Invetero
- Coquette D9 (2016-2019) `onx_coquetted9`

### Vapid
- Dominator GT (2018-2023) `onx_domgtcoupe`
- Sandstorm D205 (2022-2025) `onx_sandstorm`
- Sandstorm D205 SWB (2022-2025) `onx_sandstorm2`
- Sandstorm D205 XL (2022-2025) `onx_sandstormxl`
- Sandstorm D205 Hellenbach (2022-2025) `onx_sandstormh`
- Scout SR (2024-2025) `onx_scout25`
- Scout Classic (1991-1994) `onx_scoutc`
- Tavros (2013-2016) `onx_tavros`
- Sandking D155 (2011-2016) `onx_sandking`
- Sandking D155 SWB (2011-2016) `onx_sandking2`
- Sandking D155 XL (2011-2016) `onx_sandking3`
- Sandking D155 Compensator (2011-2016) `onx_sandking4`
- Sandking D155 SWB Compensator (2011-2016) `onx_sandking5`
- Sandking D155 XL Compensator (2011-2016) `onx_sandking6`
- Sandking D155 Boxtruck (2011-2016) `onx_boxking`
- Sandstorm D205 Boxtruck (2018-2024) `onx_tfboxstorm`
- Sandstorm SWB Rollback (2018-2024) `onx_tftowstorm`
- Sandstorm Crew Cab Rollback (2018-2024) `onx_tftowstorm2`
- Sandking D155 Rollback (2011-2016) `onx_towking`
- Sandking D155 Crew Cab Rollback (2011-2016) `onx_towking2`
- Sandking D155 Snowplow (2011-2016) `onx_snowsandk`
- Sandking D155 SWB Snowplow (2011-2016) `onx_snowsandk2`
- Sandking D155 XL Snowplow (2011-2016) `onx_snowsandk3`

### Bravado
- Bison 35XD (2022-2025) `onx_tfbison`
- Bison 25XD (2022-2025) `onx_tfbison2`
- Bison 45XD (2022-2025) `onx_tfbison3`
- Bison 45XD Sasquatch (2022-2025) `onx_tfbison4`
- Buffalo A/C (2015-2023) `onx_buffaloac`
- Buffalo Hellfire (2015-2023) `onx_buffalohf`
- Dorado A/C (2011-2023) `onx_doradost`
- Bison 55XD Boxtruck (2022-2025) `onx_tfboxson`
- Bison 25XD Rollback (2022-2025) `onx_tftowson`
- Bison 35XD Rollback (2022-2025) `onx_tftowson2`

### Buckingham
- Maverick (2007-2013) `onx_maverick`

### Übermacht
- Kandra (2020-2025) `onx_kandra`

### Benefactor
- Jogger Cargo LWB (2018-2026) `onx_tfjoggercl1`
- Jogger Cargo LWB Dually (2018-2026) `onx_tfjoggercl2`
- Jogger Cargo LWB 4x4 (2018-2026) `onx_tfjoggercl3`
- Jogger Cargo SWB (2018-2026) `onx_tfjoggercs1`
- Jogger Cargo SWB Dually (2018-2026) `onx_tfjoggercs2`
- Jogger Cargo SWB 4x4 (2018-2026) `onx_tfjoggercs3`
- Jogger Passanger LWB (2018-2026) `onx_tfjoggerpl1`
- Jogger Passanger LWB Dually (2018-2026) `onx_tfjoggerpl2`
- Jogger Passanger LWB 4x4 (2018-2026) `onx_tfjoggerpl3`
- Jogger Passanger SWB (2018-2026) `onx_tfjoggerps1`
- Jogger Passanger SWB Dually (2018-2026) `onx_tfjoggerps2`
- Jogger Passanger SWB 4x4 (2018-2026) `onx_tfjoggerps3`

### Canis
- Invictus (2022-2025) `onx_invictus`
- Invictus Overland (2022-2025) `onx_invictus2`
- Invictus Trailer (2022-2025) `onx_invicttrail`
- Invictus Overland Trailer (2022-2025) `onx_invicttrail2`
- Terminus Overland (2022-2025) `onx_terminus2`

### Brute
- Regent (2022-2025) `onx_tfregent`
- Regent XL (2022-2025) `onx_tfregentxl`

---

## Custom liveries

Livery templates and blank `model.yft` files are provided here:
https://github.com/onxgg/rockstar/tree/main/CVP%20Civilian%20Vehicle%20Pack/Livery%20Templates

---

## Developer details

Developer reference details (polycounts, optimization notes, etc.) are here:
https://github.com/onxgg/rockstar/tree/main/CVP%20Civilian%20Vehicle%20Pack/Developer%20Details

---

## Troubleshooting

### Entitlement error: `You lack the required entitlement to use onx-cvp-NAME`

* Confirm the server is running the resource on the same Cfx.re account that owns the entitlement.
* If subscription-based, confirm the subscription is active.
* Confirm you installed the Tebex-delivered resources into `[onx_vehicles]` and that they are being ensured.

### Vehicles not spawning / spawning as defaults / no lightbars

* Confirm you are using the correct spawn code from the list above.
* Confirm `set sv_enforceGameBuild 3095` is set and the server is actually running on that enforced build.
* Our vehicles require a customization menu to apply all emergency equipment. Lightbars use new material shaders and the VMT_LIGHTBAR mod category introduced in game build 3095
* Clear server and client caches and test again.

---

## Support

When requesting support, include:

* Enforced game build
* Your ensured CVP resources list (copy the relevant `ensure` lines)
* Whether you installed `onx-cvp-c-pack` or standalone `onx-cvp-d-NAME`

---

## License / redistribution

Do not redistribute, re-upload, or resell ONX CVP assets. Usage is governed by your Tebex purchase terms and Cfx.re entitlement licensing.
