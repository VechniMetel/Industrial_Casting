ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.compacting(
        'create_nouveau:steel_ingot',
        [
            'minecraft:iron_ingot',
            '4x #minecraft:coals'
        ]
    ).superheated()
    create.compacting(
        Fluid.of('create_nouveau:molten_raw_silicon',100),
        [
            Fluid.of("tconstruct:molten_quartz",100),
            '4x #minecraft:coals'
        ]
    ).superheated()
})