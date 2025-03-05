ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.compacting(
        'createnuclear:steel_ingot',
        [
            'minecraft:iron_ingot',
            '4x createnuclear:coal_dust'
        ]
    ).superheated()
    create.compacting(
        Fluid.of('create_nouveau:molten_raw_silicon', 100),
        [
            Fluid.of("tconstruct:molten_quartz", 100),
            '4x createnuclear:coal_dust'
        ]
    ).superheated()
    create.compacting(
        '2x createnuclear:yellowcake',
        [
            '9x createnuclear:uranium_powder',
            Fluid.of("tconstruct:molten_uranium", 90)
        ]
    )
})