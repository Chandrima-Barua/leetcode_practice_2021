var reverse = function(x) {
    num_string = x.toString();
    to_array = num_string.split('');
    reverse_array = to_array.reverse();
    join_arrya = reverse_array.join('');
    parse_num = parseFloat(join_arrya);
    signed_number = parse_num * Math.sign(x);
    min_range = Math.pow(-2, 31);
    max_range = Math.pow(2, 31) - 1;
    if((signed_number > min_range) && (signed_number < max_range) ){
        return signed_number;
    }
    else{
        return 0;
    }
       
};