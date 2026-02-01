function func()
{
  let input = document.getElementById("input");
  let str = input.value;
  updatecounter(str.length);
}
function updatecounter(l)
{
  let cnt = document.getElementById("counter");
  cnt.innerHTML = l + " / 150";
  if (l == 150)
  {
    document.getElementById("input").value = "";
    cnt.innerHTML = "0 / 150";
  }
}
