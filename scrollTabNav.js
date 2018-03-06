            $.fn.scrollTabNav = function(opt){
                var opts = {
                    navEle : null, //导航的element
                    contentELe : null, //导航对应内容起点的element
                    navTargetAddClassName : null, //滚动到当前内容块，导航添加的类名
                    navEleFlexAddClassName : null, //导航距离顶部为0时添加的类名
                    eventTarget : 'click',
                }
                var settings = $.extend({},opts,opt);
                if(!settings.navEle || !settings.contentELe){
                    console.warn('参数navEle与contentELe必填项');
                    return;
                }
                var _self = $(this);
                var HD = 0;
                var navOffsetTop = settings.navEle.offset().top;

                _self.bind(settings.eventTarget,tabNav);

                function tabNav(e){
                    var s=_self.index(this);
                     _self.removeClass(settings.navTargetAddClassName);
                     $(this).addClass(settings.navTargetAddClassName);
                     $(window).unbind('scroll');
                     HD = settings.contentELe.eq(s).offset().top-50;
                    $('body').animate({scrollTop:HD},200,function(){
                        scrollTab();
                    });
                };
     
                scrollTab();
                function scrollTab(){
                    var len = settings.contentELe.length;
                    $(window).bind('scroll',function(){
                        var scrollTop = $(window).scrollTop();
                        if(scrollTop >= navOffsetTop){
                            settings.navEle.addClass(settings.navEleFlexAddClassName);
                        }else{
                            settings.navEle.removeClass(settings.navEleFlexAddClassName);
                        }
                        for(var i = 0; i < len; i++ ){
                            if( (HD != scrollTop) && (scrollTop > $(settings.contentELe[i]).offset().top)){
                                _self.removeClass(settings.navTargetAddClassName);
                                _self.eq(i).addClass(settings.navTargetAddClassName);
                            }
                        }
                    });
                }
            }