StartupEvents.registry("block", (event) => {

    plateRegister("steel")

    function plateRegister(type) {
        event.create(`${global.namespace}:${type}_pressure_plate`, "pressure_plate")
            .item(item => {
                item
                    .tag(`forge:plates/${type}`)
            })
        JsonIO.write(`kubejs/assets/${global.namespace}/models/block/${type}_pressure_plate_up.json`, {
            "parent": "minecraft:block/pressure_plate_up",
            "textures": {
                "texture": `${global.namespace}:block/pressure_plates/${type}`
            }
        })
        JsonIO.write(`kubejs/assets/${global.namespace}/models/block/${type}_pressure_plate_down.json`, {
            "parent": "minecraft:block/pressure_plate_down",
            "textures": {
                "texture": `${global.namespace}:block/pressure_plates/${type}`
            }
        })
    }
})