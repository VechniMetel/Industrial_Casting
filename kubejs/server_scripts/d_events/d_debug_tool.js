let time = 0
ItemEvents.rightClicked('create_nouveau:debug_tool', r => {
    if (time < 1) {
        time = 1
    }
    r.getPlayer().tell('已禁用右键')
})
ItemEvents.dropped('create_nouveau:debug_tool', r => {
    if (time > 0) {
        time = 0
    }
    r.getPlayer().tell('已启用右键')
})
ItemEvents.rightClicked(r => {
    if (time > 0) {
        r.cancel()
    }
})
BlockEvents.rightClicked(r => {
    if (time > 0) {
        r.cancel()
    }
})