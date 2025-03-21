StartupEvents.registry("block", r => {
    r.create('the_magical_industry:silver_ore')
        .soundType(SoundType.STONE)
        .hardness(3)
        .resistance(3)
        .tag("forge:ores")
        .tag('forge:ores/silver')
        .tag("forge:ore_rates/dense")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock('forge:need_stone_tool')
        .requiresTool(true)
})