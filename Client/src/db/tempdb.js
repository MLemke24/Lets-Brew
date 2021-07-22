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
        step1:"Pour 60G of water evenly to saturate the coffee.",
        step2:"Gently stir the grounds to ensure all coffee is immersed, then wait for coffee to bloom.",
        step3:"Pour the remaining coffee in a spiral motion.",
        step4:"Allow coffee to steep for 3 minutes. Then press the filter down and serve."
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
        step1:"Allow Coffee ot brew for one minute",
        step2:"Turn off the burner and remove from under Siphon.",
        step3:"Let the coffee drip down to the bottom of the chamber.",
        step4:"Remove the top piece and serve."
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
        step1:"Pour water and evenly saturate coffee, stir grounds to ensure saturation.",
        step2:"Wait for coffe to bloom and pour remaining water over dark areas.",
        step3:"Place the plunger on brewer and pull up to create a pressure seal.",
        step4:"After 3 minutes press down plunger, take off cap, filter, grounds and serve."
    },
    {
        id: 4,
        cups: 1,
        name: "MokaPot",
        image: require("../images/icons/Bialetti/SVG/Bialetti.svg").default,
        grind: "Fine",
        water: 200,
        weight: 18,
        strength: "",
        step1:"Fill lower container with boiling water just below the valve.",
        step2:"Insert the funnel and fill it with ground coffee.",
        step3:"Tight screw teh upper part on the base, then put brewer on a stove at medium heat.",
        step4:"Wait 5-6 minutes for the water to boil."

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
        step1:"Pour 50G of water on the grounds evenly.",
        step2:"Stir the grounds to ensure coffee is fully immersed, then wait for coffee to bloom. ",
        step3:"Pour 130G of water in a spiral motion, then wait 45 seconds.",
        step4:"Slowly top the Chemex with another 160G of water and wait another 45 seconds. Repeat this amount until finished."
    }
    ,
    {
        id: 6,
        cups: 1,
        name: "NelDrip",
        image: require("../images/icons/Nel-Drip/SVG/Nel Drip.svg").default,
        grind: "Medium",
        water: 250,
        weight: 15,
        step1:"Pour 50G of water evenly over the coffee, wait for coffee to bloom.",
        step2:"Pour another 100G of water over the coffee in a spiral motion, wait for all water to drain through.",
        step3:"Repeat this process until all water is used.",
        step4:"Enjoy!"
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
        step1:"Pour 50G of water over coffee evenly, then wait for coffee to bloom.",
        step2:"Pour another 50G in a spiral motion.",
        step3:"Pour another 120G of water over coffee slowly",
        step4:"Repeat this process until water is finished."
    }
    ,
    {
        id: 8,
        cups: 1,
        name: "BeeHouse",
        image: require("../images/icons/Wave/SVG/Wave.svg").default,
        grind: "lite",
        water: "2 mililiters",
        weight: "1 terabite",
        strength: "strong as your coding game",
        step1:"Pour 50G of water over the coffee evenly",
        step2:"Stir grounds to ensure the coffee is fully immersed.",
        step3:"Pour 100G of water over coffee in a spiral motion, then wait for all water to pass through.",
        step4:"Repeat this process until finished."
    }
]

export default brews;
