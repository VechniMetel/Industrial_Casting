let rite = (r,input,other,output,ceremony,time,consume) => {
    r.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": input
        },
        "craftType": ceremony,
        "soulCost": consume,
        "duration": time,
        "ingredients": other,
        "result": {
            "item": output
        }
    })
}
/*
锻造仪式    forge
活力仪式    animation
魔法仪式    magic
霜冻仪式    frost
死灵仪式    necroturgy
大地仪式    geoturgy
大师死灵仪式 lich
天空仪式    sky
风暴仪式    storm
安息仪式    sabbath
进阶下界仪式 adept_nether
专家下界仪式 expert_nether
深渊仪式    deep

格式
rite(r,输入，其他输入[{"item/tag":物品id},....],输出，仪式类型,时间/s，每秒消耗)
*/

ServerEvents.recipes(r => {
    rite(r,"the_magical_industry:brain",[
        {"item":"goety:ectoplasm"},{"item":"goety:ectoplasm"},
        {"item":"minecraft:enchanted_golden_apple"},
        {"item":"minecraft:honey_bottle"},
        {"item":"minecraft:apple"}
        ],
        "the_magical_industry:cogito_ergo_sum","animation",60,100)
})
