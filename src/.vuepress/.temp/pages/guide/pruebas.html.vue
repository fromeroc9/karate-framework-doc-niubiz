<template><div><h1 id="karate" tabindex="-1"><a class="header-anchor" href="#karate" aria-hidden="true">#</a> Karate</h1>
<p>Karate es la única herramienta de código abierto que combina la automatización de pruebas de API, simulacros, pruebas de rendimiento e incluso automatización de la interfaz de usuario en un marco único y unificado. La sintaxis BDD popularizada por Cucumber es neutral en cuanto al lenguaje y fácil incluso para los no programadores. Las aserciones y los informes HTML están integrados, y puede ejecutar pruebas en paralelo para obtener velocidad.</p>
<p><img src="/images/pruebas/1.jpg" alt="Karate"></p>
<h2 id="json-placeholder" tabindex="-1"><a class="header-anchor" href="#json-placeholder" aria-hidden="true">#</a> JSON PlaceHolder</h2>
<p>Antes de escribir codigo, es bueno conocer lo que se va automatizar, para este ejemplo se va utilizar la siguiente API <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">JsonPlaceHolder<ExternalLinkIcon/></a></p>
<p><img src="/images/pruebas/sitiopruebaapi.png" alt="Sitio API"></p>
<h2 id="casos-basicos" tabindex="-1"><a class="header-anchor" href="#casos-basicos" aria-hidden="true">#</a> Casos Básicos</h2>
<p>Ubicación: <code v-pre>src/test/java/resources/features</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//Users.feature</span>
Feature<span class="token operator">:</span> JSONPlaceholder Demo

  Background<span class="token operator">:</span> Before Test
    <span class="token operator">*</span> url baseUrl
    <span class="token operator">*</span> header Accept <span class="token operator">=</span> <span class="token string">'application/json'</span>
    <span class="token operator">*</span> header Content<span class="token operator">-</span>Type <span class="token operator">=</span> <span class="token string">'application/json'</span>

  #Obtiene la lista de todos los usuarios
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">getUsersAll</span></span>
  Scenario<span class="token operator">:</span> Lista de Usuario
    Given path <span class="token string">'/users'</span>
    When method <span class="token constant">GET</span>
    Then status <span class="token number">200</span>

  #Realiza la busqueda del usuario
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">getUsersIDParam</span></span>
  Scenario<span class="token operator">:</span> Obtener Usuario Param
    <span class="token operator">*</span> def userID <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    Given path <span class="token string">'/users/'</span>
    And params id <span class="token operator">=</span> userID
    When method <span class="token constant">GET</span>
    Then status <span class="token number">200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="request-estatico" tabindex="-1"><a class="header-anchor" href="#request-estatico" aria-hidden="true">#</a> Request Estático</h2>
<p>Ubicación: <code v-pre>src/test/java/resources/features</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//Users.feature</span>
Feature<span class="token operator">:</span> JSONPlaceholder Demo

  Background<span class="token operator">:</span> Before Test
    <span class="token operator">*</span> url baseUrl
    <span class="token operator">*</span> header Accept <span class="token operator">=</span> <span class="token string">'application/json'</span>
    <span class="token operator">*</span> header Content<span class="token operator">-</span>Type <span class="token operator">=</span> <span class="token string">'application/json'</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">postUserStatic</span></span>
  Scenario<span class="token operator">:</span> Registrar de Usuario Static
    Given path <span class="token string">'/users'</span>
    And request
    <span class="token string">""</span>"
    <span class="token punctuation">{</span>
      <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Joe DOe"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Joe"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"joe.doe@example.com"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"street"</span><span class="token operator">:</span> <span class="token string">"Cuzco"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"suite"</span><span class="token operator">:</span> <span class="token string">"Apt. 123"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"city"</span><span class="token operator">:</span> <span class="token string">"Lima"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"zipcode"</span><span class="token operator">:</span> <span class="token string">"15069"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">"phone"</span><span class="token operator">:</span> <span class="token string">"123456789"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"google.com"</span>
    <span class="token punctuation">}</span>
    <span class="token string">""</span>"
    When method <span class="token constant">POST</span>
    Then status <span class="token number">201</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">postUserStaticJSON</span></span>
  Scenario<span class="token operator">:</span> Registrar de Usuario Static <span class="token constant">JSON</span>
    <span class="token operator">*</span> def data <span class="token operator">=</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token string">'classpath:resources/request/Users.json'</span><span class="token punctuation">)</span>

    Given path <span class="token string">'/users'</span>
    And request data
    When method <span class="token constant">POST</span>
    Then status <span class="token number">201</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="request-dinamico" tabindex="-1"><a class="header-anchor" href="#request-dinamico" aria-hidden="true">#</a> Request Dinámico</h2>
