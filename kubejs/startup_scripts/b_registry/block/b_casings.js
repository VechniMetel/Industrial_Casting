StartupEvents.registry("block", (event) => {
    let metalCasing = [
        "redstone_casing",
        "smart_andesite_casing",
        "smart_casing",
        "magic_casing",
        "source_casing",
        "electric_casing",
        "copper_wire"
    ]

    let netheriteCasing = [
        "steel_casing",
        "royal_steel_casing"
    ]

    metalCasing.forEach((type) => {
        event.create(`${global.namespace}:${type}`)
            .soundType(SoundType.METAL)
            .hardness(1.5)
            .requiresTool(true)
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock('create:wrench_pickup')
            .tagBlock('create:casing')
    })

    netheriteCasing.forEach((type) => {
        event.create(`${global.namespace}:${type}`)
            .soundType(SoundType.NETHERITE_BLOCK)
            .hardness(4)
            .requiresTool(true)
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock('create:wrench_pickup')
            .tagBlock('create:casing')
    })
})