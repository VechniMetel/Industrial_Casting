ServerEvents.tags("item", r => {
    r.add(
        'create_nouveau:stripped_archwood',
        [
            'ars_nouveau:stripped_blue_archwood_log',
            'ars_nouveau:stripped_blue_archwood_wood',
            'ars_nouveau:stripped_green_archwood_log',
            'ars_nouveau:stripped_green_archwood_wood',
            'ars_nouveau:stripped_red_archwood_log',
            'ars_nouveau:stripped_red_archwood_wood',
            'ars_nouveau:stripped_purple_archwood_log',
            'ars_nouveau:stripped_purple_archwood_wood',
            'ars_elemental:stripped_yellow_archwood_log',
            'ars_elemental:stripped_yellow_archwood'
        ])
    r.add('create:casing', [
        'create_nouveau:magic_casing',
        'create_nouveau:source_casing',
        'create_nouveau:smartcasing'
    ])
    r.add(
        'kubejs:rope_materials',
        [
            'supplementaries:flax',
            'farmersdelight:straw'
        ]
    )
})