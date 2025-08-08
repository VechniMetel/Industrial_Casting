StartupEvents.registry("item", (event) => {
    event.create("the_magical_industry:enchanted_gold_ingot")
        .glow(true)
        .tag("forge:ingots/enchanted_gold")
    event.create("the_magical_industry:enchanted_gold_nugget")
        .glow(true)
        .tag("forge:nuggets.enchanted_gold")

    event.create(`${global.namespace}:shaftless_cogwheel`)
    event.create(`${global.namespace}:shaftless_large_cogwheel`)
    event.create(`${global.namespace}:cranial_instrument`)
        .maxDamage(20)
    event.create(`${global.namespace}:brain`)
})