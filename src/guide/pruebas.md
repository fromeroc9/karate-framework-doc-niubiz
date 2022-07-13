# Karate

Karate es la única herramienta de código abierto que combina la automatización de pruebas de API, simulacros, pruebas de rendimiento e incluso automatización de la interfaz de usuario en un marco único y unificado. La sintaxis BDD popularizada por Cucumber es neutral en cuanto al lenguaje y fácil incluso para los no programadores. Las aserciones y los informes HTML están integrados, y puede ejecutar pruebas en paralelo para obtener velocidad.

![Karate](/images/pruebas/1.jpg)

## JSON PlaceHolder

Antes de escribir codigo, es bueno conocer lo que se va automatizar, para este ejemplo se va utilizar la siguiente API [JsonPlaceHolder](https://jsonplaceholder.typicode.com/)

![Sitio API](/images/pruebas/sitiopruebaapi.png)

## Casos Básicos

Ubicación: `src/test/java/resources/features`

```ts
//Users.feature
Feature: JSONPlaceholder Demo

  Background: Before Test
    * url baseUrl
    * header Accept = 'application/json'
    * header Content-Type = 'application/json'

  #Obtiene la lista de todos los usuarios
  @getUsersAll
  Scenario: Lista de Usuario
    Given path '/users'
    When method GET
    Then status 200

  #Realiza la busqueda del usuario
  @getUsersIDParam
  Scenario: Obtener Usuario Param
    * def userID = 1;

    Given path '/users/'
    And params id = userID
    When method GET
    Then status 200
```

## Request Estático

Ubicación: `src/test/java/resources/features`

```ts
//Users.feature
Feature: JSONPlaceholder Demo

  Background: Before Test
    * url baseUrl
    * header Accept = 'application/json'
    * header Content-Type = 'application/json'

  @postUserStatic
  Scenario: Registrar de Usuario Static
    Given path '/users'
    And request
    """
    {
      "name": "Joe DOe",
      "username": "Joe",
      "email": "joe.doe@example.com",
      "address": {
        "street": "Cuzco",
        "suite": "Apt. 123",
        "city": "Lima",
        "zipcode": "15069"
      },
      "phone": "123456789",
      "website": "google.com"
    }
    """
    When method POST
    Then status 201

  @postUserStaticJSON
  Scenario: Registrar de Usuario Static JSON
    * def data = read('classpath:resources/request/Users.json')

    Given path '/users'
    And request data
    When method POST
    Then status 201
```

## Request Dinámico

Ubicación: `src/test/java/resources/features`

```ts
//Users.feature
Feature: JSONPlaceholder Demo

  Background: Before Test
    * url baseUrl
    * header Accept = 'application/json'
    * header Content-Type = 'application/json'

  @postUserDinamicExcel
  Scenario Outline: Registrar de Usuario Dinamic Excel
    * def data = Java.type('collection.api.Users').data("<CP>")

    Given path '/users'
    And request data
    When method POST
    Then status 201

    Examples:
    | CP |
    | 1  |
    | 2  |

  @postUserDinamicJSON
  Scenario Outline: Registrar de Usuario Dinamic JSON
    * def data = Java.type('collection.api.Users').data2("<CP>")

    Given path '/users'
    And request data
    When method POST
    Then status 201

    Examples:
      | CP |
      | 1  |
      | 2  |
```

Para el caso de request dinámico debemos crear algunos archivos

### 1. Data de prueba Excel o JSON

Ubicación: `src/test/java/resources/fixtures`

#### Datos en Excel

| CP   | Name | Username	| Email	| Street | City	| Zipcode |	Phone
| ---- | ---- | ----        | ----  | ----   | ---- | ----    | -----|
|1	|Joe Doe	|Joe	|joe.doe@example.com	|Cuzco 123	|Lima	|15069	|123456789
|2	|Carlos Rodriguez	|Carlos	|carlos.rdg@example.com	|Arequipa 122	|Lima	|13045	|987654321




#### Datos en JSON

```json
[
  {
    "Name": "Joe Doe",
    "Username": "Joe",
    "Email": "joe.doe@example.com",
    "Street": "Cuzco 123",
    "City": "Lima",
    "Zipcode": "15069",
    "Phone": "123456789"
  },
  {
    "Name": "Carlos Rodriguez",
    "Username": "Carlos",
    "Email": "carlos.rdg@example.com",
    "Street": "Arequipa 122",
    "City": "Lima",
    "Zipcode": "13045",
    "Phone": "987654321"
  }
]
```

### 2. Configurar Hooks

Para la lectura del JSON o Excel hay que configurar los parametros

Ubicación: `src/test/java/collection/helpers`

```java
package collection.helpers;

import collection.utility.ExcelReader;
import collection.utility.JsonReader;

import java.util.HashMap;
import java.util.List;

public class Hook {

    private static String FILE1 = "data.xlsx";
    private static String SHEET1 = "Casos Prueba";

    private static String JSON1 = "data.json";

    protected static List<HashMap<String, String>> getData() throws Throwable {
        return ExcelReader.data(FILE1, SHEET1);
    }

    protected static void setData(int row, int cell, String result) throws Throwable {
        ExcelReader.writeCellValue(FILE1, SHEET1, row, cell, result);
    }

    protected static String getDataJSON(int index, String param) throws Throwable {
        return JsonReader.data(JSON1, index, param);
    }

}
```

### 3. Declarar los Params

Los params hacen referencia los encabezados del excel o a los key del json.

Ubicación: `src/test/java/collection/params`

```java
package collection.params;

public class UsersParams {

    public static final String COL_NAME = "Name";
    public static final String COL_USERNAME = "Username";
    public static final String COL_EMAIL = "Email";
    public static final String COL_STREET = "Street";
    public static final String COL_CITY = "City";
    public static final String COL_ZIPCODE = "Zipcode";
    public static final String COL_PHONE = "Phone";
}
```

### 4. Crear los datos dinamicos

Ubicación: `src/test/java/collection/api`

```java
package collection.api;

import collection.helpers.Hook;
import collection.params.UsersParams;
import org.json.simple.JSONObject;

public class Users extends Hook {

    private static UsersParams up;

    //Especial para Excel
    public static JSONObject data(String cp) throws Throwable {
        String NAME     = getData().get(Integer.parseInt(cp) - 1).get(up.COL_NAME);
        String USERNAME = getData().get(Integer.parseInt(cp) - 1).get(up.COL_USERNAME);
        String EMAIL    = getData().get(Integer.parseInt(cp) - 1).get(up.COL_EMAIL);
        String STREET   = getData().get(Integer.parseInt(cp) - 1).get(up.COL_STREET);
        String CITY     = getData().get(Integer.parseInt(cp) - 1).get(up.COL_CITY);
        String ZIPCODE  = getData().get(Integer.parseInt(cp) - 1).get(up.COL_ZIPCODE);
        String PHONE    = getData().get(Integer.parseInt(cp) - 1).get(up.COL_PHONE);

        JSONObject JSAddress = new JSONObject();
        JSAddress.put("street", STREET);
        JSAddress.put("city", CITY);
        JSAddress.put("zipcode", ZIPCODE);

        JSONObject jsonData = new JSONObject();
        jsonData.put("name", NAME);
        jsonData.put("username", USERNAME);
        jsonData.put("email", EMAIL);
        jsonData.put("address", JSAddress);
        jsonData.put("phone", PHONE);

        return jsonData;
    }

    //Especial para JSON
    public static JSONObject data2(String cp) throws Throwable {
        int i = Integer.parseInt(cp) - 1;

        String NAME     = getDataJSON(i, up.COL_NAME);
        String USERNAME = getDataJSON(i, up.COL_USERNAME);
        String EMAIL    = getDataJSON(i, up.COL_EMAIL);
        String STREET   = getDataJSON(i, up.COL_STREET);
        String CITY     = getDataJSON(i, up.COL_CITY);
        String ZIPCODE  = getDataJSON(i, up.COL_ZIPCODE);
        String PHONE    = getDataJSON(i, up.COL_PHONE);

        JSONObject JSAddress = new JSONObject();
        JSAddress.put("street", STREET);
        JSAddress.put("city", CITY);
        JSAddress.put("zipcode", ZIPCODE);

        JSONObject jsonData = new JSONObject();
        jsonData.put("name", NAME);
        jsonData.put("username", USERNAME);
        jsonData.put("email", EMAIL);
        jsonData.put("address", JSAddress);
        jsonData.put("phone", PHONE);

        return jsonData;
    }

}
```

### 5. Configurar los Test

Hay dos formas de configurar los runner de los test uno unitario o todo los test.

Ubicación: `src/test/java/collection/tests`

```java
package collection.tests;

import com.intuit.karate.junit5.Karate;

class UsersRunner {

    @Karate.Test
    Karate UsersRunner() {
        return Karate.run( "classpath:resources/features/Users.feature").relativeTo(getClass());
    }

}
```

Ubicación: `src/test/java/collection/runner`

```java
package collection.tests;

import com.intuit.karate.junit5.Karate;

class UsersRunner {

package collection.runner;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import org.junit.jupiter.api.Test;

import static collection.utility.CucumberReport.generateReport;

public class TestRunner {

    @Test
    public void testParallel() {
        Results results = Runner.path("classpath:resources/features/users.feature"
            ).outputCucumberJson(true).outputHtmlReport(true)
            .parallel(1);
        generateReport(results.getReportDir());
    }
}
```