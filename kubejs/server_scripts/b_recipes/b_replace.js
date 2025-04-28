ServerEvents.recipes((event) => {
    function armorReplace(ingotMod, armorMod, sheetMod, metal, insult, ingotInsult) {
        const ingot = `${ingotMod}:${metal}_ingot`
        const helmet = `${armorMod}:${metal}${ingotInsult}_${insult}helmet`
        const chestplate = `${armorMod}:${metal}${ingotInsult}_${insult}chestplate`
        const leggings = `${armorMod}:${metal}${ingotInsult}_${insult}leggings`
        const boots = `${armorMod}:${metal}${ingotInsult}_${insult}boots`
        const plate = `#forge:plates/${metal}`
        const armors = [helmet, chestplate, leggings, boots]
        armors.forEach(e => {
            event.replaceInput(
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
        event.replaceInput(
            { input: plateTag },
            plateTag, name
        )
        event.replaceOutput(
            { output: plateTag },
            plateTag, name
        )
    }
    plateReplace("copper", "anvilcraft:copper_pressure_plate")
    plateReplace("brass", "anvilcraft:brass_pressure_plate")
    plateReplace("iron", "minecraft:heavy_weighted_pressure_plate")
    plateReplace("gold", "minecraft:light_weighted_pressure_plate")
    plateReplace("zinc", "anvilcraft:zinc_pressure_plate")

    function fullyReplace(item1, item2) {
        event.replaceInput(
            { input: item1 },
            item1, item2
        )
        event.replaceOutput(
            { output: item1 },
            item1, item2
        )
    }
    fullyReplace(
        "createnuclear:steel_block",
        "the_magical_industry:steel_block"
    )
    fullyReplace(
        "createnuclear:lead_block",
        "anvilcraft:lead_block"
    )
    fullyReplace(
        "createnuclear:lead_ingot",
        "anvilcraft:lead_ingot"
    )
})