// Ketan: Error on dom
(function(CalcApp, $, undefined){

  // Why not jquery used rather than javascript selector may have browser compatiblity issues
  var keys = document.querySelectorAll('#calculator span');
  var operators = ['+'];

  $(document).ready(function(){
   bindEvent();
  })

  function bindEvent(){
    _bind.bindoperands()
  }

// Ketan: Binding and login should be seperated
  var _bind = {
    bindoperands: function(){
      for(var i=0; i< keys.length; i++){
        keys[i].onclick = function(e) {
          var input = document.querySelector('.result');
          var inputVal = input.innerHTML;
          var btnVal = this.innerHTML;
          if(btnVal == 'C') {
            input.innerHTML = '';
          }
          else if(btnVal == '='){
            var equation = inputVal;
            var lastChar = equation[equation.length - 1];
            if(equation)
              //Ketan: Try to avoid direct eval function if you dont have controll over you expression
              input.innerHTML = eval(equation);
          }
          else {
            input.innerHTML += btnVal;
          }
          //Ketan: This line always should be at top of funtion
          e.preventDefault();
        }
      }
    }
  }

})(window.CalcApp = window.CalcApp || {}, jQuery)

// Ketan Comments:
// 1) Use jQuery binding instead of native javascript
// 2) Right sepearate binding for functionally separate buttons
// 3) Calculator core code should be reusable eg. just call calculate method on click on operands
// and let the calcluate fuction decide what to do next
// 4) Create calculate function as public which internally private method of actual calculation calculation
// 5) Binding should be private
// 6) There will be clear spearation between UI binding and calucate login functions
// 7) Segregate operators and operands functions if possible
