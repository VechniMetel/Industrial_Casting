ItemEvents.rightClicked('the_magical_industry:debug_tool', (event) => {
    global.developerUserName.forEach((developer) => {
        if (event.player.username === developer) {
            if (event.hand == "OFF_HAND" && event.player.crouching) {
                event.player.getLevel().runCommandSilent("kjs hand")
            }
            else if (event.hand == "MAIN_HAND" && event.player.crouching) {
                event.player.getLevel().runCommandSilent("kill @e[type=!minecraft:player]")
            }
            else if (event.hand == "MAIN_HAND") {
                event.player.getLevel().runCommandSilent("kill @e[type=item]")
            }
        }
    })
})