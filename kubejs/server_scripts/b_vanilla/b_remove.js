ServerEvents.recipes(r => {
    const remove = [
        'ars_nouveau:source_jar',
        'create:crafting/kinetics/fluid_tank',
        'create_connected:crafting/kinetics/fluid_vessel',
        'extendedgears:crafting/shaftless_cogwheel',
        'extendedgears:crafting/large_shaftless_cogwheel',
        'create:crafting/kinetics/cogwheel',
        'extendedgears:crafting/cogwheel',
        'create:crafting/kinetics/large_cogwheel',
        'extendedgears:crafting/large_cogwheel',
        'create:deploying/cogwheel',
        'create:deploying/large_cogwheel',
        'create:crafting/kinetics/large_cogwheel_from_little',
        'extendedgears:crafting/half_shaft_cogwheel',
        'extendedgears:crafting/large_half_shaft_cogwheel',
        'extendedgears:crafting/small_large_half_shaft_cogwheel_to_large/large_half_shaft_cogwheel',
        'extendedgears:deploying/large_half_shaft_cogwheel',
        'extendedgears:deploying/half_shaft_cogwheel',
        'create_basic_additions:workbench/basic_gearshift',
        'create:crafting/kinetics/clutch',
        'create_basic_additions:workbench/andesite_t-gearbox',
        'create:crafting/kinetics/gearbox',
        'create_connected:crafting/kinetics/parallel_gearbox',
        'create_connected:crafting/kinetics/six_way_gearbox_from_parallel',
        'create_connected:crafting/kinetics/six_way_gearbox',
        'create_connected:crafting/kinetics/six_way_gearbox_from_gearbox',
        'create:crafting/kinetics/gearshift',
        'create_basic_additions:workbench/gearshift_powered',
        'create:crafting/kinetics/vertical_gearbox',
        'ars_nouveau:imbuement_chamber',
        'ars_nouveau:relay',
        'ars_nouveau:spell_prism',
        'ars_elemental:advanced_prism',
        'create:crafting/kinetics/mechanical_pump',
        'create:crafting/kinetics/smart_chute',
        'create:crafting/logistics/stockpile_switch',
        'create:crafting/logistics/content_observer',
        'create:crafting/kinetics/mechanical_crafter',
        'supplementaries:stone_lamp',
        'supplementaries:blackstone_lamp',
        'supplementaries:deepslate_lamp',
        'supplementaries:end_stone_lamp',
        'create:crafting/kinetics/track_station',
        'create:crafting/kinetics/track_signal',
        'create:crafting/kinetics/track_observer_from_other_plates',
        'create:crafting/kinetics/track_observer',
        'create:crafting/kinetics/controls',
        'create:crafting/kinetics/encased_chain_drive'
    ]
    remove.forEach(e => {
        r.remove({ id: e })
    })
})