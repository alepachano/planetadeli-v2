# Bienvenido a Planeta Deli
Es una tienda virtual de productos de calidad para el área de la cocina.
Podrás encontrar batidoras, hornos y utensilios de cocina.

## Proyecto Final para CoderHouse con React.
Creado con [Create React App](https://github.com/facebook/create-react-app).
Puedes visualizar el proyecto en https://planeta-deli.web.app/.
Video demostrativo: https://docs.google.com/presentation/d/17I1_-pnQkyPg9M8pZU1TLstmLhHP2xBf/edit?usp=sharing&ouid=118226764130329019836&rtpof=true&sd=true

## Tecnologías utilizadas:
- React js
- React-router-dom
- Hooks
- Context
- Firebase Firestore
- Firebase Hosting: https://planeta-deli.web.app/
- CategorÍas dinámicas con Firestore - Firebase.
- Creación de número de seguimiento con Firebase.
- API WhatsApp
- Librerias y estilos: React-Bootstrap, Material-UI, Google Fonts.

## SECCIONES:

`Contexto: CartContext`
La tienda virtual hace uso del Local Storage, por lo que mantiene almacenado el contenido de CART, permitiendole al usuario abandonar el navegador o actualizar la pantalla, manteniendo la información del carrito de compras. 

### HOME
El HOME está conformado por una vista de las tres categorías que agrupan los productos que se ofrecen en la tienda virtual.
Estas categorias son recibidas de manera dinámica por medio de Firestore - colección Categorías, de Firebase.\
`Componente contenedor: HomeContainer`\
`Componente de presentación: CategoriesComponent`

### CATEGORIAS
Al hacer click en alguna de las categorías en el HOME, podrás observar los productos (filtrados) según la categoría seleccionada. Esta informacion es recibida por medio de Firestore, utilizando herramientas de filtrado según categoría (categoryId).\
`Componente contenedor: ItemListContainer`\
`Componente de presentación: ItemComponent.`

### DETALLE DE PRODUCTO
Al visualizar el listado de productos según la categoría, podrás seleccionar "ver producto" para obtener la informacion detallada del producto seleccionado. En esta sección podras:
- Volver al listado de categorías o, a alguna categoria específica, seleccionando la misma en el Navbar o Breadcrumb.
- Seleccionar la cantidad deseada del producto, y seleccionar "Agregar al Carrito", automaticamente aparecerá el numero de items al lado del icono del carrito de compras ubicado en la Navbar.
- Una vez agregado al carrito, contarás con un nuevo botón para ir directamente al carrito de compras.
Ten en cuenta que si agregas el mismo producto en más de una oportunidad, el producto se acumulará y no se duplicará.

`Componente contenedor: ItemDetailContainer`\
`Componentes de presentación: ItemDetailComponent, ItemCountComponent.`

### STOCK
Al hacer click en 'Agregar al carrito' en el producto y la cantidad deseada, se disminuye el stock del producto de manera inmediata, si agregaste todo el stock disponible, el stock será cero (0), aparecerá en color rojo y ya no te permitirá agregar más cantidad de ese producto.
Si el stock del producto es mayor a 1 se visualizará en color verde.
En el carrito de compras, si eliminas un producto específico o vacias todo el carrito, el stock se actualizará y lo podrás visualizar nuevamente en su cantidad original.\
`Componente contenedor: ItemDetailContainer`\
`Componentes de presentación: ItemDetailComponent, ItemCountComponent.`

### CARRITO DE COMPRAS
Si no cuentas con ningun carrito agregado al carrito, observarás un mensaje indicandote que el carrito de compras se encuentra vacío.
De lo contrario, podrás observar una tabla con la información de los productos agregados al carrito: imagen, nombre, sku, cantidad, precio unitario y precio total.
Tambien contarás con botones para eliminar un producto en especifico o vaciar el carrito completo.
Finalmente, en el lado derecho podrás observar una pequeña tabla con un "Resumen de tu pedido" donde se muestra el monto total actualizado de la compra en pesos chilenos ($ - CLP), donde podrás elegir si 'Completar la Compra', o seleccionar 'Agregar más productos', redireccionandote ésta últoma al HOME (categorías).

### COMPLETAR LA COMPRA
Una vez seleccionada esta opción, estás muy cerca a finalizar el proceso de compra.
En ésta sección deberás llenar los campos solicitados para posteriormente contactarte: nombre completo, teléfono, dirección, e-mail. 
En esta sección tambien contarás con un botón de 'ir atrás' por si deseas modificar tu compra (añadir o eliminar productos, se hace refresh para que muestre la pantalla inicial de carrito de compra).
Una vez llenos estos campos, deberás seleccionar "Enviar pedido" para proceder a generar el número de orden con el que podrás realizar seguimiento a la compra. Este numero de orden es generado por Firebase. 
Finalmente ¡Has completado tu compra! y contarás con un boton de "IR AL HOME".\

`Componentes involucrados: CartComponent, CartWidgetComponent.`

### ERROR 404: NOT FOUND
En caso de escribir en la URL una sección que no exista, te mostrará un mensaje de ERROR 404 personalizado.\
`Componente de presentación: NotFoundComponent`


##


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
