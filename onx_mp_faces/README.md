# onx_mp_faces

This repository contains documentation and examples for the `onx_mp_faces` package, available on the store at https://community-store.onx.gg.

## Requirements

Once you've purchased and downloaded the package, it is a ready-to-run resource within your FiveM server.

To support the additional 46 faces, your clothing script will need to be modified to increase the maximum value the shape ID can take. This should be an easy change.

Feel free to create a pull request to create additional examples, or [join our discord](https://onx.gg/discord) for support doing this.

## Examples

### qb-clothing

In `client/main.lua`,

```lua
if v.type == "face" then
    maxModelValues[k].item = 45
    maxModelValues[k].texture = 15
end

if v.type == "face2" then
    maxModelValues[k].item = 45
    maxModelValues[k].texture = 15
end
```

becomes

```lua
if v.type == "face" then
    maxModelValues[k].item = 45 + 46
    maxModelValues[k].texture = 15
end

if v.type == "face2" then
    maxModelValues[k].item = 45 + 46
    maxModelValues[k].texture = 15
end
```

### illenium-appearance

In `game/customization.lua`,

```lua
shapeFirst = {
    min = 0,
    max = 45
},
shapeSecond = {
    min = 0,
    max = 45
},
shapeThird = {
    min = 0,
    max = 45
},
```

becomes

```lua
shapeFirst = {
    min = 0,
    max = 45 + 46
},
shapeSecond = {
    min = 0,
    max = 45 + 46
},
shapeThird = {
    min = 0,
    max = 45 + 46
},
```
