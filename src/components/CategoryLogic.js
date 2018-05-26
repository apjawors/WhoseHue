let Team  = (name, primary, secondary, tertiary, hints) => {
    return {
      name,
      primary,
      secondary,
      tertiary,
      hints
    }
}

class Category {
  constructor(league){
    this.arr = league.sort(()=> {
      return .5 - Math.random()            // Shuffles league randomly into new array
    }).slice(0,4).sort((a, b)=> {          // Only first 4 elements in new array are kept
      return a.name.length - b.name.length // New array sorted by name length in ascending order for symmetrical mobile design
    })
    this.random = Math.floor(Math.random() * this.arr.length) // Random number between 0 and new array length
  }
  choices(){
    return this.arr
  }
  team(i, prop){
    return this.arr[i][prop]
  }
  answer(prop){
    const answer = this.arr[this.random]
    return answer[prop]
  }
}

let nfl = [
  new Team("49ers",      "#A6192E", "#85714D",  null,     1),
  new Team("Bears",      "#051C2C", "#DC4405", "#FFF",    2),
  new Team("Bengals",    "#FB4E0C", "#000",    "#FFF",    2),
  new Team("Bills",      "#00338E", "#C60C3D", "#FFF",    2),
  new Team("Broncos",    "#FC4C02", "#0C2340", "#FFF",    2),
  new Team("Browns",     "#382F2D", "#EB3300",  null,     1),
  new Team("Bucs",       "#D21019", "#34302B", "#FF7900", 2),
  new Team("Cardinals",  "#B0063A", "#FFF",    "#000",    2),
  new Team("Chargers",   "#0A2343", "#FFC313", "#FFF",    2),
  new Team("Chiefs",     "#E51937", "#FFB612", "#FFF",    1),
  new Team("Colts",      "#002C5F", "#FFF",     null,     1),
  new Team("Cowboys",    "#262C3C", "#B0B7BC", "#FFF",    2),
  new Team("Dolphins",   "#008E97", "#F58220", "#FFF",    2),
  new Team("Eagles",     "#004C54", "#000",    "#A5ACAF", 2),
  new Team("Falcons",    "#A71931", "#FFF",    "#000",    2),
  new Team("Giants",     "#001E62", "#A6192E", "#FFF",    2),
  new Team("Jaguars",    "#000",    "#01687B", "#9F792C", 2),
  new Team("Jets",       "#2A433A", "#FFF",     null,     1),
  new Team("Lions",      "#0069B1", "#A2AAAD",  null,     1),
  new Team("Packers",    "#203731", "#FFB612",  null,     1),
  new Team("Panthers",   "#0097D7", "#101820", "#8A8D8F", 2),
  new Team("Patriots",   "#0C2244", "#CC122C", "#B0B7BC", 2),
  new Team("Raiders",    "#A5ACAF", "#121212",  null,     1),
  new Team("Rams",       "#002244", "#B3955D", "#FFF",    2),
  new Team("Ravens",     "#241773", "#000",    "#BB9334", 2),
  new Team("Redskins",   "#651D32", "#FFB81C",  null,     1),
  new Team("Saints",     "#D3BC8D", "#000",    "#FFF",    2),
  new Team("Seahawks",   "#0C2340", "#78BE20", "#A5ACAF", 2),
  new Team("Steelers",   "#FFB81C", "#191310",  null,     1),
  new Team("Texans",     "#03202f", "#A71930", "#FFF",    2),
  new Team("Titans",     "#041E42","#418FDE",  "#FFF",    2),
  new Team("Vikings",    "#4f2683", "#FFC62F", "#FFF",    2)
]

