StartupEvents.registry("fluid", (event) => {
    
    fluidRegister("molten_andesite_alloy", 0x83857d)
    fluidRegister("molten_royal_steel", 0xA3B386)
    fluidRegister("molten_ember_metal", 0x8C3518)
    fluidRegister("molten_raw_silicon", 0x545159)
    fluidRegister("molten_silicon", 0x967CA0)
    fluidRegister("solder", 0x515647)

    function fluidRegister(name, colour) {
        event.create(`${global.namespace}:${name}`)
            .tag(`${global.namespace}:${name}`)
            .tag('lava')
            .thickTexture(colour)
            .bucketColor(colour)
            .noBlock()
    }
})