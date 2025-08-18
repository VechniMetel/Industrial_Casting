StartupEvents.registry("block", (event) => {
    let cases1 = [
        'andesite_case',
        'smart_case',
        'steel_case'
    ]
    let cases2 =[
        'royal_case',
        'source_case',
    ]
    cases1.forEach((name) => {
        event.create(`${global.namespace}:${name}`)
            .soundType(SoundType.METAL)
            .hardness(1.5)
            .requiresTool(true)
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("create:wrench_pickup")
            .texture(Direction.north,`${global.namespace}:block/${name}_side`)
            .texture(Direction.east,`${global.namespace}:block/${name}_side`)
            .texture(Direction.south,`${global.namespace}:block/${name}_side`)
            .texture(Direction.west,`${global.namespace}:block/${name}_side`)
    })
    cases2.forEach((name) => {
        event.create(`${global.namespace}:${name}`)
            .soundType(SoundType.METAL)
            .hardness(1.5)
            .requiresTool(true)
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("create:wrench_pickup")
            .texture(Direction.north,`${global.namespace}:block/${name}_side_1`)
            .texture(Direction.east,`${global.namespace}:block/${name}_side_2`)
            .texture(Direction.south,`${global.namespace}:block/${name}_side_1`)
            .texture(Direction.west,`${global.namespace}:block/${name}_side_2`)
    })
})
