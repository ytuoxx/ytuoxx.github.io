import{_ as n}from"./ADC-QrCode-9792c1a0.js";import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as r,b as i,d as e,e as t,a}from"./app-085d7437.js";const s="/assets/image-20231203101702737-b4869af9.png",g="/assets/image-20231203120034737-0928b79c.png",p="/assets/image-20231203102850406-f4789073.png",_="/assets/image-20231203102944557-d148b638.png",h="/assets/image-20231203101843666-6eafa443.png",f="/assets/image-20231203101820874-435e9800.png",m="/assets/image-20231203101947683-35691b55.png",u="/assets/image-20231203102300114-fefd05ca.png",P="/assets/image-20231203102327811-44bc3483.png",b="/assets/image-20231203102225035-6fd13d21.png",x="/assets/image-20231203122805894-d389daf5.png",v={},I=a('<h1 id="广东电信天翼网关开启ipv6" tabindex="-1"><a class="header-anchor" href="#广东电信天翼网关开启ipv6" aria-hidden="true">#</a> 广东电信天翼网关开启IPV6</h1><h2 id="_1-修改天翼网关" tabindex="-1"><a class="header-anchor" href="#_1-修改天翼网关" aria-hidden="true">#</a> 1.修改天翼网关</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><p>地址：<code>http://192.168.1.1</code></p></li><li><p>用户名：<code>telecomadmin</code></p></li><li><p>密码：<code>nE7jA%5m</code></p></li></ul></div><figure><img src="'+s+'" alt="image-20231203101702737" tabindex="0" loading="lazy"><figcaption>image-20231203101702737</figcaption></figure><h3 id="_1-1-获取pppoe账号与密码" tabindex="-1"><a class="header-anchor" href="#_1-1-获取pppoe账号与密码" aria-hidden="true">#</a> 1.1.获取PPPoE账号与密码</h3><p>点击网络，网络连接 &gt; 宽带设置界面如下</p><p>连接名称选择<code>3_INTERNET_B_VID_41</code>，可以看到用户名与密码，此时密码是不可见。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>通过Chrome查看</p><ul><li>按F12进入开发者模式 &gt; 元素</li><li>点击<code>红框内箭头</code>，再去点击宽带密码框，可以看到<code>type=&quot;password&quot;</code>，如下图</li><li>把<code>password</code>，改成<code>text</code>，如下图，此时密码可见</li><li>把用户名，密码复制出来备用。</li></ul></div><figure><img src="'+g+'" alt="image-20231203120034737" tabindex="0" loading="lazy"><figcaption>image-20231203120034737</figcaption></figure><figure><img src="'+p+'" alt="image-20231203102850406" tabindex="0" loading="lazy"><figcaption>image-20231203102850406</figcaption></figure><figure><img src="'+_+'" alt="image-20231203102944557" tabindex="0" loading="lazy"><figcaption>image-20231203102944557</figcaption></figure><h3 id="_1-2-上网参数设置" tabindex="-1"><a class="header-anchor" href="#_1-2-上网参数设置" aria-hidden="true">#</a> 1.2.上网参数设置</h3><ul><li>连接名称：<code>3_INTERNET_B_VID_41</code></li><li>封装类型：<code>PPPoE</code></li><li>连接模式：<code>桥接</code></li><li>业务上网：<code>上网</code></li><li>IP模式：<code>IPv4&amp;IPv6</code></li><li>设置完成后如下图，按照设置即可</li></ul><figure><img src="'+h+'" alt="image-20231203101843666" tabindex="0" loading="lazy"><figcaption>image-20231203101843666</figcaption></figure><h3 id="_1-3-iptv参数设置" tabindex="-1"><a class="header-anchor" href="#_1-3-iptv参数设置" aria-hidden="true">#</a> 1.3.IPTV参数设置</h3><ul><li>连接名称：<code>2_Other_B_VID_45</code></li><li>封装类型：<code>PPPoE</code></li><li>连接模式：<code>桥接</code></li><li>业务上网：<code>其他</code></li><li>IP模式：<code>IPv4&amp;IPv6</code></li><li>设置完成后如下图，按照设置即可</li></ul><figure><img src="'+f+'" alt="image-20231203101820874" tabindex="0" loading="lazy"><figcaption>image-20231203101820874</figcaption></figure><h3 id="_1-4-查看连接状态" tabindex="-1"><a class="header-anchor" href="#_1-4-查看连接状态" aria-hidden="true">#</a> 1.4.查看连接状态</h3><p>点击<code>状态</code> &gt; 状态纵览，如下图，业务状态应为可用。</p><figure><img src="'+m+'" alt="image-20231203101947683" tabindex="0" loading="lazy"><figcaption>image-20231203101947683</figcaption></figure><h2 id="_2-修改路由器-小米路由器" tabindex="-1"><a class="header-anchor" href="#_2-修改路由器-小米路由器" aria-hidden="true">#</a> 2.修改路由器（小米路由器</h2><h3 id="_2-1-上网设置-pppoe拨号" tabindex="-1"><a class="header-anchor" href="#_2-1-上网设置-pppoe拨号" aria-hidden="true">#</a> 2.1.上网设置，PPPoE拨号</h3><ul><li>上网方式： <code>PPPoE</code></li><li>账号：<code>在天翼网关复制的账号</code></li><li>密码：<code>在天翼网关复制的密码</code></li><li>设置完成后，如下图</li><li>然后点击 <strong>应用</strong></li></ul><figure><img src="'+u+'" alt="image-20231203102300114" tabindex="0" loading="lazy"><figcaption>image-20231203102300114</figcaption></figure><h3 id="_2-2-ipv6网络设置" tabindex="-1"><a class="header-anchor" href="#_2-2-ipv6网络设置" aria-hidden="true">#</a> 2.2.IPV6网络设置</h3><p>打开<code>IPV6网络设置开关</code></p>',26),V=i("li",null,[e("上网方式："),i("code",null,"Native")],-1),E=i("li",null,[e("手动配置DNS：广东地区是 "),i("code",null,"240e:1f:1::1"),e(" 和 "),i("code",null,"240e:1f:1::33")],-1),y={href:"https://ipw.cn/doc/ipv6/user/ipv6_dns.html",target:"_blank",rel:"noopener noreferrer"},z=i("li",null,"设置完成后，如下图",-1),N=i("li",null,[e("然后点击 "),i("strong",null,"应用")],-1),D=a('<figure><img src="'+P+'" alt="image-20231203102327811" tabindex="0" loading="lazy"><figcaption>image-20231203102327811</figcaption></figure><h3 id="_2-3-查看上网信息" tabindex="-1"><a class="header-anchor" href="#_2-3-查看上网信息" aria-hidden="true">#</a> 2.3.查看上网信息</h3><p>如下图，路由通过PPPoE实现拨号上网，IPV6地址均完成分配。</p><figure><img src="'+b+'" alt="image-20231203102225035" tabindex="0" loading="lazy"><figcaption>image-20231203102225035</figcaption></figure><h3 id="_2-4-验证ipv6连接状态" tabindex="-1"><a class="header-anchor" href="#_2-4-验证ipv6连接状态" aria-hidden="true">#</a> 2.4.验证IPV6连接状态</h3>',5),k={href:"https://ipw.cn",target:"_blank",rel:"noopener noreferrer"},B=i("code",null,"天翼网关",-1),C=i("code",null,"路由器",-1),T=a('<figure><img src="'+x+'" alt="image-20231203122805894" tabindex="0" loading="lazy"><figcaption>image-20231203122805894</figcaption></figure><h2 id="adc-资源群" tabindex="-1"><a class="header-anchor" href="#adc-资源群" aria-hidden="true">#</a> ADC 资源群</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>扫码添加微信，备注 <code>ADC</code> 即可。</p></div><figure><img src="'+n+'" alt="ADC 资源群" tabindex="0" loading="lazy"><figcaption>ADC 资源群</figcaption></figure>',4);function A(w,S){const o=d("ExternalLinkIcon");return l(),r("div",null,[I,i("ul",null,[V,E,i("li",null,[e("更多DNS查看： "),i("a",y,[e("IPv6 DNS 地址列表新窗口打开"),t(o)])]),z,N]),D,i("p",null,[i("a",k,[e("点击测试IPV6状态"),t(o)]),e("，如下图表示IPV6已经启用成功。如获取IPV6失败，请重启"),B,e("和"),C,e("。")]),T])}const j=c(v,[["render",A],["__file","广东电信天翼网关开启IPV6.html.vue"]]);export{j as default};
