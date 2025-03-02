NetworkEvents.dataReceived("openBackpack",event => {
    const player = event.player;
    if (player.nbt.ForgeCaps['curios:inventory'].Curios.toString().match('create_nouveau:embers_charm')) {
        if (!player.data.embers_charm_cooldown) {
            player.data.embers_charm_cooldown = 0;
        };
        if (player.data.embers_charm_cooldown <= 0) {
            player.data.embers_charm_cooldown = 20;
            player.data.embers_charm_charging = true;
        }
    }
});

PlayerEvents.tick(event => {
    const player = event.player;
    if (!player.data.embers_charm_charging) return;
    if (player.data.embers_charm_cooldown > 0) {
        player.data.embers_charm_cooldown--;
    } else {
        player.data.embers_charm_charging = false;
        var playerHealth = player.getHealth();
        var damage = playerHealth * 0.5;
        player.attack(damage);
        var qwq = player.level.getEntitiesWithin(player.boundingBox.inflate(5));
        qwq.forEach(entity => {
            if (entity !== player) {
                var fireDamage = damage * 3;
                entity.attack(fireDamage);
                entity.setRemainingFireTicks(100);
            }
        });
        player.server.runCommandSilent(`title ${player.name.getString()} actionbar {"text":"消耗了${damage}滴血"}`);
    }
});