ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.compacting(
        'createnuclear:steel_ingot',
        [
            'createbigcannons:cast_iron_ingot',
            '4x createnuclear:coal_dust'
        ]
    ).superheated()
    create.compacting(
        Fluid.of('the_magical_industry:molten_raw_silicon', 100),
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
    create.compacting(
        [
            'anvilcraft:wood_fiber',
            Fluid.of('untitled:sugar_cane_juice', 100)
        ],
        'minecraft:sugar_cane'
    )
})