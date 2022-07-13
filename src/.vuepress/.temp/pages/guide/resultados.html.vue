<template><div><h2 id="resultados-cli" tabindex="-1"><a class="header-anchor" href="#resultados-cli" aria-hidden="true">#</a> Resultados CLI</h2>
<p>Al ejecutar en cli podemos elegir que feature a ejecutar para esta prueba estamos dejando ejecutar los dos feature.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">14</span>:59:29.889 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate.Suite - <span class="token punctuation">[</span>config<span class="token punctuation">]</span> classpath:karate-config.js
<span class="token number">14</span>:59:31.367 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">></span> GET https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">></span> Accept: application/json
<span class="token number">1</span> <span class="token operator">></span> Content-Type: application/json
<span class="token number">1</span> <span class="token operator">></span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">></span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">></span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">></span> Accept-Encoding: gzip,deflate


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
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">"160d-1eMSsxeJRfnVLRBmYJSbCiJZ1qQ"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: HIT
<span class="token number">1</span> <span class="token operator">&lt;</span> Age: <span class="token number">21645</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">"endpoints"</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"url"</span><span class="token builtin class-name">:</span><span class="token string">"https:\/\/a.nel.cloudflare.com\/report\/v3?s=BZik5ktEOiL%2BhA0hLCiNXii6Mxtgkdp0iFVfkOfUMCSW5%2FJpNnBFTluM0gVDfshoUQkgg1OxviSmzFll0CZyE2LVH5MaO6unaG%2FMWb5BIXxh9VBGuSh5syX31TBY55ml46VdKv0h6A%2Fpwz3j0O39"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">"group"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">"success_fraction"</span>:0,<span class="token string">"report_to"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c1eaf399537-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Leanne Graham"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Bret"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Sincere@april.biz"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Kulas Light"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Apt. 556"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Gwenborough"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"92998-3874"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"-37.3159"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"81.1496"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"1-770-736-8031 x56442"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"hildegard.org"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Romaguera-Crona"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Multi-layered client-server neural-net"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"harness real-time e-markets"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">2</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Ervin Howell"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Antonette"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Shanna@melissa.tv"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Victor Plains"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Suite 879"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Wisokyburgh"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"90566-7771"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"-43.9509"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"-34.4618"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"010-692-6593 x09125"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"anastasia.net"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Deckow-Crist"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Proactive didactic contingency"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"synergize scalable supply-chains"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">3</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Clementine Bauch"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Samantha"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Nathan@yesenia.net"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Douglas Extension"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Suite 847"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"McKenziehaven"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"59590-4157"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"-68.6102"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"-47.0653"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"1-463-123-4447"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"ramiro.info"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Romaguera-Jacobson"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Face to face bifurcated interface"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"e-enable strategic applications"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">4</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Patricia Lebsack"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Karianne"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Julianne.OConner@kory.org"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Hoeger Mall"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Apt. 692"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"South Elvis"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"53919-4257"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"29.4572"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"-164.2990"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"493-170-9623 x156"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"kale.biz"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Robel-Corkery"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Multi-tiered zero tolerance productivity"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"transition cutting-edge web services"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">5</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Chelsey Dietrich"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Kamren"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Lucio_Hettinger@annie.ca"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Skiles Walks"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Suite 351"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Roscoeview"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"33263"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"-31.8129"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"62.5342"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"(254)954-1289"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"demarco.info"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Keebler LLC"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"User-centric fault-tolerant solution"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"revolutionize end-to-end systems"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">6</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Mrs. Dennis Schulist"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Leopoldo_Corkery"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Karley_Dach@jasper.info"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Norberto Crossing"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Apt. 950"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"South Christy"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"23505-1337"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"-71.4197"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"71.7478"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"1-477-935-8478 x6430"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"ola.org"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Considine-Lockman"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Synchronised bottom-line interface"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"e-enable innovative applications"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">7</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Kurtis Weissnat"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Elwyn.Skiles"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Telly.Hoeger@billy.biz"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Rex Trail"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Suite 280"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Howemouth"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"58804-1099"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"24.8918"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"21.8984"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"210.067.6132"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"elvis.io"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Johns Group"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Configurable multimedia task-force"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"generate enterprise e-tailers"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">8</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Nicholas Runolfsdottir V"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Maxime_Nienow"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Sherwood@rosamond.me"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Ellsworth Summit"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Suite 729"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Aliyaview"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"45169"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"-14.3990"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"-120.7677"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"586.493.6943 x140"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"jacynthe.com"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Abernathy Group"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Implemented secondary concept"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"e-enable extensible e-tailers"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">9</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Glenna Reichert"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Delphine"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Chaim_McDermott@dana.io"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Dayna Park"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Suite 449"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Bartholomebury"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"76495-3109"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"24.6463"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"-168.8889"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"(775)976-6794 x41206"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"conrad.com"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Yost and Sons"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Switchable contextually-based project"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"aggregate real-time technologies"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">10</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Clementina DuBuque"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Moriah.Stanton"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Rey.Padberg@karina.biz"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Kattie Turnpike"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Suite 198"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Lebsackbury"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"31428-2261"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"-38.2386"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"57.2232"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"024-648-3804"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"ambrose.net"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Hoeger LLC"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Centralized empowering task-force"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"target end-to-end models"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>


