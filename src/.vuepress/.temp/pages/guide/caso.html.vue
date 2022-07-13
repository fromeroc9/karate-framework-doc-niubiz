<template><div><h1 id="prueba-real" tabindex="-1"><a class="header-anchor" href="#prueba-real" aria-hidden="true">#</a> Prueba Real</h1>
<h2 id="pago-web" tabindex="-1"><a class="header-anchor" href="#pago-web" aria-hidden="true">#</a> Pago Web</h2>
<h3 id="_1-desarrollo" tabindex="-1"><a class="header-anchor" href="#_1-desarrollo" aria-hidden="true">#</a> 1. Desarrollo</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code># Seguridad<span class="token punctuation">.</span>feature
Feature<span class="token operator">:</span> Pago Web <span class="token constant">API</span> Seguridad

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">tokenSeguridad</span></span>
  Scenario Outline<span class="token operator">:</span> generar token de seguridad
    <span class="token operator">*</span> def <span class="token constant">AUTH</span> <span class="token operator">=</span> Java<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'collection.api.Seguridad'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">base64</span><span class="token punctuation">(</span><span class="token string">"integraciones@niubiz.com.pe"</span><span class="token punctuation">,</span> <span class="token string">"_7z3@8fF"</span><span class="token punctuation">)</span>

    <span class="token operator">*</span> url baseUrl
    <span class="token operator">*</span> header Accept <span class="token operator">=</span> <span class="token string">'text/plain'</span>
    <span class="token operator">*</span> header Authorization <span class="token operator">=</span> <span class="token constant">AUTH</span>

    Given path <span class="token string">'/api.security/v1/security'</span>
    When method <span class="token constant">GET</span>
    Then status <span class="token number">201</span>

    <span class="token operator">*</span> Java<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'collection.api.Seguridad'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token string">"&lt;CP>"</span><span class="token punctuation">,</span> response<span class="token punctuation">)</span>
    <span class="token operator">*</span> def tokenSeguridad <span class="token operator">=</span> response

    Examples<span class="token operator">:</span>
      <span class="token operator">|</span> <span class="token constant">CP</span> <span class="token operator">|</span>
      <span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">|</span>
      <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>Feature<span class="token operator">:</span> Pago Web Antifraude

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">antifraude</span></span>
  Scenario Outline<span class="token operator">:</span> Api de Antifraude
    <span class="token operator">*</span> def tokenSeguridad <span class="token operator">=</span> Java<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'collection.api.Antifraude'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">token</span><span class="token punctuation">(</span><span class="token string">"&lt;CP>"</span><span class="token punctuation">)</span>
    <span class="token operator">*</span> def xurl <span class="token operator">=</span> Java<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'collection.api.Antifraude'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">"&lt;CP>"</span><span class="token punctuation">)</span>
    <span class="token operator">*</span> def xdata <span class="token operator">=</span> Java<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'collection.api.Antifraude'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">"&lt;CP>"</span><span class="token punctuation">)</span>

    <span class="token operator">*</span> url baseUrl
    <span class="token operator">*</span> header Accept <span class="token operator">=</span> <span class="token string">'application/json'</span>
    <span class="token operator">*</span> header Authorization <span class="token operator">=</span> tokenSeguridad
    <span class="token operator">*</span> header Content<span class="token operator">-</span>Type <span class="token operator">=</span> <span class="token string">'application/json'</span>

    Given path <span class="token string">'api.antifraud/v1/antifraud/'</span><span class="token operator">+</span>xurl
    And request xdata
    When method <span class="token constant">POST</span>
    Then status <span class="token number">200</span>

    <span class="token operator">*</span> Java<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'collection.api.Antifraude'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token string">"&lt;CP>"</span><span class="token punctuation">,</span> response<span class="token punctuation">.</span>token<span class="token punctuation">.</span>tokenId<span class="token punctuation">)</span>
    <span class="token operator">*</span> def tokenId <span class="token operator">=</span> response<span class="token punctuation">.</span>token<span class="token punctuation">.</span>tokenId

    Examples<span class="token operator">:</span>
      <span class="token operator">|</span> <span class="token constant">CP</span> <span class="token operator">|</span>
      <span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">|</span>
      <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>Feature<span class="token operator">:</span> Pago Web Autorizar

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">autorizar</span></span>
  Scenario Outline<span class="token operator">:</span> Api de Autorizar
    <span class="token operator">*</span> def tokenSeguridad <span class="token operator">=</span> Java<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'collection.api.Autorizar'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">token</span><span class="token punctuation">(</span><span class="token string">"&lt;CP>"</span><span class="token punctuation">)</span>
    <span class="token operator">*</span> def xurl <span class="token operator">=</span> Java<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'collection.api.Autorizar'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">"&lt;CP>"</span><span class="token punctuation">)</span>
    <span class="token operator">*</span> def xdata <span class="token operator">=</span> Java<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'collection.api.Autorizar'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">"&lt;CP>"</span><span class="token punctuation">)</span>

    <span class="token operator">*</span> url <span class="token string">'https://apisandbox.vnforappstest.com/'</span>
    <span class="token operator">*</span> header Accept <span class="token operator">=</span> <span class="token string">'application/json'</span>
    <span class="token operator">*</span> header Authorization <span class="token operator">=</span> tokenSeguridad
    <span class="token operator">*</span> header Content<span class="token operator">-</span>Type <span class="token operator">=</span> <span class="token string">'application/json'</span>

    Given path <span class="token string">'api.authorization/v3/authorization/'</span><span class="token operator">+</span>xurl
    And request xdata
    #And request <span class="token function">read</span><span class="token punctuation">(</span><span class="token string">'classpath:collection/request/Autorizar.json'</span><span class="token punctuation">)</span>
    When method <span class="token constant">POST</span>
    Then status <span class="token number">200</span>

    <span class="token operator">*</span> Java<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'collection.api.Autorizar'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token string">"&lt;CP>"</span><span class="token punctuation">,</span> karate<span class="token punctuation">.</span><span class="token function">pretty</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">)</span>

    Examples<span class="token operator">:</span>
      <span class="token operator">|</span> <span class="token constant">CP</span> <span class="token operator">|</span>
      <span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">|</span>
      <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-ejecucion" tabindex="-1"><a class="header-anchor" href="#_2-ejecucion" aria-hidden="true">#</a> 2. Ejecución</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">19</span>:26:25.072 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate.Suite - <span class="token punctuation">[</span>config<span class="token punctuation">]</span> classpath:karate-config.js
