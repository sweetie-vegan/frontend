import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

function MenuDescription() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions')

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`)
        const detailData = await data.json()
        setDetails(detailData)

    }

    useEffect(() => {
        fetchDetails();
    }, [params.name]);
  return (
    <DetailWrapper>
        <div>
            <h2 style={{textAlign:'center'}}>{details.title}</h2>
            <img src={details.image} alt='' style={{objectFit:'cover', width:'auto', height:'auto'}} />
        </div>
        <Info>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingedrients</Button>
            {activeTab === 'instructions' && (
                <div>
                <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
            </div>
            )}
            {activeTab === 'ingredients' && (
                <ul>
                {details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
            )}
            
        
        </Info>

    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
margin-top:15rem;
margin-left: 4rem;
margin-right: 4rem;
margin-bottom:5rem;
display:flex;
// align-items: center;
// flex-wrap: wrap;
// flex-direction: column;
.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
}

h2 {
    margin-bottom: 2rem;
}
li {
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ul {
    margin-top: 2rem;
}

`
 const Button = styled.button`
 padding: 1rem 2rem;
 color: black;
 background:white;
 border: 2px solid black;
 margin-right: 2rem;
 font-weight: 600;

 `
const Info = styled.div`
margin-left:10rem;
`

export default MenuDescription