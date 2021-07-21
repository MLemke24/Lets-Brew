const brews = [
    ///Cups, Id, Grind , Water, Weight, and Strenght values are all provisional. We should be pulling those from the database.

    //only values stored in the front end are Name, Image, and steps.
    {
        id: 1,
        name: "French Press",
        image: require("../images/icons/French Press/SVG/French Press.svg").default,
        grind: "Coarse",
        water: 350,
        weight: 30,
        step1:"pour water on it",
        step2:"pour more water on it until it is saturated",
        step3:"wait four minutes then press down on the plunger",
        step4:"drink responsibly"
    },
    {
        id: 2,
        cups: 4,

        name: "Siphon",
        image: require("../images/icons/Hairo Vaccum/SVG/Hairo Vaccum .svg").default,
        grind: "Fine",
        water: 300,
        weight: 20,
        strength: "like a punch trough time",
        step1:"Pour water and evenly saturate coffee",
        step2:"Wait for coffee to bloom ",
        step3:"Pour remaining water around edges",
        step4:"let water draing trough filter, discard filter, and serve"
    },
    {
        id: 3,
        cups: 1,
        name: "AeroPress",
        image: require("../images/icons/AeroPress/SVG/AeroPress.svg").default,
        grind: "Fine",
        water: 240,
        weight: 15,
        strength: "steamy strong",
        step1:"Pour water and evenly saturate coffee, stir grounds to ensure saturation",
        step2:"wait for coffe to bloom and pour remaining water over dark areas",
        step3:"Place the plunger on brewer and pull up to create a pressure seal ",
        step4:" after 3 minutes press down plunger, take off cap, filter, grounds and serve "
    },
    {
        id: 4,
        cups: 1,
        name: "MokaPot",
        image: require("../images/icons/Bialetti/SVG/Bialetti.svg").default,

        grind: "Fine",
        water: 200,
        weight: 18,
        strength: "heavy metal coffee",
        step1:"pour some sugar on it",
        step2:"remove the charder sugar from coffee ",
        step3:"toss against the wall",
        step4:"repeat until satisfied"

    }
    ,
    {
        id: 5,
        cups: 1,
        name: "Chemex",
        image: require("../images/icons/Chemex/SVG/Chemex.svg").default,
        grind: "Coarse",
        water: 340,
        weight: 25,
        strength: "boldness is my second name",
        step1:"Pour water until grounds are saturated",
        step2:"stir  the grounds to ensure coffee is fully immersed ",
        step3:"call 911",
        step4:"survive"
    }
    ,
    {
        id: 6,
        cups: 1,
        name: "Siphon",
        image: require("../images/icons/Nel-Drip/SVG/Nel Drip.svg").default,
        grind: "Medium",
        water: 250,
        weight: 15,
        strength: "a very bold brew",
        step1:"Allow coffee to brew for one minute",
        step2:"turn off burner and put away ",
        step3:"let coffee drip down to the bottom chamber",
        step4:"remove the top piece and serve"
    }
    ,
    {
        id: 7,
        cups: 1,
        name: "V60",
        image: require("../images/icons/V60/SVG/V60.svg").default,
        grind: "Medium",
        water: 220,
        weight: 13,
        strength: "strong and ready to kick some butt",
        step1:"whip it",
        step2:"whip it good",
        step3:"shake it up",
        step4:"its not too late..."
    }
    ,
    {
        id: 8,
        cups: 1,
        name: "Kettle",
        image: require("../images/icons/Kettle/SVG/Kettle.svg").default,
        grind: "lite",
        water: "2 mililiters",
        weight: "1 terabite",
        strength: "strong as your coding game",
        step1:"put water in the kettle",
        step2:"heat until steam comes out of top",
        step3:"pour water on plastic cup",
        step4:"remember the alamo (drafthouse)"
    }
]

export default brews;
