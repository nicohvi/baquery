import $ from "baquery";

$(document)
  .asEventStream("click")
  .onValue(() => console.log("click"));
