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
        [
            Item.of('create:electron_tube').withChance(0.10),
            Item.of('create:rose_quartz').withChance(0.90)
        ],
        'create_nouveau:enchanted_rose_quartz'
    )
})