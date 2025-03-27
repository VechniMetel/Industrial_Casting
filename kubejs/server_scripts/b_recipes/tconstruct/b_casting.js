ServerEvents.recipes((event) => {

    castingtable(
        'the_magical_industry:incomplete_brass_hand',
        "tconstruct:molten_brass",
        360,
        'the_magical_industry:brass_hand_gold_cast',
        false,
        60
    )
    castingtable(
        'the_magical_industry:incomplete_brass_hand',
        "tconstruct:molten_brass",
        360,
        'the_magical_industry:brass_hand_sand_cast',
        true,
        60
    )
    castingtable(
        'the_magical_industry:incomplete_brass_hand',
        "tconstruct:molten_brass",
        360,
        'the_magical_industry:brass_hand_redsand_cast',
        true,
        60
    )
    castingtable(
        'the_magical_industry:crude_brass_hand',
        "the_magical_industry:molten_andesite_alloy",
        90,
        'the_magical_industry:incomplete_brass_hand',
        true,
        40
    )
    castingtable(
        'the_magical_industry:brass_hand_gold_cast',
        "tconstruct:molten_gold",
        90,
        'create:brass_hand',
        true,
        40
    )
    castingtable(
        'the_magical_industry:brass_hand_gold_cast',
        "tconstruct:molten_gold",
        90,
        'the_magical_industry:crude_brass_hand',
        true,
        40
    )

    castingbasin(
        'create:empty_blaze_burner',
        "tconstruct:molten_iron",
        360,
        'minecraft:netherrack',
        true,
        100
    )

    function castingtable(output, fluid, amount, cast, consume, time) {
        event.custom({
            "type": "tconstruct:casting_table",
            "cast": {
                "item": cast
            },
            "cast_consumed": consume,
            "cooling_time": time,
            "fluid": {
                "amount": amount,
                "fluid": fluid
            },
            "result": output
        })
    }
    function castingbasin(output, fluid, amount, cast, consume, time) {
        event.custom({
            "type": "tconstruct:casting_basin",
            "cast": {
                "item": cast
            },
            "cast_consumed": consume,
            "cooling_time": time,
            "fluid": {
                "amount": amount,
                "fluid": fluid
            },
            "result": output
        })
    }
})