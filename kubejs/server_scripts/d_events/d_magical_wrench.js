BlockEvents.rightClicked(r => {
    if (r.getBlock().hasTag("create_nouveau:key_pickup")) {
        if (r.hand == "OFF_HAND") return
        let player = r.getPlayer()
        if (player == null) return
        let isBreak = false;
        if (r.getItem().hasTag("forge:tools/key")) {
            if (r.player.crouching) {
                r.player.swing()
                r.level.destroyBlock(r.block.pos, false)
                let item = r.getBlock().getItem()
                r.getPlayer().getInventory().add(item)
            }
        }
    }
})