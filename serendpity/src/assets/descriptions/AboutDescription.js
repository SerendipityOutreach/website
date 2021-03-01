// Find colors here: https://vuetifyjs.com/en/styles/colors/

// About Page Content
const WhoAreWe = {
    type: "LeftPic",
    title: "Who are we?",
    image: "FullLogo.png",
    color: "red lighten-2",
    description: "Serendipity STEM is a student-led outreach community of and FIRST Tech Challenge teams in the Bay Area.",
}
const OurMission = {
    type: "RightPic",
    title: "Our Mission",
    image: "Brain.jpg",
    color: "red darken-1",
    description: "Our goal is to provide sustainable STEM opportunities for Special Education students in the form of Robotics and Coding",
}
const OurPassion = {
    type: "TripleView",
    title: "Our Passion",
    image: "BridgeFiltered.jpg",
    image_length: 80, // Change this to make sure you can see the whole picture
    color: "orange darken-1",
    descriptions: [
        "Although Silicon Valley is the heart of technology,e same access to STEM opportunities as General Education students.",
        "Although Silicon Valley is the heart of tdo not have the same access to STEM opportunities as General Education students.",
    ],

}

const AboutContent =[
    WhoAreWe,
    OurMission,
    OurPassion,
]



export {AboutContent}