function myScrollTo(DOM_vuetify, DOM_refs, dest){
    console.log("dom refs" + DOM_refs)
    console.log(DOM_refs)
    console.log("dest " + dest)
    console.log(dest)
    DOM_vuetify.goTo(DOM_refs[dest][0], {
        // the options
        duration: 900,
        offset: 0, //this is offset y
        easing: "easeInOutCubic",
    })
}

export {myScrollTo}