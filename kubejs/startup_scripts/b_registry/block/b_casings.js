StartupEvents.registry("block", (event) => {
    let casing = [
        "redstone_casing",
        "smart_andesite_casing",
        "smart_casing",
        "magic_casing",
        "source_casing",
        "electric_casing",
        "steel_casing",
        "royal_steel_casing",
        "copper_wire"
    ]
    casing.forEach((type) => {
        event.create(`${global.namespace}:${type}`)
            .soundType(SoundType.METAL)
            .hardness(3)
            .requiresTool(true)
            .tagBlock("minecraft:mineable/pickaxe")
    })
})