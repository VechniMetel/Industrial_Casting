ServerEvents.recipes((event) => {
    event.shapeless('extendedgears:shaftless_cogwheel',
        [
            '#minecraft:axes',
            '#minecraft:planks'
        ]
    ).damageIngredient('#minecraft:axes', 1)
    event.shapeless('extendedgears:large_shaftless_cogwheel',
        [
            '#minecraft:axes',
            '#minecraft:planks',
            '#minecraft:planks'
        ]
    ).damageIngredient('#minecraft:axes', 1)
    event.shapeless(
        'create:shaft',
        [
            'create:cogwheel',
            'create:cogwheel'
        ]
    ).replaceIngredient('create:cogwheel', 'extendedgears:half_shaft_cogwheel')
    event.shapeless(
        '2x create:cogwheel',
        [
            'extendedgears:half_shaft_cogwheel',
            'extendedgears:half_shaft_cogwheel',
            'create:shaft'
        ]
    )
    event.shapeless(
        'create:shaft',
        [
            'create:large_cogwheel',
            'create:large_cogwheel'
        ]
    ).replaceIngredient('create:large_cogwheel', 'extendedgears:large_half_shaft_cogwheel')
    event.shapeless(
        '2x create:large_cogwheel',
        [
            'extendedgears:large_half_shaft_cogwheel',
            'extendedgears:large_half_shaft_cogwheel',
            'create:shaft'
        ]
    )
    event.shapeless(
        "9x the_magical_industry:enchanted_gold_ingot",
        "the_magical_industry:enchanted_gold_block"
    )
    event.shapeless(
        "9x the_magical_industry:enchanted_gold_nugget",
        "the_magical_industry:enchanted_gold_ingot"
    )
})