# ONX - GTA V Community Asset Submission Guidelines

## License Disclaimer for Asset Submissions to ONX.gg

By submitting an asset (including but not limited to designs, models, textures, or other media) to ONX.gg (hereinafter referred to as "ONX.gg"), you (the "Submitter") agree to the following terms:

1. **Grant of License:**
Upon submission of an asset, the Submitter grants ONX.gg an indefinite, royalty-free, non-exclusive license to use, host, and display the submitted asset on any server owned, operated, or affiliated with ONX.gg, without any obligation to provide the Submitter with access to or control over said asset within the game or on ONX.gg.
2. **Usage Scope:**
This license permits ONX.gg to utilize the submitted asset solely within the context of ONX.gg's hosted environments. ONX.gg will not resell, redistribute, or transfer the asset for use outside of its hosted services. The Submitter acknowledges that the implementation of an asset on ONX.gg does not guarantee continued or irrevocable in-game access to said asset, even if it remains hosted on ONX.gg.
3. **Third-Party Content:**
If the submitted asset includes work not originally created by the Submitter, the Submitter must provide appropriate attribution and documentation proving that they have the necessary rights to license the asset to ONX.gg for use on its hosted services. This includes citation of the original creator or a valid license agreement that explicitly grants the Submitter permission to license the asset to ONX.gg under these terms.
4. **Requests for Removal:**
While the Submitter may request the removal of their submitted asset, ONX.gg retains the right to determine whether the asset will remain hosted after submission and approval. There is no guarantee that a removal request will be honored once the asset has been implemented and used in ONX.gg's environment.
5. **No Obligation:**
ONX.gg is under no obligation to use or implement any submitted asset. Additionally, ONX.gg reserves the right to modify, refuse, or discontinue use of any submitted asset at its sole discretion.

By submitting an asset to ONX.gg, the Submitter acknowledges and agrees to these terms.

## Standard Guidelines
- Included contents must not break **Twitch TOS**, or **CFX TOS**. Contents of the asset must not be ripped from any other games or asset packs.
- **Any edits** to vanilla files must **remain unencrypted**, as any conflicting files will **require manual edits** in order to be merged with our own edited files.
- Must not encroach or overlap with any already existing custom assets.
- Assets must not rely on custom scripts that are required to be run.

## Custom Peds & MP Clothing Requirements
Peds & MP Clothing Standards must be followed to be considered for use.

### Quality
- Must fit the world and overall design of the “modern day” setting of GTA.
- Proper use of Vertex colors used for sweat and water shading.
- Proper scale, i.e. body shape and size should be properly scaled to match GTA standards.

### Optimization Guidelines
- **Diffuse:** Max **1024x1024** use **512x512** and **256x256** For Smaller items such as glasses, bracelets, earrings etc.
- **Normal:** Max **1024x1024** If there is little detail in your normal map and you can get away with it, keep one step lower than the diffuse size.
- **Specular:** Max **512x512** or two steps lower than the diffuse texture. If using a flat color for the entire UV, you can just use a 4x4 texture.
- Please do not use **2048x2048**, and **NEVER** use **4k**. If you feel it is absolutely needed, please ask for a review & exception.
- Please look for optimization wherever possible, for example a biker kutte only needs a single base design, the ranks and rear patch can be decals overlaid to prevent duplicating the main texture multiple times just for tiny adjustments that would fill up memory budget.
- We have doubled the vanilla head count to make a number of unique faces, a "custom ped" is not required to have a unique look and will more than likely be denied. Allowlisted tattoos and garments can be added for the customizable ped and look just as unique which much greater performance.

**All available clothing slots and maximum polycount for top LOD. This is not a target, please keep polycount as low as possible while maintaining quality**

__Weighted Clothing__
| Item | Slot | Limit |
| ------ | ----- | ----- |
| Masks | berd | 10k |
| Hair | hair | 10k |
| Neck | teef | 5k |
| Torso | upper | 5k |
| Jackets | jbib | 15k |
| Vests | task | 10k |
| Shirts | accs | 10k |
| Decals | decl | 5k |
| Bags | hand | 5k |
| Legs | lowr | 5k |
| Shoes | feet | 5k |

__Unweighted Clothing Props__
| Item | Slot | Limit |
| ------ | ----- | ----- |
| Hats | p_head | 5k |
| Glasses | p_eyes | 2.5k |
| Earrings | p_ears | 1k |
| Left Wrist | p_lwrist | 1k |
| Right Wrist | p_rwrist | 1k |


### LODs (Level of Detail)
- **Med LODs:** Should be as low as possible without major distortion. Aim for at least half of high or less if possible.
- **Low LODs:** Below 1,000 (Low vanilla LODs are about 100-400 for reference)
- **LOD materials:** Should have their own material, only using the diffuse, without any embedded textures.

## Custom MLO Requirements
MLOs Standards must be followed to be considered for use.

### Standard Guidelines
- Included contents must not break **Twitch TOS**, or **CFX TOS**. Contents of the asset must not be ripped from any other games or asset packs.
- **Any edits** to vanilla files must **remain unencrypted**, as any conflicting files will **require manual edits**, in order to be merged with our own edited files.
- Must not encroach or overlap with any already existing custom assets.
- Assets must not rely on custom scripts that are required to be run.

### Quality
- Must fit the world and overall design of the “modern day” setting of GTA. Assets should also fit the themes of the respective locations of the map wherein they will reside.
- Proper use of Vertex colors used to bake lighting, Baked Shadow maps are a plus.
- Proper scale, i.e. rooms and doorways should be properly scaled to match GTA standards while still having enough room for the default third person camera.
- Repeating textures must be properly broken up by added detail and overall smart design.
- Interiors must be intuitive and easy to navigate.

### Optimization
- Must pass a performance check. Improper and overuse of lighting is the quickest way to ruin the performance of any interior or exterior in GTA V.
- **Very limited** use of **2k textures** if any, with absolutely **NO use** of **4k textures** or above.
- Textures must be stored in texture dictionaries and not encrypted into the model.
- If there are large exterior edits or newly added buildings, custom LOD models must be included for up to 3000 units or more.
- Added LODs must be made in **their own unique files**, and in their own .ymap structure. Custom LODs should **NOT** be getting added to any already existing Vanilla files.
