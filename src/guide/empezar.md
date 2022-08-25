## Instalación

```bash
# clone project
<username> = Usuario que tenga acceso al repositorio 

git clone https://<username>@bitbucket.org/VisaNet_TI/framework-karate.git
# access folder
cd karate-api-framework

mvn install
```

## Ejecución GUI

Ejecución de pruebas a travez del IDE.

Podemos ejecuctar los diferentes escenario por separado o inicializar todo el feature para su ejecución.

**.Feature** Ejecución individual

![Ejecución](/images/empezar/1.png)

**Test Unit** Ejecución por cada feature

![Ejecución](/images/empezar/2.png)

**Test Runner** Ejecución todos los features

![Ejecución](/images/empezar/3.png)


## Ejecución CLI

La ejecución CLI es similar a la ejecución a la ejecución del IDE

```bash
cd web-automation-framework

# To run scenarios with @debug1 and @debug2:
# Old version:
mvn test "-Dkarate.options=--tags @debug1 --tags @debug2"

# Actual version:
mvn test "-Dkarate.options=--tags '@debug1 and @debug2'"

# To run scenarios with @debug1 or @debug2:
#Old version:
mvn test "-Dkarate.options=--tags @debug1, @debug2"

#Actual version:
mvn test "-Dkarate.options=--tags '@debug1 or @debug2'"
```

## Estructura de Proyecto

Estructura de carpeta del framework trabajado.

``` 
┌─ src
|  └─ main
|     └─ java
|        ├─ collection
|        |  ├─ api
|        |  ├─ helpers
|        |  |  └─ Hook.java
|        |  ├─ params
|        |  ├─ runner
|        |  |  └─ TestRunner.java
|        |  ├─ tests
|        |  └─ utility
|        |     ├─ CucumberReport.java
|        |     ├─ ExcelReader.java
|        |     ├─ FileHelper.java
|        |     └─ JsonReader.java
|        ├─ resources
|        |  ├─ features
|        |  ├─ fixtures
|        |  |  ├─ data.json
|        |  |  └─ data.xlsx
|        |  └─ request
|        ├─ karate.config.js
|        ├─ log4j2.properties
|        └─ logback-test.xml
└─ target
   ├─ cucumber-html-reports
   ├─ karate-reports
   ├─ generated-sources
   └─ karate.log
```

#### Global

| Carpeta | Descripción |
| ----------- | ----------- |
| src/main/java/collection | Carpeta donde se almacena utilitarios, parametros, lectura de excel y json |
| src/main/java/resources | Carpeta donde se almacena features, data, body raw |
| target | Carpeta donde se genera los reportes html |

#### Java/Collection

| Carpeta | Descripción |
| ----------- | ----------- |
api | Especializado para configurar metodos variables como data, url, save
helpers | Especializado para configurar la lectura de json y excel
params | Creado para almacenar los locadores o selectores del excel o json
runner | Especializado la ejecución de los casos en paralelo
tests | Especializado para la ejecución unitario de los casos
utily | Almacena diferentes herramientas necesarios que el framework necesita como lectura de excel, creación de reportes, etc.

#### Java/Resource
| Carpeta | Descripción |
| ----------- | ----------- |
feature | Especializado para la creación de `.feture` (escenarios en Gherkin)
fixtures | Especializado para almacer los archivos excel y json
request | Especializado para generar request manuales

#### Target
| Carpeta | Descripción |
| ----------- | ----------- |
cucumber-html-reports | Genera reporte en cucumber
karate-reports | Genera reporte en karate
generated-sources | Genera diferentes anotaciones
karate.log | Log de la ejecución