<p>Ubicación: <code v-pre>src/test/java/resources/features</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">//Users.feature</span>
Feature<span class="token operator">:</span> JSONPlaceholder Demo

  Background<span class="token operator">:</span> Before Test
    <span class="token operator">*</span> url baseUrl
    <span class="token operator">*</span> header Accept <span class="token operator">=</span> <span class="token string">'application/json'</span>
    <span class="token operator">*</span> header Content<span class="token operator">-</span>Type <span class="token operator">=</span> <span class="token string">'application/json'</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">postUserDinamicExcel</span></span>
  Scenario Outline<span class="token operator">:</span> Registrar de Usuario Dinamic Excel
    <span class="token operator">*</span> def data <span class="token operator">=</span> Java<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'collection.api.Users'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">"&lt;CP>"</span><span class="token punctuation">)</span>

    Given path <span class="token string">'/users'</span>
    And request data
    When method <span class="token constant">POST</span>
    Then status <span class="token number">201</span>

    Examples<span class="token operator">:</span>
    <span class="token operator">|</span> <span class="token constant">CP</span> <span class="token operator">|</span>
    <span class="token operator">|</span> <span class="token number">1</span>  <span class="token operator">|</span>
    <span class="token operator">|</span> <span class="token number">2</span>  <span class="token operator">|</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">postUserDinamicJSON</span></span>
  Scenario Outline<span class="token operator">:</span> Registrar de Usuario Dinamic <span class="token constant">JSON</span>
    <span class="token operator">*</span> def data <span class="token operator">=</span> Java<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'collection.api.Users'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data2</span><span class="token punctuation">(</span><span class="token string">"&lt;CP>"</span><span class="token punctuation">)</span>

    Given path <span class="token string">'/users'</span>
    And request data
    When method <span class="token constant">POST</span>
    Then status <span class="token number">201</span>

    Examples<span class="token operator">:</span>
      <span class="token operator">|</span> <span class="token constant">CP</span> <span class="token operator">|</span>
      <span class="token operator">|</span> <span class="token number">1</span>  <span class="token operator">|</span>
      <span class="token operator">|</span> <span class="token number">2</span>  <span class="token operator">|</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Para el caso de request dinámico debemos crear algunos archivos</p>
