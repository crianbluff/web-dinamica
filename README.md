# Repositorio de mi primier sitio web dinámico

### Ver Proyecto en Producción
* [Desde Firebase Hosting](https://web-dinamica-d78f3.firebaseapp.com)
* [Desde GitHub Pages](https://crianbluff.github.io/web-dinamica)

### Compilar Proyecto
* npm run build

### Desplegar Proyecto En Firebase
* firebase login
* firebase init
	* Se selecciona solo Hosting, ya que los otros servicios los gestiona webpack
	* Selecciona el proyecto como lo llamo en firevase
	* Se escribe dist que es la carpeta que creo el proyecto compilado
	* Cuando pregunta sobre el index se le indica que no
* firebase deploy

### Desplegar Proyecto En Github Pages
* Estando en la ruta dist, reinicializamos un nuevo repositorio para gh-pages
* Luego agregamos todo con `git add .`
* Hacemos un commit con `git commit -m "mensaje"`
* Creamos la rama gh-pages con `git branch gh-pages`
* Nos cambiamos a esa rama con `git checkout gh-pages`
* Agregamos el origen remoto con `git remote add origin link-del-repositorio`
* Empujamos la rama al origin gh-pages con `git push origin gh-pages`