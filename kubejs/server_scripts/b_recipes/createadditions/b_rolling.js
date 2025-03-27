ServerEvents.recipes((event) => {

    rolling(
        Item.of('the_magical_industry:coal_rod', 1),
        Ingredient.of('#minecraft:coals')
    )

    function rolling(output, input) {
        event.custom(
            {
                "type": "createaddition:rolling",
                "input": input,
                "result": output
            }
        )
    }
})