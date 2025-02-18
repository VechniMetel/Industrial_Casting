StartupEvents.registry("sound_event", r => {
    r.create("create_nouveau:music.cfrb")
    r.create("create_nouveau:music.life")
})
StartupEvents.registry("item", r => {
    r.create("create_nouveau:music_disc_life", "music_disc")
        .song("create_nouveau:music.life", 215)
        .tag("music_discs")
    r.create("create_nouveau:music_disc_cfrb", "music_disc")
        .song("create_nouveau:music.cfrb", 167)
        .tag("music_discs")
})