const content = document.querySelector('#content')
const technologies = [
    {title: 'HTML', description: 'HTML Text', type: 'html', done: false},
    {title: 'CSS', description: 'CSS Text', type: 'css', done: false},
    {title: 'JS', description: 'JS Text', type: 'js', done: false},
    {title: 'Git', description: 'Git Text', type: 'git', done: false},
    {title: 'React', description: 'React Text', type: 'react', done: false}
]

let html = ''
for (let i = 0; i < technologies.length; i++) {
    const tech = technologies[i]
    html += `
    <div class="card">
          <h3>${tech.title}</h3>
        </div>
    `
}

content.innerHTML = html