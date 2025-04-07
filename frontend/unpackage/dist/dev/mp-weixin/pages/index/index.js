"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      keyword: "",
      hotActivities: [],
      latestActivities: []
    };
  },
  onLoad() {
    this.loadHotActivities();
    this.loadLatestActivities();
  },
  methods: {
    loadHotActivities() {
      this.hotActivities = [
        {
          id: 1,
          title: "AI大模型应用实战工作坊",
          coverImage: "/static/logo.png",
          startTime: "2023-12-15T14:00:00",
          location: "北京市海淀区中关村创业大厦",
          price: 199,
          capacity: 30,
          enrolledCount: 25
        },
        {
          id: 2,
          title: "ChatGPT商业应用分享会",
          coverImage: "/static/logo.png",
          startTime: "2023-12-20T19:00:00",
          location: "线上直播",
          price: 0,
          capacity: 100,
          enrolledCount: 78
        }
      ];
    },
    loadLatestActivities() {
      this.latestActivities = [
        {
          id: 3,
          title: "AI产品经理训练营",
          coverImage: "/static/logo.png",
          startTime: "2023-12-25T09:30:00",
          location: "上海市浦东新区张江高科技园区",
          price: 2999,
          capacity: 20,
          enrolledCount: 8
        },
        {
          id: 4,
          title: "AI创业者交流会",
          coverImage: "/static/logo.png",
          startTime: "2023-12-30T14:00:00",
          location: "深圳市南山区科技园",
          price: 99,
          capacity: 50,
          enrolledCount: 12
        }
      ];
    },
    formatDate(dateString) {
      if (!dateString)
        return "";
      const date = new Date(dateString);
      return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
    },
    navigateToDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/activity/detail?id=${id}`
      });
    },
    navigateTo(url) {
      common_vendor.index.navigateTo({
        url
      });
    },
    searchActivities() {
      if (!this.keyword.trim())
        return;
      common_vendor.index.navigateTo({
        url: `/pages/activity/list?keyword=${encodeURIComponent(this.keyword)}`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.o((...args) => $options.searchActivities && $options.searchActivities(...args)),
    c: $data.keyword,
    d: common_vendor.o(($event) => $data.keyword = $event.detail.value),
    e: common_vendor.o((...args) => $options.searchActivities && $options.searchActivities(...args)),
    f: common_assets._imports_0,
    g: common_vendor.o(($event) => $options.navigateTo("/pages/activity/list")),
    h: common_vendor.f($data.hotActivities, (item, index, i0) => {
      return {
        a: item.coverImage || "/static/logo.png",
        b: common_vendor.t(item.title),
        c: common_vendor.t($options.formatDate(item.startTime)),
        d: common_vendor.t(item.location),
        e: common_vendor.t(item.price > 0 ? "¥" + item.price : "免费"),
        f: common_vendor.t(item.enrolledCount),
        g: common_vendor.t(item.capacity),
        h: index,
        i: common_vendor.o(($event) => $options.navigateToDetail(item.id), index)
      };
    }),
    i: common_vendor.o(($event) => $options.navigateTo("/pages/activity/list")),
    j: common_vendor.f($data.latestActivities, (item, index, i0) => {
      return {
        a: item.coverImage || "/static/logo.png",
        b: common_vendor.t(item.title),
        c: common_vendor.t($options.formatDate(item.startTime)),
        d: common_vendor.t(item.location),
        e: common_vendor.t(item.price > 0 ? "¥" + item.price : "免费"),
        f: common_vendor.t(item.enrolledCount),
        g: common_vendor.t(item.capacity),
        h: index,
        i: common_vendor.o(($event) => $options.navigateToDetail(item.id), index)
      };
    }),
    k: common_vendor.o(($event) => $options.navigateTo("/pages/activity/list")),
    l: common_vendor.o(($event) => $options.navigateTo("/pages/user/index"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
