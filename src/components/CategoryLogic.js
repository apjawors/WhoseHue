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
    }).slice(0,4)
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
  new Team("Buccaneers", "#D21019", "#34302B", "#FF7900", 2),
  new Team("Cardinals",  "#B0063A", "#000",    "#FFF",    2),
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
  new Team("Steelers",   "#FFB81C", "#000",     null,     1),
  new Team("Texans",     "#03202f", "#A71930", "#FFF",    2),
  new Team("Titans",     "#041E42","#418FDE",  "#FFF",    2),
  new Team("Vikings",    "#4f2683", "#FFC62F", "#FFF",    2)
]

let nba = [
  new Team("76ers",         "#1560BD", "#ED174C", "#FFF",    2),
  new Team("Bucks",         "#244136", "#EFE2C7",  null,     1),
  new Team("Bulls",         "#D4001F", "#000",     null,     1),
  new Team("Cavaliers",     "#6F263D", "#FFB81C", "#000",    2),
  new Team("Celtics",       "#008348", "#FFF",     null,     1),
  new Team("Clippers",      "#ED174C", "#006BB6", "#000",    2),
  new Team("Grizzlies",     "#00235E", "#618ABA", "#FDBA22", 2),
  new Team("Hawks",         "#E1373C", "#C1D32F", "#26282A", 2),
  new Team("Heat",          "#99002A", "#000",    "#F9A114", 2),
  new Team("Hornets",       "#00788C", "#1D1160",  null,     1),
  new Team("Jazz",          "#051E3E", "#FFA500", "#275031", 2),
  new Team("Kings",         "#5A2982", "#63737B",  null,     1),
  new Team("Knicks",        "#1F3C80", "#F26729",  null,     1),
  new Team("Lakers",        "#552583", "#FDB927", "#000",    2),
  new Team("Magic",         "#0378BE", "#000",    "#C4CED4", 2),
  new Team("Mavericks",     "#007EC6", "#00285E", "#BBC4CA", 2),
  new Team("Nets",          "#000",    "#FFF",     null,     1),
  new Team("Nuggets",       "#4F92CE", "#FDB927", "#1D2236", 2),
  new Team("Pacers",        "#041E42", "#FAD73D", "#BEC0C2", 2),
  new Team("Pelicans",      "#00275C", "#B5985A", "#E41134", 2),
  new Team("Pistons",       "#003AA7", "#DE002D", "#FFF",    2),
  new Team("Raptors",       "#CE083F", "#000",    "#A1A1A4", 2),
  new Team("Rockets",       "#DE333D", "#C4CED3", "#000",    2),
  new Team("Spurs",         "#C4CED4", "#000",     null,     1),
  new Team("Suns",          "#1D1160", "#E6601A", "#000",    2),
  new Team("Thunder",       "#007BC2", "#F0502F", "#002962", 2),
  new Team("Timberwolves",  "#041E3E", "#1E6193", "#79BF1A", 2),
  new Team("Trail Blazers", "#C81029", "#000",    "#FFF",    2),
  new Team("Warriors",      "#2938F1", "#FDBA22",  null,     1),
  new Team("Wizards",       "#E41134", "#00275C", "#C4CED4", 2)
]

