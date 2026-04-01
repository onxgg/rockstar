# ONX Civilian Vehicles Pack Liveries (CVP) - Documentation (2026)

These resources include blank livery `model.yft` files for easy creation of custom liveries for the ONX Civilian Vehicles.

---

## Table of contents

* [Overview](#overview)
* [Compatibility](#compatibility)
* [Installation](#installation)

---

## Overview

The ONX CVP includes civilian vehicle assets and supporting resources. This documentation helps server owners:

* Install custom liveries cleanly and efficiently
* Create custom liveries using provided templates

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

3. Create the following resources into `[onx_vehicles]`:

```
onx-cvp-b-livery-custom
```

4. Follow one of the 2 livery creation method:

* [Blender](#blender)
    OR
* [zModeler3](#zmodeler3)

5. Place your new livery yft in the `onx-cvp-b-livery-custom` resource you created.

6. Edit the `carcols.meta` file in the in either `onx-cvp-c-pack` or `onx-cvp-c-pack2` for the vehicle you are adding a livery to with the proper livery modkit item block.
7. Save and restart your server.

Recommended load order guidance:

* Keep all `onx-cvp-a-\*` resources above `onx-cvp-b-\*`, and `onx-cvp-b-\*` above `onx-cvp-c-\*`.
* Ensure any custom livery resources start after the CVP resources they depend on.

### Blender

1. Install and add the sollumz blender plugin.
2. Press `N` to open the side pannel menu.
3. Click Sollumz and hit import RAGE asset.
4. Import `onx_name_liv_blank.yft`.
5. Rename the top hierarchy name to what you want.
6. Click on the square flat plane mesh in the project window.
7. Click on the materials browser and scroll down to the Sollumz tab.
8. Click the folder icon under the DDS texture name in the window that opened.
9. Replace texture with DDS you want.
10. Click on top hierarchy name once.
11. Press N while hovering in the project window.
12. Click Sollumz and hit export RAGE asset and choose gen8.
13. Place the new yft you have exported into a streamed resource.
14. Add the correct item block entry to the vehicle's carcols.meta.
15. Start your server and test.

### zModeler3

1. Click the blue import button.
2. Import `onx_name_liv_blank.yft`.
3. Rename the top hierarchy name to what you want.
4. Open the Textures Browser.
5. Rename the `onx_name_liv_blank.yft` folder to the same as the top hierarchy name.
6. Replace `blank.dds` with the DDS you want.
7. Press `OK` in the textures browser.
8. Click the red export button.
9. Export your new yft.
10. Place the new yft you have exported into a streamed resource.
11. Add the correct item block entry to the vehicle's carcols.meta.
12. Start your server and test.