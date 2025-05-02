ItemEvents.rightClicked("the_magical_industry:debug_tool", (event) => {
    if (global.isDeveloper) {
        if (event.hand == "OFF_HAND" && event.player.crouching) {
            event.player.getLevel().runCommandSilent("kjs hand")
        }
        else if (event.hand == "MAIN_HAND" && event.player.crouching) {
            event.player.getLevel().runCommandSilent("kill @e[type=!#the_magical_industry:debug_tool_filter]")
        }
        else if (event.hand == "MAIN_HAND") {
            event.player.getLevel().runCommandSilent("kill @e[type=item]")
        }
        else if (event.hand == "OFF_HAND") {
            let entity = event.player.rayTrace(10, false).entity.entityType
            event.player.tell(entity)

        }
    }
})

// 查看方块硬度(右键方块)
BlockEvents.rightClicked((event) => {
    let { player } = event
    let getItem = "the_magical_industry:geological_hammer"

    let blockState = event.getBlock().getBlockState()
    let pos = event.getBlock().getPos()
    let blockHardness = blockState.getDestroySpeed(event.getLevel(), pos)
    if (event.hand == "MAIN_HAND" &&
        player.mainHandItem === getItem &&
        global.isDeveloper) {
        player.swing()
        event.getPlayer().tell(
            Component
                .translate(
                    `message.${global.namespace}.debug.getHardness`,
                    [pos.x],
                    [pos.y],
                    [pos.z],
                    [blockHardness]
                ))
        event.cancel()
    }
})

// 秒杀生物
ItemEvents.rightClicked(
    "the_magical_industry:geological_hammer",
    (event) => {
        if (global.isDeveloper) {
            event.player.swing()
            event.player.rayTrace(5, false).entity.kill()
        }
    })