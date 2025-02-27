PlayerEvents.tick(event => {
    const player = event.player;
    const isHoldingSword =
        player.getMainHandItem() == 'anvilcraft:ember_anvil_hammer' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_pickaxe' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_shovel' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_sword' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_hoe' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_axe' ||
        player.getMainHandItem() == 'anvilcraft:ember_anvil' ||
        player.getMainHandItem() == 'anvilcraft:ember_smithing_table' ||
        player.getMainHandItem() == 'anvilcraft:ember_grindstone' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_ingot' ||
        player.getMainHandItem() == 'anvilcraft:cut_ember_metal_stairs' ||
        player.getMainHandItem() == 'anvilcraft:cut_ember_metal_slab' ||
        player.getMainHandItem() == 'anvilcraft:cut_ember_metal_pillar' ||
        player.getMainHandItem() == 'anvilcraft:cut_ember_metal_block' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_upgrade_smithing_template' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_nugget' ||
        player.getMainHandItem() == 'anvilcraft:ember_metal_block';
    const effects = player.hasEffect('minecraft:fire_resistance');
    if (!effects) {
        if (isHoldingSword && player.age % 20 === 0) {
            player.attack(4);
            player.setSecondsOnFire(2);
        };
    };
});