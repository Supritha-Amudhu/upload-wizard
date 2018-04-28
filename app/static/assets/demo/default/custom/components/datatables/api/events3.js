var DefaultDatatableDemo=function() {
    var e=function(t) {
        var a=$("#m_datatable_console").append(t+"\t\n");
        $(a).scrollTop(a[0].scrollHeight-$(a).height())
    }
    ;
    return {
        init:function() {
            var t;
            t=$(".m_datatable").mDatatable( {
                data: {
                    type:"remote", source: {
                        read: {
                            url: "http://127.0.0.1:5000/api/histories"
                        }
                    }
                    , pageSize:5, serverPaging:!0, serverFiltering:!0, serverSorting:!0
                }
                , layout: {
                    theme: "default", class: "", scroll: !0, height: "auto", footer: !1
                }
                , sortable:!0, toolbar: {
                    placement:["bottom"], items: {
                        pagination: {
                            pageSizeSelect: [5, 10, 20, 30, 50]
                        }
                    }
                }
                , search: {
                    input: $("#generalSearch")
                }
                , columns:[ {
                    field:"UserId", title:"#", sortable:!1, width:40, selector: {
                        class: "m-checkbox--solid m-checkbox--brand"
                    }
                }
                , {
                    field:"ID", title:"Order ID", filterable:!1, width:150
                }
                , {
                    field:"FileName", title:"Ship Country", width:150
                }
                , {
                    field: "FileSize", title: "Ship City", sortable: !1
                }
                , {
                    field: "NaturalProducts", title: "Currency", width: 100
                }
                , {
                    field: "Purchasability", title: "Ship Date", sortable: "asc"
                }
                , {
                    field:"Status", title:"Status", template:function(t) {
                        var a= {
                            1: {
                                title: "Pending", class: "m-badge--brand"
                            }
                            , 2: {
                                title: "Delivered", class: " m-badge--metal"
                            }
                            , 3: {
                                title: "Canceled", class: " m-badge--primary"
                            }
                            , 4: {
                                title: "Success", class: " m-badge--success"
                            }
                            , 5: {
                                title: "Info", class: " m-badge--info"
                            }
                            , 6: {
                                title: "Danger", class: " m-badge--danger"
                            }
                            , 7: {
                                title: "Warning", class: " m-badge--warning"
                            }
                        }
                        ;
                        return'<span class="m-badge '+a[t.Status].class+' m-badge--wide">'+a[t.Status].title+"</span>"
                    }
                }
                , {
                    field:"Actions", width:110, title:"Actions", sortable:!1, overflow:"visible", template:function(t, a, e) {
                        return'\t\t\t\t\t\t<div class="dropdown '+(e.getPageSize()-a<=4?"dropup": "")+'">\t\t\t\t\t\t\t<a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"></i>                            </a>\t\t\t\t\t\t  \t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\t\t\t\t\t\t  \t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                    }
                }
                ]
            }
            ),
            $("#m_datatable_clear").on("click", function() {
                $("#m_datatable_console").html("")
            }
            ),
            $("#m_datatable_reload").on("click", function() {
                t.reload()
            }
            ),
            $(".m_datatable").on("m-datatable--on-init", function() {
                e("Datatable init")
            }
            ).on("m-datatable--on-layout-updated", function() {
                e("Layout render updated")
            }
            ).on("m-datatable--on-ajax-done", function() {
                e("Ajax data successfully updated")
            }
            ).on("m-datatable--on-ajax-fail", function(t, a) {
                e("Ajax error")
            }
            ).on("m-datatable--on-goto-page", function(t, a) {
                e("Goto to pagination: "+a.page)
            }
            ).on("m-datatable--on-update-perpage", function(t, a) {
                e("Update page size: "+a.perpage)
            }
            ).on("m-datatable--on-reloaded", function(t) {
                e("Datatable reloaded")
            }
            ).on("m-datatable--on-check", function(t, a) {
                e("Checkbox active: "+a.toString())
            }
            ).on("m-datatable--on-uncheck", function(t, a) {
                e("Checkbox inactive: "+a.toString())
            }
            ).on("m-datatable--on-sort", function(t, a) {
                e("Datatable sorted by "+a.field+" "+a.sort)
            }
            )
        }
    }
}

();
jQuery(document).ready(function() {
    DefaultDatatableDemo.init()
}

);