var calculate = new Vue({
  el: "#app",
  /*Объект data чем-то похож на данные из базы данных*/
  data: {
    sum:"",
    percent:"",
    credite_time:"",
    hideBlock:false,

  },

  computed:{
    /*Computed содержит вычисляемые свойства, т.е. динамически изменяемые значения,например, меняются при изменении свойств в data.
      Вычисляемое свойство credite_calculation выводит результат вычислений*/
    credite_calculation:function(){
      var r = this.percent/100/12;
      var t = r + 1;
      var s = 1;
      for (var i = 0; i < this.credite_time*12;i++){
        s = s*t;
      };
      var p = ((this.sum*r*s)/(s-1)).toFixed(2);
      return p;
    },

    total_free: function(){
      return (this.credite_calculation*(this.credite_time*12)).toFixed(2);
    },

    overpayment: function(){
      return (this.total_free-this.sum).toFixed(2);
    },
    

  },

  methods:{
    /*В methods обычно записываются функции, являющиеся обработчиками событий, например, при клике на кнопку.
      Функция calculation открывает и скрывает кнопку Calculate
      Функция alertView выводит предупреждение о том,что переход по кнопкам невозможен*/
    calculation: function(){
      if (this.hideBlock==true){
        this.hideBlock=false;
      }
      else{
        this.hideBlock=true;
      }
    },

    alertView:function(){
      alert("Извините, но это демо-версия сайта")
    }
  
  }

});