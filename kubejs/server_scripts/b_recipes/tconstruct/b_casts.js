ServerEvents.recipes((event) => {
    event.custom(
        {
            "type": "tconstruct:molding_table",
            "material": {
                "tag": "tconstruct:casts/red_sand"
            },
            "pattern": {
                "item": 'the_magical_industry:crude_brass_hand'
            },
            "result": 'the_magical_industry:brass_hand_redsand_cast'
        }
    )
    event.custom(
        {
            "type": "tconstruct:molding_table",
            "material": {
                "tag": "tconstruct:casts/red_sand"
            },
            "pattern": {
                "item": 'create:brass_hand'
            },
            "result": 'the_magical_industry:brass_hand_redsand_cast'
        }
    )
    event.custom(
        {
            "type": "tconstruct:molding_table",
            "material": {
                "tag": "tconstruct:casts/sand"
            },
            "pattern": {
                "item": 'the_magical_industry:crude_brass_hand'
            },
            "result": 'the_magical_industry:brass_hand_sand_cast'
        }
    )
    event.custom(
        {
            "type": "tconstruct:molding_table",
            "material": {
                "tag": "tconstruct:casts/sand"
            },
            "pattern": {
                "item": 'create:brass_hand'
            },
            "result": 'the_magical_industry:brass_hand_sand_cast'
        }
    )
})