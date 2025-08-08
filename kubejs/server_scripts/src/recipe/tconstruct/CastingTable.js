ServerEvents.recipes((event) => {
    const  {tconstruct}  = event.recipes;

    tconstruct.casting_table(
        "the_magical_industry:incomplete_brass_hand",
        Fluid.of("tconstruct:molten_brass", 360),
        "the_magical_industry:brass_hand_gold_cast"
    )
        .cast_consumed(false)
        .cooling_time(60)

    tconstruct.casting_table(
        "the_magical_industry:incomplete_brass_hand",
        Fluid.of("tconstruct:molten_brass", 360),
        "the_magical_industry:brass_hand_sand_cast"
    )
        .cast_consumed(true)
        .cooling_time(60)

    tconstruct.casting_table(
        "the_magical_industry:incomplete_brass_hand",
        Fluid.of("tconstruct:molten_brass", 360),
        "the_magical_industry:brass_hand_redsand_cast"
    )
        .cast_consumed(true)
        .cooling_time(60)

    tconstruct.casting_table(
        "the_magical_industry:crude_brass_hand",
        Fluid.of("the_magical_industry:molten_andesite_alloy", 90),
        "the_magical_industry:incomplete_brass_hand"
    )
        .cast_consumed(true)
        .cooling_time(40)

    tconstruct.casting_table(
        "the_magical_industry:brass_hand_gold_cast",
        Fluid.of("tconstruct:molten_gold", 90),
        "create:brass_hand"
    )
        .cast_consumed(true)
        .cooling_time(40)

    tconstruct.casting_table(
        "the_magical_industry:brass_hand_gold_cast",
        Fluid.of("tconstruct:molten_gold", 90),
        "the_magical_industry:crude_brass_hand"
    )
        .cast_consumed(true)
        .cooling_time(40)

    tconstruct.casting_basin(

        "create:empty_blaze_burner",
        Fluid.of(
            "tconstruct:molten_iron", 360),
        "minecraft:netherrack"
    )
        .cast_consumed(true)
        .cooling_time(100)

})