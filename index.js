const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
---
⏰ Updated on ${new Date().toUTCString()}
---

[![Anurag's github stats](https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=RimuruDev&show_icons=true&count_private=true&custom_title=RimuruDev's%20GitHub%20profile&theme=vision-friendly-dark&line_height=40&hide_border=true)](https://github.com/anuraghazra/github-readme-stats)
[![Anurag's github stats](https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=RimuruDev&custom_title=RimuruDev's%20code%20language&theme=radical&line_height=10hide_border=true&hide=html&exclude_repo=python_vim)](https://github.com/anuraghazra/github-readme-stats)

![](https://raw.githubusercontent.com/RimuruDev/RimuruDev/master/assets/github-contribution-grid-snake.svg)
\
`
console.log(readme)
