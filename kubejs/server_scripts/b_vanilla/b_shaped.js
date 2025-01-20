ServerEvents.recipes(r => {
    r.shaped(
       'create_nouveau:saw',
       [
        ' a ',
        'a a',
        ' a '
       ],{
        'a':'create:iron_sheet'
       }
    )
    r.shaped(
        'create_nouveau:cage',
        [
         ' a ',
         'a a',
         ' a '
        ],{
         'a':'minecraft:iron_bars'
        }
     )
     r.shaped(
      'minecraft:cauldron',
      [
       '   ',
       'a a',
       ' a '
      ],{
       'a':'create:iron_sheet'
      }
   )
   r.shaped(
      'minecraft:cauldron',
      [
       '   ',
       'a a',
       ' a '
      ],{
       'a':'create_nouveau:tin_sheet'
      }
   )
})