<span class="token number">19</span>:26:26.587 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">></span> GET https://apitestenv.vnforapps.com/api.security/v1/security
<span class="token number">1</span> <span class="token operator">></span> Accept: text/plain
<span class="token number">1</span> <span class="token operator">></span> Authorization: Basic aW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlOl83ejNAOGZG
<span class="token number">1</span> <span class="token operator">></span> Host: apitestenv.vnforapps.com
<span class="token number">1</span> <span class="token operator">></span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">></span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">></span> Accept-Encoding: gzip,deflate


<span class="token number">19</span>:26:27.378 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - response <span class="token function">time</span> <span class="token keyword">in</span> milliseconds: <span class="token number">790</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">201</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Date: Wed, <span class="token number">13</span> Jul <span class="token number">2022</span> 00:26:27 GMT
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Type: text/plain
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Length: <span class="token number">962</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Connection: keep-alive
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Powered-By: Undertow/1
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Headers: origin, content-type, accept, authorization, visanet-session-key, visanet-crypto-context-ewsalt, visanet-crypto-context-ewiv, visanet-crypto-context-key
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: WildFly/9
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Origin: *
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Credentials: <span class="token boolean">true</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Strict-Transport-Security: max-age<span class="token operator">=</span><span class="token number">31536000</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwTWR3R0R6RjQ1YS1SbWs3bkhwc2lNYUJweFJQRjNzekEtNW1HWFllMThvIn0.eyJleHAiOjE2NTc2NzU1ODcsImlhdCI6MTY1NzY3MTk4NywianRpIjoiZTNlNWNmY2QtYzg5ZS00OGMyLThiZDQtOTg1YWMzOTdlMGE5IiwiaXNzIjoiaHR0cHM6Ly9hY2Nlc3MuaW50dm50LmNvbS9hdXRoL3JlYWxtcy9vbmxpbmUtYXBpcyIsInN1YiI6IjQyNjg5NzZlLWVhOWEtNDI0Yi04YWEwLTY5ZWYwMjA5NTJkZSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1tdWx0aXJlZ2lvbiIsInNlc3Npb25fc3RhdGUiOiI1M2YzNzMyOC0wNWRiLTRlNWUtYTE0NS1kZTEwNzVjNTUyOWEiLCJhY3IiOiIxIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImdyb3VwcyI6W10sInVzZXJuYW1lIjoiaW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlIn0.HfJ-FvIsz1mLYFhQ9Fv--JVjx8JqqoYm1tXROsKK3cy2Qx7CfaaPhZxO41eo2Do0SffNDD_ENusU5d53ZnIN6i4QTehbncSBmKJR2-3Fil7gsdwYV3YpQWFOQEo5VYffvHvxGgBVu0Ou1Mw0Tg93COPkNphHncH_aANiR6wP5MK-4okPrLuceuEbCStoxlOnqdaHGj2XIGaHoyPKp6hb5FAm7eO40WTWAp5YHwL4GMu8eutFRehHBdMkFBs-vSaPWG8kJjFp45QPrfNxPdrVKnByFYl384QU2UBjqEOvq_Oiv9eM5ZS19Kyg10jarriqt0TDPHL5IeXqpME7IXu3nQ

<span class="token number">19</span>:26:28.026 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">></span> GET https://apitestenv.vnforapps.com/api.security/v1/security
<span class="token number">1</span> <span class="token operator">></span> Accept: text/plain
<span class="token number">1</span> <span class="token operator">></span> Authorization: Basic aW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlOl83ejNAOGZG
<span class="token number">1</span> <span class="token operator">></span> Host: apitestenv.vnforapps.com
<span class="token number">1</span> <span class="token operator">></span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">></span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">></span> Accept-Encoding: gzip,deflate


<span class="token number">19</span>:26:28.528 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - response <span class="token function">time</span> <span class="token keyword">in</span> milliseconds: <span class="token number">502</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">201</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Date: Wed, <span class="token number">13</span> Jul <span class="token number">2022</span> 00:26:28 GMT
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Type: text/plain
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Length: <span class="token number">962</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Connection: keep-alive
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Powered-By: Undertow/1
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Headers: origin, content-type, accept, authorization, visanet-session-key, visanet-crypto-context-ewsalt, visanet-crypto-context-ewiv, visanet-crypto-context-key
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: WildFly/9
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Origin: *
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Credentials: <span class="token boolean">true</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Strict-Transport-Security: max-age<span class="token operator">=</span><span class="token number">31536000</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwTWR3R0R6RjQ1YS1SbWs3bkhwc2lNYUJweFJQRjNzekEtNW1HWFllMThvIn0.eyJleHAiOjE2NTc2NzU1ODgsImlhdCI6MTY1NzY3MTk4OCwianRpIjoiNmJiOGE4NGYtY2ZlMi00Yzg2LTk3YjEtODRiNGRjZjZkMjk1IiwiaXNzIjoiaHR0cHM6Ly9hY2Nlc3MuaW50dm50LmNvbS9hdXRoL3JlYWxtcy9vbmxpbmUtYXBpcyIsInN1YiI6IjQyNjg5NzZlLWVhOWEtNDI0Yi04YWEwLTY5ZWYwMjA5NTJkZSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1tdWx0aXJlZ2lvbiIsInNlc3Npb25fc3RhdGUiOiIxMTA5N2ZkNy1jNzI2LTRkMTgtODU3Yy01YjIzMGFmNTYyNDkiLCJhY3IiOiIxIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImdyb3VwcyI6W10sInVzZXJuYW1lIjoiaW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlIn0.hGiTd2CJTRvbmw1tNsDAqIinJUuiVrYpPdgZFApNwqU6BOwDBFR7Z7W9aCErtcZ1A0rm1ph0MrZiPbGvb2r3AXzgZZMBdACrX7l9P9Nv2tILUlI5Mqf1qpTetNUT0tDobL3SqoXOpnTHoLZ4oZTUKbYwcZR2AH2KLLmDY_RDpVcmEGyP91oJYRFeG4IRUl1pJ-Y72bXVNnywiWA7CO9PTIrg6El7A5_pwr9EhZmOYMUa0fImcyomSyoSjvFmYeR2qmgDrs46hebVoa64sAKFH4LnNm4iIjzpT7dsY9h4AeQ7Ih8V9F7281d2Z3XqDfcIR6Yd3k9fhaRfKpjKvg65rw

