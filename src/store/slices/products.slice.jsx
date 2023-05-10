import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const mySlice = createSlice({
		name: 'products',
    initialState: [
        {category: 
            {id: 3, name: 'Smartphones', status: 'active'},
            
            description: 
            "Doble cámara y más detalles Sus 2 cámaras traseras de 12 Mpx/12 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo. Además, el dispositivo cuenta con cámara frontal de 7 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Mayor rendimiento Su memoria RAM de 3 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Desbloqueo en un toque Gracias al sensor de huella dactilar, tendrás acceso a tu teléfono de manera segura y podrás desbloquearlo automáticamente con solo un toque. Batería para todo el día Su batería de 2900 mAh se adapta a tu ritmo de vida y te garantiza energía para toda una jornada con una sola carga. El espacio que necesitás Con su memoria interna de 32GB/128GB/256Gb descargá tus aplicaciones favoritas y guardá todas las fotos y videos que quieras.",
            
            id: 1,
            price:["80.000", "80.000"],
            productImgs: ['https://http2.mlstatic.com/D_NQ_NP_702021-MLA43703742665_102020-O.jpg', 'https://i.blogs.es/b77125/iphone7plus-lineup/1366_2000.jpg', 'https://images.fravega.com/f1000/237d3631f35f09f234da9e93318cccb2.jpg'],
            status: "active",
            espacio:['Elegir GBs','128GB'],
            title: "Iphone 7 Plus" },
        {category: 
            {id: 3, name: 'Smartphones', status: 'active'},
            
            description: 
            "Doble cámara y más detalles Sus 2 cámaras traseras de 12 Mpx/12 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo. Además, el dispositivo cuenta con cámara frontal de 7 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Más para ver Con su pantalla IPS de 5.5´´, disfrutá de colores intensos y mayor nitidez en todos tus contenidos. Mayor rendimiento Su memoria RAM de 3 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Desbloqueo veloz con tu huella dactilar Con el sensor de huella dactilar, el acceso es seguro y podrás desbloquearlo automáticamente con un toque. Gran capacidad de almacenamiento Con su memoria interna de 32GB/128GB/256GB siempre tendrás espacio para almacenar archivos y documentos importantes. Además, podrás guardar películas series y videos para reproducirlos cuando quieras sin conexión.",
            
            id: 2,
            price: 
            ["95.000", "95.000"],
            productImgs: 
            ['https://www.apple.com/newsroom/images/product/iphone/standard/iphone8_iphone8plus_product_red_front_back_041018_big.jpg.large.jpg', 'https://http2.mlstatic.com/D_NQ_NP_712176-MLA49534079470_032022-V.jpg',  'https://www.apple.com/newsroom/images/product/iphone/standard/iphone8plus_product_red_back_041018_carousel.jpg.large.jpg'],
            status: 
            "active",
            espacio:
            ['Elegir GBs','256GB'],
            title: "Iphone 8 Plus" },
        {category: 
            {id: 3, name: 'Smartphones', status: 'active'},
            
            description: 
            "Doble cámara y más detalles Sus 2 cámaras traseras de 12 Mpx/12 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo.Además, el dispositivo cuenta con cámara frontal de 7 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Más para ver Con su pantalla OLED de 5.8´´, disfrutá de colores intensos y mayor nitidez en todos tus contenidos. Mayor rendimiento Su memoria RAM de 3 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Reconocimiento facial para mayor seguridad Acercá el dispositivo a tu rostro para desbloquearlo instantáneamente. Su precisa tecnología de reconocimiento facial te garantiza un acceso al equipo rápido y seguro. Batería para todo el día Su batería de 2716 mAh se adapta a tu ritmo de vida y te garantiza energía para toda una jornada con una sola carga.Capacidad de almacenamiento ilimitada Olvidate de borrar. Con su memoria interna de 64GB/256GB podrás descargar todos los archivos y aplicaciones que necesites, guardar fotos y almacenar tus películas, series y videos favoritos para reproducirlos cuando quieras.",
            
            id: 3,
            price: 
            ["110.000", "110.000"],
            productImgs: 
            ['https://maxtesting.66ecommerce.com/wp-content/uploads/2020/03/iPHoneXsSiliconeNegro.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUa__oJ4X3JCNppqzmQXFylK2zY5Wcnb1rQ&usqp=CAU', 'https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_new_glass_full.jpg.og.jpg?202208152221'],
            status
            : 
            "active",
            espacio:
            ['Elegir GBs','64GB'],
            title: "Iphone X" },
        {category: 
            {id: 3, name: 'Smartphones', status: 'active'},
            
            description: 
            "El iPhone XR viene con una pantalla Liquid Retina de 6.1 pulgadas (2) y está disponible en seis colores increíbles. El avanzado sistema Face ID te permite desbloquearlo de forma segura e iniciar sesión en tus apps con sólo una mirada. El chip A12 Bionic usa el aprendizaje automático en tiempo real para llevar aún más allá todo lo que puedes hacer con tus fotos, juegos, realidad aumentada y más. El sistema de cámara única de 12 MP con modo Retrato, Iluminación de Retrato, bokeh mejorado y Control de Profundidad te permite tomar retratos con calidad de estudio. Además, es resistente al agua.",
            
            id: 4,
            price: 
            ["115.000","115.000","125.000"],
            productImgs: 
            ['https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/20095113/iPhone-XR2.jpg', 'https://www.apple.com/newsroom/images/product/iphone/standard/iphonexr-pre-order_black-white-blue_10172018_big.jpg.large.jpg', 'https://as-images.apple.com/is/MRW62_AV1_BLACK?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1569617832726'],
            status
            : 
            "active",
            espacio:
            ['Elegir GBs','64GB', '128GB'],
            title:"Iphone XR" },
        {category: 
            {id: 3, name: 'Smartphones', status: 'active'},
            
            description: "Doble cámara y más detalles Sus 2 cámaras traseras de 12 Mpx/12 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo. Además, el dispositivo cuenta con cámara frontal de 7 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Más para ver Con su pantalla OLED de 5.8´´, disfrutá de colores intensos y mayor nitidez en todos tus contenidos. Mayor rendimiento Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Reconocimiento facial para mayor seguridad Acercá el dispositivo a tu rostro para desbloquearlo instantáneamente. Su precisa tecnología de reconocimiento facial te garantiza un acceso al equipo rápido y seguro. Batería para todo el día Su batería de 2658 mAh se adapta a tu ritmo de vida y te garantiza energía para toda una jornada con una sola carga. Gran capacidad de almacenamiento Con su memoria interna de 64GB/256GB/512GB siempre tendrás espacio para almacenar archivos y documentos importantes. Además, podrás guardar películas, series y videos para reproducirlos cuando quieras sin conexión.",
            
            id: 5,
            price: 
            ["135.000","135.000"],
            productImgs: 
            ['https://todoapplecaba.com.ar/wp-content/uploads/2021/05/SwappieXsSpacegray-1-1-1.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXZe8O7p-vQnQ9-QL3MMJutR3FAWdMdAG0lBhY9v3NoghzbFMeFZc6-iFUVpXaJhgSqA&usqp=CAU', 'https://assets.swappie.com/cdn-cgi/image/width=266,height=173.8,fit=pad,format=auto,background=%23F6F6F6/swappie-category-clipped-iphone-xs-max.png?v=5'],
            status
            : 
            "active",
            espacio:
            ['Elegir GBs','256GB'],
            title:"Iphone XS" },
        {category: 
{id: 3, name: 'Smartphones', status: 'active'},

description: 
"Doble cámara y más detalles Sus 2 cámaras traseras de 12 Mpx/12 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo. Además, el dispositivo cuenta con cámara frontal de 7 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Más para ver Con su pantalla OLED de 6.5´´, disfrutá de colores intensos y mayor nitidez en todos tus contenidos. Mayor rendimiento Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar. Reconocimiento facial para mayor seguridad Acercá el dispositivo a tu rostro para desbloquearlo instantáneamente. Su precisa tecnología de reconocimiento facial te garantiza un acceso al equipo rápido y seguro. Batería para todo el día Su batería de 3174 mAh se adapta a tu ritmo de vida y te garantiza energía para toda una jornada con una sola carga. Gran capacidad de almacenamiento Con su memoria interna de 64GB/256GB/512GB siempre tendrás espacio para almacenar archivos y documentos importantes. Además, podrás guardar películas, series y videos para reproducirlos cuando quieras sin conexión.",

id: 6,
price: 
["145.000","145.000"],
productImgs: 
['https://todoapplecaba.com.ar/wp-content/uploads/2021/05/refurb-iphone-xs-max-spacegray.jpg', 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-xs-max/iphone-xs-max-silver.jpg', 'https://www.hd-tecnologia.com/imagenes/articulos/2018/10/Las-pre-ordenes-del-iPhone-XR-no-superan-las-del-XS-2.jpg'],
status
: 
"active",
espacio:
['Elegir GBs','256GB'],
            title: "Iphone XS MAX" }

        
    ],
    reducers: {
        
    }
})

export const {  } = mySlice.actions;

export default mySlice.reducer;