ServerEvents.recipes((event) => {
    let create = event.recipes.create
    create.item_application(
        "create:mechanical_saw",
        [
            "create:andesite_casing",
            Item.of("tconstruct:large_plate", "{Material:'tconstruct:iron'}").strongNBT()
        ]
    ).id("create:crafting/kinetics/mechanical_saw")
    create.item_application(
        "createnuclear:reactor_casing",
        [
            "the_magical_industry:steel_casing",
            "#forge:plates/lead"
        ]
    ).id("createnuclear:item_application/reactor_casing_from_steel_and_brass_casing")
    create.item_application(
        "the_magical_industry:smart_andesite_casing",
        [
            "create:andesite_casing",
            "create:electron_tube"
        ]
    )
    create.item_application(
        "the_magical_industry:smart_andesite_casing",
        [
            "create:andesite_casing",
            "the_magical_industry:crude_electron_tube"
        ]
    )
    create.item_application(
        "the_magical_industry:magic_casing",
        [
            "#the_magical_industry:stripped_archwood",
            "#forge:ingots/enchanted_gold"
        ]
    )
})