ServerEvents.recipes((event) => {
    let cancelRecipes = [
        'create:crafting/kinetics/empty_blaze_burner',
        'createaddition:crafting/capacitor_2'
    ]
    cancelRecipes.forEach(value => {
        event.remove({ id: value })
    });
})