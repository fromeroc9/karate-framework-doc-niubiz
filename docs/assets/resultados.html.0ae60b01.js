import{_ as e,r as o,o as p,c as l,a as s,b as t,d as i,e as n}from"./app.776a476c.js";var c="/karate-framework-doc-niubiz/images/resultados/karate1.png",u="/karate-framework-doc-niubiz/images/resultados/karate2.png",r="/karate-framework-doc-niubiz/images/resultados/cucumber1.png",k="/karate-framework-doc-niubiz/images/resultados/cucumber2.png";const m={},d=i(`<h2 id="resultados-cli" tabindex="-1"><a class="header-anchor" href="#resultados-cli" aria-hidden="true">#</a> Resultados CLI</h2><p>Al ejecutar en cli podemos elegir que feature a ejecutar para esta prueba estamos dejando ejecutar los dos feature.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">14</span>:59:29.889 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate.Suite - <span class="token punctuation">[</span>config<span class="token punctuation">]</span> classpath:karate-config.js
<span class="token number">14</span>:59:31.367 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">&gt;</span> GET https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept: application/json
<span class="token number">1</span> <span class="token operator">&gt;</span> Content-Type: application/json
<span class="token number">1</span> <span class="token operator">&gt;</span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">&gt;</span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">&gt;</span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept-Encoding: gzip,deflate


<span class="token number">14</span>:59:31.662 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - response <span class="token function">time</span> <span class="token keyword">in</span> milliseconds: <span class="token number">267</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">200</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Date: Tue, <span class="token number">12</span> Jul <span class="token number">2022</span> <span class="token number">19</span>:59:31 GMT
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token number">1</span> <span class="token operator">&lt;</span> Transfer-Encoding: chunked
<span class="token number">1</span> <span class="token operator">&lt;</span> Connection: keep-alive
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Powered-By: Express
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Limit: <span class="token number">1000</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Remaining: <span class="token number">999</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Reset: <span class="token number">1656073257</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Vary: Origin, Accept-Encoding
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Credentials: <span class="token boolean">true</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Cache-Control: max-age<span class="token operator">=</span><span class="token number">43200</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Pragma: no-cache
<span class="token number">1</span> <span class="token operator">&lt;</span> Expires: -1
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Content-Type-Options: nosniff
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">&quot;160d-1eMSsxeJRfnVLRBmYJSbCiJZ1qQ&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: HIT
<span class="token number">1</span> <span class="token operator">&lt;</span> Age: <span class="token number">21645</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">&quot;https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">&quot;endpoints&quot;</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BZik5ktEOiL%2BhA0hLCiNXii6Mxtgkdp0iFVfkOfUMCSW5%2FJpNnBFTluM0gVDfshoUQkgg1OxviSmzFll0CZyE2LVH5MaO6unaG%2FMWb5BIXxh9VBGuSh5syX31TBY55ml46VdKv0h6A%2Fpwz3j0O39&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">&quot;group&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">&quot;success_fraction&quot;</span>:0,<span class="token string">&quot;report_to&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c1eaf399537-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Leanne Graham&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Bret&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Sincere@april.biz&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Kulas Light&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Apt. 556&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Gwenborough&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;92998-3874&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-37.3159&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;81.1496&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1-770-736-8031 x56442&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;hildegard.org&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Romaguera-Crona&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Multi-layered client-server neural-net&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;harness real-time e-markets&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Ervin Howell&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Antonette&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Shanna@melissa.tv&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Victor Plains&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Suite 879&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Wisokyburgh&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;90566-7771&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-43.9509&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-34.4618&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;010-692-6593 x09125&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;anastasia.net&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Deckow-Crist&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Proactive didactic contingency&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;synergize scalable supply-chains&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Clementine Bauch&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Samantha&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Nathan@yesenia.net&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Douglas Extension&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Suite 847&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;McKenziehaven&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;59590-4157&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-68.6102&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-47.0653&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1-463-123-4447&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ramiro.info&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Romaguera-Jacobson&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Face to face bifurcated interface&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;e-enable strategic applications&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">4</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Patricia Lebsack&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Karianne&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Julianne.OConner@kory.org&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Hoeger Mall&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Apt. 692&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;South Elvis&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;53919-4257&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;29.4572&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-164.2990&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;493-170-9623 x156&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;kale.biz&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Robel-Corkery&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Multi-tiered zero tolerance productivity&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;transition cutting-edge web services&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Chelsey Dietrich&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Kamren&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Lucio_Hettinger@annie.ca&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Skiles Walks&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Suite 351&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Roscoeview&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;33263&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-31.8129&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;62.5342&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;(254)954-1289&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;demarco.info&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Keebler LLC&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;User-centric fault-tolerant solution&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;revolutionize end-to-end systems&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">6</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Mrs. Dennis Schulist&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Leopoldo_Corkery&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Karley_Dach@jasper.info&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Norberto Crossing&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Apt. 950&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;South Christy&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;23505-1337&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-71.4197&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;71.7478&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1-477-935-8478 x6430&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ola.org&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Considine-Lockman&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Synchronised bottom-line interface&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;e-enable innovative applications&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">7</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Kurtis Weissnat&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Elwyn.Skiles&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Telly.Hoeger@billy.biz&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Rex Trail&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Suite 280&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Howemouth&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;58804-1099&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;24.8918&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;21.8984&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;210.067.6132&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;elvis.io&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Johns Group&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Configurable multimedia task-force&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;generate enterprise e-tailers&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Nicholas Runolfsdottir V&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Maxime_Nienow&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Sherwood@rosamond.me&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Ellsworth Summit&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Suite 729&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Aliyaview&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;45169&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-14.3990&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-120.7677&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;586.493.6943 x140&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;jacynthe.com&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Abernathy Group&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Implemented secondary concept&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;e-enable extensible e-tailers&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">9</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Glenna Reichert&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Delphine&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Chaim_McDermott@dana.io&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Dayna Park&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Suite 449&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Bartholomebury&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;76495-3109&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;24.6463&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-168.8889&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;(775)976-6794 x41206&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;conrad.com&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Yost and Sons&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Switchable contextually-based project&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;aggregate real-time technologies&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Clementina DuBuque&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Moriah.Stanton&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Rey.Padberg@karina.biz&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Kattie Turnpike&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Suite 198&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Lebsackbury&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;31428-2261&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-38.2386&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;57.2232&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;024-648-3804&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ambrose.net&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Hoeger LLC&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Centralized empowering task-force&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;target end-to-end models&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>


<span class="token number">14</span>:59:31.693 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  com.intuit.karate - did not evaluate to map <span class="token function">id</span> <span class="token operator">=</span> userID: <span class="token punctuation">[</span>type: NUMBER, value: <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token number">14</span>:59:31.695 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">&gt;</span> GET https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept: application/json
<span class="token number">1</span> <span class="token operator">&gt;</span> Content-Type: application/json
<span class="token number">1</span> <span class="token operator">&gt;</span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">&gt;</span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">&gt;</span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept-Encoding: gzip,deflate


<span class="token number">14</span>:59:31.756 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - response <span class="token function">time</span> <span class="token keyword">in</span> milliseconds: <span class="token number">58</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">200</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Date: Tue, <span class="token number">12</span> Jul <span class="token number">2022</span> <span class="token number">19</span>:59:31 GMT
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token number">1</span> <span class="token operator">&lt;</span> Transfer-Encoding: chunked
<span class="token number">1</span> <span class="token operator">&lt;</span> Connection: keep-alive
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Powered-By: Express
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Limit: <span class="token number">1000</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Remaining: <span class="token number">999</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Reset: <span class="token number">1656073257</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Vary: Origin, Accept-Encoding
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Credentials: <span class="token boolean">true</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Cache-Control: max-age<span class="token operator">=</span><span class="token number">43200</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Pragma: no-cache
<span class="token number">1</span> <span class="token operator">&lt;</span> Expires: -1
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Content-Type-Options: nosniff
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">&quot;160d-1eMSsxeJRfnVLRBmYJSbCiJZ1qQ&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: HIT
<span class="token number">1</span> <span class="token operator">&lt;</span> Age: <span class="token number">21645</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">&quot;https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">&quot;endpoints&quot;</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FhLP2ubh9uN2DYD5xylXEvcztlFeGopSPxjJBFIsZNaj7VsPVYhMlUDOQNv6Crk5BxRxQD%2BK9uIDceVNxKmwTKzXZrPOmobhny6a8v0xoshIZcrlkmTg36eGyF2A4Mr1InczfiMSDd4suEiVeVji&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">&quot;group&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">&quot;success_fraction&quot;</span>:0,<span class="token string">&quot;report_to&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c1f7e60a28e-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Leanne Graham&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Bret&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Sincere@april.biz&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Kulas Light&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Apt. 556&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Gwenborough&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;92998-3874&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-37.3159&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;81.1496&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1-770-736-8031 x56442&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;hildegard.org&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Romaguera-Crona&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Multi-layered client-server neural-net&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;harness real-time e-markets&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Ervin Howell&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Antonette&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Shanna@melissa.tv&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Victor Plains&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Suite 879&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Wisokyburgh&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;90566-7771&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-43.9509&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-34.4618&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;010-692-6593 x09125&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;anastasia.net&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Deckow-Crist&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Proactive didactic contingency&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;synergize scalable supply-chains&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Clementine Bauch&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Samantha&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Nathan@yesenia.net&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Douglas Extension&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Suite 847&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;McKenziehaven&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;59590-4157&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-68.6102&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-47.0653&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1-463-123-4447&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ramiro.info&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Romaguera-Jacobson&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Face to face bifurcated interface&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;e-enable strategic applications&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">4</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Patricia Lebsack&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Karianne&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Julianne.OConner@kory.org&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Hoeger Mall&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Apt. 692&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;South Elvis&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;53919-4257&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;29.4572&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-164.2990&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;493-170-9623 x156&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;kale.biz&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Robel-Corkery&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Multi-tiered zero tolerance productivity&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;transition cutting-edge web services&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">5</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Chelsey Dietrich&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Kamren&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Lucio_Hettinger@annie.ca&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Skiles Walks&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Suite 351&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Roscoeview&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;33263&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-31.8129&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;62.5342&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;(254)954-1289&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;demarco.info&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Keebler LLC&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;User-centric fault-tolerant solution&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;revolutionize end-to-end systems&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">6</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Mrs. Dennis Schulist&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Leopoldo_Corkery&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Karley_Dach@jasper.info&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Norberto Crossing&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Apt. 950&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;South Christy&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;23505-1337&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-71.4197&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;71.7478&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1-477-935-8478 x6430&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ola.org&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Considine-Lockman&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Synchronised bottom-line interface&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;e-enable innovative applications&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">7</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Kurtis Weissnat&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Elwyn.Skiles&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Telly.Hoeger@billy.biz&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Rex Trail&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Suite 280&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Howemouth&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;58804-1099&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;24.8918&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;21.8984&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;210.067.6132&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;elvis.io&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Johns Group&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Configurable multimedia task-force&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;generate enterprise e-tailers&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Nicholas Runolfsdottir V&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Maxime_Nienow&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Sherwood@rosamond.me&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Ellsworth Summit&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Suite 729&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Aliyaview&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;45169&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-14.3990&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-120.7677&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;586.493.6943 x140&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;jacynthe.com&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Abernathy Group&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Implemented secondary concept&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;e-enable extensible e-tailers&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">9</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Glenna Reichert&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Delphine&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Chaim_McDermott@dana.io&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Dayna Park&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Suite 449&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Bartholomebury&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;76495-3109&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;24.6463&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-168.8889&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;(775)976-6794 x41206&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;conrad.com&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Yost and Sons&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Switchable contextually-based project&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;aggregate real-time technologies&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span>,
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Clementina DuBuque&quot;</span>,
    <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Moriah.Stanton&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Rey.Padberg@karina.biz&quot;</span>,
    <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Kattie Turnpike&quot;</span>,
      <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Suite 198&quot;</span>,
      <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Lebsackbury&quot;</span>,
      <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;31428-2261&quot;</span>,
      <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-38.2386&quot;</span>,
        <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;57.2232&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;024-648-3804&quot;</span>,
    <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ambrose.net&quot;</span>,
    <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Hoeger LLC&quot;</span>,
      <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Centralized empowering task-force&quot;</span>,
      <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;target end-to-end models&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>


<span class="token number">14</span>:59:31.784 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">&gt;</span> GET https://jsonplaceholder.typicode.com/users/1
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept: application/json
<span class="token number">1</span> <span class="token operator">&gt;</span> Content-Type: application/json
<span class="token number">1</span> <span class="token operator">&gt;</span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">&gt;</span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">&gt;</span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept-Encoding: gzip,deflate


<span class="token number">14</span>:59:31.843 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - response <span class="token function">time</span> <span class="token keyword">in</span> milliseconds: <span class="token number">58</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">200</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Date: Tue, <span class="token number">12</span> Jul <span class="token number">2022</span> <span class="token number">19</span>:59:31 GMT
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token number">1</span> <span class="token operator">&lt;</span> Transfer-Encoding: chunked
<span class="token number">1</span> <span class="token operator">&lt;</span> Connection: keep-alive
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Powered-By: Express
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Limit: <span class="token number">1000</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Remaining: <span class="token number">999</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Reset: <span class="token number">1657254520</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Vary: Origin, Accept-Encoding
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Credentials: <span class="token boolean">true</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Cache-Control: max-age<span class="token operator">=</span><span class="token number">43200</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Pragma: no-cache
<span class="token number">1</span> <span class="token operator">&lt;</span> Expires: -1
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Content-Type-Options: nosniff
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">&quot;1fd-+2Y3G3w049iSZtw5t1mzSnunngE&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: HIT
<span class="token number">1</span> <span class="token operator">&lt;</span> Age: <span class="token number">3084</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">&quot;https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">&quot;endpoints&quot;</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lJEe6cphr7pkBud4vKg4srqUY2h4YN%2FJbkdFhXntOSOxLPmodk2cyM7Cfqukvvgmu4rZlB592DwmiC1MuLu1LWECVuoF9tQrAc7wFp31eQNMkYcpvhACVqsMW0mcuDe7KcpEdv2c2cTVJgsUByNs&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">&quot;group&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">&quot;success_fraction&quot;</span>:0,<span class="token string">&quot;report_to&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c20082c954c-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Leanne Graham&quot;</span>,
  <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Bret&quot;</span>,
  <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Sincere@april.biz&quot;</span>,
  <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Kulas Light&quot;</span>,
    <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Apt. 556&quot;</span>,
    <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Gwenborough&quot;</span>,
    <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;92998-3874&quot;</span>,
    <span class="token string">&quot;geo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;lat&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;-37.3159&quot;</span>,
      <span class="token string">&quot;lng&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;81.1496&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1-770-736-8031 x56442&quot;</span>,
  <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;hildegard.org&quot;</span>,
  <span class="token string">&quot;company&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Romaguera-Crona&quot;</span>,
    <span class="token string">&quot;catchPhrase&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Multi-layered client-server neural-net&quot;</span>,
    <span class="token string">&quot;bs&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;harness real-time e-markets&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token number">14</span>:59:31.922 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">&gt;</span> POST https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept: application/json
<span class="token number">1</span> <span class="token operator">&gt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">&gt;</span> Content-Length: <span class="token number">188</span>
<span class="token number">1</span> <span class="token operator">&gt;</span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">&gt;</span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">&gt;</span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Joe DOe&quot;</span>,<span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Joe&quot;</span>,<span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;joe.doe@example.com&quot;</span>,<span class="token string">&quot;address&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Cuzco&quot;</span>,<span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Apt. 123&quot;</span>,<span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Lima&quot;</span>,<span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;15069&quot;</span><span class="token punctuation">}</span>,<span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;123456789&quot;</span>,<span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;google.com&quot;</span><span class="token punctuation">}</span>

<span class="token number">14</span>:59:32.164 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - response <span class="token function">time</span> <span class="token keyword">in</span> milliseconds: <span class="token number">241</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">201</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Date: Tue, <span class="token number">12</span> Jul <span class="token number">2022</span> <span class="token number">19</span>:59:32 GMT
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Length: <span class="token number">252</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Connection: keep-alive
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Powered-By: Express
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Limit: <span class="token number">1000</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Remaining: <span class="token number">999</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Reset: <span class="token number">1657656030</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Vary: Origin, X-HTTP-Method-Override, Accept-Encoding
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Credentials: <span class="token boolean">true</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Cache-Control: no-cache
<span class="token number">1</span> <span class="token operator">&lt;</span> Pragma: no-cache
<span class="token number">1</span> <span class="token operator">&lt;</span> Expires: -1
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Expose-Headers: Location
<span class="token number">1</span> <span class="token operator">&lt;</span> Location: http://jsonplaceholder.typicode.com/users/11
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Content-Type-Options: nosniff
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">&quot;fc-WV/6Q3D1HodhqaIb+3YEUm22dMc&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: DYNAMIC
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">&quot;https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">&quot;endpoints&quot;</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=f0kiuTcaMCVL1b7XTNSZ5A3DUFJvWcTN5lsbAePyNsGhLPynOW7p%2FJm%2F0vDDz6q8zOwZt6lFTHrMqAe%2Fl%2FAMjYqF90LZqWnjR2l%2B6lqv8e0KsS2ngmHlRM7sgLe70uI8eX7tBx%2B6o%2BlinRPJ2OjH&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">&quot;group&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">&quot;success_fraction&quot;</span>:0,<span class="token string">&quot;report_to&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c20dc469548-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Joe DOe&quot;</span>,
  <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Joe&quot;</span>,
  <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;joe.doe@example.com&quot;</span>,
  <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Cuzco&quot;</span>,
    <span class="token string">&quot;suite&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Apt. 123&quot;</span>,
    <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Lima&quot;</span>,
    <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;15069&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;123456789&quot;</span>,
  <span class="token string">&quot;website&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;google.com&quot;</span>,
  <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">11</span>
<span class="token punctuation">}</span>


<span class="token number">14</span>:59:32.185 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">&gt;</span> POST https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept: application/json
<span class="token number">1</span> <span class="token operator">&gt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">&gt;</span> Content-Length: <span class="token number">150</span>
<span class="token number">1</span> <span class="token operator">&gt;</span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">&gt;</span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">&gt;</span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Joe Doe&quot;</span>,<span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Joe&quot;</span>,<span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;joe.doe@example.com&quot;</span>,<span class="token string">&quot;address&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Cuzco 123&quot;</span>,<span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Lima&quot;</span>,<span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;15069&quot;</span><span class="token punctuation">}</span>,<span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;123456789&quot;</span><span class="token punctuation">}</span>

<span class="token number">14</span>:59:32.576 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - response <span class="token function">time</span> <span class="token keyword">in</span> milliseconds: <span class="token number">390</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">201</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Date: Tue, <span class="token number">12</span> Jul <span class="token number">2022</span> <span class="token number">19</span>:59:32 GMT
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Length: <span class="token number">204</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Connection: keep-alive
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Powered-By: Express
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Limit: <span class="token number">1000</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Remaining: <span class="token number">998</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Reset: <span class="token number">1657656030</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Vary: Origin, X-HTTP-Method-Override, Accept-Encoding
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Credentials: <span class="token boolean">true</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Cache-Control: no-cache
<span class="token number">1</span> <span class="token operator">&lt;</span> Pragma: no-cache
<span class="token number">1</span> <span class="token operator">&lt;</span> Expires: -1
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Expose-Headers: Location
<span class="token number">1</span> <span class="token operator">&lt;</span> Location: http://jsonplaceholder.typicode.com/users/11
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Content-Type-Options: nosniff
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">&quot;cc-wakgQm3ugfHJ9+C0kXvD1Jsjs8Y&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: DYNAMIC
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">&quot;https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">&quot;endpoints&quot;</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=D3vjunNZD4FDJTA%2Fl7Ns%2Fhsrc5LNtU1wBAVUmMzo1Zni0pAn9jVJxAy6i4v3zk2NPJ5iIpJ2m1VoHSKdSBJVf9ZWRz8Yvm%2FXhyK90pYs4dl%2BKJoyU0HKwI2S7kJGJnrYXao682xYgqxN27hJiXd4&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">&quot;group&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">&quot;success_fraction&quot;</span>:0,<span class="token string">&quot;report_to&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c228ede952e-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Joe Doe&quot;</span>,
  <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Joe&quot;</span>,
  <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;joe.doe@example.com&quot;</span>,
  <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Cuzco 123&quot;</span>,
    <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Lima&quot;</span>,
    <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;15069&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;123456789&quot;</span>,
  <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">11</span>
<span class="token punctuation">}</span>


<span class="token number">14</span>:59:33.105 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">&gt;</span> POST https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept: application/json
<span class="token number">1</span> <span class="token operator">&gt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">&gt;</span> Content-Length: <span class="token number">150</span>
<span class="token number">1</span> <span class="token operator">&gt;</span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">&gt;</span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">&gt;</span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">&quot;address&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;15069&quot;</span>,<span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Lima&quot;</span>,<span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Cuzco 123&quot;</span><span class="token punctuation">}</span>,<span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;123456789&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Joe Doe&quot;</span>,<span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;joe.doe@example.com&quot;</span>,<span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Joe&quot;</span><span class="token punctuation">}</span>

<span class="token number">14</span>:59:33.343 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - response <span class="token function">time</span> <span class="token keyword">in</span> milliseconds: <span class="token number">238</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">201</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Date: Tue, <span class="token number">12</span> Jul <span class="token number">2022</span> <span class="token number">19</span>:59:33 GMT
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Length: <span class="token number">204</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Connection: keep-alive
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Powered-By: Express
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Limit: <span class="token number">1000</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Remaining: <span class="token number">997</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Reset: <span class="token number">1657656030</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Vary: Origin, X-HTTP-Method-Override, Accept-Encoding
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Credentials: <span class="token boolean">true</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Cache-Control: no-cache
<span class="token number">1</span> <span class="token operator">&lt;</span> Pragma: no-cache
<span class="token number">1</span> <span class="token operator">&lt;</span> Expires: -1
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Expose-Headers: Location
<span class="token number">1</span> <span class="token operator">&lt;</span> Location: http://jsonplaceholder.typicode.com/users/11
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Content-Type-Options: nosniff
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">&quot;cc-z8G4eDmz/kYqQnBf78nxtj0J9O4&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: DYNAMIC
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">&quot;https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">&quot;endpoints&quot;</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oGnpk1hp9G5uVCEunQKvqB7MZvxyPHRvjjR3WCBKxQ8NG7jsbSVl8o%2FkaMm6XV6mDZIJ2fJKhAmeLjYTBTI4C9Kmi4AyAgqWxoGUYwA7n6P4n51OnTa295L8xgTQQmaym520OWSWt34jRZe%2Fyj5m&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">&quot;group&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">&quot;success_fraction&quot;</span>:0,<span class="token string">&quot;report_to&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c283e7c9522-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;15069&quot;</span>,
    <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Lima&quot;</span>,
    <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Cuzco 123&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;123456789&quot;</span>,
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Joe Doe&quot;</span>,
  <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;joe.doe@example.com&quot;</span>,
  <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Joe&quot;</span>,
  <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">11</span>
<span class="token punctuation">}</span>


<span class="token number">14</span>:59:33.468 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">&gt;</span> POST https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept: application/json
<span class="token number">1</span> <span class="token operator">&gt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">&gt;</span> Content-Length: <span class="token number">168</span>
<span class="token number">1</span> <span class="token operator">&gt;</span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">&gt;</span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">&gt;</span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">&quot;address&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;13045&quot;</span>,<span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Lima&quot;</span>,<span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Arequipa 122&quot;</span><span class="token punctuation">}</span>,<span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;987654321&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Carlos Rodriguez&quot;</span>,<span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;carlos.rdg@example.com&quot;</span>,<span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Carlos&quot;</span><span class="token punctuation">}</span>

<span class="token number">14</span>:59:33.720 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - response <span class="token function">time</span> <span class="token keyword">in</span> milliseconds: <span class="token number">252</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">201</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Date: Tue, <span class="token number">12</span> Jul <span class="token number">2022</span> <span class="token number">19</span>:59:33 GMT
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Length: <span class="token number">222</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Connection: keep-alive
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Powered-By: Express
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Limit: <span class="token number">1000</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Remaining: <span class="token number">996</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Reset: <span class="token number">1657656030</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Vary: Origin, X-HTTP-Method-Override, Accept-Encoding
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Credentials: <span class="token boolean">true</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Cache-Control: no-cache
<span class="token number">1</span> <span class="token operator">&lt;</span> Pragma: no-cache
<span class="token number">1</span> <span class="token operator">&lt;</span> Expires: -1
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Expose-Headers: Location
<span class="token number">1</span> <span class="token operator">&lt;</span> Location: http://jsonplaceholder.typicode.com/users/11
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Content-Type-Options: nosniff
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">&quot;de-pnPqX2/aWsc+Hiu5BG8cH9gYoj8&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: DYNAMIC
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">&quot;https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">&quot;endpoints&quot;</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HXqoaVvcc2ipW4RTyLzNUoZMliTU3%2BkZPyLyTFEsPQz%2BVMPPpOuphoReppktXzi7ccpNakI91X0PiE6kR5xySb2Ue39p422GqNPJNr95c52pysP8UNueJapYDvy%2FcF%2BDVr0jjWbvB5mGzFM8VIJ9&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">&quot;group&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">&quot;success_fraction&quot;</span>:0,<span class="token string">&quot;report_to&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c2a9d859549-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;13045&quot;</span>,
    <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Lima&quot;</span>,
    <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Arequipa 122&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;987654321&quot;</span>,
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Carlos Rodriguez&quot;</span>,
  <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;carlos.rdg@example.com&quot;</span>,
  <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Carlos&quot;</span>,
  <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">11</span>
<span class="token punctuation">}</span>


<span class="token number">14</span>:59:33.746 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">&gt;</span> POST https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept: application/json
<span class="token number">1</span> <span class="token operator">&gt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">&gt;</span> Content-Length: <span class="token number">150</span>
<span class="token number">1</span> <span class="token operator">&gt;</span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">&gt;</span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">&gt;</span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">&quot;address&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;15069&quot;</span>,<span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Lima&quot;</span>,<span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Cuzco 123&quot;</span><span class="token punctuation">}</span>,<span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;123456789&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Joe Doe&quot;</span>,<span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;joe.doe@example.com&quot;</span>,<span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Joe&quot;</span><span class="token punctuation">}</span>

<span class="token number">14</span>:59:34.002 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - response <span class="token function">time</span> <span class="token keyword">in</span> milliseconds: <span class="token number">256</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">201</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Date: Tue, <span class="token number">12</span> Jul <span class="token number">2022</span> <span class="token number">19</span>:59:34 GMT
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Length: <span class="token number">204</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Connection: keep-alive
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Powered-By: Express
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Limit: <span class="token number">1000</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Remaining: <span class="token number">995</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Reset: <span class="token number">1657656030</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Vary: Origin, X-HTTP-Method-Override, Accept-Encoding
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Credentials: <span class="token boolean">true</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Cache-Control: no-cache
<span class="token number">1</span> <span class="token operator">&lt;</span> Pragma: no-cache
<span class="token number">1</span> <span class="token operator">&lt;</span> Expires: -1
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Expose-Headers: Location
<span class="token number">1</span> <span class="token operator">&lt;</span> Location: http://jsonplaceholder.typicode.com/users/11
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Content-Type-Options: nosniff
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">&quot;cc-z8G4eDmz/kYqQnBf78nxtj0J9O4&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: DYNAMIC
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">&quot;https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">&quot;endpoints&quot;</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CzN0fjFBSGVLU1WD5mDUqQdbCT0SuR6LHbP%2Bqcv8LAbbHi2MO0oMQtmU34LBVfIWKI0rl%2FN9hLsacwdbI5ld4q0b0rWN326HiwGhIFbx%2BzRyjI1J5KxdntkVaC5aewt1%2FpRlQEFX1RpDB1bhjMnP&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">&quot;group&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">&quot;success_fraction&quot;</span>:0,<span class="token string">&quot;report_to&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c2c4e7c9536-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;15069&quot;</span>,
    <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Lima&quot;</span>,
    <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Cuzco 123&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;123456789&quot;</span>,
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Joe Doe&quot;</span>,
  <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;joe.doe@example.com&quot;</span>,
  <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Joe&quot;</span>,
  <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">11</span>
<span class="token punctuation">}</span>


<span class="token number">14</span>:59:34.016 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">&gt;</span> POST https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept: application/json
<span class="token number">1</span> <span class="token operator">&gt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">&gt;</span> Content-Length: <span class="token number">168</span>
<span class="token number">1</span> <span class="token operator">&gt;</span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">&gt;</span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">&gt;</span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">&gt;</span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">&quot;address&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;13045&quot;</span>,<span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Lima&quot;</span>,<span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Arequipa 122&quot;</span><span class="token punctuation">}</span>,<span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;987654321&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Carlos Rodriguez&quot;</span>,<span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;carlos.rdg@example.com&quot;</span>,<span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Carlos&quot;</span><span class="token punctuation">}</span>

<span class="token number">14</span>:59:34.416 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - response <span class="token function">time</span> <span class="token keyword">in</span> milliseconds: <span class="token number">399</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">201</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Date: Tue, <span class="token number">12</span> Jul <span class="token number">2022</span> <span class="token number">19</span>:59:34 GMT
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token number">1</span> <span class="token operator">&lt;</span> Content-Length: <span class="token number">222</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Connection: keep-alive
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Powered-By: Express
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Limit: <span class="token number">1000</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Remaining: <span class="token number">994</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Ratelimit-Reset: <span class="token number">1657656030</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Vary: Origin, X-HTTP-Method-Override, Accept-Encoding
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Allow-Credentials: <span class="token boolean">true</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Cache-Control: no-cache
<span class="token number">1</span> <span class="token operator">&lt;</span> Pragma: no-cache
<span class="token number">1</span> <span class="token operator">&lt;</span> Expires: -1
<span class="token number">1</span> <span class="token operator">&lt;</span> Access-Control-Expose-Headers: Location
<span class="token number">1</span> <span class="token operator">&lt;</span> Location: http://jsonplaceholder.typicode.com/users/11
<span class="token number">1</span> <span class="token operator">&lt;</span> X-Content-Type-Options: nosniff
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">&quot;de-pnPqX2/aWsc+Hiu5BG8cH9gYoj8&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: DYNAMIC
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">&quot;https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct&quot;</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">&quot;endpoints&quot;</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LODjVk3kdKZRqzAfh534OYku94v%2BldSIEsCCRNGxWlACJWm3mbEeRiUmyZc85buy4qwdrStkhJx9zQcsNsSgWDalYkA03Z7vZo0qJiFU%2BoS%2BMYC8MBhda8Idq2LPfP29BCBI0kM0APkIhgo%2B68Cd&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">&quot;group&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">&quot;success_fraction&quot;</span>:0,<span class="token string">&quot;report_to&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;cf-nel&quot;</span>,<span class="token string">&quot;max_age&quot;</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c2e1876951c-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">&quot;:443&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;zipcode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;13045&quot;</span>,
    <span class="token string">&quot;city&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Lima&quot;</span>,
    <span class="token string">&quot;street&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Arequipa 122&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;phone&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;987654321&quot;</span>,
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Carlos Rodriguez&quot;</span>,
  <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;carlos.rdg@example.com&quot;</span>,
  <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Carlos&quot;</span>,
  <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token number">11</span>
<span class="token punctuation">}</span>


<span class="token number">14</span>:59:35.238 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> INFO  com.intuit.karate.Suite - <span class="token operator">&lt;&lt;</span>pass<span class="token operator">&gt;&gt;</span> feature <span class="token number">1</span> of <span class="token number">1</span> <span class="token punctuation">(</span><span class="token number">0</span> remaining<span class="token punctuation">)</span> classpath:resources/features/users.feature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reporte-karate" tabindex="-1"><a class="header-anchor" href="#reporte-karate" aria-hidden="true">#</a> Reporte Karate</h2>`,4),b=n("Reporte generado despues de la ejecuci\xF3n CLI "),q={href:"https://fromeroc9.github.io/karate-framework-doc/reports/karate/karate-summary.html",target:"_blank",rel:"noopener noreferrer"},v=n("Demo"),g=s("p",null,[s("img",{src:c,alt:"Reporte"})],-1),h=s("p",null,[s("img",{src:u,alt:"Reporte"})],-1),C=s("h2",{id:"reporte-cucumber",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#reporte-cucumber","aria-hidden":"true"},"#"),n(" Reporte Cucumber")],-1),f=n("Reporte generado despues de la ejecuci\xF3n CLI "),y={href:"https://fromeroc9.github.io/karate-framework-doc/reports/cucumber/overview-features.html",target:"_blank",rel:"noopener noreferrer"},x=n("Demo"),A=s("p",null,[s("img",{src:r,alt:"Reporte"})],-1),E=s("p",null,[s("img",{src:k,alt:"Reporte"})],-1);function T(L,R){const a=o("ExternalLinkIcon");return p(),l("div",null,[d,s("p",null,[b,s("a",q,[v,t(a)])]),g,h,C,s("p",null,[f,s("a",y,[x,t(a)])]),A,E])}var z=e(m,[["render",T],["__file","resultados.html.vue"]]);export{z as default};
