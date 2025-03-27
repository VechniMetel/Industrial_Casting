ServerEvents.recipes((event) => {
    let cancelRecipes = [
        'create:crafting/kinetics/empty_blaze_burner'
    ]
    cancelRecipes.forEach(value => {
        event.remove({ id: value })
    });
})