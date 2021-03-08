// Find colors here: https://vuetifyjs.com/en/styles/colors/

// About Page Content
const WhoAreWe = {
    type: "LeftPic",
    title: "Community",
    image: "FullLogo.png",
    color: "red lighten-1",
    description: "Serendipity STEM is a student-led outreach community of and FIRST Tech Challenge teams in the Bay Area.",
}
const OurMission = {
    type: "RightPic",
    title: "Mission",
    image: "Brain.jpg",
    color: "blue darken-1",
    description: "Our goal is to provide sustainable STEM opportunities for Special Education students in the form of robotics and coding",
}
const OurPassion = {
    type: "TripleView",
    title: "Passion",
    image: "BridgeFiltered.jpg",
    image_length: 80, // Change this to make sure you can see the whole picture
    color: "red lighten-1",
    descriptions: [
        "As Silicon Valley is closing the digital divide for underrepresented communities, Serendipity STEM strives to provide equal STEM opportunities to Special Education students",
        "Through our shared excitement for technology, we use STEM as a bridge to gain a deeper relationship with our local neurodiverse community",
        "For us, STEM and engineering is more than just zeroes and ones; it is a methodical problem solving mindset that can be applied in every walk of life"
    ],

}

const AboutDescription = {
    name: "About",
    descriptions: [
        WhoAreWe,
        OurMission,
        OurPassion,
    ]
}


export {AboutDescription}