# Prueba Real

## Pago Web

### 1. Desarrollo

```ts
# Seguridad.feature
Feature: Pago Web API Seguridad

  @tokenSeguridad
  Scenario Outline: generar token de seguridad
    * def AUTH = Java.type('collection.api.Seguridad').base64("integraciones@niubiz.com.pe", "_7z3@8fF")

    * url baseUrl
    * header Accept = 'text/plain'
    * header Authorization = AUTH

    Given path '/api.security/v1/security'
    When method GET
    Then status 201

    * Java.type('collection.api.Seguridad').save("<CP>", response)
    * def tokenSeguridad = response

    Examples:
      | CP |
      | 1 |
      | 2 |
```

```ts
Feature: Pago Web Antifraude

  @antifraude
  Scenario Outline: Api de Antifraude
    * def tokenSeguridad = Java.type('collection.api.Antifraude').token("<CP>")
    * def xurl = Java.type('collection.api.Antifraude').url("<CP>")
    * def xdata = Java.type('collection.api.Antifraude').data("<CP>")

    * url baseUrl
    * header Accept = 'application/json'
    * header Authorization = tokenSeguridad
    * header Content-Type = 'application/json'

    Given path 'api.antifraud/v1/antifraud/'+xurl
    And request xdata
    When method POST
    Then status 200

    * Java.type('collection.api.Antifraude').save("<CP>", response.token.tokenId)
    * def tokenId = response.token.tokenId

    Examples:
      | CP |
      | 1 |
      | 2 |

```

```ts
Feature: Pago Web Autorizar

  @autorizar
  Scenario Outline: Api de Autorizar
    * def tokenSeguridad = Java.type('collection.api.Autorizar').token("<CP>")
    * def xurl = Java.type('collection.api.Autorizar').url("<CP>")
    * def xdata = Java.type('collection.api.Autorizar').data("<CP>")

    * url 'https://apisandbox.vnforappstest.com/'
    * header Accept = 'application/json'
    * header Authorization = tokenSeguridad
    * header Content-Type = 'application/json'

    Given path 'api.authorization/v3/authorization/'+xurl
    And request xdata
    #And request read('classpath:collection/request/Autorizar.json')
    When method POST
    Then status 200

    * Java.type('collection.api.Autorizar').save("<CP>", karate.pretty(response))

    Examples:
      | CP |
      | 1 |
      | 2 |
```

### 2. Ejecución

