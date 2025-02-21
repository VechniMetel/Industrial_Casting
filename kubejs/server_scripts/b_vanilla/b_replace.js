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
        'farmersdelight:straw', '#create_nouveau:rope_materials'
    )
    r.replaceInput(
        {
            input: 'supplementaries:flax'
        },
        'supplementaries:flax', '#create_nouveau:rope_materials'
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
    r.replaceOutput(
        {
            id: 'ars_nouveau:imbuement_amethyst'
        }, 'ars_nouveau:source_gem', 'hexcasting:charged_amethyst'
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
    armorReplace("minecraft", "minecraft", "create", "iron", "", "")
    armorReplace("minecraft", "minecraft", "create", "gold", "", "en")
    function plateReplace(metal, name) {
        const plateTag = `#forge:plates/${metal}`
        r.replaceInput(
           {input:plateTag},
           plateTag,name
        )
        r.replaceOutput(
            {output:plateTag},
            plateTag,name
         )
    }
    plateReplace("copper",'anvilcraft:copper_pressure_plate')
    plateReplace("brass",'anvilcraft:brass_pressure_plate')
    plateReplace("iron","minecraft:heavy_weighted_pressure_plate")
    plateReplace("gold","minecraft:light_weighted_pressure_plate")
})