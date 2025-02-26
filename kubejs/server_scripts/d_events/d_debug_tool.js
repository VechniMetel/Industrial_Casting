BlockEvents.rightClicked(event => {
    // 检查手持物品是否为debug_tool
    const item = event.getItem()
    if (item.id !== 'create_nouveau:debug_tool') {
        return
    }

    // 获取目标方块和玩家
    const block = event.getBlock()
    const player = event.getPlayer()

    // 定义方向顺序
    const directionOrder = ['north', 'east', 'south', 'west', 'up', 'down']

    // 获取方块状态
    const blockState = block.blockState
    if (!blockState) {
        player.tell('无法获取方块状态')
        return
    }

    // 调试：输出所有属性
    console.log('Block ID:', block.id)
    console.log('All properties:', Object.keys(blockState.properties))

    // 检查方块是否具有方向属性
    const facingProperty = Object.keys(blockState.properties).find(prop => 
        prop.toLowerCase().includes('facing')
    )

    if (facingProperty) {
        // 获取当前方向
        const currentFacing = blockState.properties[facingProperty]
        const currentIndex = directionOrder.indexOf(currentFacing)
        
        if (currentIndex === -1) {
            player.tell('发现未知方向属性：' + currentFacing)
            return
        }

        // 计算新方向
        const nextIndex = (currentIndex + 1) % directionOrder.length
        const newFacing = directionOrder[nextIndex]

        // 创建新方块状态
        const newState = blockState.with(facingProperty, newFacing)

        // 更新方块
        block.set(newState)

        // 播放音效
        player.playSound('minecraft:block.lever.click', 1.0, 1.0)
        
        // 调试信息
        console.log(`Rotated block from ${currentFacing} to ${newFacing}`)
        player.tell(`方向已从 ${currentFacing} 改为 ${newFacing}`)
    } else {
        // 反馈无方向属性
        player.tell('这个方块没有方向属性！')
        console.log('Block properties:', blockState.properties)
    }
})