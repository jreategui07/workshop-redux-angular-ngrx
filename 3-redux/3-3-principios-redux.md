# Principios de Redux

Al hablar de Redux, hay tres principios claves que debemos conocer:

1. **La única fuente de la verdad**: La arquitectura Flux propone que podemos tener varios Stores para almacenar el estado, o secciones del estado, no obstante en Redux solo tenemos un único Store en el cual almacenamos el estado global de la aplicación.

2. **El estado es de solo lectura**: No podemos acceder el estado directamente, solo podemos leer el estado para representarlo en la vista y en caso de querer modificarlo lo hacemos a través de acciones.

3. **Cambios con funciones puras**: Debido a que no podemos acceder directamente al estado de la aplicación, y nuestro Store es nuestra única fuente de datos, los cambios en el estado se realiza a través de los llamados reducers, los cuales no son más que funciones puras las cuales dependiendo de la acción se realizará una operación u otra en el estado.

Es importante aclarar, que **con Redux el estado de la aplicación es inmutable**, por tal motivo no es posible alterar el estado de nuestra aplicación, sino crear una copia con las modificaciones a partir del estado anterior, esto nos permite tener un mejor rendimiento de la aplicación y nos facilita el proceso de debugging.

---

Sigamos con [¿Por qué Redux?](../3-redux/3-4-por-que-redux.md)
