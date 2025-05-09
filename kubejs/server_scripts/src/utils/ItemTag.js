ServerEvents.tags("item", (event) => {
    event.add(
        "the_magical_industry:stripped_archwood",
        [
            "ars_nouveau:stripped_blue_archwood_log",
            "ars_nouveau:stripped_blue_archwood_wood",
            "ars_nouveau:stripped_green_archwood_log",
            "ars_nouveau:stripped_green_archwood_wood",
            "ars_nouveau:stripped_red_archwood_log",
            "ars_nouveau:stripped_red_archwood_wood",
            "ars_nouveau:stripped_purple_archwood_log",
            "ars_nouveau:stripped_purple_archwood_wood",
            "ars_elemental:stripped_yellow_archwood_log",
            "ars_elemental:stripped_yellow_archwood"
        ])
    event.add(
        "the_magical_industry:rope_materials",
        [
            "supplementaries:flax",
            "farmersdelight:straw"
        ]
    )
    event.add(
        "hexcasting:dusts/amethyst",
        [
            "ars_technica:amethyst_dust"
        ]
    )
    event.add(
        "hexcasting:grants_root_advancement",
        [
            "ars_technica:amethyst_dust"
        ]
    )
    event.add(
        "tconstruct:anvil_metal",
        [
            "anvilcraft:royal_steel_block",
            "anvilcraft:ember_metal_block",
            "anvilcraft:polished_heavy_iron_block",
            "anvilcraft:cursed_gold_block",
            "anvilcraft:earth_core_shard_block"
        ]
    )
    event.add(
        "forge:plates/brass",
        [
            "anvilcraft:brass_pressure_plate"
        ]
    )
    event.remove(
        "forge:brass_plates",
        [
            "anvilcraft:brass_pressure_plate"
        ]
    )
    event.add(
        "alexscaves:ferromagnetic_items",
        [
            "anvilcraft:magnet_ingot",
            "anvilcraft:magnet_block",
            "anvilcraft:hollow_magnet_block",
            "anvilcraft:royal_anvil",
            "anvilcraft:ember_anvil",
            "anvilcraft:royal_smithing_table",
            "anvilcraft:royal_grindstone",
            "anvilcraft:stamping_platform",
            "anvilcraft:ember_grindstone",
            "anvilcraft:ember_smithing_table",
            "anvilcraft:chute"
        ]
    )
    event.add(
        "alexscaves:nuclear_furnace_rods",
        [
            "createnuclear:uranium_rod"
        ]
    )
    event.add(
        "createnuclear:fuel",
        [
            "alexscaves:uranium_rod"
        ]
    )
    event.add(
        "farmersdelight:tools/knives",
        [
            "illager_additions:master_katana",
            "illager_additions:katana"
        ]
    )
    event.add(
        "curios:embers_charm",
        [
            "the_magical_industry:embers_charm",
            "the_magical_industry:royal_steel_charm"
        ]
    )
    event.add(
        "tconstruct:casts/sand",
        [
            "the_magical_industry:brass_hand_sand_cast"
        ]
    )
    event.add(
        "tconstruct:casts/red_sand",
        [
            "the_magical_industry:brass_hand_redsand_cast"
        ]
    )
    event.add(
        "tconstruct:casts/gold",
        [
            "the_magical_industry:brass_hand_gold_cast"
        ]
    )
    event.add(
        "farmersdelight:tools/knives",
        [
            "tconstruct:dagger"
        ]
    )
    event.add(
        "forge:tools/knives",
        [
            "tconstruct:dagger"
        ]
    )
    event.add(
        "create:upright_on_deployer",
        [
            "tconstruct:dagger"
        ]
    )
    event.add(
        "farmersdelight:straw_harvesters",
        [
            "tconstruct:dagger"
        ]
    )
})