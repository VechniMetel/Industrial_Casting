ClientEvents.lang("zh_cn", (event) => {

    event.add(`message.${global.namespace}.debug.getHardness`, "位于x=%s,y=%s,z=%s的方块硬度为%s")
    event.add(`item.${global.namespace}.geological_hammer`, "地质锤")

    BlockLang("redstone_casing", "红石机壳")
    BlockLang("magic_casing", "魔法机壳")
    BlockLang("source_casing", "附魔魔法机壳")
    BlockLang("smart_casing", "智能机壳")
    BlockLang("smart_andesite_casing", "智能安山机壳")
    BlockLang("electric_casing", "电力机壳")
    BlockLang("copper_wire", "铜线圈")
    BlockLang("steel_casing", "钢机壳")
    BlockLang("steel_block", "钢块")
    BlockLang("silver_ore", "银矿")
    BlockLang("steel_pressure_plate", "钢压力板")

    SequencedLang("enchantment_mechanism", "附魔构件")
    SequencedLang("magic_capacitor", "魔源电容")
    SequencedLang("advanced_circuit_board", "高级电路板")

    IncompleteLang("electron_tube", "电子管")
    IncompleteLang("capacitor", "电容")
    IncompleteLang("circuit_board", "电路板")
    IncompleteLang("notor_gizmo", "扫描机兵构件")
    IncompleteLang("fissile_core", "裂变核心")
    IncompleteLang("electric_burner", "电磁炉")

    FluidLang("molten_andesite_alloy", "熔融安山合金")
    FluidLang("molten_royal_steel", "熔融皇家钢")
    FluidLang("molten_ember_metal", "熔融余烬金属")
    FluidLang("molten_raw_silicon", "熔融粗硅")
    FluidLang("molten_silicon", "熔融硅")
    FluidLang("solder", "焊锡")

    MusicDiscLang("life", "Neuro Sama - Life")
    MusicDiscLang("cfrb", "Evil Neuro - Crazy F***ing Robot Body")
    MusicDiscLang("muisiki_rekuiemu", "Neuro Sama - 無意識レクイエム")
    MusicDiscLang("evilris", "Evil Neuro - Evilris")

    MetalLang("enchanted_gold", "注魔金")

    AbilityLang(
        "smart",
        "智能",
        "使射出的箭矢精度更高",
        "机械的智慧带来了自动校准能力"
    )
    AbilityLang(
        "magical_shield",
        "魔法护盾",
        "有几率将魔法伤害反弹",
        "优异的导魔性与刻意的雕琢使其有反弹法术的能力"
    )
    AbilityLang(
        "royal_smithing",
        "皇家工匠",
        "每个部件都能提供一级加固效果，有概率不消耗耐久",
        "和皇后史莱姆没关系哦",
    )
    AbilityLang(
        "ember_attack",
        "余烬",
        "每个部件都能提供额外强化槽，并且常规使用时工具不消耗耐久",
        "燃烧殆尽诞生的强大金属!"
    )
    AbilityLang(
        "ember_protect",
        "余烬",
        "每个部件都能提供额外防御槽，并且常规使用时工具不消耗耐久",
        "燃烧殆尽诞生的强大金属!"
    )

    OccupationLang(
        "artificial_intelligence",
        "人工智能",
        "强大的自动化智能程序操控的机械体，拥有近乎无限的体力与超乎常人的力量。但作为机械体无法自然聚集魔力…"
    )
    OccupationLang(
        "hunter",
        "猎人",
        "不管怎么说，先把肚子填饱要紧……"
    )
    OccupationLang(
        'sorcerer',
        "魔法使",
        "魔法方面的天才，沉心各种法术研究多年，但是性格孤僻，似乎不太容易接近……"
    )
    OccupationLang(
        "engineer",
        "工程师",
        "携带大量工科知识与一整套工具来到这个世界，是建设者中的主力军，可靠的后勤人员"
    )

    TconLang(
        "amethyst",
        "紫水晶",
        "优秀的魔导体与媒质",
        "紫水晶中流动的魔力会竭尽全力获取方块中蕴含的资源",
        "紫水晶中流动的魔力会竭尽全力获取方块中蕴含的资源",
        "紫水晶中流动的魔力会竭尽全力获取方块中蕴含的资源"
    )
    TconLang(
        "andesite_alloy",
        "安山合金",
        "岩石和金属居然能变成合金？",
        "岩石的能力，铁器的数值",
        "岩石的能力，铁器的数值",
        "岩石的能力，铁器的数值"
    )
    TconLang(
        "brass",
        "黄铜",
        "魔法与电流都能在其中受控流动",
        "黄铜给工具注入了智慧，使得工具可以自动进行微小的调整",
        "黄铜给工具注入了智慧，使得工具可以自动进行微小的调整",
        "黄铜给工具注入了智慧，使得工具可以自动进行微小的调整"
    )
    TconLang(
        "royal_steel",
        "皇家钢",
        "古镇天卖钩子想出来的金属（",
        "皇家钢拥有强大的耐久",
        "皇家钢拥有强大的耐久",
        "皇家钢拥有强大的耐久"
    )
    TconLang(
        "ember_metal",
        "余烬金属",
        "燃烧殆尽诞生的强大金属",
        "强大的余烬金属无法泯灭，同时也具有极高的兼容性",
        "强大的余烬金属无法泯灭，同时也具有极高的兼容性",
        "强大的余烬金属无法泯灭，同时也具有极高的兼容性"
    )

    function AbilityLang(key, name, desc, flavour) {
        event.add(`modifier.${global.namespace}.${key}`, name)
        event.add(`modifier.${global.namespace}.${key}.description`, desc)
        event.add(`modifier.${global.namespace}.${key}.flavor`, flavour)
    }

    function OccupationLang(occupation, name, desc) {
        event.add(`lhmiracleroad.gui.occupation.name.${occupation}`, name)
        event.add(`lhmiracleroad.gui.occupation.describe.${occupation}`, desc)
    }

    function IncompleteLang(key, value) {
        event.add(`item.${global.namespace}.incomplete_${key}`, `未完成的${value}`)
    }

    function TconLang(key, name, flavour, encyclopedia, ranged, armor) {
        event.add(`material.${global.namespace}.${key}`, name)
        event.add(`material.${global.namespace}.${key}.flavor`, flavour)
        event.add(`material.${global.namespace}.${key}.encyclopedia`, encyclopedia)
        event.add(`material.${global.namespace}.${key}.ranged`, ranged)
        event.add(`material.${global.namespace}.${key}.armor`, armor)
    }

    function MusicDiscLang(name, desc) {
        event.add(`item.${global.namespace}.music_disc_${name}`, "音乐唱片")
        event.add(`item.${global.namespace}.music_disc_${name}.desc`, desc)
    }

    function FluidLang(key, value) {
        event.add(`block.${global.namespace}.${key}`, value)
        event.add(`fluid.${global.namespace}.${key}`, value)
        event.add(`item.${global.namespace}.${key}_bucket`, `${value}桶`)
    }

    function BlockLang(key, value) {
        event.add(`item.${global.namespace}.${key}`, value)
        event.add(`block.${global.namespace}.${key}`, value)
    }

    function SequencedLang(key, value) {
        event.add(`item.${global.namespace}.${key}`, value)
        event.add(`item.${global.namespace}.incomplete_${key}`, `未完成的${value}`)
    }

    function MetalLang(key, value) {
        event.add(`item.${global.namespace}.${key}_nugget`, `${value}粒`)
        event.add(`item.${global.namespace}.${key}_ingot`, `${value}锭`)
        event.add(`item.${global.namespace}.${key}_block`, `${value}块`)
        event.add(`block.${global.namespace}.${key}_block`, `${value}块`)
    }
})