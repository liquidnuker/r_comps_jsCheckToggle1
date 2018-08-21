class CheckToggle1 {
  constructor(opts) {
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

  getId(el) {
    return document.getElementById(el);
  }

  addEvents() {
    let itemArr = Array.prototype.slice.call(this.items);

    itemArr.forEach((i) => {
      i.addEventListener("change", (event) => {
        this.check(event.target);
      });
    });

    this.getId(this.btnCheckAll).addEventListener("click", () => {
      this.checkAll(true);
    });

    this.getId(this.btnUncheckAll).addEventListener("click", () => {
      this.checkAll(false);
    });
  }

  check(item) {
    if (item.checked) {
      this.selectedItems.push(item.value);
    } else {
      let index = this.selectedItems.indexOf(item.value);
      this.selectedItems.splice(index, 1);
    }
    this.refresh();
  }

  checkAll(checked) {
    for (let i in this.items) {
      this.items[i].checked = checked;
    }

    // push / empty selectedItems
    if (checked) {
      this.selectedItems = [];
      // for NodeList
      for (let i of this.items) {
        this.selectedItems.push(i.value);
      }
    } else {
      this.selectedItems = [];
    }

    this.refresh();
  }

  refresh() {
    this.getId(this.selectedItemHolder).innerHTML = this.selectedItems.sort();
  }
}

// jscheck1-01
let CT1 = new CheckToggle1({
  checkBoxes: ".jscheck1-01 > input",
  selectedItemHolder: "jscheck1-01_selectedItems",
  btnCheckAll: "jscheck1-01_btn_checkAll",
  btnUncheckAll: "jscheck1-01_btn_unCheckAll",
  checkedAll: true // default
});
CT1.init();

// jscheck1-02
let CT2 = new CheckToggle1({
  checkBoxes: ".jscheck1-02 > input",
  selectedItemHolder: "jscheck1-02_selectedItems",
  btnCheckAll: "jscheck1-02_btn_checkAll",
  btnUncheckAll: "jscheck1-02_btn_unCheckAll",
  checkedAll: true // default
});
CT2.init();

// jscheck1-03
let CT3 = new CheckToggle1({
  checkBoxes: ".jscheck1-03 > input",
  selectedItemHolder: "jscheck1-03_selectedItems",
  btnCheckAll: "jscheck1-03_btn_checkAll",
  btnUncheckAll: "jscheck1-03_btn_unCheckAll",
  checkedAll: true // default
});
CT3.init();