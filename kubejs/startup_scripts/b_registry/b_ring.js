StartupEvents.registry('item', r => {
    r.create('create_nouveau:embers_charm')
        .unstackable()
        .tag('create_nouveau:embers_charm')
});

const $KeyMappingRegistry = Java.loadClass("dev.architectury.registry.client.keymappings.KeyMappingRegistry");
const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");
const $GLFWkey = Java.loadClass("org.lwjgl.glfw.GLFW");

ClientEvents.init(() => {
    global.regKeyR = new $KeyMapping(
        "key.ring.use", //按键名
        $GLFWkey.GLFW_KEY_RIGHT_SHIFT,
        "key.keybinding.ring.use" //按键组名字
    );
  $KeyMappingRegistry.register(global.regKeyR);
});