<span class="token number">14</span>:59:31.693 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  com.intuit.karate - did not evaluate to map <span class="token function">id</span> <span class="token operator">=</span> userID: <span class="token punctuation">[</span>type: NUMBER, value: <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token number">14</span>:59:31.695 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">></span> GET https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">></span> Accept: application/json
<span class="token number">1</span> <span class="token operator">></span> Content-Type: application/json
<span class="token number">1</span> <span class="token operator">></span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">></span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">></span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">></span> Accept-Encoding: gzip,deflate


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
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">"160d-1eMSsxeJRfnVLRBmYJSbCiJZ1qQ"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: HIT
<span class="token number">1</span> <span class="token operator">&lt;</span> Age: <span class="token number">21645</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">"endpoints"</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"url"</span><span class="token builtin class-name">:</span><span class="token string">"https:\/\/a.nel.cloudflare.com\/report\/v3?s=%2FhLP2ubh9uN2DYD5xylXEvcztlFeGopSPxjJBFIsZNaj7VsPVYhMlUDOQNv6Crk5BxRxQD%2BK9uIDceVNxKmwTKzXZrPOmobhny6a8v0xoshIZcrlkmTg36eGyF2A4Mr1InczfiMSDd4suEiVeVji"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">"group"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">"success_fraction"</span>:0,<span class="token string">"report_to"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c1f7e60a28e-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Leanne Graham"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Bret"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Sincere@april.biz"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Kulas Light"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Apt. 556"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Gwenborough"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"92998-3874"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"-37.3159"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"81.1496"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"1-770-736-8031 x56442"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"hildegard.org"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Romaguera-Crona"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Multi-layered client-server neural-net"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"harness real-time e-markets"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">2</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Ervin Howell"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Antonette"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Shanna@melissa.tv"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Victor Plains"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Suite 879"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Wisokyburgh"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"90566-7771"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"-43.9509"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"-34.4618"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"010-692-6593 x09125"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"anastasia.net"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Deckow-Crist"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Proactive didactic contingency"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"synergize scalable supply-chains"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">3</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Clementine Bauch"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Samantha"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Nathan@yesenia.net"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Douglas Extension"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Suite 847"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"McKenziehaven"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"59590-4157"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"-68.6102"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"-47.0653"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"1-463-123-4447"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"ramiro.info"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Romaguera-Jacobson"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Face to face bifurcated interface"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"e-enable strategic applications"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">4</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Patricia Lebsack"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Karianne"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Julianne.OConner@kory.org"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Hoeger Mall"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Apt. 692"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"South Elvis"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"53919-4257"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"29.4572"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"-164.2990"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"493-170-9623 x156"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"kale.biz"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Robel-Corkery"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Multi-tiered zero tolerance productivity"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"transition cutting-edge web services"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">5</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Chelsey Dietrich"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Kamren"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Lucio_Hettinger@annie.ca"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Skiles Walks"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Suite 351"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Roscoeview"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"33263"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"-31.8129"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"62.5342"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"(254)954-1289"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"demarco.info"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Keebler LLC"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"User-centric fault-tolerant solution"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"revolutionize end-to-end systems"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">6</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Mrs. Dennis Schulist"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Leopoldo_Corkery"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Karley_Dach@jasper.info"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Norberto Crossing"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Apt. 950"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"South Christy"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"23505-1337"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"-71.4197"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"71.7478"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"1-477-935-8478 x6430"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"ola.org"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Considine-Lockman"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Synchronised bottom-line interface"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"e-enable innovative applications"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">7</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Kurtis Weissnat"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Elwyn.Skiles"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Telly.Hoeger@billy.biz"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Rex Trail"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Suite 280"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Howemouth"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"58804-1099"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"24.8918"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"21.8984"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"210.067.6132"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"elvis.io"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Johns Group"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Configurable multimedia task-force"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"generate enterprise e-tailers"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">8</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Nicholas Runolfsdottir V"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Maxime_Nienow"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Sherwood@rosamond.me"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Ellsworth Summit"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Suite 729"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Aliyaview"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"45169"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"-14.3990"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"-120.7677"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"586.493.6943 x140"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"jacynthe.com"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Abernathy Group"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Implemented secondary concept"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"e-enable extensible e-tailers"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">9</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Glenna Reichert"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Delphine"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Chaim_McDermott@dana.io"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Dayna Park"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Suite 449"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Bartholomebury"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"76495-3109"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"24.6463"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"-168.8889"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"(775)976-6794 x41206"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"conrad.com"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Yost and Sons"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Switchable contextually-based project"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"aggregate real-time technologies"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">10</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Clementina DuBuque"</span>,
    <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Moriah.Stanton"</span>,
    <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Rey.Padberg@karina.biz"</span>,
    <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Kattie Turnpike"</span>,
      <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Suite 198"</span>,
      <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Lebsackbury"</span>,
      <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"31428-2261"</span>,
      <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"-38.2386"</span>,
        <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"57.2232"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"024-648-3804"</span>,
    <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"ambrose.net"</span>,
    <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Hoeger LLC"</span>,
      <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Centralized empowering task-force"</span>,
      <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"target end-to-end models"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>


<span class="token number">14</span>:59:31.784 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">></span> GET https://jsonplaceholder.typicode.com/users/1
<span class="token number">1</span> <span class="token operator">></span> Accept: application/json
<span class="token number">1</span> <span class="token operator">></span> Content-Type: application/json
<span class="token number">1</span> <span class="token operator">></span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">></span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">></span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">></span> Accept-Encoding: gzip,deflate


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
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">"1fd-+2Y3G3w049iSZtw5t1mzSnunngE"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: HIT
<span class="token number">1</span> <span class="token operator">&lt;</span> Age: <span class="token number">3084</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">"endpoints"</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"url"</span><span class="token builtin class-name">:</span><span class="token string">"https:\/\/a.nel.cloudflare.com\/report\/v3?s=lJEe6cphr7pkBud4vKg4srqUY2h4YN%2FJbkdFhXntOSOxLPmodk2cyM7Cfqukvvgmu4rZlB592DwmiC1MuLu1LWECVuoF9tQrAc7wFp31eQNMkYcpvhACVqsMW0mcuDe7KcpEdv2c2cTVJgsUByNs"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">"group"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">"success_fraction"</span>:0,<span class="token string">"report_to"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c20082c954c-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">{</span>
  <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
  <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Leanne Graham"</span>,
  <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Bret"</span>,
  <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"Sincere@april.biz"</span>,
  <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Kulas Light"</span>,
    <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Apt. 556"</span>,
    <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Gwenborough"</span>,
    <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"92998-3874"</span>,
    <span class="token string">"geo"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">"lat"</span><span class="token builtin class-name">:</span> <span class="token string">"-37.3159"</span>,
      <span class="token string">"lng"</span><span class="token builtin class-name">:</span> <span class="token string">"81.1496"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"1-770-736-8031 x56442"</span>,
  <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"hildegard.org"</span>,
  <span class="token string">"company"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Romaguera-Crona"</span>,
    <span class="token string">"catchPhrase"</span><span class="token builtin class-name">:</span> <span class="token string">"Multi-layered client-server neural-net"</span>,
    <span class="token string">"bs"</span><span class="token builtin class-name">:</span> <span class="token string">"harness real-time e-markets"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token number">14</span>:59:31.922 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">></span> POST https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">></span> Accept: application/json
<span class="token number">1</span> <span class="token operator">></span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">></span> Content-Length: <span class="token number">188</span>
<span class="token number">1</span> <span class="token operator">></span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">></span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">></span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">></span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"Joe DOe"</span>,<span class="token string">"username"</span><span class="token builtin class-name">:</span><span class="token string">"Joe"</span>,<span class="token string">"email"</span><span class="token builtin class-name">:</span><span class="token string">"joe.doe@example.com"</span>,<span class="token string">"address"</span>:<span class="token punctuation">{</span><span class="token string">"street"</span><span class="token builtin class-name">:</span><span class="token string">"Cuzco"</span>,<span class="token string">"suite"</span><span class="token builtin class-name">:</span><span class="token string">"Apt. 123"</span>,<span class="token string">"city"</span><span class="token builtin class-name">:</span><span class="token string">"Lima"</span>,<span class="token string">"zipcode"</span><span class="token builtin class-name">:</span><span class="token string">"15069"</span><span class="token punctuation">}</span>,<span class="token string">"phone"</span><span class="token builtin class-name">:</span><span class="token string">"123456789"</span>,<span class="token string">"website"</span><span class="token builtin class-name">:</span><span class="token string">"google.com"</span><span class="token punctuation">}</span>

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
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">"fc-WV/6Q3D1HodhqaIb+3YEUm22dMc"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: DYNAMIC
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">"endpoints"</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"url"</span><span class="token builtin class-name">:</span><span class="token string">"https:\/\/a.nel.cloudflare.com\/report\/v3?s=f0kiuTcaMCVL1b7XTNSZ5A3DUFJvWcTN5lsbAePyNsGhLPynOW7p%2FJm%2F0vDDz6q8zOwZt6lFTHrMqAe%2Fl%2FAMjYqF90LZqWnjR2l%2B6lqv8e0KsS2ngmHlRM7sgLe70uI8eX7tBx%2B6o%2BlinRPJ2OjH"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">"group"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">"success_fraction"</span>:0,<span class="token string">"report_to"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c20dc469548-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Joe DOe"</span>,
  <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Joe"</span>,
  <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"joe.doe@example.com"</span>,
  <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Cuzco"</span>,
    <span class="token string">"suite"</span><span class="token builtin class-name">:</span> <span class="token string">"Apt. 123"</span>,
    <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Lima"</span>,
    <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"15069"</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"123456789"</span>,
  <span class="token string">"website"</span><span class="token builtin class-name">:</span> <span class="token string">"google.com"</span>,
  <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">11</span>
<span class="token punctuation">}</span>


<span class="token number">14</span>:59:32.185 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">></span> POST https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">></span> Accept: application/json
<span class="token number">1</span> <span class="token operator">></span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">></span> Content-Length: <span class="token number">150</span>
<span class="token number">1</span> <span class="token operator">></span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">></span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">></span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">></span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"Joe Doe"</span>,<span class="token string">"username"</span><span class="token builtin class-name">:</span><span class="token string">"Joe"</span>,<span class="token string">"email"</span><span class="token builtin class-name">:</span><span class="token string">"joe.doe@example.com"</span>,<span class="token string">"address"</span>:<span class="token punctuation">{</span><span class="token string">"street"</span><span class="token builtin class-name">:</span><span class="token string">"Cuzco 123"</span>,<span class="token string">"city"</span><span class="token builtin class-name">:</span><span class="token string">"Lima"</span>,<span class="token string">"zipcode"</span><span class="token builtin class-name">:</span><span class="token string">"15069"</span><span class="token punctuation">}</span>,<span class="token string">"phone"</span><span class="token builtin class-name">:</span><span class="token string">"123456789"</span><span class="token punctuation">}</span>

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
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">"cc-wakgQm3ugfHJ9+C0kXvD1Jsjs8Y"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: DYNAMIC
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">"endpoints"</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"url"</span><span class="token builtin class-name">:</span><span class="token string">"https:\/\/a.nel.cloudflare.com\/report\/v3?s=D3vjunNZD4FDJTA%2Fl7Ns%2Fhsrc5LNtU1wBAVUmMzo1Zni0pAn9jVJxAy6i4v3zk2NPJ5iIpJ2m1VoHSKdSBJVf9ZWRz8Yvm%2FXhyK90pYs4dl%2BKJoyU0HKwI2S7kJGJnrYXao682xYgqxN27hJiXd4"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">"group"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">"success_fraction"</span>:0,<span class="token string">"report_to"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c228ede952e-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Joe Doe"</span>,
  <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Joe"</span>,
  <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"joe.doe@example.com"</span>,
  <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Cuzco 123"</span>,
    <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Lima"</span>,
    <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"15069"</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"123456789"</span>,
  <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">11</span>
<span class="token punctuation">}</span>


