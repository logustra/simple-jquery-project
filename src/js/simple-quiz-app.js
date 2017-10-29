( function () {

        this.data = {
            results : []
        };
    
        this.startQuiz = function () {
    
            $('.start-quiz').on('click', function () {
                showPanel(1);
                nextQuestion();
            });
        };
    
        function showPanel(number) {
            $('div[data-panel="'+ (number - 1 ) +'"]').find('.wrapper').animate({
                left: '-=100px',
                opacity: 0,
            }, 300, function () {
                $(this).hide();
                var next = $('div[data-panel="' + number + '"]');
                showNext(next);
            });
            
        }
    
        function showNext(next) {
            var wrapper = next.find('.wrapper');
            wrapper.fadeIn('300', function () {
                showOptions(next);
            });
        }
    
        function showOptions(next) {
            var options = next.find('.options p');
            var counter = 0;
            
            options.each( function (index, current) {
                $(this).delay(counter).animate({
                    opacity: 1
                });
                counter += 400;
            });
    
            options.on('click', function () {
                options.removeClass('active');
                $(this).addClass('active');
                next.addClass('valid');
            });
        }
    
        function nextQuestion () {
            $('.btn-next').on('click', function () {
                var next = $(this).data('next');
                if (validate($(this))) {
                    showPanel(next);
                    storedData(next);
                }
            });
        }

        function validate(panel) {
            var parents = panel.parents().eq(1);
            if (parents.hasClass('valid')) {
                return true;
            } else {
                $('.error').fadeIn('300', function() {
                    $(this).fadeOut();
                });
            }
        }

        function storedData(panel) {
            var answer = $('div[data-panel="'+ (panel - 1) +'"]').find('.options p');
            answer.each( function (index, current) {
                if($(this).hasClass('active')) {
                    data.results.push($(this).text());
                    console.log(data.results);
                }
            });
        }
    
        startQuiz();
    })();