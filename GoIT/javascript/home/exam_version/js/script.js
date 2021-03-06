
var partners = {
    '1': {
        'photo': 'img/partner1.png',
        'name':  'Bradley Hunter',
        'hobby': 'Based in Chicago. I love playing tennis and loud music.'
        },
    '2': {
        'photo': 'img/partner2.png',
        'name':  'Lucas Marsha',
        'hobby': 'I get my inspiration from nature and objects around me. I have a passion to colours, typography and skateboards.'
        },
    '3':{
        'photo': 'img/partner3.png',
        'name':  'Heather Walker',
        'hobby': 'I\'m a happy person that loves cats and climbing on mountains.'
        },
    '4':{
        'photo': 'img/partner4.png',
        'name':  'Bradley Hunter',
        'hobby': 'Based in Chicago. I love playing tennis and loud music.'
        },
}
var words = ['sport', 'ice-cream', 'tree', 'sea', 'spring', 'skateboards', 'flower', 'food', 'animal', 'building', 'country', 'cars', 'jewelery'];
function getWord(min, max){
	var rand = min + Math.floor(Math.random() * (max + 1 - min));
	//return words[rand]; //слова для поиска из нашего массива
}

$(function(){

  $.support.cors = true;//поддержка ajax для IE
    var htmlka = $('#partners-list').html();
    var content = tmpl(htmlka, partners);
    $('.partners').append(content);   
    
    var queryWord = getWord(0,12);
    function ajaxRequest(word){
      $.ajax({
        type: 'GET',
        url: 'http://api.pixplorer.co.uk/image?word='+word+'&amount=7&size=m',
        dataType: 'json',
        cache: false,
    
        success: function (data){   

            var img_tmpl = $('#images-list').html();
            var img_content = tmpl(img_tmpl, {data: data});
            $('.grid').remove();
            $('.images').append(img_content); 
    
            $('.grid').isotope({
                 // options
                 itemSelector: '.grid-item',
                 layoutMode: 'fitRows'
            }); 

             $('.modal').hide();

                $('.grid-item').on('click', showModal);

                 function showModal(e){
                    var targIndex = $(this).index();
                    var modalURL = data.images[targIndex].imageurl;
                   
                    $('.modal-image').attr('src', modalURL);
                    $('.modal').show();
                }
            }//success
      });//ajax
    }

    ajaxRequest(queryWord);
       
    $('.form-search').submit( function(event){
        event.preventDefault();
        var request = $('.form-interest__input').val();
        ajaxRequest(request);
    }); 

    $('.modal-image').on('click', hideModal);

    function hideModal(){
        $('.modal').hide();
    }
    
});