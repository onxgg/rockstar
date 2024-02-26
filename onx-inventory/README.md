# dw-inventory

--

https://github.com/dwjft/rockstar/tree/main/dw-inventory

--

This repository contains documentation and examples for the `dw-inventory` package, available on the store at https://dw.onx.gg.

## Requirements

Once you've purchased and downloaded the package, it is a ready-to-run resource within your FiveM / RedM server, the only external requirement is a MongoDB instance. You can host this however you like, we provide 2 examples of options.

### Docker

1. Install docker from https://www.docker.com/
1. https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/ setup your own mongodb instance

### Atlas

MongoDB has its own external hosting solution you can sign up for here: https://www.mongodb.com/atlas/database

## Configuration

For certain configuration properties, such as layout, themes, etc, we provide a default set that allows you to start instantly, but this package is completely customizable so you can make it look and feel however you want.

### Containers

Containers are how "inventories" are referred to, each container is separate and has a unique name.

```javascript
const CONTAINER = {
  name: 'character-1',
  slotsX: 5,
  slotsY: 5,
  maxY: 5,
  className: 'inventoryContainerPositionRight',
  style: {},
  slotHeight: 'var(--container-slot-height)',
  slotWidth: 'var(--container-slot-width)',
  redact: false,
  itemsCondition: 'true',
  title: {
    enabled: true,
    label: 'Output',
    quantity: {
      enabled: true,
    },
  },
  // you may include your own fields below to reference them when items are passed thru to js functions as variables
  config: {
    type: 'item',
  },
}
```

Each field is required and must be present on every configured container.

| Field | Usage |
| ------ | ----- |
| name | a unique name to identify the container with |
| slotsX | how many slots does this container have from left to right? |
| slotsY | how many slots does this container have from top to bottom? |
| maxY | maximum amount of top to bottom slots to show before scrolling |
| className | css styles applied via class |
| style | css styles applied via js |
| slotHeight | a css value for slot height in the container |
| slotWidth | a css value for slot width in the container |
| redact | a boolean value whether to hide items in this scontainer |
| itemsCondition | javascript that returns a boolean on whether the chosen item can be placed in this container, see below for more |
| title | title for the container, which can be enabled or disabled, and whether to include the quantity input |

#### Conditionals - itemsCondition

The `itemsCondition` value on a container allows you to pass a string which evaluates to a javascript function, and accepts an `item` and `container` as a variable.

For example, if you wanted to create a container that only accepts weapons you could set up like this:

```javascript
const item = {
  ...,
  config: {
    type: 'weapon',
  },
}
const container = {
  ...,
  config: {
    allowTypes: ['weapon'],
  },
  itemsCondition: 'container.config.allowTypes.indexOf(item.config.type) !== -1',
}
```

### Items

An item config should look like below:

```javascript
const ITEM_CONFIG = [
  {
    name: 'potato',
    description: 'boil em, mash em, stick em in a stew',
    label: 'Potato',
    image: '/static/icons/potato.png',
    weight: 0,
    limit: 100,
    x: 1,
    y: 1,
    expires_minutes: 0,
    redact: null,
    // you may include your own fields below to reference them when items are passed thru to js functions as variables
    config: {
      type: 'food',
    },
  },
];
```

Each field is required and must be present on every configured item.

| Field | Usage |
| ------ | ----- |
| name | a unique name to identify the item with |
| description | a description to display to end-users |
| label | a nice name to display to end-users |
| image | image url for the item |
| weight | if using the `useWeight` option this is summed together to create an overall weight for the inventory |
| limit | how many items can be in a single stack? `0` means infinite |
| x | how many grid-units does this item occupy left-to-right? |
| y | how many grid-units does this item occupy top-to-bottom? |
| expires_minutes | how many minutes after creation until this item expires |
| redact | see redact config below |

#### Redactions

Sometimes you may want an item to be hidden when viewing an inventory, for roleplay servers these common scenarios would include frisking or searching, or even robbing another player. To achieve this you can combine a container config and item redact config as such:

```javascript
const item = {
  ...,
  redact: {
    redact: 'item.quantity > 2',
    reveal: 'true',
    className: 'inventoryContainerItemRedacted',
    style: {},
  },
}
```

For items: 
| Field | Usage |
| ------ | ----- |
| redact | a javascript condition that accepts item and container as arguments, returning true will hide the item |
| reveal | a javascript condition that accepts item and container as arguments, returning true will allow users to show the item |
| className | css styles applied via class |
| style | css styles applied via js |

### Themes

For layout and look-and-feel you can pass thru style objects or css names directly to components or the main theme object.

If you inspect the HTML via FiveM's in-built NUI tools, you can look at each element to see what can be customized about it, using the `data-themeable` key for reference.

## Usage

See [examples/basic-resource](https://github.com/dwjft/rockstar/tree/main/dw-inventory/examples/basic-resource) for a resource setup using the inventory.
