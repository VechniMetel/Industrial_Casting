ServerEvents.recipes(r => {
    const ars_nouveau = r.recipes.ars_nouveau
    ars_nouveau.imbuement(
        '#hexcasting:staves',
        'hexcasting:staff/mindsplice',
        2000,
        [
            'minecraft:grindstone',
            '#hexcasting:brainswept_circle_components',
        ]
    )
    ars_nouveau.imbuement(
        '#forge:ingots/gold',
        'the_magical_industry:enchanted_gold_ingot',
        900,
        []
    )
    ars_nouveau.imbuement(
        '#forge:storage_blocks/gold',
        'the_magical_industry:enchanted_gold_block',
        8100,
        []
    )
})