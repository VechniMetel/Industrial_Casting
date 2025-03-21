let registerItem = [
    "advanced_circuit_board",
    "cage",
    "chain_drive",
    "crude_electron_tube",
    "drill",
    "ejector_mechanism",
    "enchantment_mechanism",
    "iron_coil",
    "magic_capacitor",
    "rgb_led_set",
    "saw",
    "solder_coil",
    "solder_wire",
    "storage_connector",
    "storage_unit",
    "sugar_cane_juice"
]

let incompleteregistry = [
    'enchantment_mechanism',
    'electron_tube',
    'capacitor',
    'magic_capacitor',
    'circuit_board',
    'advanced_circuit_board',
    'electric_burner',
    'notor_gizmo',
    'fissile_core',
]

StartupEvents.registry("item", (event) => {

    registerItem.forEach((key) => {
        event.create(`${global.namespace}:${key}`)
    })

    incompleteregistry.forEach((key) => {
        event.create(`${global.namespace}:incomplete_${key}`, "create:sequenced_assembly")
    })
})