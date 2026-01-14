# ONX WiseGuy Emergency Vehicles Pack Liveries (EVP) - Documentation (2026)

These resources include blank livery `model.yft` files for easy creation of custom liveries for the ONX Emergency Vehicles.

---

## Table of contents

* [Overview](#overview)
* [Compatibility](#compatibility)
* [Installation](#installation)

---

## Overview

The ONX EVP includes emergency vehicle assets and supporting resources. This documentation helps server owners:

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
onx-evp-b-livery-custom
```

4. Follow one of the 2 livery creation method:

* [Blender](#blender)
    OR
* [zModeler3](#zmodeler3)

5. Place your new livery yft in the `onx-evp-b-livery-custom` resource you created.

6. Edit the `carcols.meta` file in the in either `onx-evp-c-pack` or `onx-evp-c-pack2` for the vehicle you are adding a livery to with the proper livery modkit item block.
7. Save and restart your server.

Recommended load order guidance:

* Keep all `onx-evp-a-\*` resources above `onx-evp-b-\*`, and `onx-evp-b-\*` above `onx-evp-c-\*`.
* Ensure any custom livery resources start after the EVP resources they depend on.

### Blender

* Install and add the sollumz blender plugin.
* Press `N` to open the side pannel menu.
* Click Sollumz and hit import xml.
* Import `onx_polname_liv_blank.yft.xml`.
* Rename the top hierarchy name to what you want.
* Click on the square flat plane mesh in the project window.
* Click on the materials browser and scroll down to the Sollumz tab.
* Click the folder icon under the DDS texture name in the window that opened.
* Replace texture with DDS you want.
* Click on top hierarchy name once.
* Press N while hovering in the project window.
* Click Sollumz and hit export xml.
* Open code walker rpf viewer (the one that looks like openIV).
* Drag the xml you just made into a mods folder in codewalker.
* Drag new yft out of codewalker.

### zModeler3

* Click the blue import button.
* Import `onx_polname_liv_blank.yft`.
* Rename the top hierarchy name to what you want.
* Open the Textures Browser.
* Rename the `onx_polname_liv_blank.yft` folder to the same as the top hierarchy name.
* Replace `blank.dds` with the DDS you want.
* Press `OK` in the textures browser.
* Click the red export button.
* Export your new yft.