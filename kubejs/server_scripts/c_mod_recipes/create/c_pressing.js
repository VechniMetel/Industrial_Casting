ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.pressing(
        'create_nouveau:bronze_sheet',
        'create_ironworks:bronze_ingot'
    )
    create.pressing(
        'create_nouveau:tin_sheet',
        'create_ironworks:tin_ingot'
    )
    create.pressing(
        'create_nouveau:steel_sheet',
        'create_ironworks:steel_ingot'
    )
})