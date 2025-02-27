BlockEvents.rightClicked("minecraft:oak_log", r => {
    if (r.hand == "OFF_HAND") return
    let player = r.getPlayer()
    if (player == null) return
    if (r.getItem().is('create_nouveau:steel_ingot')) {
        const { x, y, z } = r.block.pos
        let numx = x
        let numz = z
        let outx
        let outz
        let pos
        let rand
        const num = [-2, -1, 0, 1, 2]
        for (let m = 0; m <= 4; m++) {
            outx = numx + num[m]
            for (let n = 0; n <= 4; n++) {
                outz = numz + num[n]
                pos = new BlockPos(outx, y, outz)
                let block = r.level.getBlock(pos).getId()
                if (block === 'minecraft:stone') {
                    rand = Math.random()
                    if (rand <= 0.07) {
                        r.level.getBlock(pos).set('minecraft:iron_ore')
                    } else if (rand <= 0.21) {
                        r.level.getBlock(pos).set('minecraft:redstone_ore')
                    } else if (rand <= 0.32) {
                        r.level.getBlock(pos).set('create:zinc_ore')
                    }
                }
                else if (block === 'minecraft:deepslate') {
                    rand = Math.random();
                    if (rand <= 0.1) {
                        r.level.getBlock(pos).set('minecraft:deepslate_iron_ore')
                    } else if (rand <= 0.34) {
                        r.level.getBlock(pos).set('minecraft:deepslate_redstone_ore')
                    } else if (rand <= 0.42) {
                        r.level.getBlock(pos).set('create:deepslate_zinc_ore')
                    }
                }
            }
        }
        r.getPlayer().swing()
        if (r.player.isCreative()) {

        }
        else {
            r.getItem().shrink(1)
        }
    }
})
