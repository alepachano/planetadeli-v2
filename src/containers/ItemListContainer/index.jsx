import ItemCountComponent from "../../components/ItemCountComponent";

function ItemListContainer( {greeting} ) {
    return (
        <div>
            <h2>Greeting: {greeting}</h2>
            < ItemCountComponent />
        </div>
    )
}

export default ItemListContainer;
