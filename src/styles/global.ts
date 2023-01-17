import { createGlobalStyle }  from "styled-components";

const Global = createGlobalStyle`

    :root {
        --white-1: 	#f2f2f2;
        --white-2: 	#ffffff;
		--gray-0: 	#cecece;
        --gray-1: 	#656565;
        --black: 	#000000;
        --blue-0: 	#D1DCE3;
        --blue-1:  rgba(209, 220, 227, 0.18);
        --blue-2: 	#3d75bb;
        --blue-3: 	#5D9CEC;
    }
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
html, body, #root {
	width: 100%;
	height: 100%;
	background: var(--white-1);
	font-family: 'SourceSansPro';
}
#root {
	display: flex;
	justify-content: center;
	align-items: center;
}


`
export default Global