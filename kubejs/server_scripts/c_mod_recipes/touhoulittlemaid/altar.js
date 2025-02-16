ServerEvents.recipes(r => {
    /*
    太好了，车万女仆的祭坛也是数据包配方！
    而且祭坛召唤生物也是使用数据包写出来的
    接下来只需要用function和custom就能做出自动适配了！
    */
    function altar(output, ing1, ing2, ing3, ing4, ing5, ing6, id) {
        r.custom({
            "type": "touhou_little_maid:altar_crafting",
            "output": {
                "type": output
            },
            "power": 0.2,
            "ingredients": [
                ing1,
                ing2,
                ing3,
                ing4,
                ing5,
                ing6
            ]
        }).id(id)
    }
    altar(
        'youkaishomecoming:mystia_lorelei',
        Item.of('minecraft:fermented_spider_eye'),
        Item.of('minecraft:feather'),
        Ingredient.of('#minecraft:music_discs'),
        Item.of('minecraft:diamond'),
        Item.of('minecraft:potion', '{Potion:"minecraft:long_night_vision"}').strongNBT(),
        Item.of('minecraft:feather'),
        "touhou_little_maid:summon_mystia"
    )
    altar(
        'youkaishomecoming:rumia',
        Item.of('youkaishomecoming:flesh'),
        Item.of('minecraft:ink_sac'),
        Item.of('minecraft:gold_ingot'),
        Item.of('minecraft:redstone'),
        Item.of('youkaishomecoming:flesh'),
        Item.of('minecraft:ink_sac'),
        "touhou_little_maid:summon_rumia"
    )
    altar(
        'youkaishomecoming:cirno',
        Item.of('youkaishomecoming:ice_cube'),
        Item.of('youkaishomecoming:ice_cube'),
        Item.of('hexcasting:abacus'),
        Item.of('minecraft:diamond'),
        Item.of('youkaishomecoming:ice_cube'),
        Item.of('youkaishomecoming:ice_cube'),
        "touhou_little_maid:summon_cirno"
    )
    altar(
        'youkaishomecoming:yukari',
        Item.of('youkaishomecoming:flesh'),
        Item.of('touhou_little_maid:wireless_io'),
        Item.of('minecraft:netherite_ingot'),
        Item.of('minecraft:diamond'),
        Item.of('youkaishomecoming:flesh'),
        Item.of('minecraft:enchanted_book'),
        "touhou_little_maid:summon_yukari"
    )
})
