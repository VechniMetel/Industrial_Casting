//余烬符咒
NetworkEvents.dataReceived("openBackpack",event => {
    const player = event.player;
    if (player.nbt.ForgeCaps["curios:inventory"].Curios.toString().match("the_magical_industry:embers_charm")) {
        if (!player.data.embers_charm_cooldowncommon) {
            player.data.embers_charm_cooldowncommon = 0;
        };
        if (player.data.embers_charm_cooldowncommon <= 0) {
            player.data.embers_charm_cooldowncommon = 20;
            player.data.embers_charm_chargingcommon = true;
        }//设置时间
    };
    if (player.nbt.ForgeCaps["curios:inventory"].Curios.toString().match("the_magical_industry:embers_charm_plus")) {
        if (!player.data.embers_charm_cooldownplus) {
            player.data.embers_charm_cooldownplus = 0;
        };
        if (player.data.embers_charm_cooldownplus <= 0) {
            player.data.embers_charm_cooldownplus = 20;
            player.data.embers_charm_chargingplus = true;
        }//设置时间
    }
});

PlayerEvents.tick(event => {
    const player = event.player;
    if (!player.data.embers_charm_chargingcommon) return;
    if (player.data.embers_charm_cooldowncommon > 0) {
        player.data.embers_charm_cooldowncommon--;
    } else {
        player.data.embers_charm_chargingcommon = false;
        var playerHealthcommon = player.getHealth();//获取玩家当前生命值
        var damagecommon = playerHealthcommon * 0.5;
        player.attack(damagecommon);//造成伤害无法用抗性提升抵消
        var qwqcommon = player.level.getEntitiesWithin(AABB.of(player.x-10,player.y-4,player.z-10,player.x+10,player.y+4,player.z+10));//范围选定
        qwqcommon.forEach(entity => {
            if (entity !== player) {
                var fireDamagecommon = damagecommon * 3;
                entity.attack(fireDamagecommon);//给周围造成伤害
                entity.setRemainingFireTicks(1000);//燃烧时间，这玩意伤害不高，纯装饰
            };
        });
        player.server.runCommandSilent(`title ${player.name.getString()} actionbar {"text":"消耗了${damagecommon}滴血"}`);//播报
    };

    if (!player.data.embers_charm_chargingplus) return;
    if (player.data.embers_charm_cooldownplus > 0) {
        player.data.embers_charm_cooldownplus--;
    } else {
        player.data.embers_charm_chargingplus = false;
        var playerHealthplus = player.getHealth();//获取玩家当前生命值
        var damageplus = playerHealthplus * 0.5;
        player.attack(damageplus);//造成伤害无法用抗性提升抵消
        var qwqplus = player.level.getEntitiesWithin(AABB.of(player.x-5,player.y-2,player.z-5,player.x+5,player.y+2,player.z+5));//范围选定
        qwqplus.forEach(entity => {
            if (entity !== player) {
                var fireDamageplus = damageplus * 5;
                entity.attack(fireDamageplus);//给周围造成伤害
                entity.setRemainingFireTicks(1000);//燃烧时间，这玩意伤害不高，纯装饰
            };
        });
        player.server.runCommandSilent(`title ${player.name.getString()} actionbar {"text":"消耗了${damage}滴血"}`);//播报
    }
});

ItemEvents.foodEaten("minecraft:golden_apple", r => {
    let randommath = Math.random();
    r.player.tell(randommath);
    const { entity, target, hand, server, level } = r;
    if (randommath <= 0.5 && randommath >= 0.3) {
        entity.potionEffects.add("minecraft:regeneration", 2400, 30, false, true);
        entity.potionEffects.add("minecraft:wither", 2400, 10, false, true); 
        entity.potionEffects.add("minecraft:nausea", 2400, 30, false, true); 
        entity.potionEffects.add("minecraft:slowness", 2400, 1, false, true);
        entity.potionEffects.add("minecraft:blindness", 2400, 30, false, true);
        r.player.data.awa = 2400;
    }
})
PlayerEvents.tick(r => {
    const player = r.player;
    if (!player.data.awa) return;
    if (player.data.awa > 0) {
        player.data.awa--;
    }
    const ywe = player.data.awa / 20;
    player.server.runCommandSilent(`title ${player.name.getString()} actionbar {"text":"§5你现在没法用右键了awa,§3剩余时间${ywe}秒"}`);
})
ItemEvents.rightClicked(r => {
    if (r.player.data.awa > 0) {
        r.cancel()
    }
})
BlockEvents.rightClicked(r => {
    if (r.player.data.awa > 0) {
        r.cancel()
    }
})
ItemEvents.foodEaten(r => {
    if (r.player.data.awa < 40) {
        r.cancel()
    }
})

//皇家钢符咒
const curiosHelper = Java.loadClass("top.theillusivec4.curios.api.CuriosApi").getCuriosHelper()

//entity是否装备了饰品id为curioId的饰品
//return boolean
function isEquippedCurio(entity, curioId) {
    return curiosHelper.findFirstCurio(entity, curioId).isPresent()
}
EntityEvents.hurt(event => {
    let { entity, source, amount } = event
    //不为玩家时return
    if (!entity.class.toString().contains("ServerPlayer")) {
        return
    }

    //佩戴皇家钢符咒时伤害来源为铁砧时取消伤害判定
    if (isEquippedCurio(entity, "the_magical_industry:royal_steel_charm")) {
        if (source.toString().contains("anvil")) {
            event.cancel()
        }
    }
})

//我思故我在
PlayerEvents.tick(r => {
    const {player} = r
    let maxHealth = player.getMaxHealth();
    if (player.nbt.ForgeCaps["curios:inventory"].Curios.toString().match("the_magical_industry:cogito_ergo_sum")&& player.age % 20 === 0) {
        player.setHealth(maxHealth)
         const Hunger = player.saturation;
        if (Hunger <= 0) {
            player.foodLevel = Math.max(player.foodLevel - 2, 0);
        } else {
            player.saturation = Math.max(player.saturation - 1, 0);
        }
    }
})