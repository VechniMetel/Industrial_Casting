ServerEvents.recipes(r => {
    const ipm = 'create:incomplete_precision_mechanism'
    const iem = 'create_nouveau:incomplete_enchantment_mechanism'
    const iet = 'create_nouveau:incomplete_electron_tube'
    const imc = 'create_nouveau:incomplete_magic_capacitor'
    const iec = 'create_nouveau:incomplete_capacitor'
    const icb = "create_nouveau:incomplete_circuit_board"
    const icc = 'create_connected:incomplete_control_chip'
    const iacb = 'create_nouveau:incomplete_advanced_circuit_board'
    const rbp = 'refinedstorage:raw_basic_processor'
    const rip = 'refinedstorage:raw_improved_processor'
    const rap = 'refinedstorage:raw_advanced_processor'
    const ieb = 'create_nouveau:incomplete_electric_burner'
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
            create.deploying(iet, [iet, 'createnuclear:steel_nugget']),
            create.deploying(iet, [iet, 'createaddition:copper_wire']),
            create.deploying(iet, [iet, 'create:polished_rose_quartz'])
        ]
    ).transitionalItem(iet).loops(1)
    create.sequenced_assembly(
        'create_nouveau:magic_capacitor',
        '#forge:plates/electrum',
        [
            create.filling(imc, [imc, Fluid.of('tconstruct:molten_amethyst', 100)]),
            create.deploying(imc, [imc, '#forge:plates/silver']),
            create.pressing(imc, imc)
        ]
    ).transitionalItem(imc).loops(1)
    create.sequenced_assembly(
        'createaddition:capacitor',
        '#forge:plates/zinc',
        [
            create.filling(iec, [iec, Fluid.of('tconstruct:molten_quartz', 100)]),
            create.deploying(iec, [iec, '#forge:plates/copper']),
            create.pressing(iec, iec)
        ]
    ).transitionalItem(iec).loops(1)
    create.sequenced_assembly(
        'anvilcraft:circuit_board',
        'anvilcraft:hardend_resin',
        [
            create.deploying(icb, [icb, 'refinedstorage:silicon']),
            create.deploying(icb, [icb, 'createaddition:copper_wire']),
            create.deploying(icb, [icb, 'anvilcraft:resin']),
            create.deploying(icb, [icb, 'createaddition:capacitor']),
            create.pressing(icb, icb)
        ]
    ).transitionalItem(icb).loops(3)
    create.sequenced_assembly(
        'create_connected:control_chip',
        '#forge:plates/brass',
        [
            create.deploying(icc, [icc, 'refinedstorage:silicon']),
            create.deploying(icc, [icc, 'createaddition:capacitor']),
            create.deploying(icc, [icc, 'create:electron_tube']),
            create.pressing(icc, icc),
            create.deploying(icc, [icc, 'create_nouveau:solder_coil']),
            create.deploying(icc, [icc, 'create_nouveau:soldering_gun']).keepHeldItem()
        ]
    ).transitionalItem(icc).loops(1)
    create.sequenced_assembly(
        'create_nouveau:advanced_circuit_board',
        'anvilcraft:circuit_board',
        [
            create.deploying(iacb, [iacb, 'refinedstorage:quartz_enriched_iron']),
            create.deploying(iacb, [iacb, 'refinedstorage:silicon']),
            create.deploying(iacb, [iacb, 'create_connected:control_chip']),
            create.deploying(iacb, [iacb, 'refinedstorage:advanced_processor']),
            create.deploying(iacb, [iacb, 'create_nouveau:solder_coil']),
            create.deploying(iacb, [iacb, 'create_nouveau:soldering_gun']).keepHeldItem()
        ]
    ).transitionalItem(iacb).loops(1)
    create.sequenced_assembly(
        'refinedstorage:basic_processor',
        'minecraft:heavy_weighted_pressure_plate',
        [
            create.deploying(rbp, [rbp, 'refinedstorage:silicon']),
            create.deploying(rbp, [rbp, 'createaddition:copper_wire']),
            create.deploying(rbp, [rbp, 'refinedstorage:processor_binding']),
            create.deploying(rbp, [rbp, 'create:polished_rose_quartz'])
        ]
    ).transitionalItem(rbp).loops(1)
    create.sequenced_assembly(
        'refinedstorage:improved_processor',
        'minecraft:heavy_weighted_pressure_plate',
        [
            create.deploying(rip, [rip, 'refinedstorage:silicon']),
            create.deploying(rip, [rip, 'createaddition:electrum_wire']),
            create.deploying(rip, [rip, 'refinedstorage:processor_binding']),
            create.deploying(rip, [rip, 'create:electron_tube'])
        ]
    ).transitionalItem(rip).loops(1)
    create.sequenced_assembly(
        'refinedstorage:advanced_processor',
        'minecraft:heavy_weighted_pressure_plate',
        [
            create.deploying(rap, [rap, 'refinedstorage:silicon']),
            create.deploying(rap, [rap, 'createaddition:electrum_wire']),
            create.deploying(rap, [rap, 'refinedstorage:processor_binding']),
            create.deploying(rap, [rap, 'create_connected:control_chip'])
        ]
    ).transitionalItem(rap).loops(1)
    create.sequenced_assembly(
        'create:precision_mechanism',
        '#forge:plates/gold',
        [
            create.deploying(ipm, [ipm, 'create:large_cogwheel']),
            create.deploying(ipm, [ipm, 'create:cogwheel']),
            create.deploying(ipm, [ipm, 'createnuclear:steel_nugget'])
        ]
    ).transitionalItem(ipm).loops(5)
    create.sequenced_assembly(
        'moreburners:electric_burner',
        'create:andesite_casing',
        [
            create.deploying(ieb, [ieb, 'create:empty_blaze_burner']),
            create.deploying(ieb, [ieb, 'moreburners:copper_coil']),
            create.deploying(ieb, [ieb, 'minecraft:tinted_glass'])
        ]
    ).transitionalItem(ieb).loops(1)
})