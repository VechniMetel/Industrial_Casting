ServerEvents.recipes((event) => {
    let { create } = event.recipes
    create.deploying(
        "create:blaze_burner",
        [
            "create:empty_blaze_burner",
            "tconstruct:blaze_head"
        ]
    )
})