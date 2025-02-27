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
                const creative = r.getPlayer().isCreative()
                if (!creative) {
                    r.getPlayer().getInventory().add(item)
                }
            }
        }
    }
    else if (r.getBlock().hasTag("create_nouveau:special_pickup")) {
        if (r.hand == "OFF_HAND") return
        let player = r.getPlayer()
        if (player == null) return
        let isBreak = false;
        if (r.getItem().hasTag("forge:tools/key")) {
            if (r.player.crouching) {
                r.player.swing()
                r.level.destroyBlock(r.block.pos, true)
            }
        }
    }
})
const direction = {
    up: Direction.UP,
    down: Direction.DOWN,
    north: Direction.NORTH,
    south: Direction.SOUTH,
    east: Direction.EAST,
    west: Direction.WEST,
}
BlockEvents.rightClicked((e) => {
    const { item, hand, facing, block, player } = e
    if (hand !== 'main_hand' || player.crouching) return
    if (item.id !== 'create_nouveau:key_of_dissociation') return
    const insidelist = r.getBlock().hasTag("create_nouveau:key_rotate")
    if (!insideList) return
    if (block.properties === undefined) return
    const blockFacing = block.properties.facing
    if (blockFacing === undefined) return
    /** @type {Internal.Direction_} */
    const blockFacingDirection = direction[blockFacing]
    let newDirection
    /**
     * facing.axis is one of [x, y, z] without regard for the positive or
     * negative direction. We need to take into account the negative or positive
     * directive or this will rotate blocks the opposite way if we are facing
     * the opposite side of the block.
     */
    if (facing.axisDirection.step > 0) {
        newDirection = blockFacingDirection.getClockWise(facing.axis)
    } else {
        newDirection = blockFacingDirection.getCounterClockWise(facing.axis)
    }
    const newProperties = Object.assign({}, block.properties, {
        facing: newDirection,
    })
    if (forbiddenStates[block.id] === newDirection) return
    block.set(block.id, newProperties)
    player.swing()
    if (newDirection !== blockFacingDirection) {
        player.playNotifySound('create:wrench_rotate', 'players', 2, 1)
    }
    e.cancel()
})