function expandAll() {
    var rows = $("#treegrid").jqGrid('getGridParam', 'data');
    if (rows) {
      for (i = 0; i < rows.length; i++) {
        $("#treegrid").jqGrid('expandRow', rows[i]);
        //$("#treegrid").jqGrid('expandNode',rows[i]);
      }
    }
  
  }
  
  function collapseAll() {
    var rows = $("#treegrid").jqGrid('getGridParam', 'data');
    if (rows) {
      for (i = 0; i < rows.length; i++) {
        $("#treegrid").jqGrid('collapseRow', rows[i]);
        //$("#treegrid").jqGrid('collapseNode',rows[i]);
      }
    }
  }
  
  $(document).ready(function() {
    var mydata = [{
        id: "1",
        name: "Cash",
        num: "100",
        debit: "400.00",
        credit: "250.00",
        balance: "150.00",
        enbl: "1",
        level: "0",
        parent: "null",
        isLeaf: false,
        expanded: false,
        loaded: true
      }, {
        id: "2",
        name: "Cash 1",
        num: "1",
        debit: "300.00",
        credit: "200.00",
        balance: "100.00",
        enbl: "0",
        level: "1",
        parent: "1",
        isLeaf: false,
        expanded: false,
        loaded: true
      }, {
        id: "3",
        name: "Sub Cash 1",
        num: "1",
        debit: "300.00",
        credit: "200.00",
        balance: "100.00",
        enbl: "1",
        level: "2",
        parent: "2",
        isLeaf: true,
        expanded: false,
        loaded: true,
        icon: "ui-icon-star"
      }, {
        id: "4",
        name: "Cash 2",
        num: "2",
        debit: "100.00",
        credit: "50.00",
        balance: "50.00",
        enbl: "0",
        level: "1",
        parent: "1",
        isLeaf: true,
        expanded: false,
        loaded: true,
        icon: "ui-icon-flag"
      }, {
        id: "5",
        name: "Bank\'s",
        num: "200",
        debit: "1500.00",
        credit: "1000.00",
        balance: "500.00",
        enbl: "1",
        level: "0",
        parent: "null",
        isLeaf: false,
        expanded: false,
        loaded: true
      }, {
        id: "6",
        name: "Bank 1",
        num: "1",
        debit: "500.00",
        credit: "0.00",
        balance: "500.00",
        enbl: "0",
        level: "1",
        parent: "5",
        isLeaf: true,
        expanded: false,
        loaded: true,
        icon: "ui-icon-home"
      }, {
        id: "7",
        name: "Bank 2",
        num: "2",
        debit: "1000.00",
        credit: "1000.00",
        balance: "0.00",
        enbl: "1",
        level: "1",
        parent: "5",
        isLeaf: true,
        expanded: false,
        loaded: true,
        icon: "ui-icon-suitcase"
      }, {
        id: "8",
        name: "Fixed asset",
        num: "300",
        debit: "0.00",
        credit: "1000.00",
        balance: "-1000.00",
        enbl: "0",
        level: "0",
        parent: "null",
        isLeaf: true,
        expanded: false,
        loaded: true,
        icon: "ui-icon-lightbulb"
      }],
      $grid = $("#treegrid"),
      getColumnIndexByName = function(columnName) {
        var $this = $(this),
          cm = $this.jqGrid('getGridParam', 'colModel'),
          i, l = cm.length;
        for (i = 0; i < l; i++) {
          if (cm[i].name === columnName) {
            return i; // return the index
          }
        }
        return -1;
      },
      orgExpandNode = $.fn.jqGrid.expandNode,
      orgCollapseNode = $.fn.jqGrid.collapseNode,
      lastSel;
  
    $.jgrid.formatter.integer.thousandsSeparator = ',';
    $.jgrid.formatter.number.thousandsSeparator = ',';
    $.jgrid.formatter.currency.thousandsSeparator = ',';
    $grid.jqGrid({
      datatype: "jsonstring",
      datastr: mydata,
      colNames: ["Account", "Acc Num", "Debit", "Credit", "Balance", "Enabled"],
      colModel: [{
        name: 'name',
        index: 'name',
        width: 180,
        editable: true
      }, {
        name: 'num',
        index: 'acc_num',
        width: 80,
        formatter: 'integer',
        sorttype: 'int',
        align: 'center'
      }, {
        name: 'debit',
        index: 'debit',
        width: 80,
        formatter: 'number',
        sorttype: 'number',
        align: 'right'
      }, {
        name: 'credit',
        index: 'credit',
        width: 80,
        formatter: 'number',
        sorttype: 'number',
        align: 'right'
      }, {
        name: 'balance',
        index: 'balance',
        width: 80,
        formatter: 'number',
        sorttype: 'number',
        align: 'right'
      }, {
        name: 'enbl',
        index: 'enbl',
        width: 60,
        align: 'center',
        formatter: 'checkbox',
        editoptions: {
          value: '1:0'
        }
      }],
      height: 'auto',
      gridview: true,
      rowNum: 10000,
      sortname: '',
      treeGrid: true,
      treeGridModel: 'adjacency',
      treedatatype: "local",
      ExpandColumn: 'name',
      //cellEdit: true,
      //cellsubmit : 'clientArray',
      editurl: 'clientArray',
      onSelectRow: function(rowid) {
        var $this = $(this);
        if (rowid && rowid !== lastSel) {
          $this.jqGrid('restoreRow', lastSel);
          lastSel = rowid;
        }
      },
      ondblClickRow: function(rowid) {
        $(this).jqGrid('editRow', rowid, true);
      },
      caption: "Demonstrate how to use individual tree icons",
      jsonReader: {
        repeatitems: false,
        root: function(obj) {
          return obj;
        },
        page: function() {
          return 1;
        },
        total: function() {
          return 1;
        },
        records: function(obj) {
          return obj.length;
        }
      },
      loadComplete: function(data) {
        var item, i, l = data.length || 0;
        for (i = 0; i < l; i++) {
          item = data[i];
          if (!item.isLeaf && (item.level === "0" || item.level === 0)) {
            if (item.expanded) {
              $("#" + item.id + " div.treeclick")
                .removeClass("ui-icon-triangle-1-s")
                .addClass("ui-icon-carat-1-s");
            } else {
              $("#" + item.id + " div.treeclick")
                .removeClass("ui-icon-triangle-1-e")
                .addClass("ui-icon-carat-1-e");
            }
  
          }
        }
      }
    });
    $grid.jqGrid('setGridParam', {
      treeGrid: false
    });
    $grid.jqGrid('sortableRows', {
      update: function(e, ui) {
        var $myGrid = $(this).parent(),
          newParent, newLevel, prevId, rowPrevData, $iconDiv, iCol,
          rowid = ui.item[0].id,
          rowData = $myGrid.jqGrid('getLocalRow', rowid),
          $tr = $('#' + $.jgrid.jqID(rowid));
        newRowIndex = $tr[0].rowIndex;
        if (newRowIndex > 1) {
          prevId = $tr.prev().attr('id');
          rowPrevData = $myGrid.jqGrid('getLocalRow', prevId);
          if (rowPrevData.isLeaf) {
            newLevel = Number(rowPrevData.level);
            newParent = rowPrevData.parent;
          } else {
            newLevel = Number(rowPrevData.level) + 1;
            newParent = prevId;
          }
        } else {
          // set parent to null and level to 0
          newParent = "null";
          newLevel = 0;
        }
        rowData.parent = newParent;
        rowData.level = newLevel;
        $iconDiv = $tr.find("div.tree-wrap");
        $iconDiv.width((newLevel + 1) * 18); // 18px per level
        $iconDiv.children("div.treeclick:first").css("left", (newLevel * 18) + 'px');
        //alert("item with id=" + ui.item[0].id + " is droped");
  
        iCol = getColumnIndexByName.call($grid[0], "level");
        $tr.children('td:eq(' + iCol + ')').text(newLevel);
      }
    });
    $grid.jqGrid('setGridParam', {
      treeGrid: true
    });
  
    $.jgrid.extend({
      expandNode: function(rc) {
        var ret = orgExpandNode.call(this, rc);
        if (!rc.isLeaf && (rc.level === "0" || rc.level === 0)) {
          $("#" + rc._id_ + " div.treeclick")
            .removeClass("ui-icon-triangle-1-s ui-icon-carat-1-e")
            .addClass("ui-icon-carat-1-s");
        }
        return ret;
      },
      collapseNode: function(rc) {
        var ret = orgCollapseNode.call(this, rc);
        if (!rc.isLeaf && (rc.level === "0" || rc.level === 0)) {
          $("#" + rc._id_ + " div.treeclick")
            .removeClass("ui-icon-triangle-1-e ui-icon-carat-1-s")
            .addClass("ui-icon-carat-1-e");
        }
        return ret;
      }
    });
  })
  