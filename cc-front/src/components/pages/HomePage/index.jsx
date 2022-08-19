import Card from "../../Card";
import { useSelector } from "react-redux";
import "./styles.scss";

const HomePage = () => {

// import depuis le state de la liste en cours
const list=useSelector(state => state.card.list)


	return (
		<main>
			<div className="homePage">
				<div className="homePage__ressources">
					<h2>Bring your colelctors to digital word and digital economy</h2>
				</div>
				<div className="homePage__highlightedCollections">
					<h2>hightlighted collections</h2>
					<div className="homePage__highlightedCollections__list">
						{/* display de la liste sous forme de carte */}
						{list.map((text) => {
							return (
								<Card key={text} text={text}/>
							)
						})}
					</div>
				</div>
				<div className="homePage__creationProcess">
					<h2>creation process</h2> 
					</div>
				<div className="homePage__latestCollections">
					<h2>latest Collections</h2> 
					<div className="homePage__latestCollections__list">
						{list.map((text) => {
							return (
								<Card key={text} text={text}/>
							)
						})}
					</div>
				</div>
			</div>
		</main>
	);
};

export default HomePage;