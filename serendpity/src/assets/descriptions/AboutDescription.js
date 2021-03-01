// Find colors here: https://vuetifyjs.com/en/styles/colors/

// About Page Content
const WhoAreWe = {
    type: "LeftPic",
    title: "Who are we?",
    image: "FullLogo.png",
    color: "red lighten-1",
    description: "Serendipity STEM is a student-led outreach community of and FIRST Tech Challenge teams in the Bay Area.",
}
const OurMission = {
    type: "RightPic",
    title: "Our Mission",
    image: "Brain.jpg",
    color: "blue darken-1",
    description: "Our goal is to provide sustainable STEM opportunities for Special Education students in the form of robotics and coding",
}
const OurPassion = {
    type: "TripleView",
    title: "Our Passion",
    image: "BridgeFiltered.jpg",
    image_length: 80, // Change this to make sure you can see the whole picture
    color: "red lighten-1",
    descriptions: [
        "Being part of the various FIRST Tech Challenge, Serendipity STEM help us understand the societal application of what we learn in our robotics teams",
        "Although Silicon Valley is the heart of technology, Special Education students do not have the same access to STEM opportunities as General Education students",
        "By spreading not just coding--but a way of approaching life," +
        " we can use engineering as a catalyst to bridge the gap between the STEM and Special Education community",
    ],

}

const AboutContent =[
    WhoAreWe,
    OurMission,
    OurPassion,
]



export {AboutContent}