(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
var FM=[['Blouson','M60 60l-34 20-16 100 22 6 14-70v104h148V116l14 70 22-6-16-100-34-20z','M60 200q60-20 120 0v20H60z','M80 60q40 22 80 0',[['Body','Roomy, billows above the hem'],['Hem','Elastic or drawcord'],['Collar','Shirt, stand or funnel'],['Mood','Relaxed']]],
['Bomber','M66 58l-34 18-16 104 22 6 14-70v98h136V116l14 70 22-6-16-104-34-18z','M66 196h108v18H66z','M84 52h72v10H84z',[['Body','Short, slightly full'],['Hem','Rib knit band'],['Collar','Rib knit'],['Mood','Sporty']]],
['Harrington','M64 58l-34 18-14 106 22 6 12-74v102h140V114l12 74 22-6-14-106-34-18z','M64 196h112v16H64z','M84 58l36 26 36-26',[['Body','Hip-length, neat'],['Hem','Rib with side tabs'],['Collar','Stand collar, button throat'],['Mood','Smart casual']]],
['Trucker','M66 58l-32 16-12 110 22 4 10-70v100h132V114l10 70 22-4-12-110-32-16z','M66 198h108v14H66z','M86 58l34 20 34-20',[['Body','Boxy, waist-length'],['Hem','Buttoned waistband'],['Collar','Point collar'],['Mood','Workwear']]]];
var tabs=[].slice.call(document.querySelectorAll('.bl-tabs button'));if(tabs.length){function fm(i){tabs.forEach(function(t,j){t.setAttribute('aria-selected',i===j?'true':'false');});var f=FM[i];$('fm-b').setAttribute('d',f[1]);$('fm-h').setAttribute('d',f[2]);$('fm-c').setAttribute('d',f[3]);$('fm-o').innerHTML='<h3>'+f[0]+'</h3><dl>'+f[4].map(function(r){return '<dt>'+r[0]+'</dt><dd>'+r[1]+'</dd>';}).join('')+'</dl>';}
 tabs.forEach(function(t,i){t.addEventListener('click',function(){fm(i);});});fm(0);}
var mj=$('mx-j');if(mj){var mt=$('mx-t'),ms=$('mx-s');function mx(){var j=+mj.value,t=+mt.value,s=+ms.value,hem=[150,176,206][j],tw=[16,22,34][t];
  $('mx-jk').setAttribute('d','M64 64h72l26 10 8 '+(hem-80)+'-14 4-6-60v'+(hem-110)+'q-36 8-100 0v-'+(hem-110)+'l-6 60-14-4 8-'+(hem-80)+'z');
  $('mx-tr').setAttribute('d','M70 '+(hem-4)+'h60l'+(tw-14)+' '+(390-hem)+'h-'+(tw+18)+'l-10-'+(300-hem)+'-10 '+(300-hem)+'h-'+(tw+18)+'z');
  var sw=[22,28,36][s],sh=[10,14,22][s];$('mx-sh').setAttribute('d','M'+(86-tw-sw/2)+' '+(392)+'h'+(sw+10)+'v'+sh+'h-'+(sw+16)+'z M'+(114+tw-6)+' 392h'+(sw+10)+'v'+sh+'h-'+(sw+16)+'z');
  var sc=(j===0&&t===2)||(j===1&&t<2)||(j===2&&t===0)?2:(j===2&&t===2)?0:1;if(s===2&&t===0)sc=Math.max(0,sc-1);var V=[['Heavy all over','Lots of volume top and bottom. Try a shorter jacket or slimmer trousers.'],['Easy and relaxed','A balanced, casual silhouette. Swap the shoes to shift the mood.'],['Spot on','Volume up top, balance below. A classic blouson outline.']];
  $('mx-o').innerHTML='<strong>'+V[sc][0]+'</strong><p>'+V[sc][1]+'</p>';}
 [mj,mt,ms].forEach(function(x){x.addEventListener('change',mx);});mx();}
var PC=[['Rust',['#1F6F6B','#E9DCC4','#3D2B1F'],'Teal, stone or brown trousers; a cream or white top.'],['Mustard',['#1E2A44','#3D2B1F','#F6EBD9'],'Navy or brown trousers with a cream knit.'],['Teal',['#E9DCC4','#C1502E','#3D2B1F'],'Stone chinos, a rust top or brown cords.'],['Olive',['#E9DCC4','#1E2A44','#F6EBD9'],'Stone or navy trousers and a white T-shirt.'],['Stone',['#1E2A44','#6B7A3C','#3D2B1F'],'Navy, olive or brown underneath.'],['Navy',['#E9DCC4','#E3A72F','#9AA3AE'],'Stone or grey trousers; mustard or white top.']];
var jcs=[].slice.call(document.querySelectorAll('input[name=jc]'));if(jcs.length){function pc(){var k=0;jcs.forEach(function(x){if(x.checked)k=+x.value;});var p=PC[k];$('pc-o').innerHTML='<h3>'+p[0]+' blouson</h3><div class="bl-chips">'+p[1].map(function(c){return '<i style="background:'+c+'"></i>';}).join('')+'</div><p>'+p[2]+'</p>';}jcs.forEach(function(x){x.addEventListener('change',pc);});pc();}
})();
