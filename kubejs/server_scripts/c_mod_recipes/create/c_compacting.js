ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.compacting(
        'create_nouveau:steel_ingot',
        [
            'minecraft:iron_ingot',
            '4x minecraft:charcoal'
        ]
    ).superheated()
})