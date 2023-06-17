let alpha = "abcdefghijklmnopqrstuvwxyz";
let upperAlpha = alpha.toUpperCase();
let num = "0123456789"
let spec = "!@#$%^&*()_+{}|'><`~"
let all = "";
function generate()
{
    all = alpha;
    let password = ""
    if ($("#uppercase").prop("checked"))
    {
        all += upperAlpha;
    }
    if ($("#spec").prop("checked"))
    {
        all += spec;
    }
    if ($("#num").prop("checked"))
    {
        all += num;
    }
    for (let i = 0; i < 8; i++)
    {
        password += all[Math.floor((Math.random() * all.length))]
    }
    $(".password").text(password)
}
generate()
$("#generate").click(function ()
{
    generate()
})
$(".copy").click(function ()
{
    let prev = $(".copy").html()
    $(".copy").text("Copied")
    setTimeout(() =>
    {
        $(".copy").html(prev)
    }, 1500);
    navigator.clipboard.writeText($(".password").text())
})