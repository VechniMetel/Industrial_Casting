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
})