import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import '../components/Recipes.css'

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    // const check = localStorage.getItem("recipes");

    // if (check) {
    //   setRecipes(JSON.parse(check));
    // } else {
    // const api = await fetch(
    //   `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=20&tags=vegan,dessert`
    // );
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&query=${name}&diet=vegan&type=dessert`
    );
    const data = await api.json();
    setSearchedRecipes(data.results);

    //   localStorage.setItem("recipes", JSON.stringify(data.results));
    //   console.log(data);
    // setRecipes(data.results);
    // }
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <div className="searched-items-grid" key={item.id}>
            <Card>
              <img src={item.image} alt="" />
            </Card>
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </Grid>
  );
}



const Grid = styled.div`
margin-top: 20rem;
margin-left: 4rem;
margin-right: 4rem;
// margin-bottom: -10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
//   margin: 4rem 4rem;
`;

const Card = styled.div`
  min-height: 16rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    // position: absolute;
    left: 0;
    object-fit: cover;
    width: auto;
    height: auto;
    // margin-top: 10rem;
  }

  h4 {
    text-align: center;
    padding: 1rem;
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%);
    color: white;
    width: 100%;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Searched;