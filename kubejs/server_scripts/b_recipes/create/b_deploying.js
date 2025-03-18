ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.deploying(
        '3x create:mechanical_crafter',
        [
            'the_magical_industry:smart_casing',
            'minecraft:crafting_table'
        ]
    )
    create.deploying(
        '2x create:track_station',
        [
            'create:railway_casing',
            '#supplementaries:flags'
        ]
    )
    create.deploying(
        '4x create:track_signal',
        [
            'create:railway_casing',
            'create:electron_tube'
        ]
    )
    create.deploying(
        '2x create:track_observer',
        [
            'create:railway_casing',
            '#minecraft:wooden_pressure_plates'
        ]
    )
    create.deploying(
        'create:controls',
        [
            'create:railway_casing',
            'create:precision_mechanism'
        ]
    )
    create.deploying(
        'the_magical_industry:ejector_mechanism',
        [
            'extendedgears:shaftless_cogwheel',
            '#forge:plates/gold'
        ]
    )
    create.deploying(
        'create:weighted_ejector',
        [
            'create:depot',
            'the_magical_industry:ejector_mechanism'
        ]
    )
    create.deploying(
        'create:blaze_burner',
        [
            'tconstruct:blaze_head',
            'create:empty_blaze_burner'
        ]
    )
})