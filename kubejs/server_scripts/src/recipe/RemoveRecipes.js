ServerEvents.recipes((event) => {
    let cancelRecipes = [
        "create:crafting/kinetics/empty_blaze_burner",
        "create:crafting/kinetics/large_cogwheel_from_little",
        "create:deploying/cogwheel",
        "create:deploying/large_cogwheel"
    ]
    cancelRecipes.forEach((value) => {
        event.remove({ id: value })
    });
})