<span class="token number">14</span>:59:33.105 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">></span> POST https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">></span> Accept: application/json
<span class="token number">1</span> <span class="token operator">></span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">></span> Content-Length: <span class="token number">150</span>
<span class="token number">1</span> <span class="token operator">></span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">></span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">></span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">></span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">"address"</span>:<span class="token punctuation">{</span><span class="token string">"zipcode"</span><span class="token builtin class-name">:</span><span class="token string">"15069"</span>,<span class="token string">"city"</span><span class="token builtin class-name">:</span><span class="token string">"Lima"</span>,<span class="token string">"street"</span><span class="token builtin class-name">:</span><span class="token string">"Cuzco 123"</span><span class="token punctuation">}</span>,<span class="token string">"phone"</span><span class="token builtin class-name">:</span><span class="token string">"123456789"</span>,<span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"Joe Doe"</span>,<span class="token string">"email"</span><span class="token builtin class-name">:</span><span class="token string">"joe.doe@example.com"</span>,<span class="token string">"username"</span><span class="token builtin class-name">:</span><span class="token string">"Joe"</span><span class="token punctuation">}</span>

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
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">"cc-z8G4eDmz/kYqQnBf78nxtj0J9O4"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: DYNAMIC
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">"endpoints"</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"url"</span><span class="token builtin class-name">:</span><span class="token string">"https:\/\/a.nel.cloudflare.com\/report\/v3?s=oGnpk1hp9G5uVCEunQKvqB7MZvxyPHRvjjR3WCBKxQ8NG7jsbSVl8o%2FkaMm6XV6mDZIJ2fJKhAmeLjYTBTI4C9Kmi4AyAgqWxoGUYwA7n6P4n51OnTa295L8xgTQQmaym520OWSWt34jRZe%2Fyj5m"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">"group"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">"success_fraction"</span>:0,<span class="token string">"report_to"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c283e7c9522-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">{</span>
  <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"15069"</span>,
    <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Lima"</span>,
    <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Cuzco 123"</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"123456789"</span>,
  <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Joe Doe"</span>,
  <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"joe.doe@example.com"</span>,
  <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Joe"</span>,
  <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">11</span>
<span class="token punctuation">}</span>


