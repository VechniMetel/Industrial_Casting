ServerEvents.recipes((event) => {
    let { create } = event.recipes
    let ibh = "the_magical_industry:incomplete_brass_hand"
    let ibr = "the_magical_industry:incomplete_blaze_rod"
    let iet = "the_magical_industry:incomplete_electron_tube"
    let ic = "the_magical_industry:incomplete_capacitor"
    let iem = "the_magical_industry:incomplete_magic_capacitor"
    //底物占位，之后加未完成中间产物 
    let iw = "create:andesite_alloy"
    let iejm = 'minecraft:light_weighted_pressure_plate'

    let deploy = create.deploying
    let fill = create.filling
    let cutt = create.cutting
    let press = create.pressing
    create.sequenced_assembly(
        "create:brass_hand",
        "#forge:plates/brass",
        [
            create.deploying(ibh, [ibh, "#forge:nuggets/brass"]),
            create.deploying(ibh, [ibh, "#forge:plates/brass"]),
            create.deploying(ibh, [ibh, "#forge:nuggets/brass"]),
            create.deploying(ibh, [ibh, "#forge:plates/brass"]),
            create.deploying(ibh, [ibh, "create:andesite_alloy"])
        ]
    )
        .transitionalItem(ibh)
        .loops(1)
        .id("create:crafting/kinetics/brass_hand")
    create.sequenced_assembly(
        "minecraft:blaze_rod",
        "the_magical_industry:coal_rod",
        [
            create.cutting(ibr, ibr),
            create.filling(ibr, [ibr, Fluid.of("minecraft:lava", 500)]),
            create.filling(ibr, [ibr, Fluid.of("minecraft:lava", 500)]),
            create.pressing(ibr, ibr)
        ]
    )
        .transitionalItem(ibr)
        .loops(1)
    create.sequenced_assembly(
        "create:electron_tube",
        "#forge:plates/iron",
        [
            create.deploying(iet, [iet, "#forge:nuggets/iron"]),
            create.deploying(iet, [iet, "#forge:wires/copper"]),
            create.deploying(iet, [iet, "create:polished_rose_quartz"])
        ]
    )
        .transitionalItem(iet)
        .loops(1)
        .id("create:crafting/materials/electron_tube")
    create.sequenced_assembly(
        "createaddition:capacitor",
        "#forge:plates/zinc",
        [
            create.deploying(ic, [ic, "#forge:plates/copper"]),
            create.filling(ic, [ic, Fluid.of("tconstruct:molten_quartz", 100)]),
            create.pressing(ic, ic)
        ]
    )
        .transitionalItem(ic)
        .loops(1)
        .id("createaddition:crafting/capacitor_1")
    create.sequenced_assembly(
        "the_magical_industry:enchantment_mechanism",
        "#forge:ingots/enchanted_gold",
        [
            create.pressing(iem, iem),
            create.deploying(iem, [iem, "#forge:nuggets/gold"]),
            create.deploying(iem, [iem, "ars_nouveau:magebloom_fiber"]),
            create.deploying(iem, [iem, "#forge:gems/source"])
        ]
    )
        .transitionalItem(iem)
        .loops(1)
    
    create.sequenced_assembly(
        'create:whisk',
        'create:andesite_alloy',
        [
            create.deploying(iw, [iw, 'minecraft:heavy_weighted_pressure_plate']),
            create.deploying(iw, [iw, 'minecraft:heavy_weighted_pressure_plate'])
        ]
    ).transitionalItem(iw).loops(1)
    create.sequenced_assembly(
        'the_magical_industry:ejector_mechanism',
        'minecraft:light_weighted_pressure_plate',
        [
            create.deploying(iejm, [iejm, 'minecraft:gold_nugget']),
            create.deploying(iejm, [iejm, 'minecraft:gold_nugget']),
            create.pressing(iejm, iejm)
        ]
    ).transitionalItem(iejm).loops(1)
})