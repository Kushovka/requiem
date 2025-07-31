type FooterItem = {
  title: string
  containers1?: {
    text1: string
    text2: string
    text3: string
  }[]
  containers2?: {
    text1: string
    text2: string
  }[]
  containers3?: {
    text1: string
    text2: string
    text3: string
    text4: string
  }[]
  containers4?: {
    text1: string
    text2: string
    text3: string
  }[]
  containers5?: {
    text1: string
    icon1: string
    text2: string
    icon2: string
    text3: string
    icon3: string
  }[]
}
const footerItems: FooterItem[] = [
  {
    title: 'О магазине',
    containers1: [
      {
        text1: 'Помощь',
        text2: 'Доставка',
        text3: 'О магазине'
      }
    ],
    containers2: [
      {
        text1: 'Гарантии',
        text2: 'Контакты'
      }
    ]
  },
  {
    title: 'Каталог',
    containers3: [
      {
        text1: 'Памятники и надгробия',
        text2: 'Цветы, венки и букеты',
        text3: 'Свечи и лампады',
        text4: 'Ритауальные принадлежности'
      }
    ],
    containers4: [
      {
        text1: 'Траурная одежда',
        text2: 'Организация похорон',
        text3: 'Консультации'
      }
    ]
  },
  {
    title: 'Контакты',
    containers5: [
      {
        icon1: '/images/footer/icon1.svg',
        text1: '+7 (3435) 961-505',
        icon2: '/images/footer/icon2.svg',
        text2: 'г. Нижний Тагил',
        icon3: '/images/footer/icon3.svg',
        text3: 'Круглосуточно'
      }
    ]
  }
]
export default footerItems
