+function(d){var b=function(f,e){this.$element=d(f);this.options=d.extend({},b.DEFAULTS,e);this.init()};b.VERSION="1.0.0";b.DEFAULTS={};b.CacheData=undefined;b.prototype.init=function(){var n=this.$element;var o=this.options;var m=d("#btn-profile-param");if(m.size()==0){m=d('<button type="button" data-close-others="true" class="btn btn-info" id="btn-profile-param" title="点击收藏记忆当前表单元素数据"><i class="fa fa-heart-o"></i></button>');m.appendTo(d("body"));d(document).on("mousedown",function(p){if(!(m.is(p.target)||m.find(p.target).length)){m.hide()}})}m.hide();var g=n.attr("data-profile-param");var k=n.closest(".controls");var h="data-profile-param-done"+g;if(k.attr(h)){return}k.attr(h,true);var f=n.closest("form").find("input[name='id']").val();var e=n.attr("name");var j=undefined;if(n.is(":radio")){j=k.find(':radio[name="'+e+'"]:checked').val()}else{if(n.is(":checkbox")){j=k.find(':checkbox[name="'+e+'"]:checked').val()}else{if(n.is("select")){j=n.children("option:checked").val()}else{n.val()}}}if(f.length==0&&(j==undefined||j=="")){var i=function(q){if(q){if(n.is(":radio")){var p=k.find(':radio[name="'+e+'"][value="'+q+'"]');p.iCheck("check");p.attr("checked","checked")}else{if(n.is(":checkbox")){var r=q.split(",");d.each(r,function(t,s){var u=k.find(':checkbox[name="'+e+'"][value="'+s+'"]');u.iCheck("check");u.attr("checked","checked")})}else{if(n.is("select")){var r=q.split(",");d.each(r,function(t,s){var u=n.children('option[value="'+s+'"]');u.attr("checked","checked")});n.val(r).trigger("change")}else{n.val(q)}}}}};if(b.CacheData==undefined){n.ajaxJsonSync("/admin/sys/user-profile-data/params.json",function(p){b.CacheData=p;if(Util.isDebugEnable()){Util.debug("Init ExtDataProfileParam.CacheData: "+JSON.stringify(b.CacheData))}i(b.CacheData[g])})}else{i(b.CacheData[g])}}var l=d('<span class="glyphicon glyphicon-tag tooltipster" title="点击显示数据收藏操作按钮"></span>');l.appendTo(n.closest(".form-group").children(".control-label"));l.on("click",function(){m.show();m.position({my:"right center",at:"left center",of:k});m.off();m.click(function(){var p={};k.find("[data-profile-param]").each(function(){var x=d(this);var w=x.attr("data-profile-param");var u=x.attr("name");if(x.is(":radio")){p[w]=k.find(':radio[name="'+u+'"]:checked').val()}else{if(x.is(":checkbox")){var t=[];var v=k.find(':checkbox[name="'+u+'"]:checked');v.each(function(){t.push(d(this).val())});p[w]=t.join(",")}else{if(x.is("select")){var t=[];var s=x.children("option:checked");s.each(function(){t.push(d(this).val())});p[w]=t.join(",")}else{p[w]=x.val()}}}});var q=[];for(var r in p){q.push(r)}p.codes=q.join(",");m.ajaxPostURL({url:WEB_ROOT+"/admin/sys/user-profile-data/edit",success:function(){d.each(q,function(s,t){if(b.CacheData){b.CacheData[t]=p[t]}});if(Util.isDebugEnable()){Util.debug("Updated ExtDataProfileParam.CacheData: "+JSON.stringify(b.CacheData))}m.hide()},confirmMsg:false,data:p})})}).tooltipster({contentAsHTML:true,offsetY:15,theme:"tooltipster-punk"})};function c(e){return this.each(function(){var h=d(this);var g=h.data("extDataProfileParam");var f=typeof e=="object"&&e;if(!g){h.data("extDataProfileParam",(g=new b(this,f)))}if(typeof e=="string"){g[e]()}})}var a=d.fn.extDataProfileParam;d.fn.extDataProfileParam=c;d.fn.extDataProfileParam.Constructor=b;d.fn.extDataProfileParam.noConflict=function(){d.fn.extDataProfileParam=a;return this};Global.addComponent({name:"ExtDataProfileParam",plugin:c,expr:"input[data-profile-param],select[data-profile-param]"})}(jQuery);