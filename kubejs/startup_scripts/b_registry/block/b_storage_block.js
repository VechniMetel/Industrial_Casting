StartupEvents.registry("block", (event) => {

    createstorageblock("steel", "iron")
    createstorageblock("enchanted_gold", "iron")

    function createstorageblock(key, level) {
        event.create(`${global.namespace}:${key}_block`)
            .soundType(SoundType.METAL)
            .hardness(3)
            .requiresTool(true)
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock(global.miningLevel[level])
            .tagBlock(`forge:storage_blocks/${key}`)
            .tagBlock('minecraft:beacon_base_blocks')
            .tagBlock('tconstruct:mineable/pickadze')
    }
})