<h3 id="_1-data-de-prueba-excel-o-json" tabindex="-1"><a class="header-anchor" href="#_1-data-de-prueba-excel-o-json" aria-hidden="true">#</a> 1. Data de prueba Excel o JSON</h3>
<p>Ubicación: <code v-pre>src/test/java/resources/fixtures</code></p>
<h4 id="datos-en-excel" tabindex="-1"><a class="header-anchor" href="#datos-en-excel" aria-hidden="true">#</a> Datos en Excel</h4>
<table>
<thead>
<tr>
<th>CP</th>
<th>Name</th>
<th>Username</th>
<th>Email</th>
<th>Street</th>
<th>City</th>
<th>Zipcode</th>
<th>Phone</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Joe Doe</td>
<td>Joe</td>
<td>joe.doe@example.com</td>
<td>Cuzco 123</td>
<td>Lima</td>
<td>15069</td>
<td>123456789</td>
</tr>
<tr>
<td>2</td>
<td>Carlos Rodriguez</td>
<td>Carlos</td>
<td>carlos.rdg@example.com</td>
<td>Arequipa 122</td>
<td>Lima</td>
<td>13045</td>
<td>987654321</td>
</tr>
</tbody>
</table>
<h4 id="datos-en-json" tabindex="-1"><a class="header-anchor" href="#datos-en-json" aria-hidden="true">#</a> Datos en JSON</h4>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"Joe Doe"</span><span class="token punctuation">,</span>
    <span class="token property">"Username"</span><span class="token operator">:</span> <span class="token string">"Joe"</span><span class="token punctuation">,</span>
    <span class="token property">"Email"</span><span class="token operator">:</span> <span class="token string">"joe.doe@example.com"</span><span class="token punctuation">,</span>
    <span class="token property">"Street"</span><span class="token operator">:</span> <span class="token string">"Cuzco 123"</span><span class="token punctuation">,</span>
    <span class="token property">"City"</span><span class="token operator">:</span> <span class="token string">"Lima"</span><span class="token punctuation">,</span>
    <span class="token property">"Zipcode"</span><span class="token operator">:</span> <span class="token string">"15069"</span><span class="token punctuation">,</span>
    <span class="token property">"Phone"</span><span class="token operator">:</span> <span class="token string">"123456789"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"Carlos Rodriguez"</span><span class="token punctuation">,</span>
    <span class="token property">"Username"</span><span class="token operator">:</span> <span class="token string">"Carlos"</span><span class="token punctuation">,</span>
    <span class="token property">"Email"</span><span class="token operator">:</span> <span class="token string">"carlos.rdg@example.com"</span><span class="token punctuation">,</span>
    <span class="token property">"Street"</span><span class="token operator">:</span> <span class="token string">"Arequipa 122"</span><span class="token punctuation">,</span>
    <span class="token property">"City"</span><span class="token operator">:</span> <span class="token string">"Lima"</span><span class="token punctuation">,</span>
    <span class="token property">"Zipcode"</span><span class="token operator">:</span> <span class="token string">"13045"</span><span class="token punctuation">,</span>
    <span class="token property">"Phone"</span><span class="token operator">:</span> <span class="token string">"987654321"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-configurar-hooks" tabindex="-1"><a class="header-anchor" href="#_2-configurar-hooks" aria-hidden="true">#</a> 2. Configurar Hooks</h3>