<span class="token number">14</span>:59:33.468 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">></span> POST https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">></span> Accept: application/json
<span class="token number">1</span> <span class="token operator">></span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">></span> Content-Length: <span class="token number">168</span>
<span class="token number">1</span> <span class="token operator">></span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">></span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">></span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">></span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">"address"</span>:<span class="token punctuation">{</span><span class="token string">"zipcode"</span><span class="token builtin class-name">:</span><span class="token string">"13045"</span>,<span class="token string">"city"</span><span class="token builtin class-name">:</span><span class="token string">"Lima"</span>,<span class="token string">"street"</span><span class="token builtin class-name">:</span><span class="token string">"Arequipa 122"</span><span class="token punctuation">}</span>,<span class="token string">"phone"</span><span class="token builtin class-name">:</span><span class="token string">"987654321"</span>,<span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"Carlos Rodriguez"</span>,<span class="token string">"email"</span><span class="token builtin class-name">:</span><span class="token string">"carlos.rdg@example.com"</span>,<span class="token string">"username"</span><span class="token builtin class-name">:</span><span class="token string">"Carlos"</span><span class="token punctuation">}</span>

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
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">"de-pnPqX2/aWsc+Hiu5BG8cH9gYoj8"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: DYNAMIC
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">"endpoints"</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"url"</span><span class="token builtin class-name">:</span><span class="token string">"https:\/\/a.nel.cloudflare.com\/report\/v3?s=HXqoaVvcc2ipW4RTyLzNUoZMliTU3%2BkZPyLyTFEsPQz%2BVMPPpOuphoReppktXzi7ccpNakI91X0PiE6kR5xySb2Ue39p422GqNPJNr95c52pysP8UNueJapYDvy%2FcF%2BDVr0jjWbvB5mGzFM8VIJ9"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">"group"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">"success_fraction"</span>:0,<span class="token string">"report_to"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c2a9d859549-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">{</span>
  <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"13045"</span>,
    <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Lima"</span>,
    <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Arequipa 122"</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"987654321"</span>,
  <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Carlos Rodriguez"</span>,
  <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"carlos.rdg@example.com"</span>,
  <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Carlos"</span>,
  <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">11</span>
<span class="token punctuation">}</span>


