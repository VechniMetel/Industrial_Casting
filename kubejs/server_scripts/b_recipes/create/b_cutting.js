ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.cutting(
        '2x extendedgears:shaftless_cogwheel',
        '#minecraft:planks'
    )
    create.cutting(
        'extendedgears:large_shaftless_cogwheel',
        '#minecraft:planks'
    )
    create.cutting(
        'create:linear_chassis',
        'create:andesite_casing'
    )
    create.cutting(
        'create:radial_chassis',
        'create:andesite_casing'
    )
})