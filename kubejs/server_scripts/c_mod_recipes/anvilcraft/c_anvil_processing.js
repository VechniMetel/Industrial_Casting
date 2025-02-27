ServerEvents.recipes(r => {
    const anvil = r.recipes.anvilcraft.anvil_processing
    r.recipes.anvilcraft.anvil_processing("test9")
        .hasWaterFluidCauldron(1)
        .hasItemIngredient('2x youkaishomecoming:fairy_ice_crystal')
        .damageAnvil()
        .spawnItem('minecraft:ice')
        .icon('minecraft:ice')
})