ServerEvents.recipes(r => {
  r.custom({
    "type": "anvilcraft:anvil_processing",
    "anvil_recipe_type": "stamping",
    "icon": {
      "item": 'the_magical_industry:crude_electron_tube'
    },
    "outcomes": [
      {
        "type": "spawn_item",
        "chance": 1.0,
        "offset": [
          0.0,
          -0.75,
          0.0
        ],
        "result": {
          "item": 'the_magical_industry:crude_electron_tube'
        }
      }
    ],
    "predicates": [
      {
        "type": "has_block",
        "match_block": {
          "blocks": [
            "anvilcraft:stamping_platform"
          ]
        },
        "offset": [
          0.0,
          -1.0,
          0.0
        ]
      },
      {
        "type": "has_item_ingredient",
        "match_item": {
          "count": {
            "min": 1
          },
          "items": [
            'minecraft:heavy_weighted_pressure_plate'
          ]
        },
        "offset": [
          0.0,
          -0.75,
          0.0
        ]
      },
      {
        "type": "has_item_ingredient",
        "match_item": {
          "count": {
            "min": 1
          },
          "items": [
            'anvilcraft:copper_pressure_plate'
          ]
        },
        "offset": [
          0.0,
          -0.75,
          0.0
        ]
      },
      {
        "type": "has_item_ingredient",
        "match_item": {
          "count": {
            "min": 1
          },
          "items": [
            'minecraft:redstone'
          ]
        },
        "offset": [
          0.0,
          -0.75,
          0.0
        ]
      },
      {
        "type": "has_item_ingredient",
        "match_item": {
          "count": {
            "min": 1
          },
          "items": [
            'create:polished_rose_quartz'
          ]
        },
        "offset": [
          0.0,
          -0.75,
          0.0
        ]
      }
    ]
  })
  r.custom({
    "type": "anvilcraft:anvil_processing",
    "anvil_recipe_type": "stamping",
    "icon": {
      "item": 'the_magical_industry:steel_pressure_plate'
    },
    "outcomes": [
      {
        "type": "spawn_item",
        "chance": 1.0,
        "offset": [
          0.0,
          -0.75,
          0.0
        ],
        "result": {
          "item": 'the_magical_industry:steel_pressure_plate'
        }
      }
    ],
    "predicates": [
      {
        "type": "has_block",
        "match_block": {
          "blocks": [
            "anvilcraft:stamping_platform"
          ]
        },
        "offset": [
          0.0,
          -1.0,
          0.0
        ]
      },
      {
        "type": "has_item_ingredient",
        "match_item": {
          "count": {
            "min": 1
          },
          "items": [
            'createnuclear:steel_ingot'
          ]
        },
        "offset": [
          0.0,
          -0.75,
          0.0
        ]
      }
    ]
  })
})