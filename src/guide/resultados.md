## Resultados CLI

Al ejecutar en cli podemos elegir que feature a ejecutar para esta prueba estamos dejando ejecutar los dos feature.

```shell
14:59:29.889 [main] DEBUG com.intuit.karate.Suite - [config] classpath:karate-config.js
14:59:31.367 [main] DEBUG com.intuit.karate - request:
1 > GET https://jsonplaceholder.typicode.com/users
1 > Accept: application/json
1 > Content-Type: application/json
1 > Host: jsonplaceholder.typicode.com
1 > Connection: Keep-Alive
1 > User-Agent: Apache-HttpClient/4.5.13 (Java/1.8.0_321)
1 > Accept-Encoding: gzip,deflate


14:59:31.662 [main] DEBUG com.intuit.karate - response time in milliseconds: 267
1 < 200
1 < Date: Tue, 12 Jul 2022 19:59:31 GMT
1 < Content-Type: application/json; charset=utf-8
1 < Transfer-Encoding: chunked
1 < Connection: keep-alive
1 < X-Powered-By: Express
1 < X-Ratelimit-Limit: 1000
1 < X-Ratelimit-Remaining: 999
1 < X-Ratelimit-Reset: 1656073257
1 < Vary: Origin, Accept-Encoding
1 < Access-Control-Allow-Credentials: true
1 < Cache-Control: max-age=43200
1 < Pragma: no-cache
1 < Expires: -1
1 < X-Content-Type-Options: nosniff
1 < Etag: W/"160d-1eMSsxeJRfnVLRBmYJSbCiJZ1qQ"
1 < Via: 1.1 vegur
1 < CF-Cache-Status: HIT
1 < Age: 21645
1 < Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
1 < Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=BZik5ktEOiL%2BhA0hLCiNXii6Mxtgkdp0iFVfkOfUMCSW5%2FJpNnBFTluM0gVDfshoUQkgg1OxviSmzFll0CZyE2LVH5MaO6unaG%2FMWb5BIXxh9VBGuSh5syX31TBY55ml46VdKv0h6A%2Fpwz3j0O39"}],"group":"cf-nel","max_age":604800}
1 < NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
1 < Server: cloudflare
1 < CF-RAY: 729c5c1eaf399537-LIM
1 < alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]


14:59:31.693 [main] WARN  com.intuit.karate - did not evaluate to map id = userID: [type: NUMBER, value: 1]
14:59:31.695 [main] DEBUG com.intuit.karate - request:
1 > GET https://jsonplaceholder.typicode.com/users
1 > Accept: application/json
1 > Content-Type: application/json
1 > Host: jsonplaceholder.typicode.com
1 > Connection: Keep-Alive
1 > User-Agent: Apache-HttpClient/4.5.13 (Java/1.8.0_321)
1 > Accept-Encoding: gzip,deflate


14:59:31.756 [main] DEBUG com.intuit.karate - response time in milliseconds: 58
1 < 200
1 < Date: Tue, 12 Jul 2022 19:59:31 GMT
1 < Content-Type: application/json; charset=utf-8
1 < Transfer-Encoding: chunked
1 < Connection: keep-alive
1 < X-Powered-By: Express
1 < X-Ratelimit-Limit: 1000
1 < X-Ratelimit-Remaining: 999
1 < X-Ratelimit-Reset: 1656073257
1 < Vary: Origin, Accept-Encoding
1 < Access-Control-Allow-Credentials: true
1 < Cache-Control: max-age=43200
1 < Pragma: no-cache
1 < Expires: -1
1 < X-Content-Type-Options: nosniff
1 < Etag: W/"160d-1eMSsxeJRfnVLRBmYJSbCiJZ1qQ"
1 < Via: 1.1 vegur
1 < CF-Cache-Status: HIT
1 < Age: 21645
1 < Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
1 < Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=%2FhLP2ubh9uN2DYD5xylXEvcztlFeGopSPxjJBFIsZNaj7VsPVYhMlUDOQNv6Crk5BxRxQD%2BK9uIDceVNxKmwTKzXZrPOmobhny6a8v0xoshIZcrlkmTg36eGyF2A4Mr1InczfiMSDd4suEiVeVji"}],"group":"cf-nel","max_age":604800}
1 < NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
1 < Server: cloudflare
1 < CF-RAY: 729c5c1f7e60a28e-LIM
1 < alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]


14:59:31.784 [main] DEBUG com.intuit.karate - request:
1 > GET https://jsonplaceholder.typicode.com/users/1
1 > Accept: application/json
1 > Content-Type: application/json
1 > Host: jsonplaceholder.typicode.com
1 > Connection: Keep-Alive
1 > User-Agent: Apache-HttpClient/4.5.13 (Java/1.8.0_321)
1 > Accept-Encoding: gzip,deflate


14:59:31.843 [main] DEBUG com.intuit.karate - response time in milliseconds: 58
1 < 200
1 < Date: Tue, 12 Jul 2022 19:59:31 GMT
1 < Content-Type: application/json; charset=utf-8
1 < Transfer-Encoding: chunked
1 < Connection: keep-alive
1 < X-Powered-By: Express
1 < X-Ratelimit-Limit: 1000
1 < X-Ratelimit-Remaining: 999
1 < X-Ratelimit-Reset: 1657254520
1 < Vary: Origin, Accept-Encoding
1 < Access-Control-Allow-Credentials: true
1 < Cache-Control: max-age=43200
1 < Pragma: no-cache
1 < Expires: -1
1 < X-Content-Type-Options: nosniff
1 < Etag: W/"1fd-+2Y3G3w049iSZtw5t1mzSnunngE"
1 < Via: 1.1 vegur
1 < CF-Cache-Status: HIT
1 < Age: 3084
1 < Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
1 < Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=lJEe6cphr7pkBud4vKg4srqUY2h4YN%2FJbkdFhXntOSOxLPmodk2cyM7Cfqukvvgmu4rZlB592DwmiC1MuLu1LWECVuoF9tQrAc7wFp31eQNMkYcpvhACVqsMW0mcuDe7KcpEdv2c2cTVJgsUByNs"}],"group":"cf-nel","max_age":604800}
1 < NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
1 < Server: cloudflare
1 < CF-RAY: 729c5c20082c954c-LIM
1 < alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}


14:59:31.922 [main] DEBUG com.intuit.karate - request:
1 > POST https://jsonplaceholder.typicode.com/users
1 > Accept: application/json
1 > Content-Type: application/json; charset=UTF-8
1 > Content-Length: 188
1 > Host: jsonplaceholder.typicode.com
1 > Connection: Keep-Alive
1 > User-Agent: Apache-HttpClient/4.5.13 (Java/1.8.0_321)
1 > Accept-Encoding: gzip,deflate
{"name":"Joe DOe","username":"Joe","email":"joe.doe@example.com","address":{"street":"Cuzco","suite":"Apt. 123","city":"Lima","zipcode":"15069"},"phone":"123456789","website":"google.com"}

14:59:32.164 [main] DEBUG com.intuit.karate - response time in milliseconds: 241
1 < 201
1 < Date: Tue, 12 Jul 2022 19:59:32 GMT
1 < Content-Type: application/json; charset=utf-8
1 < Content-Length: 252
1 < Connection: keep-alive
1 < X-Powered-By: Express
1 < X-Ratelimit-Limit: 1000
1 < X-Ratelimit-Remaining: 999
1 < X-Ratelimit-Reset: 1657656030
1 < Vary: Origin, X-HTTP-Method-Override, Accept-Encoding
1 < Access-Control-Allow-Credentials: true
1 < Cache-Control: no-cache
1 < Pragma: no-cache
1 < Expires: -1
1 < Access-Control-Expose-Headers: Location
1 < Location: http://jsonplaceholder.typicode.com/users/11
1 < X-Content-Type-Options: nosniff
1 < Etag: W/"fc-WV/6Q3D1HodhqaIb+3YEUm22dMc"
1 < Via: 1.1 vegur
1 < CF-Cache-Status: DYNAMIC
1 < Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
1 < Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=f0kiuTcaMCVL1b7XTNSZ5A3DUFJvWcTN5lsbAePyNsGhLPynOW7p%2FJm%2F0vDDz6q8zOwZt6lFTHrMqAe%2Fl%2FAMjYqF90LZqWnjR2l%2B6lqv8e0KsS2ngmHlRM7sgLe70uI8eX7tBx%2B6o%2BlinRPJ2OjH"}],"group":"cf-nel","max_age":604800}
1 < NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
1 < Server: cloudflare
1 < CF-RAY: 729c5c20dc469548-LIM
1 < alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
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
  "website": "google.com",
  "id": 11
}


14:59:32.185 [main] DEBUG com.intuit.karate - request:
1 > POST https://jsonplaceholder.typicode.com/users
1 > Accept: application/json
1 > Content-Type: application/json; charset=UTF-8
1 > Content-Length: 150
1 > Host: jsonplaceholder.typicode.com
1 > Connection: Keep-Alive
1 > User-Agent: Apache-HttpClient/4.5.13 (Java/1.8.0_321)
1 > Accept-Encoding: gzip,deflate
{"name":"Joe Doe","username":"Joe","email":"joe.doe@example.com","address":{"street":"Cuzco 123","city":"Lima","zipcode":"15069"},"phone":"123456789"}

14:59:32.576 [main] DEBUG com.intuit.karate - response time in milliseconds: 390
1 < 201
1 < Date: Tue, 12 Jul 2022 19:59:32 GMT
1 < Content-Type: application/json; charset=utf-8
1 < Content-Length: 204
1 < Connection: keep-alive
1 < X-Powered-By: Express
1 < X-Ratelimit-Limit: 1000
1 < X-Ratelimit-Remaining: 998
1 < X-Ratelimit-Reset: 1657656030
1 < Vary: Origin, X-HTTP-Method-Override, Accept-Encoding
1 < Access-Control-Allow-Credentials: true
1 < Cache-Control: no-cache
1 < Pragma: no-cache
1 < Expires: -1
1 < Access-Control-Expose-Headers: Location
1 < Location: http://jsonplaceholder.typicode.com/users/11
1 < X-Content-Type-Options: nosniff
1 < Etag: W/"cc-wakgQm3ugfHJ9+C0kXvD1Jsjs8Y"
1 < Via: 1.1 vegur
1 < CF-Cache-Status: DYNAMIC
1 < Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
1 < Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=D3vjunNZD4FDJTA%2Fl7Ns%2Fhsrc5LNtU1wBAVUmMzo1Zni0pAn9jVJxAy6i4v3zk2NPJ5iIpJ2m1VoHSKdSBJVf9ZWRz8Yvm%2FXhyK90pYs4dl%2BKJoyU0HKwI2S7kJGJnrYXao682xYgqxN27hJiXd4"}],"group":"cf-nel","max_age":604800}
1 < NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
1 < Server: cloudflare
1 < CF-RAY: 729c5c228ede952e-LIM
1 < alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
{
  "name": "Joe Doe",
  "username": "Joe",
  "email": "joe.doe@example.com",
  "address": {
    "street": "Cuzco 123",
    "city": "Lima",
    "zipcode": "15069"
  },
  "phone": "123456789",
  "id": 11
}


14:59:33.105 [main] DEBUG com.intuit.karate - request:
1 > POST https://jsonplaceholder.typicode.com/users
1 > Accept: application/json
1 > Content-Type: application/json; charset=UTF-8
1 > Content-Length: 150
1 > Host: jsonplaceholder.typicode.com
1 > Connection: Keep-Alive
1 > User-Agent: Apache-HttpClient/4.5.13 (Java/1.8.0_321)
1 > Accept-Encoding: gzip,deflate
{"address":{"zipcode":"15069","city":"Lima","street":"Cuzco 123"},"phone":"123456789","name":"Joe Doe","email":"joe.doe@example.com","username":"Joe"}

14:59:33.343 [main] DEBUG com.intuit.karate - response time in milliseconds: 238
1 < 201
1 < Date: Tue, 12 Jul 2022 19:59:33 GMT
1 < Content-Type: application/json; charset=utf-8
1 < Content-Length: 204
1 < Connection: keep-alive
1 < X-Powered-By: Express
1 < X-Ratelimit-Limit: 1000
1 < X-Ratelimit-Remaining: 997
1 < X-Ratelimit-Reset: 1657656030
1 < Vary: Origin, X-HTTP-Method-Override, Accept-Encoding
1 < Access-Control-Allow-Credentials: true
1 < Cache-Control: no-cache
1 < Pragma: no-cache
1 < Expires: -1
1 < Access-Control-Expose-Headers: Location
1 < Location: http://jsonplaceholder.typicode.com/users/11
1 < X-Content-Type-Options: nosniff
1 < Etag: W/"cc-z8G4eDmz/kYqQnBf78nxtj0J9O4"
1 < Via: 1.1 vegur
1 < CF-Cache-Status: DYNAMIC
1 < Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
1 < Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=oGnpk1hp9G5uVCEunQKvqB7MZvxyPHRvjjR3WCBKxQ8NG7jsbSVl8o%2FkaMm6XV6mDZIJ2fJKhAmeLjYTBTI4C9Kmi4AyAgqWxoGUYwA7n6P4n51OnTa295L8xgTQQmaym520OWSWt34jRZe%2Fyj5m"}],"group":"cf-nel","max_age":604800}
1 < NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
1 < Server: cloudflare
1 < CF-RAY: 729c5c283e7c9522-LIM
1 < alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
{
  "address": {
    "zipcode": "15069",
    "city": "Lima",
    "street": "Cuzco 123"
  },
  "phone": "123456789",
  "name": "Joe Doe",
  "email": "joe.doe@example.com",
  "username": "Joe",
  "id": 11
}


14:59:33.468 [main] DEBUG com.intuit.karate - request:
1 > POST https://jsonplaceholder.typicode.com/users
1 > Accept: application/json
1 > Content-Type: application/json; charset=UTF-8
1 > Content-Length: 168
1 > Host: jsonplaceholder.typicode.com
1 > Connection: Keep-Alive
1 > User-Agent: Apache-HttpClient/4.5.13 (Java/1.8.0_321)
1 > Accept-Encoding: gzip,deflate
{"address":{"zipcode":"13045","city":"Lima","street":"Arequipa 122"},"phone":"987654321","name":"Carlos Rodriguez","email":"carlos.rdg@example.com","username":"Carlos"}

14:59:33.720 [main] DEBUG com.intuit.karate - response time in milliseconds: 252
1 < 201
1 < Date: Tue, 12 Jul 2022 19:59:33 GMT
1 < Content-Type: application/json; charset=utf-8
1 < Content-Length: 222
1 < Connection: keep-alive
1 < X-Powered-By: Express
1 < X-Ratelimit-Limit: 1000
1 < X-Ratelimit-Remaining: 996
1 < X-Ratelimit-Reset: 1657656030
1 < Vary: Origin, X-HTTP-Method-Override, Accept-Encoding
1 < Access-Control-Allow-Credentials: true
1 < Cache-Control: no-cache
1 < Pragma: no-cache
1 < Expires: -1
1 < Access-Control-Expose-Headers: Location
1 < Location: http://jsonplaceholder.typicode.com/users/11
1 < X-Content-Type-Options: nosniff
1 < Etag: W/"de-pnPqX2/aWsc+Hiu5BG8cH9gYoj8"
1 < Via: 1.1 vegur
1 < CF-Cache-Status: DYNAMIC
1 < Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
1 < Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=HXqoaVvcc2ipW4RTyLzNUoZMliTU3%2BkZPyLyTFEsPQz%2BVMPPpOuphoReppktXzi7ccpNakI91X0PiE6kR5xySb2Ue39p422GqNPJNr95c52pysP8UNueJapYDvy%2FcF%2BDVr0jjWbvB5mGzFM8VIJ9"}],"group":"cf-nel","max_age":604800}
1 < NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
1 < Server: cloudflare
1 < CF-RAY: 729c5c2a9d859549-LIM
1 < alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
{
  "address": {
    "zipcode": "13045",
    "city": "Lima",
    "street": "Arequipa 122"
  },
  "phone": "987654321",
  "name": "Carlos Rodriguez",
  "email": "carlos.rdg@example.com",
  "username": "Carlos",
  "id": 11
}


14:59:33.746 [main] DEBUG com.intuit.karate - request:
1 > POST https://jsonplaceholder.typicode.com/users
1 > Accept: application/json
1 > Content-Type: application/json; charset=UTF-8
1 > Content-Length: 150
1 > Host: jsonplaceholder.typicode.com
1 > Connection: Keep-Alive
1 > User-Agent: Apache-HttpClient/4.5.13 (Java/1.8.0_321)
1 > Accept-Encoding: gzip,deflate
{"address":{"zipcode":"15069","city":"Lima","street":"Cuzco 123"},"phone":"123456789","name":"Joe Doe","email":"joe.doe@example.com","username":"Joe"}

14:59:34.002 [main] DEBUG com.intuit.karate - response time in milliseconds: 256
1 < 201
1 < Date: Tue, 12 Jul 2022 19:59:34 GMT
1 < Content-Type: application/json; charset=utf-8
1 < Content-Length: 204
1 < Connection: keep-alive
1 < X-Powered-By: Express
1 < X-Ratelimit-Limit: 1000
1 < X-Ratelimit-Remaining: 995
1 < X-Ratelimit-Reset: 1657656030
1 < Vary: Origin, X-HTTP-Method-Override, Accept-Encoding
1 < Access-Control-Allow-Credentials: true
1 < Cache-Control: no-cache
1 < Pragma: no-cache
1 < Expires: -1
1 < Access-Control-Expose-Headers: Location
1 < Location: http://jsonplaceholder.typicode.com/users/11
1 < X-Content-Type-Options: nosniff
1 < Etag: W/"cc-z8G4eDmz/kYqQnBf78nxtj0J9O4"
1 < Via: 1.1 vegur
1 < CF-Cache-Status: DYNAMIC
1 < Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
1 < Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=CzN0fjFBSGVLU1WD5mDUqQdbCT0SuR6LHbP%2Bqcv8LAbbHi2MO0oMQtmU34LBVfIWKI0rl%2FN9hLsacwdbI5ld4q0b0rWN326HiwGhIFbx%2BzRyjI1J5KxdntkVaC5aewt1%2FpRlQEFX1RpDB1bhjMnP"}],"group":"cf-nel","max_age":604800}
1 < NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
1 < Server: cloudflare
1 < CF-RAY: 729c5c2c4e7c9536-LIM
1 < alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
{
  "address": {
    "zipcode": "15069",
    "city": "Lima",
    "street": "Cuzco 123"
  },
  "phone": "123456789",
  "name": "Joe Doe",
  "email": "joe.doe@example.com",
  "username": "Joe",
  "id": 11
}


14:59:34.016 [main] DEBUG com.intuit.karate - request:
1 > POST https://jsonplaceholder.typicode.com/users
1 > Accept: application/json
1 > Content-Type: application/json; charset=UTF-8
1 > Content-Length: 168
1 > Host: jsonplaceholder.typicode.com
1 > Connection: Keep-Alive
1 > User-Agent: Apache-HttpClient/4.5.13 (Java/1.8.0_321)
1 > Accept-Encoding: gzip,deflate
{"address":{"zipcode":"13045","city":"Lima","street":"Arequipa 122"},"phone":"987654321","name":"Carlos Rodriguez","email":"carlos.rdg@example.com","username":"Carlos"}

14:59:34.416 [main] DEBUG com.intuit.karate - response time in milliseconds: 399
1 < 201
1 < Date: Tue, 12 Jul 2022 19:59:34 GMT
1 < Content-Type: application/json; charset=utf-8
1 < Content-Length: 222
1 < Connection: keep-alive
1 < X-Powered-By: Express
1 < X-Ratelimit-Limit: 1000
1 < X-Ratelimit-Remaining: 994
1 < X-Ratelimit-Reset: 1657656030
1 < Vary: Origin, X-HTTP-Method-Override, Accept-Encoding
1 < Access-Control-Allow-Credentials: true
1 < Cache-Control: no-cache
1 < Pragma: no-cache
1 < Expires: -1
1 < Access-Control-Expose-Headers: Location
1 < Location: http://jsonplaceholder.typicode.com/users/11
1 < X-Content-Type-Options: nosniff
1 < Etag: W/"de-pnPqX2/aWsc+Hiu5BG8cH9gYoj8"
1 < Via: 1.1 vegur
1 < CF-Cache-Status: DYNAMIC
1 < Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
1 < Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=LODjVk3kdKZRqzAfh534OYku94v%2BldSIEsCCRNGxWlACJWm3mbEeRiUmyZc85buy4qwdrStkhJx9zQcsNsSgWDalYkA03Z7vZo0qJiFU%2BoS%2BMYC8MBhda8Idq2LPfP29BCBI0kM0APkIhgo%2B68Cd"}],"group":"cf-nel","max_age":604800}
1 < NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
1 < Server: cloudflare
1 < CF-RAY: 729c5c2e1876951c-LIM
1 < alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
{
  "address": {
    "zipcode": "13045",
    "city": "Lima",
    "street": "Arequipa 122"
  },
  "phone": "987654321",
  "name": "Carlos Rodriguez",
  "email": "carlos.rdg@example.com",
  "username": "Carlos",
  "id": 11
}


14:59:35.238 [main] INFO  com.intuit.karate.Suite - <<pass>> feature 1 of 1 (0 remaining) classpath:resources/features/users.feature
```
## Reporte Karate

Reporte generado despues de la ejecución CLI [Demo](https://fromeroc9.github.io/karate-framework-doc/reports/karate/karate-summary.html)

![Reporte](/images/resultados/karate1.png)

![Reporte](/images/resultados/karate2.png)

## Reporte Cucumber

Reporte generado despues de la ejecución CLI [Demo](https://fromeroc9.github.io/karate-framework-doc/reports/cucumber/overview-features.html)

![Reporte](/images/resultados/cucumber1.png)

![Reporte](/images/resultados/cucumber2.png)