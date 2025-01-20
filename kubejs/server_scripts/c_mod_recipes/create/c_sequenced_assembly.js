ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.sequenced_assembly(
        [
            Item.of("create_nouveau:enchantment_mechanism").withChance(0.7),
            Item.of("create:golden_sheet").withChance(0.1),
            Item.of("create:cogwheel").withChance(0.1),
            Item.of("create:crushed_raw_gold").withChance(0.1)
        ],
        "create:golden_sheet",
        [
            create.deploying(iem, [iem, 'ars_technica:amethyst_dust']),
            create.deploying(iem, [iem, 'minecraft:gold_nugget']),
            create.deploying(iem, [iem, 'ars_nouveau:source_gem'])
        ]
    ).transitionalItem(iem).loops(1)
    create.sequenced_assembly(
        "create_nouveau:enchantment_mechanism",
        "create:golden_sheet",
        [
            create.deploying(iem, [iem, 'createaddition:electrum_nugget']),
            create.deploying(iem, [iem, 'ars_technica:amethyst_dust']),
            create.deploying(iem, [iem, 'ars_nouveau:source_gem'])
        ]
    ).transitionalItem(iem).loops(1)
    create.sequenced_assembly(
        [
            Item.of('create:electron_tube').withChance(0.7),
            Item.of("create:iron_sheet").withChance(0.1),
            Item.of("create:cogwheel").withChance(0.1),
            Item.of("create:crushed_raw_iron").withChance(0.1)
        ],
        "create:iron_sheet",
        [
            create.deploying(iet, [iet, 'createaddition:copper_wire']),
            create.deploying(iet, [iet, 'minecraft:iron_nugget']),
            create.deploying(iet, [iet, 'create:polished_rose_quartz'])
        ]
    ).transitionalItem(iet).loops(1)
    create.sequenced_assembly(
        'create:electron_tube',
        "create:iron_sheet",
        [
            create.deploying(iet, [iet, 'create_ironworks:steel_nugget']),
            create.deploying(iet, [iet, 'createaddition:copper_wire']),
            create.deploying(iet, [iet, 'create:polished_rose_quartz'])
        ]
    ).transitionalItem(iet).loops(1)
})