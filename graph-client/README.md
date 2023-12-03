# Taller 2 - Segundo Parcial

### ESTUDIANTE:
- Meza Jimenez Winter

### ENTIDAD: Producto
### ENTIDAD UNO A MUCHOS: Transacciones


## Documentacion del taller

### Definir la estructura de la entidad

- Dentro de la carpeta src debemos crear una carpeta con la entidad que va ha ser utilizada:

![Alt text](images/image.png)

- Definimos la estructura de la entidad:

![Alt text](images/image-1.png)

- Con la estructura de la entidad se define la entrada de los datos:

![Alt text](images/image-4.png)

- Se deben establecer los querys y mutations que se podran realizar con esa entidad

  - En el archivo resolver se ubican la informacion de la base de datos

  ![Alt text](images/image-2.png)

  - En el archivo service se ubican los querys y mutations que van ha ser realizado con la entidad

  ![Alt text](images/image-3.png)

- Una vez se inicie el proyecto sera ejecutado en la ruta: 

```sh
http://localhost:3000/graphql
```
- Se ejecutara la siguiente interfaz:

![Alt text](images/image-5.png)

- Dentro de Graphql podremos hacer los querys y consultas que se han definido con anterioridad:

  - Consulta general:

  ![Alt text](images/image-6.png)

  ![Alt text](images/image-7.png)

  - Consulta por ID:

  ![Alt text](images/image-8.png)

  ![Alt text](images/image-9.png)

  ![Alt text](images/image-10.png)

  - Creacion de Cliente:

  ![Alt text](images/image-11.png)

  ![Alt text](images/image-12.png)

  ![Alt text](images/image-13.png)

  - Actualizacion de Cliente:

  ![Alt text](images/image-14.png)

  ![Alt text](images/image-15.png)

  ![Alt text](images/image-16.png)

  - Eliminacion de Cliente:

  ![Alt text](images/image-17.png)

  ![Alt text](images/image-18.png)

  ![Alt text](images/image-19.png)

- Creacion de una nueva entidad

  - Definimos la estructura con su relacion (uno a muchos):

  ![Alt text](images/image-20.png)

  - Creamos registros de las transacciones:

  ![Alt text](images/image-21.png)

  ![Alt text](images/image-22.png)

  ![Alt text](images/image-23.png)

  - Consultamos los datos por ID del producto con las transacciones realizadas:

  ![Alt text](images/image-24.png)

  ![Alt text](images/image-25.png)

  ![Alt text](images/image-26.png)