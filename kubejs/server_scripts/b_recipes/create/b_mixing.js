ServerEvents.recipes(r=>{
    const create = r.recipes.create
    create.mixing(
        [
            Fluid.of('the_magical_industry:molten_silicon',100),
            'create:scoria'
        ],
        [
            Fluid.of('tconstruct:scorched_stone',500),
            Fluid.of('the_magical_industry:molten_raw_silicon',100)
        ]
    )
    create.mixing(
        [
            Fluid.of('the_magical_industry:molten_silicon',100),
            '2x create:scorchia'
        ],
        [
            Fluid.of('tconstruct:seared_stone',1000),
            Fluid.of('the_magical_industry:molten_raw_silicon',100)
        ]
    )
    create.mixing(
        'minecraft:sugar',
        Fluid.of('untitled:sugar_cane_juice',50)
    ).heated()
})