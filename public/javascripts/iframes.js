

var ifrm = document.createElement('iframe');
ifrm.setAttribute('id', 'parlement');
document.body.appendChild(ifrm); // to place at end of document
parlement.setAttribute('src', 'gov');

for (var i = 0; i<3; i++) {
    var ifrm = document.createElement('iframe');
    ifrm.setAttribute('id', 'constituency'+i); // assign an id
    // to place before another page element
   // var el = document.getElementById('parlement');
    //el.parentNode.insertBefor(ifrm1, el);
    document.body.appendChild(ifrm)
    ifrm.setAttribute('src', 'constituency.html');

    for (var j=0; j<3; j++){
        var ifrm = document.createElement('iframe');
        ifrm.setAttribute('id', 'voter'+j+i); // assign an id
        // to place before another page element
        var el = document.getElementById('constituency'+i);
        //el.parentNode.insertAfter(ifrm, el);
        document.body.appendChild(ifrm)
        ifrm.setAttribute('src', 'candidate.html');
    }

    for (var j=0; j<10; j++){
        var ifrm = document.createElement('iframe');
        ifrm.setAttribute('id', 'voter'+j+i); // assign an id
        // to place before another page element
        var el = document.getElementById('constituency'+i);
        //el.parentNode.insertAfter(ifrm, el);
        document.body.appendChild(ifrm)
        ifrm.setAttribute('src', 'voter.html');
    }
} 