<p>Para la lectura del JSON o Excel hay que configurar los parametros</p>
<p>Ubicación: <code v-pre>src/test/java/collection/helpers</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">collection<span class="token punctuation">.</span>helpers</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">collection<span class="token punctuation">.</span>utility<span class="token punctuation">.</span></span><span class="token class-name">ExcelReader</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">collection<span class="token punctuation">.</span>utility<span class="token punctuation">.</span></span><span class="token class-name">JsonReader</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hook</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> FILE1 <span class="token operator">=</span> <span class="token string">"data.xlsx"</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> SHEET1 <span class="token operator">=</span> <span class="token string">"Casos Prueba"</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> JSON1 <span class="token operator">=</span> <span class="token string">"data.json"</span><span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HashMap</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">ExcelReader</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>FILE1<span class="token punctuation">,</span> SHEET1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setData</span><span class="token punctuation">(</span><span class="token keyword">int</span> row<span class="token punctuation">,</span> <span class="token keyword">int</span> cell<span class="token punctuation">,</span> <span class="token class-name">String</span> result<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token class-name">ExcelReader</span><span class="token punctuation">.</span><span class="token function">writeCellValue</span><span class="token punctuation">(</span>FILE1<span class="token punctuation">,</span> SHEET1<span class="token punctuation">,</span> row<span class="token punctuation">,</span> cell<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getDataJSON</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">String</span> param<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">JsonReader</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>JSON1<span class="token punctuation">,</span> index<span class="token punctuation">,</span> param<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-declarar-los-params" tabindex="-1"><a class="header-anchor" href="#_3-declarar-los-params" aria-hidden="true">#</a> 3. Declarar los Params</h3>
<p>Los params hacen referencia los encabezados del excel o a los key del json.</p>
<p>Ubicación: <code v-pre>src/test/java/collection/params</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">collection<span class="token punctuation">.</span>params</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UsersParams</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> COL_NAME <span class="token operator">=</span> <span class="token string">"Name"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> COL_USERNAME <span class="token operator">=</span> <span class="token string">"Username"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> COL_EMAIL <span class="token operator">=</span> <span class="token string">"Email"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> COL_STREET <span class="token operator">=</span> <span class="token string">"Street"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> COL_CITY <span class="token operator">=</span> <span class="token string">"City"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> COL_ZIPCODE <span class="token operator">=</span> <span class="token string">"Zipcode"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> COL_PHONE <span class="token operator">=</span> <span class="token string">"Phone"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-crear-los-datos-dinamicos" tabindex="-1"><a class="header-anchor" href="#_4-crear-los-datos-dinamicos" aria-hidden="true">#</a> 4. Crear los datos dinamicos</h3>
<p>Ubicación: <code v-pre>src/test/java/collection/api</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">collection<span class="token punctuation">.</span>api</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">collection<span class="token punctuation">.</span>helpers<span class="token punctuation">.</span></span><span class="token class-name">Hook</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">collection<span class="token punctuation">.</span>params<span class="token punctuation">.</span></span><span class="token class-name">UsersParams</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>json<span class="token punctuation">.</span>simple<span class="token punctuation">.</span></span><span class="token class-name">JSONObject</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Users</span> <span class="token keyword">extends</span> <span class="token class-name">Hook</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">UsersParams</span> up<span class="token punctuation">;</span>

    <span class="token comment">//Especial para Excel</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">JSONObject</span> <span class="token function">data</span><span class="token punctuation">(</span><span class="token class-name">String</span> cp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> NAME     <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>cp<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>up<span class="token punctuation">.</span>COL_NAME<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> USERNAME <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>cp<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>up<span class="token punctuation">.</span>COL_USERNAME<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> EMAIL    <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>cp<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>up<span class="token punctuation">.</span>COL_EMAIL<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> STREET   <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>cp<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>up<span class="token punctuation">.</span>COL_STREET<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> CITY     <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>cp<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>up<span class="token punctuation">.</span>COL_CITY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> ZIPCODE  <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>cp<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>up<span class="token punctuation">.</span>COL_ZIPCODE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> PHONE    <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>cp<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>up<span class="token punctuation">.</span>COL_PHONE<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">JSONObject</span> <span class="token class-name">JSAddress</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JSAddress</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"street"</span><span class="token punctuation">,</span> STREET<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JSAddress</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"city"</span><span class="token punctuation">,</span> CITY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JSAddress</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"zipcode"</span><span class="token punctuation">,</span> ZIPCODE<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">JSONObject</span> jsonData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jsonData<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> NAME<span class="token punctuation">)</span><span class="token punctuation">;</span>
        jsonData<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> USERNAME<span class="token punctuation">)</span><span class="token punctuation">;</span>
        jsonData<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"email"</span><span class="token punctuation">,</span> EMAIL<span class="token punctuation">)</span><span class="token punctuation">;</span>
        jsonData<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"address"</span><span class="token punctuation">,</span> <span class="token class-name">JSAddress</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jsonData<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"phone"</span><span class="token punctuation">,</span> PHONE<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> jsonData<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//Especial para JSON</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">JSONObject</span> <span class="token function">data2</span><span class="token punctuation">(</span><span class="token class-name">String</span> cp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>cp<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> NAME     <span class="token operator">=</span> <span class="token function">getDataJSON</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> up<span class="token punctuation">.</span>COL_NAME<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> USERNAME <span class="token operator">=</span> <span class="token function">getDataJSON</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> up<span class="token punctuation">.</span>COL_USERNAME<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> EMAIL    <span class="token operator">=</span> <span class="token function">getDataJSON</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> up<span class="token punctuation">.</span>COL_EMAIL<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> STREET   <span class="token operator">=</span> <span class="token function">getDataJSON</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> up<span class="token punctuation">.</span>COL_STREET<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> CITY     <span class="token operator">=</span> <span class="token function">getDataJSON</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> up<span class="token punctuation">.</span>COL_CITY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> ZIPCODE  <span class="token operator">=</span> <span class="token function">getDataJSON</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> up<span class="token punctuation">.</span>COL_ZIPCODE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> PHONE    <span class="token operator">=</span> <span class="token function">getDataJSON</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> up<span class="token punctuation">.</span>COL_PHONE<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">JSONObject</span> <span class="token class-name">JSAddress</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JSAddress</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"street"</span><span class="token punctuation">,</span> STREET<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JSAddress</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"city"</span><span class="token punctuation">,</span> CITY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JSAddress</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"zipcode"</span><span class="token punctuation">,</span> ZIPCODE<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">JSONObject</span> jsonData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jsonData<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> NAME<span class="token punctuation">)</span><span class="token punctuation">;</span>
        jsonData<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> USERNAME<span class="token punctuation">)</span><span class="token punctuation">;</span>
        jsonData<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"email"</span><span class="token punctuation">,</span> EMAIL<span class="token punctuation">)</span><span class="token punctuation">;</span>
        jsonData<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"address"</span><span class="token punctuation">,</span> <span class="token class-name">JSAddress</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jsonData<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"phone"</span><span class="token punctuation">,</span> PHONE<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> jsonData<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-configurar-los-test" tabindex="-1"><a class="header-anchor" href="#_5-configurar-los-test" aria-hidden="true">#</a> 5. Configurar los Test</h3>
