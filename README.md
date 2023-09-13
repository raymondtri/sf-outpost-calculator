# Starfield Outpost CLI tool

## Setup
  `npm run install`

## Package
```
Usage: npm run socli [options] [command]

A CLI for calculating the resources required to build a starfield outpost, with a description written by autopilot.

Options:
  -h, --help      display help for command

Commands:
  list [a]        List all resources, use the ids in other commands
  sum <index>     Sum the base components required for a resource
  map <index>     Map the components required for a resource
  help [command]  display help for command
```

## Examples
`npm run socli map 66`
```
> sf-outpost-calculator@1.0.0 socli
> ts-node index.ts "map" "66"

You selected, '66'.
Here is the component input map for Veryl-Treated Manifold:
Resource {
  quantity: 1,
  name: 'Veryl-Treated Manifold',
  components: [
    Resource {
      quantity: 1,
      name: 'Austenitic Manifold',
      components: [
        Resource { quantity: 2, name: 'Iron' },
        Resource { quantity: 2, name: 'Nickel' },
        Resource {
          quantity: 1,
          name: 'Reactive Gauge',
          components: [
            Resource { quantity: 2, name: 'Aluminum' },
            Resource { quantity: 1, name: 'Copper' }
          ]
        }
      ]
    },
    Resource { quantity: 2, name: 'Ytterbium' },
    Resource { quantity: 2, name: 'Lubricant' },
    Resource { quantity: 4, name: 'Veryl' }
  ]
}
Goodbye.
```

## Todos
- get quantities working so they can be set dynamically.

- create build step so this can be used on websites as a package