ServerEvents.recipes((event) => {
    let create = event.recipes.create
    let ibh = 'the_magical_industry:incomplete_brass_hand'
    let ibr = 'the_magical_industry:incomplete_blaze_rod'

    create.sequenced_assembly(
        'create:brass_hand',
        '#forge:plates/brass',
        [
            create.deploying(ibh, [ibh, '#forge:nuggets/brass']),
            create.deploying(ibh, [ibh, '#forge:plates/brass']),
            create.deploying(ibh, [ibh, '#forge:nuggets/brass']),
            create.deploying(ibh, [ibh, '#forge:plates/brass']),
            create.deploying(ibh, [ibh, 'create:andesite_alloy'])
        ]
    ).transitionalItem(ibh).loops(1).id('create:crafting/kinetics/brass_hand')
    create.sequenced_assembly(
        'minecraft:blaze_rod',
        'the_magical_industry:coal_rod',
        [
            create.cutting(ibr, ibr),
            create.filling(ibr, [ibr, Fluid.of('minecraft:lava', 50)]),
            create.filling(ibr, [ibr, Fluid.of('minecraft:lava', 50)]),
            create.pressing(ibr, ibr)
        ]
    ).transitionalItem(ibr).loops(1)
})