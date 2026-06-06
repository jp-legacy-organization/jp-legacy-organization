if (window.self === window.top) {
    document.body.insertAdjacentHTML("afterbegin", `
        Brought to you by <abbr title="The Jody Parsley Legacy Organization"><b><line><a href="https://www.jodyparsley.org" target="_parent">J.P. Legacy Org.</a></line></b></abbr><img src="../../../favicon.ico" width="24px" style="box-shadow: none; border: none;">
    `);
}