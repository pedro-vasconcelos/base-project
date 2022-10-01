import {createApp, h} from "vue"
import {createInertiaApp} from "@inertiajs/inertia-vue3"
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers"
import '../css/app.css';

createInertiaApp({
    resolve: (name) => resolvePageComponent(
        `./Pages/${name}.vue`,
        import.meta.glob('./Pages/**/*.vue')
    ),
    // resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
});
