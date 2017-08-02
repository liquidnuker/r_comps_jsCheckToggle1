const checkToggle1 = (function () {
  let items = [];
  let selectedItems = [];

  function init(selector) {
    items = document.querySelectorAll(selector);
    addEvents();
  }

  function addEvents() {
    NodeList.prototype.checkToggle1_EventListener = function (event, func) {
      this.forEach(function (content, item) {
        content.addEventListener(event, func);
      });
    };

    items.checkToggle1_EventListener("click", function (event) {
      check(event.target);
    });

    document.getElementById("btn_checkAll").addEventListener("click", function () {
      checkAll(true);
    });

    document.getElementById("btn_unCheckAll").addEventListener("click", function () {
      checkAll(false);
    });
  }

  function check(item) {
    if (item.checked) {
      selectedItems.push(item.value);
    } else {
      let index = selectedItems.indexOf(item.value);
      selectedItems.splice(index, 1);
    }
    refresh();
  }

  function checkAll(checked) {
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
    refresh();
  }

  function refresh() {
    document.getElementById("selectedItems").innerHTML = selectedItems;
  }

  return {
    init: init
  };
})();

checkToggle1.init(".jscheck1-01 > input");