```shell
19:26:25.072 [main] DEBUG com.intuit.karate.Suite - [config] classpath:karate-config.js
19:26:26.587 [main] DEBUG com.intuit.karate - request:
1 > GET https://apitestenv.vnforapps.com/api.security/v1/security
1 > Accept: text/plain
1 > Authorization: Basic aW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlOl83ejNAOGZG
1 > Host: apitestenv.vnforapps.com
1 > Connection: Keep-Alive
1 > User-Agent: Apache-HttpClient/4.5.13 (Java/1.8.0_321)
1 > Accept-Encoding: gzip,deflate


19:26:27.378 [main] DEBUG com.intuit.karate - response time in milliseconds: 790
1 < 201
1 < Date: Wed, 13 Jul 2022 00:26:27 GMT
1 < Content-Type: text/plain
1 < Content-Length: 962
1 < Connection: keep-alive
1 < X-Powered-By: Undertow/1
1 < Access-Control-Allow-Headers: origin, content-type, accept, authorization, visanet-session-key, visanet-crypto-context-ewsalt, visanet-crypto-context-ewiv, visanet-crypto-context-key
1 < Server: WildFly/9
1 < Access-Control-Allow-Origin: *
1 < Access-Control-Allow-Credentials: true
1 < Strict-Transport-Security: max-age=31536000
1 < Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwTWR3R0R6RjQ1YS1SbWs3bkhwc2lNYUJweFJQRjNzekEtNW1HWFllMThvIn0.eyJleHAiOjE2NTc2NzU1ODcsImlhdCI6MTY1NzY3MTk4NywianRpIjoiZTNlNWNmY2QtYzg5ZS00OGMyLThiZDQtOTg1YWMzOTdlMGE5IiwiaXNzIjoiaHR0cHM6Ly9hY2Nlc3MuaW50dm50LmNvbS9hdXRoL3JlYWxtcy9vbmxpbmUtYXBpcyIsInN1YiI6IjQyNjg5NzZlLWVhOWEtNDI0Yi04YWEwLTY5ZWYwMjA5NTJkZSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1tdWx0aXJlZ2lvbiIsInNlc3Npb25fc3RhdGUiOiI1M2YzNzMyOC0wNWRiLTRlNWUtYTE0NS1kZTEwNzVjNTUyOWEiLCJhY3IiOiIxIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImdyb3VwcyI6W10sInVzZXJuYW1lIjoiaW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlIn0.HfJ-FvIsz1mLYFhQ9Fv--JVjx8JqqoYm1tXROsKK3cy2Qx7CfaaPhZxO41eo2Do0SffNDD_ENusU5d53ZnIN6i4QTehbncSBmKJR2-3Fil7gsdwYV3YpQWFOQEo5VYffvHvxGgBVu0Ou1Mw0Tg93COPkNphHncH_aANiR6wP5MK-4okPrLuceuEbCStoxlOnqdaHGj2XIGaHoyPKp6hb5FAm7eO40WTWAp5YHwL4GMu8eutFRehHBdMkFBs-vSaPWG8kJjFp45QPrfNxPdrVKnByFYl384QU2UBjqEOvq_Oiv9eM5ZS19Kyg10jarriqt0TDPHL5IeXqpME7IXu3nQ

19:26:28.026 [main] DEBUG com.intuit.karate - request:
1 > GET https://apitestenv.vnforapps.com/api.security/v1/security
1 > Accept: text/plain
1 > Authorization: Basic aW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlOl83ejNAOGZG
1 > Host: apitestenv.vnforapps.com
1 > Connection: Keep-Alive
1 > User-Agent: Apache-HttpClient/4.5.13 (Java/1.8.0_321)
1 > Accept-Encoding: gzip,deflate


19:26:28.528 [main] DEBUG com.intuit.karate - response time in milliseconds: 502
1 < 201
1 < Date: Wed, 13 Jul 2022 00:26:28 GMT
1 < Content-Type: text/plain
1 < Content-Length: 962
1 < Connection: keep-alive
1 < X-Powered-By: Undertow/1
1 < Access-Control-Allow-Headers: origin, content-type, accept, authorization, visanet-session-key, visanet-crypto-context-ewsalt, visanet-crypto-context-ewiv, visanet-crypto-context-key
1 < Server: WildFly/9
1 < Access-Control-Allow-Origin: *
1 < Access-Control-Allow-Credentials: true
1 < Strict-Transport-Security: max-age=31536000
1 < Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwTWR3R0R6RjQ1YS1SbWs3bkhwc2lNYUJweFJQRjNzekEtNW1HWFllMThvIn0.eyJleHAiOjE2NTc2NzU1ODgsImlhdCI6MTY1NzY3MTk4OCwianRpIjoiNmJiOGE4NGYtY2ZlMi00Yzg2LTk3YjEtODRiNGRjZjZkMjk1IiwiaXNzIjoiaHR0cHM6Ly9hY2Nlc3MuaW50dm50LmNvbS9hdXRoL3JlYWxtcy9vbmxpbmUtYXBpcyIsInN1YiI6IjQyNjg5NzZlLWVhOWEtNDI0Yi04YWEwLTY5ZWYwMjA5NTJkZSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1tdWx0aXJlZ2lvbiIsInNlc3Npb25fc3RhdGUiOiIxMTA5N2ZkNy1jNzI2LTRkMTgtODU3Yy01YjIzMGFmNTYyNDkiLCJhY3IiOiIxIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImdyb3VwcyI6W10sInVzZXJuYW1lIjoiaW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlIn0.hGiTd2CJTRvbmw1tNsDAqIinJUuiVrYpPdgZFApNwqU6BOwDBFR7Z7W9aCErtcZ1A0rm1ph0MrZiPbGvb2r3AXzgZZMBdACrX7l9P9Nv2tILUlI5Mqf1qpTetNUT0tDobL3SqoXOpnTHoLZ4oZTUKbYwcZR2AH2KLLmDY_RDpVcmEGyP91oJYRFeG4IRUl1pJ-Y72bXVNnywiWA7CO9PTIrg6El7A5_pwr9EhZmOYMUa0fImcyomSyoSjvFmYeR2qmgDrs46hebVoa64sAKFH4LnNm4iIjzpT7dsY9h4AeQ7Ih8V9F7281d2Z3XqDfcIR6Yd3k9fhaRfKpjKvg65rw

19:26:29.664 [main] INFO  com.intuit.karate.Suite - <<pass>> feature 1 of 3 (0 remaining) classpath:resources/features/seguridad.feature
19:26:30.065 [main] DEBUG com.intuit.karate - request:
1 > POST https://apitestenv.vnforapps.com/api.antifraud/v1/antifraud/ecommerce/456879852
1 > Accept: application/json
1 > Authorization: eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwTWR3R0R6RjQ1YS1SbWs3bkhwc2lNYUJweFJQRjNzekEtNW1HWFllMThvIn0.eyJleHAiOjE2NTc2NzU1ODcsImlhdCI6MTY1NzY3MTk4NywianRpIjoiZTNlNWNmY2QtYzg5ZS00OGMyLThiZDQtOTg1YWMzOTdlMGE5IiwiaXNzIjoiaHR0cHM6Ly9hY2Nlc3MuaW50dm50LmNvbS9hdXRoL3JlYWxtcy9vbmxpbmUtYXBpcyIsInN1YiI6IjQyNjg5NzZlLWVhOWEtNDI0Yi04YWEwLTY5ZWYwMjA5NTJkZSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1tdWx0aXJlZ2lvbiIsInNlc3Npb25fc3RhdGUiOiI1M2YzNzMyOC0wNWRiLTRlNWUtYTE0NS1kZTEwNzVjNTUyOWEiLCJhY3IiOiIxIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImdyb3VwcyI6W10sInVzZXJuYW1lIjoiaW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlIn0.HfJ-FvIsz1mLYFhQ9Fv--JVjx8JqqoYm1tXROsKK3cy2Qx7CfaaPhZxO41eo2Do0SffNDD_ENusU5d53ZnIN6i4QTehbncSBmKJR2-3Fil7gsdwYV3YpQWFOQEo5VYffvHvxGgBVu0Ou1Mw0Tg93COPkNphHncH_aANiR6wP5MK-4okPrLuceuEbCStoxlOnqdaHGj2XIGaHoyPKp6hb5FAm7eO40WTWAp5YHwL4GMu8eutFRehHBdMkFBs-vSaPWG8kJjFp45QPrfNxPdrVKnByFYl384QU2UBjqEOvq_Oiv9eM5ZS19Kyg10jarriqt0TDPHL5IeXqpME7IXu3nQ
1 > Content-Type: application/json; charset=UTF-8
1 > Content-Length: 273
1 > Host: apitestenv.vnforapps.com
1 > Connection: Keep-Alive
1 > User-Agent: Apache-HttpClient/4.5.13 (Java/1.8.0_321)
1 > Accept-Encoding: gzip,deflate
{"channel":"Web","cardHolder":{"firstName":"Carlos","lastName":"Medina","email":"prueba1@gmail.com"},"card":{"expirationYear":"2023","cvv2":"123","expirationMonth":"12","cardNumber":"4474118355632240"},"order":{"amount":"10.5","currency":"PEN","purchaseNumber":"13062024"}}

19:26:32.846 [main] DEBUG com.intuit.karate - response time in milliseconds: 2778
1 < 200
1 < Date: Wed, 13 Jul 2022 00:26:32 GMT
1 < Content-Type: application/json;charset=utf-8
1 < Content-Length: 577
1 < Connection: keep-alive
1 < X-Powered-By: Undertow/1
1 < Access-Control-Allow-Headers: origin, content-type, accept, authorization, visanet-session-key, visanet-crypto-context-ewsalt, visanet-crypto-context-ewiv, visanet-crypto-context-key
1 < Server: WildFly/9
1 < Access-Control-Allow-Origin: *
1 < Access-Control-Allow-Credentials: true
1 < Strict-Transport-Security: max-age=31536000
1 < Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
{
  "header": {
    "ecoreTransactionUUID": "5bb86040-5b20-4a75-8789-9cec829806fb",
    "ecoreTransactionDate": 1657671992798,
    "millis": 2288
  },
  "order": {
    "purchaseNumber": "13062024",
    "amount": 10.5,
    "currency": "PEN"
  },
  "token": {
    "tokenId": "B92B3B67232C417FAB3B67232C117FAC",
    "expiration": 1657672892751,
    "redirectToVbV": false,
    "mpi": false,
    "dataMap": {
    }
  },
  "dataMap": {
    "TRANSACTION_DATE": "220712192632",
    "MESSAGE": "Cybersource Accept",
    "REQUEST_TOKEN": "AxjzbwSTZIZS1OIBaFKIACABT9uh+mveXBcGiJGGTSTLF18DBQQOwAAA7wfz",
    "DECISION": "Accept",
    "ACTION_CODE": "000",
    "REASON_CODE": "100",
    "REQUEST_ID": "6576719922856924304008"
  }
}


19:26:33.123 [main] DEBUG com.intuit.karate - request:
1 > POST https://apitestenv.vnforapps.com/api.antifraud/v1/antifraud/ecommerce/456879852
1 > Accept: application/json
1 > Authorization: eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwTWR3R0R6RjQ1YS1SbWs3bkhwc2lNYUJweFJQRjNzekEtNW1HWFllMThvIn0.eyJleHAiOjE2NTc2NzU1ODgsImlhdCI6MTY1NzY3MTk4OCwianRpIjoiNmJiOGE4NGYtY2ZlMi00Yzg2LTk3YjEtODRiNGRjZjZkMjk1IiwiaXNzIjoiaHR0cHM6Ly9hY2Nlc3MuaW50dm50LmNvbS9hdXRoL3JlYWxtcy9vbmxpbmUtYXBpcyIsInN1YiI6IjQyNjg5NzZlLWVhOWEtNDI0Yi04YWEwLTY5ZWYwMjA5NTJkZSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1tdWx0aXJlZ2lvbiIsInNlc3Npb25fc3RhdGUiOiIxMTA5N2ZkNy1jNzI2LTRkMTgtODU3Yy01YjIzMGFmNTYyNDkiLCJhY3IiOiIxIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImdyb3VwcyI6W10sInVzZXJuYW1lIjoiaW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlIn0.hGiTd2CJTRvbmw1tNsDAqIinJUuiVrYpPdgZFApNwqU6BOwDBFR7Z7W9aCErtcZ1A0rm1ph0MrZiPbGvb2r3AXzgZZMBdACrX7l9P9Nv2tILUlI5Mqf1qpTetNUT0tDobL3SqoXOpnTHoLZ4oZTUKbYwcZR2AH2KLLmDY_RDpVcmEGyP91oJYRFeG4IRUl1pJ-Y72bXVNnywiWA7CO9PTIrg6El7A5_pwr9EhZmOYMUa0fImcyomSyoSjvFmYeR2qmgDrs46hebVoa64sAKFH4LnNm4iIjzpT7dsY9h4AeQ7Ih8V9F7281d2Z3XqDfcIR6Yd3k9fhaRfKpjKvg65rw
1 > Content-Type: application/json; charset=UTF-8
1 > Content-Length: 270
1 > Host: apitestenv.vnforapps.com
1 > Connection: Keep-Alive
1 > User-Agent: Apache-HttpClient/4.5.13 (Java/1.8.0_321)
1 > Accept-Encoding: gzip,deflate
{"channel":"Web","cardHolder":{"firstName":"Carlos","lastName":"Medina","email":"prueba2@gmail.com"},"card":{"expirationYear":"2023","cvv2":"123","expirationMonth":"12","cardNumber":"4474118355632240"},"order":{"amount":"5","currency":"PEN","purchaseNumber":"13062025"}}

19:26:34.526 [main] DEBUG com.intuit.karate - response time in milliseconds: 1403
1 < 200
1 < Date: Wed, 13 Jul 2022 00:26:34 GMT
1 < Content-Type: application/json;charset=utf-8
1 < Content-Length: 575
1 < Connection: keep-alive
1 < X-Powered-By: Undertow/1
1 < Access-Control-Allow-Headers: origin, content-type, accept, authorization, visanet-session-key, visanet-crypto-context-ewsalt, visanet-crypto-context-ewiv, visanet-crypto-context-key
1 < Server: WildFly/9
1 < Access-Control-Allow-Origin: *
1 < Access-Control-Allow-Credentials: true
1 < Strict-Transport-Security: max-age=31536000
1 < Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
{
  "header": {
    "ecoreTransactionUUID": "c7cc46f5-d0f3-47ed-b7bb-82f83cc6197a",
    "ecoreTransactionDate": 1657671994476,
    "millis": 906
  },
  "order": {
    "purchaseNumber": "13062025",
    "amount": 5.0,
    "currency": "PEN"
  },
  "token": {
    "tokenId": "77CEEC8A00BE46F68EEC8A00BE06F68A",
    "expiration": 1657672894430,
    "redirectToVbV": false,
    "mpi": false,
    "dataMap": {
    }
  },
  "dataMap": {
    "TRANSACTION_DATE": "220712192634",
    "MESSAGE": "Cybersource Accept",
    "REQUEST_TOKEN": "AxjzbwSTZIZS5DUty4JLACABT9uh+mwKXBP0IkYZNJMsXXwMFBA7AAAA+RCF",
    "DECISION": "Accept",
    "ACTION_CODE": "000",
    "REASON_CODE": "100",
    "REQUEST_ID": "6576719939706825704011"
  }
}


19:26:34.731 [main] INFO  com.intuit.karate.Suite - <<pass>> feature 2 of 3 (0 remaining) classpath:resources/features/antifraude.feature
19:26:34.929 [main] DEBUG com.intuit.karate - request:
1 > POST https://apisandbox.vnforappstest.com/api.authorization/v3/authorization/ecommerce/456879852
1 > Accept: application/json
1 > Authorization: eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwTWR3R0R6RjQ1YS1SbWs3bkhwc2lNYUJweFJQRjNzekEtNW1HWFllMThvIn0.eyJleHAiOjE2NTc2NzU1ODcsImlhdCI6MTY1NzY3MTk4NywianRpIjoiZTNlNWNmY2QtYzg5ZS00OGMyLThiZDQtOTg1YWMzOTdlMGE5IiwiaXNzIjoiaHR0cHM6Ly9hY2Nlc3MuaW50dm50LmNvbS9hdXRoL3JlYWxtcy9vbmxpbmUtYXBpcyIsInN1YiI6IjQyNjg5NzZlLWVhOWEtNDI0Yi04YWEwLTY5ZWYwMjA5NTJkZSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1tdWx0aXJlZ2lvbiIsInNlc3Npb25fc3RhdGUiOiI1M2YzNzMyOC0wNWRiLTRlNWUtYTE0NS1kZTEwNzVjNTUyOWEiLCJhY3IiOiIxIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImdyb3VwcyI6W10sInVzZXJuYW1lIjoiaW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlIn0.HfJ-FvIsz1mLYFhQ9Fv--JVjx8JqqoYm1tXROsKK3cy2Qx7CfaaPhZxO41eo2Do0SffNDD_ENusU5d53ZnIN6i4QTehbncSBmKJR2-3Fil7gsdwYV3YpQWFOQEo5VYffvHvxGgBVu0Ou1Mw0Tg93COPkNphHncH_aANiR6wP5MK-4okPrLuceuEbCStoxlOnqdaHGj2XIGaHoyPKp6hb5FAm7eO40WTWAp5YHwL4GMu8eutFRehHBdMkFBs-vSaPWG8kJjFp45QPrfNxPdrVKnByFYl384QU2UBjqEOvq_Oiv9eM5ZS19Kyg10jarriqt0TDPHL5IeXqpME7IXu3nQ
1 > Content-Type: application/json; charset=UTF-8
1 > Content-Length: 175
1 > Host: apisandbox.vnforappstest.com
1 > Connection: Keep-Alive
1 > User-Agent: Apache-HttpClient/4.5.13 (Java/1.8.0_321)
1 > Accept-Encoding: gzip,deflate
{"captureType":"manual","channel":"Web","countable":"true","order":{"amount":"10.5","tokenId":"B92B3B67232C417FAB3B67232C117FAC","currency":"PEN","purchaseNumber":"13062024"}}

19:26:36.416 [main] DEBUG com.intuit.karate - response time in milliseconds: 1487
1 < 200
1 < Date: Wed, 13 Jul 2022 00:26:36 GMT
1 < Content-Type: application/json;charset=utf-8
1 < Content-Length: 1330
1 < Connection: keep-alive
1 < Access-Control-Allow-Origin: *
1 < Access-Control-Allow-Headers: origin, content-type, accept, authorization, visanet-session-key, visanet-crypto-context-ewsalt, visanet-crypto-context-ewiv, visanet-crypto-context-key
1 < Access-Control-Allow-Credentials: true
1 < Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
{
  "header": {
    "ecoreTransactionUUID": "a5739ba8-3ccc-4721-ba61-333b7e7aaab5",
    "ecoreTransactionDate": 1657671996367,
    "millis": 863
  },
  "fulfillment": {
    "channel": "Web",
    "merchantId": "456879852",
    "terminalId": "00000001",
    "captureType": "manual",
    "countable": true,
    "fastPayment": false,
    "signature": "a5739ba8-3ccc-4721-ba61-333b7e7aaab5"
  },
  "order": {
    "tokenId": "B92B3B67232C417FAB3B67232C117FAC",
    "purchaseNumber": "13062024",
    "amount": 10.5,
    "installment": 0,
    "currency": "PEN",
    "authorizedAmount": 10.5,
    "authorizationCode": "091800",
    "actionCode": "000",
    "traceNumber": "60427",
    "transactionDate": "220712192635",
    "transactionId": "993211570048581"
  },
  "dataMap": {
    "TERMINAL": "00000001",
    "BRAND_ACTION_CODE": "00",
    "BRAND_HOST_DATE_TIME": "201222141839",
    "TRACE_NUMBER": "60427",
    "CARD_TYPE": "D",
    "ECI_DESCRIPTION": "Transaccion no autenticada pero enviada en canal seguro",
    "SIGNATURE": "a5739ba8-3ccc-4721-ba61-333b7e7aaab5",
    "CARD": "447411******2240",
    "MERCHANT": "109705108",
    "STATUS": "Authorized",
    "ACTION_DESCRIPTION": "Aprobado y completado con exito",
    "ID_UNICO": "993211570048581",
    "AMOUNT": "10.5",
    "AUTHORIZATION_CODE": "091800",
    "CURRENCY": "0604",
    "TRANSACTION_DATE": "220712192635",
    "ACTION_CODE": "000",
    "CVV2_VALIDATION_RESULT": "M",
    "ECI": "07",
    "ID_RESOLUTOR": "420201222142237",
    "BRAND": "visa",
    "ADQUIRENTE": "570002",
    "BRAND_NAME": "VI",
    "PROCESS_CODE": "000000",
    "TRANSACTION_ID": "993211570048581"
  }
}


19:26:36.655 [main] DEBUG com.intuit.karate - request:
1 > POST https://apisandbox.vnforappstest.com/api.authorization/v3/authorization/ecommerce/456879852
1 > Accept: application/json
1 > Authorization: eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwTWR3R0R6RjQ1YS1SbWs3bkhwc2lNYUJweFJQRjNzekEtNW1HWFllMThvIn0.eyJleHAiOjE2NTc2NzU1ODgsImlhdCI6MTY1NzY3MTk4OCwianRpIjoiNmJiOGE4NGYtY2ZlMi00Yzg2LTk3YjEtODRiNGRjZjZkMjk1IiwiaXNzIjoiaHR0cHM6Ly9hY2Nlc3MuaW50dm50LmNvbS9hdXRoL3JlYWxtcy9vbmxpbmUtYXBpcyIsInN1YiI6IjQyNjg5NzZlLWVhOWEtNDI0Yi04YWEwLTY5ZWYwMjA5NTJkZSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1tdWx0aXJlZ2lvbiIsInNlc3Npb25fc3RhdGUiOiIxMTA5N2ZkNy1jNzI2LTRkMTgtODU3Yy01YjIzMGFmNTYyNDkiLCJhY3IiOiIxIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImdyb3VwcyI6W10sInVzZXJuYW1lIjoiaW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlIn0.hGiTd2CJTRvbmw1tNsDAqIinJUuiVrYpPdgZFApNwqU6BOwDBFR7Z7W9aCErtcZ1A0rm1ph0MrZiPbGvb2r3AXzgZZMBdACrX7l9P9Nv2tILUlI5Mqf1qpTetNUT0tDobL3SqoXOpnTHoLZ4oZTUKbYwcZR2AH2KLLmDY_RDpVcmEGyP91oJYRFeG4IRUl1pJ-Y72bXVNnywiWA7CO9PTIrg6El7A5_pwr9EhZmOYMUa0fImcyomSyoSjvFmYeR2qmgDrs46hebVoa64sAKFH4LnNm4iIjzpT7dsY9h4AeQ7Ih8V9F7281d2Z3XqDfcIR6Yd3k9fhaRfKpjKvg65rw
1 > Content-Type: application/json; charset=UTF-8
1 > Content-Length: 172
1 > Host: apisandbox.vnforappstest.com
1 > Connection: Keep-Alive
1 > User-Agent: Apache-HttpClient/4.5.13 (Java/1.8.0_321)
1 > Accept-Encoding: gzip,deflate
{"captureType":"manual","channel":"Web","countable":"true","order":{"amount":"5","tokenId":"77CEEC8A00BE46F68EEC8A00BE06F68A","currency":"PEN","purchaseNumber":"13062025"}}

19:26:37.889 [main] DEBUG com.intuit.karate - response time in milliseconds: 1231
1 < 200
1 < Date: Wed, 13 Jul 2022 00:26:37 GMT
1 < Content-Type: application/json;charset=utf-8
1 < Content-Length: 1327
1 < Connection: keep-alive
1 < Access-Control-Allow-Origin: *
1 < Access-Control-Allow-Headers: origin, content-type, accept, authorization, visanet-session-key, visanet-crypto-context-ewsalt, visanet-crypto-context-ewiv, visanet-crypto-context-key
1 < Access-Control-Allow-Credentials: true
1 < Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
{
  "header": {
    "ecoreTransactionUUID": "56883809-c167-4424-8bfb-098f2d571d6d",
    "ecoreTransactionDate": 1657671997835,
    "millis": 719
  },
  "fulfillment": {
    "channel": "Web",
    "merchantId": "456879852",
    "terminalId": "00000001",
    "captureType": "manual",
    "countable": true,
    "fastPayment": false,
    "signature": "56883809-c167-4424-8bfb-098f2d571d6d"
  },
  "order": {
    "tokenId": "77CEEC8A00BE46F68EEC8A00BE06F68A",
    "purchaseNumber": "13062025",
    "amount": 5.0,
    "installment": 0,
    "currency": "PEN",
    "authorizedAmount": 5.0,
    "authorizationCode": "091800",
    "actionCode": "000",
    "traceNumber": "60428",
    "transactionDate": "220712192637",
    "transactionId": "993211570048581"
  },
  "dataMap": {
    "TERMINAL": "00000001",
    "BRAND_ACTION_CODE": "00",
    "BRAND_HOST_DATE_TIME": "201222141839",
    "TRACE_NUMBER": "60428",
    "CARD_TYPE": "D",
    "ECI_DESCRIPTION": "Transaccion no autenticada pero enviada en canal seguro",
    "SIGNATURE": "56883809-c167-4424-8bfb-098f2d571d6d",
    "CARD": "447411******2240",
    "MERCHANT": "109705108",
    "STATUS": "Authorized",
    "ACTION_DESCRIPTION": "Aprobado y completado con exito",
    "ID_UNICO": "993211570048581",
    "AMOUNT": "5.0",
    "AUTHORIZATION_CODE": "091800",
    "CURRENCY": "0604",
    "TRANSACTION_DATE": "220712192637",
    "ACTION_CODE": "000",
    "CVV2_VALIDATION_RESULT": "M",
    "ECI": "07",
    "ID_RESOLUTOR": "420201222142237",
    "BRAND": "visa",
    "ADQUIRENTE": "570002",
    "BRAND_NAME": "VI",
    "PROCESS_CODE": "000000",
    "TRANSACTION_ID": "993211570048581"
  }
}


19:26:38.022 [main] INFO  com.intuit.karate.Suite - <<pass>> feature 3 of 3 (0 remaining) classpath:resources/features/autorizar.feature
19:26:38.024 [main] DEBUG com.intuit.karate.Suite - waiting for 3 features to complete
```

### 3. Reporte Karate

Reporte generado despues de la ejecución CLI [Demo](https://fromeroc9.github.io/karate-framework-doc/reports/karate2/karate-summary.html)

![Reporte](/images/resultados/karate3.png)

### 4. Reporte Cucumber

Reporte generado despues de la ejecución CLI [Demo](https://fromeroc9.github.io/karate-framework-doc/reports/cucumber2/overview-features.html)

![Reporte](/images/resultados/cucumber3.png)