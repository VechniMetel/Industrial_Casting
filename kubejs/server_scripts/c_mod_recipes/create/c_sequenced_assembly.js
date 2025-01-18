ServerEvents.recipes(r => {
    const create = r.recipes.create
    create.sequenced_assembly(
        [
            Item.of("create_nouveau:enchantment_mechanism").withChance(0.7),
            Item.of("create:golden_sheet").withChance(0.1),
            Item.of("create:cogwheel").withChance(0.1),
            Item.of("create:crushed_raw_gold").withChance(0.1)
        ],
        "create:golden_sheet",
        [
            create.deploying(iem,[iem,'ars_nouveau:source_gem']),
            create.deploying(iem,[iem,'ars_technica:amethyst_dust']),
            create.deploying(iem,[iem,'minecraft:gold_nugget'])
        ]
    ).transitionalItem(iem).loops(5)
    create.sequenced_assembly(
        "create_nouveau:enchantment_mechanism",
        "create:golden_sheet",
        [
            create.deploying(iem,[iem,'ars_nouveau:source_gem']),
            create.deploying(iem,[iem,'ars_technica:amethyst_dust']),
            create.deploying(iem,[iem,'createaddition:electrum_nugget'])
        ]
    ).transitionalItem(iem).loops(5)
})