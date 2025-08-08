ServerEvents.recipes((event) => {
    event.stonecutting(
        "4x the_magical_industry:chain_drive",
        "minecraft:chain"
    )
    event.stonecutting(
        "2x the_magical_industry:storage_connector",
        "create:chute"
    )
    event.stonecutting(
        "2x the_magical_industry:storage_unit",
        "minecraft:barrel"
    )
    //pin
    event.stonecutting(
        "the_magical_industry:saw",
        Item.of("tconstruct:large_plate", "{Material:'tconstruct:iron'}").strongNBT()
    )

})