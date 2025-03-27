ServerEvents.recipes((event) => {
    let create = event.recipes.create
    create.sandpaper_polishing(
        'create:brass_hand',
        'the_magical_industry:crude_brass_hand'
    )
    create.sandpaper_polishing(
        'the_magical_industry:brass_hand_sand_cast',
        'tconstruct:blank_sand_cast'
    )
    create.sandpaper_polishing(
        'the_magical_industry:brass_hand_redsand_cast',
        'tconstruct:blank_red_sand_cast'
    )
})