ServerEvents.tags("entity_type", (event) => {
    event.add(
        `${global.namespace}:debug_tool_filter`,
        [
            "minecraft:player",
            "minecraft:minecart",
            "alexcaves:quarry_smasher",
            "createbigcannons:pitch_contraption",
            "create:carriage_contraption",
            "create:contraption",
            "create:gantry_contraption",
            "create:stationary_contraption",
            "create:super_glue",
            "create:seat"
        ]
    )
})