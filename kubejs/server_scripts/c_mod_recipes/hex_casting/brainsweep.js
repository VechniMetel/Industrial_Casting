ServerEvents.recipes(r => {
    /*
    太好了太好了！意识剥离是一个数据包配方！！！！
    我只需要用js修改配方就好了，而玩家考虑的就多了
    */
    function villagerbrainsweep(material, villagerlevel, output) {
        //设置数据包输入内容
        r.custom({
            "type": "hexcasting:brainsweep",
            "blockIn": {
                "type": "block",
                "block": material
            },
            "cost": 1000000,
            "entityIn": {
                "type": "villager",
                "minLevel": villagerlevel
            },
            "result": {
                "name": output
            }
        })
        //设置配方
    }

})