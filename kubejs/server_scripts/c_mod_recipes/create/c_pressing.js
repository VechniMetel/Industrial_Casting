ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.pressing(
        'create_nouveau:bronze_sheet',
        'anvilcraft:bronze_ingot'
    )
    create.pressing(
        'create_nouveau:tin_sheet',
        'anvilcraft:tin_ingot'
    )
    create.pressing(
        'create_nouveau:steel_sheet',
        'create_nouveau:steel_ingot'
    )
})