ServerEvents.recipes((event) => {
   let { kubejs } = event.recipes
   kubejs.shaped(
      "minecraft:cauldron",
      [
         "   ",
         "a a",
         " a "
      ], {
      "a": "#forge:plates/iron"
   }).id("minecraft:cauldron")
   kubejs.shaped(
      "the_magical_industry:drill",
      [
         " 1 ",
         " 21",
         " 1 "
      ], {
      "1": "create:andesite_alloy",
      "2": "#forge:ingots/iron"
   }
   )
   kubejs.shaped(
      "the_magical_industry:enchanted_gold_ingot",
      [
         "aaa",
         "aaa",
         "aaa"
      ], {
      "a": "the_magical_industry:enchanted_gold_nugget"
   }
   )
   kubejs.shaped(
      "the_magical_industry:enchanted_gold_block",
      [
         "aaa",
         "aaa",
         "aaa"
      ], {
      "a": "the_magical_industry:enchanted_gold_ingot"
   }
   )
   kubejs.shaped(
      "alexscaves:heavyweight",
      [
         " a ",
         " b ",
         " c "
      ], {
      "a": "minecraft:chain",
      "b": "#forge:ingots/iron",
      "c": "#forge:plates/iron"
   }
   )
   kubejs.shaped(
      "alexscaves:quarry",
      [
         " b ",
         "bcb",
         " d "
      ], {
      "b": "#forge:nuggets/iron",
      "c": "#forge:ingots/iron",
      "d": "anvilcraft:chute"
   }
   )
   kubejs.shaped(
      "4x alexscaves:magnetic_light",
      [
         " a ",
         " b ",
         " c "
      ], {
      "a": "#forge:glass",
      "b": "anvilcraft:magnet_ingot",
      "c": "#forge:ingots/iron"
   }
   )
   kubejs.shaped(
      "the_magical_industry:redstone_casing",
      [
         "aba",
         " c ",
         "aba"
      ], {
      "a": "#forge:cobblestone",
      "b": "#forge:dusts/redstone",
      "c": "#forge:ingots/iron"
   }
   )
   kubejs.shaped(
      'tinkers_things:chisel',
      [
         " A ",
         " B ",
         " C "
      ],
      {
         A: "#forge:plates/iron",
         B: "#forge:nuggets/iron",
         C: "#forge:rods/wooden"
      }
   )
      .id("tinkers_things:chisel/crafting")
   kubejs.shaped(
      'the_magical_industry:pineapple_peel_gloves',
      [
         "AA ",
         "AA ",
         "   "
      ],
      {
         A: 'pineapple_delight:pineapple_side'
      }
   )
})