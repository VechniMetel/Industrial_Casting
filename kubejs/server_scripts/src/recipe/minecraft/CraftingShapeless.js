ServerEvents.recipes((event) => {
    let { kubejs } = event.recipes
    kubejs.shapeless(
        "9x the_magical_industry:enchanted_gold_ingot",
        "the_magical_industry:enchanted_gold_block"
    )
    kubejs.shapeless(
        "9x the_magical_industry:enchanted_gold_nugget",
        "the_magical_industry:enchanted_gold_ingot"
    )
    kubejs.shapeless(
        'the_magical_industry:cranial_instrument',
        ['minecraft:iron_ingot','the_magical_industry:drill']
    )
})