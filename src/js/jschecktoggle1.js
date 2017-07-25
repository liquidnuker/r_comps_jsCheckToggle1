const checkToggle1 = {
  items: [],
  selectedItems: [],
  init: function (elmSel) {
    this.items = document.querySelectorAll(elmSel);
    this.addEvents();
  },
  addEvents: function () {
    NodeList.prototype.checkToggle1_EventListener = function (event, func) {
      this.forEach(function (content, item) {
        content.addEventListener(event, func);
      });
    };

    this.items.checkToggle1_EventListener("click", function (event) {
      checkToggle1.check(event.target);
    });

    document.getElementById("btn_checkAll").addEventListener("click", function () {
      checkToggle1.checkAll(true);
    });

    document.getElementById("btn_unCheckAll").addEventListener("click", function () {
      checkToggle1.checkAll(false);
    });
  },
  check: function (item) {
    let selectedItems = this.selectedItems;

    if (item.checked) {
      selectedItems.push(item.value);
    } else {
      let index = selectedItems.indexOf(item.value);
      selectedItems.splice(index, 1);
    }
    this.selectedItems = selectedItems;
    this.refresh();
  },
  checkAll: function (checked) {
    let items = this.items;
    let selectedItems = this.selectedItems;

    for (let i in items) {
      items[i].checked = checked;
    }

    // push / empty selectedItems
    if (checked) {
      selectedItems = [];
      // for NodeList
      for (let i of items) {
        selectedItems.push(i.value);
      }
    } else {
      selectedItems = [];
    }
    this.selectedItems = selectedItems;
    this.refresh();
  },
  refresh: function () {
    document.getElementById("selectedItems").innerHTML = this.selectedItems;
  }
};

checkToggle1.init(".jscheck1-01 > input");