document.addEventListener('click', function (event) {
    const toggle = document.getElementById('menu-toggle')
    const icon = document.querySelector('.menu-icon')
    const links = document.querySelector('.nav-links')

    const isClickInside =
        toggle.contains(event.target) || icon.contains(event.target) || links.contains(event.target)

    if (!isClickInside && toggle.checked) {
        toggle.checked = false
    }
})
