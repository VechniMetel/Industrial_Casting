ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.crushing(
        [
            'the_magical_industry:crushed_raw_silver',
            Item.of('create:experience_nugget').withChance(0.75)
        ],
        'the_magical_industry:raw_silver'
    )
    create.crushing(
        [
            'the_magical_industry:crushed_raw_silver',
            Item.of('the_magical_industry:crushed_raw_silver').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.12)
        ],
        'the_magical_industry:silver_ore'
    )
    create.crushing(
        [
            '2x the_magical_industry:crushed_raw_silver',
            Item.of('the_magical_industry:crushed_raw_silver').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobbled_deepslate').withChance(0.12)
        ],
        'the_magical_industry:deepslate_silver_ore'
    )
    create.crushing(
        [
            'the_magical_industry:crushed_raw_magnet',
            Item.of('create:experience_nugget').withChance(0.75)
        ],
        'the_magical_industry:raw_magnet'
    )
    create.crushing(
        [
            'the_magical_industry:crushed_raw_magnet',
            Item.of('the_magical_industry:crushed_raw_magnet').withChance(0.75),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.12)
        ],
        'the_magical_industry:magnet_ore'
    )
    create.crushing(
        [
            '2x the_magical_industry:crushed_raw_magnet',
            Item.of('the_magical_industry:crushed_raw_magnet').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobbled_deepslate').withChance(0.12)
        ],
        'the_magical_industry:deepslate_magnet_ore'
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