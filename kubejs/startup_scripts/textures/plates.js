plateTexture("anvilcraft", "brass", "brass")
plateTexture("anvilcraft", "bronze", "bronze")
plateTexture("anvilcraft", "copper", "copper")
plateTexture("anvilcraft", "exposed_copper", "exposed_copper")
plateTexture("anvilcraft", "lead", "lead")
plateTexture("anvilcraft", "oxidized_copper", "oxidized_copper")
plateTexture("anvilcraft", "silver", "silver")
plateTexture("anvilcraft", "tin", "tin")
plateTexture("anvilcraft", "titanium", "titanium")
plateTexture("anvilcraft", "tungsten", "tungsten")
plateTexture("anvilcraft", "uranium", "uranium")
plateTexture("anvilcraft", "weathered_copper", "weathered_copper")
plateTexture("anvilcraft", "zinc", "zinc")
plateTexture("minecraft", "acacia", "acacia")
plateTexture("minecraft", "bamboo", "bamboo")
plateTexture("minecraft", "birch", "birch")
plateTexture("minecraft", "cherry", "cherry")
plateTexture("minecraft", "crimson", "crimson")
plateTexture("minecraft", "dark_oak", "dark_oak")
plateTexture("minecraft", "heavy_weighted", "iron")
plateTexture("minecraft", "jungle", "jungle")
plateTexture("minecraft", "light_weighted", "gold")
plateTexture("minecraft", "mangrove", "mangrove")
plateTexture("minecraft", "oak", "oak")
plateTexture("minecraft", "spruce", "spruce")
plateTexture("minecraft", "stone", "stone")
plateTexture("minecraft", "warped", "warped")

function plateTexture(namespace, name, texture) {
    JsonIO.write(`kubejs/assets/${namespace}/models/item/${name}_pressure_plate.json`, {
        "parent": "minecraft:item/generated",
        "textures": {
            "layer0": `the_magical_industry:item/pressure_plates/${texture}`
        }
    })
}