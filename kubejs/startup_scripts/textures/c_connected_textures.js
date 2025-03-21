createconnecttexture(global.namespace, "redstone_casing")
createconnecttexture(global.namespace, "smart_andesite_casing")
createconnecttexture(global.namespace, "smart_casing")
createconnecttexture(global.namespace, "magic_casing")
createconnecttexture(global.namespace, "source_casing")
createconnecttexture(global.namespace, "electric_casing")
createconnecttexture(global.namespace, "copper_wire")
createconnecttexture(global.namespace, "steel_casing")
createconnecttexture(global.namespace, "steel_block")

function createconnecttexture(namespace, block) {
    JsonIO.write(`kubejs/assets/${namespace}/models/block/${block}.json`, {
        "loader": "fusion:model",
        "type": "connecting",
        "parent": "block/cube_all",
        "textures": {
            "all": `${global.namespace}:block/connected/${block}`
        },
        "connections": [
            {
                "type": "is_same_block"
            }
        ]
    })
}