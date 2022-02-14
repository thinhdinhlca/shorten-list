window.function = function (items, limit) {

  items = items.value ?? "";
  limit = limit.value ?? "";
  arrayIT = items.split(",");

  if (items == "") {
    return "";
  }

  else {

  const slicedArray = arrayIT.slice(0, limit);
  
  var final = slicedArray.join(",");

  var morenum = arrayIT.length - limit;
  
  let moreinfo = "";

  if (morenum > 0) {
    moreinfo = `and ${morenum} more`;
  }

  else moreinfo = "";

return `${final} ${moreinfo}`;
}
}