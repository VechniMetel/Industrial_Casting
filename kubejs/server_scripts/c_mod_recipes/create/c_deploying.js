ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.deploying(
        '3x create:mechanical_crafter',
        [
            'create_nouveau:smart_casing',
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
        'create_nouveau:ejector_mechanism',
        [
            'extendedgears:shaftless_cogwheel',
            '#forge:plates/gold'
        ]
    )
    create.deploying(
        'create:weighted_ejector',
        [
            'create:depot',
            'create_nouveau:ejector_mechanism'
        ]
    )
})