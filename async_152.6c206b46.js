(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{162:function(t,n,o){var i=o(236);"string"==typeof i&&(i=[[t.i,i,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};o(13)(i,c);i.locals&&(t.exports=i.locals)},236:function(t,n,o){(t.exports=o(14)(!1)).push([t.i,"\n.demo-goods-action .van-goods-action {\n    position: relative;\n}\n",""])},237:function(t,n,o){"use strict";var i=o(162);o.n(i).a},391:function(t,n,o){"use strict";o.r(n);var i={i18n:{"zh-CN":{clickIcon:"点击图标",clickButton:"点击按钮",icon1:"客服",icon2:"购物车",icon3:"店铺",button1:"加入购物车",button2:"立即购买",title2:"图标提示"},"en-US":{clickIcon:"Click Icon",clickButton:"Click Button",icon1:"Icon1",icon2:"Icon2",icon3:"Icon3",button1:"Button1",button2:"Button2",title2:"Icon info"}},methods:{onClickMiniBtn:function(){Toast(this.$t("clickIcon"))},onClickBigBtn:function(){Toast(this.$t("clickButton"))}}},c=(o(237),o(0)),a=Object(c.a)(i,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("demo-section",[o("demo-block",{attrs:{title:t.$t("basicUsage")}},[o("van-goods-action",[o("van-goods-action-mini-btn",{attrs:{icon:"chat",text:t.$t("icon1")},on:{click:t.onClickMiniBtn}}),o("van-goods-action-mini-btn",{attrs:{icon:"cart",text:t.$t("icon2")},on:{click:t.onClickMiniBtn}}),o("van-goods-action-big-btn",{attrs:{text:t.$t("button1")},on:{click:t.onClickBigBtn}}),o("van-goods-action-big-btn",{attrs:{text:t.$t("button2"),primary:""},on:{click:t.onClickBigBtn}})],1)],1),o("demo-block",{attrs:{title:t.$t("title2")}},[o("van-goods-action",[o("van-goods-action-mini-btn",{attrs:{icon:"chat",text:t.$t("icon1")},on:{click:t.onClickMiniBtn}}),o("van-goods-action-mini-btn",{attrs:{icon:"cart",info:"5",text:t.$t("icon2")},on:{click:t.onClickMiniBtn}}),o("van-goods-action-mini-btn",{attrs:{icon:"shop",text:t.$t("icon3")},on:{click:t.onClickMiniBtn}}),o("van-goods-action-big-btn",{attrs:{text:t.$t("button1")},on:{click:t.onClickBigBtn}}),o("van-goods-action-big-btn",{attrs:{text:t.$t("button2"),primary:""},on:{click:t.onClickBigBtn}})],1)],1)],1)},[],!1,null,null,null);n.default=a.exports}}]);