<span class="token number">14</span>:59:33.746 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">></span> POST https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">></span> Accept: application/json
<span class="token number">1</span> <span class="token operator">></span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">></span> Content-Length: <span class="token number">150</span>
<span class="token number">1</span> <span class="token operator">></span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">></span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">></span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">></span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">"address"</span>:<span class="token punctuation">{</span><span class="token string">"zipcode"</span><span class="token builtin class-name">:</span><span class="token string">"15069"</span>,<span class="token string">"city"</span><span class="token builtin class-name">:</span><span class="token string">"Lima"</span>,<span class="token string">"street"</span><span class="token builtin class-name">:</span><span class="token string">"Cuzco 123"</span><span class="token punctuation">}</span>,<span class="token string">"phone"</span><span class="token builtin class-name">:</span><span class="token string">"123456789"</span>,<span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"Joe Doe"</span>,<span class="token string">"email"</span><span class="token builtin class-name">:</span><span class="token string">"joe.doe@example.com"</span>,<span class="token string">"username"</span><span class="token builtin class-name">:</span><span class="token string">"Joe"</span><span class="token punctuation">}</span>

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
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">"cc-z8G4eDmz/kYqQnBf78nxtj0J9O4"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: DYNAMIC
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">"endpoints"</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"url"</span><span class="token builtin class-name">:</span><span class="token string">"https:\/\/a.nel.cloudflare.com\/report\/v3?s=CzN0fjFBSGVLU1WD5mDUqQdbCT0SuR6LHbP%2Bqcv8LAbbHi2MO0oMQtmU34LBVfIWKI0rl%2FN9hLsacwdbI5ld4q0b0rWN326HiwGhIFbx%2BzRyjI1J5KxdntkVaC5aewt1%2FpRlQEFX1RpDB1bhjMnP"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">"group"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">"success_fraction"</span>:0,<span class="token string">"report_to"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c2c4e7c9536-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">{</span>
  <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"15069"</span>,
    <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Lima"</span>,
    <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Cuzco 123"</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"123456789"</span>,
  <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Joe Doe"</span>,
  <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"joe.doe@example.com"</span>,
  <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Joe"</span>,
  <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">11</span>
<span class="token punctuation">}</span>