let mlb = [
  new Team("Angels",       "#CE1141", "#003263", "#C4CED3", 2),
  new Team("Astros",       "#072854", "#EA6E24", "#FFF",    2),
  new Team("Athletics",    "#00352D", "#EEB21E", "#FFF",    2),
  new Team("Blue Jays",    "#0B488F", "#FFF",     null,     1),
  new Team("Braves",       "#16284F", "#CE1F43", "#FFF",    2),
  new Team("Brewers",      "#1A2550", "#FFF",    "#B7932A", 2),
  new Team("Cardinals",    "#B81B21", "#FFF",    "#FEE705", 2),
  new Team("Cubs",         "#0E3386", "#CC3433", "#FFF",    2),
  new Team("Diamondbacks", "#A8122C", "#E3D4AD", "#000",    2),
  new Team("Dodgers",      "#083884", "#FFF",    "#EF3E42", 2),
  new Team("Giants",       "#FD5A18", "#000",    "#FFF9ED", 2),
  new Team("Indians",      "#E41234", "#0B1930", "#FFF",    2),
  new Team("Mariners",     "#0C2C56", "#C4CED4", "#025D5D", 2),
  new Team("Marlins",      "#000",    "#FF6600", "#0079C9", 2),
  new Team("Mets",         "#002973", "#FF5807", "#FFF",    2),
  new Team("Nationals",    "#AC0000", "#FFF",    "#0C214A", 2),
  new Team("Orioles",      "#E04400", "#000",    "#FFF",    2),
  new Team("Padres",       "#1C3465", "#FFF",     null,     1),
  new Team("Phillies",     "#E91123", "#FFF",    "#234699", 2),
  new Team("Pirates",      "#000", "  #FDB827",  "#FFF",    2),
  new Team("Rangers",      "#003278", "#C10819", "#FFF",    2),
  new Team("Rays",         "#02285C", "#90BCE4", "#FFF",    2),
  new Team("Red Sox",      "#C71A2F", "#FFF",    "#052755", 2),
  new Team("Reds",         "#C6011F", "#FFF",     null,     1),
  new Team("Rockies",      "#37246B", "#000",    "#C4CED3", 2),
  new Team("Royals",       "#004488", "#FFF",    "#C19B5B", 2),
  new Team("Tigers",       "#021540", "#F26722", "#FFF",    2),
  new Team("Twins",        "#00275C", "#CF083F", "#FFF",    2),
  new Team("White Sox",    "#000",    "#C4CED3", "#FFF",    2),
  new Team("Yankees",      "#0B1F46", "#C4CED3", "#FFF",    2)
]

let nhl = [
  new Team("Avalanche",      "#6F263D", "#236192", "#A2AAAD", 2),
  new Team("Blackhawks",     "#CE1126", "#FFF",    "#000",    2),
  new Team("Blue Jackets",   "#181E3C", "#CF0921", "#FFF",    2),
  new Team("Blues",          "#002B88", "#FCB514", "#002654", 2),
  new Team("Bruins",         "#000",    "#E0A112",  null,     1),
  new Team("Canadiens",      "#B11829", "#192168", "#FFF",    2),
  new Team("Canucks",        "#01316F", "#008852", "#FFF",    2),
  new Team("Capitals",       "#CF132B", "#FFF",    "#041E41", 2),
  new Team("Coyotes",        "#8D2130", "#E2D6B5", "#000",    2),
  new Team("Devils",         "#CF0921", "#000",    "#FFF",    2),
  new Team("Ducks",          "#000",    "#B5985A", "#F85500", 2),
  new Team("Flames",         "#CF0921", "#F3BE51", "#000",    2),
  new Team("Flyers",         "#F74700", "#000",    "#FFF",    2),
  new Team("Hurricanes",     "#CF0921", "#FFF",    "#000",    2),
  new Team("Islanders",      "#002973", "#F47E2C", "#FFF",    2),
  new Team("Jets",           "#041E41", "#0060A5", "#FFF",    2),
  new Team("Golden Knights", "#343F49", "#B4975A", "#E31837", 2),
  new Team("Kings",          "#4F92CE", "#FDB927", "#1D2236", 2),
  new Team("Lightning",      "#002368", "#FFF",     null,     1),
  new Team("Maple Leafs",    "#000085", "#FFF",     null,     1),
  new Team("Oilers",         "#FF4C00", "#00183F", "#FFF",    2),
  new Team("Panthers",       "#C8102E", "#041E42", "#B9975B", 2),
  new Team("Penguins",       "#000",    "#F9B213",  null,     1),
  new Team("Predators",      "#FFB915", "#001840", "#FFF",    2),
  new Team("Rangers",        "#0035A9", "#BA0C00", "#FFF",    2),
  new Team("Red Wings",      "#CF0921", "#FFF",     null,     1),
  new Team("Sabres",         "#071B36", "#FCB60C", "#ADAFAA", 2),
  new Team("Senators",       "#CF0921", "#000",    "#BF910C", 2),
  new Team("Sharks",         "#006D75", "#000",    "#EA7200", 2),
  new Team("Stars",          "#006644", "#000",    "#FFF",    2),
  new Team("Wild",           "#024930", "#E3D7B6", "#B0181F", 2)
]

export{Category, nfl, nba, mlb, nhl}
