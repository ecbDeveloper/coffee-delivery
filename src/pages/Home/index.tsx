import { CoffeeGrid, CoffeeSection, DifferentiatorContainer, DifferentiatorIcons, GridContainer, HomeContainer, IntroductionContainer, MainInfosContainer, TitleContainer } from "./styles"
import mainImage from '../../assets/main-image.svg'
import { Coffee, Package, ShoppingCartSimple, Timer } from "@phosphor-icons/react"
import { Product } from "./components/Product"
import { coffeeList } from "./coffeeData"

export function Home() {

	return (
		<HomeContainer>
			<IntroductionContainer>
				<MainInfosContainer>

					<TitleContainer>
						<h1>Encontre o café perfeito para qualquer hora do dia</h1>
						<p>
							Com o Coffe Delivery você recebe seu café onde estiver,
							a qualquer hora
						</p>
					</TitleContainer>

					<GridContainer>
						<DifferentiatorContainer>
							<DifferentiatorIcons color="yellow-700" >
								<ShoppingCartSimple size={24} weight="fill" />
							</DifferentiatorIcons >
							<p>Compra simples e segura</p>
						</DifferentiatorContainer>

						<DifferentiatorContainer>
							<DifferentiatorIcons color="base-text" >
								<Package size={24} color="#ffffff" weight="fill" />
							</DifferentiatorIcons >
							<p>Embalagem mantém o café intacto</p>
						</DifferentiatorContainer>

						<DifferentiatorContainer>
							<DifferentiatorIcons color="yellow-500">
								<Timer size={24} weight="fill" />
							</DifferentiatorIcons >
							<p>Entrega rápida e rastreada</p>
						</DifferentiatorContainer>


						<DifferentiatorContainer>
							<DifferentiatorIcons color="purple-500" >
								<Coffee size={24} color="#ffffff" weight="fill" />
							</DifferentiatorIcons >
							<p>O café chega fresquinho até você</p>
						</DifferentiatorContainer>
					</GridContainer>

				</MainInfosContainer>
				<div>
					<img src={mainImage} alt="" />
				</div>
			</IntroductionContainer>

			<CoffeeSection>
				<h2>Nossos cafés</h2>
				<CoffeeGrid>
					{
						coffeeList.map((coffee) => (
							<Product
								coffeName={coffee.coffeName}
								coffeDescription={coffee.coffeDescription}
								coffeType={coffee.coffeType}
								imgUrl={coffee.imgUrl}
								key={coffee.id}
							/>
						))
					}
				</CoffeeGrid>
			</CoffeeSection>
		</HomeContainer>
	)
}