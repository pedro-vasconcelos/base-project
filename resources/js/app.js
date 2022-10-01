import {createApp, h} from "vue"
import {createInertiaApp} from "@inertiajs/inertia-vue3"
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers"
import { Head, Link } from "@inertiajs/inertia-vue3";
import '../css/app.css';

createInertiaApp({
    title: title => `${title} - My App`,
    resolve: (name) => resolvePageComponent(
        `./Pages/${name}.vue`,
        import.meta.glob('./Pages/**/*.vue')
    ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('Head', Head)
            .component('Link', Link)
            .mount(el)
    },
});