<span class="token number">14</span>:59:34.016 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> DEBUG com.intuit.karate - request:
<span class="token number">1</span> <span class="token operator">></span> POST https://jsonplaceholder.typicode.com/users
<span class="token number">1</span> <span class="token operator">></span> Accept: application/json
<span class="token number">1</span> <span class="token operator">></span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8
<span class="token number">1</span> <span class="token operator">></span> Content-Length: <span class="token number">168</span>
<span class="token number">1</span> <span class="token operator">></span> Host: jsonplaceholder.typicode.com
<span class="token number">1</span> <span class="token operator">></span> Connection: Keep-Alive
<span class="token number">1</span> <span class="token operator">></span> User-Agent: Apache-HttpClient/4.5.13 <span class="token punctuation">(</span>Java/1.8.0_321<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token operator">></span> Accept-Encoding: gzip,deflate
<span class="token punctuation">{</span><span class="token string">"address"</span>:<span class="token punctuation">{</span><span class="token string">"zipcode"</span><span class="token builtin class-name">:</span><span class="token string">"13045"</span>,<span class="token string">"city"</span><span class="token builtin class-name">:</span><span class="token string">"Lima"</span>,<span class="token string">"street"</span><span class="token builtin class-name">:</span><span class="token string">"Arequipa 122"</span><span class="token punctuation">}</span>,<span class="token string">"phone"</span><span class="token builtin class-name">:</span><span class="token string">"987654321"</span>,<span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"Carlos Rodriguez"</span>,<span class="token string">"email"</span><span class="token builtin class-name">:</span><span class="token string">"carlos.rdg@example.com"</span>,<span class="token string">"username"</span><span class="token builtin class-name">:</span><span class="token string">"Carlos"</span><span class="token punctuation">}</span>

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
<span class="token number">1</span> <span class="token operator">&lt;</span> Etag: W/<span class="token string">"de-pnPqX2/aWsc+Hiu5BG8cH9gYoj8"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Via: <span class="token number">1.1</span> vegur
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-Cache-Status: DYNAMIC
<span class="token number">1</span> <span class="token operator">&lt;</span> Expect-CT: max-age<span class="token operator">=</span><span class="token number">604800</span>, report-uri<span class="token operator">=</span><span class="token string">"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Report-To: <span class="token punctuation">{</span><span class="token string">"endpoints"</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"url"</span><span class="token builtin class-name">:</span><span class="token string">"https:\/\/a.nel.cloudflare.com\/report\/v3?s=LODjVk3kdKZRqzAfh534OYku94v%2BldSIEsCCRNGxWlACJWm3mbEeRiUmyZc85buy4qwdrStkhJx9zQcsNsSgWDalYkA03Z7vZo0qJiFU%2BoS%2BMYC8MBhda8Idq2LPfP29BCBI0kM0APkIhgo%2B68Cd"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">"group"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> NEL: <span class="token punctuation">{</span><span class="token string">"success_fraction"</span>:0,<span class="token string">"report_to"</span><span class="token builtin class-name">:</span><span class="token string">"cf-nel"</span>,<span class="token string">"max_age"</span>:604800<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">&lt;</span> Server: cloudflare
<span class="token number">1</span> <span class="token operator">&lt;</span> CF-RAY: 729c5c2e1876951c-LIM
<span class="token number">1</span> <span class="token operator">&lt;</span> alt-svc: <span class="token assign-left variable">h3</span><span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>, h3-29<span class="token operator">=</span><span class="token string">":443"</span><span class="token punctuation">;</span> <span class="token assign-left variable">ma</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token punctuation">{</span>
  <span class="token string">"address"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">"zipcode"</span><span class="token builtin class-name">:</span> <span class="token string">"13045"</span>,
    <span class="token string">"city"</span><span class="token builtin class-name">:</span> <span class="token string">"Lima"</span>,
    <span class="token string">"street"</span><span class="token builtin class-name">:</span> <span class="token string">"Arequipa 122"</span>
  <span class="token punctuation">}</span>,
  <span class="token string">"phone"</span><span class="token builtin class-name">:</span> <span class="token string">"987654321"</span>,
  <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Carlos Rodriguez"</span>,
  <span class="token string">"email"</span><span class="token builtin class-name">:</span> <span class="token string">"carlos.rdg@example.com"</span>,
  <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"Carlos"</span>,
  <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">11</span>
<span class="token punctuation">}</span>


