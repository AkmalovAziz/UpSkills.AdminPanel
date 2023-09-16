import {createI18n} from "vue-i18n";
import uz from "../locales/uz.json";
import eng from "../locales/eng.json";
import ru from "../locales/ru.json";
export const defaultlocale: string = "uz";

const i18n: any = createI18n({
    legacy: false,
    locale: localStorage.getItem("language") ? localStorage.getItem("language") : defaultlocale,
    fallbackLocale: "uz",
    messages: {
        uz,
        ru, 
        eng
    } 
});

export default i18n;