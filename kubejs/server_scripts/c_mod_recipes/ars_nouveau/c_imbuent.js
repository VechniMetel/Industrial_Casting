ServerEvents.recipes(r=>{
    const ars_nouveau = r.recipes.ars_nouveau
    ars_nouveau.imbuement(
        'create:polished_rose_quartz', // input item
        'create_nouveau:enchanted_rose_quartz', // output
        1000, // source cost
        []
    )
})