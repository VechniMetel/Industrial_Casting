ServerEvents.recipes((event) => {
    let { create } = event.recipes
    create.deploying(
        "create:blaze_burner",
        [
            "create:empty_blaze_burner",
            "tconstruct:blaze_head"
        ]
    )
    create.deploying(
        '2x hexcasting:amethyst_sconce',
        [
            'anvilcraft:copper_pressure_plate',
            'minecraft:amethyst_shard'
        ]
    )
})