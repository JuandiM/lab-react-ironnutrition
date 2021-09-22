import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
	const [ name, setName ] = useState('');
	const [ calories, setCalories ] = useState(0);
	const [ image, setImage ] = useState('');
	const [ servings, setServings ] = useState(0);

	const handleNameInput = (e) => setName(e.target.value);

	const handleCaloriesInput = (e) => setCalories(e.target.value);

	const handleImageInput = (e) => setImage(e.target.value);

	const handleServingsInput = (e) => setServings(e.target.value);

	const submitFormInfo = (e) => {
		e.preventDefault();
		const newFood = { name, image, calories, servings };

		console.log('Submitted', newFood);
		props.addFood(newFood);

		// Reset the state
		setName('');
		setCalories('');
		setImage('');
		setServings(0);
	};

	return (
        <form className="AddFoodForm" onSubmit={submitFormInfo}>
			<Divider>Add Food Entry</Divider>

            <label className="boldText">Name</label>
            <Input value={name} type="text" onChange={handleNameInput} />

            <label className="boldText">Image</label>
            <Input value={image} type="text" onChange={handleImageInput} />

            <label className="boldText">Calories</label>
            <Input value={calories} type="number" onChange={handleCaloriesInput} />

			<label className="boldText">Servings</label>
            <Input value={calories} type="number" onChange={handleServingsInput} />

            <button type="submit">Submit</button>
        </form>
    );
}

export default AddFoodForm;