(function () {

    var database = [];

    var loadData = function () {
        $.getJSON("movies.json", function (data) {
            database = data;
            init();
        });
    };

    var filterSlider = function () {
        $('.btn-filter').on('click', function () {
            $('.filter-collapse').slideToggle('300');

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('i').attr('class', 'fa fa-arrow-down');
                $(this).find('span').text('filter by');
            } else {
                $(this).addClass('active');
                $(this).find('i').attr('class', 'fa fa-arrow-up');
                $(this).find('span').text('close');
            }
        });
    };

    var getType = function () {
        var types = [];

        $.each(database, function (index, element) {
            if ($.inArray(database[index].type, types) < 0) {
                var typeValue = database[index].type;
                types.push(typeValue);
                $('#categories').append('<option value="' + typeValue + '">' + typeValue + '</option>');
            }
        });
    };

    var getDirector = function () {
        var directors = [];

        $.each(database, function (index, element) {
            if ($.inArray(database[index].director, directors) < 0) {
                var directorValue = database[index].director;
                directors.push(directorValue);
                $('#directors').append('<option value="' + directorValue + '">' + directorValue + '</option>');
            }
        });
    };

    var getItem = function () {

        $.each(database, function (index, element) { 
            var template = '';
        
            template += '<div class="movie-item" data-id="'+ database[index].id +'">';
            template +=     '<div class="left">';
            template +=         '<img src="public/images/'+ database[index].img  +'" alt="movies">';
            template +=     '</div>';
            template +=     '<div class="right">';
            template +=         '<div class="title">';
            template +=             '<h2>'+ database[index].title  +'</h2>';
            template +=         '</div>';
            template +=         ' <div class="information">';
            template +=             '<p><strong>Year : </strong>'+ database[index].year +'</p>';
            template +=             '<p><strong>Director : </strong>'+ database[index].director +'</p>';
            template +=             '<p><strong>Type : </strong>'+ database[index].type +'</p>';
            template +=         '</div>';
            template +=         '<button class="btn btn-description text-uppercase">see description</button>';
            template +=     '</div>';
            template +=     '<div class="description">';
            template +=         '<p><strong>Description : </strong>'+ database[index].description +'</p>';
            template +=     '</div>';
            template += '</div>';

            $('.simple-movies-web .container').append(template);
        });
        
    };

    var showDescription = function () {
        $('.btn-description').on('click', function () {
            var parents = $(this).parents().eq(1);
            var element = parents.find('.description');

            element.slideToggle('300');

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).text('see description');
            } else {
                $(this).addClass('active');
                $(this).text('hide description');
            }
        });
    };

    var startFilter = function () {
        $('select').on('change', function () {
            var type = $('#categories').val();
            var director = $('#directors').val();
            var results = [];

            $.each(database, function (index, element) { 
                if (database[index].type === type) {
                    results.push(database[index].id);
                }
                if (database[index].director === director) {
                   results.push(database[index].id);
               }
           });

           if (results.length < 1) {
                $('.movie-item').show();
           } else {
               var uniqueArray = [];

               $.each(results, function (index, element) { 
                   if($.inArray(element, uniqueArray) < 0) {
                       uniqueArray.push(element);
                   }
               });

               $('.movie-item').hide();
               $.each(uniqueArray, function (index, element) { 
                    $('div[data-id="'+ element +'"]').show();
               });
           }
        });
    };

    var init = function () {
        filterSlider();
        getType();
        getDirector();
        getItem();
        showDescription();
        startFilter();
    };

    loadData();
})();