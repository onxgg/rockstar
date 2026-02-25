# ONX WiseGuy Emergency Vehicles Pack (EVP) - Documentation (2026)

These resources include blank livery `model.yft` files for easy creation of custom liveries for the ONX Emergency Vehicles, plus Developer Details for easy reference to pack resource optimization.

Documentation folders:

* General documentation: https://github.com/onxgg/rockstar/tree/main/EVP%20Emergency%20Vehicle%20Pack
* Livery templates and install references: https://github.com/onxgg/rockstar/tree/main/EVP%20Emergency%20Vehicle%20Pack/Livery%20Templates
* Developer details (polycounts, optimization, etc.): https://github.com/onxgg/rockstar/tree/main/EVP%20Emergency%20Vehicle%20Pack/Developer%20Details

---

## Table of contents

* [Overview](#overview)
* [Compatibility](#compatibility)
* [Installation](#installation)
* [Folders](#folders)
* [Terminology (resource names vs spawn codes)](#terminology-resource-names-vs-spawn-codes)
* [Asset entitlement](#asset-entitlement)
* [Vehicles (spawn codes)](#vehicles-spawn-codes)

  * [Declasse](#declasse)
  * [Invetero](#invetero)
  * [Vapid](#vapid)
  * [Bravado](#bravado)
  * [Albany](#albany)
  * [Buckingham](#buckingham)
  * [Ubermacht](#ubermacht)
  * [Canis](#canis)
  * [Brute](#brute)
  * [Dundreary](#dundreary)
  * [Dinka](#dinka)
  * [Benefactor](#benefactor)

* [Extras](#extras)
* [Custom liveries](#custom-liveries)
* [Developer details](#developer-details)
* [Troubleshooting](#troubleshooting)
* [Support](#support)
* [License / redistribution](#license--redistribution)

---

## Overview

The ONX EVP includes emergency vehicle assets and supporting resources. This documentation helps server owners:

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
onx-evp-a-lightbars
onx-evp-a-shared
onx-evp-b-livery-mods
onx-evp-b-wheels
```

4. Install any of the following downloaded resources into `[onx_vehicles]`:

```
onx-evp-c-pack
    OR
onx-evp-d-NAME
```

5. `NAME` refers to the unique name of any standalone vehicle resource.
6. `OR` refers to installing the subscription pack vehicles OR the standalone vehicle. If you have installed the subscription pack do not also install a standalone vehicle if it is included in the pack.

Recommended load order guidance:

* Keep all `onx-evp-a-\*` resources above `onx-evp-b-\*`, and `onx-evp-b-\*` above `onx-evp-c-\*`.
* Ensure any custom livery resources start after the EVP resources they depend on.

---

## Folders

* `Developer Details`

  * Holds optimization and asset details for each vehicle in the EVP Pack.

* `Livery Templates`

  * Holds blank `model.yft` files and PNG templates for easy custom livery creation.

---

## Terminology (resource names vs spawn codes)

These are not the same:

* Resource name: what you `ensure` in `server.cfg` (example: `onx-evp-c-pack` or `onx-evp-d-NAME`)
* Spawn code / model name: what you spawn in-game (example: `onx_polgrang`)

---

## Asset entitlement

* Entitlement is tied to your Cfx.re account that you used when purchasing via Tebex.
* If your package is subscription based, you will lose access with console error `You lack the required entitlement to use onx-evp-NAME` if you attempt to run the resource.
* To grant access to developers of your server, provide them with keys for their own developer environment.
* To transfer access to someone else, manage this at:
  https://portal.cfx.re/assets/granted-assets
* Be mindful that the license key will only remain active if the original buyer renews the license if applicable.

---

## Vehicles (spawn codes)

Use the spawn codes below in your vehicle spawner, menu, or command system.

### Declasse

* Alamo 2700LX (2022-2025) `onx_polalamo`
* Granger 3600LX (2015-2020) `onx_polgrang`
* Granger 3700LX (2022-2025) `onx_polgrang2`
* Merit (1991-1996) `onx_polmerit`
* Merit PPV (2006-2017) `onx_polmerit2`
* Merit Classic (1977-1985) `onx_polmerit3`
* Tulip M-100 (1978-1983) `onx_poltulip`
* Vigero ZX (2016-2025) `onx_polvigero`

### Invetero

* Coquette D9 (2015-2019) `onx_polcoq`
* Coquette D10 (2020-2025) `onx_polcoq2`
* Coquette D5 (2004-2013) `onx_polcoq3`

### Vapid

* Aleutian (2024-2025) `onx_polaleu`
* Caracara Raid (2017-2020) `onx_polcara`
* Dominator GT (2018-2023) `onx_poldom`
* Monarch (1998-2011) `onx_polmonar`
* Sandstorm D205 (2022-2025) `onx_polsand`
* Sandstorm D205 SWB (2022-2025) `onx_polsandsc`
* Sandstorm D205 XL (2022-2025) `onx_polsandxl`
* Sandstorm D205 Hellenbach (2022-2025) `onx_polsandh`
* Scout (2024-2025) `onx_polscout`
* Scout Classic (1991-1994) `onx_polscout2`
* Tavros (2013-2016) `onx_poltavros`
* Sandking D155 (2011-2016) `onx_polsandk`
* Sandking D155 SWB (2011-2016) `onx_polsandk2`
* Sandking D155 XL (2011-2016) `onx_polsandk3`
* Sandking D155 Compensator (2011-2016) `onx_polsandk4`
* Sandking D155 SWB Compensator (2011-2016) `onx_polsandk5`
* Sandking D155 XL Compensator (2011-2016) `onx_polsandk6`
* Guardian C105 (2000-2015) `onx_polguard`
* Guardian C105 SWB (2000-2015) `onx_polguard2`

### Bravado

* Bison 25XD (2022-2025) `onx_polbison4`
* Bison 35XD (2022-2025) `onx_polbison3`
* Bison 45XD (2022-2025) `onx_polbison2`
* Bison 45XD Sasquatch (2022-2025) `onx_polbison3`
* Buffalo A/C (2015-2023) `onx_polbuff`
* Buffalo Hellfire (2015-2023) `onx_polbuffhf`
* Dorado (1998-2003) `onx_poldorado2`
* Dorado AC (2011-2023) `onx_poldorado`
* Gauntlet Hellfire (2021-2025) `onx_polgaunt`

### Albany

* Cavalcade XL (2021-2025) `onx_polcava`
* Presidente VSTR (2016-2020) `onx_polvstr`

### Buckingham

* Conada (2022-2025) `onx_polcon`
* Maverick (2007-2013) `onx_polmav`
* Maverick Tactical (2007-2013) `onx_polmav2`

### Ubermacht

* Kandra (2020-2025) `onx_polkandra`

### Canis

* Invictus (2022-2025) `onx_polinvict`
* Invictus Overland (2022-2025) `onx_polinvict2`
* Seminole Frontier (1984-1996) `onx_polsem`
* Terminus (2022-2025) `onx_polterm`
* Terminus Overland (2022-2025) `onx_polterm2`

### Brute

* Regent (2022-2025) `onx_polregent`
* Regent XL (2022-2025) `onx_polregentxl`

### Dundreary

* Landstalker (1984-1996) `onx_polstalk`

### Dinka

* Verus (2024-2025) `onx_polverus`

### Benefactor

* Benefactor Jogger LWB (2018-2026) `onx_poljog`
* Benefactor Jogger SWB (2018-2026) `onx_poljog2`
* Benefactor Jogger LWB Transport (2018-2026) `onx_poljog3`
* Benefactor Jogger SWB Transport (2018-2026) `onx_poljog4`

---

## Extras

Extras supported (common mappings):

* Extra 1: Lightbar
* Extra 2: Ram bar
* Extra 3/4: Front Cabin Lights
* Extra 5/6/7: Rear Cabin Lights
* Extra 8/9: Additional Lights

Note: Extras can vary per model and configuration.

---

## Custom liveries

Livery templates and blank `model.yft` files are provided here:
https://github.com/onxgg/rockstar/tree/main/EVP%20Emergency%20Vehicle%20Pack/Livery%20Templates

---

## Developer details

Developer reference details (polycounts, optimization notes, etc.) are here:
https://github.com/onxgg/rockstar/tree/main/EVP%20Emergency%20Vehicle%20Pack/Developer%20Details

---

## Troubleshooting

### Entitlement error: `You lack the required entitlement to use onx-evp-NAME`

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
* Your ensured EVP resources list (copy the relevant `ensure` lines)
* Whether you installed `onx-evp-c-pack` or standalone `onx-evp-d-NAME`

---

## License / redistribution

Do not redistribute, re-upload, or resell ONX EVP assets. Usage is governed by your Tebex purchase terms and Cfx.re entitlement licensing.
