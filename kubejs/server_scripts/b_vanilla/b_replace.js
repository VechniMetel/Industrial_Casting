ServerEvents.recipes(r => {
    r.replaceInput(
        {
            id: 'minecraft:iron_bars'
        },
        'minecraft:iron_ingot', 'createaddition:iron_rod'
    )
    r.replaceInput(
        {
            input: 'farmersdelight:straw'
        },
        'farmersdelight:straw', '#kubejs:rope_materials'
    )
    r.replaceInput(
        {
            input: 'supplementaries:flax'
        },
        'supplementaries:flax', '#kubejs:rope_materials'
    )
    r.replaceInput(
        {
            id: 'create_netherless:coal_rod_recipe'
        },
        'minecraft:coal_block',
        '#minecraft:coals'
    )
    r.replaceInput(
        {
            id: 'minecraft:lodestone'
        },
        'minecraft:netherite_ingot',
        'anvilcraft:magnet_ingot'
    )
    r.replaceInput(
        {
            id: "createaddition:mechanical_crafting/electric_motor"
        },
        'createaddition:iron_rod', 'anvilcraft:magnet_ingot'
    )
    r.replaceInput(
        {
            id: "createaddition:mechanical_crafting/alternator"
        },
        'createaddition:iron_rod', 'anvilcraft:magnet_ingot'
    )
    function armorReplace(ingotMod, armorMod, sheetMod, metal, insult, ingotInsult) {
        const ingot = `${ingotMod}:${metal}_ingot`
        const helmet = `${armorMod}:${metal}${ingotInsult}_${insult}helmet`
        const chestplate = `${armorMod}:${metal}${ingotInsult}_${insult}chestplate`
        const leggings = `${armorMod}:${metal}${ingotInsult}_${insult}leggings`
        const boots = `${armorMod}:${metal}${ingotInsult}_${insult}boots`
        const plate = `#forge:plates/${metal}`
        const armors = [helmet, chestplate, leggings, boots]
        armors.forEach(e => {
            r.replaceInput(
                {
                    output: e
                },
                ingot, plate
            )
        })
    }
    armorReplace("minecraft", "create_ironworks", "create", "copper", "armor_", "")
    armorReplace("create_ironworks", "create_ironworks", "create_nouveau", "bronze", "armor_", "")
    armorReplace("create", "create_ironworks", "create", "brass", "armor_", "")
    armorReplace("create_ironworks", "create_ironworks", "create_nouveau", "steel", "armor_", "")
    armorReplace("minecraft", "minecraft", "create", "iron", "", "")
    armorReplace("minecraft", "minecraft", "create", "gold", "", "en")
})