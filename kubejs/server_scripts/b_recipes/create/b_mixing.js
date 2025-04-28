ServerEvents.recipes((event) => {
    let create = event.recipes.create
    create.mixing(
        [
            Fluid.of("the_magical_industry:molten_silicon",100),
            "create:scoria"
        ],
        [
            Fluid.of("the_magical_industry:molten_raw_silicon",100),
            Fluid.of("tconstruct:scorched_stone",1000)
        ]
    ).heated()
})