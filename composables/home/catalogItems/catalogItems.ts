type catalogItem = {
  id: number
  imgPath: string
  images: string[]
  name: string
  price: string
  oldPrice: string
  sale: string
}
const catalogItems: catalogItem[] = [
  {
    id: 1,
    imgPath: '/images/home/catalog/memo.png',
    images: ['/images/home/catalog/memo.png', '/images/home/catalog/memo.png', '/images/home/catalog/memo.png'],
    name: 'Памятник стандартный М12',
    price: '35 880 руб.',
    oldPrice: '38 580 руб.',
    sale: '-10%'
  },
  {
    id: 2,
    imgPath: '/images/home/catalog/memo.png',
    images: ['/images/home/catalog/memo.png', '/images/home/catalog/memo.png', '/images/home/catalog/memo.png'],
    name: 'Памятник фигурный РИТУАЛ 8.1',
    price: '35 880 руб.',
    oldPrice: '38 580 руб.',
    sale: '-10%'
  },
  {
    id: 3,
    imgPath: '/images/home/catalog/memo.png',
    images: ['/images/home/catalog/memo.png', '/images/home/catalog/memo1.jpg', '/images/home/catalog/memo2.jpg'],
    name: 'Памятник ручной работы с орнаментом',
    price: '35 880 руб.',
    oldPrice: '38 580 руб.',
    sale: '-10%'
  },
  {
    id: 4,
    imgPath: '/images/home/catalog/memo.png',
    images: ['/images/home/catalog/memo.png', '/images/home/catalog/memo.png', '/images/home/catalog/memo.png'],
    name: 'Памятник стандартный',
    price: '35 880 руб.',
    oldPrice: '38 580 руб.',
    sale: '-10%'
  },
  {
    id: 5,
    imgPath: '/images/home/catalog/memo.png',
    images: ['/images/home/catalog/memo.png', '/images/home/catalog/memo.png', '/images/home/catalog/memo.png'],
    name: 'Памятник стандартный М12',
    price: '35 880 руб.',
    oldPrice: '38 580 руб.',
    sale: '-10%'
  },
  {
    id: 6,
    imgPath: '/images/home/catalog/memo.png',
    images: ['/images/home/catalog/memo.png', '/images/home/catalog/memo.png', '/images/home/catalog/memo.png'],
    name: 'Памятник фигурный РИТУАЛ 8.1',
    price: '35 880 руб.',
    oldPrice: '38 580 руб.',
    sale: '-10%'
  },
  {
    id: 7,
    imgPath: '/images/home/catalog/memo.png',
    images: ['/images/home/catalog/memo.png', '/images/home/catalog/memo.png', '/images/home/catalog/memo.png'],
    name: 'Памятник ручной работы с орнаментом',
    price: '35 880 руб.',
    oldPrice: '38 580 руб.',
    sale: '-10%'
  },
  {
    id: 8,
    imgPath: '/images/home/catalog/memo.png',
    images: ['/images/home/catalog/memo.png', '/images/home/catalog/memo.png', '/images/home/catalog/memo.png'],
    name: 'Памятник стандартный',
    price: '35 880 руб.',
    oldPrice: '38 580 руб.',
    sale: '-10%'
  }
]
export default catalogItems