<span class="token number">19</span>:26:29.664 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> INFO  com.intuit.karate.Suite - <span class="token operator">&lt;&lt;</span>pass<span class="token operator">>></span> feature <span class="token number">1</span> of <span class="token number">3</span> <span class="token punctuation">(</span><span class="token number">0</span> remaining<span class="token punctuation">)</span> classpath:resources/features/seguridad.feature
<span class="token number">19</span>:26:30.065 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">></span> POST https://apitestenv.vnforapps.com/api.antifraud/v1/antifraud/ecommerce/456879852
<span class="token number">1</span> <span class="token operator">></span> Accept: application/json
<span class="token number">1</span> <span class="token operator">></span> Authorization: eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwTWR3R0R6RjQ1YS1SbWs3bkhwc2lNYUJweFJQRjNzekEtNW1HWFllMThvIn0.eyJleHAiOjE2NTc2NzU1ODcsImlhdCI6MTY1NzY3MTk4NywianRpIjoiZTNlNWNmY2QtYzg5ZS00OGMyLThiZDQtOTg1YWMzOTdlMGE5IiwiaXNzIjoiaHR0cHM6Ly9hY2Nlc3MuaW50dm50LmNvbS9hdXRoL3JlYWxtcy9vbmxpbmUtYXBpcyIsInN1YiI6IjQyNjg5NzZlLWVhOWEtNDI0Yi04YWEwLTY5ZWYwMjA5NTJkZSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1tdWx0aXJlZ2lvbiIsInNlc3Npb25fc3RhdGUiOiI1M2YzNzMyOC0wNWRiLTRlNWUtYTE0NS1kZTEwNzVjNTUyOWEiLCJhY3IiOiIxIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImdyb3VwcyI6W10sInVzZXJuYW1lIjoiaW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlIn0.HfJ-FvIsz1mLYFhQ9Fv--JVjx8JqqoYm1tXROsKK3cy2Qx7CfaaPhZxO41eo2Do0SffNDD_ENusU5d53ZnIN6i4QTehbncSBmKJR2-3Fil7gsdwYV3YpQWFOQEo5VYffvHvxGgBVu0Ou1Mw0Tg93COPkNphHncH_aANiR6wP5MK-4okPrLuceuEbCStoxlOnqdaHGj2XIGaHoyPKp6hb5FAm7eO40WTWAp5YHwL4GMu8eutFRehHBdMkFBs-vSaPWG8kJjFp45QPrfNxPdrVKnByFYl384QU2UBjqEOvq_Oiv9eM5ZS19Kyg10jarriqt0TDPHL5IeXqpME7IXu3nQ
<span class="token number">1</span> <span class="token operator">></span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">></span> Content-Length: <span class="token number">273</span>
<span class="token number">1</span> <span class="token operator">></span> Host: apitestenv.vnforapps.com
<span class="token number">1</span> <span class="token operator">></span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">></span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">></span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">"channel"</span><span class="token builtin class-name">:</span><span class="token string">"Web"</span>,<span class="token string">"cardHolder"</span>:<span class="token punctuation">{</span><span class="token string">"firstName"</span><span class="token builtin class-name">:</span><span class="token string">"Carlos"</span>,<span class="token string">"lastName"</span><span class="token builtin class-name">:</span><span class="token string">"Medina"</span>,<span class="token string">"email"</span><span class="token builtin class-name">:</span><span class="token string">"prueba1@gmail.com"</span><span class="token punctuation">}</span>,<span class="token string">"card"</span>:<span class="token punctuation">{</span><span class="token string">"expirationYear"</span><span class="token builtin class-name">:</span><span class="token string">"2023"</span>,<span class="token string">"cvv2"</span><span class="token builtin class-name">:</span><span class="token string">"123"</span>,<span class="token string">"expirationMonth"</span><span class="token builtin class-name">:</span><span class="token string">"12"</span>,<span class="token string">"cardNumber"</span><span class="token builtin class-name">:</span><span class="token string">"4474118355632240"</span><span class="token punctuation">}</span>,<span class="token string">"order"</span>:<span class="token punctuation">{</span><span class="token string">"amount"</span><span class="token builtin class-name">:</span><span class="token string">"10.5"</span>,<span class="token string">"currency"</span><span class="token builtin class-name">:</span><span class="token string">"PEN"</span>,<span class="token string">"purchaseNumber"</span><span class="token builtin class-name">:</span><span class="token string">"13062024"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token number">19</span>:26:32.846 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - response <span class="token function">time</span> <span class="token keyword">in</span> milliseconds: <span class="token number">2778</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">200</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Date: Wed, <span class="token number">13</span> Jul <span class="token number">2022</span> 00:26:32 GMT
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Type: application/json<span class="token punctuation">;</span><span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Length: <span class="token number">577</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Connection: keep-alive
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Powered-By: Undertow/1
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Headers: origin, content-type, accept, authorization, visanet-session-key, visanet-crypto-context-ewsalt, visanet-crypto-context-ewiv, visanet-crypto-context-key
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: WildFly/9
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Origin: *
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Credentials: <span class="token boolean">true</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Strict-Transport-Security: max-age<span class="token operator">=</span><span class="token number">31536000</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
<span class="token punctuation">{</span>
  <span class="token string">"header"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"ecoreTransactionUUID"</span><span class="token builtin class-name">:</span> <span class="token string">"5bb86040-5b20-4a75-8789-9cec829806fb"</span>,
    <span class="token string">"ecoreTransactionDate"</span><span class="token builtin class-name">:</span> <span class="token number">1657671992798</span>,
    <span class="token string">"millis"</span><span class="token builtin class-name">:</span> <span class="token number">2288</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"order"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"purchaseNumber"</span><span class="token builtin class-name">:</span> <span class="token string">"13062024"</span>,
    <span class="token string">"amount"</span><span class="token builtin class-name">:</span> <span class="token number">10.5</span>,
    <span class="token string">"currency"</span><span class="token builtin class-name">:</span> <span class="token string">"PEN"</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"token"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"tokenId"</span><span class="token builtin class-name">:</span> <span class="token string">"B92B3B67232C417FAB3B67232C117FAC"</span>,
    <span class="token string">"expiration"</span><span class="token builtin class-name">:</span> <span class="token number">1657672892751</span>,
    <span class="token string">"redirectToVbV"</span><span class="token builtin class-name">:</span> false,
    <span class="token string">"mpi"</span><span class="token builtin class-name">:</span> false,
    <span class="token string">"dataMap"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"dataMap"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"TRANSACTION_DATE"</span><span class="token builtin class-name">:</span> <span class="token string">"220712192632"</span>,
    <span class="token string">"MESSAGE"</span><span class="token builtin class-name">:</span> <span class="token string">"Cybersource Accept"</span>,
    <span class="token string">"REQUEST_TOKEN"</span><span class="token builtin class-name">:</span> <span class="token string">"AxjzbwSTZIZS1OIBaFKIACABT9uh+mveXBcGiJGGTSTLF18DBQQOwAAA7wfz"</span>,
    <span class="token string">"DECISION"</span><span class="token builtin class-name">:</span> <span class="token string">"Accept"</span>,
    <span class="token string">"ACTION_CODE"</span><span class="token builtin class-name">:</span> <span class="token string">"000"</span>,
    <span class="token string">"REASON_CODE"</span><span class="token builtin class-name">:</span> <span class="token string">"100"</span>,
    <span class="token string">"REQUEST_ID"</span><span class="token builtin class-name">:</span> <span class="token string">"6576719922856924304008"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token number">19</span>:26:33.123 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">></span> POST https://apitestenv.vnforapps.com/api.antifraud/v1/antifraud/ecommerce/456879852
<span class="token number">1</span> <span class="token operator">></span> Accept: application/json
<span class="token number">1</span> <span class="token operator">></span> Authorization: eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwTWR3R0R6RjQ1YS1SbWs3bkhwc2lNYUJweFJQRjNzekEtNW1HWFllMThvIn0.eyJleHAiOjE2NTc2NzU1ODgsImlhdCI6MTY1NzY3MTk4OCwianRpIjoiNmJiOGE4NGYtY2ZlMi00Yzg2LTk3YjEtODRiNGRjZjZkMjk1IiwiaXNzIjoiaHR0cHM6Ly9hY2Nlc3MuaW50dm50LmNvbS9hdXRoL3JlYWxtcy9vbmxpbmUtYXBpcyIsInN1YiI6IjQyNjg5NzZlLWVhOWEtNDI0Yi04YWEwLTY5ZWYwMjA5NTJkZSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1tdWx0aXJlZ2lvbiIsInNlc3Npb25fc3RhdGUiOiIxMTA5N2ZkNy1jNzI2LTRkMTgtODU3Yy01YjIzMGFmNTYyNDkiLCJhY3IiOiIxIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImdyb3VwcyI6W10sInVzZXJuYW1lIjoiaW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlIn0.hGiTd2CJTRvbmw1tNsDAqIinJUuiVrYpPdgZFApNwqU6BOwDBFR7Z7W9aCErtcZ1A0rm1ph0MrZiPbGvb2r3AXzgZZMBdACrX7l9P9Nv2tILUlI5Mqf1qpTetNUT0tDobL3SqoXOpnTHoLZ4oZTUKbYwcZR2AH2KLLmDY_RDpVcmEGyP91oJYRFeG4IRUl1pJ-Y72bXVNnywiWA7CO9PTIrg6El7A5_pwr9EhZmOYMUa0fImcyomSyoSjvFmYeR2qmgDrs46hebVoa64sAKFH4LnNm4iIjzpT7dsY9h4AeQ7Ih8V9F7281d2Z3XqDfcIR6Yd3k9fhaRfKpjKvg65rw
<span class="token number">1</span> <span class="token operator">></span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">></span> Content-Length: <span class="token number">270</span>
<span class="token number">1</span> <span class="token operator">></span> Host: apitestenv.vnforapps.com
<span class="token number">1</span> <span class="token operator">></span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">></span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">></span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">"channel"</span><span class="token builtin class-name">:</span><span class="token string">"Web"</span>,<span class="token string">"cardHolder"</span>:<span class="token punctuation">{</span><span class="token string">"firstName"</span><span class="token builtin class-name">:</span><span class="token string">"Carlos"</span>,<span class="token string">"lastName"</span><span class="token builtin class-name">:</span><span class="token string">"Medina"</span>,<span class="token string">"email"</span><span class="token builtin class-name">:</span><span class="token string">"prueba2@gmail.com"</span><span class="token punctuation">}</span>,<span class="token string">"card"</span>:<span class="token punctuation">{</span><span class="token string">"expirationYear"</span><span class="token builtin class-name">:</span><span class="token string">"2023"</span>,<span class="token string">"cvv2"</span><span class="token builtin class-name">:</span><span class="token string">"123"</span>,<span class="token string">"expirationMonth"</span><span class="token builtin class-name">:</span><span class="token string">"12"</span>,<span class="token string">"cardNumber"</span><span class="token builtin class-name">:</span><span class="token string">"4474118355632240"</span><span class="token punctuation">}</span>,<span class="token string">"order"</span>:<span class="token punctuation">{</span><span class="token string">"amount"</span><span class="token builtin class-name">:</span><span class="token string">"5"</span>,<span class="token string">"currency"</span><span class="token builtin class-name">:</span><span class="token string">"PEN"</span>,<span class="token string">"purchaseNumber"</span><span class="token builtin class-name">:</span><span class="token string">"13062025"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token number">19</span>:26:34.526 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - response <span class="token function">time</span> <span class="token keyword">in</span> milliseconds: <span class="token number">1403</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">200</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Date: Wed, <span class="token number">13</span> Jul <span class="token number">2022</span> 00:26:34 GMT
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Type: application/json<span class="token punctuation">;</span><span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Length: <span class="token number">575</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Connection: keep-alive
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Powered-By: Undertow/1
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Headers: origin, content-type, accept, authorization, visanet-session-key, visanet-crypto-context-ewsalt, visanet-crypto-context-ewiv, visanet-crypto-context-key
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: WildFly/9
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Origin: *
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Credentials: <span class="token boolean">true</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Strict-Transport-Security: max-age<span class="token operator">=</span><span class="token number">31536000</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
<span class="token punctuation">{</span>
  <span class="token string">"header"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"ecoreTransactionUUID"</span><span class="token builtin class-name">:</span> <span class="token string">"c7cc46f5-d0f3-47ed-b7bb-82f83cc6197a"</span>,
    <span class="token string">"ecoreTransactionDate"</span><span class="token builtin class-name">:</span> <span class="token number">1657671994476</span>,
    <span class="token string">"millis"</span><span class="token builtin class-name">:</span> <span class="token number">906</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"order"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"purchaseNumber"</span><span class="token builtin class-name">:</span> <span class="token string">"13062025"</span>,
    <span class="token string">"amount"</span><span class="token builtin class-name">:</span> <span class="token number">5.0</span>,
    <span class="token string">"currency"</span><span class="token builtin class-name">:</span> <span class="token string">"PEN"</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"token"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"tokenId"</span><span class="token builtin class-name">:</span> <span class="token string">"77CEEC8A00BE46F68EEC8A00BE06F68A"</span>,
    <span class="token string">"expiration"</span><span class="token builtin class-name">:</span> <span class="token number">1657672894430</span>,
    <span class="token string">"redirectToVbV"</span><span class="token builtin class-name">:</span> false,
    <span class="token string">"mpi"</span><span class="token builtin class-name">:</span> false,
    <span class="token string">"dataMap"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"dataMap"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"TRANSACTION_DATE"</span><span class="token builtin class-name">:</span> <span class="token string">"220712192634"</span>,
    <span class="token string">"MESSAGE"</span><span class="token builtin class-name">:</span> <span class="token string">"Cybersource Accept"</span>,
    <span class="token string">"REQUEST_TOKEN"</span><span class="token builtin class-name">:</span> <span class="token string">"AxjzbwSTZIZS5DUty4JLACABT9uh+mwKXBP0IkYZNJMsXXwMFBA7AAAA+RCF"</span>,
    <span class="token string">"DECISION"</span><span class="token builtin class-name">:</span> <span class="token string">"Accept"</span>,
    <span class="token string">"ACTION_CODE"</span><span class="token builtin class-name">:</span> <span class="token string">"000"</span>,
    <span class="token string">"REASON_CODE"</span><span class="token builtin class-name">:</span> <span class="token string">"100"</span>,
    <span class="token string">"REQUEST_ID"</span><span class="token builtin class-name">:</span> <span class="token string">"6576719939706825704011"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token number">19</span>:26:34.731 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> INFO  com.intuit.karate.Suite - <span class="token operator">&lt;&lt;</span>pass<span class="token operator">>></span> feature <span class="token number">2</span> of <span class="token number">3</span> <span class="token punctuation">(</span><span class="token number">0</span> remaining<span class="token punctuation">)</span> classpath:resources/features/antifraude.feature
<span class="token number">19</span>:26:34.929 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">></span> POST https://apisandbox.vnforappstest.com/api.authorization/v3/authorization/ecommerce/456879852
<span class="token number">1</span> <span class="token operator">></span> Accept: application/json
<span class="token number">1</span> <span class="token operator">></span> Authorization: eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwTWR3R0R6RjQ1YS1SbWs3bkhwc2lNYUJweFJQRjNzekEtNW1HWFllMThvIn0.eyJleHAiOjE2NTc2NzU1ODcsImlhdCI6MTY1NzY3MTk4NywianRpIjoiZTNlNWNmY2QtYzg5ZS00OGMyLThiZDQtOTg1YWMzOTdlMGE5IiwiaXNzIjoiaHR0cHM6Ly9hY2Nlc3MuaW50dm50LmNvbS9hdXRoL3JlYWxtcy9vbmxpbmUtYXBpcyIsInN1YiI6IjQyNjg5NzZlLWVhOWEtNDI0Yi04YWEwLTY5ZWYwMjA5NTJkZSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1tdWx0aXJlZ2lvbiIsInNlc3Npb25fc3RhdGUiOiI1M2YzNzMyOC0wNWRiLTRlNWUtYTE0NS1kZTEwNzVjNTUyOWEiLCJhY3IiOiIxIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImdyb3VwcyI6W10sInVzZXJuYW1lIjoiaW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlIn0.HfJ-FvIsz1mLYFhQ9Fv--JVjx8JqqoYm1tXROsKK3cy2Qx7CfaaPhZxO41eo2Do0SffNDD_ENusU5d53ZnIN6i4QTehbncSBmKJR2-3Fil7gsdwYV3YpQWFOQEo5VYffvHvxGgBVu0Ou1Mw0Tg93COPkNphHncH_aANiR6wP5MK-4okPrLuceuEbCStoxlOnqdaHGj2XIGaHoyPKp6hb5FAm7eO40WTWAp5YHwL4GMu8eutFRehHBdMkFBs-vSaPWG8kJjFp45QPrfNxPdrVKnByFYl384QU2UBjqEOvq_Oiv9eM5ZS19Kyg10jarriqt0TDPHL5IeXqpME7IXu3nQ
<span class="token number">1</span> <span class="token operator">></span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">></span> Content-Length: <span class="token number">175</span>
<span class="token number">1</span> <span class="token operator">></span> Host: apisandbox.vnforappstest.com
<span class="token number">1</span> <span class="token operator">></span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">></span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">></span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">"captureType"</span><span class="token builtin class-name">:</span><span class="token string">"manual"</span>,<span class="token string">"channel"</span><span class="token builtin class-name">:</span><span class="token string">"Web"</span>,<span class="token string">"countable"</span><span class="token builtin class-name">:</span><span class="token string">"true"</span>,<span class="token string">"order"</span>:<span class="token punctuation">{</span><span class="token string">"amount"</span><span class="token builtin class-name">:</span><span class="token string">"10.5"</span>,<span class="token string">"tokenId"</span><span class="token builtin class-name">:</span><span class="token string">"B92B3B67232C417FAB3B67232C117FAC"</span>,<span class="token string">"currency"</span><span class="token builtin class-name">:</span><span class="token string">"PEN"</span>,<span class="token string">"purchaseNumber"</span><span class="token builtin class-name">:</span><span class="token string">"13062024"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token number">19</span>:26:36.416 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - response <span class="token function">time</span> <span class="token keyword">in</span> milliseconds: <span class="token number">1487</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">200</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Date: Wed, <span class="token number">13</span> Jul <span class="token number">2022</span> 00:26:36 GMT
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Type: application/json<span class="token punctuation">;</span><span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Length: <span class="token number">1330</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Connection: keep-alive
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Origin: *
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Headers: origin, content-type, accept, authorization, visanet-session-key, visanet-crypto-context-ewsalt, visanet-crypto-context-ewiv, visanet-crypto-context-key
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Credentials: <span class="token boolean">true</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
<span class="token punctuation">{</span>
  <span class="token string">"header"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"ecoreTransactionUUID"</span><span class="token builtin class-name">:</span> <span class="token string">"a5739ba8-3ccc-4721-ba61-333b7e7aaab5"</span>,
    <span class="token string">"ecoreTransactionDate"</span><span class="token builtin class-name">:</span> <span class="token number">1657671996367</span>,
    <span class="token string">"millis"</span><span class="token builtin class-name">:</span> <span class="token number">863</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"fulfillment"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"channel"</span><span class="token builtin class-name">:</span> <span class="token string">"Web"</span>,
    <span class="token string">"merchantId"</span><span class="token builtin class-name">:</span> <span class="token string">"456879852"</span>,
    <span class="token string">"terminalId"</span><span class="token builtin class-name">:</span> <span class="token string">"00000001"</span>,
    <span class="token string">"captureType"</span><span class="token builtin class-name">:</span> <span class="token string">"manual"</span>,
    <span class="token string">"countable"</span><span class="token builtin class-name">:</span> true,
    <span class="token string">"fastPayment"</span><span class="token builtin class-name">:</span> false,
    <span class="token string">"signature"</span><span class="token builtin class-name">:</span> <span class="token string">"a5739ba8-3ccc-4721-ba61-333b7e7aaab5"</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"order"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"tokenId"</span><span class="token builtin class-name">:</span> <span class="token string">"B92B3B67232C417FAB3B67232C117FAC"</span>,
    <span class="token string">"purchaseNumber"</span><span class="token builtin class-name">:</span> <span class="token string">"13062024"</span>,
    <span class="token string">"amount"</span><span class="token builtin class-name">:</span> <span class="token number">10.5</span>,
    <span class="token string">"installment"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">"currency"</span><span class="token builtin class-name">:</span> <span class="token string">"PEN"</span>,
    <span class="token string">"authorizedAmount"</span><span class="token builtin class-name">:</span> <span class="token number">10.5</span>,
    <span class="token string">"authorizationCode"</span><span class="token builtin class-name">:</span> <span class="token string">"091800"</span>,
    <span class="token string">"actionCode"</span><span class="token builtin class-name">:</span> <span class="token string">"000"</span>,
    <span class="token string">"traceNumber"</span><span class="token builtin class-name">:</span> <span class="token string">"60427"</span>,
    <span class="token string">"transactionDate"</span><span class="token builtin class-name">:</span> <span class="token string">"220712192635"</span>,
    <span class="token string">"transactionId"</span><span class="token builtin class-name">:</span> <span class="token string">"993211570048581"</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"dataMap"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"TERMINAL"</span><span class="token builtin class-name">:</span> <span class="token string">"00000001"</span>,
    <span class="token string">"BRAND_ACTION_CODE"</span><span class="token builtin class-name">:</span> <span class="token string">"00"</span>,
    <span class="token string">"BRAND_HOST_DATE_TIME"</span><span class="token builtin class-name">:</span> <span class="token string">"201222141839"</span>,
    <span class="token string">"TRACE_NUMBER"</span><span class="token builtin class-name">:</span> <span class="token string">"60427"</span>,
    <span class="token string">"CARD_TYPE"</span><span class="token builtin class-name">:</span> <span class="token string">"D"</span>,
    <span class="token string">"ECI_DESCRIPTION"</span><span class="token builtin class-name">:</span> <span class="token string">"Transaccion no autenticada pero enviada en canal seguro"</span>,
    <span class="token string">"SIGNATURE"</span><span class="token builtin class-name">:</span> <span class="token string">"a5739ba8-3ccc-4721-ba61-333b7e7aaab5"</span>,
    <span class="token string">"CARD"</span><span class="token builtin class-name">:</span> <span class="token string">"447411******2240"</span>,
    <span class="token string">"MERCHANT"</span><span class="token builtin class-name">:</span> <span class="token string">"109705108"</span>,
    <span class="token string">"STATUS"</span><span class="token builtin class-name">:</span> <span class="token string">"Authorized"</span>,
    <span class="token string">"ACTION_DESCRIPTION"</span><span class="token builtin class-name">:</span> <span class="token string">"Aprobado y completado con exito"</span>,
    <span class="token string">"ID_UNICO"</span><span class="token builtin class-name">:</span> <span class="token string">"993211570048581"</span>,
    <span class="token string">"AMOUNT"</span><span class="token builtin class-name">:</span> <span class="token string">"10.5"</span>,
    <span class="token string">"AUTHORIZATION_CODE"</span><span class="token builtin class-name">:</span> <span class="token string">"091800"</span>,
    <span class="token string">"CURRENCY"</span><span class="token builtin class-name">:</span> <span class="token string">"0604"</span>,
    <span class="token string">"TRANSACTION_DATE"</span><span class="token builtin class-name">:</span> <span class="token string">"220712192635"</span>,
    <span class="token string">"ACTION_CODE"</span><span class="token builtin class-name">:</span> <span class="token string">"000"</span>,
    <span class="token string">"CVV2_VALIDATION_RESULT"</span><span class="token builtin class-name">:</span> <span class="token string">"M"</span>,
    <span class="token string">"ECI"</span><span class="token builtin class-name">:</span> <span class="token string">"07"</span>,
    <span class="token string">"ID_RESOLUTOR"</span><span class="token builtin class-name">:</span> <span class="token string">"420201222142237"</span>,
    <span class="token string">"BRAND"</span><span class="token builtin class-name">:</span> <span class="token string">"visa"</span>,
    <span class="token string">"ADQUIRENTE"</span><span class="token builtin class-name">:</span> <span class="token string">"570002"</span>,
    <span class="token string">"BRAND_NAME"</span><span class="token builtin class-name">:</span> <span class="token string">"VI"</span>,
    <span class="token string">"PROCESS_CODE"</span><span class="token builtin class-name">:</span> <span class="token string">"000000"</span>,
    <span class="token string">"TRANSACTION_ID"</span><span class="token builtin class-name">:</span> <span class="token string">"993211570048581"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token number">19</span>:26:36.655 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">></span> POST https://apisandbox.vnforappstest.com/api.authorization/v3/authorization/ecommerce/456879852
<span class="token number">1</span> <span class="token operator">></span> Accept: application/json
<span class="token number">1</span> <span class="token operator">></span> Authorization: eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwTWR3R0R6RjQ1YS1SbWs3bkhwc2lNYUJweFJQRjNzekEtNW1HWFllMThvIn0.eyJleHAiOjE2NTc2NzU1ODgsImlhdCI6MTY1NzY3MTk4OCwianRpIjoiNmJiOGE4NGYtY2ZlMi00Yzg2LTk3YjEtODRiNGRjZjZkMjk1IiwiaXNzIjoiaHR0cHM6Ly9hY2Nlc3MuaW50dm50LmNvbS9hdXRoL3JlYWxtcy9vbmxpbmUtYXBpcyIsInN1YiI6IjQyNjg5NzZlLWVhOWEtNDI0Yi04YWEwLTY5ZWYwMjA5NTJkZSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcC1tdWx0aXJlZ2lvbiIsInNlc3Npb25fc3RhdGUiOiIxMTA5N2ZkNy1jNzI2LTRkMTgtODU3Yy01YjIzMGFmNTYyNDkiLCJhY3IiOiIxIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImdyb3VwcyI6W10sInVzZXJuYW1lIjoiaW50ZWdyYWNpb25lc0BuaXViaXouY29tLnBlIn0.hGiTd2CJTRvbmw1tNsDAqIinJUuiVrYpPdgZFApNwqU6BOwDBFR7Z7W9aCErtcZ1A0rm1ph0MrZiPbGvb2r3AXzgZZMBdACrX7l9P9Nv2tILUlI5Mqf1qpTetNUT0tDobL3SqoXOpnTHoLZ4oZTUKbYwcZR2AH2KLLmDY_RDpVcmEGyP91oJYRFeG4IRUl1pJ-Y72bXVNnywiWA7CO9PTIrg6El7A5_pwr9EhZmOYMUa0fImcyomSyoSjvFmYeR2qmgDrs46hebVoa64sAKFH4LnNm4iIjzpT7dsY9h4AeQ7Ih8V9F7281d2Z3XqDfcIR6Yd3k9fhaRfKpjKvg65rw
<span class="token number">1</span> <span class="token operator">></span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">></span> Content-Length: <span class="token number">172</span>
<span class="token number">1</span> <span class="token operator">></span> Host: apisandbox.vnforappstest.com
<span class="token number">1</span> <span class="token operator">></span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">></span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">></span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">"captureType"</span><span class="token builtin class-name">:</span><span class="token string">"manual"</span>,<span class="token string">"channel"</span><span class="token builtin class-name">:</span><span class="token string">"Web"</span>,<span class="token string">"countable"</span><span class="token builtin class-name">:</span><span class="token string">"true"</span>,<span class="token string">"order"</span>:<span class="token punctuation">{</span><span class="token string">"amount"</span><span class="token builtin class-name">:</span><span class="token string">"5"</span>,<span class="token string">"tokenId"</span><span class="token builtin class-name">:</span><span class="token string">"77CEEC8A00BE46F68EEC8A00BE06F68A"</span>,<span class="token string">"currency"</span><span class="token builtin class-name">:</span><span class="token string">"PEN"</span>,<span class="token string">"purchaseNumber"</span><span class="token builtin class-name">:</span><span class="token string">"13062025"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token number">19</span>:26:37.889 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - response <span class="token function">time</span> <span class="token keyword">in</span> milliseconds: <span class="token number">1231</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">200</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Date: Wed, <span class="token number">13</span> Jul <span class="token number">2022</span> 00:26:37 GMT
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Type: application/json<span class="token punctuation">;</span><span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Length: <span class="token number">1327</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Connection: keep-alive
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Origin: *
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Headers: origin, content-type, accept, authorization, visanet-session-key, visanet-crypto-context-ewsalt, visanet-crypto-context-ewiv, visanet-crypto-context-key
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Credentials: <span class="token boolean">true</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
<span class="token punctuation">{</span>
  <span class="token string">"header"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"ecoreTransactionUUID"</span><span class="token builtin class-name">:</span> <span class="token string">"56883809-c167-4424-8bfb-098f2d571d6d"</span>,
    <span class="token string">"ecoreTransactionDate"</span><span class="token builtin class-name">:</span> <span class="token number">1657671997835</span>,
    <span class="token string">"millis"</span><span class="token builtin class-name">:</span> <span class="token number">719</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"fulfillment"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"channel"</span><span class="token builtin class-name">:</span> <span class="token string">"Web"</span>,
    <span class="token string">"merchantId"</span><span class="token builtin class-name">:</span> <span class="token string">"456879852"</span>,
    <span class="token string">"terminalId"</span><span class="token builtin class-name">:</span> <span class="token string">"00000001"</span>,
    <span class="token string">"captureType"</span><span class="token builtin class-name">:</span> <span class="token string">"manual"</span>,
    <span class="token string">"countable"</span><span class="token builtin class-name">:</span> true,
    <span class="token string">"fastPayment"</span><span class="token builtin class-name">:</span> false,
    <span class="token string">"signature"</span><span class="token builtin class-name">:</span> <span class="token string">"56883809-c167-4424-8bfb-098f2d571d6d"</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"order"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"tokenId"</span><span class="token builtin class-name">:</span> <span class="token string">"77CEEC8A00BE46F68EEC8A00BE06F68A"</span>,
    <span class="token string">"purchaseNumber"</span><span class="token builtin class-name">:</span> <span class="token string">"13062025"</span>,
    <span class="token string">"amount"</span><span class="token builtin class-name">:</span> <span class="token number">5.0</span>,
    <span class="token string">"installment"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">"currency"</span><span class="token builtin class-name">:</span> <span class="token string">"PEN"</span>,
    <span class="token string">"authorizedAmount"</span><span class="token builtin class-name">:</span> <span class="token number">5.0</span>,
    <span class="token string">"authorizationCode"</span><span class="token builtin class-name">:</span> <span class="token string">"091800"</span>,
    <span class="token string">"actionCode"</span><span class="token builtin class-name">:</span> <span class="token string">"000"</span>,
    <span class="token string">"traceNumber"</span><span class="token builtin class-name">:</span> <span class="token string">"60428"</span>,
    <span class="token string">"transactionDate"</span><span class="token builtin class-name">:</span> <span class="token string">"220712192637"</span>,
    <span class="token string">"transactionId"</span><span class="token builtin class-name">:</span> <span class="token string">"993211570048581"</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"dataMap"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"TERMINAL"</span><span class="token builtin class-name">:</span> <span class="token string">"00000001"</span>,
    <span class="token string">"BRAND_ACTION_CODE"</span><span class="token builtin class-name">:</span> <span class="token string">"00"</span>,
    <span class="token string">"BRAND_HOST_DATE_TIME"</span><span class="token builtin class-name">:</span> <span class="token string">"201222141839"</span>,
    <span class="token string">"TRACE_NUMBER"</span><span class="token builtin class-name">:</span> <span class="token string">"60428"</span>,
    <span class="token string">"CARD_TYPE"</span><span class="token builtin class-name">:</span> <span class="token string">"D"</span>,
    <span class="token string">"ECI_DESCRIPTION"</span><span class="token builtin class-name">:</span> <span class="token string">"Transaccion no autenticada pero enviada en canal seguro"</span>,
    <span class="token string">"SIGNATURE"</span><span class="token builtin class-name">:</span> <span class="token string">"56883809-c167-4424-8bfb-098f2d571d6d"</span>,
    <span class="token string">"CARD"</span><span class="token builtin class-name">:</span> <span class="token string">"447411******2240"</span>,
    <span class="token string">"MERCHANT"</span><span class="token builtin class-name">:</span> <span class="token string">"109705108"</span>,
    <span class="token string">"STATUS"</span><span class="token builtin class-name">:</span> <span class="token string">"Authorized"</span>,
    <span class="token string">"ACTION_DESCRIPTION"</span><span class="token builtin class-name">:</span> <span class="token string">"Aprobado y completado con exito"</span>,
    <span class="token string">"ID_UNICO"</span><span class="token builtin class-name">:</span> <span class="token string">"993211570048581"</span>,
    <span class="token string">"AMOUNT"</span><span class="token builtin class-name">:</span> <span class="token string">"5.0"</span>,
    <span class="token string">"AUTHORIZATION_CODE"</span><span class="token builtin class-name">:</span> <span class="token string">"091800"</span>,
    <span class="token string">"CURRENCY"</span><span class="token builtin class-name">:</span> <span class="token string">"0604"</span>,
    <span class="token string">"TRANSACTION_DATE"</span><span class="token builtin class-name">:</span> <span class="token string">"220712192637"</span>,
    <span class="token string">"ACTION_CODE"</span><span class="token builtin class-name">:</span> <span class="token string">"000"</span>,
    <span class="token string">"CVV2_VALIDATION_RESULT"</span><span class="token builtin class-name">:</span> <span class="token string">"M"</span>,
    <span class="token string">"ECI"</span><span class="token builtin class-name">:</span> <span class="token string">"07"</span>,
    <span class="token string">"ID_RESOLUTOR"</span><span class="token builtin class-name">:</span> <span class="token string">"420201222142237"</span>,
    <span class="token string">"BRAND"</span><span class="token builtin class-name">:</span> <span class="token string">"visa"</span>,
    <span class="token string">"ADQUIRENTE"</span><span class="token builtin class-name">:</span> <span class="token string">"570002"</span>,
    <span class="token string">"BRAND_NAME"</span><span class="token builtin class-name">:</span> <span class="token string">"VI"</span>,
    <span class="token string">"PROCESS_CODE"</span><span class="token builtin class-name">:</span> <span class="token string">"000000"</span>,
    <span class="token string">"TRANSACTION_ID"</span><span class="token builtin class-name">:</span> <span class="token string">"993211570048581"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token number">19</span>:26:38.022 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> INFO  com.intuit.karate.Suite - <span class="token operator">&lt;&lt;</span>pass<span class="token operator">>></span> feature <span class="token number">3</span> of <span class="token number">3</span> <span class="token punctuation">(</span><span class="token number">0</span> remaining<span class="token punctuation">)</span> classpath:resources/features/autorizar.feature
<span class="token number">19</span>:26:38.024 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate.Suite - waiting <span class="token keyword">for</span> <span class="token number">3</span> features to complete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-reporte-karate" tabindex="-1"><a class="header-anchor" href="#_3-reporte-karate" aria-hidden="true">#</a> 3. Reporte Karate</h3>
<p>Reporte generado despues de la ejecución CLI <a href="https://fromeroc9.github.io/karate-framework-doc/reports/karate2/karate-summary.html" target="_blank" rel="noopener noreferrer">Demo<ExternalLinkIcon/></a></p>
<p><img src="/images/resultados/karate3.png" alt="Reporte"></p>
<h3 id="_4-reporte-cucumber" tabindex="-1"><a class="header-anchor" href="#_4-reporte-cucumber" aria-hidden="true">#</a> 4. Reporte Cucumber</h3>
<p>Reporte generado despues de la ejecución CLI <a href="https://fromeroc9.github.io/karate-framework-doc/reports/cucumber2/overview-features.html" target="_blank" rel="noopener noreferrer">Demo<ExternalLinkIcon/></a></p>
<p><img src="/images/resultados/cucumber3.png" alt="Reporte"></p>
</div></template>
