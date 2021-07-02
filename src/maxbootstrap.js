// @codekit-prepend "clipboard/clipboard.min.js";
// @codekit-prepend "moment/moment-with-locales.js";
// @codekit-prepend "numeral/numeral.min.js";
// @codekit-prepend "cleave.js";


Vue.use(VTooltip);
Vue.use(VeeValidate, { locale: lang});
moment.locale(lang);
Vue.filter("formatDate", function (value) { return moment(value).locale(lang).format('MMM D YYYY'); });
Vue.filter("formatMoney", function (value) { 
  //value = value.replace(/\.00$/,'');
  value = numeral(value).format('0,0.00'); 
  return value.replace(/\.00$/,'');
});

var clipboard = new ClipboardJS('.clipboard');
clipboard.on('success', function(e) {
  //Vue.toasted.show('Copied: '+e.text, {duration: 3000,className: "bg-secondary"});
  e.clearSelection();
});


Vue.directive('cleave', {
  inserted: (el, binding) => {
      el.cleave = new Cleave(el, binding.value || {})
  },
  update: (el) => {
      const event = new Event('input', {bubbles: true});
      setTimeout(function () {
          el.value = el.cleave.properties.result
          el.dispatchEvent(event)
      }, 100);
  }
})



Vue.mixin({
  methods: {
    //v-on:click.prevent="goToUrl('')
    isMobile() {
      var match = document.matchMedia('()pointer:coarse)');
      return (match && match.matches);
    },
    goToUrl(url) {
      window.location.href = url;
    },
    button_submit_form(target_element) {
      var buttons = document.querySelectorAll('.'+target_element);
      buttons.forEach(function(button) {
        button.classList.add("disabled");
        button.innerHTML += " <i class='far fa-circle-notch fa-spin'></i>";
      });
      setTimeout(function() { document.getElementById(target_element).submit(); }, 500);
    },
    button_link_click(element_id) {
      var element = document.getElementById(element_id);
      element.classList.add("disabled");
      element.innerHTML += " <i class='far fa-circle-notch fa-spin'></i>";
      setTimeout(function() { location.href = element.getAttribute("href"); }, 500);
    },
    button_api_click(element_id,api_url) {
      var element = document.getElementById(element_id);
      var text = element.innerHTML;
      element.classList.add("disabled");
      element.innerHTML += " <i class='far fa-circle-notch fa-spin'></i>";
      setTimeout(function() {
        axios.get(api_url)
        .then(response => {
          Vue.toasted.show(response.data, {duration: 8000});
        })
        .catch(error => {
            Vue.toasted.show(error, {duration: 8000,className: "bg-secondary"});
        })
        .finally(function () {
          element.classList.remove("disabled");
          element.innerHTML = text;
        });
      }, 500);
    },
    confirm_button_submit_form(target_element) {
      Vue.toasted.error("Are your sure?", {
        className: "bg-danger",
        icon: "fa-exclamation-triangle",
        action : [
          {
            text : 'Cancel',
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
              return;
            }
          },
          {
            text : 'Continue',
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
              var buttons = document.querySelectorAll('.'+target_element);
              buttons.forEach(function(button) {
                button.classList.add("disabled");
                button.innerHTML += " <i class='far fa-circle-notch fa-spin'></i>";
              });
              setTimeout(function() { document.getElementById(target_element).submit(); }, 500);
            }
          }
        ]
      });
    },
    confirm_button_link_click(element_id) {
      setTimeout(function() { location.href = element.getAttribute("href"); }, 500);
      Vue.toasted.error("Are your sure?", {
        className: "bg-danger",
        icon: "fa-exclamation-triangle",
        action : [
          {
            text : 'Cancel',
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
              return;
            }
          },
          {
            text : 'Continue',
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
              var element = document.getElementById(element_id);
              element.classList.add("disabled");
              element.innerHTML += " <i class='far fa-circle-notch fa-spin'></i>";
              setTimeout(function() { location.href = element.getAttribute("href"); }, 500);
            }
          }
        ]
      });
    },
    preventEnter: function (event) {
      var type = event.target.type;
      var type2 = event.target.tagName;
      if (event.keyCode == 13 && type2 == 'INPUT') {
        //if(type == 'text' || type == 'text') {
        //alert(event.target.type+'  2:'+event.target.id+'  3:'+event.target.parentNode.value+'  4:'+event.target.parentElement.id+'  5:'+event.target.dataset.redactor);
        event.preventDefault();

      } else if ((event.ctrlKey || event.metaKey) && event.which == 83) {
        event.preventDefault();
        var form_id = event.currentTarget.getAttribute('id');
        var buttons = document.querySelectorAll('.'+form_id);
        buttons.forEach(function(button) {
          button.classList.add("disabled");
          button.innerHTML += " <i class='far fa-circle-notch fa-spin'></i>";
        });
        setTimeout(function() { document.getElementById(form_id).submit(); }, 500);
      }
      return false;
    },
    showModal(name) {
      this[name] = true;
      document.querySelector("body").classList.add("body-fix");
    },
    closeModal(name) {
      this[name] = false;
      document.querySelector("body").classList.remove("body-fix");
    },
    tab_switch(target_element,value) {
      this.target_element = value;
      var buttons = document.querySelector('.'+target_element);
      button.classList.add("disabled");
      button.classList.add("opacity-1");
    },
    inputFileChange(element_id,event){
      var fileName =  event.target.files[0];
      document.getElementById(element_id).innerHTML = fileName.name;
   }
  }
})