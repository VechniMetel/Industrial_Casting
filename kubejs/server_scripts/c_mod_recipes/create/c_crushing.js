ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.crushing(
        [
            'create_nouveau:crushed_raw_silver',
            Item.of('create:experience_nugget').withChance(0.75)
        ],
        'create_nouveau:raw_silver'
    )
    create.crushing(
        [
            'create_nouveau:crushed_raw_silver',
            Item.of('create_nouveau:crushed_raw_silver').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.12)
        ],
        'create_nouveau:silver_ore'
    )
    create.crushing(
        [
            '2x create_nouveau:crushed_raw_silver',
            Item.of('create_nouveau:crushed_raw_silver').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobbled_deepslate').withChance(0.12)
        ],
        'create_nouveau:deepslate_silver_ore'
    )
    create.crushing(
        [
            'create_nouveau:crushed_raw_magnet',
            Item.of('create:experience_nugget').withChance(0.75)
        ],
        'create_nouveau:raw_magnet'
    )
    create.crushing(
        [
            'create_nouveau:crushed_raw_magnet',
            Item.of('create_nouveau:crushed_raw_magnet').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.12)
        ],
        'create_nouveau:magnet_ore'
    )
    create.crushing(
        [
            '2x create_nouveau:crushed_raw_magnet',
            Item.of('create_nouveau:crushed_raw_magnet').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobbled_deepslate').withChance(0.12)
        ],
        'create_nouveau:deepslate_magnet_ore'
    )
    create.crushing(
        '9x createnuclear:uranium_powder',
        '#forge:ingots/uranium'
    )
    create.crushing(
        '4x ars_technica:quartz_dust',
        'minecraft:quartz'
    ).id('ars_technica:crushing/quartz')
})