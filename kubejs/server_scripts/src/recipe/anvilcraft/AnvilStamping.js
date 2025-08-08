ServerEvents.recipes(r => {
  let stamp = (input,output)=>{//两个字典分别输入和输出，允许概率输出
    var pre = [{
          "type": "has_block",
          "match_block": {
            "blocks": [
              "anvilcraft:stamping_platform"
            ]
          },
          "offset": [
            0.0,
            -1.0,
            0.0
          ]
        }];
    var out = new Array();
    Object.entries(input).forEach(([key, value]) => {
        pre.push(
          {
          "type": "has_item_ingredient",
          "match_item": {
            "count": {"min": value},
            "items": [key]
          },
          "offset": [0.0,-0.75,0.0]
        }
        )
    });
    Object.entries(output).forEach(([key, value]) => {
      if (value% 1 == 0){
        out.push(
          {
            "type": "spawn_item",
            "chance": 1.0,
            "offset": [0.0,-0.75,0.0],
            "result": {"item": key,"count":value}
          })
      }
      else{
        if(value > 1){
        out.push(
        {
          "type": "spawn_item",
          "chance": 1.0,
          "offset": [0.0,-0.75,0.0],
          "result": {"item": key,"count":Math.floor(value)}
        })}
        out.push(
        {
          "type": "spawn_item",
          "chance": value%1,
          "offset": [0.0,-0.75,0.0],
          "result": {"item": key,"count":1}
        })
      }
    });
    r.custom({
      "type": "anvilcraft:anvil_processing",
      "anvil_recipe_type": "stamping",
      "icon": {
        "item": Object.entries(output)[0][0] // Use the first output item as the icon
      },
      "outcomes": out,
      "predicates": pre
    })
  };
  stamp(
    {'create:polished_rose_quartz':1, 'minecraft:heavy_weighted_pressure_plate':1, 'anvilcraft:copper_pressure_plate':1, 'minecraft:redstone':1}, 
    {'the_magical_industry:crude_electron_tube':1});
  stamp(
    {"createnuclear:steel_ingot":1},
    {"the_magical_industry:steel_pressure_plate":1}
  );
  stamp(
    {"minecraft:skeleton_skull":1, "minecraft:blaze_powder":8},
    {"tconstruct:blaze_head":1}
  );
  stamp(
    {"minecraft:skeleton_skull":1, "minecraft:coal":4, "minecraft:nether_brick":4, "minecraft:wither_rose":1},
    {"minecraft:wither_skeleton_skull":1}
  );
})
