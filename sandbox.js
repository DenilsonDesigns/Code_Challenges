function findId(targetStr) {
  let curr = targetStr.split("{&quot;id&quot;:&quot;");
  console.log("curr: ", curr);
  return +curr[1].split("&quot;}")[0];
}

console.log(
  findId(
    '<ul class="navbar-nav ml-auto"><li class="dropdown"><a id="Dropdown-6177776481d2f" class="btn btn-default dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>Tools<span class="caret"></span></a><div class="dropdown-menu dropdown-menu-right dropDownToggleFix" aria-labelledby="Dropdown-6177776481d2f"><a class="dropdown-item" onclick="emitEvent(&#039;RECORD_VIEW&#039;,{&quot;id&quot;:&quot;2021000000074540&quot;},this);return false;">View</a><a class="dropdown-item" onclick="emitEvent(&#039;RECORD_DELETE&#039;,{&quot;id&quot;:&quot;2021000000074540&quot;},this);return false;">Delete</a></div></li></ul>'
  )
);
