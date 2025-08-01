type CatalogAllItems = {
  title: string
  text: string
  dopText: string
  imgPath: string
  containers1?: {
    text1: string
    text2: string
    text3: string
    text4: string
    text5: string
    text6: string
    text7: string
    text8: string
  }[]
  containers2?: {
    text1: string
    text2: string
    text3: string
    text4: string
  }[]
  containers3?: {
    text1: string
    text2: string
    text3: string
  }[]
  containers4?: {
    text1: string
    text2: string
    text3: string
  }[]
  containers5?: {
    text1: string
    text2: string
    text3: string
    text4: string
  }[]
  containers6?: {
    text1: string
    text2: string
    text3: string
  }[]
  containers7?: {
    text1: string
    text2: string
    text3: string
  }[]
  containers8?: {
    text1: string
    text2: string
  }[]
}
const catalogAllItems: CatalogAllItems[] = [
  {
    title: 'Памятники и надгробия',
    text: 'Надёжные и красивые памятники из натурального камня ',
    dopText: 'Установка, гравировка, полный комплект',
    imgPath: '/images/catalogAllItems/img1.png',
    containers1: [
      {
        text1: 'Классические',
        text2: 'Из черного гранита',
        text3: 'Из цветного гранита',
        text4: 'Фигурные',
        text5: 'Ручной работы',
        text6: 'Кресты',
        text7: 'Комбинированные',
        text8: 'Военнослужащим'
      }
    ]
  },
  {
    title: 'Цветы, венки и букеты',
    text: 'Свежие цветы и венки к месту прощания',
    dopText: 'Быстрая доставка, бережное оформление',
    imgPath: '/images/catalogAllItems/img2.png',
    containers2: [
      {
        text1: 'Венки и композиции',
        text2: 'Букеты на траур',
        text3: 'Корзина с цветами',
        text4: 'Монобукеты'
      }
    ]
  },
  {
    title: 'Свечи и лампады',
    text: 'Свечи и лампады к поминкам и годовщинам',
    dopText: 'С доставкой и возможностью оформления',
    imgPath: '/images/catalogAllItems/img3.png',
    containers3: [
      {
        text1: 'Храмовые свечи',
        text2: 'Электрические лампады',
        text3: 'Свечи с именными табличками'
      }
    ]
  },
  {
    title: 'Ритуальные принадлежности',
    text: 'Оформление с соблюдением традиций',
    dopText: 'Качественные ритуальные аксессуары для церемонии и поминок',
    imgPath: '/images/catalogAllItems/img4.png',
    containers4: [
      {
        text1: 'Иконы и кресты',
        text2: 'Траурные открытки',
        text3: 'Обрядовые предметы'
      }
    ]
  },
  {
    title: 'Организация похорон',
    text: 'Похороны под ключ — без лишних забот',
    dopText: 'Быстро, достойно, с соблюдением всех традиций',
    imgPath: '/images/catalogAllItems/img5.png',
    containers5: [
      {
        text1: 'Полный комплекс услуг',
        text2: 'Заказ транспорта',
        text3: 'Вызов ритаульного агента',
        text4: 'Бумаги и документы'
      }
    ]
  },
  {
    title: 'Траурная одежда',
    text: 'Черная одежда для поминок и церемонии',
    dopText: 'Размеры для всех возрастов и комплекций',
    imgPath: '/images/catalogAllItems/img6.png',
    containers6: [
      {
        text1: 'Одежда',
        text2: 'Повязки и значки',
        text3: 'Рушники, платки'
      }
    ]
  },
  {
    title: 'Уход за могилой',
    text: 'Чистота и порядок на месте захоронения',
    dopText: 'Услуги по сезонной и ежегодной уборке',
    imgPath: '/images/catalogAllItems/img7.png',
    containers7: [
      {
        text1: 'Чистка и уборка участка',
        text2: 'Установки ограды',
        text3: 'Уход за памятником'
      }
    ]
  },
  {
    title: 'Консультации',
    text: 'Бесплатные консультации по организации похорон, документам и традициям',
    dopText: 'Ответим на любые вопросы',
    imgPath: '/images/catalogAllItems/img8.png',
    containers8: [
      {
        text1: 'Консультации по наследству',
        text2: 'Помощь в оформлении документов'
      }
    ]
  }
]
export default catalogAllItems
