ServerEvents.recipes(r => {
    function charging(input, incount, output, outcount, energy, rate) {
        r.custom({
            "type": "createaddition:charging",
            "input": {
                "item": input,
                "count": incount
            },
            "result": {
                "item": output,
                "count": outcount
            },
            "energy": energy,
            "maxChargeRate": rate
        })
    }
    charging('anvilcraft:capacitor_empty',1,'anvilcraft:capacitor',1,345600,38400)
})