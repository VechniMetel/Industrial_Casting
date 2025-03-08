ServerEvents.recipes(r => {
    const anvil = r.recipes.anvilcraft
    anvil.anvil_processing("test1")
        .hasBlock('anvilcraft:stamping_platform')
        .hasItemIngredient(Item.of('minecraft:apple'))
        .hasItemIngredient(Item.of('minecraft:gold_ingot'))
        .spawnItem(Item.of('minecraft:golden_apple'))
        .icon('minecraft:golden_apple')
})