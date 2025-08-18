let registerItem = [
    "advanced_circuit_board",
    "chain_drive",
    "crude_electron_tube",
    "drill",
    "ejector_mechanism",
    "enchantment_mechanism",
    "capacitor",
    "magic_capacitor",
    "rgb_led_set",
    "solder_coil",
    "solder_wire",
    "storage_connector",
    "storage_unit",
    "crude_brass_hand",
    "brass_hand_redsand_cast",
    "brass_hand_sand_cast",
    "brass_hand_gold_cast",
    "coal_rod",
    "sugar_cane_juice",
    'saw',
    'andesite_pearl',
    'andesite_pearl_rare',
    'smart_pearl',
    'smart_pearl_rare',
    'royal_pearl',
    'royal_pearl_rare',
    'source_pearl',
    'source_pearl_rare',
    'hex_pearl',
    'hexxy_pearl',
    'steel_pearl',
    'pearl_seed',
    'faded_pearl'
]

let incompleteregistry = [
    "enchantment_mechanism",
    "electron_tube",
    "capacitor",
    "magic_capacitor",
    "circuit_board",
    "advanced_circuit_board",
    "electric_burner",
    "notor_gizmo",
    "fissile_core",
    "brass_hand",
    "blaze_rod"
]

StartupEvents.registry("item", (event) => {

    registerItem.forEach((key) => {
        event.create(`${global.namespace}:${key}`)
    })

    incompleteregistry.forEach((key) => {
        event.create(`${global.namespace}:incomplete_${key}`, "create:sequenced_assembly")
    })
})