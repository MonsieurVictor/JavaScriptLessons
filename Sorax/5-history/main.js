var links, 
    updatestate,
    updatebuttons,
    contentEl,
    navEl;

contentEl = document.querySelector('.content');
navEl = document.querySelector('.nav');

links = {
    main: "This is the <strong>main</strong> page",
    about: "This is the <strong>about</strong> page",
    downloads: "This is the <strong>downloads</strong> page",
};

updatestate = (state) => {
    if (!state) return;
    contentEl.innerHTML = links [state.page];
};

updatebuttons = (state) => {
    [].slice.call(navEl.querySelectorAll('a'))
    .forEach( (e) => {
        var classList = e.parentNode.classList;
        state.page === e.getAttribute('href')
            ? classList.add('active')
            : classList.remove('active');
    });
};

window.addEventListener('popstate', (e) => { 
    updatestate(e.state)
})

navEl.addEventListener('click', (e) => {
    var state;
    if (e.target.tagName !== 'A') return;
    state = {
        page: e.target.getAttribute('href')
    };
    history.pushState(state, '', state.page);
    updatestate(state);
    e.preventDefault();
});
