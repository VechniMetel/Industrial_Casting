ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.sequenced_assembly(
        [
            Item.of("create_nouveau:enchantment_mechanism").withChance(0.7),
            Item.of('createaddition:electrum_sheet').withChance(0.1),
            Item.of("create:cogwheel").withChance(0.1),
            Item.of("create:crushed_raw_gold").withChance(0.1)
        ],
        '#forge:plates/electrum',
        [
            create.deploying(iem, [iem, 'hexcasting:amethyst_dust']),
            create.deploying(iem, [iem, 'minecraft:gold_nugget']),
            create.deploying(iem, [iem, 'ars_nouveau:source_gem'])
        ]
    ).transitionalItem(iem).loops(1)
    create.sequenced_assembly(
        "create_nouveau:enchantment_mechanism",
        '#forge:plates/electrum',
        [
            create.deploying(iem, [iem, 'createaddition:electrum_nugget']),
            create.deploying(iem, [iem, 'hexcasting:amethyst_dust']),
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
        "#forge:plates/iron",
        [
            create.deploying(iet, [iet, 'createaddition:copper_wire']),
            create.deploying(iet, [iet, 'minecraft:iron_nugget']),
            create.deploying(iet, [iet, 'create:polished_rose_quartz'])
        ]
    ).transitionalItem(iet).loops(1)
    create.sequenced_assembly(
        'create:electron_tube',
        "#forge:plates/iron",
        [
            create.deploying(iet, [iet, 'create_nouveau:steel_nugget']),
            create.deploying(iet, [iet, 'createaddition:copper_wire']),
            create.deploying(iet, [iet, 'create:polished_rose_quartz'])
        ]
    ).transitionalItem(iet).loops(1)
    create.sequenced_assembly(
        'create_nouveau:magic_capacitor',
        '#forge:plates/electrum',
        [
            create.filling(imc, [imc, Fluid.of('tconstruct:molten_amethyst',100)]),
            create.deploying(imc, [imc, '#forge:plates/silver']),
            create.pressing(imc, imc)
        ]
    ).transitionalItem(imc).loops(1)
    create.sequenced_assembly(
        'createaddition:capacitor',
        '#forge:plates/zinc',
        [
            create.filling(iec, [iec, Fluid.of('tconstruct:molten_quartz',100)]),
            create.deploying(iec, [iec, '#forge:plates/copper']),
            create.pressing(iec, iec)
        ]
    ).transitionalItem(iec).loops(1)
})