<p>Hay dos formas de configurar los runner de los test uno unitario o todo los test.</p>
<p>Ubicación: <code v-pre>src/test/java/collection/tests</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">collection<span class="token punctuation">.</span>tests</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>intuit<span class="token punctuation">.</span>karate<span class="token punctuation">.</span>junit5<span class="token punctuation">.</span></span><span class="token class-name">Karate</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">UsersRunner</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Karate.Test</span>
    <span class="token class-name">Karate</span> <span class="token class-name">UsersRunner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Karate</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span> <span class="token string">"classpath:resources/features/Users.feature"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">relativeTo</span><span class="token punctuation">(</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ubicación: <code v-pre>src/test/java/collection/runner</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">collection<span class="token punctuation">.</span>tests</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>intuit<span class="token punctuation">.</span>karate<span class="token punctuation">.</span>junit5<span class="token punctuation">.</span></span><span class="token class-name">Karate</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">UsersRunner</span> <span class="token punctuation">{</span>

<span class="token keyword">package</span> <span class="token namespace">collection<span class="token punctuation">.</span>runner</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>intuit<span class="token punctuation">.</span>karate<span class="token punctuation">.</span></span><span class="token class-name">Results</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>intuit<span class="token punctuation">.</span>karate<span class="token punctuation">.</span></span><span class="token class-name">Runner</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">collection<span class="token punctuation">.</span>utility<span class="token punctuation">.</span></span><span class="token class-name">CucumberReport</span><span class="token punctuation">.</span><span class="token static">generateReport</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestRunner</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testParallel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Results</span> results <span class="token operator">=</span> <span class="token class-name">Runner</span><span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">"classpath:resources/features/users.feature"</span>
            <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">outputCucumberJson</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">outputHtmlReport</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">parallel</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">generateReport</span><span class="token punctuation">(</span>results<span class="token punctuation">.</span><span class="token function">getReportDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
