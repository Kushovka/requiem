type PopularItem = {
  imgPath: string
  title: string
  price: string
  oldPrice: string
  sale: string
}
const popularItems: PopularItem[] = [
  {
    imgPath: '/images/home/popularItem/img1.png',
    title: 'Букет «Памятный» из 25 белых роз',
    price: '5 950 руб.',
    oldPrice: '5 500 руб.',
    sale: '-10%'
  },
  {
    imgPath: '/images/home/popularItem/img2.png',
    title: 'Лампада с гравировкой «Покойся с миром',
    price: '2 800 руб.',
    oldPrice: '3 200 руб.',
    sale: '-12%'
  },
  {
    imgPath: '/images/home/popularItem/img3.jpg',
    title: 'Икона Спасителя на дереве ручной работы',
    price: '7 000 руб.',
    oldPrice: '8 000 руб.',
    sale: '-12%'
  }
]
export default popularItems
