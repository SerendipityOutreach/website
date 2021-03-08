import {AboutDescription} from "@/assets/descriptions/AboutDescription";

const NavDescriptions = [
    {
        // About Section
        section_name: AboutDescription.name,
        content: AboutDescription.descriptions,
        // just put a general color, the nav.vue component will take care of shading
        color: "red",
    },
    {
        // Our Work Section with dummy data for now
        section_name: AboutDescription.name,
        content: AboutDescription.descriptions,
        color: "blue",
    }
]

export {NavDescriptions}