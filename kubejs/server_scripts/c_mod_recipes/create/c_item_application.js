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
        'create:copper_casing',
        '#forge:glass_panes',
        'create:fluid_tank'
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
})
