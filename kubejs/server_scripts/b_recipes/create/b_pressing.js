ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.pressing(
        'the_magical_industry:steel_pressure_plate',
        'createnuclear:steel_ingot'
    )
    const metals = [
        "tungsten",
        "titanium",
        "silver",
        "tin",
        "lead",
        "uranium",
        "bronze"
    ]
    metals.forEach(material => {
        let plate = `anvilcraft:${material}_pressure_plate`
        let ingot = `#forge:ingots/${material}`
        create.pressing(
            plate,
            ingot
        )
    })
    create.pressing(
        'minecraft:paper',
        'anvilcraft:wood_fiber'
    )
})