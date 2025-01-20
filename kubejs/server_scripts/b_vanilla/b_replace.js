ServerEvents.recipes(r => {
    r.replaceInput(
        {
            id: 'minecraft:iron_bars'
        },
        'minecraft:iron_ingot', 'createaddition:iron_rod'
    )
    r.replaceInput(
        {
            input:'farmersdelight:straw'
        },
        'farmersdelight:straw','#kubejs:rope_materials'
    )
    r.replaceInput(
        {
            input:'supplementaries:flax'
        },
        'supplementaries:flax','#kubejs:rope_materials'
    )
    r.replaceInput(
        {
            id:'create_netherless:coal_rod_recipe'
        },
        'minecraft:coal_block',
        '#minecraft:coals'
    )
})