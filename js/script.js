$(function(){
	// $("#jquery-test").html("jQuery is loaded");
    console.log('jQuery is loaded!');

    var $input = $('#results'),
        $form = $('#results_form'),
        random_num = getRandomInt(10, 99);
        $n1 = $('#n1').text(random_num),
        $n2 = $('#n2').text(get_same(random_num));

    function count(n1, n2, val) {
        if(!isNaN(val)){
            return (n1 * n2 === val) ? true : false;
        } else {
            // return 'you\'ve typed not a number';
            // return parseFloat(val);
            return val;
        }
    };

    $form.submit(function(e){
        var results = Number($input.val());
        // console.log(count($n1, $n2, results));
        console.info($n1.text());
        console.warn($n2.text());
        console.error(results);
        if(count($n1.text(), $n2.text(), results)) {
            console.info('good answer');
            var rn = getRandomInt(10, 99),
                rn2 = get_same(rn);
            $n1.text(rn);
            $n2.text(rn2);
            $input.val('');
        } else {
            console.warn('wrong answer');
        }
        // console.log('rn = ' + rn + ' and rn2 = ' + rn2);
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
    
    function get_same(num) {
        var remainder = num % 10;
        return (num - (remainder) + (10 - remainder));
    }

    $input.focus();

});