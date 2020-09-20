# Puede que no necesites Redux

Redux es una poderosa herramienta que nos ayuda a simplificar la gestión del estado de nuestra aplicación y el flujo de datos hacia los componentes, no obstante, es importante destacar que Redux es mucho más que eso y **debemos ser bien precavidos antes de implementar esta arquitectura**, ya que esto conlleva a toda una forma de trabajo de la cual va a depender nuestra aplicación.

A continuación detallamos **8 buenas razones descritas por Dan Abramov creador de Redux**, que nos ayudaran a identificar si en realidad lo necesitamos, ya que existen otras alternativas o formas de trabajo con las cuales podríamos pensar en la forma de trabajo de Redux sin implementarlo.

1. Persistir el estado a local-storage y luego iniciar desde el. sin mucho esfuerzo.
2. Pre llenar el estado en el servidor, enviarlo al cliente en HTML, y arrancar desde ahí, sin mucho esfuerzo.
3. Serializar acciones de usuario y adjuntarlas, junto a un snapshot del estado, para automatizar reporte de bugs y así los desarrolladores puedan reproducir los errores.
4. Pasar acciones(objetos) por la red para implementar entornos colaborativos sin cambios dramáticos en el código.
5. Mantiene una historia o implementa cambios optimistas sin cambios dramáticos en el código.
6. Viajar a través de la historia del estado en desarrollo, y re-evaluar el estado actual a partir de una acción cuando el código cambie, a la TDD.
7. Provee inspección completa y control en las herramientas de desarrollo de modo que los desarrolladores puedan construir herramientas personalizadas para sus aplicaciones.
8. Provee UIs alternativas mientras se re-usa la mayoría de lógica de negocio.

[Puede que no necesites Redux por Dan Abramov (artículo oficial en inglés)](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

[Puede que no necesites Redux (traducción al español)](https://medium.com/monoku/puede-que-no-necesites-redux-28d1bbfec1de)

---

Sigamos con [NgRx](../4-ngrx/4-1-sobre-ngrx.md)
