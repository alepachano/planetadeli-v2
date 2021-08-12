import { useEffect } from "react";
import { useContext, useState } from "react"
import { CategoriesComponent } from "../../components/CategoriesComponent";
import { CartContext } from "../../context/CartContext"
import { getFirestore } from "../../firebase";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Spinner } from "react-bootstrap";


export function HomeContainer({ greeting }) {
  const [categories, setCategories] = useState();

  useEffect(() => {
    //Para traer la colección de categorias
    async function getDataFromFirestore() {
      const BD = getFirestore();
      const collection = BD.collection('categorias').orderBy('name', 'asc');
      const response = await collection.get();
      setCategories(response.docs.map(element => ({ ...element.data() })));
    }
    getDataFromFirestore();

  }, [])

  return (
    <>
      <Container>
        <Row>
          <h4 className="text-center">{greeting}</h4>
          {categories ?
            categories.map((element) => {
              return (
                <CategoriesComponent name={element.name} img={element.img} />
              )
            })
            :
            <Spinner animation="border" variant="info" />}
        </Row>
      </Container>
    </>
  )
};
