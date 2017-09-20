class CheckToggle1 {
  constructor(opts) {
    // this.items = [];
    this.selectedItems = [];

    this.checkBoxes = opts.checkBoxes;
    this.selectedItemHolder = opts.selectedItemHolder;
    this.btnCheckAll = opts.btnCheckAll;
    this.btnUncheckAll = opts.btnUncheckAll;

    this.checkedAll = opts.checkedAll;
  }

  init() {
    this.items = document.querySelectorAll(this.checkBoxes);
    this.addEvents();
    this.checkAll(this.checkedAll);
  }

  addEvents() {
    let itemArr = Array.prototype.slice.call(this.items);

    let self = this;
    itemArr.forEach(function (i) {
      i.addEventListener("click", function (event) {
        self.check(event.target);
      });
    });

    document.getElementById(this.btnCheckAll).addEventListener("click", () => {
      this.checkAll(true);
    });

    document.getElementById(this.btnUncheckAll).addEventListener("click", () => {
      this.checkAll(false);
    });
  }

  check(item) {
    let selectedItems = this.selectedItems;

    if (item.checked) {
      selectedItems.push(item.value);
    } else {
      let index = selectedItems.indexOf(item.value);
      selectedItems.splice(index, 1);
    }
    this.refresh();
  }

  checkAll(checked) {
    let selectedItems = this.selectedItems;
    let items = this.items;

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

    this.items = items;
    this.selectedItems = selectedItems;
    this.refresh();
  }

  refresh() {
    document.getElementById(this.selectedItemHolder).innerHTML = this.selectedItems;
  }
}

let CT1 = new CheckToggle1({
  checkBoxes: ".jscheck1-01 > input",
  selectedItemHolder: "jscheck1-01_selectedItems",
  btnCheckAll: "jscheck1-01_btn_checkAll",
  btnUncheckAll: "jscheck1-01_btn_unCheckAll",
  checkedAll: true // default
});

CT1.init();