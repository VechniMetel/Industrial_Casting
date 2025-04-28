ServerEvents.recipes((event) => {
    let create = event.recipes.create
    create.compacting(
        Fluid.of("the_magical_industry:molten_raw_silicon",100),
        [
            Fluid.of("tconstruct:molten_quartz",100),
            "4x createnuclear:coal_dust"
        ]
    ).superheated().id("refinedstorage:silicon")
})