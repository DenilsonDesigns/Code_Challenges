const TARGET = `<a class="dropdown-item" onclick="emitEvent('RECORD_EDIT',{&quot;id&quot;:765},this);return false;">Edit</a>`;

function findId(targetStr) {
  let curr = targetStr.split("{&quot;id&quot;:");
  return +curr[1].split("}")[0];
}

console.log(findId(TARGET));
