ServerEvents.recipes(r => {
    const moulds = Ingredient.of('#createbigcannons:moulds').getItemIds()
    moulds.forEach(mould => {
        r.custom(
            {
                "type": "hexerei:woodcutting",
                "ingredient": {
                    "tag": "minecraft:planks"
                },
                "ingredient_count": 4,
                "result": mould
            }
        )
    })


})