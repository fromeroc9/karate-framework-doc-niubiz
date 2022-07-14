<template><div><h2 id="introduccion" tabindex="-1"><a class="header-anchor" href="#introduccion" aria-hidden="true">#</a> Introducción</h2>
<p>Este proyecto abarca a la utilización del framework karate para las pruebas de servicios, creando producto util y usable para desarrollar diferentes tipos de pruebas.</p>
<p>Un framework de automatización nos permite tener un conjunto de pautas o reglas para la generación de casos de prueba y estandarizar la ejecución de pruebas tales como UI, API,entre otras.</p>
<h2 id="karate-vs-http-client" tabindex="-1"><a class="header-anchor" href="#karate-vs-http-client" aria-hidden="true">#</a> Karate vs Http Client</h2>
<table>
<thead>
<tr>
<th></th>
<th>Karate</th>
<th>Http Client</th>
</tr>
</thead>
<tbody>
<tr>
<td>BDD Sintaxis</td>
<td>Si</td>
<td>Si</td>
</tr>
<tr>
<td>Basado en JVM</td>
<td>Si</td>
<td>Si</td>
</tr>
<tr>
<td>Asíncrono</td>
<td>Si</td>
<td>Si</td>
</tr>
<tr>
<td>Manejo de datos dinámicos</td>
<td>Muy Complejo</td>
<td>Fácil</td>
</tr>
<tr>
<td>Lenguaje</td>
<td>Karate Script (Gherkin)</td>
<td>Java</td>
</tr>
<tr>
<td>Desarrollo</td>
<td>Simple</td>
<td>Complejo</td>
</tr>
<tr>
<td>Automatización Nivel 1: Validación solo status o código de respuesta</td>
<td>Si</td>
<td>Si</td>
</tr>
<tr>
<td>Automatización Nivel 2: Validación de response, tag o etiqueta y realizar asserts predeterminados</td>
<td>Complejo</td>
<td>Complejo</td>
</tr>
<tr>
<td>Automatización Nivel 3: Validación de flujos end to end a nivel back-end (Pruebas secuenciales)</td>
<td>Muy Complejo</td>
<td>Fácil</td>
</tr>
</tbody>
</table>
<!-- ![Desarrollo](https://www.mobilelive.ca/wp-content/uploads/2020/11/42-1.jpg) -->
<h2 id="framework-tecnico" tabindex="-1"><a class="header-anchor" href="#framework-tecnico" aria-hidden="true">#</a> Framework Técnico</h2>
<p><img src="/images/overview/framework-tecnico.png" alt="Framework Tecnico"></p>
<ol>
<li>Uso de <strong>MAVEN</strong> para las dependencias y librerías.</li>
<li>Uso de <strong>PAGE OBJECT MODEL</strong>, para la reutilización de componentes.</li>
<li>Uso de <strong>CUCUMBER (Gherkin)</strong> para la capa usuario y entender el proceso de automatización.</li>
<li>Uso del lenguaje de programación <strong>JAVA</strong> para la construcción de los scripts.</li>
<li>Uso de <strong>KEYWORD DRIVEN</strong>, para la asignación de diversas acciones dentro de la ejecución.</li>
<li>Uso de <strong>EXCEL, JSON</strong> para el manejo de los datos a nivel usuario ejecutor</li>
</ol>
<h2 id="tipos-de-framework" tabindex="-1"><a class="header-anchor" href="#tipos-de-framework" aria-hidden="true">#</a> Tipos de Framework</h2>
<ol>
<li><strong>Data Driven:</strong> Son aquellos en que los datos requeridos para la ejecución de las pruebas​.</li>
<li><strong>BDD:</strong> Utilizan lenguaje natural, no técnico, para la especificación de las pruebas.​</li>
<li><strong>Keyword driven:</strong> Identifican una serie de palabras clave y luego se asigna cada una de éstas a una serie de acciones​.</li>
<li><strong>Modular:</strong> Esta separación nos permite una mejor mantenibilidad y actualización de las pruebas.​</li>
<li><strong>Híbrido:</strong> Combinación de diversos frameworks para optimización.</li>
</ol>
<h2 id="temas-investigados" tabindex="-1"><a class="header-anchor" href="#temas-investigados" aria-hidden="true">#</a> Temas Investigados</h2>
<ul>
<li>Cucumber</li>
<li>BDD</li>
<li>Modular</li>
<li>JUnit 5</li>
<li>Karate API Testing</li>
<li>Page Object Model</li>
<li>Browser Driver</li>
<li>Data Driven Testing</li>
<li>Keyword Drive</li>
<li>Plugins</li>
<li>Report Portal IO</li>
<li>Apache POI</li>
</ul>
<h2 id="requisitos-previos" tabindex="-1"><a class="header-anchor" href="#requisitos-previos" aria-hidden="true">#</a> Requisitos Previos</h2>
<p>Antes de utilizar este proyecto, solo necesita tener JDK 8 y Maven instalado en su computadora.</p>
<p><a href="https://maven.apache.org/download.cgi" target="_blank" rel="noopener noreferrer">https://maven.apache.org/download.cgi<ExternalLinkIcon/></a></p>
<p><a href="https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html" target="_blank" rel="noopener noreferrer">https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html<ExternalLinkIcon/></a></p>
</div></template>
