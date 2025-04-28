ServerEvents.recipes((event) => {
    event.custom({
        "type": "tconstruct:material",
        "ingredient": {
            "item": "minecraft:amethyst_shard"
        },
        "material": "the_magical_industry:amethyst",
        "needed": 1,
        "value": 1
    })
    event.custom({
        "type": "tconstruct:material",
        "ingredient": {
            "item": "minecraft:amethyst_block"
        },
        "leftover": {
            "count": 1,
            "item": "minecraft:amethyst_shard"
        },
        "material": "the_magical_industry:amethyst",
        "needed": 1,
        "value": 4
    })
})