$("#ui-select-selectmenu").selectmenu();

$("#ui-select-chosen").chosen({
  width: "250px"
});

//$('#ui-select-selectric').selectric();

var vm = {
  nativeSelected: ko.observableArray(["Option 1"]),
  availableOptions: ko.observableArray([
    "",
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6"
  ])
};

ko.applyBindings(vm);
