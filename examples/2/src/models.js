

var Animal = Backbone.Model.extend({});

var Zoo = Backbone.Collection.extend({
  model: Animal,

    initialize: function() {
        _.bindAll(this, 'valid');
    },

    valid: function() {
        if (this.length < 5) {
            return false;
        } 

        var i = 0, snake = 0, monkey = 0;

        for (; i < this.length; i++) {
            var m = this.at(i), 
                type = m.get('type');

            if (type === 'snake') {
                snake++;
            } else if (type === 'monkey') {
                monkey++;
            }
        }

        if (snake > 0) {
            return false;
        } else if (monkey > 0) {
            return true;
        } else {
            return false;
        }
    }
});
