ServerEvents.recipes((event) => {
    let { create } = event.recipes
    create.cutting(
        "the_magical_industry:shaftless_cogwheel",
        "#minecraft:wooden_slabs"
    )
    create.cutting(
        "the_magical_industry:shaftless_large_cogwheel",
        "#minecraft:planks"
    )
})