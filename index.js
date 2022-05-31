let cont = [
    {
        qoute : `Be yourself everyone else is already taken`,
         aouther : `Oscar Wilde`},
    {
        qoute : `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best`,
         aouther : `Marilyn Monroe`},
    {
        qoute : `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
         aouther : `Albert Einstein`},
    {
        qoute : `So many books, so little time`,
         aouther : `Frank Zappa`},
    {
        qoute : `A room without books is like a body without a soul.v`,
         aouther : `Marcus Tullius Cicero`},
    {
        qoute : `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
         aouther : `Bernard M. Baruch`},
    {
        qoute : `You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.`,
     aouther : `William W. Purkey`},
    {
        qoute : `You know you're in love when you can't fall asleep because reality is finally better than your dreams`,
         aouther : ` Dr. Seuss`},
    {
        qoute : `You only live once, but if you do it right, once is enough.`,
         aouther : ` Robert Frost`},
    {
        qoute : `“If you tell the truth, you don't have to remember anything.`,
         aouther : ` Mark Twain`},
]



document.getElementById('myButton').onclick = function () {
    let randomNumber = Math.floor(Math.random() * 11)
        document.getElementById('myContent').innerHTML =
        `<p>"${cont[randomNumber].qoute}"</p>
        <p class="fw-bold">-- ${cont[randomNumber].aouther}</p>`
}

