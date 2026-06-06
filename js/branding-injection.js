if (window.self === window.top) {
    document.body.insertAdjacentHTML("afterbegin", `
    <section id="brought-to-you-by-message">
        Brought to you by 
        <abbr title="The Jody Parsley Legacy Organization">
            <b>
                <line>
                    <a href="https://www.jodyparsley.org" target="_parent" id="about-page-link">
                        J.P. Legacy Org.
                    </line>
                </b>
            </abbr>
            <img src="https://www.jodyparsley.org/favicon.ico" width="24px" id="record-logo-icon">
        </a>
        <section>
    <section id="record-logo-wordmark">
        <a href="https://www.jodyparsley.org" target="_parent" id="about-page-link">
            <img src="https://www.jodyparsley.org/assets/png/shared/logo.png" alt="The Jody Parsley Legacy Organization, Record Logo Wordmark.">
        </a>
    </section>
    `);
}
