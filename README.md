# scrollTabNav
滚动页面切换导航

      //使用方法
      $(".zwh-nav td a").scrollTabNav({
          navEle : $('.zwh-nav'), //导航的element
          contentELe : $(".zwhfl"), //导航对应内容起点的element
          navTargetAddClassName : 'on', //滚动到当前内容块，导航添加的类名
          navEleFlexAddClassName : 'flex', //导航距离顶部为0时添加的类名
          eventTarget : 'click' //默认事件为click
      })
