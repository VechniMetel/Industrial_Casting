ServerEvents.tags("block", r => {
    const storage = [
        "zinc",
        "tin",
        "titanium",
        "tungsten",
        "lead",
        "silver",
        "uranium",
        "bronze",
        "brass"
    ]
    storage.forEach(metal => {
        let block = `anvilcraft:${metal}_block`
        let tag = `forge:storage_blocks/${metal}`
        r.add(tag, block)
    })
    r.add('create:casing', [
        'create_nouveau:magic_casing',
        'create_nouveau:source_casing',
        'create_nouveau:smart_casing',
        'create_nouveau:smart_andesite_casing'
    ])
    r.add('create:wrench_pickup', [
        'create_nouveau:magic_casing',
        'create_nouveau:source_casing',
        'create_nouveau:smart_casing',
        'create_nouveau:smart_andesite_casing'
    ])
    r.add(
        'create:safe_nbt',
        [
            'create_connected:brass_gearbox'
        ]
    )
    r.remove(
        "minecraft:mineable/pickaxe",
        [
            "ducky-periphs:focal_link_block"
        ]
    )
    r.add('create_nouveau:key_pickup',
        [
            'hexcasting:impetus/empty',
            'hexcasting:directrix/boolean',
            'hexcasting:directrix/redstone',
            'hexcasting:impetus/rightclick',
            'hexcasting:directrix/empty',
            'hexcasting:impetus/look',
            'hexcasting:impetus/redstone',
            'hexcasting:slate'
        ]
    )
})