$(document).ready(function () {
        var num = Math.floor(Math.random() * twettear.length);
        $('.d').addClass('animated pulse infinite')
        $('.d').animate({
            'width': '70px'
            , 'height': '70px'
        }, 900000);
        window.setTimeout(function () {
            $('embed').remove();
            $('body').append('<embed src="Css/trino.wav" autostart="true" hidden="true" loop="false">');
            window.setTimeout(function () {
                window.location.reload(true);
            }, 3000);
        }, 900000);
        $('#Twitear').click(function () {
            var tweet = $('#texto').val();
            $('#texto').val('');
            window.open('http://www.twitter.com/share?text=' + tweet);
        })
        window.open('http://www.twitter.com/share?text=' + twettear[num]);
    })
    /*
    <script src="jquery.js"></script>
    <script>
            $("document").ready(function(){var t=0,n=0,e=$('p a:contains("pic.twitter.com/")').text();$('p a:contains("pic.twitter.com/")').each(function(n,e){t++});alert("Cnatidad Imagenes = "+t);for(var a=',"',o=0;o<e.length;o++){if(o%26==0&&0!=o&&(a+='","',"p"!=e[o]&&"i"!=e[o+1]&&"c"!=e[o+2])){for(;"p"!=e[o]&&"i"!=e[o+1]&&"c"!=e[o+2];)o++;break}a+=e[o],o==e.length-1&&(a+='"')}console.log(a);var c="";$(".tweet-text").each(function(t,e){c+="|$"+$(e).text()+"%$",n++}),alert("Cantiadad Trinos"+n);for(var i="",o=0;o<c.length;o++)"\n"==c[o]?i+="%0d":'"'==c[o]?i+="%22":"|"==c[o]&&"$"==c[o+1]?(i+=',"',o++):"%"==c[o]&&"$"==c[o+1]?(i+='"',o++):"p"==c[o]&&"i"==c[o+1]&&"c"==c[o+1]&&"."==c[o+1]?(i+=" ",o++):i+=c[o];console.log("TRINOS DE TEXTO\n\n"+i)});
            });            
        </script>
    */