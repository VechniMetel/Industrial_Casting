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
// pin's add
ServerEvents.recipes((event) => {
    let output_cancelRecipes = [
        'ars_technica:amethyst_dust',
        /*'hexcasting:cypher',
        'hexcasting:trinket',
        'hexcasting:artifact',*/
        'create:deployer',
        'create:mechanical_drill',
        'create:mechanical_mixer', 
        'create:mechanical_press',
        'create:encased_fan',
        'create:mechanical_press', 
        'create:mechanical_saw', 
        'create:encased_chain_drive', 
        'create:millstone',
        'create:adjustable_chain_gearshift',
        'create:weighted_ejector'
    ]
    output_cancelRecipes.forEach((value) => {
        event.remove({ output: value })
    });
})