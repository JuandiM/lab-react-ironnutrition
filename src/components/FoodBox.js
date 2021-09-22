import { Card, Col, Button, Image } from 'antd';

function FoodBox({ food, deleteFood }) {
	return (
		<Col>
			<Card title={food.name}>
				<Image src={food.image} width="150px" height="100px" />
				<p>Calories: {food.calories}</p>
				<p>Servings: <span className="boldText">{food.servings}</span>
				</p>
				<p className="boldText">
					Total calories: {food.calories} * {food.servings}
				</p>
				<Button onClick={() => deleteFood(food.name)} className="deleteButton"> Delete </Button>
			</Card>
		</Col>
	);
}

export default FoodBox;