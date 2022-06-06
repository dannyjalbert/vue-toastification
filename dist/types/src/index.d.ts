import { PluginFunction } from "vue";
import { VueConstructor } from "vue/types/vue";
import ToastInterface from "./ts/interface";
import { POSITION, TYPE } from "./ts/constants";
import { PluginOptions } from "./types";
import "./scss/index.scss";
declare function createToastInterface(eventBus: InstanceType<VueConstructor>): ReturnType<typeof ToastInterface>;
declare function createToastInterface(options?: PluginOptions, Vue?: VueConstructor): ReturnType<typeof ToastInterface>;
declare const VueToastificationPlugin: PluginFunction<PluginOptions>;
export default VueToastificationPlugin;
export { POSITION, TYPE, createToastInterface };
