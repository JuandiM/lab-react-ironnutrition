import './App.css';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import {useState} from 'react';
import FoodBox from './components/FoodBox.js';
import AddFoodForm from './components/AddFoodForm.js';
import SearchFood from './components/SearchFood.js';
import NoFood from './components/NoFood.js';

function App() {
    const [ foodData, setFoodData ] = useState(foods);
    const [ searchInput, setSearchInput ] = useState('');
    const foodDataCopy = [ ...foodData ];
    const [ showFoodData, setShowFoodData ] = useState(false);

    //ADD FOOD
    const addNewFood = (newFood) => {
    const updatedFoodData = [ ...foodData, newFood ];

      setFoodData(updatedFoodData);
  };
  //SEARCH FOOD
    const searchFoodFilter = (e) => {
      setSearchInput(e.target.value);
      if (e.target.value === '') {
        setFoodData(foods);
      }
      const textInputValue = e.target.value.toLowerCase();
      const filteredList = foods.filter((food) => {
      const foodIncludes = food.name.toLowerCase();
        return foodIncludes.includes(textInputValue);
      });
      setFoodData(filteredList);
    };

  //DELETE FOOD (NOT WORKING)
  const deleteFood = (name) => {
    const foodToDelete = foodDataCopy.filter((food) => {
      return food.name.toLowerCase() !== name.toLowerCase;
    })
    setFoodData(foodToDelete)
  };
  //TOGGLE FUNCTION
  const toggleShowFood= () => {
    setShowFoodData(!showFoodData);
  };

    return (
      <div className="App">
        <AddFoodForm food={foodData} addFood={addNewFood} />
          <Button type="default" className="buttonHideShow" onClick={toggleShowFood}>
            {showFoodData ? 'Hide form' : 'Add new food'}
          </Button>

            {showFoodData ? ( <AddFoodForm food={foodData} 
            addFood={addNewFood} /> ) : null}

        <SearchFood searchInput={searchInput} searchFoodFilter={searchFoodFilter} />

          <Divider>
            <h1>Food list</h1>
          </Divider>

            {foodDataCopy.length !== 0 ? ( <Row> {foodData.map((food) => {
              return <FoodBox food={food} key={food.name} deleteFood={deleteFood} />
            })}
          </Row>
            ) : ( <NoFood />)} 
      </div>
    );
  }

export default App;
