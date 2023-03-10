$(document).ready(function () {
  $("#basicTree").jstree({
    core: { themes: { responsive: !1 } },
    types: {
      default: { icon: "md md-folder" },
      file: { icon: "md md-insert-drive-file" },
    },
    plugins: ["types"],
  }),
    $("#checkTree").jstree({
      core: { themes: { responsive: !1 } },
      types: {
        default: { icon: "fa fa-folder" },
        file: { icon: "fa fa-file" },
      },
      plugins: ["types", "checkbox"],
    }),
    $("#dragTree").jstree({
      core: { check_callback: !0, themes: { responsive: !1 } },
      types: {
        default: { icon: "fa fa-folder" },
        file: { icon: "fa fa-file" },
      },
      plugins: ["types", "dnd"],
    }),
    $("#ajaxTree").jstree({
      core: {
        check_callback: !0,
        themes: { responsive: !1 },
        data: {
          url: function (e) {
            return "#" === e.id
              ? "../plugins/jstree/ajax_roots.json"
              : "../plugins/jstree/ajax_children.json";
          },
          data: function (e) {
            return { id: e.id };
          },
        },
      },
      types: {
        default: { icon: "fa fa-folder" },
        file: { icon: "fa fa-file" },
      },
      plugins: ["contextmenu", "dnd", "search", "state", "types", "wholerow"],
    });
});
