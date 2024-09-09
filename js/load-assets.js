
//var websiteUrl = 'http://192.168.43.159/testmobile';
var websiteUrl = 'https://testmobile-ttech-globals-projects.vercel.app/';

function _loadScript() {
    $('<script>', { src: websiteUrl+'/js/scripts.js?v='+ new Date().getTime() }).appendTo('head');
}


function _loadCSS() {
    $('<link>', { rel: 'stylesheet', href: websiteUrl+'/css/paramount.css?v='+ new Date().getTime() }).appendTo('head');  
    $('<link>', { rel: 'stylesheet', href: websiteUrl+'/css/style.css?v='+ new Date().getTime() }).appendTo('head');  
}