<span class="token number">14</span>:59:35.238 <span class="token punctuation">[</span>main<span class="token punctuation">]</span> INFO  com.intuit.karate.Suite - <span class="token operator">&lt;&lt;</span>pass<span class="token operator">>></span> feature <span class="token number">1</span> of <span class="token number">1</span> <span class="token punctuation">(</span><span class="token number">0</span> remaining<span class="token punctuation">)</span> classpath:resources/features/users.feature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reporte-karate" tabindex="-1"><a class="header-anchor" href="#reporte-karate" aria-hidden="true">#</a> Reporte Karate</h2>
<p>Reporte generado despues de la ejecución CLI <a href="https://fromeroc9.github.io/karate-framework-doc/reports/karate/karate-summary.html" target="_blank" rel="noopener noreferrer">Demo<ExternalLinkIcon/></a></p>
<p><img src="/images/resultados/karate1.png" alt="Reporte"></p>
<p><img src="/images/resultados/karate2.png" alt="Reporte"></p>
<h2 id="reporte-cucumber" tabindex="-1"><a class="header-anchor" href="#reporte-cucumber" aria-hidden="true">#</a> Reporte Cucumber</h2>
<p>Reporte generado despues de la ejecución CLI <a href="https://fromeroc9.github.io/karate-framework-doc/reports/cucumber/overview-features.html" target="_blank" rel="noopener noreferrer">Demo<ExternalLinkIcon/></a></p>
<p><img src="/images/resultados/cucumber1.png" alt="Reporte"></p>
<p><img src="/images/resultados/cucumber2.png" alt="Reporte"></p>
</div></template>
