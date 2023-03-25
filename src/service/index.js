import handbagThumb1 from '../images/34db4052f39a43fc2406b0e46df65cfa.jpeg'
import handbagThumb2 from '../images/cf8ba70772ac7616b11835aa77b47fe4.jpeg'
import handbagThumb3 from '../images/cffb530602e96062925f0a1690151522.jpeg'
import sunglassesThumb1 from '../images/1b3d2318161de3fe3f16dd3d2e5b673e.jpeg'
import sunglassesThumb2 from '../images/212468a784a0228b8ff6fb3288f0006e.jpeg'
import sunglassesThumb3 from '../images/0ed71e4126d827df096727f06b4610af.jpeg'
import chainThumb1 from '../images/c5996d2e9a4c5684b1397d920b0f4715.jpeg'
import chainThumb2 from '../images/fcadf2ed77d2a690b622f54d41fcf5f8.jpeg'

export const products = [
  // accesssories product
  {
    name: 'hand bag',
    category: 'accessories',
    price: 89000,
    variant: [],
    size: [],
    image: [handbagThumb1, handbagThumb2, handbagThumb3],
  },
  {
    name: 'basic sunglasses',
    category: 'accessories',
    price: 49000,
    variant: [{ color: 'vintage transparent' }, { color: 'retro black' }],
    size: [],
    image: [sunglassesThumb1, sunglassesThumb2, sunglassesThumb3],
  },
  {
    name: 'stainless premium chain',
    category: 'accessories',
    price: 49000,
    variant: [{ color: 'silver' }, { color: 'gold' }],
    size: [],
    image: [chainThumb1, chainThumb2],
  },
  {
    name: 'rings',
    category: 'accessories',
    price: 29000,
    variant: [{ color: 'silver' }, { color: 'gold' }, { color: 'black' }],
    size: [],
    image: [
      '2ba1069cd2060fb7203152fb736d3ba8',
      '2c19389d74fe30cf8ca82771a68b043a',
      '456c988bc9e6d32fe9ea97e983696fdd',
    ],
  },
  {
    name: 'waits bag',
    category: 'accessories',
    price: 69000,
    variant: ['black', 'navy', 'dark green', 'army'],
    size: [],
    image: [
      '',
      'bc60f9695e4584f81c00e65b97eba01c',
      'f5a619d647d1894936d6e7b44ea7f839',
      '8fe41d204ad68b0fd97d3c34aa149a74',
    ],
  },
  {
    name: 'belt leather',
    category: 'accessories',
    price: 55000,
    variant: [],
    size: [],
    image: [
      'c8f110cae3311d20a41384c1f6e4834c',
      '69f3e8312f1c3e7f1d35243abe229194',
      '8df8a7721c89d0eb97f3e0106b762210',
    ],
  },

  //   pants products
  {
    name: 'long ankle pants',
    category: 'pants',
    price: 99000,
    variant: [
      { color: 'grey', image_path: 'ecf2dea83f8c1ff077ae29df12b1d6fe' },
      { color: 'navy', image_path: '82c7cb5bef2f1a4b85b08a4295c9bc5e' },
      { color: 'cream', image_path: '14c04e6d511712f46497f84182246664' },
      { color: 'black', image_path: '5038156aae3debf6613a0635863371ba' },
    ],
    size: [28, 30, 32, 34, 36, 38],
    image: [
      '',
      'eb90e6c88dfd3fd0a94d5a02a3f6fc47',
      '22d132f15aa286a4d3b30b8e6db87cf7',
    ],
  },
  {
    name: 'short chino pants',
    category: 'pants',
    price: 94500,
    variant: [
      { color: 'cream', image_path: '51333262fabe6f312635704a9d9c072f' },
      { color: 'grey', image_path: 'b1df750ebba2460eda678834381815c0' },
      { color: 'brown', image_path: 'dd092ef99b7516059d5ff8186a5db11a' },
    ],
    size: [28, 30, 32, 34, 36, 38],
    image: [
      '51333262fabe6f312635704a9d9c072f',
      'b1df750ebba2460eda678834381815c0',
      'dd092ef99b7516059d5ff8186a5db11a',
    ],
  },
  {
    name: 'long denim pants',
    category: 'pants',
    price: 149000,
    variant: [
      { color: 'bleach', image_path: 'sg-11134201-22110-ngsyqze8ufjva6' },
      { color: 'old bio', image_path: 'sg-11134201-22110-azuzzw38ufjv84' },
      { color: 'old bio', image_path: 'sg-11134201-22110-azuzzw38ufjv84' },
      {
        color: 'old bio bleach',
        image_path: 'sg-11134201-22110-9y7whuu8ufjv0f',
      },
      {
        color: 'old bio wash',
        image_path: 'sg-11134201-22110-5vpql1y8ufjv0c',
      },
    ],
    size: [28, 30, 32, 34, 36, 38],
    image: [
      'a856240821f74b485ee893db2852cb9c',
      '2aba556ac012623f139c4c5e5b131e2d',
      'eaf69cab6106847cc06f35f1908edcb8',
    ],
  },
  {
    name: 'short denim pants',
    category: 'pants',
    price: 89000,
    variant: [
      { color: 'jet black', image_path: 'sg-11134201-22100-xtuqotyde2ivb7' },
      { color: 'short bleach', image_path: 'sg-11134201-22100-y0m8k6koe2iv62' },
      {
        color: 'short old bio',
        image_path: 'sg-11134201-22100-s3mvcipoe2iv3a',
      },
    ],
    size: [28, 30, 32, 34, 36, 38],
    image: [
      '43a7aaedc54a2227212ac8da0bd81ab8',
      'd4c989bb5fc421ae27b72ae7aaecb13c',
    ],
  },
  {
    name: 'osaka short pants',
    category: 'pants',
    price: 69000,
    variant: [
      { color: 'osaka black', image_path: 'sg-11134201-22100-caut5tf2d2iv2e' },
      { color: 'osaka navy', image_path: 'sg-11134201-22100-q8z2wrn2d2ivd9' },
      { color: 'osaka cream', image_path: 'sg-11134201-22100-2sogxu64d2ived' },
      { color: 'osaka khaki', image_path: 'sg-11134201-22100-t3epetb5d2ivce' },
      { color: 'osaka army', image_path: 'sg-11134201-22100-d7evgfi5d2iv8c' },
    ],
    size: ['m', 'l', 'xl'],
    image: [
      '55dbe3eae2ae45fb91f1db59ebc784b3',
      '01892b6a244755e2c40ee7ba94571770',
      'bb0fceeba1c8cca9496561e4cf4d4653',
    ],
  },
  //   jacket products
  {
    name: 'bomber jacket',
    category: 'jacket/sweater',
    price: 169000,
    variant: [],
    size: ['m', 'l', 'xl'],
    image: [
      'sg-11134201-22100-cqadvlgjuiive3',
      'sg-11134201-22100-ixm75efjuiiv57',
      'sg-11134201-22100-q8bnhrdjuiiv67',
    ],
  },
  {
    name: 'canvas jacket',
    category: 'jacket/sweater',
    price: 119000,
    variant: [
      { color: 'black', image_path: 'sg-11134201-22110-a7e8p3jkwfjvba' },
      { color: 'navy', image_path: 'sg-11134201-22110-o41ri6ymwfjv11' },
      { color: 'khaki', image_path: '0f00ac2d15da49a1e430f687b37bf941' },
      { color: 'army', image_path: 'sg-11134201-22110-gquotztkwfjvca' },
    ],
    size: ['m', 'l', 'xl'],
    image: [
      '146353b8c9954b0f96daf01d85f55890',
      'd6a212f02420efd12ca6588a1a8fe655',
    ],
  },
  {
    name: 'sukajan hoodie',
    category: 'jacket/sweater',
    price: 199000,
    variant: [],
    size: ['m', 'l', 'xl'],
    image: [
      '5aaa2f18350dfd05cab2078d7ee469cc',
      '9ffa127090075e5eaba955283260d11f',
      'a72159627f26fd9cd5c4bf9abe74651a',
    ],
  },
  {
    name: 'serpha jacket',
    category: 'jacket/sweater',
    price: 189000,
    variant: [],
    size: ['m', 'l', 'xl'],
    image: [
      'id-11134201-23030-3lfpjidjyvove5',
      'id-11134201-23030-524ckfejyvova4',
      'id-11134201-23030-dgnqphdjyvov87',
    ],
  },
  {
    name: 'nano premium sweater',
    category: 'jacket/sweater',
    price: 129000,
    variant: [
      { color: 'nano black', image_path: 'sg-11134201-22110-5501kjadozjv54' },
      { color: 'nano navy', image_path: 'sg-11134201-22110-pomjln1cozjv58' },
      { color: 'nano army', image_path: 'sg-11134201-22110-jtnsnnpcozjv3c' },
      { color: 'nano mustard', image_path: 'sg-11134201-22110-jhqupglcozjv67' },
    ],
    size: ['m', 'l', 'xl'],
    image: [
      '678d6cb8d3d0bbf9242e9aa2ac6ed3aa',
      '41e64b750c2ca1eae156116f60f7918e',
      'a7d6254647e6db3b6d60e13a7b6663fe',
    ],
  },
  //   tees
  {
    name: 'tees japan series',
    category: 't-shirt',
    price: 99000,
    variant: [
      { color: 'japan tiger', image_path: 'sg-11134201-22110-9uvt5j0nwfjvef' },
      { color: 'dragon japan', image_path: 'sg-11134201-22110-z2cy5r1owfjv33' },
      { color: 'deer japan', image_path: 'sg-11134201-22110-sr8w0atowfjv6f' },
      { color: 'fish japan', image_path: 'sg-11134201-22110-3w8dvfbpwfjv2f' },
    ],
    size: ['m', 'l', 'xl'],
    image: [
      '3c4fe7788a6518493f8628a69b65905c',
      '5a05b987819a5a2e21e99eccc1a55c13',
    ],
  },
  {
    name: 'tees carbon mv-11',
    category: 't-shirt',
    price: 56000,
    variant: [
      { color: 'green canyon', image_path: '7336ae7442956a53e97b364cb37d7b64' },
      { color: 'dark grey', image_path: 'sg-11134201-22100-yhd2jf92nbiv9c' },
      { color: 'royal blue', image_path: 'sg-11134201-22100-q8zhl0d3nbiv0e' },
      { color: 'maroon misty', image_path: 'sg-11134201-22100-hdnlpai3nbiv63' },
    ],
    size: ['m', 'l', 'xl', 'xxl'],
    image: ['4e900f17cf9732ef1693c4cb483d6ca9'],
  },
  {
    name: 'tees tribow',
    category: 't-shirt',
    price: 56000,
    variant: [
      {
        color: 'black red green',
        image_path: 'sg-11134201-22110-dmzt2rg01fjv7e',
      },
      {
        color: 'green yellow white',
        image_path: 'sg-11134201-22110-3gjc09o01fjv35',
      },
      {
        color: 'red black white',
        image_path: 'sg-11134201-22110-budu04w01fjv49',
      },
      {
        color: 'navy red green',
        image_path: 'sg-11134201-22110-buhp1c401fjva1',
      },
      {
        color: 'yellow black white',
        image_path: 'sg-11134201-22110-4vp7l8901fjv07',
      },
    ],
    size: ['m', 'l', 'xl'],
    image: [
      '04f7218de9161f73f2b9badb4c3ee221',
      'd3ef1d3c766c718e9f17475971b6f330',
      'e70dc6a8defcd44bf9e516d3f237e3b7',
    ],
  },
  //   T- shirt
  {
    name: 't-shirt amrilo series',
    category: 't-shirt',
    price: 89000,
    variant: [
      {
        color: 'black pattern gold',
        image_path: '5688ab4e5cf5fdf8735562ecc37442ba',
      },
      {
        color: 'green leaf',
        image_path: '5189039c91441b0aa4b2e06ea370a1bf',
      },
      {
        color: 'straight rainbow',
        image_path: '1295efd9b74621c89d3d69365b165514',
      },
      {
        color: 'leopard',
        image_path: 'd202fd6f87cd34e431692193d1b3596c',
      },
      {
        color: 'rellow',
        image_path: '65307c93e5091d855f2acf5b7c687bf1',
      },
      {
        color: 'whale',
        image_path: 'a3db1f3023198f90d27e1b2310bea849',
      },
    ],
    size: ['m', 'l', 'xl', 'xxl'],
    image: [
      'bf251e577449a1f464e2f01185035685',
      '30f02bcf90427c7cb265729f73487b07',
      '55d32f8c28c584ba538b1a6da2253a5b',
    ],
  },
  {
    name: 't-shirt aston series',
    category: 't-shirt',
    price: 89000,
    variant: [
      {
        color: 'black',
        image_path: 'sg-11134201-22110-svqufyhoqfjv0f',
      },
      {
        color: 'navy',
        image_path: 'sg-11134201-22110-hhm4hdvoqfjv89',
      },
      {
        color: 'grey',
        image_path: 'sg-11134201-22110-5r716evoqfjv12',
      },
      {
        color: 'cream',
        image_path: 'sg-11134201-22110-g7ezr7xoqfjv23',
      },
    ],
    size: ['m', 'l', 'xl'],
    image: [
      '505d46ad283ae1a1722e81782ddeb6ce',
      '8d2da96abc6ffbf9546e7398b39d53d8',
      'c0ca33eb83f0ec1c946074c2fd738ebf',
    ],
  },
  {
    name: 't-shirt dallas series',
    category: 't-shirt',
    price: 89000,
    variant: [
      {
        color: 'black',
        image_path: 'sg-11134201-22100-aboqt1mye2ive6',
      },
      {
        color: 'white',
        image_path: 'sg-11134201-22100-cqqpjttye2iv80',
      },
      {
        color: 'navy',
        image_path: 'sg-11134201-22100-5jc994jze2iv7a',
      },
      {
        color: 'maroon',
        image_path: 'sg-11134201-22100-68uedmpze2iv37',
      },
      {
        color: 'dark grey',
        image_path: 'sg-11134201-22100-k1r892uze2iv21',
      },
      {
        color: 'green',
        image_path: 'sg-11134201-22100-pnsue5xze2ivb8',
      },
      {
        color: 'army',
        image_path: 'sg-11134201-22100-mknlo36zf2iva6',
      },
    ],
    size: ['m', 'l', 'xl'],
    image: [
      '7985d40bccce0ef5b99da5e36bc63ca0',
      '0bc87865b4ff124e29e07f47ad2ac1db',
      'dc467fa9c62ab3fb595f1d4a8dd56460',
    ],
  },
  {
    name: 't-shirt flanel premium',
    category: 't-shirt',
    price: 129000,
    variant: [
      {
        color: 'red black cream',
        image_path: 'sg-11134201-23020-192g6f7snhnv18',
      },
      {
        color: 'blue white',
        image_path: 'sg-11134201-23020-4t9gsi9snhnv22',
      },
      {
        color: 'square grey',
        image_path: 'sg-11134201-23020-xg3ehcdtnhnv23',
      },
      {
        color: 'brown grey navy',
        image_path: 'sg-11134201-23020-md5cg2dtnhnvc9',
      },
      {
        color: 'square line grey',
        image_path: 'sg-11134201-23020-t4w9wsetnhnv46',
      },
      {
        color: 'square grey navy',
        image_path: 'sg-11134201-23020-o1mnzxftnhnv9b',
      },
    ],
    size: ['m', 'l', 'xl'],
    image: [
      'sg-11134201-23020-6wntx42snhnv49',
      'sg-11134201-23020-lz77v83snhnva8',
      'sg-11134201-23020-o1yow04snhnvc4',
    ],
  },
  {
    name: 't-shirt ultimate series',
    category: 't-shirt',
    price: 129000,
    variant: [
      {
        color: 'red black cream',
        image_path: 'sg-11134201-23020-192g6f7snhnv18',
      },
      {
        color: 'blue white',
        image_path: 'sg-11134201-23020-4t9gsi9snhnv22',
      },
      {
        color: 'square grey',
        image_path: 'sg-11134201-23020-xg3ehcdtnhnv23',
      },
      {
        color: 'brown grey navy',
        image_path: 'sg-11134201-23020-md5cg2dtnhnvc9',
      },
      {
        color: 'square line grey',
        image_path: 'sg-11134201-23020-t4w9wsetnhnv46',
      },
      {
        color: 'square grey navy',
        image_path: 'sg-11134201-23020-o1mnzxftnhnv9b',
      },
    ],
    size: ['m', 'l', 'xl'],
    image: [
      'sg-11134201-23020-6wntx42snhnv49',
      'sg-11134201-23020-lz77v83snhnva8',
      'sg-11134201-23020-o1yow04snhnvc4',
    ],
  },
]
