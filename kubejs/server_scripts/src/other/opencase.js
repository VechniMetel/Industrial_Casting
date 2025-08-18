BlockEvents.rightClicked(`${global.namespace}:andesite_case`, event => {
    if(event.player.experienceProgress==0)return;//通过经验判断禁止机械手开盒
    let useditem= event.player.getMainHandItem();
    if (useditem.hasTag('minecraft:pickaxes'))
    {
        let rate = 0.02+0.01 * useditem.getEnchantmentLevel("minecraft:fortune");
        if(Math.random()<rate)
            event.player.give(`${global.namespace}:andesite_pearl_rare`);
        else
            event.player.give(`${global.namespace}:andesite_pearl`);
        event.block.set('minecraft:air');
    }
})
