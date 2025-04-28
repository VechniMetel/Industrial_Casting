BlockEvents.rightClicked("ars_additions:source_spawner", event => {
    if (event.hand == "OFF_HAND") return
    let player = event.getPlayer()
    if (player == null) return
    let isBreak = false;
    if (event.getItem().is("tconstruct:blaze_head")) {
        let spawnItem1 = event.getLevel().createEntity("item")
        spawnItem1.pos = event.block.pos
        spawnItem1.item = Item.of("minecraft:blaze_spawn_egg", 1);
        spawnItem1.spawn();
    }
})