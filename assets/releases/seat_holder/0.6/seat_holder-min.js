if(typeof(SeatHolder)=="undefined"){var scriptElement=(function deriveScriptElement(){var c="tu_dummy_script";document.write('<script id="'+c+'"><\/script>');var b=document.getElementById(c);var a=b.previousSibling;b.parentNode.removeChild(b);return a}());var scriptHost=(function deriveScriptHost(){var a=scriptElement.getAttribute("src");return a.match(/^\w+\:\/\//)?a.match(/^\w+\:\/\/[^\/]*\//)[0]:""}());SeatHolder=(function(){var a="sh_hint",e="sh_hide";var g=function(){var h="<style>."+a+" { color: "+SeatHolder.hintColor+" !important } ."+e+" { display: none !important }</style>";jQuery(h).prependTo("head")};var f=function(){var h=[];jQuery.each(jQuery(SeatHolder.selector),function(l,k){k=jQuery(k);var j=k.attr("seatholder");if(j==null){return}if(j.match(/^&/)){d(null,k)}else{h.push(k)}k.focus(c).blur(d)});jQuery.each(h,function(k,j){j=jQuery(j);j.attr("id",j.attr("id")||"hinted_element_"+k);var l=jQuery("#"+j.attr("hint_element"));if(l.length==0){l=jQuery("<input/>").attr("id","hint_element_"+k).attr("type",j.attr("type")).attr("readonly",true).attr("hinted_element",j.attr("id")).focus(b);jQuery.each(["class","size"],function(i,m){switch(m){case"class":l.attr(m,j.attr(m).replace(e,""));break;default:l.attr(m,j.attr(m))}});l.addClass(a);j.attr("hint_element",l.attr("id")).before(l)}l.val(j.attr("seatholder"));d(null,j)})};var b=function(i){var h=jQuery(i.target).addClass(e);jQuery(document.getElementById(h.attr("hinted_element"))).attr("disabled",false).removeClass(e).focus()};var c=function(k){var j=jQuery(k.target);var h=j.attr("seatholder");if(j.val()==h.replace(/^&/,"")){j.val("")}var i=j.get(0);if(i.createTextRange){var l=i.createTextRange();l.moveStart("character",0);l.moveEnd("character",j.val().length);l.select()}else{if(i.setSelectionRange){i.setSelectionRange(0,j.val().length)}}};var d=function(j,i){if(i==null){i=jQuery(j.target)}var h=i.attr("seatholder");if((i.val().length>0&&i.val()!=h.replace(/^&/,""))){jQuery("#"+i.attr("hint_element")).addClass(e);return}if(h.match(/^&/)){i.val(h.replace(/^&/,""))}else{i.attr("disabled",true).addClass(e);jQuery("#"+i.attr("hint_element")).removeClass(e)}};return{version:"0.6",selector:"[seatholder]",hintColor:"#AAA",init:function(){jQuery(document).ready(function(){g();f()})},rebind:function(){f()}}}());(function(){var b=[];if(typeof(jQuery)=="undefined"){b.push("core")}if(b.length==0){SeatHolder.init()}else{var a=scriptElement.getAttribute("src").replace(/(development\/)?seat_holder(\-min)?\.js.*$/,"jquery/"+b.join(".")+".js");document.write('<script src="'+a+'" type="text/javascript" onload="SeatHolder.init()" onreadystatechange="SeatHolder.init()"><\/script>')}}())};