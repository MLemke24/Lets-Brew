const brews = [
    ///Cups, Id, Grind , Water, Weight, and Strenght values are all provisional. We should be pulling those from the database.

    //only values stored in the front end are Name, Image, and steps.
    {
        id: 1,
        name: "French Press",
        image: require("../images/icons/French Press/SVG/French Press.svg").default,
        grind: "coarse",
        water: 350,
        coffeeAmount: 30,
        step1:"pour water on it",
        step2:"pour more water on it until it is saturated",
        step3:"wait four minutes then press down on the plunger",
        step4:"drink responsibly"
    },
    {
        id: 2,
        cups: 4,
        name: "Hairo",
        image: require("../images/icons/Hairo Vaccum/SVG/Hairo Vaccum .svg").default,
        grind: "fine",
        water: "1 liter",
        weight: "420 g",
        strength: "like a punch trough time",
        step1:"pour 20g of water onto it",
        step2:"pour the rest of the water",
        step3:"toss the whole thing into the trash",
        step4:"cry until it stops hurting"
    },
    {
        id: 3,
        cups: 1,
        name: "Aero Press",
        image: require("../images/icons/AeroPress/SVG/AeroPress.svg").default,
        grind: "lite",
        water: "2 mililiters",
        weight: "1 terabite",
        strength: "steamy strong",
        step1:"boil the coffee",
        step2:"take a walk outside",
        step3:"put out the fire",
        step4:"fraud the insurance company"
    },
    {
        id: 4,
        cups: 1,
        name: "Bialetti",
        image: require("../images/icons/Bialetti/SVG/Bialetti.svg").default,
        grind: "lite",
        water: "2 mililiters",
        weight: "1 terabite",
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
        grind: "lite",
        water: "2 mililiters",
        weight: "1 terabite",
        strength: "boldness is my second name",
        step1:"put water to boil",
        step2:"drink water from the pot",
        step3:"call 911",
        step4:"survive"
    }
    ,
    {
        id: 6,
        cups: 1,
        name: "Neldrip",
        image: require("../images/icons/Nel-Drip/SVG/Nel Drip.svg").default,
        grind: "lite",
        water: "2 mililiters",
        weight: "1 terabite",
        strength: "a very bold brew",
        step1:"imagine the pot",
        step2:"imagine pouring water into it",
        step3:"boil it with in your mind",
        step4:"drink imaginaryly"
    }
    ,
    {
        id: 7,
        cups: 1,
        name: "V60",
        image: require("../images/icons/V60/SVG/V60.svg").default,
        grind: "lite",
        water: "2 mililiters",
        weight: "1 terabite",
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
