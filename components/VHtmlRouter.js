export default {
  name: 'VHtmlRouter',
  methods: {
    vHtmlRouter (refs) {
      var links = refs.querySelectorAll('a')
      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', (event) => {
          var target = event.target
          while (target) {
            if (target instanceof HTMLAnchorElement) {
              var link = target.getAttribute('href')
              console.log(link.substr(0, 4))
              if (link.substr(0, 4) === 'http') {
                window.location.href = link
              } else {
                this.$router.push(target.getAttribute('href'))
              }
              break
            }
            target = target.parentNode
          }
          event.preventDefault()
        })
      }
    }
  }
}
