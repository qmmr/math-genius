/*
    Author: Marcin Kumorek
*/
$(function(){
    // console.log('yay! jQuery 1.5 is loaded!');

    var $input      = $('#results'),
        $operation  = $('#operation'),
        $n1         = $('#num_one'),
        $n2         = $('#num_two'),
        $content    = $('#content'),
        $form       = $('#results_form'),
        $yresults   = $('#your_results'),
        operation   = null,
        eq_num      = 1
    ;

    /**
    * function checks if arithmetic operation of selected type is correct
    * returns boolean value
    */
    function count(n1, n2, type, val) {
        if(!isNaN(val)) {
            switch(type) {
                case '+':
                    return (n1 + n2 === val) ? true : false;
                    break;
                case '-':
                    return (n1 - n2 === val) ? true : false;
                    break;
                case '*':
                    return (n1 * n2 === val) ? true : false;
                    break;
                case '/':
                    return (n1 * n2 === val) ? true : false;
                    break;
                default:
                    return false;
                    break;
            }
        }
        return false;
    };

    /**
     * when answer is submitted it checks against certain type of arithmetic operation
     * appends answer to ul#your_results
     * and picks new operation
     */
    $form.submit(function(e){
        var results = Number($input.val()),
            n1      = Number($n1.text()),
            n2      = Number($n2.text()),
            li      = $('<li></li>')
        ;
        
        if(count(n1, n2, operation, results)) {
            li.addClass('success')
                .text(eq_num + ') ' + $n1.text()+ ' ' + operation + ' ' + $n2.text() + ' = ' + results)
                .hide()
                .appendTo($yresults)
                .fadeIn(500)
            ;
            pick_numbers('+');
        } else {
            // console.warn('wrong answer');
            li.addClass('error')
                .text(eq_num + ') ' + $n1.text()+ ' ' + operation + ' ' + $n2.text() + ' = ' + results)
                .hide()
                .appendTo($yresults)
                .fadeIn(500)
            ;
            pick_numbers(operation);
        }
        eq_num ++;
        if(eq_num > 10) {
            // alert('that\'s it, you\'re done!');
            $operation.fadeOut(500).addClass('visuallyhidden');
            return false;
        }
        return false;
    });

    /**
     * Returns a random number between min and max
     */
    function getRandomArbitary (min, max) {
        return Math.random() * (max - min) + min;
    }

    /**
     * Returns a random integer between min and max
     * Using Math.round() will give you a non-uniform distribution!
     */
    function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * makes new article, assigns id, creates new operation
     */
    /* function get_new_operation(t) {
        var rn  = getRandomInt(10, 99),
            rn2 = get_same(rn),
            art = $('<article id="op#'+eq_num+'" class="operation"></article>'),
            n1  = $('<h4 class="number"></h4>').text(rn),
            n2  = $('<h4 class="number"></h4>').text(rn2),
            op  = $('<span></span>').text(t)
        ;
        n2.prepend(op);
        art.append(n1).append(n2);
        return art;
    } */

    function get_same(num) {
        var remainder = num % 10;
        return (num - (remainder) + (10 - remainder));
    }

    function pick_numbers() {
        var rn  = getRandomInt(0, 20),
            rn2 = getRandomInt(0, 20);
            // rn2 = get_same(rn);
        $n1.text(rn);
        $n2.text(rn2);
        $input.val('');
    }
    
    operation = '+';
    pick_numbers(operation);
    $input.focus();

});
