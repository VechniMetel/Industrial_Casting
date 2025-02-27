ServerEvents.recipes(r => {
    function handcraft(input, handItem, output) {
        r.custom({
            "type": "create:item_application",
            "ingredients": [
                input, handItem
            ],
            "results": [
                output
            ]
        })
    }
    function handcraftIded(input, handItem, output, id) {
        r.custom({
            "type": "create:item_application",
            "ingredients": [
                input, handItem
            ],
            "results": [
                output
            ]
        }).id(id)
    }
    handcraft(
        "#create_nouveau:stripped_archwood",
        "#forge:ingots/gold",
        "create_nouveau:magic_casing"
    )
    handcraftIded(
        "create_nouveau:magic_casing",
        '#forge:glass_panes',
        'ars_nouveau:source_jar',
        "ars_nouveau:source_jar"
    )
    handcraft(
        'create:andesite_casing',
        'create_nouveau:storage_unit',
        'create:item_vault'
    )
    handcraft(
        'create:copper_casing',
        'create_nouveau:storage_unit',
        'create:fluid_tank'
    )
    handcraft(
        'create:railway_casing',
        'create_nouveau:storage_unit',
        'railways:fuel_tank'
    )
    handcraft(
        'create:shaft',
        'extendedgears:shaftless_cogwheel',
        'create:cogwheel'
    )
    handcraft(
        'create:shaft',
        'extendedgears:large_shaftless_cogwheel',
        'create:large_cogwheel'
    )
    handcraft(
        'extendedgears:shaftless_cogwheel',
        'create:shaft',
        'create:cogwheel'
    )
    handcraft(
        'extendedgears:large_shaftless_cogwheel',
        'create:shaft',
        'create:large_cogwheel'
    )
    handcraft(
        'create:andesite_casing',
        'extendedgears:shaftless_cogwheel',
        'create_basic_additions:basic_gearshift'
    )
    handcraft(
        'create_basic_additions:basic_gearshift',
        'extendedgears:shaftless_cogwheel',
        'create:clutch'
    )
    handcraft(
        'create:clutch',
        'extendedgears:shaftless_cogwheel',
        'create_basic_additions:andesite_t-gearbox'
    )
    handcraft(
        'create_basic_additions:andesite_t-gearbox',
        'extendedgears:shaftless_cogwheel',
        'create:gearbox'
    )
    handcraft(
        'create:gearbox',
        'extendedgears:large_shaftless_cogwheel',
        'create_connected:parallel_gearbox'
    )
    handcraft(
        'create_connected:parallel_gearbox',
        'extendedgears:large_shaftless_cogwheel',
        'create_connected:six_way_gearbox'
    )
    handcraft(
        'create_basic_additions:basic_gearshift',
        'minecraft:redstone',
        'create:gearshift'
    )
    handcraft(
        'create_nouveau:magic_casing',
        '#forge:plates/gold',
        'ars_nouveau:imbuement_chamber'
    )
    handcraft(
        'create_nouveau:magic_casing',
        'ars_nouveau:source_gem_block',
        'ars_nouveau:relay'
    )
    handcraft(
        'create_nouveau:magic_casing',
        '#forge:storage_blocks/quartz',
        'ars_nouveau:spell_prism'
    )
    handcraft(
        'ars_nouveau:spell_prism',
        'ars_nouveau:source_gem',
        'ars_elemental:advanced_prism'
    )
    handcraft(
        'create:brass_casing',
        'create:electron_tube',
        'create_nouveau:smart_casing'
    )
    handcraft(
        'create:fluid_pipe',
        'extendedgears:shaftless_cogwheel',
        'create:mechanical_pump'
    )
    handcraft(
        'create_nouveau:smart_casing',
        'create:chute',
        'create:smart_chute'
    )
    handcraft(
        'create_nouveau:smart_casing',
        'minecraft:observer',
        'create:content_observer'
    )
    handcraft(
        'create_nouveau:smart_casing',
        'minecraft:comparator',
        'create:stockpile_switch'
    )
    handcraft(
        'minecraft:stone',
        'minecraft:glowstone_dust',
        'supplementaries:stone_lamp'
    )
    handcraft(
        'minecraft:blackstone',
        'minecraft:glowstone_dust',
        'supplementaries:blackstone_lamp'
    )
    handcraft(
        'minecraft:deepslate',
        'minecraft:glowstone_dust',
        'supplementaries:deepslate_lamp'
    )
    handcraft(
        'minecraft:end_stone',
        'minecraft:glowstone_dust',
        'supplementaries:end_stone_lamp'
    )
    handcraft(
        'create_nouveau:magic_casing',
        'create_nouveau:enchantment_mechanism',
        'create_nouveau:source_casing'
    )
    handcraft(
        'create:andesite_casing',
        'create_nouveau:chain_drive',
        'create:encased_chain_drive'
    )
    handcraft(
        'create_nouveau:smart_casing',
        'extendedgears:shaftless_cogwheel',
        'create:sequenced_gearshift'
    )
    handcraft(
        'minecraft:netherrack',
        'create_nouveau:cage',
        'create:empty_blaze_burner'
    )
    handcraft(
        'create:brass_casing',
        'create_nouveau:cage',
        'create_connected:empty_fan_catalyst'
    )
    handcraft(
        'create:andesite_casing',
        'minecraft:iron_block',
        'create:mechanical_press'
    )
    handcraft(
        'create_basic_additions:basic_gearshift',
        'create:whisk',
        'create:mechanical_mixer'
    )
    handcraft(
        'create:andesite_casing',
        'create_nouveau:saw',
        'create:mechanical_saw'
    )
    handcraft(
        'create:andesite_casing',
        'create:propeller',
        'create:encased_fan'
    )
    handcraft(
        'create:andesite_casing',
        'create_nouveau:storage_connector',
        'create:portable_storage_interface'
    )
    handcraft(
        'create:copper_casing',
        'create_nouveau:storage_connector',
        'create:portable_fluid_interface'
    )
    handcraft(
        'create:railway_casing',
        'create_nouveau:storage_connector',
        'railways:portable_fuel_interface'
    )
    handcraft(
        'create_nouveau:smart_casing',
        'create_nouveau:storage_connector',
        'create_connected:inventory_access_port'
    )
    handcraft(
        '#minecraft:wooden_slabs',
        'create:shaft',
        'create:turntable'
    )
    handcraft(
        '#forge:stone',
        'create:turntable',
        'create:windmill_bearing'
    )
    handcraft(
        'create:andesite_casing',
        'create:turntable',
        'create:mechanical_bearing'
    )
    handcraft(
        'create_nouveau:smart_casing',
        'create:turntable',
        'create:clockwork_bearing'
    )
    handcraft(
        'create:shaft',
        'tconstruct:pattern',
        'create:piston_extension_pole'
    )
    handcraft(
        'create_nouveau:source_casing',
        'minecraft:diamond',
        'ars_nouveau:enchanting_apparatus'
    )
    handcraft(
        'create_nouveau:source_casing',
        'ars_nouveau:sourcestone',
        'ars_nouveau:arcane_pedestal'
    )
    handcraft(
        'ars_nouveau:sourcestone',
        'create_nouveau:enchantment_mechanism',
        'ars_nouveau:arcane_core'
    )
    handcraft(
        'create_nouveau:source_casing',
        'ars_nouveau:source_gem_block',
        'ars_nouveau:ritual_brazier'
    )
    handcraft(
        'create:andesite_casing',
        'create:piston_extension_pole',
        'create:mechanical_piston'
    )
    handcraft(
        'minecraft:cauldron',
        'create:andesite_alloy',
        'create:basin'
    )
    handcraft(
        'create:andesite_casing',
        'create:andesite_alloy',
        'create:depot'
    )
    handcraft(
        'create_basic_additions:basic_gearshift',
        '#forge:stone',
        'create:millstone'
    )
    handcraft(
        'create:brass_casing',
        'create:precision_mechanism',
        'create:rotation_speed_controller'
    )
    handcraft(
        'create:rotation_speed_controller',
        'create:brass_hand',
        'create:mechanical_arm'
    )
    handcraft(
        'create:copper_casing',
        'minecraft:dried_kelp',
        'create:spout'
    )
    handcraft(
        'create:spout',
        '#forge:plates/iron',
        'create_enchantment_industry:printer'
    )
    handcraft(
        'create:andesite_casing',
        'create:electron_tube',
        'create_nouveau:smart_andesite_casing'
    )
    handcraft(
        'create_nouveau:smart_andesite_casing',
        'create_nouveau:chain_drive',
        'create:adjustable_chain_gearshift'
    )
    handcraft(
        'create_nouveau:smart_andesite_casing',
        'create:brass_hand',
        'create:deployer'
    )
    handcraft(
        'create_nouveau:magic_casing',
        'create_nouveau:storage_unit',
        'starbunclemania:fluid_jar'
    )
    handcraft(
        'create_nouveau:magic_casing',
        '#forge:glass',
        'ars_nouveau:mob_jar'
    )
    handcraft(
        'ars_nouveau:relay',
        'starbunclemania:fluid_jar',
        'starbunclemania:source_condenser'
    )
    handcraft(
        'create_nouveau:smart_andesite_casing',
        'create:crushing_wheel',
        'create:mechanical_roller'
    )
    handcraft(
        'create:copper_casing',
        'minecraft:iron_bars',
        'create:item_drain'
    )
    handcraft(
        'create:copper_casing',
        '#create:sandpaper',
        'create_enchantment_industry:disenchanter'
    )
    handcraft(
        'create:brass_casing',
        'createaddition:capacitor',
        'create_nouveau:electric_casing'
    )
    handcraft(
        'create_nouveau:electric_casing',
        'create_nouveau:storage_connector',
        'createaddition:portable_energy_interface'
    )
    handcraft(
        'create_nouveau:electric_casing',
        'create_nouveau:storage_unit',
        'createaddition:modular_accumulator'
    )
    handcraft(
        'create:andesite_casing',
        'minecraft:compass',
        'create:speedometer'
    )
    handcraft(
        'create:andesite_casing',
        'minecraft:clock',
        'create:cuckoo_clock'
    )
    handcraft(
        'create:andesite_casing',
        'create_nouveau:drill',
        'create:mechanical_drill'
    )
    handcraft(
        'create:copper_casing',
        'extendedgears:shaftless_cogwheel',
        'create_basic_additions:basic_copper_gearshift'
    )
    handcraft(
        'create_basic_additions:basic_copper_gearshift',
        'extendedgears:shaftless_cogwheel',
        'create_basic_additions:copper_clutch'
    )
    handcraft(
        'create_basic_additions:copper_clutch',
        'extendedgears:shaftless_cogwheel',
        'create_basic_additions:copper_t-gearbox'
    )
    handcraft(
        'create_basic_additions:copper_t-gearbox',
        'extendedgears:shaftless_cogwheel',
        'create_basic_additions:copper_gearbox'
    )
    handcraft(
        'create_basic_additions:basic_copper_gearshift',
        'minecraft:redstone',
        'create_basic_additions:copper_gearshift'
    )
    handcraft(
        'create:brass_casing',
        'extendedgears:shaftless_cogwheel',
        'create_basic_additions:basic_brass_gearshift'
    )
    handcraft(
        'create_basic_additions:basic_brass_gearshift',
        'extendedgears:shaftless_cogwheel',
        'create_basic_additions:brass_clutch'
    )
    handcraft(
        'create_basic_additions:brass_clutch',
        'extendedgears:shaftless_cogwheel',
        'create_basic_additions:brass_t-gearbox'
    )
    handcraft(
        'create_basic_additions:brass_t-gearbox',
        'extendedgears:shaftless_cogwheel',
        'create_basic_additions:brass_gearbox'
    )
    handcraft(
        'create_basic_additions:basic_brass_gearshift',
        'minecraft:redstone',
        'create_basic_additions:brass_gearshift'
    )
    handcraft(
        'create_basic_additions:brass_gearbox',
        'create:precision_mechanism',
        'create_connected:brass_gearbox'
    )
    handcraft(
        'create:railway_casing',
        'extendedgears:shaftless_cogwheel',
        'create_basic_additions:basic_railway_gearshift'
    )
    handcraft(
        'create_basic_additions:basic_railway_gearshift',
        'extendedgears:shaftless_cogwheel',
        'create_basic_additions:railway_clutch'
    )
    handcraft(
        'create_basic_additions:railway_clutch',
        'extendedgears:shaftless_cogwheel',
        'create_basic_additions:railway_t-gearbox'
    )
    handcraft(
        'create_basic_additions:railway_t-gearbox',
        'extendedgears:shaftless_cogwheel',
        'create_basic_additions:railway_gearbox'
    )
    handcraft(
        'create_basic_additions:basic_railway_gearshift',
        'minecraft:redstone',
        'create_basic_additions:railway_gearshift'
    )
    handcraft(
        'create:clutch',
        '#forge:plates/iron',
        'create_connected:freewheel_clutch'
    )
    handcraft(
        'create_connected:freewheel_clutch',
        'create:flywheel',
        'create_connected:centrifugal_clutch'
    )
    handcraft(
        'create_connected:freewheel_clutch',
        'create:electron_tube',
        'create_connected:overstress_clutch'
    )
    const logs = [
        "oak",
        "spruce",
        "birch",
        "jungle",
        "acacia",
        "dark_oak",
        "mangrove",
        "cherry"
    ]
    logs.forEach(wood => {
        let log = `minecraft:${wood}_log`
        let staff = `hexcasting:staff/${wood}`
        handcraft(
            log,
            'hexcasting:charged_amethyst',
            staff
        )
    })
    handcraft(
        'minecraft:crimson_stem',
        'hexcasting:charged_amethyst',
        'hexcasting:staff/crimson'
    )
    handcraft(
        'minecraft:warped_stem',
        'hexcasting:charged_amethyst',
        'hexcasting:staff/warped'
    )
    handcraft(
        'minecraft:bamboo_block',
        'hexcasting:charged_amethyst',
        'hexcasting:staff/bamboo'
    )
    handcraft(
        'hexcasting:edified_log',
        'hexcasting:charged_amethyst',
        'hexcasting:staff/edified'
    )
    handcraft(
        'ars_additions:source_spawner',
        'tconstruct:blaze_head',
        Item.of('minecraft:spawner')
    )
    handcraft(
        'create_nouveau:copper_wire',
        'anvilcraft:hollow_magnet_block',
        'anvilcraft:magnetoelectric_core'
    )
})