let nba = [
  new Team("76ers",        "#1560BD", "#ED174C", "#FFF",    2),
  new Team("Bucks",        "#244136", "#EFE2C7",  null,     1),
  new Team("Bulls",        "#D4001F", "#000",     null,     1),
  new Team("Cavs",         "#6F263D", "#FFB81C", "#FFF",    2),
  new Team("Celtics",      "#008348", "#FFF",     null,     1),
  new Team("Clippers",     "#ED174C", "#006BB6", "#000",    2),
  new Team("Grizzlies",    "#00235E", "#618ABA", "#FDBA22", 2),
  new Team("Hawks",        "#E1373C", "#C1D32F", "#26282A", 2),
  new Team("Heat",         "#99002A", "#000",    "#F9A114", 2),
  new Team("Hornets",      "#00788C", "#1D1160",  null,     1),
  new Team("Jazz",         "#051E3E", "#FFA500", "#275031", 2),
  new Team("Kings",        "#5A2982", "#63737B",  null,     1),
  new Team("Knicks",       "#1F3C80", "#F26729",  null,     1),
  new Team("Lakers",       "#552583", "#FDB927", "#000",    2),
  new Team("Magic",        "#0378BE", "#000",    "#C4CED4", 2),
  new Team("Mavs",         "#007EC6", "#00285E", "#BBC4CA", 2),
  new Team("Nets",         "#000",    "#FFF",     null,     1),
  new Team("Nuggets",      "#4F92CE", "#FDB927", "#1D2236", 2),
  new Team("Pacers",       "#041E42", "#FAD73D", "#BEC0C2", 2),
  new Team("Pelicans",     "#00275C", "#B5985A", "#E41134", 2),
  new Team("Pistons",      "#003AA7", "#DE002D", "#FFF",    2),
  new Team("Raptors",      "#CE083F", "#000",    "#A1A1A4", 2),
  new Team("Rockets",      "#DE333D", "#C4CED3", "#000",    2),
  new Team("Spurs",        "#C4CED4", "#000",     null,     1),
  new Team("Suns",         "#1D1160", "#E6601A", "#000",    2),
  new Team("Thunder",      "#007BC2", "#F0502F", "#002962", 2),
  new Team("Wolves",       "#041E3E", "#1E6193", "#79BF1A", 2),
  new Team("Blazers",      "#C81029", "#000",    "#FFF",    2),
  new Team("Warriors",     "#2938F1", "#FDBA22",  null,     1),
  new Team("Wizards",      "#E41134", "#00275C", "#C4CED4", 2)
]

let nhl = [
  new Team("Avalanche",   "#6F263D", "#236192", "#A2AAAD", 2),
  new Team("Blackhawks",  "#CE1126", "#FFF",    "#000",    2),
  new Team("Jackets",     "#181E3C", "#CF0921", "#FFF",    2),
  new Team("Blues",       "#002B88", "#FCB514", "#002654", 2),
  new Team("Bruins",      "#000",    "#E0A112",  null,     1),
  new Team("Canadiens",   "#B11829", "#192168", "#FFF",    2),
  new Team("Canucks",     "#01316F", "#008852", "#FFF",    2),
  new Team("Capitals",    "#CF132B", "#FFF",    "#041E41", 2),
  new Team("Coyotes",     "#8D2130", "#E2D6B5", "#000",    2),
  new Team("Devils",      "#CF0921", "#000",    "#FFF",    2),
  new Team("Ducks",       "#000",    "#B5985A", "#F85500", 2),
  new Team("Flames",      "#CF0921", "#F3BE51", "#000",    2),
  new Team("Flyers",      "#F74700", "#000",    "#FFF",    2),
  new Team("Hurricanes",  "#CF0921", "#FFF",    "#000",    2),
  new Team("Islanders",   "#002973", "#F47E2C", "#FFF",    2),
  new Team("Jets",        "#041E41", "#0060A5", "#FFF",    2),
  new Team("Knights",     "#343F49", "#B4975A", "#E31837", 2),
  new Team("Kings",       "#4F92CE", "#FDB927", "#1D2236", 2),
  new Team("Leafs",       "#000085", "#FFF",     null,     1),
  new Team("Lightning",   "#002368", "#FFF",     null,     1),
  new Team("Oilers",      "#FF4C00", "#00183F", "#FFF",    2),
  new Team("Panthers",    "#C8102E", "#041E42", "#B9975B", 2),
  new Team("Penguins",    "#000",    "#F9B213",  null,     1),
  new Team("Predators",   "#FFB915", "#001840", "#FFF",    2),
  new Team("Rangers",     "#0035A9", "#BA0C00", "#FFF",    2),
  new Team("Wings",       "#CF0921", "#FFF",     null,     1),
  new Team("Sabres",      "#071B36", "#FCB60C", "#ADAFAA", 2),
  new Team("Senators",    "#CF0921", "#000",    "#BF910C", 2),
  new Team("Sharks",      "#006D75", "#000",    "#EA7200", 2),
  new Team("Stars",       "#006644", "#000",    "#FFF",    2),
  new Team("Wild",        "#024930", "#E3D7B6", "#B0181F", 2)
]

export{Category, nfl, nba, nhl}
