import{_ as e,o as a,c as n,d as s}from"./app.6fdd3d19.js";var t="/karate-framework-doc-niubiz/images/empezar/1.png",r="/karate-framework-doc-niubiz/images/empezar/2.png",i="/karate-framework-doc-niubiz/images/empezar/3.png";const d={},c=s(`<h2 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion" aria-hidden="true">#</a> Instalaci\xF3n</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># clone project</span>
<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token operator">=</span> Usuario que tenga acceso al repositorio 

<span class="token function">git</span> clone https://<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>@bitbucket.org/VisaNet_TI/framework-karate.git
<span class="token comment"># access folder</span>
<span class="token builtin class-name">cd</span> framework-karate

mvn <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ejecucion-gui" tabindex="-1"><a class="header-anchor" href="#ejecucion-gui" aria-hidden="true">#</a> Ejecuci\xF3n GUI</h2><p>Ejecuci\xF3n de pruebas a travez del IDE.</p><p>Podemos ejecuctar los diferentes escenario por separado o inicializar todo el feature para su ejecuci\xF3n.</p><p><strong>.Feature</strong> Ejecuci\xF3n individual</p><p><img src="`+t+'" alt="Ejecuci\xF3n"></p><p><strong>Test Unit</strong> Ejecuci\xF3n por cada feature</p><p><img src="'+r+'" alt="Ejecuci\xF3n"></p><p><strong>Test Runner</strong> Ejecuci\xF3n todos los features</p><p><img src="'+i+`" alt="Ejecuci\xF3n"></p><h2 id="ejecucion-cli" tabindex="-1"><a class="header-anchor" href="#ejecucion-cli" aria-hidden="true">#</a> Ejecuci\xF3n CLI</h2><p>La ejecuci\xF3n CLI es similar a la ejecuci\xF3n a la ejecuci\xF3n del IDE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> framework-karate

<span class="token comment"># To run scenarios with @debug1 and @debug2:</span>
<span class="token comment"># Old version:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">&quot;-Dkarate.options=--tags @debug1 --tags @debug2&quot;</span>

<span class="token comment"># Actual version:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">&quot;-Dkarate.options=--tags &#39;@debug1 and @debug2&#39;&quot;</span>

<span class="token comment"># To run scenarios with @debug1 or @debug2:</span>
<span class="token comment">#Old version:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">&quot;-Dkarate.options=--tags @debug1, @debug2&quot;</span>

<span class="token comment">#Actual version:</span>
mvn <span class="token builtin class-name">test</span> <span class="token string">&quot;-Dkarate.options=--tags &#39;@debug1 or @debug2&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="estructura-de-proyecto" tabindex="-1"><a class="header-anchor" href="#estructura-de-proyecto" aria-hidden="true">#</a> Estructura de Proyecto</h2><p>Estructura de carpeta del framework trabajado.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u250C\u2500 src
|  \u2514\u2500 main
|     \u2514\u2500 java
|        \u251C\u2500 collection
|        |  \u251C\u2500 api
|        |  \u251C\u2500 helpers
|        |  |  \u2514\u2500 Hook.java
|        |  \u251C\u2500 params
|        |  \u251C\u2500 runner
|        |  |  \u2514\u2500 TestRunner.java
|        |  \u251C\u2500 tests
|        |  \u2514\u2500 utility
|        |     \u251C\u2500 CucumberReport.java
|        |     \u251C\u2500 ExcelReader.java
|        |     \u251C\u2500 FileHelper.java
|        |     \u2514\u2500 JsonReader.java
|        \u251C\u2500 resources
|        |  \u251C\u2500 features
|        |  \u251C\u2500 fixtures
|        |  |  \u251C\u2500 data.json
|        |  |  \u2514\u2500 data.xlsx
|        |  \u2514\u2500 request
|        \u251C\u2500 karate.config.js
|        \u251C\u2500 log4j2.properties
|        \u2514\u2500 logback-test.xml
\u2514\u2500 target
   \u251C\u2500 cucumber-html-reports
   \u251C\u2500 karate-reports
   \u251C\u2500 generated-sources
   \u2514\u2500 karate.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> Global</h4><table><thead><tr><th>Carpeta</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>src/main/java/collection</td><td>Carpeta donde se almacena utilitarios, parametros, lectura de excel y json</td></tr><tr><td>src/main/java/resources</td><td>Carpeta donde se almacena features, data, body raw</td></tr><tr><td>target</td><td>Carpeta donde se genera los reportes html</td></tr></tbody></table><h4 id="java-collection" tabindex="-1"><a class="header-anchor" href="#java-collection" aria-hidden="true">#</a> Java/Collection</h4><table><thead><tr><th>Carpeta</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>api</td><td>Especializado para configurar metodos variables como data, url, save</td></tr><tr><td>helpers</td><td>Especializado para configurar la lectura de json y excel</td></tr><tr><td>params</td><td>Creado para almacenar los locadores o selectores del excel o json</td></tr><tr><td>runner</td><td>Especializado la ejecuci\xF3n de los casos en paralelo</td></tr><tr><td>tests</td><td>Especializado para la ejecuci\xF3n unitario de los casos</td></tr><tr><td>utily</td><td>Almacena diferentes herramientas necesarios que el framework necesita como lectura de excel, creaci\xF3n de reportes, etc.</td></tr></tbody></table><h4 id="java-resource" tabindex="-1"><a class="header-anchor" href="#java-resource" aria-hidden="true">#</a> Java/Resource</h4><table><thead><tr><th>Carpeta</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>feature</td><td>Especializado para la creaci\xF3n de <code>.feture</code> (escenarios en Gherkin)</td></tr><tr><td>fixtures</td><td>Especializado para almacer los archivos excel y json</td></tr><tr><td>request</td><td>Especializado para generar request manuales</td></tr></tbody></table><h4 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> Target</h4><table><thead><tr><th>Carpeta</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>cucumber-html-reports</td><td>Genera reporte en cucumber</td></tr><tr><td>karate-reports</td><td>Genera reporte en karate</td></tr><tr><td>generated-sources</td><td>Genera diferentes anotaciones</td></tr><tr><td>karate.log</td><td>Log de la ejecuci\xF3n</td></tr></tbody></table>`,25),l=[c];function o(u,p){return a(),n("div",null,l)}var m=e(d,[["render",o],["__file","empezar.html.vue"]]);export{m as default};
