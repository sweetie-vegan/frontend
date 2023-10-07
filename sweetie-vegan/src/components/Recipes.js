import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Recipes.css";
import Search from "./Search";
import { Link } from "react-router-dom";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const check = localStorage.getItem("recipes");

    if (check) {
      setRecipes(JSON.parse(check));
    } else {
      // const api = await fetch(
      //   `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=20&tags=vegan,dessert`
      // );
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=25&diet=vegan&type=dessert`
      );
      const data = await api.json();

      localStorage.setItem("recipes", JSON.stringify(data.results));
      console.log(data);
      // setRecipes(data.results);
    }
  };

  return (
    <div>
      <Search />
      <Grid>
        {recipes.map((item) => {
          return (
            <div className="full-menu-grid" key={item.id}>
              <Card>
                <Link to={"/recipe/" + item.id}>
                  <img src={item.image} alt={item.title} />
                </Link>

                {/* <h4>{item.title}</h4> */}
              </Card>
              <h4>{item.title}</h4>
            </div>
          );
        })}
      </Grid>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin: 4rem 4rem;
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

  a {
    text-decoration: none;
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

export default Recipes;
