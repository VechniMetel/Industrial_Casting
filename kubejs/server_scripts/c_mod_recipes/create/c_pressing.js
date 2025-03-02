ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.pressing(
        'create_nouveau:steel_pressure_plate',
        'create_nouveau:steel_ingot'
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
    metals.forEach(material=>{
        let plate = `anvilcraft:${material}_pressure_plate`
        let ingot = `#forge:ingots/${material}`
        create.pressing(
            plate,
            ingot
        )
    })
})