ServerEvents.recipes(r => {
    r.shapeless('extendedgears:shaftless_cogwheel',
        [
            '#minecraft:axes',
            '#minecraft:planks'
        ]
    ).damageIngredient('#minecraft:axes', 1)
    r.shapeless('extendedgears:large_shaftless_cogwheel',
        [
            '#minecraft:axes',
            '#minecraft:planks',
            '#minecraft:planks'
        ]
    ).damageIngredient('#minecraft:axes', 1)
    r.shapeless(
        'create:shaft',
        [
            'create:cogwheel',
            'create:cogwheel'
        ]
    ).replaceIngredient('create:cogwheel', 'extendedgears:half_shaft_cogwheel')
    r.shapeless(
        '2x create:cogwheel',
        [
            'extendedgears:half_shaft_cogwheel',
            'extendedgears:half_shaft_cogwheel',
            'create:shaft'
        ]
    )
    r.shapeless(
        'create:shaft',
        [
            'create:large_cogwheel',
            'create:large_cogwheel'
        ]
    ).replaceIngredient('create:large_cogwheel', 'extendedgears:large_half_shaft_cogwheel')
    r.shapeless(
        '2x create:large_cogwheel',
        [
            'extendedgears:large_half_shaft_cogwheel',
            'extendedgears:large_half_shaft_cogwheel',
            'create:shaft'
        ]
    )
    r.shapeless(
        "9x create_nouveau:enchanted_gold_ingot",
        "create_nouveau:enchanted_gold_block"
    )
    r.shapeless(
        "9x create_nouveau:enchanted_gold_nugget",
        "create_nouveau:enchanted_gold_ingot"
    )
})