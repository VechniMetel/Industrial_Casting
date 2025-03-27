ServerEvents.recipes((event) => {
   event.shaped(
      'minecraft:cauldron',
      [
         '   ',
         'a a',
         ' a '
      ], {
      'a': '#forge:plates/iron'
   }).id('minecraft:cauldron')
   event.shaped(
      'minecraft:cauldron',
      [
         '   ',
         'a a',
         ' a '
      ], {
      'a': '#forge:plates/tin'
   })
   event.shaped(
      'the_magical_industry:drill',
      [
         ' 1 ',
         ' 21',
         ' 1 '
      ], {
      '1': 'create:andesite_alloy',
      '2': "minecraft:iron_ingot"
   }
   )
   event.shaped(
      'the_magical_industry:copper_wire',
      [
         'aaa',
         'aba',
         'aaa'
      ], {
      'a': 'createaddition:copper_spool',
      'b': 'minecraft:iron_ingot'
   }
   ).replaceIngredient(
      'createaddition:copper_spool',
      'createaddition:spool'
   )
   event.shaped(
      '8x createaddition:copper_spool',
      [
         'aaa',
         'aba',
         'aaa'
      ], {
      'a': 'createaddition:spool',
      'b': 'the_magical_industry:copper_wire'
   }
   ).replaceIngredient(
      'the_magical_industry:copper_wire',
      'minecraft:iron_ingot'
   )
   event.shaped(
      'moreburners:copper_coil',
      [
         ' a ',
         'a a',
         ' a '
      ],
      {
         'a': 'createaddition:copper_spool'
      }
   ).replaceIngredient(
      'createaddition:copper_spool',
      'createaddition:spool'
   )
   event.shaped(
      'moreburners:nickel_coil',
      [
         ' a ',
         'aba',
         ' a '
      ],
      {
         'a': 'createaddition:electrum_spool',
         'b': 'moreburners:copper_coil'
      }
   ).replaceIngredient(
      'createaddition:electrum_spool',
      'createaddition:spool'
   )
   event.shaped(
      'moreburners:nickel_coil',
      [
         ' a ',
         'aba',
         ' a '
      ],
      {
         'a': 'createaddition:gold_spool',
         'b': 'moreburners:copper_coil'
      }
   ).replaceIngredient(
      'createaddition:gold_spool',
      'createaddition:spool'
   )
   event.shaped(
      'the_magical_industry:solder_coil',
      [
         ' a ',
         'aba',
         ' a '
      ], {
      'a': 'the_magical_industry:solder_wire',
      'b': 'createaddition:spool'
   }
   )
   event.shaped(
      'the_magical_industry:iron_coil',
      [
         ' a ',
         'aba',
         ' a '
      ], {
      'a': 'createaddition:iron_wire',
      'b': 'createaddition:spool'
   }
   )
   event.shaped(
      "the_magical_industry:enchanted_gold_ingot",
      [
         'aaa',
         'aaa',
         'aaa'
      ], {
      'a': "the_magical_industry:enchanted_gold_nugget"
   }
   )
   event.shaped(
      "the_magical_industry:enchanted_gold_block",
      [
         'aaa',
         'aaa',
         'aaa'
      ], {
      'a': "the_magical_industry:enchanted_gold_ingot"
   }
   )
   event.shaped(
      'alexscaves:heavyweight',
      [
         ' a ',
         ' b ',
         ' c '
      ], {
      'a': 'minecraft:chain',
      'b': 'minecraft:iron_ingot',
      'c': 'minecraft:heavy_weighted_pressure_plate'
   }
   )
   event.shaped(
      'alexscaves:quarry',
      [
         ' b ',
         'bcb',
         ' d '
      ], {
      'b': '#forge:nuggets/iron',
      'c': '#forge:ingots/iron',
      'd': 'anvilcraft:chute'
   }
   )
   event.shaped(
      '4x alexscaves:magnetic_light',
      [
         ' a ',
         ' b ',
         ' c '
      ], {
      'a': '#forge:glass',
      'b': 'anvilcraft:magnet_ingot',
      'c': 'minecraft:iron_ingot'
   }
   )
   event.shaped(
      'the_magical_industry:redstone_casing',
      [
         'aba',
         ' c ',
         'aba'
      ], {
      'a': '#forge:cobblestone',
      'b': '#forge:dusts/redstone',
      'c': '#forge:ingots/iron'
   }
   )
})