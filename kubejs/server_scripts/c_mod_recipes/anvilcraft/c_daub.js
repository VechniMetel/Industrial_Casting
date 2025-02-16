ServerEvents.recipes(r => {
    function daub(below, above, output) {
        r.custom({
            "type": "anvilcraft:anvil_processing",
            "anvil_recipe_type": "generic",
            "icon": {
                "item": "minecraft:mossy_cobblestone"
            },
            "outcomes": [
                {
                    "type": "set_block",
                    "chance": 1.0,
                    "offset": [
                        0.0,
                        -2.0,
                        0.0
                    ],
                    "result": {
                        "block": output
                    }
                }
            ],
            "predicates": [
                {
                    "type": "has_block",
                    "match_block": {
                        "blocks": [
                            above
                        ]
                    },
                    "offset": [
                        0.0,
                        -1.0,
                        0.0
                    ]
                },
                {
                    "type": "has_block",
                    "match_block": {
                        "blocks": [
                            below
                        ]
                    },
                    "offset": [
                        0.0,
                        -2.0,
                        0.0
                    ]
                }
            ]
        })
    }
    daub(
        "create:industrial_iron_block",
        "minecraft:stone_brick_wall",
        "create:chute"
    )
})