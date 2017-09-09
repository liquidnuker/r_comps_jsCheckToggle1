class CheckToggle1 {
  constructor(opts) {
    this.items = [];
    this.selectedItems = [];

    this.checkBoxes = opts.checkBoxes;
  }

  init() {
    this.items = document.querySelectorAll(this.checkBoxes);
    this.addEvents();
  }

  addEvents() {
    let itemArr = Array.prototype.slice.call(this.items);

    let self = this;
    itemArr.forEach(function(i) {
        i.addEventListener("click", function(event) {
          self.check(event.target)
        });
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
}

let CT1 = new CheckToggle1({
  checkBoxes: ".jscheck1-01 > input"
});

CT1.init();