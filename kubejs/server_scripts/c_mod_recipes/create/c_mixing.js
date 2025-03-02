ServerEvents.recipes(r=>{
    const create = r.recipes.create
    create.mixing(
        [
            Fluid.of('create_nouveau:molten_silicon',100),
            'create:scoria'
        ],
        [
            Fluid.of('tconstruct:scorched_stone',500),
            Fluid.of('create_nouveau:molten_raw_silicon',100)
        ]
    )
    create.mixing(
        [
            Fluid.of('create_nouveau:molten_silicon',100),
            '2x create:scorchia'
        ],
        [
            Fluid.of('tconstruct:seared_stone',1000),
            Fluid.of('create_nouveau:molten_raw_silicon',100)
        ]
    )
})