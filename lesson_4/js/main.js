// document.getElementById('some-p').style.color = 'red';

// document
//     .querySelector('#some-button')
//     .addEventListener('click', function() {
//         var elements = document.querySelectorAll('.some-p');

//         for (const element of elements) {
//                 console.log(element);
//                 if (element.style.color == 'red') {
//                     element.style.color = 'black';
//                     element.innerHTML = 'Foo <strong>Bar</strong>'
//                 } else {
//                     element.style.color = 'red'
//                     element.innerText = 'Bar <strong>Foo</strong>'
//                 }
//         }
//     });

//$ =  jQuery identiski var rakstīt

$('#some-button').on('click', function() {
    var elements = $('.some-p');
    if (elements.css('color') == 'rgb(255, 0, 0)') {
        elements.css('color', 'rgb(0, 0, 0)');
        elements.html ('Foo <strong>Bar</strong>');
        
    } else{
        elements.css('color', 'rgb(255, 0, 0)');
        elements.text ('Bar <strong>Foo</strong>');
        
    }
    elements.slideToggle(1000);
});

$('#add-task').click(function() {
    var el = '<li>' + $('#task-name').val() + '<li>';
    $('#task-list').prepend(el);
    $('#task-name').val('')
});

$( "#date" ).datepicker();







