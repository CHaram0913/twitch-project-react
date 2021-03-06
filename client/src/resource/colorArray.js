const generateRandomColor = () => {
    let letters = '0123456789ABCEDF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const findMatch = (colorArray, key) => {
    return colorArray.find(function(element) {
         return element.game === key;
     })
 };

export const setColor = (gameArray, colorTheme) => {
    let colorArray = [];
    for (let i = 0; i < gameArray.length; i++) {
        let matchFound = findMatch(colorTheme, gameArray[i]);
        
        if (matchFound) {
            colorArray.push(matchFound.color);
        } else {
            colorArray.push(generateRandomColor());
        }
    }
    return colorArray;
};

export const colorSet = [
    {
        game : 'League of Legends',
        color : '#FFCE56'
    },
    {
        game : 'Hearthstone',
        color : '#36A2EB'
    },
    {
        game : 'IRL',
        color : '#FF6384'
    },
    {
        game : 'Games + Demos',
        color : '#840396'
    },
    {
        game : 'FIFA 18',
        color : '#FCF2FC'
    },
    {
        game : 'Stardew Valley',
        color : '#66FFB3'
    },
    {
        game : 'Overwatch',
        color : '#BCBABE'
    },
    {
        game : 'Heavy Rain',
        color : '#323233'
    },
    {
        game : "PLAYERUNKNOWN'S BATTLEGROUNDS",
        color : '#124F2C'
    },
    {
        game : "Mount & Blade: Warband",
        color : '#BBBB77'
    },
    {
        game : "Celeste",
        color : '#99FFFF'
    },
    {
        game : "StarCraft II",
        color : '#FF3333'
    },
    {
        game : "Princess Maker 5",
        color : '#33FFCC'
    },
    {
        game : "MapleStory",
        color : '#FF99FF'
    },
    {
        game : "Cookie Run: OvenBreak",
        color : '#86592D'
    },
    {
        game : "Slay the Spire",
        color : '#E65C00'
    },
    {
        game : "Creative",
        color : '#FFFF80'
    },
];