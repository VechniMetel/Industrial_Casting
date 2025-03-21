musicRegister("life", 215)
musicRegister("cfrb", 167)
musicRegister("evilris", 142)
musicRegister("muisiki_rekuiemu", 276)

function musicRegister(name, time) {

    StartupEvents.registry("sound_event", (event) => {
        event.create(`${global.namespace}:music.${name}`)
    })

    StartupEvents.registry("item", (event) => {
        event.create(`${global.namespace}:music_disc_${name}`, "music_disc")
            .song(`${global.namespace}:music.${name}`, time)
            .tag("music_discs")
    })

}