ServerEvents.recipes(r => {
   r.shaped(
      'create_nouveau:saw',
      [
         ' a ',
         'a a',
         ' a '
      ], {
      'a': '#forge:plates/iron'
   })
   r.shaped(
      'create_nouveau:cage',
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
      'create_nouveau:drill',
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
      'create_nouveau:steel_ingot',
      [
         '111',
         '111',
         '111'
      ], {
      '1': 'create_nouveau:steel_nugget'
   }
   )
   r.shaped(
      'create_nouveau:steel_block',
      [
         '111',
         '111',
         '111'
      ], {
      '1': 'create_nouveau:steel_ingot'
   }
   )
})