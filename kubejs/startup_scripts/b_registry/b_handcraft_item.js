StartupEvents.registry("item", r => {
    r.create('create_nouveau:tin_sheet')
    r.create('create_nouveau:steel_sheet')
    r.create('create_nouveau:enchantment_mechanism')
    r.create('create_nouveau:incomplete_enchantment_mechanism', "create:sequenced_assembly")
    r.create('create_nouveau:incomplete_electron_tube', "create:sequenced_assembly")
    r.create('create_nouveau:chain_drive')
    r.create("create_nouveau:cage")
    r.create("create_nouveau:enchanted_rose_quartz")
        .glow(true)
    r.create("create_nouveau:storage_unit")
    r.create("create_nouveau:storage_connector")
    r.create("create_nouveau:saw", "music_disc")
        .song("create_nouveau:music.crazy_f_robot_body", 167)
        .tag("music_discs")
})