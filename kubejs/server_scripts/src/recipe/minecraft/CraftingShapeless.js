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
})