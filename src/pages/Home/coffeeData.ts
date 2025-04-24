import traditional from '../../assets/Coffee.svg'
import american from '../../assets/Coffee-2.svg'
import cremy from '../../assets/Coffee-3.svg'
import cold from '../../assets/Coffee-4.svg'
import coffeeMilk from '../../assets/Coffee-5.svg'
import latte from '../../assets/Coffee-6.svg'
import capuccino from '../../assets/Coffee-7.svg'
import macchiato from '../../assets/Coffee-8.svg'
import mocaccino from '../../assets/Coffee-9.svg'
import hotChocolate from '../../assets/Coffee-10.svg'
import cuban from '../../assets/Coffee-11.svg'
import hawaiian from '../../assets/Coffee-12.svg'
import arab from '../../assets/Coffee-13.svg'
import irish from '../../assets/Coffee-14.svg'
import { ProductProps } from './components/Product'
import { v4 } from 'uuid'

export const coffeeList: ProductProps[] = [
	{
		id: v4(),
		coffeName: 'Expresso Tradicional',
		coffeDescription: 'O tradicional café feito com água quente e grãos moídos',
		coffeType: ['TRADICIONAL'],
		imgUrl: traditional,
	},
	{
		id: v4(),
		coffeName: 'Expresso Americano',
		coffeDescription: 'Expresso diluído, menos intenso que o tradicional',
		coffeType: ['TRADICIONAL'],
		imgUrl: american,
	},
	{
		id: v4(),
		coffeName: 'Expresso Cremoso',
		coffeDescription: 'Café expresso tradicional com espuma cremosa',
		coffeType: ['TRADICIONAL'],
		imgUrl: cremy,
	},
	{
		id: v4(),
		coffeName: 'Expresso Gelado',
		coffeDescription: 'Bebida preparada com café expresso e cubos de gelo',
		coffeType: ['TRADICIONAL', 'GELADO'],
		imgUrl: cold,
	},
	{
		id: v4(),
		coffeName: 'Café com Leite',
		coffeDescription: 'Meio a meio de expresso tradicional com leite vaporizado',
		coffeType: ['TRADICIONAL', 'COM LEITE'],
		imgUrl: coffeeMilk,
	},
	{
		id: v4(),
		coffeName: 'Latte',
		coffeDescription: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		coffeType: ['TRADICIONAL', 'COM LEITE'],
		imgUrl: latte,
	},
	{
		id: v4(),
		coffeName: 'Capuccino',
		coffeDescription: 'Bebida com canela feita de doses iguais de café, leite e espuma',
		coffeType: ['TRADICIONAL', 'COM LEITE'],
		imgUrl: capuccino,
	},
	{
		id: v4(),
		coffeName: 'Macchiato',
		coffeDescription: 'Café expresso misturado com um pouco de leite quente e espuma',
		coffeType: ['TRADICIONAL', 'COM LEITE'],
		imgUrl: macchiato,
	},
	{
		id: v4(),
		coffeName: 'Mocaccino',
		coffeDescription: 'Café expresso com calda de chocolate, pouco leite e espuma',
		coffeType: ['TRADICIONAL', 'COM LEITE'],
		imgUrl: mocaccino,
	},
	{
		id: v4(),
		coffeName: 'Chocolate Quente',
		coffeDescription: 'Bebida feita com chocolate dissolvido no leite quente e café',
		coffeType: ['ESPECIAL', 'COM LEITE'],
		imgUrl: hotChocolate,
	},
	{
		id: v4(),
		coffeName: 'Cubano',
		coffeDescription: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
		coffeType: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
		imgUrl: cuban,
	},
	{
		id: v4(),
		coffeName: 'Havaiano',
		coffeDescription: 'Bebida adocicada preparada com café e leite de coco',
		coffeType: ['ESPECIAL'],
		imgUrl: hawaiian,
	},
	{
		id: v4(),
		coffeName: 'Árabe',
		coffeDescription: 'Bebida preparada com grãos de café árabe e especiarias',
		coffeType: ['ESPECIAL'],
		imgUrl: arab,
	},
	{
		id: v4(),
		coffeName: 'Irlandês',
		coffeDescription: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		coffeType: ['ESPECIAL', 'ALCOÓLICO'],
		imgUrl: irish,
	},
]
