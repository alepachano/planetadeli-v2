import { useEffect, useState } from "react";
import { CategoriesComponent } from "../../components/CategoriesComponent";
import { getFirestore } from "../../firebase";
import { Row, Container, Spinner } from 'react-bootstrap';

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
          <h4 className="text-center mt-3">{greeting}</h4>
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
