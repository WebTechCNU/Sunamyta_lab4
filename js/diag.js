let arr = [
    {
        name: "book1",
        link:"book/1.jpg",
        description: "Біблія",
        price:"1000₴",
        category: 1
    },
    {
        name: "book2",
        link: "book/2.jpg",
        description: "Люби Бога всією думкою своєю",
        price:"300₴",
        category: 1
    },
    {
        name: "book3",
        link: "book/3.jpg",
        description: "Життя з метою",
        price:"450₴",
        category: 1
    },
    {
        name: "book4",
        link: "book/4.jpg",
        description: "Оновлюючись день у день",
        price:"250₴",
        category: 1
    },
    
    {
        name: "book5",
        link: "book/5.jpg",
        description: "Книга мучеников",
        price:"700₴",
        category: 1
    },
    {
        name: "book6",
        link: "book/6.jpg",
        description: "Сила слова",
        price:"750₴",
        category: 1
    },
    {
        name: "book7",
        link: "book/7.jpg",
        description: "Любов діє",
        price:"850₴",
        category: 1
    },
     {
        name: "book8",
        link: "book/8.jpg",
        description: "Що ми знаємо про небо",
        price:"450₴",
        category: 1
    },
     {
        name: "book9",
        link: "book/9.jpg",
        description: "Біблія",
        price:"930₴",
        category: 1
    },
        {
        name: "book10",
        link: "book/15.jpg",
        description: "Історія української кухні",
        price:"750₴",
        category: 2
    },
       {
        name: "book11",
        link: "book/14.jpg",
        description: "Історія книги",
        price:"450₴",
        category: 2
        
    },
        {
        name: "book12",
        link: "book/16.jpg",
        description: "Хіросіма",
        price:"660₴",
        category: 2
    },
        {
        name: "book13",
        link: "book/13.jpg",
        description: "Історія мистецтвa",
        price:"880₴",
        category: 2
    },
        {
        name: "book14",
        link: "book/11.jpg",
        description: "Глобальна історія України",
        price:"550₴",
        category: 2
    },
        {
        name: "book15",
        link: "book/10.jpg",
        description: "Історія світу ",
        price:"500₴",
        category: 2
    },
        {
        name: "book16",
        link: "book/12.jpg",
        description: " Історія економіки",
        price:"740₴",
        category: 2
    },
        {
        name: "book17",
        link: "book/17.jpg",
        description: "Сепед дикунуків Нової-Гвінеї",
        price:"600₴",
        category: 3
    },
        {
        name: "book18",
        link: "book/23.jpg",
        description: "Морські історії ",
        price:"300₴",
        category: 3
    },
    {
        name: "book19",
        link: "book/24.jpg",
        description: "Заповідне лісознавство",
        price:"260₴",
        category: 3
    },
    {
        name: "book20",
        link: "book/20.jpg",
        description: "Екзотичні дерева,кущі та ліани в ландшафтах України",
        price:"500₴",
        category: 3
    },
    {
        name: "book21",
        link: "book/21.jpg",
        description: "Розповідь про тварин та їх назви",
        price:"400₴",
        category: 3
    },
    {
        name: "book22",
        link: "book/19.jpg",
        description: "Пташина історія ",
        price:"250₴",
        category: 3
    },
    {
        name: "book23",
        link: "book/23.jpg",
        description: "Біологія поведінки",
        price:"200₴",
        category: 3
    },
    {
        name: "book24",
        link: "book/24.jpg",
        description: "Довідник майстра лісу ",
        price:"280₴",
        category: 3
    },
];
let barColors = [
    "rgba(233, 226, 213)",
    "rgba(202, 190, 167)",
    "rgba(184, 167, 136)",
    "rgba(138, 108, 59)",
    "rgba(158, 139, 102)",
    "rgba(134, 119, 88))",
    "rgba(114, 97, 62))",
    "rgba(124, 118, 109)",
    "rgba(151, 135, 100)",
    "rgba(109, 92, 55)",
    "rgba(109, 96, 67)",
    "rgba(100, 80, 45)",
    "rgba(185, 152, 93)",
    "rgba(146, 120, 74)",
    "rgba(189, 157, 110)",
    "rgba(177, 155, 115)",
    "rgba(233, 217, 188)",
    "rgba(235, 212, 173)",
    "rgba(204, 171, 113)",
    "rgba(175, 151, 111)",
    "rgba(151, 135, 109)",
    "rgba(133, 115, 86)",
    "rgba(116, 99, 72)",
    "rgba(82, 65, 37)",
    

];
new Chart("Chart", {
    type: "pie",
    data: {
        labels: arr.map(e => e.name),
        datasets: [{
            backgroundColor: barColors,
            data: arr.map(e => e.category)
        }]
    },
    options: {
        title: {
            display: true,
            text: "BOOKS"
        }
    }
});