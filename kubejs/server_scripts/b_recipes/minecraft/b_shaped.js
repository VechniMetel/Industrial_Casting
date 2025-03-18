ServerEvents.recipes(r => {
   r.shaped(
      'the_magical_industry:saw',
      [
         ' a ',
         'a a',
         ' a '
      ], {
      'a': '#forge:plates/iron'
   })
   r.shaped(
      'the_magical_industry:cage',
      [
         ' a ',
         'a a',
         ' a '
      ], {
      'a': 'minecraft:iron_bars'
   })
   r.shaped(
      'minecraft:cauldron',
      [
         '   ',
         'a a',
         ' a '
      ], {
      'a': '#forge:plates/iron'
   })
   r.shaped(
      'minecraft:cauldron',
      [
         '   ',
         'a a',
         ' a '
      ], {
      'a': '#forge:plates/tin'
   })
   r.shaped(
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
   r.shaped(
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
   r.shaped(
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
   r.shaped(
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
   r.shaped(
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
   r.shaped(
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
   r.shaped(
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
   r.shaped(
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
   r.shaped(
      "the_magical_industry:enchanted_gold_ingot",
      [
         'aaa',
         'aaa',
         'aaa'
      ], {
      'a': "the_magical_industry:enchanted_gold_nugget"
   }
   )
   r.shaped(
      "the_magical_industry:enchanted_gold_block",
      [
         'aaa',
         'aaa',
         'aaa'
      ], {
      'a': "the_magical_industry:enchanted_gold_ingot"
   }
   )
   r.shaped(
      'alexscaves:heavyweight',
      [
         ' a ',
         ' b ',
         ' c '
      ],{
         'a':'minecraft:chain',
         'b':'minecraft:iron_ingot',
         'c':'minecraft:heavy_weighted_pressure_plate'
      }
   )
   r.shaped(
      'alexscaves:quarry',
      [
         ' b ',
         'bcb',
         ' d '
      ],{
         'b':'#forge:nuggets/iron',
         'c':'#forge:ingots/iron',
         'd':'anvilcraft:chute'
      }
   )
   r.shaped(
      '4x alexscaves:magnetic_light',
      [
         ' a ',
         ' b ',
         ' c '
      ],{
         'a':'#forge:glass',
         'b':'anvilcraft:magnet_ingot',
         'c':'minecraft:iron_ingot'
      }
   )
})