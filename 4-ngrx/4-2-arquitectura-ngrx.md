# Arquitectura NgRx

En NgRx tenemos dos nuevos dos actores dentro de su arquitectura que aumentan la potencia de Redux en Angular, estos son los Effects y los Selectors.

<p float="left">
    <img src="ngrx-architect.png" alt="Workshop Redux en Angular con NgRx" width="600" />
</p>

- **Effects**: **Los Effects, son un efecto colateral (secundario) impulsado por RxJS que nos permite reaccionar a una determinada acción y realizar algo** antes de interartuar con el Store. Esto es muy util, por ejemplo, en nuestras peticiones http en donde queremos reaccionar a los casos exito y error para actualizar nuestro Store en función de la respuesta.

- **Selectors**: **Los selectors son funciones simples usadas para obtener "rodajas" del estado**, estas funciones aceptan el estado como argumento y retornan la data derivada de ese estado.

---

Sigamos con [Store Devtools](../4-ngrx/4-3-store-dev-tools.md)
