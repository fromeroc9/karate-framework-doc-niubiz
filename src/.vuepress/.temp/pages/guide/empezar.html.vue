<template><div><h2 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion" aria-hidden="true">#</a> Instalación</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># clone project</span>
<span class="token operator">&lt;</span>username<span class="token operator">></span> <span class="token operator">=</span> Usuario que tenga acceso al repositorio 

<span class="token function">git</span> clone https://<span class="token operator">&lt;</span>username<span class="token operator">></span>@bitbucket.org/VisaNet_TI/framework-karate.git
<span class="token comment"># access folder</span>
<span class="token builtin class-name">cd</span> framework-karate

mvn <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ejecucion-gui" tabindex="-1"><a class="header-anchor" href="#ejecucion-gui" aria-hidden="true">#</a> Ejecución GUI</h2>
<p>Ejecución de pruebas a travez del IDE.</p>
<p>Podemos ejecuctar los diferentes escenario por separado o inicializar todo el feature para su ejecución.</p>
<p><strong>.Feature</strong> Ejecución individual</p>
<p><img src="/images/empezar/1.png" alt="Ejecución"></p>
<p><strong>Test Unit</strong> Ejecución por cada feature</p>
<p><img src="/images/empezar/2.png" alt="Ejecución"></p>
<p><strong>Test Runner</strong> Ejecución todos los features</p>
<p><img src="/images/empezar/3.png" alt="Ejecución"></p>
<h2 id="ejecucion-cli" tabindex="-1"><a class="header-anchor" href="#ejecucion-cli" aria-hidden="true">#</a> Ejecución CLI</h2>
<p>La ejecución CLI es similar a la ejecución a la ejecución del IDE</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> framework-karate

<span class="token comment"># To run scenarios with @debug1 and @debug2:</span>
<span class="token comment"># Old version:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">"-Dkarate.options=--tags @debug1 --tags @debug2"</span>

<span class="token comment"># Actual version:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">"-Dkarate.options=--tags '@debug1 and @debug2'"</span>

<span class="token comment"># To run scenarios with @debug1 or @debug2:</span>
<span class="token comment">#Old version:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">"-Dkarate.options=--tags @debug1, @debug2"</span>

<span class="token comment">#Actual version:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">"-Dkarate.options=--tags '@debug1 or @debug2'"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="estructura-de-proyecto" tabindex="-1"><a class="header-anchor" href="#estructura-de-proyecto" aria-hidden="true">#</a> Estructura de Proyecto</h2>
<p>Estructura de carpeta del framework trabajado.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>┌─ src
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> Global</h4>
<table>
<thead>
<tr>
<th>Carpeta</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>src/main/java/collection</td>
<td>Carpeta donde se almacena utilitarios, parametros, lectura de excel y json</td>
</tr>
<tr>
<td>src/main/java/resources</td>
<td>Carpeta donde se almacena features, data, body raw</td>
</tr>
<tr>
<td>target</td>
<td>Carpeta donde se genera los reportes html</td>
</tr>
</tbody>
</table>
<h4 id="java-collection" tabindex="-1"><a class="header-anchor" href="#java-collection" aria-hidden="true">#</a> Java/Collection</h4>
<table>
<thead>
<tr>
<th>Carpeta</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>api</td>
<td>Especializado para configurar metodos variables como data, url, save</td>
</tr>
<tr>
<td>helpers</td>
<td>Especializado para configurar la lectura de json y excel</td>
</tr>
<tr>
<td>params</td>
<td>Creado para almacenar los locadores o selectores del excel o json</td>
</tr>
<tr>
<td>runner</td>
<td>Especializado la ejecución de los casos en paralelo</td>
</tr>
<tr>
<td>tests</td>
<td>Especializado para la ejecución unitario de los casos</td>
</tr>
<tr>
<td>utily</td>
<td>Almacena diferentes herramientas necesarios que el framework necesita como lectura de excel, creación de reportes, etc.</td>
</tr>
</tbody>
</table>
<h4 id="java-resource" tabindex="-1"><a class="header-anchor" href="#java-resource" aria-hidden="true">#</a> Java/Resource</h4>
<table>
<thead>
<tr>
<th>Carpeta</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>feature</td>
<td>Especializado para la creación de <code v-pre>.feture</code> (escenarios en Gherkin)</td>
</tr>
<tr>
<td>fixtures</td>
<td>Especializado para almacer los archivos excel y json</td>
</tr>
<tr>
<td>request</td>
<td>Especializado para generar request manuales</td>
</tr>
</tbody>
</table>
<h4 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> Target</h4>
<table>
<thead>
<tr>
<th>Carpeta</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>cucumber-html-reports</td>
<td>Genera reporte en cucumber</td>
</tr>
<tr>
<td>karate-reports</td>
<td>Genera reporte en karate</td>
</tr>
<tr>
<td>generated-sources</td>
<td>Genera diferentes anotaciones</td>
</tr>
<tr>
<td>karate.log</td>
<td>Log de la ejecución</td>
</tr>
</tbody>
</table>
</div></template>
